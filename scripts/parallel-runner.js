#!/usr/bin/env node
/**
 * 并行分析调度器
 *
 * 这个脚本生成用于 Claude Code 的分析指令
 * 支持断点恢复和并行执行
 *
 * 使用:
 *   node parallel-runner.js                  # 生成下一批分析指令
 *   node parallel-runner.js --batch=10       # 指定批次大小
 *   node parallel-runner.js --parallel=5     # 指定并行数
 *   node parallel-runner.js --category=UI    # 只分析特定分类
 *   node parallel-runner.js --resume         # 从断点恢复
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const CONFIG = {
  stateFile: join(__dirname, 'analysis-state.json'),
  queueFile: join(__dirname, 'analysis-queue.json'),
  codeFile: join(projectRoot, 'decompiled/v2.0.62/cli.formatted.js'),
  existingMappings: join(projectRoot, 'tools/deobfuscator/data/existing-mappings.json'),
  newMappings: join(projectRoot, 'decompiled/readable/NEW_MAPPINGS.json'),
  batchSize: 5,
  parallelAgents: 5,
};

// ==================== 队列管理 ====================

class AnalysisQueue {
  constructor() {
    this.queue = this.load();
    this.state = this.loadState();
  }

  load() {
    if (existsSync(CONFIG.queueFile)) {
      return JSON.parse(readFileSync(CONFIG.queueFile, 'utf-8'));
    }
    return { pending: [], inProgress: [], completed: [], failed: [] };
  }

  loadState() {
    if (existsSync(CONFIG.stateFile)) {
      return JSON.parse(readFileSync(CONFIG.stateFile, 'utf-8'));
    }
    return { progress: { analyzed: 0 } };
  }

  save() {
    writeFileSync(CONFIG.queueFile, JSON.stringify(this.queue, null, 2));
  }

  // 初始化队列
  initialize(functions) {
    const mapped = this.getExistingMappedNames();
    const pending = functions
      .filter(f => !mapped.has(f.name))
      .filter(f => !this.queue.completed.includes(f.name))
      .filter(f => !this.queue.failed.some(x => x.name === f.name));

    this.queue.pending = pending;
    this.save();
    return pending.length;
  }

  getExistingMappedNames() {
    const names = new Set();

    if (existsSync(CONFIG.existingMappings)) {
      const mappings = JSON.parse(readFileSync(CONFIG.existingMappings, 'utf-8'));
      mappings.forEach(m => names.add(m.original));
    }

    if (existsSync(CONFIG.newMappings)) {
      const mappings = JSON.parse(readFileSync(CONFIG.newMappings, 'utf-8'));
      mappings.forEach(m => names.add(m.original));
    }

    return names;
  }

  // 获取下一批任务
  getNextBatch(batchSize, parallelAgents) {
    const batches = [];
    const perAgent = batchSize;

    for (let i = 0; i < parallelAgents; i++) {
      const batch = this.queue.pending.splice(0, perAgent);
      if (batch.length === 0) break;

      // 标记为进行中
      batch.forEach(f => {
        this.queue.inProgress.push(f.name);
      });

      batches.push(batch);
    }

    this.save();
    return batches;
  }

  // 标记完成
  markCompleted(funcNames, mappings) {
    funcNames.forEach(name => {
      const idx = this.queue.inProgress.indexOf(name);
      if (idx !== -1) {
        this.queue.inProgress.splice(idx, 1);
      }
      if (!this.queue.completed.includes(name)) {
        this.queue.completed.push(name);
      }
    });
    this.save();
  }

  // 标记失败
  markFailed(funcName, error) {
    const idx = this.queue.inProgress.indexOf(funcName);
    if (idx !== -1) {
      this.queue.inProgress.splice(idx, 1);
    }
    this.queue.failed.push({ name: funcName, error, time: new Date().toISOString() });
    this.save();
  }

  // 恢复中断的任务
  recoverInProgress() {
    // 将 inProgress 的任务放回 pending 队头
    const toRecover = this.queue.inProgress.splice(0);
    this.queue.pending.unshift(...toRecover.map(name => ({ name, recovered: true })));
    this.save();
    return toRecover.length;
  }

  getStats() {
    return {
      pending: this.queue.pending.length,
      inProgress: this.queue.inProgress.length,
      completed: this.queue.completed.length,
      failed: this.queue.failed.length,
      total: this.queue.pending.length + this.queue.inProgress.length +
             this.queue.completed.length + this.queue.failed.length,
    };
  }
}

// ==================== 指令生成 ====================

function generatePrompt(batch, batchIndex) {
  const funcNames = batch.map(f => f.name).join(', ');
  const funcList = batch.map(f => `- ${f.name}`).join('\n');

  return `你是 JavaScript 代码分析专家。分析以下 Claude Code CLI 中的混淆函数，推断它们的原始名称。

代码文件: /Users/lifcc/Desktop/code/AI/agent/open-claude-code/decompiled/v2.0.62/cli.formatted.js

## 待分析函数 (批次 ${batchIndex + 1})
${funcList}

## 分析步骤
1. 使用 Grep 搜索每个函数的定义和使用
2. 分析函数体、参数、返回值
3. 查看调用上下文推断功能

## 输出格式
只输出 JSON 数组，不要其他内容:
[
  {"original": "函数名", "inferred": "推断名", "confidence": 0.9, "reason": "推断理由"}
]`;
}

function generateClaudeCodeInstructions(batches) {
  const instructions = [];

  instructions.push('# Claude Code 并行分析指令\n');
  instructions.push('复制以下内容到 Claude Code 中执行:\n');
  instructions.push('```');

  // 生成并行 Task 调用
  instructions.push('请并行启动以下分析任务:\n');

  batches.forEach((batch, i) => {
    instructions.push(`## 任务 ${i + 1}`);
    instructions.push(`分析函数: ${batch.map(f => f.name).join(', ')}`);
    instructions.push('');
  });

  instructions.push('```\n');

  // 生成完整的分析指令
  instructions.push('## 详细指令\n');
  instructions.push('使用 Task 工具并行分析以下批次:\n');

  batches.forEach((batch, i) => {
    instructions.push(`### 批次 ${i + 1}`);
    instructions.push('```');
    instructions.push(generatePrompt(batch, i));
    instructions.push('```\n');
  });

  return instructions.join('\n');
}

// ==================== 主程序 ====================

async function main() {
  const args = process.argv.slice(2);
  const options = {};

  args.forEach(arg => {
    const [key, value] = arg.replace('--', '').split('=');
    options[key] = value || true;
  });

  const batchSize = parseInt(options.batch) || CONFIG.batchSize;
  const parallelAgents = parseInt(options.parallel) || CONFIG.parallelAgents;

  console.log('\n' + '═'.repeat(60));
  console.log('  Claude Code 并行分析调度器');
  console.log('═'.repeat(60) + '\n');

  const queue = new AnalysisQueue();

  // 恢复模式
  if (options.resume) {
    const recovered = queue.recoverInProgress();
    console.log(`已恢复 ${recovered} 个中断的任务`);
  }

  // 如果队列为空，初始化
  if (queue.queue.pending.length === 0 && queue.queue.inProgress.length === 0) {
    console.log('初始化队列...');

    // 提取所有函数
    const code = readFileSync(CONFIG.codeFile, 'utf-8');
    const functions = [];
    const pattern = /function\s+([a-zA-Z_$][\w$]{1,4})\s*\(/g;
    let match;

    while ((match = pattern.exec(code)) !== null) {
      const name = match[1];
      if (name.length >= 2 && name.length <= 4) {
        const lineNum = code.slice(0, match.index).split('\n').length;
        functions.push({ name, lineNum });
      }
    }

    // 去重
    const uniqueFuncs = [];
    const seen = new Set();
    functions.forEach(f => {
      if (!seen.has(f.name)) {
        seen.add(f.name);
        uniqueFuncs.push(f);
      }
    });

    const count = queue.initialize(uniqueFuncs);
    console.log(`队列已初始化，共 ${count} 个待分析函数`);
  }

  // 显示统计
  const stats = queue.getStats();
  console.log('\n当前状态:');
  console.log(`  待分析: ${stats.pending}`);
  console.log(`  进行中: ${stats.inProgress}`);
  console.log(`  已完成: ${stats.completed}`);
  console.log(`  失败: ${stats.failed}`);
  console.log(`  进度: ${((stats.completed / stats.total) * 100).toFixed(1)}%`);

  // 获取下一批
  if (stats.pending > 0) {
    const batches = queue.getNextBatch(batchSize, parallelAgents);

    console.log(`\n准备分析 ${batches.length} 批，每批 ${batchSize} 个函数`);

    // 生成指令
    const instructions = generateClaudeCodeInstructions(batches);

    // 保存指令
    const instructionPath = join(__dirname, 'next-batch-instructions.md');
    writeFileSync(instructionPath, instructions);
    console.log(`\n指令已保存: ${instructionPath}`);

    // 打印指令预览
    console.log('\n' + '─'.repeat(60));
    console.log('下一批分析任务:');
    console.log('─'.repeat(60));

    batches.forEach((batch, i) => {
      console.log(`批次 ${i + 1}: ${batch.map(f => f.name).join(', ')}`);
    });

    console.log('\n运行以下命令查看完整指令:');
    console.log(`  cat ${instructionPath}`);
  } else {
    console.log('\n所有函数已分析完成！');
  }
}

main().catch(console.error);

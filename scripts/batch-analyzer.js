#!/usr/bin/env node
/**
 * 批量并行函数分析器
 *
 * 特性:
 * - 断点恢复: 自动保存进度，中断后可继续
 * - 并行分析: 同时运行多个分析任务
 * - 增量更新: 版本更新时只分析新增/变更的函数
 * - 优先级队列: 高价值模块优先分析
 *
 * 使用:
 *   node batch-analyzer.js              # 开始/继续分析
 *   node batch-analyzer.js --reset      # 重置状态重新开始
 *   node batch-analyzer.js --status     # 查看当前状态
 *   node batch-analyzer.js --export     # 导出分析结果
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// ==================== 配置 ====================
const CONFIG = {
  // 文件路径
  stateFile: join(__dirname, 'analysis-state.json'),
  codeFile: join(projectRoot, 'decompiled/v2.0.62/cli.formatted.js'),
  existingMappings: join(projectRoot, 'tools/deobfuscator/data/existing-mappings.json'),
  newMappings: join(projectRoot, 'decompiled/readable/NEW_MAPPINGS.json'),
  outputDir: join(projectRoot, 'decompiled/readable'),

  // 分析参数
  batchSize: 10,           // 每批分析的函数数
  parallelAgents: 5,       // 并行 agent 数量
  checkpointInterval: 50,  // 每50个函数保存一次断点
  minConfidence: 0.8,      // 最低置信度阈值
  maxRetries: 3,           // 最大重试次数

  // 优先级模块 (正则 -> 优先级 1-5，1最高)
  priorityPatterns: [
    { pattern: /render|Render|Message/, priority: 1, category: 'UI-Rendering' },
    { pattern: /permission|Permission|allow|Allow/, priority: 1, category: 'Permission' },
    { pattern: /tool|Tool/, priority: 2, category: 'Tools' },
    { pattern: /agent|Agent|spawn|Spawn/, priority: 2, category: 'Agents' },
    { pattern: /auth|Auth|oauth|OAuth|token|Token/, priority: 3, category: 'Auth' },
    { pattern: /mcp|MCP|server|Server/, priority: 3, category: 'MCP' },
    { pattern: /git|Git|commit|Commit/, priority: 4, category: 'Git' },
    { pattern: /file|File|read|Read|write|Write/, priority: 4, category: 'FileOps' },
    { pattern: /config|Config|setting|Setting/, priority: 5, category: 'Config' },
  ],

  // 跳过的模式
  skipPatterns: [
    /^[a-zA-Z]$/,           // 单字符
    /^\$\d+$/,              // $0, $1 等
    /^_tree_sitter/,        // tree-sitter 内部
    /^_fd_|^_clock_/,       // WASM 内部
  ],
};

// ==================== 状态管理 ====================

class AnalysisState {
  constructor() {
    this.state = this.load();
  }

  load() {
    if (existsSync(CONFIG.stateFile)) {
      return JSON.parse(readFileSync(CONFIG.stateFile, 'utf-8'));
    }
    return this.createInitialState();
  }

  createInitialState() {
    return {
      version: this.detectVersion(),
      codeHash: this.computeCodeHash(),
      lastUpdated: new Date().toISOString(),
      status: 'initialized',
      progress: {
        totalFunctions: 0,
        analyzed: 0,
        remaining: 0,
        currentBatch: 0,
        lastCheckpoint: null,
      },
      queue: [],
      completed: [],
      failed: [],
      mappings: [],
    };
  }

  detectVersion() {
    // 从路径中提取版本号
    const match = CONFIG.codeFile.match(/v(\d+\.\d+\.\d+)/);
    return match ? match[1] : 'unknown';
  }

  computeCodeHash() {
    if (!existsSync(CONFIG.codeFile)) return null;
    const content = readFileSync(CONFIG.codeFile, 'utf-8');
    return createHash('md5').update(content).digest('hex').slice(0, 16);
  }

  save() {
    this.state.lastUpdated = new Date().toISOString();
    writeFileSync(CONFIG.stateFile, JSON.stringify(this.state, null, 2));
  }

  reset() {
    this.state = this.createInitialState();
    this.save();
  }

  // 检查代码是否有更新
  hasCodeChanged() {
    const currentHash = this.computeCodeHash();
    return currentHash !== this.state.codeHash;
  }

  // 更新进度
  updateProgress(analyzed, remaining) {
    this.state.progress.analyzed = analyzed;
    this.state.progress.remaining = remaining;
    this.state.progress.currentBatch++;
  }

  // 添加已完成的映射
  addCompletedMapping(mapping) {
    this.state.completed.push(mapping.original);
    this.state.mappings.push(mapping);
  }

  // 标记失败
  addFailed(funcName, error) {
    this.state.failed.push({ name: funcName, error, timestamp: new Date().toISOString() });
  }

  // 设置检查点
  checkpoint() {
    this.state.progress.lastCheckpoint = new Date().toISOString();
    this.save();
    console.log(`[Checkpoint] 已保存进度: ${this.state.progress.analyzed} 个函数已分析`);
  }
}

// ==================== 函数提取器 ====================

class FunctionExtractor {
  constructor(code) {
    this.code = code;
    this.lines = code.split('\n');
  }

  extractAll() {
    const functions = new Map();

    // 匹配 function name() 和 var name = function
    const patterns = [
      /function\s+([a-zA-Z_$][\w$]*)\s*\(/g,
      /var\s+([a-zA-Z_$][\w$]*)\s*=\s*function\s*\(/g,
      /var\s+([a-zA-Z_$][\w$]*)\s*=\s*\([^)]*\)\s*=>/g,
      /var\s+([a-zA-Z_$][\w$]*)\s*=\s*async\s*\([^)]*\)\s*=>/g,
    ];

    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(this.code)) !== null) {
        const name = match[1];
        if (!functions.has(name) && !this.shouldSkip(name)) {
          const lineNum = this.code.slice(0, match.index).split('\n').length;
          const context = this.getContext(lineNum, 30);

          functions.set(name, {
            name,
            lineNum,
            context,
            priority: this.getPriority(name, context),
            category: this.getCategory(name, context),
          });
        }
      }
    }

    return Array.from(functions.values());
  }

  shouldSkip(name) {
    return CONFIG.skipPatterns.some(p => p.test(name));
  }

  getPriority(name, context) {
    for (const { pattern, priority } of CONFIG.priorityPatterns) {
      if (pattern.test(name) || pattern.test(context)) {
        return priority;
      }
    }
    return 10; // 默认最低优先级
  }

  getCategory(name, context) {
    for (const { pattern, category } of CONFIG.priorityPatterns) {
      if (pattern.test(name) || pattern.test(context)) {
        return category;
      }
    }
    return 'Other';
  }

  getContext(lineNum, contextLines = 30) {
    const start = Math.max(0, lineNum - 3);
    const end = Math.min(this.lines.length, lineNum + contextLines);
    return this.lines.slice(start, end).join('\n');
  }
}

// ==================== 增量分析 ====================

class IncrementalAnalyzer {
  constructor(state) {
    this.state = state;
  }

  // 获取待分析的函数队列
  buildQueue(allFunctions, existingMappings) {
    const mapped = new Set(existingMappings.map(m => m.original));
    const completed = new Set(this.state.state.completed);

    // 过滤出未分析的
    const pending = allFunctions.filter(f =>
      !mapped.has(f.name) && !completed.has(f.name)
    );

    // 按优先级排序
    pending.sort((a, b) => a.priority - b.priority);

    return pending;
  }

  // 检测新版本中的变更
  detectChanges(oldVersion, newVersion) {
    // TODO: 对比两个版本的代码差异
    // 返回 { added: [], modified: [], removed: [] }
    return { added: [], modified: [], removed: [] };
  }
}

// ==================== 主程序 ====================

async function main() {
  const args = process.argv.slice(2);

  console.log('\n' + '═'.repeat(60));
  console.log('  Claude Code 批量函数分析器');
  console.log('═'.repeat(60) + '\n');

  const state = new AnalysisState();

  // 命令处理
  if (args.includes('--reset')) {
    state.reset();
    console.log('状态已重置');
    return;
  }

  if (args.includes('--status')) {
    console.log('当前状态:');
    console.log(JSON.stringify(state.state.progress, null, 2));
    console.log(`\n队列中: ${state.state.queue?.length || 0} 个`);
    console.log(`已完成: ${state.state.completed?.length || 0} 个`);
    console.log(`失败: ${state.state.failed?.length || 0} 个`);
    return;
  }

  if (args.includes('--export')) {
    exportResults(state);
    return;
  }

  // 检查代码是否更新
  if (state.hasCodeChanged()) {
    console.log('⚠️  检测到代码已更新，需要增量分析新变更');
    // TODO: 实现增量分析
  }

  // 加载代码
  console.log('加载代码...');
  const code = readFileSync(CONFIG.codeFile, 'utf-8');
  const extractor = new FunctionExtractor(code);
  const allFunctions = extractor.extractAll();
  console.log(`  找到 ${allFunctions.length} 个函数`);

  // 加载已有映射
  const existingMappings = existsSync(CONFIG.existingMappings)
    ? JSON.parse(readFileSync(CONFIG.existingMappings, 'utf-8'))
    : [];
  const newMappings = existsSync(CONFIG.newMappings)
    ? JSON.parse(readFileSync(CONFIG.newMappings, 'utf-8'))
    : [];
  const allMappings = [...existingMappings, ...newMappings];
  console.log(`  已有映射: ${allMappings.length} 个`);

  // 构建分析队列
  const analyzer = new IncrementalAnalyzer(state);
  const queue = analyzer.buildQueue(allFunctions, allMappings);
  console.log(`  待分析: ${queue.length} 个`);

  // 按分类统计
  const categoryStats = {};
  queue.forEach(f => {
    categoryStats[f.category] = (categoryStats[f.category] || 0) + 1;
  });
  console.log('\n分类统计:');
  Object.entries(categoryStats)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count}`);
    });

  // 更新状态
  state.state.queue = queue.map(f => f.name);
  state.state.progress.totalFunctions = allFunctions.length;
  state.state.progress.remaining = queue.length;
  state.state.status = 'ready';
  state.save();

  console.log('\n准备就绪。使用 Claude Code Task 工具进行分析。');
  console.log('运行命令: node batch-analyzer.js --run');
}

function exportResults(state) {
  const output = {
    version: state.state.version,
    exportTime: new Date().toISOString(),
    stats: {
      total: state.state.progress.totalFunctions,
      analyzed: state.state.completed.length,
      failed: state.state.failed.length,
    },
    mappings: state.state.mappings,
  };

  const exportPath = join(CONFIG.outputDir, `analysis-export-${Date.now()}.json`);
  writeFileSync(exportPath, JSON.stringify(output, null, 2));
  console.log(`导出完成: ${exportPath}`);
}

// 运行
main().catch(console.error);

#!/usr/bin/env node
/**
 * 变量推断分析脚本 - 使用 Claude Code SDK
 *
 * 直接运行，无需 API Key
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// ==================== 配置 ====================
const CONFIG = {
  // 输入文件
  codeFile: 'decompiled/v2.0.62/cli.formatted.js',
  mappingsFile: 'tools/deobfuscator/data/existing-mappings.json',

  // 输出目录
  outputDir: 'decompiled/readable',

  // 分析配置
  maxFunctionsToAnalyze: 50,  // 每次分析的函数数量
  batchSize: 5,               // 每批 LLM 分析的函数数
  contextLines: 25,           // 每个函数的上下文行数
};

// ==================== 工具函数 ====================

function hash(str) {
  return createHash('md5').update(str).digest('hex').slice(0, 8);
}

function log(msg) {
  console.log(`[${new Date().toISOString().slice(11, 19)}] ${msg}`);
}

// ==================== 代码分析器 ====================

class CodeAnalyzer {
  constructor(code) {
    this.code = code;
    this.lines = code.split('\n');
    this.functions = new Map();
  }

  extractFunctions() {
    log('提取函数定义...');

    const patterns = [
      /function\s+([a-zA-Z_$][\w$]*)\s*\(([^)]*)\)/g,
      /var\s+([a-zA-Z_$][\w$]*)\s*=\s*function\s*\(([^)]*)\)/g,
      /var\s+([a-zA-Z_$][\w$]*)\s*=\s*\(([^)]*)\)\s*=>/g,
      /var\s+([a-zA-Z_$][\w$]*)\s*=\s*async\s*\(([^)]*)\)\s*=>/g,
    ];

    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(this.code)) !== null) {
        const name = match[1];
        const params = match[2] || '';

        // 跳过短名称（1-2字符）
        if (name.length <= 2) continue;

        // 获取行号
        const lineNum = this.code.slice(0, match.index).split('\n').length - 1;

        // 获取上下文
        const startLine = Math.max(0, lineNum - 2);
        const endLine = Math.min(this.lines.length, lineNum + CONFIG.contextLines);
        const context = this.lines.slice(startLine, endLine).join('\n');

        // 提取函数体特征
        const features = this.extractFeatures(context);

        if (!this.functions.has(name)) {
          this.functions.set(name, {
            name,
            params,
            lineNum: lineNum + 1,
            context,
            features,
          });
        }
      }
    }

    log(`  找到 ${this.functions.size} 个函数`);
    return this.functions;
  }

  extractFeatures(context) {
    return {
      hasAsync: /\basync\b/.test(context),
      hasAwait: /\bawait\b/.test(context),
      hasReturn: /\breturn\b/.test(context),
      hasIf: /\bif\s*\(/.test(context),
      hasFor: /\bfor\s*\(/.test(context),
      hasTry: /\btry\s*\{/.test(context),
      hasThrow: /\bthrow\b/.test(context),
      returnType: this.inferReturnType(context),
      lineCount: context.split('\n').length,
    };
  }

  inferReturnType(context) {
    if (/return\s+true|return\s+false/.test(context)) return 'boolean';
    if (/return\s+["'`]/.test(context)) return 'string';
    if (/return\s+\d+/.test(context)) return 'number';
    if (/return\s+\[/.test(context)) return 'array';
    if (/return\s+\{/.test(context)) return 'object';
    if (/return\s+new\s+Promise/.test(context)) return 'promise';
    return 'unknown';
  }

  getUnknownFunctions(existingMappings) {
    const known = new Set(existingMappings.map(m => m.original));
    const unknown = [];

    for (const [name, func] of this.functions) {
      if (!known.has(name) && !this.isLikelyReadable(name)) {
        unknown.push(func);
      }
    }

    // 按代码量排序（优先分析较大的函数）
    unknown.sort((a, b) => b.features.lineCount - a.features.lineCount);

    return unknown;
  }

  isLikelyReadable(name) {
    // 如果名字已经看起来是可读的
    if (name.length > 20) return true;
    if (/^(get|set|is|has|create|handle|process|render|fetch|load|save|parse|format|validate)/.test(name)) return true;
    if (/[A-Z].*[a-z].*[A-Z]/.test(name)) return true; // camelCase with multiple humps
    return false;
  }
}

// ==================== LLM 分析器 ====================

class LLMAnalyzer {
  constructor() {
    this.stats = {
      apiCalls: 0,
      inferences: 0,
      errors: 0,
    };
  }

  async analyzeBatch(functions, existingMappings) {
    const examples = existingMappings
      .filter(m => m.confidence >= 0.9)
      .slice(0, 15)
      .map(m => `  ${m.original} → ${m.readable}`)
      .join('\n');

    const funcList = functions.map((f, i) => {
      const features = [];
      if (f.features.hasAsync) features.push('async');
      if (f.features.hasAwait) features.push('uses await');
      if (f.features.hasTry) features.push('has try-catch');
      if (f.features.returnType !== 'unknown') features.push(`returns ${f.features.returnType}`);

      return `${i + 1}. 函数名: \`${f.name}\`
   参数: (${f.params})
   特征: ${features.join(', ') || '无特殊特征'}
   代码:
\`\`\`javascript
${f.context.slice(0, 600)}
\`\`\``;
    }).join('\n\n');

    const prompt = `你是 JavaScript 代码分析专家。分析以下混淆的 Claude Code CLI 函数，推断它们的原始名称。

## 已知映射示例
${examples}

## 待分析函数
${funcList}

## 要求
1. 基于函数的功能、参数、返回值推断名称
2. 遵循 JavaScript 命名规范 (camelCase 或 UPPER_SNAKE_CASE)
3. 只输出高置信度的推断

## 输出格式
只输出 JSON 数组，不要其他内容：
[
  {"original": "原函数名", "inferred": "推断名", "confidence": 0.8, "reason": "推断理由"}
]`;

    try {
      const { query } = await import('@anthropic-ai/claude-agent-sdk');
      let responseText = '';

      const stream = query({
        prompt,
        options: {
          maxTurns: 1,
          systemPrompt: '你是代码分析专家。只输出 JSON，不要任何其他文字或解释。',
        },
      });

      for await (const message of stream) {
        if (message.type === 'assistant') {
          for (const block of message.message.content) {
            if (block.type === 'text') {
              responseText += block.text;
            }
          }
        }
      }

      this.stats.apiCalls++;
      return this.parseResponse(responseText, functions);
    } catch (error) {
      this.stats.errors++;
      log(`  LLM 错误: ${error.message}`);
      return [];
    }
  }

  parseResponse(content, functions) {
    const inferences = [];

    try {
      // 提取 JSON
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (!jsonMatch) {
        log('  无法解析 JSON 响应');
        return inferences;
      }

      const parsed = JSON.parse(jsonMatch[0]);

      for (const item of parsed) {
        if (!item.original || !item.inferred) continue;

        // 验证原函数名存在于批次中
        const func = functions.find(f => f.name === item.original);
        if (!func) continue;

        // 验证置信度
        const confidence = Math.min(item.confidence || 0.7, 0.90);
        if (confidence < 0.5) continue;

        inferences.push({
          original: item.original,
          readable: item.inferred,
          confidence,
          source: 'llm-inference',
          reason: item.reason || '',
          lineNum: func.lineNum,
        });

        this.stats.inferences++;
      }
    } catch (error) {
      log(`  JSON 解析错误: ${error.message}`);
    }

    return inferences;
  }

  getStats() {
    return { ...this.stats };
  }
}

// ==================== 主流程 ====================

async function main() {
  console.log('\n' + '═'.repeat(60));
  console.log('  Claude Code 变量推断分析');
  console.log('  使用 Claude Code SDK');
  console.log('═'.repeat(60) + '\n');

  const startTime = Date.now();

  // 1. 加载数据
  log('加载数据...');

  const codePath = resolve(projectRoot, CONFIG.codeFile);
  const mappingsPath = resolve(projectRoot, CONFIG.mappingsFile);

  if (!existsSync(codePath)) {
    console.error(`错误: 代码文件不存在: ${codePath}`);
    process.exit(1);
  }

  const code = readFileSync(codePath, 'utf-8');
  const existingMappings = existsSync(mappingsPath)
    ? JSON.parse(readFileSync(mappingsPath, 'utf-8'))
    : [];

  log(`  代码: ${(code.length / 1024 / 1024).toFixed(2)} MB`);
  log(`  已有映射: ${existingMappings.length} 个`);

  // 2. 分析代码
  log('\n分析代码结构...');
  const analyzer = new CodeAnalyzer(code);
  analyzer.extractFunctions();

  const unknownFunctions = analyzer.getUnknownFunctions(existingMappings);
  log(`  未知函数: ${unknownFunctions.length} 个`);

  // 3. LLM 分析
  log('\n开始 LLM 分析...');
  const llmAnalyzer = new LLMAnalyzer();
  const newMappings = [];

  const toAnalyze = unknownFunctions.slice(0, CONFIG.maxFunctionsToAnalyze);
  log(`  将分析前 ${toAnalyze.length} 个函数`);

  // 分批处理
  for (let i = 0; i < toAnalyze.length; i += CONFIG.batchSize) {
    const batch = toAnalyze.slice(i, i + CONFIG.batchSize);
    const batchNum = Math.floor(i / CONFIG.batchSize) + 1;
    const totalBatches = Math.ceil(toAnalyze.length / CONFIG.batchSize);

    log(`  批次 ${batchNum}/${totalBatches}: 分析 ${batch.length} 个函数...`);

    const inferences = await llmAnalyzer.analyzeBatch(batch, existingMappings);
    newMappings.push(...inferences);

    log(`    推断了 ${inferences.length} 个变量名`);

    // 短暂延迟避免过快请求
    if (i + CONFIG.batchSize < toAnalyze.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  // 4. 合并结果
  log('\n合并结果...');
  const allMappings = [...existingMappings];

  for (const m of newMappings) {
    // 检查是否已存在
    if (!allMappings.some(em => em.original === m.original)) {
      allMappings.push(m);
    }
  }

  log(`  新增: ${newMappings.length} 个`);
  log(`  总计: ${allMappings.length} 个`);

  // 5. 保存结果
  log('\n保存结果...');
  const outputDir = resolve(projectRoot, CONFIG.outputDir);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  // 保存 JSON
  const jsonPath = join(outputDir, 'NEW_MAPPINGS.json');
  writeFileSync(jsonPath, JSON.stringify(newMappings, null, 2));
  log(`  ${jsonPath}`);

  // 保存合并后的映射
  const allJsonPath = join(outputDir, 'ALL_MAPPINGS.json');
  writeFileSync(allJsonPath, JSON.stringify(allMappings, null, 2));
  log(`  ${allJsonPath}`);

  // 保存 Markdown 报告
  const mdContent = generateReport(newMappings, llmAnalyzer.getStats(), startTime);
  const mdPath = join(outputDir, 'ANALYSIS_RESULT.md');
  writeFileSync(mdPath, mdContent);
  log(`  ${mdPath}`);

  // 6. 打印统计
  const stats = llmAnalyzer.getStats();
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);

  console.log('\n' + '═'.repeat(60));
  console.log('  分析完成');
  console.log('═'.repeat(60));
  console.log(`  耗时: ${duration} 秒`);
  console.log(`  API 调用: ${stats.apiCalls} 次`);
  console.log(`  新推断: ${stats.inferences} 个`);
  console.log(`  错误: ${stats.errors} 个`);
  console.log();

  // 打印新映射预览
  if (newMappings.length > 0) {
    console.log('  新映射预览 (前10个):');
    for (const m of newMappings.slice(0, 10)) {
      console.log(`    ${m.original} → ${m.readable} (${(m.confidence * 100).toFixed(0)}%)`);
    }
    if (newMappings.length > 10) {
      console.log(`    ... 还有 ${newMappings.length - 10} 个`);
    }
  }

  console.log('═'.repeat(60) + '\n');
}

function generateReport(mappings, stats, startTime) {
  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  const highConf = mappings.filter(m => m.confidence >= 0.8).length;
  const medConf = mappings.filter(m => m.confidence >= 0.6 && m.confidence < 0.8).length;

  return `# 变量推断分析结果

## 执行信息
- 时间: ${new Date().toISOString()}
- 耗时: ${duration} 秒
- API 调用: ${stats.apiCalls} 次

## 统计
- 新推断: ${mappings.length} 个
- 高置信度 (80%+): ${highConf} 个
- 中置信度 (60-79%): ${medConf} 个

## 新映射列表

| 原名 | 推断名 | 置信度 | 行号 | 理由 |
|------|--------|--------|------|------|
${mappings.map(m =>
  `| \`${m.original}\` | \`${m.readable}\` | ${(m.confidence * 100).toFixed(0)}% | ${m.lineNum || '-'} | ${m.reason || '-'} |`
).join('\n')}

---
*由 Claude Code SDK 生成*
`;
}

// 运行
main().catch(error => {
  console.error('执行错误:', error);
  process.exit(1);
});

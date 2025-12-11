#!/usr/bin/env node
/**
 * Claude Code 反混淆完整流水线
 *
 * 一次性执行所有分析步骤：
 * 1. 静态分析 - 字符串/数值常量匹配
 * 2. 模式识别 - AST模式匹配
 * 3. LLM推断 - 批量并行分析
 * 4. 代码转换 - 变量替换
 * 5. 质量验证 - 结果检查
 * 6. 报告生成 - 统计输出
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import config from './pipeline.config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// ==================== 工具类 ====================

class Logger {
  constructor(level = 'info') {
    this.levels = { debug: 0, info: 1, warn: 2, error: 3 };
    this.level = this.levels[level] || 1;
    this.startTime = Date.now();
  }

  _log(level, emoji, ...args) {
    if (this.levels[level] >= this.level) {
      const elapsed = ((Date.now() - this.startTime) / 1000).toFixed(1);
      console.log(`[${elapsed}s] ${emoji}`, ...args);
    }
  }

  debug(...args) { this._log('debug', '🔍', ...args); }
  info(...args) { this._log('info', '📌', ...args); }
  success(...args) { this._log('info', '✅', ...args); }
  warn(...args) { this._log('warn', '⚠️', ...args); }
  error(...args) { this._log('error', '❌', ...args); }
  step(num, total, msg) { this._log('info', `[${num}/${total}]`, msg); }
}

class ProgressBar {
  constructor(total, width = 40) {
    this.total = total;
    this.current = 0;
    this.width = width;
  }

  update(current, extra = '') {
    this.current = current;
    const percent = Math.round((current / this.total) * 100);
    const filled = Math.round((current / this.total) * this.width);
    const bar = '█'.repeat(filled) + '░'.repeat(this.width - filled);
    process.stdout.write(`\r  [${bar}] ${percent}% (${current}/${this.total}) ${extra}`);
    if (current === this.total) console.log();
  }
}

class CheckpointManager {
  constructor(dir) {
    this.dir = resolve(projectRoot, dir);
    if (!existsSync(this.dir)) {
      mkdirSync(this.dir, { recursive: true });
    }
  }

  save(name, data) {
    const path = join(this.dir, `${name}.json`);
    writeFileSync(path, JSON.stringify(data, null, 2));
  }

  load(name) {
    const path = join(this.dir, `${name}.json`);
    if (existsSync(path)) {
      return JSON.parse(readFileSync(path, 'utf-8'));
    }
    return null;
  }

  exists(name) {
    return existsSync(join(this.dir, `${name}.json`));
  }

  clear() {
    const files = readdirSync(this.dir);
    for (const file of files) {
      if (file.endsWith('.json')) {
        require('fs').unlinkSync(join(this.dir, file));
      }
    }
  }
}

// ==================== 分析器类 ====================

class MappingStore {
  constructor() {
    this.mappings = new Map();
    this.sources = new Map();
  }

  add(original, readable, confidence, source, context = '') {
    if (this.mappings.has(original)) {
      const existing = this.mappings.get(original);
      if (existing.confidence >= confidence) return false;
    }
    this.mappings.set(original, { readable, confidence, source, context });
    return true;
  }

  has(original) {
    return this.mappings.has(original);
  }

  get(original) {
    return this.mappings.get(original);
  }

  getAll() {
    const result = [];
    for (const [original, data] of this.mappings) {
      result.push({ original, ...data });
    }
    return result.sort((a, b) => b.confidence - a.confidence);
  }

  size() {
    return this.mappings.size;
  }

  loadFromArray(arr) {
    for (const item of arr) {
      this.add(item.original, item.readable, item.confidence || 0.9, item.source || 'existing');
    }
  }

  toJSON() {
    return this.getAll();
  }

  stats() {
    const s = { total: 0, high: 0, medium: 0, low: 0, bySouce: {} };
    for (const [, data] of this.mappings) {
      s.total++;
      if (data.confidence >= 0.9) s.high++;
      else if (data.confidence >= 0.7) s.medium++;
      else s.low++;
      s.bySouce[data.source] = (s.bySouce[data.source] || 0) + 1;
    }
    return s;
  }
}

class StaticAnalyzer {
  constructor(cfg) {
    this.config = cfg;
  }

  analyze(code, store) {
    const inferences = [];

    // 字符串常量分析
    for (const category of Object.values(this.config.stringPatterns)) {
      for (const rule of category) {
        const regex = new RegExp(`var\\s+([a-zA-Z_$][\\w$]*)\\s*=\\s*["']${this.escapeRegex(rule.value)}["']`, 'g');
        let match;
        while ((match = regex.exec(code)) !== null) {
          const varName = match[1];
          if (!store.has(varName)) {
            inferences.push({
              original: varName,
              readable: rule.name,
              confidence: rule.confidence,
              source: 'static-string',
              context: `var ${varName} = "${rule.value}"`,
            });
          }
        }
      }
    }

    // 数值常量分析
    for (const rule of this.config.numberPatterns) {
      const regex = new RegExp(`var\\s+([a-zA-Z_$][\\w$]*)\\s*=\\s*${rule.value}\\b`, 'g');
      let match;
      while ((match = regex.exec(code)) !== null) {
        const varName = match[1];
        if (!store.has(varName)) {
          inferences.push({
            original: varName,
            readable: rule.name,
            confidence: rule.confidence,
            source: 'static-number',
            context: `var ${varName} = ${rule.value}`,
          });
        }
      }
    }

    return inferences;
  }

  escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

class PatternRecognizer {
  constructor(cfg) {
    this.config = cfg;
  }

  recognize(code, store) {
    const inferences = [];

    for (const pattern of this.config.patterns) {
      const regex = new RegExp(pattern.regex.source, 'g');
      let match;
      while ((match = regex.exec(code)) !== null) {
        const varName = match[1];
        if (!store.has(varName) && varName.length > 2) {
          const readable = pattern.nameTransform(match[1], match[2]);
          inferences.push({
            original: varName,
            readable,
            confidence: pattern.confidence,
            source: `pattern-${pattern.name}`,
            context: match[0].slice(0, 100),
          });
        }
      }
    }

    return inferences;
  }
}

class LLMAnalyzer {
  constructor(cfg, logger, checkpoint) {
    this.config = cfg;
    this.logger = logger;
    this.checkpoint = checkpoint;
    this.stats = { apiCalls: 0, inferences: 0, errors: 0 };
  }

  async analyze(code, store) {
    const functions = this.extractFunctions(code, store);
    this.logger.info(`发现 ${functions.length} 个未知函数`);

    // 按优先级排序
    this.prioritizeFunctions(functions);

    const toAnalyze = functions.slice(0, this.config.maxFunctions);
    this.logger.info(`将分析前 ${toAnalyze.length} 个函数`);

    // 检查断点
    const checkpoint = this.checkpoint.load('llm-progress');
    let startIndex = 0;
    const results = [];

    if (checkpoint) {
      startIndex = checkpoint.index;
      results.push(...checkpoint.results);
      this.logger.info(`从断点恢复，跳过前 ${startIndex} 个函数`);
    }

    // 批量处理
    const batches = this.createBatches(toAnalyze.slice(startIndex), this.config.batchSize);
    const progress = new ProgressBar(batches.length);

    for (let i = 0; i < batches.length; i++) {
      try {
        const batchResults = await this.analyzeBatchWithRetry(batches[i], store);
        results.push(...batchResults);
        this.stats.inferences += batchResults.length;
      } catch (error) {
        this.logger.error(`批次 ${i + 1} 失败: ${error.message}`);
        this.stats.errors++;
      }

      progress.update(i + 1);

      // 定期保存断点
      if ((i + 1) % Math.ceil(this.config.checkpointInterval / this.config.batchSize) === 0) {
        this.checkpoint.save('llm-progress', {
          index: startIndex + (i + 1) * this.config.batchSize,
          results,
        });
      }
    }

    return results;
  }

  extractFunctions(code, store) {
    const functions = [];
    const lines = code.split('\n');
    const seen = new Set();

    // 匹配函数定义
    const patterns = [
      /function\s+([a-zA-Z_$][\w$]*)\s*\(/g,
      /var\s+([a-zA-Z_$][\w$]*)\s*=\s*(?:function|\([^)]*\)\s*=>|\(\)\s*=>)/g,
      /([a-zA-Z_$][\w$]*)\s*:\s*(?:function|\([^)]*\)\s*=>)/g,
    ];

    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(code)) !== null) {
        const name = match[1];
        if (store.has(name) || seen.has(name)) continue;
        if (name.length <= 2) continue; // 跳过短变量名
        seen.add(name);

        // 获取上下文
        const lineNum = this.getLineNumber(code, match.index);
        const startLine = Math.max(0, lineNum - 2);
        const endLine = Math.min(lines.length, lineNum + this.config.maxContextLines);
        const context = lines.slice(startLine, endLine).join('\n');

        if (context.length >= this.config.minFunctionLength) {
          functions.push({ name, lineNum, context });
        }
      }
    }

    return functions;
  }

  getLineNumber(code, index) {
    return code.slice(0, index).split('\n').length - 1;
  }

  prioritizeFunctions(functions) {
    for (const fn of functions) {
      fn.priority = 10; // 默认优先级
      for (const rule of this.config.priorityModules) {
        if (rule.pattern.test(fn.context)) {
          fn.priority = Math.min(fn.priority, rule.priority);
          break;
        }
      }
    }
    functions.sort((a, b) => a.priority - b.priority);
  }

  createBatches(items, size) {
    const batches = [];
    for (let i = 0; i < items.length; i += size) {
      batches.push(items.slice(i, i + size));
    }
    return batches;
  }

  async analyzeBatchWithRetry(batch, store) {
    let lastError;
    for (let attempt = 1; attempt <= this.config.maxRetries; attempt++) {
      try {
        return await this.analyzeBatch(batch, store);
      } catch (error) {
        lastError = error;
        if (attempt < this.config.maxRetries) {
          await this.sleep(this.config.retryDelay * attempt);
        }
      }
    }
    throw lastError;
  }

  async analyzeBatch(batch, store) {
    // 构建 prompt
    const examples = store.getAll()
      .filter(m => m.confidence >= 0.9)
      .slice(0, 15)
      .map(m => `  ${m.original} -> ${m.readable}`)
      .join('\n');

    const functions = batch.map((f, i) =>
      `${i + 1}. 函数名: \`${f.name}\`\n\`\`\`javascript\n${f.context.slice(0, 800)}\n\`\`\``
    ).join('\n\n');

    const prompt = `分析以下 Claude Code CLI 中的混淆函数，推断其原始的有意义的名称。

已知的变量映射示例：
${examples}

待分析的函数：
${functions}

请为每个函数推断一个有意义的名称。输出严格的 JSON 数组格式：
[{"original":"函数名","inferred":"推断名","confidence":0.8,"reason":"推断理由"}]

只输出 JSON，不要其他内容。`;

    // 调用 Claude API (使用 SDK 或直接 API)
    const response = await this.callClaudeAPI(prompt);
    this.stats.apiCalls++;

    return this.parseResponse(response, batch);
  }

  async callClaudeAPI(prompt) {
    // 尝试使用 Claude Agent SDK
    try {
      const { query } = await import('@anthropic-ai/claude-agent-sdk');
      let responseText = '';

      const stream = query({
        prompt,
        options: {
          maxTurns: 1,
          systemPrompt: '你是代码分析专家。只输出 JSON 格式结果，不要任何其他文字。',
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

      return responseText;
    } catch (sdkError) {
      // 回退到直接 API 调用
      const apiKey = process.env.ANTHROPIC_API_KEY;
      if (!apiKey) {
        throw new Error('需要设置 ANTHROPIC_API_KEY 环境变量');
      }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: this.config.model,
          max_tokens: 4096,
          messages: [{ role: 'user', content: prompt }],
        }),
      });

      if (!response.ok) {
        throw new Error(`API 错误: ${response.status}`);
      }

      const data = await response.json();
      return data.content[0].text;
    }
  }

  parseResponse(content, batch) {
    const inferences = [];
    try {
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      if (!jsonMatch) return inferences;

      const parsed = JSON.parse(jsonMatch[0]);
      for (const item of parsed) {
        if (item.original && item.inferred && item.confidence >= this.config.minConfidence) {
          const batchItem = batch.find(b => b.name === item.original);
          if (batchItem) {
            inferences.push({
              original: item.original,
              readable: item.inferred,
              confidence: Math.min(item.confidence * 0.95, 0.90), // LLM 推断上限 90%
              source: 'llm-inference',
              context: item.reason || '',
            });
          }
        }
      }
    } catch (error) {
      // 解析失败，忽略
    }
    return inferences;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

class CodeTransformer {
  constructor(cfg) {
    this.config = cfg;
  }

  transform(code, store) {
    let result = code;
    const mappings = store.getAll()
      .filter(m => !this.shouldSkip(m.original))
      .sort((a, b) => b.original.length - a.original.length); // 长的先替换

    for (const mapping of mappings) {
      // 使用单词边界确保精确替换
      const regex = new RegExp(`\\b${this.escapeRegex(mapping.original)}\\b`, 'g');
      result = result.replace(regex, mapping.readable);
    }

    return result;
  }

  shouldSkip(name) {
    return this.config.skipPatterns.some(pattern => pattern.test(name));
  }

  escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

class Validator {
  constructor(cfg, logger) {
    this.config = cfg;
    this.logger = logger;
  }

  validate(originalCode, transformedCode, store) {
    const issues = [];

    // 语法检查
    if (this.config.syntaxCheck) {
      const syntaxIssues = this.checkSyntax(transformedCode);
      issues.push(...syntaxIssues);
    }

    // 冲突检查
    if (this.config.conflictCheck) {
      const conflictIssues = this.checkConflicts(store);
      issues.push(...conflictIssues);
    }

    return {
      valid: issues.filter(i => i.severity === 'error').length === 0,
      issues,
    };
  }

  checkSyntax(code) {
    const issues = [];
    try {
      // 尝试解析代码
      new Function(code);
    } catch (error) {
      issues.push({
        severity: 'error',
        type: 'syntax',
        message: error.message,
      });
    }
    return issues;
  }

  checkConflicts(store) {
    const issues = [];
    const readableNames = new Map();

    for (const mapping of store.getAll()) {
      if (readableNames.has(mapping.readable)) {
        const existing = readableNames.get(mapping.readable);
        issues.push({
          severity: 'warning',
          type: 'conflict',
          message: `"${mapping.readable}" 被多个变量使用: ${existing}, ${mapping.original}`,
        });
      } else {
        readableNames.set(mapping.readable, mapping.original);
      }
    }

    return issues;
  }
}

class ReportGenerator {
  constructor(logger) {
    this.logger = logger;
  }

  generate(store, validationResult, timing) {
    const stats = store.stats();

    const report = `
# Claude Code 反混淆分析报告

## 执行时间
- 开始时间: ${timing.start.toISOString()}
- 结束时间: ${timing.end.toISOString()}
- 总耗时: ${((timing.end - timing.start) / 1000 / 60).toFixed(2)} 分钟

## 映射统计
| 指标 | 数量 |
|------|------|
| 总映射数 | ${stats.total} |
| 高置信度 (90%+) | ${stats.high} |
| 中置信度 (70-89%) | ${stats.medium} |
| 低置信度 (60-69%) | ${stats.low} |

## 来源分布
${Object.entries(stats.bySouce).map(([source, count]) => `- ${source}: ${count}`).join('\n')}

## 验证结果
- 状态: ${validationResult.valid ? '✅ 通过' : '❌ 有问题'}
- 问题数: ${validationResult.issues.length}

${validationResult.issues.length > 0 ? `
### 问题列表
${validationResult.issues.slice(0, 20).map(i => `- [${i.severity}] ${i.type}: ${i.message}`).join('\n')}
` : ''}

## 变量映射表 (前100个)

| 混淆名 | 可读名 | 置信度 | 来源 |
|--------|--------|--------|------|
${store.getAll().slice(0, 100).map(m =>
  `| \`${m.original}\` | \`${m.readable}\` | ${(m.confidence * 100).toFixed(0)}% | ${m.source} |`
).join('\n')}

---
*报告生成时间: ${new Date().toISOString()}*
`;

    return report;
  }
}

// ==================== 主流水线 ====================

class Pipeline {
  constructor() {
    this.logger = new Logger(config.execution.logLevel);
    this.checkpoint = new CheckpointManager(config.paths.checkpointDir);
    this.store = new MappingStore();
  }

  async run() {
    const timing = { start: new Date() };

    this.printBanner();

    const totalSteps = this.countSteps();
    let step = 0;

    // Step 1: 加载已有映射
    step++;
    this.logger.step(step, totalSteps, '加载已有变量映射...');
    await this.loadExistingMappings();
    this.logger.success(`已加载 ${this.store.size()} 个映射`);

    // Step 2: 读取源代码
    step++;
    this.logger.step(step, totalSteps, '读取源代码...');
    const code = this.loadSourceCode();
    this.logger.success(`代码长度: ${(code.length / 1024 / 1024).toFixed(2)} MB`);

    // Step 3: 静态分析
    if (config.staticAnalysis.enabled) {
      step++;
      this.logger.step(step, totalSteps, '执行静态分析...');
      const analyzer = new StaticAnalyzer(config.staticAnalysis);
      const inferences = analyzer.analyze(code, this.store);
      this.mergeInferences(inferences);
      this.logger.success(`发现 ${inferences.length} 个新映射`);
    }

    // Step 4: 模式识别
    if (config.patternRecognition.enabled) {
      step++;
      this.logger.step(step, totalSteps, '执行模式识别...');
      const recognizer = new PatternRecognizer(config.patternRecognition);
      const inferences = recognizer.recognize(code, this.store);
      this.mergeInferences(inferences);
      this.logger.success(`发现 ${inferences.length} 个新映射`);
    }

    // Step 5: LLM 推断
    if (config.llmInference.enabled) {
      step++;
      this.logger.step(step, totalSteps, '执行 LLM 智能推断...');
      const llmAnalyzer = new LLMAnalyzer(config.llmInference, this.logger, this.checkpoint);
      try {
        const inferences = await llmAnalyzer.analyze(code, this.store);
        this.mergeInferences(inferences);
        this.logger.success(`LLM 推断了 ${inferences.length} 个新变量名`);
        this.logger.info(`API 调用: ${llmAnalyzer.stats.apiCalls} 次`);
      } catch (error) {
        this.logger.error(`LLM 分析失败: ${error.message}`);
      }
    }

    // Step 6: 代码转换
    step++;
    this.logger.step(step, totalSteps, '执行代码转换...');
    const transformer = new CodeTransformer(config.codeTransform);
    const transformedCode = transformer.transform(code, this.store);
    this.logger.success('代码转换完成');

    // Step 7: 验证
    let validationResult = { valid: true, issues: [] };
    if (config.validation.enabled) {
      step++;
      this.logger.step(step, totalSteps, '执行验证...');
      const validator = new Validator(config.validation, this.logger);
      validationResult = validator.validate(code, transformedCode, this.store);
      this.logger.success(`验证完成: ${validationResult.valid ? '通过' : '有问题'}`);
    }

    // Step 8: 保存输出
    step++;
    this.logger.step(step, totalSteps, '保存输出文件...');
    await this.saveOutputs(transformedCode);
    this.logger.success('输出文件已保存');

    // 生成报告
    timing.end = new Date();
    if (config.execution.generateReport) {
      const reportGenerator = new ReportGenerator(this.logger);
      const report = reportGenerator.generate(this.store, validationResult, timing);
      const reportPath = resolve(projectRoot, config.paths.outputDir, 'ANALYSIS_REPORT.md');
      writeFileSync(reportPath, report);
      this.logger.success(`报告已保存: ${reportPath}`);
    }

    // 打印最终统计
    this.printFinalStats();
  }

  printBanner() {
    console.log('\n' + '='.repeat(60));
    console.log('  Claude Code 反混淆完整流水线');
    console.log('  ' + new Date().toISOString());
    console.log('='.repeat(60) + '\n');
  }

  countSteps() {
    let count = 3; // 加载、读取、保存
    if (config.staticAnalysis.enabled) count++;
    if (config.patternRecognition.enabled) count++;
    if (config.llmInference.enabled) count++;
    if (config.validation.enabled) count++;
    return count;
  }

  async loadExistingMappings() {
    const mappingsPath = resolve(projectRoot, config.paths.existingMappings);
    if (existsSync(mappingsPath)) {
      const data = JSON.parse(readFileSync(mappingsPath, 'utf-8'));
      this.store.loadFromArray(data);
    }
  }

  loadSourceCode() {
    const inputPath = resolve(projectRoot, config.paths.inputFile);
    if (!existsSync(inputPath)) {
      throw new Error(`输入文件不存在: ${inputPath}`);
    }
    return readFileSync(inputPath, 'utf-8');
  }

  mergeInferences(inferences) {
    for (const inf of inferences) {
      this.store.add(inf.original, inf.readable, inf.confidence, inf.source, inf.context);
    }
  }

  async saveOutputs(transformedCode) {
    const outputDir = resolve(projectRoot, config.paths.outputDir);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    // 保存转换后的代码
    writeFileSync(join(outputDir, 'cli.readable.js'), transformedCode);

    // 保存映射表 (JSON)
    const mappingsPath = resolve(projectRoot, config.paths.finalMappings);
    writeFileSync(mappingsPath, JSON.stringify(this.store.toJSON(), null, 2));

    // 保存映射表 (Markdown)
    const mdContent = this.generateMarkdownMappings();
    writeFileSync(join(outputDir, 'VARIABLE_MAPPING.md'), mdContent);
  }

  generateMarkdownMappings() {
    const mappings = this.store.getAll();
    const bySource = {};

    for (const m of mappings) {
      const source = m.source || 'unknown';
      if (!bySource[source]) bySource[source] = [];
      bySource[source].push(m);
    }

    let md = '# Claude Code 变量映射表\n\n';
    md += `> 总计 ${mappings.length} 个映射\n\n`;

    for (const [source, items] of Object.entries(bySource)) {
      md += `## ${source} (${items.length})\n\n`;
      md += '| 混淆名 | 可读名 | 置信度 |\n';
      md += '|--------|--------|--------|\n';
      for (const m of items.slice(0, 200)) {
        md += `| \`${m.original}\` | \`${m.readable}\` | ${(m.confidence * 100).toFixed(0)}% |\n`;
      }
      md += '\n';
    }

    return md;
  }

  printFinalStats() {
    const stats = this.store.stats();
    console.log('\n' + '='.repeat(60));
    console.log('  最终统计');
    console.log('='.repeat(60));
    console.log(`  总映射数: ${stats.total}`);
    console.log(`  高置信度 (90%+): ${stats.high}`);
    console.log(`  中置信度 (70-89%): ${stats.medium}`);
    console.log(`  低置信度 (60-69%): ${stats.low}`);
    console.log();
    console.log('  来源分布:');
    for (const [source, count] of Object.entries(stats.bySouce)) {
      console.log(`    ${source}: ${count}`);
    }
    console.log('='.repeat(60) + '\n');
  }
}

// ==================== CLI 入口 ====================

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Claude Code 反混淆完整流水线

用法:
  node full-pipeline.js [选项]

选项:
  --no-llm        禁用 LLM 推断 (只执行静态分析)
  --dry-run       试运行模式 (不保存输出)
  --resume        从断点恢复
  --clean         清理断点数据后执行
  --help, -h      显示帮助

环境变量:
  ANTHROPIC_API_KEY    Claude API 密钥 (LLM 推断需要)

示例:
  node full-pipeline.js                  # 完整执行
  node full-pipeline.js --no-llm         # 只执行静态分析
  node full-pipeline.js --resume         # 从断点恢复
`);
    process.exit(0);
  }

  // 处理命令行参数
  if (args.includes('--no-llm')) {
    config.llmInference.enabled = false;
  }

  if (args.includes('--clean')) {
    const checkpoint = new CheckpointManager(config.paths.checkpointDir);
    checkpoint.clear();
    console.log('断点数据已清理');
  }

  // 执行流水线
  const pipeline = new Pipeline();
  try {
    await pipeline.run();
    console.log('✅ 流水线执行完成！\n');
  } catch (error) {
    console.error('\n❌ 流水线执行失败:', error.message);
    if (args.includes('--verbose')) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

main();

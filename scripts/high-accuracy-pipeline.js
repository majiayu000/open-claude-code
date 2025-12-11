#!/usr/bin/env node
/**
 * 高准确率变量推断流水线
 *
 * 核心策略：
 * 1. 多轮 LLM 交叉验证 - 同一函数多角度分析
 * 2. 调用链分析 - 从使用方式推断含义
 * 3. 迭代传播 - 已知映射帮助推断未知
 * 4. 一致性检查 - 确保全局语义一致
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// ==================== 配置 ====================

const CONFIG = {
  // LLM 配置
  llm: {
    model: 'claude-sonnet-4-5-20250929',
    validationRounds: 3,        // 每个函数验证轮数
    consensusThreshold: 0.8,    // 一致性阈值
  },

  // 迭代配置
  iteration: {
    maxIterations: 5,           // 最大迭代轮数
    minNewMappings: 10,         // 低于此数停止迭代
  },

  // 置信度配置
  confidence: {
    multiRoundConsensus: 0.95,  // 多轮一致 → 高置信度
    callChainSupported: 0.90,   // 调用链支持 → 高置信度
    singleInference: 0.70,      // 单次推断 → 中置信度
    conflicting: 0.40,          // 有冲突 → 低置信度
  },

  paths: {
    input: '../decompiled/cli.formatted.js',
    output: '../decompiled/readable',
    mappings: '../tools/deobfuscator/data/existing-mappings.json',
  },
};

// ==================== 工具类 ====================

class CallGraphAnalyzer {
  constructor(code) {
    this.code = code;
    this.callSites = new Map();  // funcName -> [{caller, context, args}]
    this.definitions = new Map(); // funcName -> {line, body}
    this.buildGraph();
  }

  buildGraph() {
    const lines = this.code.split('\n');

    // 1. 收集函数定义
    const defPatterns = [
      /function\s+([a-zA-Z_$][\w$]*)\s*\(/g,
      /var\s+([a-zA-Z_$][\w$]*)\s*=\s*function/g,
      /var\s+([a-zA-Z_$][\w$]*)\s*=\s*\([^)]*\)\s*=>/g,
      /const\s+([a-zA-Z_$][\w$]*)\s*=\s*\([^)]*\)\s*=>/g,
    ];

    for (const pattern of defPatterns) {
      let match;
      while ((match = pattern.exec(this.code)) !== null) {
        const name = match[1];
        const lineNum = this.code.slice(0, match.index).split('\n').length;
        const bodyStart = match.index;
        const bodyEnd = this.findFunctionEnd(bodyStart);
        this.definitions.set(name, {
          line: lineNum,
          body: this.code.slice(bodyStart, bodyEnd),
        });
      }
    }

    // 2. 收集调用点
    // 匹配 funcName(args) 或 obj.funcName(args)
    const callPattern = /\b([a-zA-Z_$][\w$]*)\s*\(/g;
    let match;
    while ((match = callPattern.exec(this.code)) !== null) {
      const name = match[1];
      if (this.isKeyword(name)) continue;

      const lineNum = this.code.slice(0, match.index).split('\n').length;
      const contextStart = Math.max(0, match.index - 100);
      const contextEnd = Math.min(this.code.length, match.index + 200);
      const context = this.code.slice(contextStart, contextEnd);

      if (!this.callSites.has(name)) {
        this.callSites.set(name, []);
      }
      this.callSites.get(name).push({
        line: lineNum,
        context,
        fullMatch: match[0],
      });
    }
  }

  findFunctionEnd(start) {
    let depth = 0;
    let inString = false;
    let stringChar = '';

    for (let i = start; i < this.code.length; i++) {
      const char = this.code[i];
      const prev = this.code[i - 1];

      // 处理字符串
      if ((char === '"' || char === "'" || char === '`') && prev !== '\\') {
        if (!inString) {
          inString = true;
          stringChar = char;
        } else if (char === stringChar) {
          inString = false;
        }
        continue;
      }

      if (inString) continue;

      if (char === '{') depth++;
      if (char === '}') {
        depth--;
        if (depth === 0) return i + 1;
      }
    }
    return start + 500; // fallback
  }

  isKeyword(name) {
    const keywords = ['if', 'for', 'while', 'switch', 'catch', 'function', 'return', 'typeof', 'new', 'delete', 'void'];
    return keywords.includes(name);
  }

  getCallSites(funcName) {
    return this.callSites.get(funcName) || [];
  }

  getDefinition(funcName) {
    return this.definitions.get(funcName);
  }

  // 从调用方式推断函数用途
  inferFromUsage(funcName) {
    const sites = this.getCallSites(funcName);
    const hints = [];

    for (const site of sites.slice(0, 10)) { // 最多分析10个调用点
      const ctx = site.context;

      // 模式1: if (X(...)) → 可能是 isXxx, hasXxx, validateXxx
      if (/if\s*\(\s*\w+\s*\(/.test(ctx)) {
        hints.push({ type: 'boolean-check', confidence: 0.7 });
      }

      // 模式2: X(error) 或 X(err) → 可能是错误处理
      if (/\w+\s*\(\s*(?:error|err|e)\s*\)/.test(ctx)) {
        hints.push({ type: 'error-handler', confidence: 0.6 });
      }

      // 模式3: await X(...) → 异步操作
      if (/await\s+\w+\s*\(/.test(ctx)) {
        hints.push({ type: 'async-operation', confidence: 0.5 });
      }

      // 模式4: return X(...) → 可能是 getXxx, createXxx
      if (/return\s+\w+\s*\(/.test(ctx)) {
        hints.push({ type: 'getter-or-factory', confidence: 0.6 });
      }

      // 模式5: X.name, X.type → 可能是对象/类
      if (new RegExp(`${funcName}\\.(name|type|id|value)`).test(ctx)) {
        hints.push({ type: 'object-or-class', confidence: 0.7 });
      }
    }

    return hints;
  }
}

class MultiRoundLLMValidator {
  constructor() {
    this.stats = { apiCalls: 0, consensus: 0, conflicts: 0 };
  }

  async validate(funcName, definition, callGraph) {
    const results = [];

    // Round 1: 基于定义推断
    const round1 = await this.inferFromDefinition(funcName, definition);
    results.push(round1);

    // Round 2: 基于调用方式推断
    const usageHints = callGraph.inferFromUsage(funcName);
    const callSites = callGraph.getCallSites(funcName).slice(0, 5);
    const round2 = await this.inferFromUsage(funcName, callSites, usageHints);
    results.push(round2);

    // Round 3: 反向验证 - 用推断的名字验证是否合理
    if (round1.name === round2.name) {
      const round3 = await this.reverseValidate(funcName, round1.name, definition);
      results.push(round3);
    }

    // 计算最终结果
    return this.computeConsensus(results);
  }

  async inferFromDefinition(funcName, definition) {
    if (!definition) {
      return { name: null, confidence: 0, source: 'no-definition' };
    }

    const prompt = `分析这个混淆的 JavaScript 函数，推断其原始名称。

函数名: ${funcName}
代码:
\`\`\`javascript
${definition.body.slice(0, 1000)}
\`\`\`

只输出 JSON: {"name": "推断的名称", "reason": "推断理由"}`;

    const response = await this.callLLM(prompt);
    return this.parseResponse(response, 'definition');
  }

  async inferFromUsage(funcName, callSites, usageHints) {
    if (callSites.length === 0) {
      return { name: null, confidence: 0, source: 'no-usage' };
    }

    const usageExamples = callSites.map((s, i) => `${i + 1}. ${s.context.slice(0, 200)}`).join('\n');
    const hintsSummary = usageHints.map(h => h.type).join(', ');

    const prompt = `分析这个函数的调用方式，推断其原始名称。

函数名: ${funcName}
使用模式提示: ${hintsSummary || '无'}

调用示例:
${usageExamples}

只输出 JSON: {"name": "推断的名称", "reason": "推断理由"}`;

    const response = await this.callLLM(prompt);
    return this.parseResponse(response, 'usage');
  }

  async reverseValidate(funcName, inferredName, definition) {
    const prompt = `验证这个函数名推断是否正确。

原混淆名: ${funcName}
推断名称: ${inferredName}

代码:
\`\`\`javascript
${definition.body.slice(0, 800)}
\`\`\`

问题:
1. 这个函数的实际行为是否与名称 "${inferredName}" 相符？
2. 如果不符，更好的名称是什么？

只输出 JSON: {"valid": true/false, "name": "确认或修正的名称", "reason": "理由"}`;

    const response = await this.callLLM(prompt);
    return this.parseValidationResponse(response, inferredName);
  }

  async callLLM(prompt) {
    this.stats.apiCalls++;

    // 尝试使用 Claude Agent SDK
    try {
      const { query } = await import('@anthropic-ai/claude-agent-sdk');
      let responseText = '';

      const stream = query({
        prompt,
        options: {
          maxTurns: 1,
          systemPrompt: '你是代码分析专家。只输出 JSON，不要其他内容。',
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
    } catch (error) {
      // 回退到直接 API
      return this.callDirectAPI(prompt);
    }
  }

  async callDirectAPI(prompt) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error('需要 ANTHROPIC_API_KEY');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: CONFIG.llm.model,
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return data.content[0].text;
  }

  parseResponse(content, source) {
    try {
      const match = content.match(/\{[\s\S]*\}/);
      if (!match) return { name: null, confidence: 0, source };

      const parsed = JSON.parse(match[0]);
      return {
        name: parsed.name,
        reason: parsed.reason,
        confidence: 0.7,
        source,
      };
    } catch {
      return { name: null, confidence: 0, source };
    }
  }

  parseValidationResponse(content, originalName) {
    try {
      const match = content.match(/\{[\s\S]*\}/);
      if (!match) return { name: originalName, confidence: 0.5, source: 'validation-failed' };

      const parsed = JSON.parse(match[0]);
      return {
        name: parsed.name || originalName,
        valid: parsed.valid,
        reason: parsed.reason,
        confidence: parsed.valid ? 0.9 : 0.5,
        source: 'reverse-validation',
      };
    } catch {
      return { name: originalName, confidence: 0.5, source: 'validation-error' };
    }
  }

  computeConsensus(results) {
    const validResults = results.filter(r => r.name);
    if (validResults.length === 0) {
      return { name: null, confidence: 0, source: 'no-consensus' };
    }

    // 统计每个名字的出现次数
    const nameCounts = {};
    for (const r of validResults) {
      nameCounts[r.name] = (nameCounts[r.name] || 0) + 1;
    }

    // 找出最常见的名字
    const sortedNames = Object.entries(nameCounts).sort((a, b) => b[1] - a[1]);
    const [topName, topCount] = sortedNames[0];

    // 计算一致性
    const consensusRatio = topCount / validResults.length;

    if (consensusRatio >= CONFIG.llm.consensusThreshold) {
      this.stats.consensus++;
      return {
        name: topName,
        confidence: CONFIG.confidence.multiRoundConsensus,
        source: 'multi-round-consensus',
        details: { rounds: validResults.length, agreeing: topCount },
      };
    } else {
      this.stats.conflicts++;
      return {
        name: topName,
        confidence: CONFIG.confidence.conflicting,
        source: 'conflicting-results',
        alternatives: sortedNames.slice(1).map(([name]) => name),
      };
    }
  }

  getStats() {
    return { ...this.stats };
  }
}

class IterativePropagator {
  constructor(code, initialMappings) {
    this.code = code;
    this.mappings = new Map();
    for (const m of initialMappings) {
      this.mappings.set(m.original, m);
    }
    this.iteration = 0;
  }

  async runIteration(llmValidator, callGraph) {
    this.iteration++;
    console.log(`\n📍 迭代 ${this.iteration}`);

    // 1. 用已知映射部分替换代码
    const partialCode = this.applyMappings();

    // 2. 在更可读的代码上找新的未知函数
    const unknowns = this.findUnknowns(partialCode);
    console.log(`   发现 ${unknowns.length} 个未知函数`);

    // 3. 对新发现的未知函数进行推断
    const newMappings = [];
    for (const funcName of unknowns.slice(0, 50)) { // 每轮最多处理50个
      const definition = callGraph.getDefinition(funcName);
      const result = await llmValidator.validate(funcName, definition, callGraph);

      if (result.name && result.confidence >= 0.7) {
        newMappings.push({
          original: funcName,
          readable: result.name,
          confidence: result.confidence,
          source: result.source,
        });
        this.mappings.set(funcName, newMappings[newMappings.length - 1]);
      }
    }

    console.log(`   新增 ${newMappings.length} 个映射`);
    return newMappings;
  }

  applyMappings() {
    let result = this.code;
    const sortedMappings = [...this.mappings.values()]
      .sort((a, b) => b.original.length - a.original.length);

    for (const m of sortedMappings) {
      const regex = new RegExp(`\\b${this.escapeRegex(m.original)}\\b`, 'g');
      result = result.replace(regex, m.readable);
    }
    return result;
  }

  findUnknowns(code) {
    const unknowns = new Set();
    const patterns = [
      /function\s+([a-zA-Z_$][\w$]{2,})\s*\(/g,
      /var\s+([a-zA-Z_$][\w$]{2,})\s*=/g,
    ];

    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(code)) !== null) {
        const name = match[1];
        if (!this.mappings.has(name) && !this.isLikelyReadable(name)) {
          unknowns.add(name);
        }
      }
    }

    return [...unknowns];
  }

  isLikelyReadable(name) {
    // 如果名字看起来已经是可读的，跳过
    if (name.length > 15) return true;
    if (/^(get|set|is|has|create|update|delete|handle|process|render|fetch|load|save|parse|format|validate|check|find|search|filter|map|reduce)/.test(name)) return true;
    if (/^[A-Z][a-z]+[A-Z]/.test(name)) return true; // camelCase with uppercase
    return false;
  }

  escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getMappings() {
    return [...this.mappings.values()];
  }
}

// ==================== 主流程 ====================

async function main() {
  console.log('═'.repeat(60));
  console.log('  高准确率变量推断流水线');
  console.log('═'.repeat(60));
  console.log();

  // 1. 加载代码和已有映射
  console.log('📁 加载数据...');
  const codePath = resolve(projectRoot, CONFIG.paths.input);
  const mappingsPath = resolve(projectRoot, CONFIG.paths.mappings);

  if (!existsSync(codePath)) {
    console.error('错误: 输入文件不存在');
    process.exit(1);
  }

  const code = readFileSync(codePath, 'utf-8');
  const existingMappings = existsSync(mappingsPath)
    ? JSON.parse(readFileSync(mappingsPath, 'utf-8'))
    : [];

  console.log(`   代码: ${(code.length / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   已有映射: ${existingMappings.length} 个`);

  // 2. 构建调用图
  console.log('\n📊 构建调用图...');
  const callGraph = new CallGraphAnalyzer(code);
  console.log(`   函数定义: ${callGraph.definitions.size} 个`);
  console.log(`   调用点: ${callGraph.callSites.size} 个函数被调用`);

  // 3. 初始化组件
  const llmValidator = new MultiRoundLLMValidator();
  const propagator = new IterativePropagator(code, existingMappings);

  // 4. 迭代推断
  console.log('\n🔄 开始迭代推断...');
  let totalNew = 0;

  for (let i = 0; i < CONFIG.iteration.maxIterations; i++) {
    const newMappings = await propagator.runIteration(llmValidator, callGraph);
    totalNew += newMappings.length;

    if (newMappings.length < CONFIG.iteration.minNewMappings) {
      console.log(`\n   新映射数量 (${newMappings.length}) 低于阈值，停止迭代`);
      break;
    }

    // 避免 API 限流
    await new Promise(r => setTimeout(r, 1000));
  }

  // 5. 保存结果
  console.log('\n💾 保存结果...');
  const outputDir = resolve(projectRoot, CONFIG.paths.output);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const allMappings = propagator.getMappings();
  const transformedCode = propagator.applyMappings();

  writeFileSync(join(outputDir, 'cli.readable.js'), transformedCode);
  writeFileSync(join(outputDir, 'VARIABLE_MAPPING.json'), JSON.stringify(allMappings, null, 2));

  // 6. 统计报告
  const stats = llmValidator.getStats();
  const highConfidence = allMappings.filter(m => m.confidence >= 0.9).length;
  const mediumConfidence = allMappings.filter(m => m.confidence >= 0.7 && m.confidence < 0.9).length;
  const lowConfidence = allMappings.filter(m => m.confidence < 0.7).length;

  console.log('\n' + '═'.repeat(60));
  console.log('  统计报告');
  console.log('═'.repeat(60));
  console.log(`  总映射数: ${allMappings.length}`);
  console.log(`  新增映射: ${totalNew}`);
  console.log(`  高置信度 (90%+): ${highConfidence}`);
  console.log(`  中置信度 (70-89%): ${mediumConfidence}`);
  console.log(`  低置信度 (<70%): ${lowConfidence}`);
  console.log();
  console.log(`  API 调用: ${stats.apiCalls}`);
  console.log(`  多轮一致: ${stats.consensus}`);
  console.log(`  存在冲突: ${stats.conflicts}`);
  console.log('═'.repeat(60));
  console.log();

  // 计算预估准确率
  const estimatedAccuracy = (
    (highConfidence * 0.95 + mediumConfidence * 0.75 + lowConfidence * 0.50) / allMappings.length
  ).toFixed(2);
  console.log(`  📈 预估整体准确率: ${(estimatedAccuracy * 100).toFixed(0)}%`);
  console.log();
}

main().catch(console.error);

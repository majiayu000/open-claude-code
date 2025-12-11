#!/usr/bin/env node
/**
 * 终极优化版变量推断流水线
 *
 * 核心优化策略：
 * 1. 跨版本交叉验证 - v2.0.57 vs v2.0.62 功能对齐
 * 2. 函数签名指纹 - 基于结构特征匹配
 * 3. 语义聚类 - 相似函数分组推断
 * 4. 知识图谱推理 - 调用关系传播
 * 5. 多源证据融合 - 加权投票决策
 * 6. 增强LLM策略 - CoT + Self-consistency + 反事实验证
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// ==================== 配置 ====================

const CONFIG = {
  versions: {
    v1: {
      name: 'v2.0.57',
      code: '../decompiled/cli.formatted.js',
      mappings: '../tools/deobfuscator/data/existing-mappings.json',
    },
    v2: {
      name: 'v2.0.62',
      code: '../decompiled/v2.0.62/cli.formatted.js',
      mappings: null, // 从 VARIABLE_MAPPING.md 解析
    },
  },

  output: '../decompiled/readable',

  llm: {
    model: 'claude-sonnet-4-5-20250929',
    temperature: 0.3,          // 降低随机性
    samplingRounds: 5,         // Self-consistency 采样次数
    cotEnabled: true,          // Chain-of-thought
  },

  confidence: {
    crossVersionMatch: 0.98,   // 跨版本匹配
    signatureMatch: 0.95,      // 函数签名匹配
    clusterConsensus: 0.90,    // 聚类一致
    multiSourceAgreement: 0.92,// 多源一致
    llmConsensus: 0.85,        // LLM多次采样一致
    singleLLM: 0.65,           // 单次LLM
  },

  clustering: {
    minClusterSize: 3,
    similarityThreshold: 0.7,
  },
};

// ==================== 工具函数 ====================

function hash(str) {
  return createHash('md5').update(str).digest('hex').slice(0, 8);
}

function normalizeCode(code) {
  // 移除空白和注释，只保留结构
  return code
    .replace(/\/\/[^\n]*/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// ==================== 跨版本分析器 ====================

class CrossVersionAnalyzer {
  constructor(v1Code, v2Code) {
    this.v1Code = v1Code;
    this.v2Code = v2Code;
    this.v1Functions = this.extractFunctions(v1Code);
    this.v2Functions = this.extractFunctions(v2Code);
    this.matches = new Map();
  }

  extractFunctions(code) {
    const functions = new Map();
    const lines = code.split('\n');

    // 提取函数定义及其特征
    const pattern = /(?:function\s+([a-zA-Z_$][\w$]*)|var\s+([a-zA-Z_$][\w$]*)\s*=\s*function)\s*\(([^)]*)\)/g;
    let match;

    while ((match = pattern.exec(code)) !== null) {
      const name = match[1] || match[2];
      const params = match[3];
      const bodyStart = match.index;
      const body = this.extractFunctionBody(code, bodyStart);

      // 计算函数指纹
      const signature = this.computeSignature(params, body);

      functions.set(name, {
        name,
        params,
        body,
        signature,
        bodyHash: hash(normalizeCode(body)),
        lineCount: body.split('\n').length,
        hasAsync: /\basync\b/.test(body.slice(0, 100)),
        hasAwait: /\bawait\b/.test(body),
        returnType: this.inferReturnType(body),
        callsCount: (body.match(/\w+\s*\(/g) || []).length,
      });
    }

    return functions;
  }

  extractFunctionBody(code, start) {
    let depth = 0;
    let inBody = false;

    for (let i = start; i < code.length; i++) {
      if (code[i] === '{') {
        depth++;
        inBody = true;
      }
      if (code[i] === '}') {
        depth--;
        if (inBody && depth === 0) {
          return code.slice(start, i + 1);
        }
      }
    }
    return code.slice(start, start + 500);
  }

  computeSignature(params, body) {
    // 函数签名 = 参数数量 + 返回类型 + 结构特征
    const paramCount = params ? params.split(',').filter(p => p.trim()).length : 0;
    const hasReturn = /\breturn\b/.test(body);
    const returnType = this.inferReturnType(body);
    const controlFlow = this.extractControlFlow(body);

    return `${paramCount}:${returnType}:${controlFlow}`;
  }

  inferReturnType(body) {
    if (/return\s+true|return\s+false|return\s+!\w/.test(body)) return 'boolean';
    if (/return\s+\d+|return\s+\w+\s*[+\-*/%]/.test(body)) return 'number';
    if (/return\s+["'`]|return\s+\w+\s*\+\s*["'`]/.test(body)) return 'string';
    if (/return\s+\[/.test(body)) return 'array';
    if (/return\s+\{/.test(body)) return 'object';
    if (/return\s+new\s+Promise|async\s+function/.test(body)) return 'promise';
    if (/return\s+null/.test(body)) return 'null';
    if (!/\breturn\b/.test(body)) return 'void';
    return 'unknown';
  }

  extractControlFlow(body) {
    const patterns = [];
    if (/\bif\s*\(/.test(body)) patterns.push('if');
    if (/\bfor\s*\(/.test(body)) patterns.push('for');
    if (/\bwhile\s*\(/.test(body)) patterns.push('while');
    if (/\btry\s*\{/.test(body)) patterns.push('try');
    if (/\bswitch\s*\(/.test(body)) patterns.push('switch');
    if (/\.map\s*\(/.test(body)) patterns.push('map');
    if (/\.filter\s*\(/.test(body)) patterns.push('filter');
    if (/\.reduce\s*\(/.test(body)) patterns.push('reduce');
    return patterns.sort().join(',') || 'simple';
  }

  // 核心：跨版本函数匹配
  findCrossVersionMatches() {
    console.log('\n🔄 跨版本函数匹配...');

    const matches = [];

    for (const [v1Name, v1Func] of this.v1Functions) {
      const candidates = [];

      for (const [v2Name, v2Func] of this.v2Functions) {
        // 跳过已知相同的名字
        if (v1Name === v2Name) continue;

        // 计算相似度
        const similarity = this.computeSimilarity(v1Func, v2Func);

        if (similarity > 0.85) {
          candidates.push({
            v2Name,
            v2Func,
            similarity,
          });
        }
      }

      if (candidates.length > 0) {
        // 取最相似的
        candidates.sort((a, b) => b.similarity - a.similarity);
        const best = candidates[0];

        if (best.similarity > 0.9) {
          matches.push({
            v1Name,
            v2Name: best.v2Name,
            similarity: best.similarity,
            v1Signature: v1Func.signature,
            v2Signature: best.v2Func.signature,
          });
        }
      }
    }

    console.log(`   找到 ${matches.length} 对跨版本匹配`);
    return matches;
  }

  computeSimilarity(f1, f2) {
    let score = 0;
    let weights = 0;

    // 1. 签名匹配 (权重: 30%)
    if (f1.signature === f2.signature) {
      score += 0.3;
    }
    weights += 0.3;

    // 2. 函数体哈希 (权重: 25%) - 完全相同的结构
    if (f1.bodyHash === f2.bodyHash) {
      score += 0.25;
    } else {
      // 部分匹配
      const similarity = this.stringSimilarity(
        normalizeCode(f1.body),
        normalizeCode(f2.body)
      );
      score += 0.25 * similarity;
    }
    weights += 0.25;

    // 3. 行数相近 (权重: 15%)
    const lineDiff = Math.abs(f1.lineCount - f2.lineCount);
    const lineScore = Math.max(0, 1 - lineDiff / Math.max(f1.lineCount, f2.lineCount));
    score += 0.15 * lineScore;
    weights += 0.15;

    // 4. 返回类型匹配 (权重: 15%)
    if (f1.returnType === f2.returnType) {
      score += 0.15;
    }
    weights += 0.15;

    // 5. async/await 模式匹配 (权重: 10%)
    if (f1.hasAsync === f2.hasAsync && f1.hasAwait === f2.hasAwait) {
      score += 0.1;
    }
    weights += 0.1;

    // 6. 调用数量相近 (权重: 5%)
    const callDiff = Math.abs(f1.callsCount - f2.callsCount);
    const callScore = Math.max(0, 1 - callDiff / Math.max(f1.callsCount, f2.callsCount, 1));
    score += 0.05 * callScore;
    weights += 0.05;

    return score / weights;
  }

  stringSimilarity(s1, s2) {
    // Jaccard similarity on n-grams
    const n = 3;
    const ngrams1 = new Set();
    const ngrams2 = new Set();

    for (let i = 0; i <= s1.length - n; i++) {
      ngrams1.add(s1.slice(i, i + n));
    }
    for (let i = 0; i <= s2.length - n; i++) {
      ngrams2.add(s2.slice(i, i + n));
    }

    const intersection = new Set([...ngrams1].filter(x => ngrams2.has(x)));
    const union = new Set([...ngrams1, ...ngrams2]);

    return intersection.size / union.size;
  }
}

// ==================== 语义聚类器 ====================

class SemanticClusterer {
  constructor(functions, existingMappings) {
    this.functions = functions;
    this.existingMappings = new Map(existingMappings.map(m => [m.original, m.readable]));
    this.clusters = [];
  }

  cluster() {
    console.log('\n📊 语义聚类分析...');

    // 基于函数特征进行聚类
    const featureVectors = [];

    for (const [name, func] of this.functions) {
      featureVectors.push({
        name,
        func,
        features: this.extractFeatures(func),
      });
    }

    // 简单的层次聚类
    this.clusters = this.hierarchicalCluster(featureVectors);

    console.log(`   形成 ${this.clusters.length} 个聚类`);
    return this.clusters;
  }

  extractFeatures(func) {
    return {
      returnType: func.returnType,
      paramCount: func.params ? func.params.split(',').length : 0,
      hasAsync: func.hasAsync ? 1 : 0,
      lineCount: Math.min(func.lineCount, 100) / 100, // 归一化
      controlFlow: func.signature.split(':')[2],
    };
  }

  hierarchicalCluster(items) {
    const clusters = [];
    const assigned = new Set();

    for (const item of items) {
      if (assigned.has(item.name)) continue;

      const cluster = [item];
      assigned.add(item.name);

      // 找相似的
      for (const other of items) {
        if (assigned.has(other.name)) continue;

        const similarity = this.featureSimilarity(item.features, other.features);
        if (similarity > CONFIG.clustering.similarityThreshold) {
          cluster.push(other);
          assigned.add(other.name);
        }
      }

      if (cluster.length >= CONFIG.clustering.minClusterSize) {
        clusters.push(cluster);
      }
    }

    return clusters;
  }

  featureSimilarity(f1, f2) {
    let score = 0;
    if (f1.returnType === f2.returnType) score += 0.3;
    if (f1.paramCount === f2.paramCount) score += 0.2;
    if (f1.hasAsync === f2.hasAsync) score += 0.1;
    if (f1.controlFlow === f2.controlFlow) score += 0.3;

    const lineDiff = Math.abs(f1.lineCount - f2.lineCount);
    score += 0.1 * (1 - lineDiff);

    return score;
  }

  // 基于聚类推断：如果聚类中有已知名字，推断其他成员
  inferFromClusters() {
    const inferences = [];

    for (const cluster of this.clusters) {
      // 找聚类中已知的映射
      const known = cluster.filter(item => this.existingMappings.has(item.name));

      if (known.length > 0) {
        // 分析已知名字的模式
        const patterns = known.map(k => this.existingMappings.get(k.name));
        const commonPrefix = this.findCommonPattern(patterns);

        if (commonPrefix) {
          // 为未知成员推断相似的名字
          const unknown = cluster.filter(item => !this.existingMappings.has(item.name));

          for (const item of unknown) {
            inferences.push({
              original: item.name,
              readable: this.generateSimilarName(commonPrefix, item.func),
              confidence: CONFIG.confidence.clusterConsensus,
              source: 'semantic-cluster',
              clusterSize: cluster.length,
              knownInCluster: known.length,
            });
          }
        }
      }
    }

    console.log(`   从聚类推断 ${inferences.length} 个映射`);
    return inferences;
  }

  findCommonPattern(names) {
    if (names.length === 0) return null;

    // 找共同前缀
    const prefixes = ['get', 'set', 'is', 'has', 'create', 'update', 'delete',
                      'handle', 'process', 'render', 'fetch', 'load', 'save',
                      'parse', 'format', 'validate', 'check', 'find', 'build'];

    for (const prefix of prefixes) {
      const matching = names.filter(n => n.toLowerCase().startsWith(prefix));
      if (matching.length >= names.length * 0.5) {
        return prefix;
      }
    }

    // 找共同后缀
    const suffixes = ['Handler', 'Manager', 'Service', 'Helper', 'Utils',
                      'Factory', 'Builder', 'Provider', 'Validator', 'Parser'];

    for (const suffix of suffixes) {
      const matching = names.filter(n => n.endsWith(suffix));
      if (matching.length >= names.length * 0.5) {
        return suffix;
      }
    }

    return null;
  }

  generateSimilarName(pattern, func) {
    const prefixes = ['get', 'set', 'is', 'has', 'create', 'update', 'delete',
                      'handle', 'process', 'render', 'fetch', 'load', 'save'];

    if (prefixes.includes(pattern)) {
      // 基于返回类型生成名字
      const suffix = this.inferSuffixFromFunction(func);
      return pattern + suffix;
    } else {
      // 后缀模式
      return 'unknown' + pattern;
    }
  }

  inferSuffixFromFunction(func) {
    if (func.returnType === 'boolean') return 'Valid';
    if (func.returnType === 'string') return 'String';
    if (func.returnType === 'number') return 'Count';
    if (func.returnType === 'array') return 'List';
    if (func.returnType === 'object') return 'Data';
    if (func.returnType === 'promise') return 'Async';
    return 'Result';
  }
}

// ==================== 知识图谱推理器 ====================

class KnowledgeGraphReasoner {
  constructor(code) {
    this.code = code;
    this.nodes = new Map(); // funcName -> {calls: [], calledBy: [], props: {}}
    this.buildGraph();
  }

  buildGraph() {
    console.log('\n🔗 构建知识图谱...');

    // 提取函数定义
    const funcPattern = /(?:function\s+([a-zA-Z_$][\w$]*)|var\s+([a-zA-Z_$][\w$]*)\s*=\s*function)/g;
    let match;

    while ((match = funcPattern.exec(this.code)) !== null) {
      const name = match[1] || match[2];
      if (!this.nodes.has(name)) {
        this.nodes.set(name, {
          calls: [],
          calledBy: [],
          properties: {},
        });
      }
    }

    // 提取调用关系
    const callPattern = /\b([a-zA-Z_$][\w$]*)\s*\(/g;
    const lines = this.code.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let callMatch;

      // 找当前行所属的函数
      const currentFunc = this.findEnclosingFunction(i, lines);

      while ((callMatch = callPattern.exec(line)) !== null) {
        const calledFunc = callMatch[1];

        if (this.isKeyword(calledFunc)) continue;

        if (currentFunc && this.nodes.has(currentFunc)) {
          this.nodes.get(currentFunc).calls.push(calledFunc);
        }

        if (this.nodes.has(calledFunc)) {
          this.nodes.get(calledFunc).calledBy.push(currentFunc || 'global');
        }
      }
    }

    console.log(`   ${this.nodes.size} 个节点, ${this.countEdges()} 条边`);
  }

  findEnclosingFunction(lineNum, lines) {
    // 简化实现：向上查找最近的函数定义
    for (let i = lineNum; i >= 0; i--) {
      const match = lines[i].match(/(?:function\s+([a-zA-Z_$][\w$]*)|var\s+([a-zA-Z_$][\w$]*)\s*=\s*function)/);
      if (match) {
        return match[1] || match[2];
      }
    }
    return null;
  }

  isKeyword(name) {
    const keywords = ['if', 'for', 'while', 'switch', 'catch', 'function',
                      'return', 'typeof', 'new', 'delete', 'void', 'require',
                      'import', 'export', 'console', 'Object', 'Array', 'String',
                      'Number', 'Boolean', 'Math', 'Date', 'JSON', 'Promise'];
    return keywords.includes(name);
  }

  countEdges() {
    let count = 0;
    for (const [, node] of this.nodes) {
      count += node.calls.length;
    }
    return count;
  }

  // 标签传播推理
  propagateLabels(knownMappings) {
    console.log('\n🧠 知识图谱推理...');

    const inferences = [];
    const known = new Map(knownMappings.map(m => [m.original, m.readable]));

    // 多轮传播
    for (let round = 0; round < 3; round++) {
      let newInferences = 0;

      for (const [funcName, node] of this.nodes) {
        if (known.has(funcName)) continue;

        // 基于调用者推断
        const callerHints = this.inferFromCallers(funcName, node.calledBy, known);

        // 基于被调用者推断
        const calleeHints = this.inferFromCallees(funcName, node.calls, known);

        // 合并证据
        const combined = this.combineHints([...callerHints, ...calleeHints]);

        if (combined && combined.confidence >= 0.7) {
          inferences.push({
            original: funcName,
            readable: combined.name,
            confidence: combined.confidence,
            source: 'knowledge-graph',
            evidence: combined.evidence,
          });
          known.set(funcName, combined.name);
          newInferences++;
        }
      }

      if (newInferences === 0) break;
      console.log(`   第 ${round + 1} 轮传播: 新增 ${newInferences} 个推断`);
    }

    return inferences;
  }

  inferFromCallers(funcName, callers, known) {
    const hints = [];

    for (const caller of callers) {
      const callerName = known.get(caller);
      if (!callerName) continue;

      // 如果调用者是 handleXxx，被调用者可能是 processXxx 或 xxxHandler
      if (callerName.startsWith('handle')) {
        hints.push({
          name: callerName.replace('handle', 'process'),
          confidence: 0.6,
          evidence: `called by ${callerName}`,
        });
      }

      // 如果调用者是 getXxx，被调用者可能是 fetchXxx 或 loadXxx
      if (callerName.startsWith('get')) {
        hints.push({
          name: callerName.replace('get', 'fetch'),
          confidence: 0.5,
          evidence: `called by ${callerName}`,
        });
      }
    }

    return hints;
  }

  inferFromCallees(funcName, callees, known) {
    const hints = [];

    const knownCallees = callees.filter(c => known.has(c)).map(c => known.get(c));

    if (knownCallees.length === 0) return hints;

    // 如果调用了多个 validate* 函数，可能是 validateAll 或 validator
    const validateCalls = knownCallees.filter(n => n.toLowerCase().includes('valid'));
    if (validateCalls.length >= 2) {
      hints.push({
        name: 'validateAll',
        confidence: 0.7,
        evidence: `calls ${validateCalls.join(', ')}`,
      });
    }

    // 如果调用了 parse 和 format，可能是 transform
    const hasParse = knownCallees.some(n => n.toLowerCase().includes('parse'));
    const hasFormat = knownCallees.some(n => n.toLowerCase().includes('format'));
    if (hasParse && hasFormat) {
      hints.push({
        name: 'transform',
        confidence: 0.65,
        evidence: 'calls parse and format',
      });
    }

    return hints;
  }

  combineHints(hints) {
    if (hints.length === 0) return null;

    // 统计各名字的证据
    const nameScores = new Map();

    for (const hint of hints) {
      const current = nameScores.get(hint.name) || { confidence: 0, evidence: [] };
      current.confidence = Math.max(current.confidence, hint.confidence);
      current.evidence.push(hint.evidence);
      nameScores.set(hint.name, current);
    }

    // 找最高分的
    let best = null;
    let bestScore = 0;

    for (const [name, data] of nameScores) {
      // 多个证据支持则加分
      const score = data.confidence + (data.evidence.length - 1) * 0.1;
      if (score > bestScore) {
        bestScore = score;
        best = { name, confidence: Math.min(score, 0.9), evidence: data.evidence };
      }
    }

    return best;
  }
}

// ==================== 增强LLM分析器 ====================

class EnhancedLLMAnalyzer {
  constructor() {
    this.stats = { apiCalls: 0, consensus: 0, conflicts: 0 };
  }

  async analyze(funcName, funcBody, existingMappings, callGraph) {
    // 策略1: Chain-of-Thought 推理
    const cotResult = await this.chainOfThought(funcName, funcBody, existingMappings);

    // 策略2: Self-Consistency (多次采样)
    const scResults = await this.selfConsistency(funcName, funcBody, existingMappings);

    // 策略3: 反事实验证
    const cfResult = await this.counterfactualValidation(funcName, funcBody, cotResult.name);

    // 融合结果
    return this.fuseResults(cotResult, scResults, cfResult);
  }

  async chainOfThought(funcName, funcBody, existingMappings) {
    const examples = existingMappings.slice(0, 10)
      .map(m => `${m.original} → ${m.readable}`).join('\n');

    const prompt = `你是代码分析专家。请一步步分析这个混淆的 JavaScript 函数。

已知映射示例:
${examples}

待分析函数名: ${funcName}
代码:
\`\`\`javascript
${funcBody.slice(0, 1200)}
\`\`\`

请按以下步骤分析:

步骤1: 分析函数的输入参数
- 参数数量和可能的类型

步骤2: 分析函数体的主要逻辑
- 使用了什么控制结构 (if/for/while)
- 调用了哪些其他函数
- 有什么明显的模式

步骤3: 分析返回值
- 返回什么类型的数据
- 在什么条件下返回

步骤4: 综合推断
- 基于以上分析，这个函数最可能的原始名称是什么

最后输出 JSON:
{"name": "推断的名称", "confidence": 0.8, "reasoning": "推理过程摘要"}`;

    const response = await this.callLLM(prompt);
    return this.parseResponse(response);
  }

  async selfConsistency(funcName, funcBody, existingMappings) {
    const results = [];

    // 多次采样，使用略微不同的 prompt
    const prompts = [
      `分析函数 ${funcName}，推断其原始名称。代码:\n${funcBody.slice(0, 800)}`,
      `这个函数 ${funcName} 的功能是什么？给它一个描述性的名字。\n${funcBody.slice(0, 800)}`,
      `如果要重构这段代码，函数 ${funcName} 应该叫什么名字？\n${funcBody.slice(0, 800)}`,
    ];

    for (const prompt of prompts) {
      const fullPrompt = prompt + '\n\n只输出 JSON: {"name": "名称"}';
      const response = await this.callLLM(fullPrompt);
      const parsed = this.parseResponse(response);
      if (parsed.name) {
        results.push(parsed.name);
      }
    }

    return results;
  }

  async counterfactualValidation(funcName, funcBody, proposedName) {
    if (!proposedName) return { valid: false };

    const prompt = `验证函数命名是否合理。

原混淆名: ${funcName}
推断名称: ${proposedName}

代码:
\`\`\`javascript
${funcBody.slice(0, 800)}
\`\`\`

问题:
1. 如果这个函数真的叫 "${proposedName}"，它应该做什么？
2. 实际代码的行为与这个名字匹配吗？
3. 有没有更好的名字？

输出 JSON: {"valid": true/false, "betterName": "如果有更好的名字", "reason": "理由"}`;

    const response = await this.callLLM(prompt);
    return this.parseValidationResponse(response);
  }

  fuseResults(cotResult, scResults, cfResult) {
    // 计算各名字的得分
    const scores = new Map();

    // CoT 结果权重: 0.4
    if (cotResult.name) {
      scores.set(cotResult.name, (scores.get(cotResult.name) || 0) + 0.4 * cotResult.confidence);
    }

    // Self-Consistency 结果权重: 0.4
    const scCounts = {};
    for (const name of scResults) {
      scCounts[name] = (scCounts[name] || 0) + 1;
    }
    for (const [name, count] of Object.entries(scCounts)) {
      const scScore = count / scResults.length;
      scores.set(name, (scores.get(name) || 0) + 0.4 * scScore);
    }

    // 反事实验证权重: 0.2
    if (cfResult.valid && cotResult.name) {
      scores.set(cotResult.name, (scores.get(cotResult.name) || 0) + 0.2);
    } else if (cfResult.betterName) {
      scores.set(cfResult.betterName, (scores.get(cfResult.betterName) || 0) + 0.25);
    }

    // 选最高分
    let bestName = null;
    let bestScore = 0;

    for (const [name, score] of scores) {
      if (score > bestScore) {
        bestScore = score;
        bestName = name;
      }
    }

    // 检查一致性
    if (scResults.length >= 3) {
      const mostCommon = Object.entries(scCounts).sort((a, b) => b[1] - a[1])[0];
      if (mostCommon && mostCommon[1] >= 2 && mostCommon[0] === bestName) {
        this.stats.consensus++;
        bestScore = Math.min(bestScore + 0.1, 0.95);
      } else {
        this.stats.conflicts++;
      }
    }

    return {
      name: bestName,
      confidence: bestScore,
      source: 'enhanced-llm',
      cotReasoning: cotResult.reasoning,
      scAgreement: scResults.filter(r => r === bestName).length / Math.max(scResults.length, 1),
      cfValidated: cfResult.valid,
    };
  }

  async callLLM(prompt) {
    this.stats.apiCalls++;

    try {
      const { query } = await import('@anthropic-ai/claude-agent-sdk');
      let responseText = '';

      const stream = query({
        prompt,
        options: {
          maxTurns: 1,
          systemPrompt: '你是代码分析专家。分析混淆的 JavaScript 代码并推断原始变量名。',
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
        max_tokens: 2048,
        temperature: CONFIG.llm.temperature,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return data.content[0].text;
  }

  parseResponse(content) {
    try {
      const match = content.match(/\{[\s\S]*\}/);
      if (!match) return { name: null, confidence: 0 };
      const parsed = JSON.parse(match[0]);
      return {
        name: parsed.name,
        confidence: parsed.confidence || 0.7,
        reasoning: parsed.reasoning || '',
      };
    } catch {
      return { name: null, confidence: 0 };
    }
  }

  parseValidationResponse(content) {
    try {
      const match = content.match(/\{[\s\S]*\}/);
      if (!match) return { valid: false };
      return JSON.parse(match[0]);
    } catch {
      return { valid: false };
    }
  }

  getStats() {
    return { ...this.stats };
  }
}

// ==================== 多源证据融合器 ====================

class EvidenceFuser {
  constructor() {
    this.sources = [];
  }

  addSource(name, inferences, weight) {
    this.sources.push({ name, inferences, weight });
  }

  fuse() {
    console.log('\n⚖️ 多源证据融合...');

    const combined = new Map();

    for (const source of this.sources) {
      for (const inf of source.inferences) {
        const key = inf.original;
        if (!combined.has(key)) {
          combined.set(key, { votes: [], original: inf.original });
        }
        combined.get(key).votes.push({
          name: inf.readable,
          confidence: inf.confidence * source.weight,
          source: source.name,
        });
      }
    }

    // 对每个变量计算最终结果
    const results = [];

    for (const [original, data] of combined) {
      // 按名字分组
      const nameScores = new Map();

      for (const vote of data.votes) {
        const current = nameScores.get(vote.name) || { score: 0, sources: [] };
        current.score += vote.confidence;
        current.sources.push(vote.source);
        nameScores.set(vote.name, current);
      }

      // 选最高分
      let bestName = null;
      let bestData = null;

      for (const [name, scoreData] of nameScores) {
        if (!bestData || scoreData.score > bestData.score) {
          bestName = name;
          bestData = scoreData;
        }
      }

      if (bestName) {
        // 多源一致加分
        const sourceCount = new Set(bestData.sources).size;
        const bonus = sourceCount > 1 ? 0.1 * (sourceCount - 1) : 0;

        results.push({
          original,
          readable: bestName,
          confidence: Math.min(bestData.score + bonus, 0.98),
          sources: [...new Set(bestData.sources)],
          sourceCount,
        });
      }
    }

    console.log(`   融合 ${results.length} 个最终映射`);
    console.log(`   多源支持: ${results.filter(r => r.sourceCount > 1).length} 个`);

    return results.sort((a, b) => b.confidence - a.confidence);
  }
}

// ==================== 主流程 ====================

async function main() {
  console.log('═'.repeat(60));
  console.log('  终极优化版变量推断流水线');
  console.log('═'.repeat(60));

  const startTime = Date.now();

  // 1. 加载数据
  console.log('\n📁 加载数据...');

  const v1CodePath = resolve(projectRoot, CONFIG.versions.v1.code);
  const v2CodePath = resolve(projectRoot, CONFIG.versions.v2.code);
  const mappingsPath = resolve(projectRoot, CONFIG.versions.v1.mappings);

  const v1Code = existsSync(v1CodePath) ? readFileSync(v1CodePath, 'utf-8') : null;
  const v2Code = existsSync(v2CodePath) ? readFileSync(v2CodePath, 'utf-8') : null;
  const existingMappings = existsSync(mappingsPath)
    ? JSON.parse(readFileSync(mappingsPath, 'utf-8'))
    : [];

  console.log(`   v2.0.57: ${v1Code ? (v1Code.length / 1024 / 1024).toFixed(2) + ' MB' : '未找到'}`);
  console.log(`   v2.0.62: ${v2Code ? (v2Code.length / 1024 / 1024).toFixed(2) + ' MB' : '未找到'}`);
  console.log(`   已有映射: ${existingMappings.length} 个`);

  const evidenceFuser = new EvidenceFuser();

  // 2. 跨版本分析
  if (v1Code && v2Code) {
    console.log('\n' + '─'.repeat(60));
    console.log('  阶段1: 跨版本交叉验证');
    console.log('─'.repeat(60));

    const crossAnalyzer = new CrossVersionAnalyzer(v1Code, v2Code);
    const crossMatches = crossAnalyzer.findCrossVersionMatches();

    // 将跨版本匹配转换为推断
    const crossInferences = crossMatches.map(m => ({
      original: m.v1Name,
      readable: `matched_${m.v2Name}`, // 需要后续解析
      confidence: CONFIG.confidence.crossVersionMatch * m.similarity,
    }));

    evidenceFuser.addSource('cross-version', crossInferences, 1.2);
  }

  // 3. 语义聚类
  const mainCode = v1Code || v2Code;
  if (mainCode) {
    console.log('\n' + '─'.repeat(60));
    console.log('  阶段2: 语义聚类分析');
    console.log('─'.repeat(60));

    const crossAnalyzer = new CrossVersionAnalyzer(mainCode, mainCode);
    const clusterer = new SemanticClusterer(crossAnalyzer.v1Functions, existingMappings);
    clusterer.cluster();
    const clusterInferences = clusterer.inferFromClusters();

    evidenceFuser.addSource('semantic-cluster', clusterInferences, 0.9);
  }

  // 4. 知识图谱推理
  if (mainCode) {
    console.log('\n' + '─'.repeat(60));
    console.log('  阶段3: 知识图谱推理');
    console.log('─'.repeat(60));

    const kgReasoner = new KnowledgeGraphReasoner(mainCode);
    const kgInferences = kgReasoner.propagateLabels(existingMappings);

    evidenceFuser.addSource('knowledge-graph', kgInferences, 0.85);
  }

  // 5. 增强LLM分析 (抽样)
  console.log('\n' + '─'.repeat(60));
  console.log('  阶段4: 增强LLM分析');
  console.log('─'.repeat(60));

  const llmAnalyzer = new EnhancedLLMAnalyzer();
  const crossAnalyzer = new CrossVersionAnalyzer(mainCode, mainCode);
  const unknownFuncs = [...crossAnalyzer.v1Functions.entries()]
    .filter(([name]) => !existingMappings.some(m => m.original === name))
    .slice(0, 100); // 限制数量

  console.log(`   分析 ${unknownFuncs.length} 个未知函数...`);

  const llmInferences = [];
  let processed = 0;

  for (const [funcName, funcData] of unknownFuncs) {
    try {
      const result = await llmAnalyzer.analyze(
        funcName,
        funcData.body,
        existingMappings,
        null
      );

      if (result.name && result.confidence >= 0.6) {
        llmInferences.push({
          original: funcName,
          readable: result.name,
          confidence: result.confidence,
        });
      }

      processed++;
      if (processed % 20 === 0) {
        console.log(`   进度: ${processed}/${unknownFuncs.length}`);
      }

      // 避免限流
      await new Promise(r => setTimeout(r, 500));
    } catch (error) {
      console.log(`   跳过 ${funcName}: ${error.message}`);
    }
  }

  evidenceFuser.addSource('enhanced-llm', llmInferences, 1.0);

  // 6. 融合所有证据
  console.log('\n' + '─'.repeat(60));
  console.log('  阶段5: 证据融合');
  console.log('─'.repeat(60));

  const finalMappings = evidenceFuser.fuse();

  // 合并已有映射
  const allMappings = [...existingMappings];
  for (const fm of finalMappings) {
    if (!allMappings.some(m => m.original === fm.original)) {
      allMappings.push(fm);
    }
  }

  // 7. 保存结果
  console.log('\n💾 保存结果...');

  const outputDir = resolve(projectRoot, CONFIG.output);
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(
    join(outputDir, 'VARIABLE_MAPPING_ULTIMATE.json'),
    JSON.stringify(allMappings, null, 2)
  );

  // 8. 统计报告
  const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(2);
  const llmStats = llmAnalyzer.getStats();

  const highConf = allMappings.filter(m => m.confidence >= 0.9).length;
  const medConf = allMappings.filter(m => m.confidence >= 0.7 && m.confidence < 0.9).length;
  const lowConf = allMappings.filter(m => m.confidence < 0.7).length;
  const multiSource = finalMappings.filter(m => m.sourceCount > 1).length;

  console.log('\n' + '═'.repeat(60));
  console.log('  最终统计');
  console.log('═'.repeat(60));
  console.log(`  执行时间: ${duration} 分钟`);
  console.log(`  API 调用: ${llmStats.apiCalls}`);
  console.log();
  console.log(`  总映射数: ${allMappings.length}`);
  console.log(`  新增映射: ${finalMappings.length}`);
  console.log(`  多源支持: ${multiSource}`);
  console.log();
  console.log(`  置信度分布:`);
  console.log(`    高 (90%+): ${highConf}`);
  console.log(`    中 (70-89%): ${medConf}`);
  console.log(`    低 (<70%): ${lowConf}`);
  console.log();

  // 计算预估准确率
  const estimatedAccuracy = (
    (highConf * 0.95 + medConf * 0.80 + lowConf * 0.55) / allMappings.length
  );

  console.log(`  📈 预估准确率: ${(estimatedAccuracy * 100).toFixed(1)}%`);
  console.log('═'.repeat(60));
  console.log();
}

main().catch(console.error);

#!/usr/bin/env node
/**
 * 导出未知函数列表，供 Claude Code 直接推断
 */

import { StaticAnalyzer } from './analyzer/StaticAnalyzer.js';
import { PatternRecognizer } from './analyzer/PatternRecognizer.js';
import { MappingManager } from './utils/MappingManager.js';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const args = process.argv.slice(2);
  const limit = parseInt(args.find(a => a.startsWith('--limit='))?.split('=')[1]) || 50;

  // 加载映射
  const mappingManager = new MappingManager();
  const mappingsPath = join(__dirname, '../data/existing-mappings.json');
  if (existsSync(mappingsPath)) {
    const data = JSON.parse(readFileSync(mappingsPath, 'utf-8'));
    mappingManager.loadFromArray(data);
  }

  // 先运行静态分析和模式识别
  const projectRoot = resolve(__dirname, '../../..');
  const inputFile = join(projectRoot, 'decompiled/v2.0.62/cli.original.js');
  const sourceCode = readFileSync(inputFile, 'utf-8');

  const staticAnalyzer = new StaticAnalyzer();
  const patternRecognizer = new PatternRecognizer();

  const staticInferences = await staticAnalyzer.analyze(sourceCode, mappingManager);
  for (const inf of staticInferences) {
    if (inf.confidence >= 0.5 && !mappingManager.has(inf.original)) {
      mappingManager.add({
        original: inf.original,
        readable: inf.inferred,
        confidence: inf.confidence,
        source: 'static'
      });
    }
  }

  const patternInferences = await patternRecognizer.recognize(sourceCode, mappingManager);
  for (const inf of patternInferences) {
    if (inf.confidence >= 0.5 && !mappingManager.has(inf.original)) {
      mappingManager.add({
        original: inf.original,
        readable: inf.inferred,
        confidence: inf.confidence,
        source: 'pattern'
      });
    }
  }

  console.log(`已有映射: ${mappingManager.size()}`);

  // 提取未知函数
  const unknowns = extractUnknownFunctions(sourceCode, mappingManager, limit);
  console.log(`发现 ${unknowns.length} 个待推断的函数\n`);

  // 输出供 Claude Code 分析的格式
  console.log('='.repeat(60));
  console.log('以下函数需要推断名称，请分析代码上下文：');
  console.log('='.repeat(60));

  for (let i = 0; i < unknowns.length; i++) {
    const func = unknowns[i];
    console.log(`\n### ${i + 1}. 函数 \`${func.name}\` (行 ${func.lineNumber})`);
    console.log('```javascript');
    console.log(func.context);
    console.log('```');
  }

  // 保存到文件
  const outputPath = join(__dirname, '../output/unknowns.json');
  writeFileSync(outputPath, JSON.stringify(unknowns, null, 2));
  console.log(`\n\n已保存到: ${outputPath}`);
}

function extractUnknownFunctions(code, mappingManager, limit) {
  const functions = [];
  const allLines = code.split('\n');

  // 构建行偏移索引
  const lineOffsets = [0];
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '\n') lineOffsets.push(i + 1);
  }

  // 匹配函数
  const patterns = [
    /function\s+([a-zA-Z_$][\w$]*)\s*\(/g,
    /var\s+([a-zA-Z_$][\w$]*)\s*=\s*(?:function|\([^)]*\)\s*=>)/g,
  ];

  const seen = new Set();

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(code)) !== null) {
      const name = match[1];

      // 跳过已知和常见名称
      if (mappingManager.has(name)) continue;
      if (isCommonName(name)) continue;
      if (seen.has(name)) continue;
      seen.add(name);

      // 获取行号
      const lineNumber = getLineNumber(match.index, lineOffsets);

      // 获取上下文（前5行 + 函数开头15行）
      const startLine = Math.max(0, lineNumber - 5);
      const endLine = Math.min(allLines.length, lineNumber + 15);
      const context = allLines.slice(startLine, endLine).join('\n');

      functions.push({ name, lineNumber: lineNumber + 1, context });

      if (functions.length >= limit) break;
    }
    if (functions.length >= limit) break;
  }

  return functions;
}

function getLineNumber(offset, lineOffsets) {
  let low = 0, high = lineOffsets.length - 1;
  while (low < high) {
    const mid = Math.ceil((low + high) / 2);
    if (lineOffsets[mid] <= offset) low = mid;
    else high = mid - 1;
  }
  return low;
}

function isCommonName(name) {
  // 排除单字母和常见短名称
  if (name.length <= 2) return true;
  // 排除 React 组件常见模式
  if (/^[A-Z][a-z]+$/.test(name) && name.length <= 4) return true;
  return false;
}

main().catch(console.error);

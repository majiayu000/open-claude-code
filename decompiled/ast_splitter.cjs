#!/usr/bin/env node
/**
 * Claude Code AST-based Code Splitter
 * 使用 AST 解析器精确拆分代码
 */

const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

const CLI_PATH = path.join(__dirname, 'cli.formatted.js');
const OUTPUT_DIR = path.join(__dirname, 'src');

// 清理并创建输出目录
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true });
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

console.log('Reading formatted cli.js...');
const code = fs.readFileSync(CLI_PATH, 'utf-8');
const lines = code.split('\n');

console.log(`Total lines: ${lines.length}`);
console.log(`Total size: ${(code.length / 1024 / 1024).toFixed(2)} MB`);

// 收集所有代码块
const codeBlocks = [];
let currentBlock = {
  type: 'header',
  startLine: 0,
  endLine: 0,
  code: [],
  name: 'runtime',
  category: 'core'
};

console.log('\n=== Parsing Code Structure ===');

// 改进的模块检测模式
const modulePatterns = [
  // var XXX = L(() => {...}) - 懒加载模块
  { regex: /^var\s+([A-Za-z0-9_$]+)\s*=\s*L\s*\(\s*\(\s*\)\s*=>\s*\{/, type: 'lazy-module' },
  // var XXX = U((exports, module) => {...}) - CommonJS 模块
  { regex: /^var\s+([A-Za-z0-9_$]+)\s*=\s*U\s*\(\s*\(/, type: 'cjs-module' },
  // function XXX(...) {...}
  { regex: /^function\s+([A-Za-z0-9_$]+)\s*\(/, type: 'function' },
  // async function XXX(...) {...}
  { regex: /^async\s+function\s+([A-Za-z0-9_$]+)\s*\(/, type: 'async-function' },
  // class XXX {...}
  { regex: /^class\s+([A-Za-z0-9_$]+)/, type: 'class' },
  // var XXX = {...} 对象定义
  { regex: /^var\s+([A-Za-z0-9_$]+)\s*=\s*\{/, type: 'object' },
  // var {xxx} = ... 解构
  { regex: /^var\s*\{([^}]+)\}\s*=/, type: 'destructure' },
  // import ... from ...
  { regex: /^import\s*(?:\{[^}]*\}|[^;]+)\s*from/, type: 'import' },
  // export ...
  { regex: /^export\s+/, type: 'export' },
];

// 跟踪大括号平衡
let braceBalance = 0;
let parenBalance = 0;
let inBlock = false;
let blockStartLine = 0;
let blockLines = [];
let blockName = '';
let blockType = '';

// 分类规则
const categoryRules = [
  // 工具
  { pattern: /["'](?:Read|Write|Edit|Bash|Glob|Grep|Task|WebFetch|WebSearch|TodoWrite|NotebookEdit|AskUserQuestion|BashOutput|KillShell|Skill|SlashCommand|EnterPlanMode|ExitPlanMode)["']/, category: 'tools' },
  // 代理
  { pattern: /["'](?:general-purpose|claude-code-guide|Explore|Plan|statusline-setup)["']|agentType|subagent/, category: 'agents' },
  // 命令
  { pattern: /["']\/(?:help|login|logout|config|model|mcp|status|doctor|bug|cost|memory|permissions|review|compact|init|update|install|teleport|tasks|resume|vim)["']/, category: 'commands' },
  // API
  { pattern: /api\.anthropic|bedrock|vertex|\/v1\/messages|createMessage/, category: 'api' },
  // UI
  { pattern: /createElement|React\.|jsx|ink|useInput|useApp|Box\s*,|Text\s*,|render\s*\(/, category: 'ui' },
  // MCP
  { pattern: /mcp|MCP|ModelContextProtocol/, category: 'mcp' },
  // 认证
  { pattern: /oauth|OAuth|token|Token|auth|Auth|login|Login|credential/, category: 'auth' },
  // 遥测
  { pattern: /tengu_|telemetry|Telemetry|analytics|Analytics/, category: 'telemetry' },
  // 配置
  { pattern: /config|Config|settings|Settings|options|Options|CLAUDE_/, category: 'config' },
  // Lodash
  { pattern: /__lodash|_\.|\bisArray\b|\bisObject\b|\bisFunction\b|\bforEach\b|\bmap\b|\bfilter\b|\breduce\b/, category: 'lodash' },
  // 文件系统
  { pattern: /readFile|writeFile|fs\.|path\.|dirname|basename|extname/, category: 'fs' },
  // Git
  { pattern: /git\s|\.git|commit|branch|remote|repository/, category: 'git' },
  // 进程
  { pattern: /spawn|exec|child_process|process\./, category: 'process' },
  // 网络
  { pattern: /http|https|fetch|axios|request|response|socket/, category: 'network' },
  // 加密
  { pattern: /crypto|hash|encrypt|decrypt|cipher/, category: 'crypto' },
];

function classifyCode(code) {
  for (const rule of categoryRules) {
    if (rule.pattern.test(code)) {
      return rule.category;
    }
  }
  return 'core';
}

function countBraces(line) {
  let braces = 0;
  let parens = 0;
  let inString = false;
  let stringChar = '';
  let escaped = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const prevChar = i > 0 ? line[i - 1] : '';

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === '\\') {
      escaped = true;
      continue;
    }

    if (!inString && (char === '"' || char === "'" || char === '`')) {
      inString = true;
      stringChar = char;
      continue;
    }

    if (inString && char === stringChar) {
      inString = false;
      continue;
    }

    if (!inString) {
      if (char === '{') braces++;
      else if (char === '}') braces--;
      else if (char === '(') parens++;
      else if (char === ')') parens--;
    }
  }

  return { braces, parens };
}

// 解析代码
console.log('Scanning for code blocks...');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  if (!inBlock) {
    // 检查是否是新块的开始
    let matched = false;

    for (const pattern of modulePatterns) {
      const match = trimmed.match(pattern.regex);
      if (match) {
        // 保存之前的块
        if (currentBlock.code.length > 0) {
          currentBlock.endLine = i - 1;
          codeBlocks.push({ ...currentBlock });
        }

        // 开始新块
        inBlock = true;
        blockStartLine = i;
        blockLines = [line];
        blockName = match[1] || `block_${i}`;
        blockType = pattern.type;

        const { braces, parens } = countBraces(line);
        braceBalance = braces;
        parenBalance = parens;

        // 检查是否单行完成
        if (braceBalance <= 0 && parenBalance <= 0 && (trimmed.endsWith(';') || trimmed.endsWith(','))) {
          inBlock = false;
          const blockCode = blockLines.join('\n');
          codeBlocks.push({
            type: blockType,
            startLine: blockStartLine,
            endLine: i,
            code: blockLines,
            name: blockName,
            category: classifyCode(blockCode)
          });

          currentBlock = {
            type: 'inline',
            startLine: i + 1,
            endLine: i + 1,
            code: [],
            name: `inline_${i}`,
            category: 'core'
          };
        }

        matched = true;
        break;
      }
    }

    if (!matched) {
      currentBlock.code.push(line);
    }
  } else {
    // 在块内
    blockLines.push(line);

    const { braces, parens } = countBraces(line);
    braceBalance += braces;
    parenBalance += parens;

    // 检查块是否结束
    if (braceBalance <= 0 && parenBalance <= 0) {
      inBlock = false;
      const blockCode = blockLines.join('\n');
      codeBlocks.push({
        type: blockType,
        startLine: blockStartLine,
        endLine: i,
        code: blockLines,
        name: blockName,
        category: classifyCode(blockCode)
      });

      currentBlock = {
        type: 'inline',
        startLine: i + 1,
        endLine: i + 1,
        code: [],
        name: `inline_${i}`,
        category: 'core'
      };
    }
  }
}

// 保存最后一个块
if (currentBlock.code.length > 0) {
  currentBlock.endLine = lines.length - 1;
  codeBlocks.push(currentBlock);
}

console.log(`Found ${codeBlocks.length} code blocks`);

// 统计
const stats = {
  total: codeBlocks.length,
  byType: {},
  byCategory: {},
  largestBlocks: []
};

codeBlocks.forEach(block => {
  stats.byType[block.type] = (stats.byType[block.type] || 0) + 1;
  stats.byCategory[block.category] = (stats.byCategory[block.category] || 0) + 1;
});

// 找出最大的块
codeBlocks
  .map(b => ({ name: b.name, lines: b.code.length, category: b.category, type: b.type }))
  .sort((a, b) => b.lines - a.lines)
  .slice(0, 30)
  .forEach(b => stats.largestBlocks.push(b));

console.log('\n=== Writing Files ===');

// 创建目录
const categories = [...new Set(codeBlocks.map(b => b.category))];
categories.forEach(cat => {
  fs.mkdirSync(path.join(OUTPUT_DIR, cat), { recursive: true });
});

// 按类别分组并写入文件
const categoryBlocks = {};
codeBlocks.forEach(block => {
  if (!categoryBlocks[block.category]) {
    categoryBlocks[block.category] = [];
  }
  categoryBlocks[block.category].push(block);
});

let totalFiles = 0;

for (const [category, blocks] of Object.entries(categoryBlocks)) {
  const categoryDir = path.join(OUTPUT_DIR, category);

  // 如果块太多，按大小分组
  if (blocks.length > 50) {
    // 大块单独文件，小块合并
    const largeBlocks = blocks.filter(b => b.code.length > 50);
    const smallBlocks = blocks.filter(b => b.code.length <= 50);

    // 写入大块
    const usedNames = new Set();
    largeBlocks.forEach((block, idx) => {
      let fileName = block.name;
      if (usedNames.has(fileName)) {
        fileName = `${fileName}_${idx}`;
      }
      usedNames.add(fileName);

      const header = `/**
 * Module: ${block.name}
 * Type: ${block.type}
 * Category: ${block.category}
 * Lines: ${block.startLine + 1} - ${block.endLine + 1} (${block.code.length} lines)
 */

`;
      fs.writeFileSync(
        path.join(categoryDir, `${fileName}.js`),
        header + block.code.join('\n')
      );
      totalFiles++;
    });

    // 合并小块
    if (smallBlocks.length > 0) {
      const combinedCode = smallBlocks.map(b =>
        `// === ${b.name} (${b.type}) ===\n${b.code.join('\n')}`
      ).join('\n\n');

      fs.writeFileSync(
        path.join(categoryDir, `_combined_small.js`),
        `/**
 * Combined small modules for ${category}
 * Total: ${smallBlocks.length} modules
 */

${combinedCode}`
      );
      totalFiles++;
    }
  } else {
    // 直接写入每个块
    const usedNames = new Set();
    blocks.forEach((block, idx) => {
      let fileName = block.name;
      if (usedNames.has(fileName)) {
        fileName = `${fileName}_${idx}`;
      }
      usedNames.add(fileName);

      const header = `/**
 * Module: ${block.name}
 * Type: ${block.type}
 * Category: ${block.category}
 * Lines: ${block.startLine + 1} - ${block.endLine + 1} (${block.code.length} lines)
 */

`;
      fs.writeFileSync(
        path.join(categoryDir, `${fileName}.js`),
        header + block.code.join('\n')
      );
      totalFiles++;
    });
  }
}

// 写入统计
fs.writeFileSync(
  path.join(OUTPUT_DIR, 'stats.json'),
  JSON.stringify(stats, null, 2)
);

// 写入索引
const indexContent = `/**
 * Claude Code Decompiled
 * Version: 2.0.57
 *
 * Statistics:
 * - Total Blocks: ${stats.total}
 * - Total Files: ${totalFiles}
 *
 * Categories:
${Object.entries(stats.byCategory).map(([k, v]) => ` * - ${k}: ${v}`).join('\n')}
 *
 * Block Types:
${Object.entries(stats.byType).map(([k, v]) => ` * - ${k}: ${v}`).join('\n')}
 */

module.exports = {
  stats: require('./stats.json')
};
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.js'), indexContent);

// 打印报告
console.log('\n========== SPLIT COMPLETE ==========\n');
console.log(`📁 Output: ${OUTPUT_DIR}`);
console.log(`📦 Total Blocks: ${stats.total}`);
console.log(`📄 Total Files: ${totalFiles}`);

console.log('\n📊 By Category:');
Object.entries(stats.byCategory)
  .sort((a, b) => b[1] - a[1])
  .forEach(([cat, count]) => {
    console.log(`   ${cat}: ${count}`);
  });

console.log('\n📊 By Type:');
Object.entries(stats.byType)
  .sort((a, b) => b[1] - a[1])
  .forEach(([type, count]) => {
    console.log(`   ${type}: ${count}`);
  });

console.log('\n📈 Largest Blocks:');
stats.largestBlocks.slice(0, 15).forEach(b => {
  console.log(`   ${b.name}: ${b.lines} lines (${b.category}/${b.type})`);
});

console.log('\n✅ Done!');

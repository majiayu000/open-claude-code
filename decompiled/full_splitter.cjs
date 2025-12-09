#!/usr/bin/env node
/**
 * Claude Code Full Splitter
 * 完整代码拆分器 - 按功能块拆分整个代码库
 */

const fs = require('fs');
const path = require('path');

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

// 目标: 把 45 万行代码分成合理的文件
// 策略: 按 1000-2000 行一个文件，根据内容分类

const CHUNK_SIZE = 1500; // 每个文件大约的行数
const categories = {
  runtime: [],      // 运行时代码
  tools: [],        // 工具实现
  agents: [],       // 代理实现
  commands: [],     // 命令实现
  ui: [],           // UI 组件
  api: [],          // API 调用
  mcp: [],          // MCP 协议
  auth: [],         // 认证
  config: [],       // 配置
  telemetry: [],    // 遥测
  git: [],          // Git 相关
  fs: [],           // 文件系统
  utils: [],        // 工具函数
  lodash: [],       // Lodash
  react: [],        // React/Ink
  network: [],      // 网络
  crypto: [],       // 加密
  process: [],      // 进程
  prompts: [],      // 提示词
  other: []         // 其他
};

// 内容分类规则 (优先级从高到低)
const classifyRules = [
  // 工具定义
  { test: (chunk) => /["'](?:Read|Write|Edit|Bash|Glob|Grep|Task|WebFetch|WebSearch|TodoWrite|NotebookEdit|AskUserQuestion|BashOutput|KillShell|Skill|SlashCommand|EnterPlanMode|ExitPlanMode)["']/.test(chunk) && /tool|Tool/.test(chunk), category: 'tools' },

  // 代理
  { test: (chunk) => /["'](?:general-purpose|claude-code-guide|Explore|Plan|statusline-setup)["']/.test(chunk) || /agentType|subagent|AgentDefinition/.test(chunk), category: 'agents' },

  // 命令
  { test: (chunk) => /["']\/(?:help|login|logout|config|model|mcp|status|doctor|bug|cost|memory|permissions|review|compact|init|update|install|teleport|tasks|resume|vim)["']/.test(chunk), category: 'commands' },

  // 提示词/系统消息
  { test: (chunk) => /You are|system.*prompt|systemPrompt|SYSTEM_PROMPT/.test(chunk) && chunk.length > 500, category: 'prompts' },

  // MCP
  { test: (chunk) => /mcp__|mcpClient|MCP|ModelContextProtocol|mcp.*server/i.test(chunk), category: 'mcp' },

  // API
  { test: (chunk) => /api\.anthropic|\/v1\/messages|createMessage|bedrock|vertex|anthropic-version/i.test(chunk), category: 'api' },

  // 认证
  { test: (chunk) => /oauth|OAuth|accessToken|refreshToken|authenticate|authorization|Bearer /i.test(chunk), category: 'auth' },

  // 遥测
  { test: (chunk) => /tengu_|telemetry|analytics|trackEvent|logEvent/i.test(chunk), category: 'telemetry' },

  // UI/React
  { test: (chunk) => /createElement|jsx|React\.|useEffect|useState|useCallback|render\s*\(|<\/|ink/i.test(chunk), category: 'ui' },

  // Git
  { test: (chunk) => /git\s|\.git|commit|branch|remote|repository|HEAD|origin/i.test(chunk) && !/digit/.test(chunk), category: 'git' },

  // 配置
  { test: (chunk) => /CLAUDE_|config|Config|settings|Settings|getConfig|setConfig/i.test(chunk), category: 'config' },

  // 文件系统
  { test: (chunk) => /readFile|writeFile|fs\.|readdir|mkdir|unlink|stat\(|lstat|realpath/i.test(chunk), category: 'fs' },

  // 进程
  { test: (chunk) => /spawn|exec\(|child_process|process\.|stdin|stdout|stderr/i.test(chunk), category: 'process' },

  // 网络
  { test: (chunk) => /http\.|https\.|fetch\(|axios|request\(|response\.|socket|WebSocket/i.test(chunk), category: 'network' },

  // 加密
  { test: (chunk) => /crypto|hash|encrypt|decrypt|cipher|randomBytes|createHash/i.test(chunk), category: 'crypto' },

  // Lodash
  { test: (chunk) => /__lodash|lodash|isArray|isObject|isFunction|forEach|filter|reduce|map\(|find\(/i.test(chunk), category: 'lodash' },

  // 运行时
  { test: (chunk) => /^\s*var\s+\w+\s*=\s*[LU]\s*\(|__esModule|prototype\.|Object\.create/i.test(chunk), category: 'runtime' },
];

function classifyChunk(chunk) {
  for (const rule of classifyRules) {
    if (rule.test(chunk)) {
      return rule.category;
    }
  }
  return 'other';
}

// 按行号范围分块
console.log('\n=== Splitting into chunks ===');

const chunks = [];
let currentChunk = [];
let currentCategory = 'runtime';
let chunkStartLine = 0;

for (let i = 0; i < lines.length; i++) {
  currentChunk.push(lines[i]);

  // 每 CHUNK_SIZE 行检查一次
  if (currentChunk.length >= CHUNK_SIZE) {
    // 尝试在合适的位置断开（空行或语句结尾）
    let breakPoint = currentChunk.length - 1;
    for (let j = currentChunk.length - 1; j > currentChunk.length - 200 && j > 0; j--) {
      const line = currentChunk[j].trim();
      // 在空行、分号结尾、右大括号等位置断开
      if (line === '' || line.endsWith(';') || line === '}' || line === '});' || line === '},') {
        breakPoint = j + 1;
        break;
      }
    }

    // 创建块
    const chunkLines = currentChunk.slice(0, breakPoint);
    const chunkCode = chunkLines.join('\n');
    const category = classifyChunk(chunkCode);

    chunks.push({
      startLine: chunkStartLine,
      endLine: chunkStartLine + breakPoint - 1,
      lines: chunkLines,
      category: category,
      lineCount: chunkLines.length
    });

    // 保留剩余的行
    currentChunk = currentChunk.slice(breakPoint);
    chunkStartLine = i - currentChunk.length + 1;
  }
}

// 处理剩余的行
if (currentChunk.length > 0) {
  const chunkCode = currentChunk.join('\n');
  const category = classifyChunk(chunkCode);
  chunks.push({
    startLine: chunkStartLine,
    endLine: lines.length - 1,
    lines: currentChunk,
    category: category,
    lineCount: currentChunk.length
  });
}

console.log(`Created ${chunks.length} chunks`);

// 按类别分组
const categoryChunks = {};
chunks.forEach(chunk => {
  if (!categoryChunks[chunk.category]) {
    categoryChunks[chunk.category] = [];
  }
  categoryChunks[chunk.category].push(chunk);
});

// 写入文件
console.log('\n=== Writing files ===');

let totalFiles = 0;
const fileIndex = {};

for (const [category, catChunks] of Object.entries(categoryChunks)) {
  const categoryDir = path.join(OUTPUT_DIR, category);
  fs.mkdirSync(categoryDir, { recursive: true });

  fileIndex[category] = [];

  catChunks.forEach((chunk, idx) => {
    const fileName = `${category}_${String(idx + 1).padStart(3, '0')}.js`;
    const filePath = path.join(categoryDir, fileName);

    const header = `/**
 * Claude Code Decompiled
 * Category: ${category}
 * File: ${idx + 1}/${catChunks.length}
 * Lines: ${chunk.startLine + 1} - ${chunk.endLine + 1} (${chunk.lineCount} lines)
 * Original file: cli.js
 */

`;

    fs.writeFileSync(filePath, header + chunk.lines.join('\n'));
    fileIndex[category].push({
      file: fileName,
      startLine: chunk.startLine + 1,
      endLine: chunk.endLine + 1,
      lineCount: chunk.lineCount
    });
    totalFiles++;
  });
}

// 生成索引文件
console.log('\n=== Generating index ===');

const indexContent = `/**
 * Claude Code Decompiled Source
 * Version: 2.0.57
 * Total Lines: ${lines.length}
 * Total Files: ${totalFiles}
 *
 * Directory Structure:
${Object.entries(categoryChunks).map(([cat, chunks]) =>
  ` * - ${cat}/: ${chunks.length} files (${chunks.reduce((a, b) => a + b.lineCount, 0)} lines)`
).join('\n')}
 */

const fileIndex = ${JSON.stringify(fileIndex, null, 2)};

module.exports = { fileIndex };
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.js'), indexContent);

// 生成 README
const readmeContent = `# Claude Code Decompiled Source

Version: 2.0.57
Date: ${new Date().toISOString().split('T')[0]}

## Statistics

- **Total Lines:** ${lines.length.toLocaleString()}
- **Total Files:** ${totalFiles}
- **Chunk Size:** ~${CHUNK_SIZE} lines

## Directory Structure

| Category | Files | Lines | Description |
|----------|-------|-------|-------------|
${Object.entries(categoryChunks)
  .sort((a, b) => b[1].reduce((x, y) => x + y.lineCount, 0) - a[1].reduce((x, y) => x + y.lineCount, 0))
  .map(([cat, chunks]) => {
    const totalLines = chunks.reduce((a, b) => a + b.lineCount, 0);
    const descriptions = {
      runtime: 'esbuild runtime helpers',
      tools: 'Tool implementations (Read, Write, Bash, etc.)',
      agents: 'Agent definitions and logic',
      commands: 'Slash commands (/help, /login, etc.)',
      ui: 'React/Ink UI components',
      api: 'API clients (Anthropic, Bedrock, Vertex)',
      mcp: 'Model Context Protocol implementation',
      auth: 'OAuth and authentication',
      config: 'Configuration management',
      telemetry: 'Analytics and telemetry',
      git: 'Git operations',
      fs: 'File system operations',
      utils: 'Utility functions',
      lodash: 'Lodash library code',
      react: 'React core code',
      network: 'HTTP/WebSocket networking',
      crypto: 'Cryptographic operations',
      process: 'Process/child process management',
      prompts: 'System prompts and messages',
      other: 'Uncategorized code'
    };
    return `| ${cat} | ${chunks.length} | ${totalLines.toLocaleString()} | ${descriptions[cat] || ''} |`;
  }).join('\n')}

## How to Navigate

1. Start with \`index.js\` to see the file index
2. Each category folder contains numbered files
3. Files are ordered by their position in the original code
4. Use grep/search to find specific functionality

## Key Files

- \`tools/\` - Look here for tool implementations
- \`agents/\` - Agent system code
- \`commands/\` - CLI commands
- \`api/\` - API integration code
- \`prompts/\` - System prompts and templates

## Note

This code is minified/bundled by esbuild. Variable names are shortened
and the code structure is optimized for size, not readability.
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'README.md'), readmeContent);

// 统计报告
const stats = {
  totalLines: lines.length,
  totalFiles: totalFiles,
  chunkSize: CHUNK_SIZE,
  categories: Object.fromEntries(
    Object.entries(categoryChunks).map(([cat, chunks]) => [
      cat,
      {
        files: chunks.length,
        lines: chunks.reduce((a, b) => a + b.lineCount, 0)
      }
    ])
  )
};

fs.writeFileSync(path.join(OUTPUT_DIR, 'stats.json'), JSON.stringify(stats, null, 2));

// 打印报告
console.log('\n========== SPLIT COMPLETE ==========\n');
console.log(`📁 Output: ${OUTPUT_DIR}`);
console.log(`📄 Total Files: ${totalFiles}`);
console.log(`📊 Total Lines: ${lines.length.toLocaleString()}`);

console.log('\n📊 By Category:');
Object.entries(categoryChunks)
  .sort((a, b) => b[1].reduce((x, y) => x + y.lineCount, 0) - a[1].reduce((x, y) => x + y.lineCount, 0))
  .forEach(([cat, chunks]) => {
    const totalLines = chunks.reduce((a, b) => a + b.lineCount, 0);
    console.log(`   ${cat.padEnd(12)}: ${String(chunks.length).padStart(3)} files, ${totalLines.toLocaleString().padStart(8)} lines`);
  });

console.log('\n✅ Done! Check src/README.md for navigation guide.');

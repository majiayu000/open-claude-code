#!/usr/bin/env node
/**
 * Claude Code 代码拆分器
 * 将 esbuild 打包的单文件拆分成独立模块
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CLI_PATH = path.join(__dirname, 'cli.formatted.js');
const OUTPUT_DIR = path.join(__dirname, 'src');

// 确保输出目录存在
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true });
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

console.log('Reading formatted cli.js...');
const code = fs.readFileSync(CLI_PATH, 'utf-8');
const lines = code.split('\n');

console.log(`Total lines: ${lines.length}`);

// 模块收集器
const modules = [];
const moduleMap = new Map(); // 变量名 -> 模块信息

// 1. 解析模块边界
console.log('\n=== Parsing Module Boundaries ===');

// 模式1: var XXX = L(() => {...})  - 懒加载模块
// 模式2: var XXX = U((exports, module) => {...}) - CommonJS 模块

let currentModule = null;
let braceCount = 0;
let inModule = false;
let moduleStartLine = 0;
let moduleLines = [];
let moduleVarName = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // 检测模块开始 - L(() => {
  const lazyMatch = line.match(/^var\s+([A-Za-z0-9_$]+)\s*=\s*L\s*\(\s*\(\s*\)\s*=>\s*\{/);
  const cjsMatch = line.match(/^var\s+([A-Za-z0-9_$]+)\s*=\s*U\s*\(\s*\(/);

  if (!inModule && (lazyMatch || cjsMatch)) {
    inModule = true;
    moduleStartLine = i;
    moduleVarName = lazyMatch ? lazyMatch[1] : cjsMatch[1];
    moduleLines = [line];
    braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;

    // 检查是否单行模块
    if (line.includes('});') && braceCount <= 0) {
      inModule = false;
      modules.push({
        varName: moduleVarName,
        startLine: moduleStartLine,
        endLine: i,
        type: lazyMatch ? 'lazy' : 'cjs',
        code: moduleLines.join('\n'),
        lineCount: 1
      });
      moduleMap.set(moduleVarName, modules[modules.length - 1]);
    }
    continue;
  }

  if (inModule) {
    moduleLines.push(line);
    braceCount += (line.match(/\{/g) || []).length;
    braceCount -= (line.match(/\}/g) || []).length;

    // 检测模块结束
    if (braceCount <= 0 && (line.includes('});') || line.match(/^\s*\}\s*\)\s*;?\s*$/))) {
      inModule = false;
      modules.push({
        varName: moduleVarName,
        startLine: moduleStartLine,
        endLine: i,
        type: 'lazy',
        code: moduleLines.join('\n'),
        lineCount: moduleLines.length
      });
      moduleMap.set(moduleVarName, modules[modules.length - 1]);
    }
  }
}

console.log(`Found ${modules.length} modules`);

// 2. 分析模块内容，推断模块类型和名称
console.log('\n=== Analyzing Module Content ===');

const categories = {
  tools: [],      // 工具实现
  agents: [],     // 代理实现
  commands: [],   // 命令实现
  ui: [],         // UI 组件
  api: [],        // API 相关
  utils: [],      // 工具函数
  lodash: [],     // lodash 相关
  react: [],      // React/Ink 相关
  mcp: [],        // MCP 协议
  auth: [],       // 认证相关
  config: [],     // 配置相关
  telemetry: [],  // 遥测相关
  other: []       // 其他
};

// 关键词分类规则
const classificationRules = [
  { pattern: /["']Read["']|readFile|ReadTool/i, category: 'tools', name: 'ReadTool' },
  { pattern: /["']Write["']|writeFile|WriteTool/i, category: 'tools', name: 'WriteTool' },
  { pattern: /["']Edit["']|EditTool/i, category: 'tools', name: 'EditTool' },
  { pattern: /["']Bash["']|BashTool|execCommand/i, category: 'tools', name: 'BashTool' },
  { pattern: /["']Glob["']|GlobTool|globPattern/i, category: 'tools', name: 'GlobTool' },
  { pattern: /["']Grep["']|GrepTool|ripgrep/i, category: 'tools', name: 'GrepTool' },
  { pattern: /["']Task["']|TaskTool|subagent/i, category: 'tools', name: 'TaskTool' },
  { pattern: /["']WebFetch["']|WebFetchTool|fetchUrl/i, category: 'tools', name: 'WebFetchTool' },
  { pattern: /["']WebSearch["']|WebSearchTool/i, category: 'tools', name: 'WebSearchTool' },
  { pattern: /["']TodoWrite["']|TodoWriteTool/i, category: 'tools', name: 'TodoWriteTool' },
  { pattern: /["']NotebookEdit["']|NotebookEditTool/i, category: 'tools', name: 'NotebookEditTool' },
  { pattern: /["']AskUserQuestion["']/i, category: 'tools', name: 'AskUserQuestionTool' },
  { pattern: /["']BashOutput["']/i, category: 'tools', name: 'BashOutputTool' },
  { pattern: /["']KillShell["']/i, category: 'tools', name: 'KillShellTool' },

  { pattern: /["']general-purpose["']/i, category: 'agents', name: 'GeneralPurposeAgent' },
  { pattern: /["']claude-code-guide["']/i, category: 'agents', name: 'ClaudeCodeGuideAgent' },
  { pattern: /["']Explore["'].*agent|exploreAgent/i, category: 'agents', name: 'ExploreAgent' },
  { pattern: /["']Plan["'].*agent|planAgent/i, category: 'agents', name: 'PlanAgent' },
  { pattern: /agentDefinition|AgentConfig/i, category: 'agents', name: 'AgentDefinition' },

  { pattern: /["']\/help["']|helpCommand/i, category: 'commands', name: 'HelpCommand' },
  { pattern: /["']\/login["']|loginCommand/i, category: 'commands', name: 'LoginCommand' },
  { pattern: /["']\/logout["']|logoutCommand/i, category: 'commands', name: 'LogoutCommand' },
  { pattern: /["']\/config["']|configCommand/i, category: 'commands', name: 'ConfigCommand' },
  { pattern: /["']\/model["']|modelCommand/i, category: 'commands', name: 'ModelCommand' },
  { pattern: /["']\/mcp["']|mcpCommand/i, category: 'commands', name: 'McpCommand' },
  { pattern: /["']\/status["']|statusCommand/i, category: 'commands', name: 'StatusCommand' },

  { pattern: /createElement|React\.|jsx|render\s*\(/i, category: 'react', name: 'React' },
  { pattern: /ink|useInput|useApp|Box|Text/i, category: 'ui', name: 'InkUI' },

  { pattern: /anthropic\.com|api\.anthropic/i, category: 'api', name: 'AnthropicAPI' },
  { pattern: /bedrock|aws.*sdk/i, category: 'api', name: 'BedrockAPI' },
  { pattern: /vertex|google.*cloud/i, category: 'api', name: 'VertexAPI' },
  { pattern: /oauth|authorize|token/i, category: 'auth', name: 'OAuth' },

  { pattern: /mcp.*server|mcpClient|MCP/i, category: 'mcp', name: 'MCP' },

  { pattern: /tengu_|telemetry|analytics/i, category: 'telemetry', name: 'Telemetry' },

  { pattern: /lodash|_\.|isArray|isObject|isFunction|forEach|map|filter|reduce/i, category: 'lodash', name: 'Lodash' },

  { pattern: /config|settings|options|preferences/i, category: 'config', name: 'Config' },
];

// 对每个模块进行分类
modules.forEach(mod => {
  let classified = false;

  for (const rule of classificationRules) {
    if (rule.pattern.test(mod.code)) {
      mod.category = rule.category;
      mod.suggestedName = rule.name;
      categories[rule.category].push(mod);
      classified = true;
      break;
    }
  }

  if (!classified) {
    mod.category = 'other';
    mod.suggestedName = mod.varName;
    categories.other.push(mod);
  }
});

// 3. 提取模块依赖
console.log('\n=== Extracting Dependencies ===');

modules.forEach(mod => {
  // 查找模块内调用的其他模块初始化函数
  const deps = [];
  const depPattern = /([A-Za-z][A-Za-z0-9_$]*)\s*\(\s*\)/g;
  let match;

  while ((match = depPattern.exec(mod.code)) !== null) {
    const depName = match[1];
    if (moduleMap.has(depName) && depName !== mod.varName) {
      deps.push(depName);
    }
  }

  mod.dependencies = [...new Set(deps)];
});

// 4. 生成目录结构
console.log('\n=== Generating Directory Structure ===');

// 创建分类目录
const dirs = ['tools', 'agents', 'commands', 'ui', 'api', 'utils', 'lodash', 'react', 'mcp', 'auth', 'config', 'telemetry', 'other'];
dirs.forEach(dir => {
  fs.mkdirSync(path.join(OUTPUT_DIR, dir), { recursive: true });
});

// 5. 写入模块文件
console.log('\n=== Writing Module Files ===');

let fileCount = 0;
const fileIndex = {};

// 按类别处理模块
for (const [category, mods] of Object.entries(categories)) {
  // 对于大类别，可能需要合并小模块
  if (mods.length > 100) {
    // 合并成一个文件
    const combinedCode = mods.map(m => `// Module: ${m.varName}\n${m.code}`).join('\n\n');
    const filePath = path.join(OUTPUT_DIR, category, `${category}_combined.js`);
    fs.writeFileSync(filePath, combinedCode);
    fileIndex[category] = { type: 'combined', count: mods.length, file: `${category}/${category}_combined.js` };
    fileCount++;
  } else {
    // 单独写入每个模块
    const usedNames = new Set();

    mods.forEach((mod, idx) => {
      let fileName = mod.suggestedName || mod.varName;

      // 确保文件名唯一
      if (usedNames.has(fileName)) {
        fileName = `${fileName}_${idx}`;
      }
      usedNames.add(fileName);

      // 添加依赖注释
      let header = `/**
 * Module: ${mod.varName}
 * Category: ${mod.category}
 * Lines: ${mod.startLine + 1} - ${mod.endLine + 1}
 * Dependencies: ${mod.dependencies.length > 0 ? mod.dependencies.join(', ') : 'none'}
 */\n\n`;

      const filePath = path.join(OUTPUT_DIR, category, `${fileName}.js`);
      fs.writeFileSync(filePath, header + mod.code);
      fileCount++;
    });

    fileIndex[category] = { type: 'separate', count: mods.length };
  }
}

// 6. 生成索引文件
console.log('\n=== Generating Index Files ===');

// 主索引
const mainIndex = `/**
 * Claude Code Decompiled Source
 * Version: 2.0.57
 *
 * Directory Structure:
 * ${dirs.map(d => `- ${d}/: ${categories[d].length} modules`).join('\n * ')}
 *
 * Total Modules: ${modules.length}
 * Total Files: ${fileCount}
 */

// Module exports map
export const moduleMap = ${JSON.stringify(
  Object.fromEntries(modules.map(m => [m.varName, { category: m.category, name: m.suggestedName }])),
  null, 2
)};
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.js'), mainIndex);

// 7. 提取入口点和主要代码
console.log('\n=== Extracting Entry Points ===');

// 找到文件末尾的主入口代码（不在任何模块内的代码）
const entryLines = [];
let lastModuleEnd = 0;

modules.forEach(mod => {
  if (mod.endLine > lastModuleEnd) {
    lastModuleEnd = mod.endLine;
  }
});

// 提取入口代码
const entryCode = lines.slice(lastModuleEnd + 1).join('\n');
if (entryCode.trim().length > 100) {
  fs.writeFileSync(path.join(OUTPUT_DIR, 'main.js'), `/**
 * Main Entry Point
 * This is the code that runs when Claude Code starts
 */

${entryCode}`);
}

// 提取头部代码（运行时helpers）
const headerCode = lines.slice(0, modules[0]?.startLine || 100).join('\n');
fs.writeFileSync(path.join(OUTPUT_DIR, 'runtime.js'), `/**
 * Runtime Helpers
 * esbuild runtime functions for module loading
 */

${headerCode}`);

// 8. 生成统计报告
console.log('\n=== Generating Statistics ===');

const stats = {
  totalModules: modules.length,
  totalFiles: fileCount,
  totalLines: lines.length,
  categories: Object.fromEntries(
    Object.entries(categories).map(([k, v]) => [k, v.length])
  ),
  largestModules: modules
    .sort((a, b) => b.lineCount - a.lineCount)
    .slice(0, 20)
    .map(m => ({ name: m.varName, lines: m.lineCount, category: m.category })),
  dependencyGraph: Object.fromEntries(
    modules
      .filter(m => m.dependencies.length > 0)
      .slice(0, 50)
      .map(m => [m.varName, m.dependencies])
  )
};

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'stats.json'),
  JSON.stringify(stats, null, 2)
);

// 打印摘要
console.log('\n========== SPLIT COMPLETE ==========\n');
console.log(`📁 Output Directory: ${OUTPUT_DIR}`);
console.log(`📦 Total Modules: ${modules.length}`);
console.log(`📄 Total Files: ${fileCount}`);
console.log('\n📊 Category Breakdown:');
Object.entries(categories).forEach(([cat, mods]) => {
  console.log(`   ${cat}: ${mods.length} modules`);
});

console.log('\n📈 Largest Modules:');
stats.largestModules.slice(0, 10).forEach(m => {
  console.log(`   ${m.name}: ${m.lines} lines (${m.category})`);
});

console.log('\n✅ Split complete! Check the src/ directory.');

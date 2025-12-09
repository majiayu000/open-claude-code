#!/usr/bin/env node
/**
 * 变量名还原尝试
 * 通过上下文分析尝试还原混淆的变量名
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CLI_PATH = path.join(__dirname, 'cli.formatted.js');
const OUTPUT_DIR = path.join(__dirname, 'extracted');

console.log('Reading formatted cli.js...');
const code = fs.readFileSync(CLI_PATH, 'utf-8');

// 变量名映射表 - 基于上下文推断
const variableMap = new Map();

// 1. 通过字符串常量推断变量用途
console.log('\n=== Inferring Variable Names from Context ===');

// 查找包含特定字符串的变量赋值
const inferPatterns = [
  { pattern: /(\w+)\s*=\s*["']Read["']/g, name: 'ReadTool' },
  { pattern: /(\w+)\s*=\s*["']Write["']/g, name: 'WriteTool' },
  { pattern: /(\w+)\s*=\s*["']Edit["']/g, name: 'EditTool' },
  { pattern: /(\w+)\s*=\s*["']Bash["']/g, name: 'BashTool' },
  { pattern: /(\w+)\s*=\s*["']Glob["']/g, name: 'GlobTool' },
  { pattern: /(\w+)\s*=\s*["']Grep["']/g, name: 'GrepTool' },
  { pattern: /(\w+)\s*=\s*["']Task["']/g, name: 'TaskTool' },
  { pattern: /(\w+)\s*=\s*["']WebFetch["']/g, name: 'WebFetchTool' },
  { pattern: /(\w+)\s*=\s*["']WebSearch["']/g, name: 'WebSearchTool' },
  { pattern: /(\w+)\s*=\s*["']TodoWrite["']/g, name: 'TodoWriteTool' },
  { pattern: /(\w+)\s*=\s*["']general-purpose["']/g, name: 'GeneralPurposeAgent' },
  { pattern: /(\w+)\s*=\s*["']claude-code-guide["']/g, name: 'ClaudeCodeGuideAgent' },
  { pattern: /(\w+)\s*=\s*["']Explore["']/g, name: 'ExploreAgent' },
  { pattern: /(\w+)\s*=\s*["']Plan["']/g, name: 'PlanAgent' },
];

inferPatterns.forEach(({ pattern, name }) => {
  let match;
  while ((match = pattern.exec(code)) !== null) {
    variableMap.set(match[1], name);
  }
});

// 2. 通过函数调用模式推断
const functionPatterns = [
  { pattern: /(\w+)\s*\.\s*call\s*\(/g, suffix: '_callFunction' },
  { pattern: /(\w+)\s*\.\s*render\s*\(/g, suffix: '_renderFunction' },
  { pattern: /(\w+)\s*\.\s*execute\s*\(/g, suffix: '_executeFunction' },
  { pattern: /(\w+)\s*\.\s*prompt\s*\(/g, suffix: '_promptFunction' },
];

// 3. 提取主要架构组件
console.log('\n=== Extracting Architecture Components ===');

const architecture = {
  tools: [],
  agents: [],
  commands: [],
  providers: [],
  handlers: [],
  utils: [],
};

// 查找工具定义模式
const toolDefPattern = /name:\s*["'](\w+)["'].*?(?:call|execute)\s*:/gs;
let toolMatch;
while ((toolMatch = toolDefPattern.exec(code)) !== null) {
  architecture.tools.push(toolMatch[1]);
}
architecture.tools = [...new Set(architecture.tools)];

// 查找命令定义
const commandDefPattern = /["']\/(\w+)["']\s*[,:].*?(?:handler|execute|run)/g;
while ((toolMatch = commandDefPattern.exec(code)) !== null) {
  architecture.commands.push('/' + toolMatch[1]);
}
architecture.commands = [...new Set(architecture.commands)];

// 4. 提取系统提示词片段
console.log('\n=== Extracting System Prompt Fragments ===');

const systemPrompts = [];
const promptPattern = /["'`](?:You are|As an AI|Claude|assistant)[^"'`]{50,500}["'`]/g;
let promptMatch;
while ((promptMatch = promptPattern.exec(code)) !== null) {
  systemPrompts.push(promptMatch[0].slice(0, 200) + '...');
}

// 5. 提取配置结构
console.log('\n=== Extracting Configuration Structure ===');

const configStructure = {
  settings: [],
  defaults: [],
  options: [],
};

// 查找设置键
const settingPattern = /["'](?:settings?|config|options?)["']\s*[:.]\s*\{/g;
const settingMatches = code.match(settingPattern);
if (settingMatches) {
  configStructure.settings = settingMatches.slice(0, 10);
}

// 6. 提取 MCP (Model Context Protocol) 相关代码
console.log('\n=== Extracting MCP Protocol ===');

const mcpStructure = {
  servers: [],
  tools: [],
  resources: [],
  transports: [],
};

const mcpServerPattern = /mcp.*?server[^\n]{0,100}/gi;
const mcpMatches = code.match(mcpServerPattern);
if (mcpMatches) {
  mcpStructure.servers = [...new Set(mcpMatches)].slice(0, 20);
}

// 7. 生成变量名映射文件
console.log('\n=== Generating Variable Map ===');

const variableMapOutput = {};
variableMap.forEach((value, key) => {
  variableMapOutput[key] = value;
});

// 8. 分析代码流程
console.log('\n=== Analyzing Code Flow ===');

const codeFlow = {
  entryPoints: [],
  mainLoop: [],
  eventHandlers: [],
};

// 查找入口点
const entryPattern = /(?:main|start|init|run)\s*\(\s*\)/g;
const entryMatches = code.match(entryPattern);
if (entryMatches) {
  codeFlow.entryPoints = [...new Set(entryMatches)];
}

// 查找事件处理
const eventPattern = /on(?:Message|Input|Output|Error|Close|Connect)\s*[:=]/g;
const eventMatches = code.match(eventPattern);
if (eventMatches) {
  codeFlow.eventHandlers = [...new Set(eventMatches)];
}

// 保存重构报告
const reconstructionReport = {
  variableMap: variableMapOutput,
  architecture,
  systemPromptFragments: systemPrompts.slice(0, 10),
  configStructure,
  mcpStructure,
  codeFlow,
  statistics: {
    mappedVariables: variableMap.size,
    toolsFound: architecture.tools.length,
    commandsFound: architecture.commands.length,
    promptFragments: systemPrompts.length,
  }
};

fs.writeFileSync(
  path.join(OUTPUT_DIR, 'reconstruction_report.json'),
  JSON.stringify(reconstructionReport, null, 2)
);

// 打印报告
console.log('\n========== RECONSTRUCTION REPORT ==========\n');

console.log('📋 Variable Mappings:');
variableMap.forEach((value, key) => {
  console.log(`   ${key} → ${value}`);
});

console.log(`\n🔧 Architecture - Tools (${architecture.tools.length}):`);
architecture.tools.slice(0, 20).forEach(t => console.log(`   - ${t}`));

console.log(`\n📝 Architecture - Commands (${architecture.commands.length}):`);
architecture.commands.slice(0, 15).forEach(c => console.log(`   - ${c}`));

console.log(`\n💬 System Prompt Fragments (${systemPrompts.length}):`);
systemPrompts.slice(0, 3).forEach(p => console.log(`   "${p.slice(1, 100)}..."`));

console.log(`\n🔀 Code Flow - Entry Points:`);
codeFlow.entryPoints.forEach(e => console.log(`   - ${e}`));

console.log(`\n📡 Code Flow - Event Handlers:`);
codeFlow.eventHandlers.forEach(e => console.log(`   - ${e}`));

console.log('\n✅ Reconstruction report saved!');

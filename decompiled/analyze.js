#!/usr/bin/env node
/**
 * Claude Code 反编译分析脚本
 * 用于分析压缩后的 cli.js 并提取关键信息
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CLI_PATH = path.join(__dirname, 'cli.formatted.js');
const OUTPUT_DIR = __dirname;

// 读取格式化后的代码
console.log('Reading formatted cli.js...');
const code = fs.readFileSync(CLI_PATH, 'utf-8');
const lines = code.split('\n');

console.log(`Total lines: ${lines.length}`);

// 1. 提取所有字符串常量
console.log('\n=== Extracting String Constants ===');
const stringPatterns = [];
const toolNames = new Set();
const apiEndpoints = new Set();
const envVars = new Set();
const commands = new Set();

// 查找工具名称
const toolMatches = code.match(/["'](?:Read|Write|Edit|Bash|Glob|Grep|Task|WebFetch|WebSearch|TodoWrite|NotebookEdit|AskUserQuestion|Skill|SlashCommand|EnterPlanMode|ExitPlanMode|BashOutput|KillShell)['"]/g);
if (toolMatches) {
  toolMatches.forEach(m => toolNames.add(m.replace(/['"]/g, '')));
}

// 查找 API 端点
const apiMatches = code.match(/["']\/(?:v1|api|auth|sessions?|messages?|tools?)[\/\w-]*["']/g);
if (apiMatches) {
  apiMatches.forEach(m => apiEndpoints.add(m.replace(/['"]/g, '')));
}

// 查找环境变量
const envMatches = code.match(/process\.env\.([A-Z_][A-Z0-9_]*)/g);
if (envMatches) {
  envMatches.forEach(m => envVars.add(m.replace('process.env.', '')));
}

// 查找命令
const cmdMatches = code.match(/["']\/(?:help|clear|compact|config|bug|cost|doctor|init|login|logout|memory|model|permissions|review|status|vim|update|install|mcp|teleport|tasks|resume|commands?)['"]/gi);
if (cmdMatches) {
  cmdMatches.forEach(m => commands.add(m.replace(/['"]/g, '').toLowerCase()));
}

// 2. 提取模块定义模式
console.log('\n=== Analyzing Module Structure ===');

// 查找懒加载模块模式: var XXX = L(() => {...})
const lazyModules = code.match(/var\s+([A-Za-z0-9_$]+)\s*=\s*L\s*\(\s*\(\s*\)\s*=>\s*\{/g);
const moduleCount = lazyModules ? lazyModules.length : 0;

// 查找类定义
const classMatches = code.match(/class\s+([A-Za-z0-9_$]+)/g);
const classes = classMatches ? [...new Set(classMatches.map(m => m.replace('class ', '')))] : [];

// 查找导出的函数
const exportFunctions = code.match(/export\s+(?:async\s+)?function\s+([A-Za-z0-9_$]+)/g);
const exports = exportFunctions ? exportFunctions.map(m => m.match(/function\s+(\w+)/)?.[1]).filter(Boolean) : [];

// 3. 查找关键特征
console.log('\n=== Finding Key Features ===');

// MCP 相关
const mcpPatterns = code.match(/mcp[_\-]?[a-z]+/gi);
const mcpFeatures = mcpPatterns ? [...new Set(mcpPatterns)].slice(0, 20) : [];

// Agent 相关
const agentPatterns = code.match(/["'](?:general-purpose|claude-code-guide|Explore|Plan|statusline-setup)['"]/g);
const agentTypes = agentPatterns ? [...new Set(agentPatterns.map(m => m.replace(/['"]/g, '')))] : [];

// 模型相关
const modelPatterns = code.match(/claude-(?:opus|sonnet|haiku)-[\d-]+/g);
const models = modelPatterns ? [...new Set(modelPatterns)] : [];

// 4. 查找配置和常量
const configPatterns = code.match(/CLAUDE_[A-Z_]+/g);
const configKeys = configPatterns ? [...new Set(configPatterns)].sort() : [];

// 5. 生成报告
const report = {
  stats: {
    totalLines: lines.length,
    fileSize: `${(code.length / 1024 / 1024).toFixed(2)} MB`,
    moduleCount,
    classCount: classes.length,
    exportCount: exports.length
  },
  tools: [...toolNames].sort(),
  apiEndpoints: [...apiEndpoints].slice(0, 30),
  environmentVariables: [...envVars].sort().slice(0, 50),
  commands: [...commands].sort(),
  agentTypes,
  models: [...new Set(models)],
  configKeys: configKeys.slice(0, 30),
  classes: classes.slice(0, 50),
  mcpFeatures: mcpFeatures.slice(0, 20)
};

// 保存报告
const reportPath = path.join(OUTPUT_DIR, 'analysis_report.json');
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`\nReport saved to: ${reportPath}`);

// 打印摘要
console.log('\n========== ANALYSIS SUMMARY ==========\n');
console.log('📊 Statistics:');
console.log(`   - Total Lines: ${report.stats.totalLines.toLocaleString()}`);
console.log(`   - File Size: ${report.stats.fileSize}`);
console.log(`   - Module Count: ${report.stats.moduleCount}`);
console.log(`   - Class Count: ${report.stats.classCount}`);

console.log('\n🔧 Tools Found:');
report.tools.forEach(t => console.log(`   - ${t}`));

console.log('\n🤖 Agent Types:');
report.agentTypes.forEach(a => console.log(`   - ${a}`));

console.log('\n📝 Commands:');
report.commands.forEach(c => console.log(`   - ${c}`));

console.log('\n🧠 Models:');
report.models.forEach(m => console.log(`   - ${m}`));

console.log('\n🔐 Config Keys (sample):');
report.configKeys.slice(0, 15).forEach(k => console.log(`   - ${k}`));

console.log('\n🌐 API Endpoints (sample):');
report.apiEndpoints.slice(0, 10).forEach(e => console.log(`   - ${e}`));

console.log('\n✅ Analysis complete!');

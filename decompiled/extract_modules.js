#!/usr/bin/env node
/**
 * 深度模块提取器
 * 从 cli.js 中提取并分类各个模块
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CLI_PATH = path.join(__dirname, 'cli.formatted.js');
const OUTPUT_DIR = path.join(__dirname, 'extracted');

// 确保输出目录存在
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('Reading formatted cli.js...');
const code = fs.readFileSync(CLI_PATH, 'utf-8');

// 1. 提取工具实现
console.log('\n=== Extracting Tool Implementations ===');

const toolPatterns = {
  'Bash': /var\s+X9\s*=.*?(?=var\s+[A-Z]|\n\n\n)/gs,
  'Read': /(?:Read|ReadFile).*?tool.*?call/gi,
  'Write': /(?:Write|WriteFile).*?tool.*?call/gi,
  'Edit': /Edit.*?tool.*?call/gi,
};

// 查找工具定义的特征
const toolDefinitions = {};
const tools = ['Bash', 'Read', 'Write', 'Edit', 'Glob', 'Grep', 'Task', 'WebFetch', 'WebSearch', 'TodoWrite'];

tools.forEach(tool => {
  // 查找工具的 call 函数定义
  const callPattern = new RegExp(`["']${tool}["'].*?call\\s*[:=]\\s*(?:async\\s+)?(?:function|\\()`, 'gi');
  const matches = code.match(callPattern);
  if (matches) {
    toolDefinitions[tool] = {
      occurrences: matches.length,
      samples: matches.slice(0, 3)
    };
  }
});

// 2. 提取主要类定义
console.log('\n=== Extracting Class Definitions ===');

const classPattern = /class\s+(\w+)(?:\s+extends\s+(\w+))?\s*\{/g;
const classes = [];
let match;

while ((match = classPattern.exec(code)) !== null) {
  classes.push({
    name: match[1],
    extends: match[2] || null,
    position: match.index
  });
}

// 3. 提取关键函数
console.log('\n=== Extracting Key Functions ===');

const keyFunctionPatterns = [
  /async\s+function\s+(\w*[Mm]ain\w*)\s*\(/g,
  /function\s+(\w*[Ss]etup\w*)\s*\(/g,
  /function\s+(\w*[Ii]nit\w*)\s*\(/g,
  /function\s+(\w*[Cc]ommand\w*)\s*\(/g,
  /function\s+(\w*[Tt]ool\w*)\s*\(/g,
  /function\s+(\w*[Aa]gent\w*)\s*\(/g,
  /function\s+(\w*[Pp]rompt\w*)\s*\(/g,
];

const keyFunctions = new Set();
keyFunctionPatterns.forEach(pattern => {
  let m;
  while ((m = pattern.exec(code)) !== null) {
    keyFunctions.add(m[1]);
  }
});

// 4. 提取 API 调用模式
console.log('\n=== Extracting API Patterns ===');

const apiPatterns = {
  anthropic: [],
  bedrock: [],
  vertex: [],
  oauth: [],
};

// Anthropic API
const anthropicMatches = code.match(/api\.anthropic\.com[^\s"']*/g);
if (anthropicMatches) apiPatterns.anthropic = [...new Set(anthropicMatches)];

// Bedrock
const bedrockMatches = code.match(/bedrock[^\s"']*|aws[^\s"']*/gi);
if (bedrockMatches) apiPatterns.bedrock = [...new Set(bedrockMatches)].slice(0, 20);

// Vertex
const vertexMatches = code.match(/vertex[^\s"']*|google[^\s"']*/gi);
if (vertexMatches) apiPatterns.vertex = [...new Set(vertexMatches)].slice(0, 20);

// 5. 提取权限系统
console.log('\n=== Extracting Permission System ===');

const permissionPatterns = code.match(/permission[^\s"'(,)]*|allow[^\s"'(,)]*|deny[^\s"'(,)]*/gi);
const permissions = permissionPatterns ? [...new Set(permissionPatterns)].slice(0, 50) : [];

// 6. 提取 UI 组件 (React/Ink)
console.log('\n=== Extracting UI Components ===');

const reactPatterns = code.match(/createElement\s*\(\s*["']?(\w+)/g);
const uiComponents = reactPatterns ? [...new Set(reactPatterns.map(m => m.match(/["']?(\w+)$/)?.[1]).filter(Boolean))].slice(0, 50) : [];

// 7. 提取事件/遥测
console.log('\n=== Extracting Telemetry Events ===');

const telemetryPatterns = code.match(/["']tengu_\w+["']/g);
const telemetryEvents = telemetryPatterns ? [...new Set(telemetryPatterns.map(m => m.replace(/['"]/g, '')))].sort() : [];

// 8. 提取错误类型
console.log('\n=== Extracting Error Types ===');

const errorPatterns = code.match(/class\s+(\w*[Ee]rror\w*)\s+extends/g);
const errorTypes = errorPatterns ? [...new Set(errorPatterns.map(m => m.match(/class\s+(\w+)/)?.[1]).filter(Boolean))] : [];

// 生成详细报告
const detailedReport = {
  toolDefinitions,
  classes: {
    total: classes.length,
    samples: classes.slice(0, 100)
  },
  keyFunctions: [...keyFunctions].sort(),
  apiPatterns,
  permissions: permissions.slice(0, 30),
  uiComponents: uiComponents.slice(0, 30),
  telemetryEvents: telemetryEvents.slice(0, 50),
  errorTypes
};

// 保存详细报告
fs.writeFileSync(
  path.join(OUTPUT_DIR, 'detailed_analysis.json'),
  JSON.stringify(detailedReport, null, 2)
);

// 9. 尝试提取和重命名关键模块
console.log('\n=== Attempting Module Reconstruction ===');

// 查找明显的模块边界
const moduleMarkers = code.match(/\/\*\*[\s\S]*?\*\/|\/\/\s+(?:Module|Section|==+)/g);
console.log(`Found ${moduleMarkers?.length || 0} potential module markers`);

// 提取带有有意义名称的导出
const namedExports = code.match(/export\s*\{\s*[\w\s,$]+\s*\}/g);
console.log(`Found ${namedExports?.length || 0} named export blocks`);

// 打印摘要
console.log('\n========== DETAILED ANALYSIS ==========\n');

console.log('🔧 Tool Definitions Found:');
Object.entries(toolDefinitions).forEach(([tool, info]) => {
  console.log(`   ${tool}: ${info.occurrences} occurrences`);
});

console.log(`\n📦 Classes: ${classes.length} total`);
console.log('   Sample classes:');
classes.slice(0, 20).forEach(c => {
  console.log(`   - ${c.name}${c.extends ? ` extends ${c.extends}` : ''}`);
});

console.log(`\n⚡ Key Functions: ${keyFunctions.size}`);
[...keyFunctions].slice(0, 15).forEach(f => console.log(`   - ${f}`));

console.log(`\n📊 Telemetry Events: ${telemetryEvents.length}`);
telemetryEvents.slice(0, 15).forEach(e => console.log(`   - ${e}`));

console.log(`\n❌ Error Types: ${errorTypes.length}`);
errorTypes.forEach(e => console.log(`   - ${e}`));

console.log(`\n🎨 UI Components: ${uiComponents.length}`);
uiComponents.slice(0, 15).forEach(c => console.log(`   - ${c}`));

console.log('\n✅ Detailed analysis saved to: extracted/detailed_analysis.json');

#!/usr/bin/env node
/**
 * 智能变量重命名器
 * 通过上下文分析推断变量的实际用途并重命名
 */

const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, 'src');
const OUTPUT_DIR = path.join(__dirname, 'readable');

// 清理并创建输出目录
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true });
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

console.log('=== Smart Variable Renamer ===\n');

// 1. 构建变量名映射表 - 基于使用上下文
const variableRenames = new Map();

// 工具名映射
const toolMappings = {
  'D9': 'BASH_TOOL_NAME',
  'g5': 'READ_TOOL_NAME',
  'bX': 'WRITE_TOOL_NAME',
  'R5': 'EDIT_TOOL_NAME',
  'CD': 'GLOB_TOOL_NAME',
  'uY': 'GREP_TOOL_NAME',
  's8': 'TASK_TOOL_NAME',
  'vX': 'WEB_FETCH_TOOL_NAME',
  'O_': 'WEB_SEARCH_TOOL_NAME',
  'gGB': 'TODO_WRITE_TOOL_NAME',
};

// 2. 通过上下文推断更多变量名
function buildContextualRenames(code) {
  const renames = new Map();

  // 模式: var XXX = "SomeString" -> XXX 可能与 SomeString 相关
  const stringAssignments = code.matchAll(/var\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*=\s*["']([^"']+)["']/g);
  for (const match of stringAssignments) {
    const varName = match[1];
    const strValue = match[2];

    // 根据字符串值推断变量名
    if (strValue.length < 50 && /^[A-Za-z][A-Za-z0-9_\-\s]+$/.test(strValue)) {
      const suggestedName = strValue
        .replace(/[^a-zA-Z0-9]/g, '_')
        .replace(/_+/g, '_')
        .replace(/^_|_$/g, '')
        .toUpperCase()
        .slice(0, 30);

      if (suggestedName.length > 3 && varName.length < 5) {
        renames.set(varName, suggestedName + '_VAR');
      }
    }
  }

  // 模式: XXX.prototype.YYY = function -> XXX 是一个类
  const protoAssignments = code.matchAll(/([A-Za-z_$][A-Za-z0-9_$]*)\.prototype\.([A-Za-z_$][A-Za-z0-9_$]*)\s*=/g);
  for (const match of protoAssignments) {
    const className = match[1];
    const methodName = match[2];
    if (className.length < 5) {
      renames.set(className, `Class_${methodName}_Parent`);
    }
  }

  // 模式: class XXX extends YYY
  const classExtends = code.matchAll(/class\s+([A-Za-z_$][A-Za-z0-9_$]*)\s+extends\s+([A-Za-z_$][A-Za-z0-9_$]*)/g);
  for (const match of classExtends) {
    const childClass = match[1];
    const parentClass = match[2];
    // 保留类名，它们通常有意义
  }

  return renames;
}

// 3. 添加注释来解释代码
function addComments(code) {
  let result = code;

  // 为工具定义添加注释
  result = result.replace(
    /var\s+(D9)\s*=\s*["']Bash["']/g,
    '// Tool name constant for Bash command execution\nvar $1 = "Bash"'
  );

  result = result.replace(
    /var\s+(\w+)\s*=\s*["']Read["']/g,
    '// Tool name constant for file reading\nvar $1 = "Read"'
  );

  result = result.replace(
    /var\s+(\w+)\s*=\s*["']Write["']/g,
    '// Tool name constant for file writing\nvar $1 = "Write"'
  );

  result = result.replace(
    /var\s+(\w+)\s*=\s*["']Edit["']/g,
    '// Tool name constant for file editing\nvar $1 = "Edit"'
  );

  // 为系统提示添加注释
  result = result.replace(
    /(["']You are Claude Code[^"']*["'])/g,
    '// SYSTEM_PROMPT: Base prompt for Claude Code\n$1'
  );

  result = result.replace(
    /(["']You are an agent for Claude Code[^"']*["'])/g,
    '// AGENT_PROMPT: Prompt for sub-agents\n$1'
  );

  // 为函数类型添加注释
  result = result.replace(
    /async\s+function\s+(\w+)\s*\(\s*\)/g,
    '// Async function: $1\nasync function $1()'
  );

  // 为 API 调用添加注释
  result = result.replace(
    /(\/v1\/messages)/g,
    '/* Anthropic Messages API endpoint */ $1'
  );

  return result;
}

// 4. 重命名已知变量
function renameKnownVariables(code) {
  let result = code;

  // 应用工具名映射
  for (const [short, long] of Object.entries(toolMappings)) {
    // 只在作为独立标识符时替换，避免替换字符串内容
    const regex = new RegExp(`\\b${short}\\b(?!["\'])`, 'g');
    result = result.replace(regex, long);
  }

  return result;
}

// 5. 格式化代码，添加空行提高可读性
function formatCode(code) {
  let result = code;

  // 在函数定义前添加空行
  result = result.replace(/([;\}])\s*(function\s+\w+)/g, '$1\n\n$2');
  result = result.replace(/([;\}])\s*(async\s+function\s+\w+)/g, '$1\n\n$2');
  result = result.replace(/([;\}])\s*(class\s+\w+)/g, '$1\n\n$2');

  // 在 var/let/const 块前添加空行（如果前面不是同类声明）
  result = result.replace(/([;\}])\s*(var\s+\w+\s*=\s*(?:function|async|class|\{|\[))/g, '$1\n\n$2');

  return result;
}

// 6. 生成可读性更好的版本
function processFile(inputPath, outputPath) {
  let code = fs.readFileSync(inputPath, 'utf-8');

  // 应用所有转换
  code = renameKnownVariables(code);
  code = addComments(code);
  code = formatCode(code);

  // 添加文件头注释
  const header = `/**
 * Claude Code Decompiled - Readable Version
 *
 * NOTE: This code has been decompiled from minified source.
 * Variable names have been partially restored based on context analysis.
 * Some names may still be unclear - look for nearby string constants for hints.
 *
 * Original file: cli.js (v2.0.57)
 * Processed: ${new Date().toISOString()}
 */

`;

  fs.writeFileSync(outputPath, header + code);
}

// 7. 处理所有文件
console.log('Processing files...\n');

const categories = fs.readdirSync(INPUT_DIR).filter(f => {
  const stat = fs.statSync(path.join(INPUT_DIR, f));
  return stat.isDirectory();
});

let totalFiles = 0;

for (const category of categories) {
  const categoryDir = path.join(INPUT_DIR, category);
  const outputCategoryDir = path.join(OUTPUT_DIR, category);
  fs.mkdirSync(outputCategoryDir, { recursive: true });

  const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.js'));

  for (const file of files) {
    const inputPath = path.join(categoryDir, file);
    const outputPath = path.join(outputCategoryDir, file);

    try {
      processFile(inputPath, outputPath);
      totalFiles++;
    } catch (err) {
      console.error(`Error processing ${inputPath}: ${err.message}`);
    }
  }

  console.log(`  ${category}: ${files.length} files`);
}

// 8. 复制其他文件
const otherFiles = ['index.js', 'stats.json', 'README.md'];
for (const file of otherFiles) {
  const src = path.join(INPUT_DIR, file);
  const dst = path.join(OUTPUT_DIR, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
  }
}

// 9. 生成变量名词典
const dictionary = `# Claude Code Variable Dictionary

This document maps minified variable names to their likely meanings.

## Tool Names
| Minified | Meaning |
|----------|---------|
| D9 | BASH_TOOL_NAME |
| g5 | READ_TOOL_NAME |
| bX | WRITE_TOOL_NAME |
| R5 | EDIT_TOOL_NAME |
| CD | GLOB_TOOL_NAME |
| uY | GREP_TOOL_NAME |
| s8 | TASK_TOOL_NAME |
| vX | WEB_FETCH_TOOL_NAME |
| O_ | WEB_SEARCH_TOOL_NAME |
| gGB | TODO_WRITE_TOOL_NAME |

## Common Patterns
| Pattern | Meaning |
|---------|---------|
| L(() => {...}) | Lazy-loaded module |
| U((exports, module) => {...}) | CommonJS module wrapper |
| pG(A, Q) | ESM export binding |
| GA(A, Q, B) | ESM import handler |
| xz(A, Q) | Native method lookup |

## Key Variables (from context)
| Variable | Likely Purpose |
|----------|---------------|
| qGB | System prompt base |
| WY9 | Agent system prompt |
| HX | Global object reference |
| HV | Symbol reference |
| Ks | Map implementation |
| _u | Array implementation |

## How to Read the Code

1. Look for string constants near a variable - they often hint at its purpose
2. Check function parameters - the first param is usually the main input
3. Look for \`.prototype.\` patterns to identify classes
4. Search for familiar API patterns like \`/v1/messages\`
5. Use grep to find where a variable is defined vs used
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'DICTIONARY.md'), dictionary);

console.log(`\n========== COMPLETE ==========`);
console.log(`📁 Output: ${OUTPUT_DIR}`);
console.log(`📄 Files processed: ${totalFiles}`);
console.log(`📖 Dictionary: DICTIONARY.md`);
console.log(`\n✅ Done! The code now has:`);
console.log(`   - Known variables renamed to meaningful names`);
console.log(`   - Comments explaining key code sections`);
console.log(`   - Better formatting with whitespace`);
console.log(`   - A dictionary for reference`);

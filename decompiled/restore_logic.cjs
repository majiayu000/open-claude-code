#!/usr/bin/env node
/**
 * 逻辑还原脚本 - 保留原始代码，通过注释添加变量名解释
 *
 * 这个脚本不会重写代码，只会：
 * 1. 在变量定义处添加注释说明其用途
 * 2. 在函数定义处添加注释说明其功能
 * 3. 保持原始代码逻辑100%不变
 */

const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, 'src');
const OUTPUT_DIR = path.join(__dirname, 'annotated');

// ============================================================================
// 变量名映射表 - 通过分析代码上下文得出
// ============================================================================

const VARIABLE_MAP = {
  // 工具名常量 (Tool Name Constants)
  'D9': 'BASH_TOOL_NAME = "Bash"',
  'g5': 'READ_TOOL_NAME = "Read"',
  'bX': 'WRITE_TOOL_NAME = "Write"',
  'R5': 'EDIT_TOOL_NAME = "Edit"',
  'CD': 'GLOB_TOOL_NAME = "Glob"',
  'uY': 'GREP_TOOL_NAME = "Grep"',
  's8': 'TASK_TOOL_NAME = "Task"',
  'vX': 'WEB_FETCH_TOOL_NAME = "WebFetch"',
  'O_': 'WEB_SEARCH_TOOL_NAME = "WebSearch"',
  'gGB': 'TODO_WRITE_TOOL_NAME = "TodoWrite"',
  'tI': 'TODO_READ_TOOL = TodoRead tool object',

  // 系统提示函数 (System Prompt Functions)
  'LSB': 'getBashToolDescription() - Returns Bash tool description',
  'NSB': 'getReadToolDescription() - Returns Read tool description',
  'OSB': 'shouldAddDevNull() - Check if need /dev/null redirect',
  'MSB': 'wrapBashCommand() - Wrap bash command with proper escaping',
  'PSB': 'addDevNullToCommand() - Add /dev/null redirect to command',
  'TSB': 'extractTokensRange() - Extract tokens from range',
  'RSB': 'bashCommandHelpers module loader',

  // 配置函数 (Config Functions)
  'KoA': 'getMaxTimeout() - Returns max timeout (600000ms)',
  'LGA': 'getDefaultTimeout() - Returns default timeout (120000ms)',
  'Ke': 'getMaxOutputLength() - Returns max output length (30000)',
  'oM6': 'getSandboxHint() - Returns sandbox usage hint',
  'tM6': 'getGitCommitInstructions() - Returns git commit instructions',
  'rM6': 'getGitConfig() - Returns git commit/pr config',

  // 沙箱函数 (Sandbox Functions)
  'SQ': 'sandboxDebug(msg, options) - Debug logging for sandbox',
  'P6B': 'createProxyServer(config) - Create HTTP/HTTPS proxy server',
  'j6B': 'emptyFunction() - No-op function',

  // SOCKS5代理 (SOCKS5 Proxy)
  'b6B': 'socks5ServerModule - SOCKS5 server implementation',
  'x6B': 'Socks5Server class',
  'Re8': 'createSocksServer() - Create SOCKS5 server',
  'Fb1': 'defaultConnectionHandler() - Default SOCKS connection handler',
  'Me8': 'Socks5Connection class - Handles SOCKS5 connections',
  'Xb1': 'SocksStatus enum - SOCKS response status codes',
  'y6B': 'SocksCommand enum - SOCKS commands (connect/bind/udp)',

  // 网络相关 (Network)
  'Ve8': 'http.createServer',
  'Ke8': 'http.request',
  'De8': 'https.request',
  'He8': 'net.connect',
  'Ce8': 'URL class',

  // 模块加载器模式 (Module Loader Patterns)
  'L': 'lazyLoader(fn) - Lazy module loader',
  'U': 'moduleWrapper(fn) - CommonJS module wrapper',
  'GA': 'esmImport(module) - ESM import helper',
  'pG': 'esmExport(obj, key) - ESM export binding',
  'UA': 'require(moduleName) - Node.js require',

  // Lodash工具函数 (Lodash Utility Functions)
  'u6B': 'baseFindIndex() - Base find index implementation',
  'd6B': 'baseIsNaN() - Check if value is NaN',
  'p6B': 'strictIndexOf() - Strict array indexOf',
  'i6B': 'baseIndexOf() - Base indexOf with NaN support',
  'a6B': 'arrayIncludes() - Check if array includes value',
  'o6B': 'isFlattenable() - Check if value can be flattened',
  'A5B': 'baseFlatten() - Flatten array implementation',
  'B5B': 'flatten() - Flatten array one level',
  'niA': 'baseSlice() - Base array slice',
  'Y5B': 'castSlice() - Cast to slice with defaults',
  'aiA': 'hasUnicode() - Check for unicode chars',
  'W5B': 'asciiToArray() - Convert ASCII to array',
  'E5B': 'unicodeToArray() - Convert unicode to array',
  'U5B': 'stringToArray() - Convert string to array',
  'w5B': 'createCaseFirst() - Create first char case function',
  'N5B': 'upperFirst() - Uppercase first char',
  'pzA': 'capitalize() - Capitalize string',
  'siA': 'baseEach() - Base forEach implementation',
  's5B': 'omit() - Omit properties from object',
  'o5B': 'baseSet() - Base set property on object',

  // 全局对象 (Global Objects)
  'HX': 'globalThis - Global object reference',
  'HV': 'Symbol - Symbol reference',
  'Ks': 'Map - Map constructor',
  '_u': 'Array - Array constructor',

  // Bash命令处理 (Bash Command Processing)
  'id1': 'hasHeredoc() - Check if command has heredoc',
  'eM6': 'hasMultilineString() - Check for multiline strings',
  'AO6': 'hasInputRedirect() - Check for input redirect',
  'M8': 'shellEscape() - Shell escape utility',
  'IW': 'tokenize() - Tokenize bash command',
  'nd1': 'isOperator() - Check if token is operator',
  'BO6': 'isEnvAssignment() - Check if token is env assignment',
  'GO6': 'isCommandSeparator() - Check if operator separates commands',
  'QO6': 'findPipeIndex() - Find first pipe in tokens',

  // 文件系统 (File System)
  'BwA': 'fs.existsSync',
  'ZO6': 'fs.statSync',
  'IO6': 'fs.mkdirSync',
  'YO6': 'fs.realpathSync',
  'JO6': 'child_process.execSync',
  'WO6': 'child_process.execFile',
  'sd1': 'path.join',
  'DoA': 'os module',

  // ripgrep相关 (ripgrep)
  'XO6': 'getRipgrepCommand() - Get rg command with args',
  'C9A': 'getRipgrepConfig() - Get ripgrep path and args',
  'rd1': 'getShellRcFile() - Get shell rc file path (.bashrc/.zshrc)',
  'FO6': 'getShellSnapshotScript() - Get shell env snapshot script',

  // MCP相关 (MCP Protocol)
  'MGA': 'bashToolModule loader',
};

// ============================================================================
// 函数签名映射 (通过参数和返回值分析)
// ============================================================================

const FUNCTION_SIGNATURES = {
  'SQ': '(message: string, options?: {level: "info"|"warn"|"error"}) => void',
  'P6B': '(config: {filter: FilterFn}) => http.Server',
  'LSB': '() => string // Bash tool description',
  'MSB': '(command: string, addDevNull?: boolean) => string',
  'PSB': '(command: string) => string',
  'id1': '(command: string) => boolean',
  'eM6': '(command: string) => boolean',
  'AO6': '(command: string) => boolean',
  'OSB': '(command: string) => boolean',
};

// ============================================================================
// 处理函数
// ============================================================================

function addAnnotations(code, filename) {
  let result = code;
  let annotations = [];

  // 1. 找到文件中使用的变量，收集需要的注释
  for (const [shortName, description] of Object.entries(VARIABLE_MAP)) {
    // 检查是否有这个变量的定义
    const defRegex = new RegExp(`var\\s+${shortName}\\s*=`, 'g');
    const funcRegex = new RegExp(`function\\s+${shortName}\\s*\\(`, 'g');

    if (defRegex.test(code) || funcRegex.test(code)) {
      annotations.push({ name: shortName, desc: description });
    }
  }

  // 2. 在变量定义前添加注释
  for (const { name, desc } of annotations) {
    // 变量定义
    result = result.replace(
      new RegExp(`(var\\s+${name}\\s*=)`, 'g'),
      `/* ${name} = ${desc} */\n$1`
    );

    // 函数定义
    result = result.replace(
      new RegExp(`(function\\s+${name}\\s*\\()`, 'g'),
      `/* ${name}${FUNCTION_SIGNATURES[name] ? ': ' + FUNCTION_SIGNATURES[name] : ''} */\n/* ${desc} */\n$1`
    );
  }

  // 3. 添加重要字符串常量的注释
  const importantStrings = [
    { pattern: /("Bash")/g, comment: '/* BASH_TOOL_NAME */' },
    { pattern: /("Read")/g, comment: '/* READ_TOOL_NAME */' },
    { pattern: /("Write")/g, comment: '/* WRITE_TOOL_NAME */' },
    { pattern: /("Edit")/g, comment: '/* EDIT_TOOL_NAME */' },
    { pattern: /("Glob")/g, comment: '/* GLOB_TOOL_NAME */' },
    { pattern: /("Grep")/g, comment: '/* GREP_TOOL_NAME */' },
    { pattern: /("Task")/g, comment: '/* TASK_TOOL_NAME */' },
    { pattern: /("WebFetch")/g, comment: '/* WEB_FETCH_TOOL_NAME */' },
    { pattern: /("WebSearch")/g, comment: '/* WEB_SEARCH_TOOL_NAME */' },
    { pattern: /("TodoWrite")/g, comment: '/* TODO_WRITE_TOOL_NAME */' },
  ];

  // 只在var声明时添加字符串注释，避免到处都加
  for (const { pattern, comment } of importantStrings) {
    result = result.replace(
      new RegExp(`(var\\s+\\w+\\s*=\\s*)${pattern.source}`, 'g'),
      `$1${comment} $2`
    );
  }

  return result;
}

function generateVariableIndex(code, filename) {
  const usedVars = [];

  for (const [shortName, description] of Object.entries(VARIABLE_MAP)) {
    const regex = new RegExp(`\\b${shortName}\\b`, 'g');
    const matches = code.match(regex);
    if (matches && matches.length > 0) {
      usedVars.push({
        name: shortName,
        description: description,
        occurrences: matches.length
      });
    }
  }

  return usedVars;
}

function processFile(inputPath, outputPath) {
  let code = fs.readFileSync(inputPath, 'utf-8');
  const filename = path.basename(inputPath);

  // 生成变量索引
  const varIndex = generateVariableIndex(code, filename);

  // 添加注释
  code = addAnnotations(code, filename);

  // 生成文件头部变量索引
  let header = `/**
 * Claude Code Decompiled - Annotated Version
 *
 * 原始文件: ${filename}
 * 注意: 此文件保留了100%的原始代码逻辑
 * 只添加了注释来解释混淆的变量名
 *
 * ============= 变量名索引 (Variable Index) =============
`;

  if (varIndex.length > 0) {
    header += ` * 本文件中使用的混淆变量:\n`;
    for (const v of varIndex.sort((a, b) => b.occurrences - a.occurrences).slice(0, 30)) {
      header += ` *   ${v.name.padEnd(8)} (${v.occurrences}次) = ${v.description}\n`;
    }
  }

  header += ` * ======================================================
 */

`;

  fs.writeFileSync(outputPath, header + code);
  return varIndex.length;
}

// ============================================================================
// 主程序
// ============================================================================

console.log('=== Claude Code Logic Restorer ===\n');
console.log('这个脚本保留原始代码逻辑，只添加注释来解释变量名\n');

// 清理并创建输出目录
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true });
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// 获取所有分类
const categories = fs.readdirSync(INPUT_DIR).filter(f => {
  const stat = fs.statSync(path.join(INPUT_DIR, f));
  return stat.isDirectory();
});

let totalFiles = 0;
let totalAnnotations = 0;

for (const category of categories) {
  const categoryDir = path.join(INPUT_DIR, category);
  const outputCategoryDir = path.join(OUTPUT_DIR, category);
  fs.mkdirSync(outputCategoryDir, { recursive: true });

  const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.js'));
  let categoryAnnotations = 0;

  for (const file of files) {
    const inputPath = path.join(categoryDir, file);
    const outputPath = path.join(outputCategoryDir, file);

    try {
      const annotations = processFile(inputPath, outputPath);
      categoryAnnotations += annotations;
      totalFiles++;
    } catch (err) {
      console.error(`Error processing ${inputPath}: ${err.message}`);
    }
  }

  totalAnnotations += categoryAnnotations;
  console.log(`  ${category}: ${files.length} files, ${categoryAnnotations} annotated variables`);
}

// 复制其他文件
const otherFiles = ['index.js', 'stats.json', 'README.md'];
for (const file of otherFiles) {
  const src = path.join(INPUT_DIR, file);
  const dst = path.join(OUTPUT_DIR, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
  }
}

// 生成完整的变量映射文档
const fullMapping = `# Claude Code 变量名完整映射表

本文档列出了从混淆代码中识别出的所有重要变量名。

## 工具名常量 (Tool Name Constants)

| 混淆名 | 原始含义 | 值 |
|--------|----------|-----|
| D9 | BASH_TOOL_NAME | "Bash" |
| g5 | READ_TOOL_NAME | "Read" |
| bX | WRITE_TOOL_NAME | "Write" |
| R5 | EDIT_TOOL_NAME | "Edit" |
| CD | GLOB_TOOL_NAME | "Glob" |
| uY | GREP_TOOL_NAME | "Grep" |
| s8 | TASK_TOOL_NAME | "Task" |
| vX | WEB_FETCH_TOOL_NAME | "WebFetch" |
| O_ | WEB_SEARCH_TOOL_NAME | "WebSearch" |
| gGB | TODO_WRITE_TOOL_NAME | "TodoWrite" |

## 系统提示函数 (System Prompt Functions)

| 混淆名 | 原始含义 | 说明 |
|--------|----------|------|
| LSB | getBashToolDescription | 返回Bash工具的描述文本 |
| NSB | getReadToolDescription | 返回Read工具的描述文本 |
| OSB | shouldAddDevNull | 检查是否需要添加/dev/null重定向 |
| MSB | wrapBashCommand | 包装bash命令并转义 |
| PSB | addDevNullToCommand | 向命令添加/dev/null重定向 |

## 配置函数 (Config Functions)

| 混淆名 | 原始含义 | 返回值 |
|--------|----------|--------|
| KoA | getMaxTimeout | 600000 (10分钟) |
| LGA | getDefaultTimeout | 120000 (2分钟) |
| Ke | getMaxOutputLength | 30000 字符 |

## 沙箱相关 (Sandbox)

| 混淆名 | 原始含义 | 说明 |
|--------|----------|------|
| SQ | sandboxDebug | 沙箱调试日志函数 |
| P6B | createProxyServer | 创建HTTP/HTTPS代理服务器 |

## SOCKS5代理 (SOCKS5 Proxy)

| 混淆名 | 原始含义 | 说明 |
|--------|----------|------|
| x6B | Socks5Server | SOCKS5服务器类 |
| Me8 | Socks5Connection | SOCKS5连接处理类 |
| Xb1 | SocksStatus | SOCKS响应状态码枚举 |
| y6B | SocksCommand | SOCKS命令枚举 |

## 模块加载器模式 (Module Patterns)

| 模式 | 含义 | 示例 |
|------|------|------|
| L(() => {...}) | 懒加载模块 | 按需加载 |
| U((exports, module) => {...}) | CommonJS包装器 | 模块定义 |
| GA(module) | ESM导入 | import |
| pG(obj, key) | ESM导出绑定 | export |

## Bash命令处理 (Bash Command Processing)

| 混淆名 | 原始含义 | 说明 |
|--------|----------|------|
| id1 | hasHeredoc | 检查命令是否包含heredoc |
| eM6 | hasMultilineString | 检查多行字符串 |
| AO6 | hasInputRedirect | 检查输入重定向 |
| M8 | shellEscape | Shell转义工具 |
| IW | tokenize | 命令分词器 |

## 如何使用此映射表

1. 在阅读混淆代码时，遇到不明变量名先查此表
2. 注释版代码(\`annotated/\`)已包含内联注释
3. 变量名索引在每个文件头部列出

## 分析方法说明

这些变量名映射是通过以下方法确定的：

1. **字符串常量分析**: \`var D9 = "Bash"\` 直接显示值
2. **函数返回值分析**: 函数返回的字符串揭示用途
3. **API调用上下文**: 使用位置暗示变量类型
4. **TypeScript定义文件**: sdk-tools.d.ts提供接口定义
5. **模块依赖关系**: import/export结构揭示模块边界
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'VARIABLE_MAPPING.md'), fullMapping);

console.log(`\n========== 完成 ==========`);
console.log(`📁 输出目录: ${OUTPUT_DIR}`);
console.log(`📄 处理文件: ${totalFiles}`);
console.log(`🏷️  注释变量: ${totalAnnotations}`);
console.log(`📖 映射文档: VARIABLE_MAPPING.md`);
console.log(`\n✅ 代码逻辑100%保留，只添加了解释性注释`);

#!/usr/bin/env node
/**
 * Claude Code 完整逻辑还原脚本
 *
 * 基于对450,258行代码的深度分析
 * 保留100%原始逻辑，通过注释解释所有识别出的变量名
 */

const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, 'src');
const OUTPUT_DIR = path.join(__dirname, 'restored');

// ============================================================================
// 完整变量名映射表 - 基于深度代码分析
// ============================================================================

const VARIABLE_MAP = {
  // ======================== 工具名常量 ========================
  'D9': 'BASH_TOOL = "Bash"',
  'CD': 'GLOB_TOOL = "Glob"',
  'uY': 'GREP_TOOL = "Grep"',
  'g5': 'READ_TOOL = "Read"',
  'R5': 'EDIT_TOOL = "Edit"',
  'bX': 'WRITE_TOOL = "Write"',
  'vX': 'WEB_FETCH_TOOL = "WebFetch"',
  'O_': 'WEB_SEARCH_TOOL = "WebSearch"',
  'M_': 'NOTEBOOK_EDIT_TOOL = "NotebookEdit"',
  'Pq': 'SKILL_TOOL = "Skill"',
  'gGB': 'TODO_WRITE_TOOL = "TodoWrite"',
  'yP': 'SLASH_COMMAND_TOOL = "SlashCommand"',
  'b31': 'ENTER_PLAN_MODE_TOOL = "EnterPlanMode"',
  's8': 'TASK_TOOL = "Task"',
  'dJ': 'ASK_USER_QUESTION_TOOL = "AskUserQuestion"',
  'pI1': 'KILL_SHELL_TOOL = "KillShell"',
  'en': 'AGENT_OUTPUT_TOOL = "AgentOutputTool"',
  'tI': 'TODO_READ_TOOL object',

  // ======================== 配置函数 ========================
  'o9': 'getConfig() - Returns config with BASE_API_URL, OAuth endpoints',
  'S3': 'getDefaultSonnetModel() - Returns main Claude model name',
  'LW': 'getSmallFastModel() - Returns lightweight/haiku model',
  'TR': 'getProviderIdentifier() - Returns API provider ID',
  'KoA': 'getMaxTimeout() - Returns 600000ms (10 minutes)',
  'LGA': 'getDefaultTimeout() - Returns 120000ms (2 minutes)',
  'Ke': 'getMaxOutputLength() - Returns 30000 characters',
  'oM6': 'getSandboxHint() - Returns sandbox usage hint text',
  'tM6': 'getGitCommitInstructions() - Returns git commit instructions',
  'rM6': 'getGitConfig() - Returns git commit/pr config object',

  // ======================== 系统提示函数 ========================
  'LSB': 'getBashToolDescription() - Bash tool description',
  'NSB': 'getReadToolDescription() - Read tool description',
  'OSB': 'shouldAddDevNull() - Check if need /dev/null redirect',
  'MSB': 'wrapBashCommand() - Wrap bash command with escaping',
  'PSB': 'addDevNullToCommand() - Add /dev/null redirect',
  'TSB': 'extractTokensRange() - Extract tokens from range',
  'RSB': 'bashCommandHelpers module loader',
  'qGB': 'SYSTEM_PROMPT_BASE = "You are Claude Code..."',
  'WY9': 'AGENT_SYSTEM_PROMPT = "You are an agent..."',

  // ======================== 沙箱/代理 ========================
  'SQ': 'sandboxDebug(msg, opts) - Sandbox debug logging',
  'P6B': 'createProxyServer(config) - Create HTTP/HTTPS proxy',
  'j6B': 'emptyFunction() - No-op function',
  'x6B': 'Socks5Server class',
  'Me8': 'Socks5Connection class',
  'Xb1': 'SocksStatus enum (REQUEST_GRANTED, GENERAL_FAILURE, etc)',
  'y6B': 'SocksCommand enum (connect, bind, udp)',
  'Re8': 'createSocksServer() - Create SOCKS5 server',
  'Fb1': 'defaultConnectionHandler() - Default SOCKS handler',

  // ======================== API 客户端 ========================
  'Kt': 'MessageStream class - Streaming message handling',
  'IE': 'EventSourceIterator class - SSE event processing',
  'XGB': 'EventDecoder class - Event decoding',
  'Yn0': 'SERVICE_VERSION = "claude-code-20250219"',

  // ======================== 认证相关 ========================
  'Rl': 'NO_TOKENS_FOUND = "no_tokens_found"',
  'hz9': 'BROWSER_EXTENSION_ID = "com.anthropic.claude_code_browser_extension"',

  // ======================== 模型名称 ========================
  'gq': 'MODEL_OPUS = "claude-opus-4-5"',
  'Fq': 'MODEL_SONNET = "claude-sonnet-4-5"',
  'Hq': 'MODEL_HAIKU = "claude-haiku-4"',

  // ======================== Bash命令处理 ========================
  'id1': 'hasHeredoc(cmd) - Check if command has heredoc',
  'eM6': 'hasMultilineString(cmd) - Check for multiline strings',
  'AO6': 'hasInputRedirect(cmd) - Check for input redirect',
  'M8': 'shellEscape(args) - Shell escape utility',
  'IW': 'tokenize(cmd) - Tokenize bash command',
  'nd1': 'isOperator(token, op) - Check if token is operator',
  'BO6': 'isEnvAssignment(token) - Check env assignment pattern',
  'GO6': 'isCommandSeparator(op) - Check command separator (&&, ||, ;)',
  'QO6': 'findPipeIndex(tokens) - Find first pipe in tokens',

  // ======================== 文件系统 ========================
  'BwA': 'fs.existsSync',
  'ZO6': 'fs.statSync',
  'IO6': 'fs.mkdirSync',
  'YO6': 'fs.realpathSync',
  'JO6': 'child_process.execSync',
  'WO6': 'child_process.execFile',
  'sd1': 'path.join',
  'DoA': 'os module',
  'XO6': 'getRipgrepCommand() - Get rg command with args',
  'C9A': 'getRipgrepConfig() - Get ripgrep path and args',
  'rd1': 'getShellRcFile() - Get .bashrc/.zshrc path',
  'FO6': 'getShellSnapshotScript() - Get shell env snapshot',

  // ======================== 网络导入 ========================
  'Ve8': 'http.createServer',
  'Ke8': 'http.request',
  'De8': 'https.request',
  'He8': 'net.connect',
  'Ce8': 'URL class',

  // ======================== 模块加载器 ========================
  'L': 'lazyLoader(fn) - Lazy module loader pattern',
  'U': 'moduleWrapper(exports, module) - CommonJS wrapper',
  'GA': 'esmImport(module) - ESM import helper',
  'pG': 'esmExport(obj, key) - ESM export binding',
  'UA': 'require(moduleName) - Node.js require',
  'xz': 'nativeMethod(obj, name) - Native method lookup',

  // ======================== 全局对象 ========================
  'HX': 'globalThis - Global object reference',
  'HV': 'Symbol - Symbol reference',
  'Ks': 'Map - Map constructor',
  '_u': 'Array - Array constructor',

  // ======================== Lodash工具 ========================
  'u6B': 'baseFindIndex() - Base find index',
  'd6B': 'baseIsNaN() - Check if NaN',
  'p6B': 'strictIndexOf() - Strict array indexOf',
  'i6B': 'baseIndexOf() - Base indexOf with NaN',
  'a6B': 'arrayIncludes() - Array includes check',
  'o6B': 'isFlattenable() - Check if flattenable',
  'A5B': 'baseFlatten() - Flatten array',
  'B5B': 'flatten() - Flatten one level',
  'niA': 'baseSlice() - Base array slice',
  'Y5B': 'castSlice() - Cast to slice',
  'aiA': 'hasUnicode() - Check for unicode',
  'W5B': 'asciiToArray() - ASCII to array',
  'E5B': 'unicodeToArray() - Unicode to array',
  'U5B': 'stringToArray() - String to array',
  'w5B': 'createCaseFirst() - Create case function',
  'N5B': 'upperFirst() - Uppercase first char',
  'pzA': 'capitalize() - Capitalize string',
  'siA': 'baseEach() - Base forEach',
  's5B': 'omit() - Omit properties',
  'o5B': 'baseSet() - Base set property',
  'uBA': 'toString() - Convert to string',
  'Tj': 'isArrayLike() - Check array-like',
  'TY': 'isObject() - Check if object',
  'j7': 'isArray() - Check if array',
  'px': 'isArguments() - Check if arguments',
  'gBA': 'arrayMap() - Array map',
  'dBA': 'baseGet() - Base property get',
  'bBA': 'baseIsEqual() - Base equality check',
  'jj': 'baseIteratee() - Base iteratee',
  'SN': 'keys() - Get object keys',
  'dC': 'last() - Get last element',
  'Pj': 'castPath() - Cast to path array',
  '_N': 'toKey() - Convert to key',
  'jBA': 'arrayPush() - Array push helper',
  '$m': 'assignValue() - Assign value to object',
  'xu': 'isIndex() - Check if valid index',
  'EvA': 'baseClone() - Base clone',
  'HvA': 'getAllKeysIn() - Get all keys including inherited',
  'hN': 'copyObject() - Copy object properties',
  'j9A': 'isPlainObject() - Check plain object',
  'LlA': 'baseForOwn() - Base for own properties',
  'nxA': 'overRest() - Over rest args',
  'axA': 'setToString() - Set toString on function',

  // ======================== 遥测/分析 ========================
  'claude_code.session.count': 'Session counter metric',
  'claude_code.lines_of_code.count': 'Lines of code counter',
  'claude_code.pull_request.count': 'Pull request counter',
  'claude_code.commit.count': 'Commit counter',
  'claude_code.cost.usage': 'Cost tracking metric',
  'claude_code.token.usage': 'Token usage metric',

  // ======================== 检测函数 ========================
  'RJ': 'isClaudeCodeRemote() - Check if remote execution',
  'D_A': 'getModelProvider(model) - Get provider for model',

  // ======================== 流类型 ========================
  'message_start': 'MESSAGE_START event type',
  'message_delta': 'MESSAGE_DELTA event type',
  'message_stop': 'MESSAGE_STOP event type',
  'content_block_start': 'CONTENT_BLOCK_START event',
  'content_block_delta': 'CONTENT_BLOCK_DELTA event',
  'content_block_stop': 'CONTENT_BLOCK_STOP event',
  'text_delta': 'TEXT_DELTA event type',
  'tool_use': 'TOOL_USE content type',
  'server_tool_use': 'SERVER_TOOL_USE type',
  'mcp_tool_use': 'MCP_TOOL_USE type',
  'thinking': 'THINKING content type',
};

// ======================== 函数签名 ========================
const FUNCTION_SIGNATURES = {
  'o9': '() => ConfigObject',
  'S3': '() => string // e.g., "claude-sonnet-4-5-20250929"',
  'LW': '() => string // e.g., "claude-haiku-4"',
  'TR': '() => string // provider identifier',
  'SQ': '(message: string, options?: {level: "info"|"warn"|"error"}) => void',
  'P6B': '(config: {filter: FilterFn}) => http.Server',
  'LSB': '() => string // Bash tool description',
  'NSB': '() => string // Read tool description',
  'MSB': '(command: string, addDevNull?: boolean) => string',
  'PSB': '(command: string) => string',
  'id1': '(command: string) => boolean',
  'eM6': '(command: string) => boolean',
  'AO6': '(command: string) => boolean',
  'OSB': '(command: string) => boolean',
  'M8': '(args: string[]) => string',
  'IW': '(command: string) => {success: boolean, tokens: Token[]}',
  'nd1': '(token: any, op?: string) => boolean',
  'RJ': '() => boolean',
  'D_A': '(model: string) => string',
};

// ======================== 重要字符串模式 ========================
const STRING_PATTERNS = [
  // API端点
  { pattern: /["']\/v1\/messages["']/g, comment: 'MESSAGES_API_ENDPOINT' },
  { pattern: /["']\/v1\/messages\/count_tokens["']/g, comment: 'TOKEN_COUNT_ENDPOINT' },
  { pattern: /["']\/v1\/sessions["']/g, comment: 'SESSIONS_ENDPOINT' },
  { pattern: /["']https:\/\/api\.anthropic\.com["']/g, comment: 'ANTHROPIC_API_BASE_URL' },

  // 模型名称
  { pattern: /["']claude-opus-4-5["']/g, comment: 'MODEL_OPUS' },
  { pattern: /["']claude-sonnet-4-5["']/g, comment: 'MODEL_SONNET' },
  { pattern: /["']claude-haiku-4["']/g, comment: 'MODEL_HAIKU' },
  { pattern: /["']claude-3-5-sonnet["']/g, comment: 'MODEL_SONNET_3_5' },

  // 环境变量
  { pattern: /["']ANTHROPIC_API_KEY["']/g, comment: 'ENV_API_KEY' },
  { pattern: /["']ANTHROPIC_AUTH_TOKEN["']/g, comment: 'ENV_AUTH_TOKEN' },
  { pattern: /["']ANTHROPIC_MODEL["']/g, comment: 'ENV_MODEL_OVERRIDE' },
  { pattern: /["']ANTHROPIC_BASE_URL["']/g, comment: 'ENV_BASE_URL' },

  // Headers
  { pattern: /["']anthropic-version["']/g, comment: 'HEADER_API_VERSION' },
  { pattern: /["']anthropic-beta["']/g, comment: 'HEADER_BETA_FEATURES' },
  { pattern: /["']x-api-key["']/g, comment: 'HEADER_API_KEY' },
];

// ============================================================================
// 处理函数
// ============================================================================

function addAnnotations(code, filename) {
  let result = code;

  // 1. 为变量定义添加注释
  for (const [shortName, description] of Object.entries(VARIABLE_MAP)) {
    // 跳过太短或者是方法名的
    if (shortName.length < 2 || shortName.includes('.')) continue;

    // 变量定义: var XX = ...
    const varDefRegex = new RegExp(`(var\\s+${escapeRegex(shortName)}\\s*=)`, 'g');
    if (varDefRegex.test(result)) {
      result = result.replace(varDefRegex, `/* ${shortName} = ${description} */\n$1`);
    }

    // 函数定义: function XX(...)
    const funcDefRegex = new RegExp(`(function\\s+${escapeRegex(shortName)}\\s*\\()`, 'g');
    if (funcDefRegex.test(result)) {
      const sig = FUNCTION_SIGNATURES[shortName] || '';
      const sigComment = sig ? `\n/* Signature: ${sig} */` : '';
      result = result.replace(funcDefRegex, `/* ${shortName} = ${description} */${sigComment}\n$1`);
    }
  }

  // 2. 为重要字符串添加注释
  for (const { pattern, comment } of STRING_PATTERNS) {
    result = result.replace(pattern, `/* ${comment} */ $&`);
  }

  return result;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function generateVariableIndex(code, filename) {
  const usedVars = [];

  for (const [shortName, description] of Object.entries(VARIABLE_MAP)) {
    if (shortName.length < 2 || shortName.includes('.')) continue;

    const regex = new RegExp(`\\b${escapeRegex(shortName)}\\b`, 'g');
    const matches = code.match(regex);
    if (matches && matches.length > 0) {
      usedVars.push({
        name: shortName,
        description: description,
        occurrences: matches.length
      });
    }
  }

  return usedVars.sort((a, b) => b.occurrences - a.occurrences);
}

function processFile(inputPath, outputPath) {
  let code = fs.readFileSync(inputPath, 'utf-8');
  const filename = path.basename(inputPath);

  // 生成变量索引
  const varIndex = generateVariableIndex(code, filename);

  // 添加注释
  code = addAnnotations(code, filename);

  // 生成文件头部
  let header = `/**
 * ========================================================
 * Claude Code Decompiled - 完整逻辑还原版
 * ========================================================
 *
 * 原始文件: ${filename}
 * 处理时间: ${new Date().toISOString()}
 *
 * 注意: 此文件保留了100%的原始代码逻辑
 * 通过注释解释混淆的变量名和函数名
 *
`;

  if (varIndex.length > 0) {
    header += ` * ==================== 变量索引 ====================\n`;
    for (const v of varIndex.slice(0, 40)) {
      header += ` * ${v.name.padEnd(10)} (${String(v.occurrences).padStart(3)}x) = ${v.description.substring(0, 60)}\n`;
    }
    if (varIndex.length > 40) {
      header += ` * ... 还有 ${varIndex.length - 40} 个变量 ...\n`;
    }
  }

  header += ` * ===================================================
 */

`;

  fs.writeFileSync(outputPath, header + code);
  return varIndex.length;
}

// ============================================================================
// 生成模块依赖图
// ============================================================================

function analyzeDependencies(srcDir) {
  const deps = {};
  const categories = fs.readdirSync(srcDir).filter(f => {
    const stat = fs.statSync(path.join(srcDir, f));
    return stat.isDirectory();
  });

  for (const category of categories) {
    const categoryDir = path.join(srcDir, category);
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.js'));

    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      const code = fs.readFileSync(filePath, 'utf-8');
      const key = `${category}/${file}`;

      deps[key] = {
        imports: [],
        exports: [],
        tools: [],
        apis: []
      };

      // 检测工具使用
      const toolMatches = code.match(/\b(D9|CD|uY|g5|R5|bX|vX|O_|M_|Pq|gGB|yP|b31|s8|dJ|pI1)\b/g);
      if (toolMatches) {
        deps[key].tools = [...new Set(toolMatches)];
      }

      // 检测API调用
      if (code.includes('/v1/messages')) deps[key].apis.push('Messages API');
      if (code.includes('/v1/sessions')) deps[key].apis.push('Sessions API');
      if (code.includes('oauth')) deps[key].apis.push('OAuth');
    }
  }

  return deps;
}

// ============================================================================
// 主程序
// ============================================================================

console.log('╔════════════════════════════════════════════════════════════╗');
console.log('║     Claude Code 完整逻辑还原器 v2.0                         ║');
console.log('║     保留100%原始代码逻辑，添加变量名解释注释                 ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

// 清理并创建输出目录
if (fs.existsSync(OUTPUT_DIR)) {
  fs.rmSync(OUTPUT_DIR, { recursive: true });
}
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// 获取所有分类
const categories = fs.readdirSync(INPUT_DIR).filter(f => {
  const p = path.join(INPUT_DIR, f);
  return fs.statSync(p).isDirectory();
});

let totalFiles = 0;
let totalAnnotations = 0;
const categoryStats = {};

console.log('处理文件中...\n');

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
      console.error(`  错误处理 ${file}: ${err.message}`);
    }
  }

  totalAnnotations += categoryAnnotations;
  categoryStats[category] = { files: files.length, annotations: categoryAnnotations };

  const bar = '█'.repeat(Math.min(20, Math.floor(categoryAnnotations / 10)));
  console.log(`  ${category.padEnd(12)} ${String(files.length).padStart(3)} 文件 ${String(categoryAnnotations).padStart(4)} 注释 ${bar}`);
}

// 分析依赖
console.log('\n分析模块依赖...');
const dependencies = analyzeDependencies(INPUT_DIR);

// 生成依赖图文档
const depDoc = generateDependencyDoc(dependencies);
fs.writeFileSync(path.join(OUTPUT_DIR, 'DEPENDENCIES.md'), depDoc);

// 生成完整的变量映射文档
const fullMapping = generateFullMappingDoc();
fs.writeFileSync(path.join(OUTPUT_DIR, 'VARIABLE_MAPPING.md'), fullMapping);

// 生成架构文档
const archDoc = generateArchitectureDoc(categoryStats);
fs.writeFileSync(path.join(OUTPUT_DIR, 'ARCHITECTURE.md'), archDoc);

// 复制其他文件
const otherFiles = ['index.js', 'stats.json', 'README.md'];
for (const file of otherFiles) {
  const src = path.join(INPUT_DIR, file);
  const dst = path.join(OUTPUT_DIR, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dst);
  }
}

console.log('\n╔════════════════════════════════════════════════════════════╗');
console.log(`║  完成! 处理了 ${totalFiles} 个文件, ${totalAnnotations} 个变量注释`);
console.log('╚════════════════════════════════════════════════════════════╝');
console.log(`\n📁 输出目录: ${OUTPUT_DIR}`);
console.log('📖 生成文档:');
console.log('   - VARIABLE_MAPPING.md  (变量名映射表)');
console.log('   - DEPENDENCIES.md      (模块依赖图)');
console.log('   - ARCHITECTURE.md      (架构说明)');

// ============================================================================
// 文档生成函数
// ============================================================================

function generateDependencyDoc(deps) {
  let doc = `# Claude Code 模块依赖关系

本文档展示各模块之间的依赖关系和工具使用情况。

## 工具使用统计

| 模块 | 使用的工具 | API调用 |
|------|-----------|---------|
`;

  for (const [file, info] of Object.entries(deps)) {
    if (info.tools.length > 0 || info.apis.length > 0) {
      const tools = info.tools.map(t => VARIABLE_MAP[t]?.split('=')[0] || t).join(', ');
      const apis = info.apis.join(', ');
      doc += `| ${file} | ${tools} | ${apis} |\n`;
    }
  }

  return doc;
}

function generateFullMappingDoc() {
  let doc = `# Claude Code 完整变量名映射表

本文档包含从混淆代码中识别出的所有变量名映射。

## 工具名常量

| 混淆名 | 原始含义 | 值 |
|--------|----------|-----|
`;

  const toolVars = ['D9', 'CD', 'uY', 'g5', 'R5', 'bX', 'vX', 'O_', 'M_', 'Pq', 'gGB', 'yP', 'b31', 's8', 'dJ', 'pI1', 'en'];
  for (const v of toolVars) {
    if (VARIABLE_MAP[v]) {
      const parts = VARIABLE_MAP[v].split('=');
      doc += `| ${v} | ${parts[0].trim()} | ${parts[1]?.trim() || '-'} |\n`;
    }
  }

  doc += `
## 配置函数

| 混淆名 | 原始含义 | 签名 |
|--------|----------|------|
`;

  const configFuncs = ['o9', 'S3', 'LW', 'TR', 'KoA', 'LGA', 'Ke'];
  for (const v of configFuncs) {
    if (VARIABLE_MAP[v]) {
      doc += `| ${v} | ${VARIABLE_MAP[v]} | ${FUNCTION_SIGNATURES[v] || '-'} |\n`;
    }
  }

  doc += `
## 系统提示函数

| 混淆名 | 原始含义 |
|--------|----------|
`;

  const promptFuncs = ['LSB', 'NSB', 'OSB', 'MSB', 'PSB', 'TSB', 'RSB', 'qGB', 'WY9'];
  for (const v of promptFuncs) {
    if (VARIABLE_MAP[v]) {
      doc += `| ${v} | ${VARIABLE_MAP[v]} |\n`;
    }
  }

  doc += `
## Bash命令处理

| 混淆名 | 原始含义 | 签名 |
|--------|----------|------|
`;

  const bashFuncs = ['id1', 'eM6', 'AO6', 'M8', 'IW', 'nd1', 'BO6', 'GO6', 'QO6'];
  for (const v of bashFuncs) {
    if (VARIABLE_MAP[v]) {
      doc += `| ${v} | ${VARIABLE_MAP[v]} | ${FUNCTION_SIGNATURES[v] || '-'} |\n`;
    }
  }

  doc += `
## 模块加载器模式

| 模式 | 含义 | 用法 |
|------|------|------|
| L(() => {...}) | 懒加载模块 | 按需加载模块 |
| U((exports, module) => {...}) | CommonJS包装器 | 模块定义 |
| GA(module) | ESM导入 | import helper |
| pG(obj, key) | ESM导出绑定 | export binding |
| UA(name) | require() | Node.js require |

## 完整变量列表

`;

  for (const [name, desc] of Object.entries(VARIABLE_MAP).sort()) {
    if (!name.includes('.')) {
      doc += `- \`${name}\` = ${desc}\n`;
    }
  }

  return doc;
}

function generateArchitectureDoc(stats) {
  let doc = `# Claude Code 架构说明

## 代码库统计

| 分类 | 文件数 | 注释变量数 | 说明 |
|------|--------|-----------|------|
`;

  const descriptions = {
    'tools': '工具实现 (Bash, Read, Write, Edit, Glob, Grep 等)',
    'prompts': '系统提示词和模板',
    'agents': 'Agent系统 (Task, Explore, Plan 等)',
    'api': 'API客户端 (Anthropic, Bedrock, Vertex, Foundry)',
    'auth': '认证系统 (OAuth, API Key, 证书)',
    'mcp': 'Model Context Protocol 实现',
    'ui': 'React/Ink UI组件',
    'git': 'Git操作和gRPC',
    'telemetry': '遥测和分析',
    'config': '配置管理',
    'commands': 'CLI斜杠命令',
    'lodash': 'Lodash工具函数',
    'crypto': '加密操作',
    'process': '进程管理',
    'fs': '文件系统操作',
    'other': '其他模块',
  };

  for (const [cat, info] of Object.entries(stats).sort((a, b) => b[1].annotations - a[1].annotations)) {
    doc += `| ${cat} | ${info.files} | ${info.annotations} | ${descriptions[cat] || '-'} |\n`;
  }

  doc += `
## 核心模块关系

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                      Claude Code CLI                         │
├─────────────────────────────────────────────────────────────┤
│  UI Layer (ui/)                                              │
│  ├── React/Ink Components                                    │
│  └── Terminal Rendering                                      │
├─────────────────────────────────────────────────────────────┤
│  Command Layer (commands/)                                   │
│  ├── Slash Commands                                          │
│  └── Interactive Commands                                    │
├─────────────────────────────────────────────────────────────┤
│  Agent Layer (agents/)                                       │
│  ├── Task Agent (general-purpose)                            │
│  ├── Explore Agent (codebase exploration)                    │
│  ├── Plan Agent (architecture planning)                      │
│  └── Claude Code Guide Agent (documentation)                 │
├─────────────────────────────────────────────────────────────┤
│  Tool Layer (tools/)                                         │
│  ├── File Tools: Read, Write, Edit, Glob, Grep              │
│  ├── Bash Tool: Command execution with sandbox               │
│  ├── Web Tools: WebFetch, WebSearch                          │
│  ├── Task Tools: TodoWrite, Task                             │
│  └── Interactive: AskUserQuestion, Skill, SlashCommand       │
├─────────────────────────────────────────────────────────────┤
│  API Layer (api/)                                            │
│  ├── Anthropic Client (direct API)                           │
│  ├── AWS Bedrock Client                                      │
│  ├── Google Vertex AI Client                                 │
│  └── Azure Foundry Client                                    │
├─────────────────────────────────────────────────────────────┤
│  Auth Layer (auth/)                                          │
│  ├── OAuth 2.0 (Claude.ai, Console)                          │
│  ├── API Key Authentication                                  │
│  └── Certificate/Credential Auth                             │
├─────────────────────────────────────────────────────────────┤
│  Protocol Layer (mcp/)                                       │
│  ├── MCP Server Implementation                               │
│  ├── Tool Registration                                       │
│  └── Message Handling                                        │
├─────────────────────────────────────────────────────────────┤
│  Infrastructure                                              │
│  ├── Config (config/)                                        │
│  ├── Git Integration (git/)                                  │
│  ├── Telemetry (telemetry/)                                  │
│  └── Process Management (process/)                           │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## 数据流

1. **用户输入** → UI Layer → Command Parser
2. **命令处理** → Agent Layer → Tool Selection
3. **工具执行** → Tool Layer → API/File System
4. **API调用** → API Layer → Auth Layer → External API
5. **响应处理** → Stream Handler → UI Rendering

## 关键文件位置

- **工具定义**: \`tools/tools_004.js\` - \`tools/tools_013.js\`
- **系统提示**: \`prompts/prompts_003.js\` - \`prompts/prompts_006.js\`
- **Agent逻辑**: \`agents/agents_001.js\` - \`agents/agents_013.js\`
- **API客户端**: \`api/api_001.js\` - \`api/api_030.js\`
- **认证流程**: \`auth/auth_001.js\` - \`auth/auth_061.js\`
`;

  return doc;
}

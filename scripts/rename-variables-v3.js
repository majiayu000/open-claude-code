/**
 * Claude Code v2.0.62 完整变量重命名脚本
 * 将混淆的变量名替换为有意义的名称
 */

const fs = require('fs');

// v2.0.62 版本的完整变量映射表
const VARIABLE_MAPPINGS = {
  // ==================== 工具名常量 ====================
  '_8': 'BASH_TOOL_NAME',
  'DZ': 'READ_TOOL_NAME',
  'nM': 'GLOB_TOOL_NAME',
  'a3': 'TASK_TOOL_NAME',
  'X$': 'GREP_TOOL_NAME',
  'MX': 'EDIT_TOOL_NAME',
  'Pv': 'NOTEBOOK_EDIT_TOOL_NAME',
  'tq': 'MULTI_EDIT_TOOL_NAME',
  'aM': 'WRITE_TOOL_NAME',
  'eq': 'WEB_FETCH_TOOL_NAME',
  'h11': 'WEB_SEARCH_TOOL_NAME',
  'w25': 'EXIT_PLAN_MODE_TOOL_NAME',
  'Yc': 'SLASH_COMMAND_TOOL_NAME',

  // ==================== 工具描述变量 ====================
  'eD0': 'GLOB_TOOL_DESCRIPTION',
  'VBB': 'MULTI_EDIT_TOOL_DESCRIPTION',
  'KBB': 'WRITE_TOOL_DESCRIPTION',
  'qBB': 'TODO_WRITE_TOOL_DESCRIPTION',

  // ==================== 配置常量 ====================
  'CBB': 'MAX_INPUT_TOKENS',
  'UBB': 'TARGET_INPUT_TOKENS',
  'tv6': 'READONLY_TOOLS',
  'ev6': 'EDIT_TOOLS',
  'NKQ': 'MAX_TIMEOUT_MS',
  'LHQ': 'MAX_OUTPUT_LENGTH',

  // ==================== 函数定义 ====================
  'ek1': 'getSystemPromptHeader',
  '$BB': 'noOpFunction',
  'AC0': 'getGrepToolDescription',

  // ==================== 配置/URL 常量 ====================
  'sUA': 'SETTINGS_SCHEMA_URL',
  'wBB': 'CLAUDE_AI_CODE_URL',
  'XF2': 'SERVICE_VERSION',
  'eR6': 'BEDROCK_VERSION',
  'pv6': 'VERTEX_VERSION',
  'wQ5': 'DOCS_MAP_URL',
  'tDB': 'CODE_RELEASES_URL',
  'YTB': 'SENTRY_DSN',
  'As6': 'ANTHROPIC_CLAUDE_CODE',
  'rv': 'API_VERSION_DATE',
  'N_': 'INK_VERSION',
  'gh': 'VERSION_STRING',
  'Dq1': 'USER_INFERENCE_KEY',
  'iv4': 'USAGE_LIMIT_MESSAGE',

  // ==================== 错误常量 ====================
  'J3Q': 'EXPECTED_FUNCTION_ERROR',
  'KIQ': 'EXPECTED_FUNCTION_ERROR_2',
  'OX': 'API_ERROR',
  'WE0': 'OPUS_OVERLOAD_ERROR',
  'g01': 'REQUEST_INTERRUPTED_MESSAGE',
  'TwA': 'READDIRP_RECURSIVE_ERROR',

  // ==================== Lodash 相关 ====================
  '$5Q': 'NULL_TAG',
  'N5Q': 'SYMBOL_TAG',
  'j5Q': 'ASYNC_FUNC_TAG',
  '_8Q': 'ARGUMENTS_TAG',
  'd8Q': 'ARGUMENTS_TAG_2',
  'f7Q': 'HASH_UNDEFINED',
  'l7Q': 'HASH_UNDEFINED_2',
  'sGQ': 'HASH_UNDEFINED_3',
  'O3Q': 'OBJECT_TAG',
  'Ov0': 'MAP_TAG',
  'zGQ': 'MAP_TAG_2',
  'nZQ': 'BOOLEAN_TAG',
  'UGQ': 'SET_TAG',
  '_3Q': 'UNICODE_RANGE',
  'Bv0': 'UNICODE_RANGE_2',
  'A8Q': 'LARGE_ARRAY_SIZE',
  'z8Q': 'MAX_SAFE_INTEGER',
  'O8Q': 'MAX_SAFE_INTEGER_2',
  'X3Q': 'HOT_COUNT',
  'FZQ': 'HOT_SPAN',

  // ==================== UI 相关 ====================
  'j$1': 'HYPERLINK_START',
  'C8': 'ANSI_ESCAPE',
  'zO9': 'TAB_CHAR',
  '_CB': 'ANSI_RESET',
  'H9B': 'EXPAND_HINT',
  'XDB': 'PASTE_CODE_PROMPT',
  'yDB': 'PASTE_CODE_PROMPT_2',
  'fp6': 'SINGLE_QUOTE',
  'GC0': 'BACKSLASH',
  'PC0': 'SINGLE_QUOTE_PLACEHOLDER',
  'FZB': 'EMPTY_STRING',
  'bK5': 'DARK_THEME',
  'H9Q': 'UPDATED_STATUS',
  '_q9': 'DATA_TYPE',
  'IE9': 'STAT_TYPE',
  'eW9': 'NON_SLASH_PATTERN',
  'pl1': 'LOWERCASE_ALPHABET',
  'jE0': 'NO_PREFERENCE',
  'zQ5': 'DEFAULT_VALUE',
  'VF5': 'PLUGIN_TYPE',
  'aX5': 'AT_MENTIONED',
  'fJ5': 'INCORRECT_INDEX_TYPE',
  'gEB': 'NOTEBOOK_EDIT_DESCRIPTION',
  'GEB': 'PRIVACY_SETTINGS_MESSAGE',
  'DDB': 'ADD_GITHUB_WORKFLOW',

  // ==================== 数字常量 ====================
  'qGQ': 'CORE_FREEBIE_COUNT',
  'iGQ': 'CORE_FREEBIE_COUNT_2',
  'AYQ': 'PENDING_STATE',
  'YYQ': 'PENDING_STATE_2',
  'wYQ': 'PENDING_STATE_3',
  'LYQ': 'PENDING_STATE_4',
  'RYQ': 'PENDING_STATE_5',
  'bYQ': 'PENDING_STATE_6',
  'CIQ': 'PENDING_STATE_7',
  'bIQ': 'STATUS_OK',
  'lY9': 'BATCH_SIZE',

  // ==================== 颜色/样式常量 ====================
  'g7A': 'COLOR_MODE_1',
  's7A': 'COLOR_MODE_14',
  'WZA': 'STYLE_CODE_81',
  'qZA': 'STYLE_CODE_97',
  'PZA': 'STYLE_CODE_107',
  'jZA': 'STYLE_CODE_109',
  'bZA': 'STYLE_CODE_124',
  'dZA': 'STYLE_CODE_131',
  'GGA': 'STYLE_CODE_153',
  's91': 'STYLE_CODE_213',
  'BYA': 'STYLE_CODE_222',
  'TT': 'STYLE_CODE_240',
  'NYA': 'STYLE_CODE_249',
  'xYA': 'STYLE_CODE_270',

  // ==================== import 相关 ====================
  'oq0': 'randomUUID',
  'RA5': 'createHash',
  'Xx1': 'EOL',
  'Lp6': 'isAbsolute',
  'Mp6': 'resolve',
  'Wf6': 'createHash2',
  'UQB': 'joinPath',
};

// 需要精确匹配的变量（避免替换子字符串）
function createSafeRegex(varName) {
  const escaped = varName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(
    `(?<![a-zA-Z0-9_$])${escaped}(?![a-zA-Z0-9_$])`,
    'g'
  );
}

// 按变量名长度降序排序
const sortedMappings = Object.entries(VARIABLE_MAPPINGS)
  .sort((a, b) => b[0].length - a[0].length);

function renameVariables(code) {
  let result = code;
  let totalReplacements = 0;
  const replacementLog = [];

  for (const [obfuscated, readable] of sortedMappings) {
    const regex = createSafeRegex(obfuscated);
    const matches = result.match(regex);
    if (matches) {
      const count = matches.length;
      totalReplacements += count;
      replacementLog.push(`${obfuscated} -> ${readable}: ${count} times`);
      result = result.replace(regex, readable);
    }
  }

  console.log('\n=== Replacement Log ===');
  replacementLog.forEach(log => console.log(log));
  console.log(`\nTotal replacements: ${totalReplacements}`);

  return result;
}

function main() {
  const inputFile = process.argv[2] || 'decompiled/v2.0.62/cli.formatted.js';
  const outputFile = process.argv[3] || 'decompiled/v2.0.62/cli.readable.js';

  console.log(`Reading: ${inputFile}`);
  const code = fs.readFileSync(inputFile, 'utf-8');

  console.log(`Processing ${code.length} characters...`);
  const renamed = renameVariables(code);

  console.log(`\nWriting: ${outputFile}`);
  fs.writeFileSync(outputFile, renamed);

  console.log('Done!');

  // 生成变量映射文档
  const mappingDoc = `# Claude Code v2.0.62 变量映射表

## 工具名常量
| 混淆名 | 还原名 | 说明 |
|--------|--------|------|
${Object.entries(VARIABLE_MAPPINGS).slice(0, 13).map(([k, v]) => `| \`${k}\` | \`${v}\` | - |`).join('\n')}

## 配置常量
| 混淆名 | 还原名 | 说明 |
|--------|--------|------|
${Object.entries(VARIABLE_MAPPINGS).slice(13, 30).map(([k, v]) => `| \`${k}\` | \`${v}\` | - |`).join('\n')}

## 总计: ${Object.keys(VARIABLE_MAPPINGS).length} 个变量映射
`;

  fs.writeFileSync('decompiled/v2.0.62/VARIABLE_MAPPING.md', mappingDoc);
  console.log('\nGenerated VARIABLE_MAPPING.md');
}

main();

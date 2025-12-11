/**
 * Claude Code v2.0.62 变量重命名脚本
 * 将混淆的变量名替换为有意义的名称
 */

const fs = require('fs');

// v2.0.62 版本的变量映射表
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
};

// 需要精确匹配的变量（避免替换子字符串）
function createSafeRegex(varName) {
  // 转义特殊字符
  const escaped = varName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // 匹配：独立的变量使用
  return new RegExp(
    `(?<![a-zA-Z0-9_$])${escaped}(?![a-zA-Z0-9_$])`,
    'g'
  );
}

// 按变量名长度降序排序（先替换长的，避免短变量名误替换）
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

// 主函数
function main() {
  const inputFile = process.argv[2] || 'decompiled/v2.0.62/cli.formatted.js';
  const outputFile = process.argv[3] || 'decompiled/v2.0.62/cli.renamed.js';

  console.log(`Reading: ${inputFile}`);
  const code = fs.readFileSync(inputFile, 'utf-8');

  console.log(`Processing ${code.length} characters...`);
  const renamed = renameVariables(code);

  console.log(`\nWriting: ${outputFile}`);
  fs.writeFileSync(outputFile, renamed);

  console.log('Done!');
}

main();

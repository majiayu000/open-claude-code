/**
 * Claude Code 变量重命名脚本
 * 将混淆的变量名替换为有意义的名称
 */

const fs = require('fs');
const path = require('path');

// 变量映射表 - 从 VARIABLE_MAPPING.md 提取
const VARIABLE_MAPPINGS = {
  // ==================== 工具名常量 ====================
  'D9': 'BASH_TOOL',
  'CD': 'GLOB_TOOL',
  'uY': 'GREP_TOOL',
  'g5': 'READ_TOOL',
  'R5': 'EDIT_TOOL',
  'bX': 'WRITE_TOOL',
  'vX': 'WEB_FETCH_TOOL',
  'O_': 'WEB_SEARCH_TOOL',
  'M_': 'NOTEBOOK_EDIT_TOOL',
  'Pq': 'SKILL_TOOL',
  'gGB': 'TODO_WRITE_TOOL',
  'yP': 'SLASH_COMMAND_TOOL',
  'b31': 'ENTER_PLAN_MODE_TOOL',
  'a61': 'EXIT_PLAN_MODE_TOOL',
  's8': 'TASK_TOOL',
  'dJ': 'ASK_USER_QUESTION_TOOL',
  'pI1': 'KILL_SHELL_TOOL',
  'en': 'AGENT_OUTPUT_TOOL',

  // ==================== 模型常量 ====================
  'Fq': 'MODEL_SONNET',
  'Hq': 'MODEL_HAIKU',
  'gq': 'MODEL_OPUS',

  // ==================== 配置函数 ====================
  'o9': 'getConfig',
  'S3': 'getDefaultSonnetModel',
  'LW': 'getSmallFastModel',
  'KoA': 'getMaxTimeout',
  'LGA': 'getDefaultTimeout',
  'Ke': 'getMaxOutputLength',
  'J6': 'getProvider',
  'TR': 'getProviderIdentifier',
  'ZI': 'getFeatureFlag',
  'V0': 'parseBoolean',
  'SnA': 'getTodayDate',
  'RJ': 'isClaudeCodeRemote',

  // ==================== 系统提示 ====================
  'qGB': 'SYSTEM_PROMPT',
  'LSB': 'getBashToolDescription',
  'Df1': 'getGrepDescription',
  'EGB': 'getWebSearchDescription',
  'Kf1': 'GLOB_TOOL_DESCRIPTION',
  'CGB': 'WRITE_TOOL_DESCRIPTION',
  'NSB': 'getReadToolDescription',
  'QQ6': 'SDK_SYSTEM_PROMPT',
  'BQ6': 'AGENT_SYSTEM_PROMPT',
  'WY9': 'AGENT_BASE_PROMPT',
  '_nA': 'getSystemPrompt',
  'Hf1': 'systemPromptLoader',

  // ==================== 工具描述 ====================
  'x_2': 'NOTEBOOK_EDIT_DESCRIPTION',

  // ==================== 配置常量 ====================
  'zGB': 'MAX_INPUT_TOKENS',
  'UGB': 'TARGET_INPUT_TOKENS',
  'e06': 'READONLY_TOOLS',
  'AQ6': 'EDIT_TOOLS',
  'JQ6': 'DOCS_MAP_URL',
  'Uf1': 'CLAUDE_CODE_GUIDE_AGENT',
  'Uw6': 'SERVICE_NAME',
  'Yn0': 'SERVICE_VERSION',
  'L43': 'PRODUCTION',

  // ==================== Git 相关 ====================
  'ZQ': 'execGit',
  'Cf1': 'getMainBranch',
  'knA': 'getGitRemoteUrl',
  'IQ6': 'parseGitRemoteUrl',
  'YQ6': 'getCommitsBehind',
  'MGB': 'getRepoHash',
  'rM6': 'getGitConfig',
  'tM6': 'getGitCommitInstructions',

  // ==================== Bash 相关 ====================
  'M8': 'shellEscape',
  'IW': 'tokenize',
  'MSB': 'wrapBashCommand',
  'RSB': 'bashCommandHelpers',
  'OSB': 'shouldAddDevNull',
  'PSB': 'addDevNullToCommand',
  'TSB': 'extractTokensRange',
  'SQ': 'sandboxDebug',
  'oM6': 'getSandboxHint',
  'FO6': 'getShellSnapshotScript',
  'rd1': 'getShellRcFile',
  'AO6': 'hasInputRedirect',
  'BO6': 'isEnvAssignment',
  'GO6': 'isCommandSeparator',
  'QO6': 'findPipeIndex',
  'eM6': 'hasMultilineString',
  'id1': 'hasHeredoc',
  'nd1': 'isOperator',

  // ==================== API 相关 ====================
  'D_A': 'getModelProvider',
  'vF': 'API_ERROR',

  // ==================== 模块系统 ====================
  'L': 'lazyLoader',
  'U': 'moduleWrapper',
  'GA': 'esmImport',
  'UA': 'nodeRequire',
  'pG': 'esmExport',

  // ==================== 类 ====================
  'IE': 'EventSourceIterator',
  'Kt': 'MessageStream',
  'XGB': 'EventDecoder',
  'Me8': 'Socks5Connection',
  'x6B': 'Socks5Server',
  'XLA': 'ClientCertificateCredential',
  'fAA': 'WorkloadIdentityCredential',
  'go6': 'CredentialUnavailableError',

  // ==================== 枚举 ====================
  'Xb1': 'SocksStatus',
  'y6B': 'SocksCommand',

  // ==================== Lodash 函数 ====================
  'j7': 'isArray',
  'TY': 'isObject',
  'Tj': 'isArrayLike',
  'px': 'isArguments',
  'j9A': 'isPlainObject',
  'xu': 'isIndex',
  'aiA': 'hasUnicode',
  'dC': 'last',
  'SN': 'keys',
  'Pj': 'castPath',
  '_N': 'toKey',
  'uBA': 'toString',
  'gBA': 'arrayMap',
  'jBA': 'arrayPush',
  'hN': 'copyObject',
  'niA': 'baseSlice',
  'siA': 'baseEach',
  'jj': 'baseIteratee',
  'dBA': 'baseGet',
  'o5B': 'baseSet',
  'bBA': 'baseIsEqual',
  'd6B': 'baseIsNaN',
  'u6B': 'baseFindIndex',
  'i6B': 'baseIndexOf',
  'p6B': 'strictIndexOf',
  'a6B': 'arrayIncludes',
  'o6B': 'isFlattenable',
  'A5B': 'baseFlatten',
  'B5B': 'flatten',
  'EvA': 'baseClone',
  'LlA': 'baseForOwn',
  'HvA': 'getAllKeysIn',
  'nxA': 'overRest',
  'axA': 'setToString',
  'pzA': 'capitalize',
  'N5B': 'upperFirst',
  'w5B': 'createCaseFirst',
  'Y5B': 'castSlice',
  'W5B': 'asciiToArray',
  'E5B': 'unicodeToArray',
  'U5B': 'stringToArray',
  's5B': 'omit',
  '$m': 'assignValue',

  // ==================== Node.js 模块 ====================
  'DoA': 'osModule',
  'BwA': 'fsExistsSync',
  'IO6': 'fsMkdirSync',
  'YO6': 'fsRealpathSync',
  'ZO6': 'fsStatSync',
  'JO6': 'childProcessExecSync',
  'WO6': 'childProcessExecFile',
  'XO6': 'getRipgrepCommand',
  'C9A': 'getRipgrepConfig',
  'GQ6': 'cryptoCreateHash',

  // ==================== 网络相关 ====================
  'Ve8': 'httpCreateServer',
  'Ke8': 'httpRequest',
  'De8': 'httpsRequest',
  'He8': 'netConnect',
  'Ce8': 'URLClass',
  'Re8': 'createSocksServer',
  'P6B': 'createProxyServer',
  'Fb1': 'defaultConnectionHandler',

  // ==================== React 相关 ====================
  'rB': 'React',
  'gW': 'ReactAlias',
  'sF': 'createElement',
  'eY': 'PlanFileReference',

  // ==================== 全局/内置 ====================
  'HX': 'globalThis',
  'HV': 'Symbol',
  'Ks': 'Map',
  '_u': 'Array',
  'sd1': 'pathJoin',

  // ==================== 常量字符串 ====================
  'Mc': 'BASE64_CHARS_WITH_PAD',
  'aA': 'BASE64_CHARS',
  'Hk': 'CLIENT_ID_KEY',
  'Rl': 'NO_TOKENS_FOUND',
  'Dl': 'CLIENT_INFO_DECODING_ERROR',
  'eeB': 'COMMA',
  'd16': 'DATA_TYPE',
  'T90': 'IPV4',
  'Y81': 'ROUND_ROBIN',
  'g90': 'WEIGHTED_ROUND_ROBIN',
  'kOA': 'PICK_FIRST',
  'v90': 'OUTLIER_DETECTION',
  'h0': 'RENDER_ERROR',
  'g1Q': 'USER_AGENT',
  'hz9': 'BROWSER_EXTENSION_ID',
  'iR3': 'PLUGIN_TYPE',
  'c53': 'SENTRY_SOURCE',
  'bRB': 'SENTRY_DSN',
  'vt2': 'ANR_MONITOR',
  'gU2': 'ORCA_OOB_METRICS',
  'vU2': 'ORCA_LOAD_REPORT',
  'KvA': 'USER_INFERENCE_KEY',
  'RA1': 'SAML2_TOKEN_TYPE',
  'GA2': 'SYSTEM_ASSIGNED_MANAGED_IDENTITY',
  'ur6': 'STS_TOKEN_URL',
  'kRA': 'EXIT_PLAN_MODE_CONST',

  // ==================== 错误常量 ====================
  'NA6': 'EXPECTED_FUNCTION_ERROR',
  'SB5': 'EXPECTED_FUNCTION_ERROR2',
  'QAA': 'REDIRECT_URI_EMPTY_ERROR',
  'Z01': 'INVALID_FILE_EXTENSION_ERROR',
  'CeB': 'SERVICE_FABRIC_NOT_SUPPORTED',
  'fqA': 'UNEXPECTED_ERROR',
  'yqA': 'NO_CORRELATION_ID_ERROR',
  'ks1': 'CACHE_QUOTA_EXCEEDED_ERROR',
  'lX2': 'INVALID_ENCODING_ERROR',

  // ==================== 辅助函数 ====================
  'XT': 'noOpFunction',
  'B7A': 'noOpFunction2',
  'j6B': 'emptyFunction',
  'NGB': 'getEmptyString',
  'Q5': 'formatFilePath',
  '$GB': 'getContextEdits',
  'xz': 'nativeMethod',

  // ==================== 认证相关 ====================
  'tf': 'ManagedIdentityCredential_IMDS',
  'rQ2': 'ManagedIdentityCredential_TokenExchange',
  'QQQ': 'AWS_PROFILE',

  // ==================== 其他 ====================
  'tI': 'TODO_READ_TOOL',
};

// 需要精确匹配的变量（避免替换子字符串）
function createSafeRegex(varName) {
  // 匹配：变量声明、使用、属性访问等场景
  // 不匹配：作为其他变量名的一部分
  return new RegExp(
    `(?<![a-zA-Z0-9_$])${escapeRegex(varName)}(?![a-zA-Z0-9_$])`,
    'g'
  );
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// 按变量名长度降序排序（先替换长的，避免短变量名误替换）
const sortedMappings = Object.entries(VARIABLE_MAPPINGS)
  .sort((a, b) => b[0].length - a[0].length);

function renameVariables(code) {
  let result = code;
  let replacementCount = 0;

  for (const [obfuscated, readable] of sortedMappings) {
    const regex = createSafeRegex(obfuscated);
    const matches = result.match(regex);
    if (matches) {
      replacementCount += matches.length;
      result = result.replace(regex, readable);
    }
  }

  console.log(`Total replacements: ${replacementCount}`);
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

  console.log(`Writing: ${outputFile}`);
  fs.writeFileSync(outputFile, renamed);

  console.log('Done!');
}

main();

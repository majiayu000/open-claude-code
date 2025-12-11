#!/usr/bin/env node
/**
 * 增强原始库脚本
 *
 * 功能：
 * 1. 将变量名注释转换为实际的变量替换
 * 2. 保留原有的模块化结构
 * 3. 生成完整可读的代码
 */

const fs = require('fs');
const path = require('path');

// 完整的变量映射表 (从 VARIABLE_MAPPING.md 和 v2.0.62 分析中合并)
const VARIABLE_MAPPINGS = {
  // ==================== 工具名常量 ====================
  // v2.0.57 mappings
  'D9': 'BASH_TOOL_NAME',
  'CD': 'GLOB_TOOL_NAME',
  'uY': 'GREP_TOOL_NAME',
  'g5': 'READ_TOOL_NAME',
  'R5': 'EDIT_TOOL_NAME',
  'bX': 'WRITE_TOOL_NAME',
  'vX': 'WEB_FETCH_TOOL_NAME',
  'O_': 'WEB_SEARCH_TOOL_NAME',
  'M_': 'NOTEBOOK_EDIT_TOOL_NAME',
  'Pq': 'SKILL_TOOL_NAME',
  'gGB': 'TODO_WRITE_TOOL_NAME',
  'yP': 'SLASH_COMMAND_TOOL_NAME',
  'b31': 'ENTER_PLAN_MODE_TOOL_NAME',
  'a61': 'EXIT_PLAN_MODE_TOOL_NAME',
  's8': 'TASK_TOOL_NAME',
  'dJ': 'ASK_USER_QUESTION_TOOL_NAME',
  'pI1': 'KILL_SHELL_TOOL_NAME',
  'en': 'AGENT_OUTPUT_TOOL_NAME',

  // v2.0.62 mappings (some variables renamed)
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
  'Yc': 'SLASH_COMMAND_TOOL_NAME',

  // ==================== 模型常量 ====================
  'Fq': 'MODEL_SONNET',
  'Hq': 'MODEL_HAIKU',
  'gq': 'MODEL_OPUS',
  'S3': 'getDefaultSonnetModel',

  // ==================== 配置常量 ====================
  'zGB': 'MAX_INPUT_TOKENS',
  'CBB': 'MAX_INPUT_TOKENS',
  'UGB': 'TARGET_INPUT_TOKENS',
  'UBB': 'TARGET_INPUT_TOKENS',
  'KoA': 'getMaxTimeout',
  'NKQ': 'MAX_TIMEOUT_MS',
  'LGA': 'getDefaultTimeout',
  'Ke': 'getMaxOutputLength',
  'LHQ': 'MAX_OUTPUT_LENGTH',

  // ==================== 工具列表 ====================
  'e06': 'READONLY_TOOLS',
  'tv6': 'READONLY_TOOLS',
  'AQ6': 'EDIT_TOOLS',
  'ev6': 'EDIT_TOOLS',

  // ==================== 系统提示相关 ====================
  'qGB': 'SYSTEM_PROMPT_BASE',
  'BQ6': 'AGENT_SYSTEM_PROMPT',
  'QQ6': 'SDK_SYSTEM_PROMPT',
  'WY9': 'AGENT_BASE_PROMPT',
  'ek1': 'getSystemPromptHeader',
  '_nA': 'getSystemPrompt',
  'Hf1': 'systemPromptLoader',

  // ==================== 工具描述函数 ====================
  'LSB': 'getBashToolDescription',
  'NSB': 'getReadToolDescription',
  'CGB': 'WRITE_TOOL_DESCRIPTION',
  'KBB': 'WRITE_TOOL_DESCRIPTION',
  'Kf1': 'GLOB_TOOL_DESCRIPTION',
  'eD0': 'GLOB_TOOL_DESCRIPTION',
  'Df1': 'getGrepDescription',
  'AC0': 'getGrepToolDescription',
  'EGB': 'getWebSearchDescription',
  'VBB': 'MULTI_EDIT_TOOL_DESCRIPTION',
  'qBB': 'TODO_WRITE_TOOL_DESCRIPTION',
  'x_2': 'NOTEBOOK_EDIT_DESCRIPTION',

  // ==================== 代理类型 ====================
  'Uf1': 'CLAUDE_CODE_GUIDE_AGENT',

  // ==================== 文档 URL ====================
  'JQ6': 'DOCS_MAP_URL',

  // ==================== 服务信息 ====================
  'Uw6': 'SERVICE_NAME',
  'Yn0': 'SERVICE_VERSION',
  'L43': 'PRODUCTION',

  // ==================== Git 相关 ====================
  'Cf1': 'getMainBranch',
  'IQ6': 'parseGitRemoteUrl',
  'YQ6': 'getCommitsBehind',
  'ZQ': 'execGit',
  'knA': 'getGitRemoteUrl',
  'MGB': 'getRepoHash',
  'rM6': 'getGitConfig',
  'tM6': 'getGitCommitInstructions',

  // ==================== API 相关 ====================
  'J6': 'getProvider',
  'TR': 'getProviderIdentifier',
  'D_A': 'getModelProvider',
  'LW': 'getSmallFastModel',
  'o9': 'getConfig',

  // ==================== 功能开关 ====================
  'ZI': 'getFeatureFlag',
  'RJ': 'isClaudeCodeRemote',

  // ==================== 基础工具函数 ====================
  'UA': 'nodeRequire',
  'GA': 'esmImport',
  'pG': 'esmExport',
  'U': 'moduleWrapper',
  'L': 'lazyLoader',

  // ==================== 日期和时间 ====================
  'SnA': 'getTodayDate',

  // ==================== React 相关 ====================
  'rB': 'React',
  'gW': 'ReactModule',
  'sF': 'createElement',

  // ==================== Lodash 相关 ====================
  'SN': 'keys',
  'dC': 'last',
  'j7': 'isArray',
  'TY': 'isObject',
  'Tj': 'isArrayLike',
  'j9A': 'isPlainObject',
  'px': 'isArguments',
  'xu': 'isIndex',
  'A5B': 'baseFlatten',
  'B5B': 'flatten',
  'E5B': 'unicodeToArray',
  'N5B': 'upperFirst',
  'U5B': 'stringToArray',
  'W5B': 'asciiToArray',
  'Y5B': 'castSlice',
  's5B': 'omit',
  'w5B': 'createCaseFirst',
  'o5B': 'baseSet',
  'Pj': 'castPath',
  '_N': 'toKey',
  'hN': 'copyObject',
  'jj': 'baseIteratee',
  'EvA': 'baseClone',
  'HvA': 'getAllKeysIn',
  'LlA': 'baseForOwn',
  'bBA': 'baseIsEqual',
  'dBA': 'baseGet',
  'gBA': 'arrayMap',
  'jBA': 'arrayPush',
  'uBA': 'toString',
  'niA': 'baseSlice',
  'siA': 'baseEach',
  'aiA': 'hasUnicode',
  'pzA': 'capitalize',
  'nxA': 'overRest',
  'axA': 'setToString',
  'a6B': 'arrayIncludes',
  'd6B': 'baseIsNaN',
  'i6B': 'baseIndexOf',
  'j6B': 'emptyFunction',
  'o6B': 'isFlattenable',
  'p6B': 'strictIndexOf',
  'u6B': 'baseFindIndex',
  '$m': 'assignValue',

  // ==================== Shell/Bash 相关 ====================
  'M8': 'shellEscape',
  'MSB': 'wrapBashCommand',
  'OSB': 'shouldAddDevNull',
  'PSB': 'addDevNullToCommand',
  'RSB': 'bashCommandHelpers',
  'TSB': 'extractTokensRange',
  'AO6': 'hasInputRedirect',
  'BO6': 'isEnvAssignment',
  'FO6': 'getShellSnapshotScript',
  'GO6': 'isCommandSeparator',
  'QO6': 'findPipeIndex',
  'XO6': 'getRipgrepCommand',
  'C9A': 'getRipgrepConfig',
  'eM6': 'hasMultilineString',
  'id1': 'hasHeredoc',
  'nd1': 'isOperator',
  'rd1': 'getShellRcFile',
  'IW': 'tokenize',
  'oM6': 'getSandboxHint',
  'SQ': 'sandboxDebug',

  // ==================== 文件系统 ====================
  'BwA': 'fsExistsSync',
  'IO6': 'fsMkdirSync',
  'YO6': 'fsRealpathSync',
  'ZO6': 'fsStatSync',
  'JO6': 'execSync',
  'WO6': 'execFile',
  'sd1': 'pathJoin',
  'Q5': 'formatFilePath',

  // ==================== 网络相关 ====================
  'Ce8': 'URLClass',
  'De8': 'httpsRequest',
  'He8': 'netConnect',
  'Ke8': 'httpRequest',
  'Me8': 'Socks5Connection',
  'Re8': 'createSocksServer',
  'Ve8': 'httpCreateServer',
  'P6B': 'createProxyServer',
  'x6B': 'Socks5Server',
  'y6B': 'SocksCommand',
  'Xb1': 'SocksStatus',

  // ==================== 流处理 ====================
  'Kt': 'MessageStream',
  'IE': 'EventSourceIterator',
  'XGB': 'EventDecoder',

  // ==================== 身份验证 ====================
  'XLA': 'ClientCertificateCredential',
  'fAA': 'WorkloadIdentityCredential',
  'go6': 'CredentialUnavailableError',
  'tf': 'ManagedIdentityCredential_IMDS',
  'rQ2': 'ManagedIdentityCredential_TokenExchange',
  'GA2': 'SYSTEM_ASSIGNED_MANAGED_IDENTITY',

  // ==================== 常量值 ====================
  'HV': 'Symbol',
  'HX': 'globalThis',
  '_u': 'Array',
  'Ks': 'Map',
  'XT': 'noOpFunction',
  'B7A': 'noOpFunction2',
  'Fb1': 'defaultConnectionHandler',
  'V0': 'parseBoolean',

  // ==================== 错误和消息 ====================
  'vF': 'API_ERROR',
  'h0': 'RENDER_ERROR',
  'Dl': 'CLIENT_INFO_DECODING_ERROR',
  'Rl': 'NO_TOKENS_FOUND',
  'NA6': 'EXPECTED_FUNCTION_ERROR',
  'SB5': 'EXPECTED_FUNCTION_ERROR2',
  'CeB': 'SERVICE_FABRIC_NOT_SUPPORTED',
  'QAA': 'REDIRECT_URI_EMPTY',
  'Z01': 'INVALID_FILE_EXTENSION',
  'fqA': 'UNEXPECTED_ERROR',
  'yqA': 'NO_CORRELATION_ID',
  'ks1': 'CACHE_QUOTA_EXCEEDED',
  'lX2': 'INVALID_ENCODING',

  // ==================== 键名常量 ====================
  'Hk': 'CLIENT_ID_KEY',
  'KvA': 'USER_INFERENCE_KEY',
  'g1Q': 'USER_AGENT',
  'QQQ': 'AWS_PROFILE',
  'RA1': 'SAML2_TOKEN_TYPE',
  'ur6': 'STS_TOKEN_URL',

  // ==================== 配置/枚举值 ====================
  'd16': 'DATA_TYPE',
  'T90': 'IPV4',
  'Y81': 'ROUND_ROBIN',
  'g90': 'WEIGHTED_ROUND_ROBIN',
  'kOA': 'PICK_FIRST',
  'v90': 'OUTLIER_DETECTION',
  'iR3': 'PLUGIN_TYPE',
  'gU2': 'ORCA_OOB_METRICS',
  'vU2': 'ORCA_LOAD_REPORT',
  'vt2': 'ANR_MONITOR',

  // ==================== Sentry/遥测 ====================
  'bRB': 'SENTRY_DSN',
  'c53': 'SENTRY_SOURCE',

  // ==================== 其他常量 ====================
  'Mc': 'BASE64_CHARS_WITH_PAD',
  'aA': 'BASE64_CHARS',
  'eeB': 'COMMA',
  'hz9': 'BROWSER_EXTENSION_ID',
  'kRA': 'EXIT_PLAN_MODE_CONST',
  'NGB': 'getEmptyString',

  // ==================== UI 组件 ====================
  '$': 'TextComponent',
  'eY': 'PlanFileReference',
  'tI': 'TODO_READ_TOOL',
};

/**
 * 对变量名进行安全替换
 * 确保只替换独立的标识符，不替换字符串内部或属性访问
 */
function safeReplace(content, varName, replacement) {
  // 匹配独立的标识符（不是对象属性、不在字符串中）
  const pattern = new RegExp(
    `(?<![\\w$])${escapeRegex(varName)}(?![\\w$])`,
    'g'
  );
  return content.replace(pattern, replacement);
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 处理单个文件
 */
function processFile(filePath, outputPath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let replacementCount = 0;

  // 移除旧的变量索引注释块（保留文件头信息）
  content = content.replace(
    /\* ===================== 变量索引 =====================[\s\S]*?\* ======================================================/,
    '* ===================== 变量已替换 ====================='
  );

  // 按变量名长度降序排序，优先替换长变量名
  const sortedVars = Object.entries(VARIABLE_MAPPINGS)
    .sort((a, b) => b[0].length - a[0].length);

  for (const [varName, replacement] of sortedVars) {
    const before = content;
    content = safeReplace(content, varName, replacement);
    if (content !== before) {
      const count = (before.match(new RegExp(`(?<![\\w$])${escapeRegex(varName)}(?![\\w$])`, 'g')) || []).length;
      replacementCount += count;
    }
  }

  // 确保输出目录存在
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, content, 'utf-8');
  return replacementCount;
}

/**
 * 递归处理目录
 */
function processDirectory(inputDir, outputDir) {
  const stats = {
    filesProcessed: 0,
    totalReplacements: 0,
    fileDetails: []
  };

  function walk(dir, outDir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const inputPath = path.join(dir, item);
      const outputPath = path.join(outDir, item);
      const stat = fs.statSync(inputPath);

      if (stat.isDirectory()) {
        walk(inputPath, outputPath);
      } else if (item.endsWith('.js')) {
        const replacements = processFile(inputPath, outputPath);
        stats.filesProcessed++;
        stats.totalReplacements += replacements;
        if (replacements > 0) {
          stats.fileDetails.push({
            file: path.relative(inputDir, inputPath),
            replacements
          });
        }
      } else if (item.endsWith('.md')) {
        // 复制 Markdown 文件
        const content = fs.readFileSync(inputPath, 'utf-8');
        if (!fs.existsSync(outDir)) {
          fs.mkdirSync(outDir, { recursive: true });
        }
        fs.writeFileSync(outputPath, content, 'utf-8');
      }
    }
  }

  walk(inputDir, outputDir);
  return stats;
}

// 主程序
const inputDir = path.resolve(__dirname, '../decompiled/final');
const outputDir = path.resolve(__dirname, '../decompiled/readable');

console.log('='.repeat(60));
console.log('  Claude Code 库增强脚本');
console.log('='.repeat(60));
console.log(`\n输入目录: ${inputDir}`);
console.log(`输出目录: ${outputDir}\n`);

// 检查输入目录
if (!fs.existsSync(inputDir)) {
  console.error('错误: 输入目录不存在');
  process.exit(1);
}

// 创建输出目录
if (fs.existsSync(outputDir)) {
  console.log('清理旧的输出目录...');
  fs.rmSync(outputDir, { recursive: true });
}
fs.mkdirSync(outputDir, { recursive: true });

console.log(`变量映射数量: ${Object.keys(VARIABLE_MAPPINGS).length}`);
console.log('\n开始处理...\n');

const stats = processDirectory(inputDir, outputDir);

console.log('='.repeat(60));
console.log('  处理完成');
console.log('='.repeat(60));
console.log(`\n处理文件数: ${stats.filesProcessed}`);
console.log(`总替换次数: ${stats.totalReplacements}`);
console.log(`\n替换详情 (前20个文件):`);

stats.fileDetails
  .sort((a, b) => b.replacements - a.replacements)
  .slice(0, 20)
  .forEach(({ file, replacements }) => {
    console.log(`  ${file}: ${replacements} 处`);
  });

console.log(`\n输出目录: ${outputDir}`);

# Claude Code 完整变量名映射表

本文档包含从反编译代码中识别出的所有变量名映射。

## 工具名常量

| 混淆名 | 原始含义 | 值 |
|--------|----------|-----|
| D9 | BASH_TOOL | "Bash" |
| CD | GLOB_TOOL | "Glob" |
| uY | GREP_TOOL | "Grep" |
| g5 | READ_TOOL | "Read" |
| R5 | EDIT_TOOL | "Edit" |
| bX | WRITE_TOOL | "Write" |
| vX | WEB_FETCH_TOOL | "WebFetch" |
| O_ | WEB_SEARCH_TOOL | "WebSearch" |
| M_ | NOTEBOOK_EDIT_TOOL | "NotebookEdit" |
| Pq | SKILL_TOOL | "Skill" |
| gGB | TODO_WRITE_TOOL | "TodoWrite" |
| yP | SLASH_COMMAND_TOOL | "SlashCommand" |
| b31 | ENTER_PLAN_MODE_TOOL | "EnterPlanMode" |
| a61 | EXIT_PLAN_MODE | "ExitPlanMode" |
| s8 | TASK_TOOL | "Task" |
| dJ | ASK_USER_QUESTION_TOOL | "AskUserQuestion" |
| pI1 | KILL_SHELL_TOOL | "KillShell" |
| en | AGENT_OUTPUT_TOOL | "AgentOutputTool" |

## 完整变量列表 (按字母排序)

- `$` = Text component
- `$GB` = getContextEdits(options) - Get context edit configuration
- `$m` = assignValue()
- `A5B` = baseFlatten()
- `AO6` = hasInputRedirect(cmd) - Check redirect
- `AQ6` = EDIT_TOOLS = [Edit, Write, NotebookEdit]
- `B5B` = flatten()
- `B7A` = noOpFunction2() - Empty function
- `BO6` = isEnvAssignment(token) - Check env assign
- `BQ6` = AGENT_SYSTEM_PROMPT = "You are a Claude agent..."
- `BwA` = fs.existsSync
- `C9A` = getRipgrepConfig() - Get rg config
- `CD` = GLOB_TOOL = "Glob"
- `CGB` = WRITE_TOOL_DESCRIPTION - Write tool help text
- `Ce8` = URL class
- `CeB` = SERVICE_FABRIC_NOT_SUPPORTED message
- `Cf1` = getMainBranch() - Get main branch name
- `D9` = BASH_TOOL = "Bash"
- `D_A` = getModelProvider(model) - Get provider
- `De8` = https.request
- `Df1` = getGrepDescription() - Returns Grep tool description
- `Dl` = CLIENT_INFO_DECODING_ERROR
- `DoA` = os module
- `E5B` = unicodeToArray()
- `EGB` = getWebSearchDescription() - Returns WebSearch description
- `EvA` = baseClone()
- `FO6` = getShellSnapshotScript()
- `Fb1` = defaultConnectionHandler()
- `Fq` = MODEL_SONNET = "claude-sonnet-4-5"
- `GA` = esmImport(module) - ESM import
- `GA2` = SYSTEM_ASSIGNED_MANAGED_IDENTITY type
- `GO6` = isCommandSeparator(op) - Check separator
- `GQ6` = crypto.createHash
- `HV` = Symbol
- `HX` = globalThis
- `He8` = net.connect
- `Hf1` = systemPromptLoader - Lazy loader for prompts
- `Hk` = CLIENT_ID_KEY = "client_id"
- `Hq` = MODEL_HAIKU = "claude-haiku-4"
- `HvA` = getAllKeysIn()
- `IE` = EventSourceIterator class
- `IO6` = fs.mkdirSync
- `IQ6` = parseGitRemoteUrl(url) - Parse git remote URL
- `IW` = tokenize(cmd) - Tokenize command
- `J6` = getProvider() - Returns current provider ("vertex", "anthropic", etc)
- `JO6` = child_process.execSync
- `JQ6` = DOCS_MAP_URL = "https://code.claude.com/docs/..."
- `Ke` = getMaxOutputLength() - Returns 30000 characters
- `Ke8` = http.request
- `Kf1` = GLOB_TOOL_DESCRIPTION - Glob tool help text
- `KoA` = getMaxTimeout() - Returns 600000ms (10 minutes)
- `Ks` = Map
- `Kt` = MessageStream class
- `KvA` = USER_INFERENCE_KEY = "user:inference"
- `L` = lazyLoader(fn) - Lazy load
- `L43` = PRODUCTION = "production"
- `LGA` = getDefaultTimeout() - Returns 120000ms (2 minutes)
- `LSB` = getBashToolDescription() - Bash tool description
- `LW` = getSmallFastModel() - Returns haiku model
- `LlA` = baseForOwn()
- `M8` = shellEscape(args) - Escape shell args
- `MGB` = getRepoHash() - Get repository hash
- `MSB` = wrapBashCommand(cmd) - Wrap command
- `M_` = NOTEBOOK_EDIT_TOOL = "NotebookEdit"
- `Mc` = BASE64_CHARS_WITH_PAD = "ABCDEF...+/="
- `Me8` = Socks5Connection class
- `N5B` = upperFirst()
- `NA6` = EXPECTED_FUNCTION_ERROR = "Expected a function"
- `NGB` = getEmptyString() - Returns empty string
- `NSB` = getReadToolDescription() - Read tool description
- `OSB` = shouldAddDevNull(cmd) - Check /dev/null need
- `O_` = WEB_SEARCH_TOOL = "WebSearch"
- `P6B` = createProxyServer(config) - Create HTTP/HTTPS proxy
- `PSB` = addDevNullToCommand(cmd) - Add /dev/null
- `Pj` = castPath()
- `Pq` = SKILL_TOOL = "Skill"
- `Q5` = formatFilePath(path)
- `QAA` = REDIRECT_URI_EMPTY error
- `QO6` = findPipeIndex(tokens) - Find pipe
- `QQ6` = SDK_SYSTEM_PROMPT = "You are Claude Code...running within Agent SDK"
- `QQQ` = AWS_PROFILE env key
- `R5` = EDIT_TOOL = "Edit"
- `RA1` = SAML2_TOKEN_TYPE = "urn:ietf:params:oauth:token-type:saml2"
- `RJ` = isClaudeCodeRemote() - Check remote
- `RSB` = bashCommandHelpers loader
- `Re8` = createSocksServer()
- `Rl` = NO_TOKENS_FOUND = "no_tokens_found"
- `S3` = getDefaultSonnetModel() - Returns "claude-sonnet-4-5-..."
- `SB5` = EXPECTED_FUNCTION_ERROR2
- `SN` = keys()
- `SQ` = sandboxDebug(msg, opts) - Sandbox debug logging
- `SnA` = getTodayDate() - Returns "YYYY-MM-DD"
- `T90` = IPV4 = "ipv4"
- `TR` = getProviderIdentifier() - Returns API provider ID
- `TSB` = extractTokensRange() - Extract tokens
- `TY` = isObject()
- `Tj` = isArrayLike()
- `U` = moduleWrapper(exports, module) - CJS wrapper
- `U5B` = stringToArray()
- `UA` = require(name) - Node require
- `UGB` = TARGET_INPUT_TOKENS = 40000
- `Uf1` = CLAUDE_CODE_GUIDE_AGENT = "claude-code-guide"
- `Uw6` = SERVICE_NAME = "claude-code"
- `V0` = parseBoolean(value) - Parse bool env
- `Ve8` = http.createServer
- `W5B` = asciiToArray()
- `WO6` = child_process.execFile
- `WY9` = AGENT_BASE_PROMPT = "You are an agent for Claude Code..."
- `XGB` = EventDecoder class
- `XLA` = ClientCertificateCredential class
- `XO6` = getRipgrepCommand() - Get rg command
- `XT` = noOpFunction() - Empty function
- `Xb1` = SocksStatus enum
- `Y5B` = castSlice()
- `Y81` = ROUND_ROBIN = "round_robin"
- `YO6` = fs.realpathSync
- `YQ6` = getCommitsBehind() - Get commits behind main branch
- `Yn0` = SERVICE_VERSION = "claude-code-20250219"
- `Z01` = INVALID_FILE_EXTENSION error
- `ZI` = getFeatureFlag(name, scope, default)
- `ZO6` = fs.statSync
- `ZQ` = execGit(cmd, args) - Execute git command
- `_N` = toKey()
- `_nA` = getSystemPrompt(options) - Get appropriate system prompt
- `_u` = Array
- `a61` = EXIT_PLAN_MODE = "ExitPlanMode"
- `a6B` = arrayIncludes()
- `aA` = BASE64_CHARS = "ABCDEF...+/"
- `aiA` = hasUnicode()
- `axA` = setToString()
- `b31` = ENTER_PLAN_MODE_TOOL = "EnterPlanMode"
- `bBA` = baseIsEqual()
- `bRB` = SENTRY_DSN = "https://...@sentry.io/..."
- `bX` = WRITE_TOOL = "Write"
- `c53` = SENTRY_SOURCE = "sentry.source"
- `d16` = DATA_TYPE = "data"
- `d6B` = baseIsNaN()
- `dBA` = baseGet()
- `dC` = last()
- `dJ` = ASK_USER_QUESTION_TOOL = "AskUserQuestion"
- `e06` = READONLY_TOOLS = [Bash, Glob, Grep, Read, WebFetch, WebSearch]
- `eM6` = hasMultilineString(cmd) - Check multiline
- `eY` = PlanFileReference component
- `eeB` = COMMA = ","
- `en` = AGENT_OUTPUT_TOOL = "AgentOutputTool"
- `fAA` = WorkloadIdentityCredential class
- `fqA` = UNEXPECTED_ERROR type
- `g1Q` = USER_AGENT = "user-agent"
- `g5` = READ_TOOL = "Read"
- `g90` = WEIGHTED_ROUND_ROBIN = "weighted_round_robin"
- `gBA` = arrayMap()
- `gGB` = TODO_WRITE_TOOL = "TodoWrite"
- `gU2` = ORCA_OOB_METRICS = "orca_oob_metrics"
- `gW` = React module alias
- `go6` = CredentialUnavailableError class
- `gq` = MODEL_OPUS = "claude-opus-4-5"
- `h0` = RENDER_ERROR = "Error rendering..."
- `hN` = copyObject()
- `hz9` = BROWSER_EXTENSION_ID = "com.anthropic.claude_code_browser_extension"
- `i6B` = baseIndexOf()
- `iR3` = PLUGIN_TYPE = "plugin"
- `id1` = hasHeredoc(cmd) - Check heredoc
- `j6B` = emptyFunction() - No-op function
- `j7` = isArray()
- `j9A` = isPlainObject()
- `jBA` = arrayPush()
- `jj` = baseIteratee()
- `kOA` = PICK_FIRST = "pick_first"
- `kRA` = EXIT_PLAN_MODE_CONST = "ExitPlanMode"
- `knA` = getGitRemoteUrl() - Get git remote URL
- `ks1` = CACHE_QUOTA_EXCEEDED error
- `lX2` = INVALID_ENCODING = "invalid encoding"
- `nd1` = isOperator(token, op) - Check operator
- `niA` = baseSlice()
- `nxA` = overRest()
- `o5B` = baseSet()
- `o6B` = isFlattenable()
- `o9` = getConfig() - Returns config with BASE_API_URL, OAuth endpoints
- `oM6` = getSandboxHint() - Returns sandbox usage hint
- `p6B` = strictIndexOf()
- `pG` = esmExport(obj, key) - ESM export
- `pI1` = KILL_SHELL_TOOL = "KillShell"
- `px` = isArguments()
- `pzA` = capitalize()
- `qGB` = SYSTEM_PROMPT = "You are Claude Code, Anthropic's official CLI..."
- `rB` = React module
- `rM6` = getGitConfig() - Git commit/pr config object
- `rQ2` = ManagedIdentityCredential_TokenExchange
- `rd1` = getShellRcFile() - Get .bashrc/.zshrc
- `s5B` = omit()
- `s8` = TASK_TOOL = "Task"
- `sF` = React.createElement
- `sd1` = path.join
- `siA` = baseEach()
- `tI` = TODO_READ_TOOL object
- `tM6` = getGitCommitInstructions() - Git commit instructions
- `tf` = ManagedIdentityCredential_IMDS
- `u6B` = baseFindIndex()
- `uBA` = toString()
- `uY` = GREP_TOOL = "Grep"
- `ur6` = STS_TOKEN_URL template
- `v90` = OUTLIER_DETECTION = "outlier_detection"
- `vF` = API_ERROR = "API Error"
- `vU2` = ORCA_LOAD_REPORT = "grpc_orca_load_report"
- `vX` = WEB_FETCH_TOOL = "WebFetch"
- `vt2` = ANR_MONITOR = "Anr"
- `w5B` = createCaseFirst()
- `x6B` = Socks5Server class
- `x_2` = NOTEBOOK_EDIT_DESCRIPTION
- `xu` = isIndex()
- `xz` = nativeMethod(obj, name)
- `y6B` = SocksCommand enum
- `yP` = SLASH_COMMAND_TOOL = "SlashCommand"
- `yqA` = NO_CORRELATION_ID error
- `zGB` = MAX_INPUT_TOKENS = 180000

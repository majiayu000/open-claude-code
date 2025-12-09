# Claude Code 完整变量名映射表

本文档包含从混淆代码中识别出的所有变量名映射。

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
| s8 | TASK_TOOL | "Task" |
| dJ | ASK_USER_QUESTION_TOOL | "AskUserQuestion" |
| pI1 | KILL_SHELL_TOOL | "KillShell" |
| en | AGENT_OUTPUT_TOOL | "AgentOutputTool" |

## 配置函数

| 混淆名 | 原始含义 | 签名 |
|--------|----------|------|
| o9 | getConfig() - Returns config with BASE_API_URL, OAuth endpoints | () => ConfigObject |
| S3 | getDefaultSonnetModel() - Returns main Claude model name | () => string // e.g., "claude-sonnet-4-5-20250929" |
| LW | getSmallFastModel() - Returns lightweight/haiku model | () => string // e.g., "claude-haiku-4" |
| TR | getProviderIdentifier() - Returns API provider ID | () => string // provider identifier |
| KoA | getMaxTimeout() - Returns 600000ms (10 minutes) | - |
| LGA | getDefaultTimeout() - Returns 120000ms (2 minutes) | - |
| Ke | getMaxOutputLength() - Returns 30000 characters | - |

## 系统提示函数

| 混淆名 | 原始含义 |
|--------|----------|
| LSB | getBashToolDescription() - Bash tool description |
| NSB | getReadToolDescription() - Read tool description |
| OSB | shouldAddDevNull() - Check if need /dev/null redirect |
| MSB | wrapBashCommand() - Wrap bash command with escaping |
| PSB | addDevNullToCommand() - Add /dev/null redirect |
| TSB | extractTokensRange() - Extract tokens from range |
| RSB | bashCommandHelpers module loader |
| qGB | SYSTEM_PROMPT_BASE = "You are Claude Code..." |
| WY9 | AGENT_SYSTEM_PROMPT = "You are an agent..." |

## Bash命令处理

| 混淆名 | 原始含义 | 签名 |
|--------|----------|------|
| id1 | hasHeredoc(cmd) - Check if command has heredoc | (command: string) => boolean |
| eM6 | hasMultilineString(cmd) - Check for multiline strings | (command: string) => boolean |
| AO6 | hasInputRedirect(cmd) - Check for input redirect | (command: string) => boolean |
| M8 | shellEscape(args) - Shell escape utility | (args: string[]) => string |
| IW | tokenize(cmd) - Tokenize bash command | (command: string) => {success: boolean, tokens: Token[]} |
| nd1 | isOperator(token, op) - Check if token is operator | (token: any, op?: string) => boolean |
| BO6 | isEnvAssignment(token) - Check env assignment pattern | - |
| GO6 | isCommandSeparator(op) - Check command separator (&&, ||, ;) | - |
| QO6 | findPipeIndex(tokens) - Find first pipe in tokens | - |

## 模块加载器模式

| 模式 | 含义 | 用法 |
|------|------|------|
| L(() => {...}) | 懒加载模块 | 按需加载模块 |
| U((exports, module) => {...}) | CommonJS包装器 | 模块定义 |
| GA(module) | ESM导入 | import helper |
| pG(obj, key) | ESM导出绑定 | export binding |
| UA(name) | require() | Node.js require |

## 完整变量列表

- `$m` = assignValue() - Assign value to object
- `A5B` = baseFlatten() - Flatten array
- `AO6` = hasInputRedirect(cmd) - Check for input redirect
- `B5B` = flatten() - Flatten one level
- `BO6` = isEnvAssignment(token) - Check env assignment pattern
- `BwA` = fs.existsSync
- `C9A` = getRipgrepConfig() - Get ripgrep path and args
- `CD` = GLOB_TOOL = "Glob"
- `Ce8` = URL class
- `D9` = BASH_TOOL = "Bash"
- `D_A` = getModelProvider(model) - Get provider for model
- `De8` = https.request
- `DoA` = os module
- `E5B` = unicodeToArray() - Unicode to array
- `EvA` = baseClone() - Base clone
- `FO6` = getShellSnapshotScript() - Get shell env snapshot
- `Fb1` = defaultConnectionHandler() - Default SOCKS handler
- `Fq` = MODEL_SONNET = "claude-sonnet-4-5"
- `GA` = esmImport(module) - ESM import helper
- `GO6` = isCommandSeparator(op) - Check command separator (&&, ||, ;)
- `HV` = Symbol - Symbol reference
- `HX` = globalThis - Global object reference
- `He8` = net.connect
- `Hq` = MODEL_HAIKU = "claude-haiku-4"
- `HvA` = getAllKeysIn() - Get all keys including inherited
- `IE` = EventSourceIterator class - SSE event processing
- `IO6` = fs.mkdirSync
- `IW` = tokenize(cmd) - Tokenize bash command
- `JO6` = child_process.execSync
- `Ke` = getMaxOutputLength() - Returns 30000 characters
- `Ke8` = http.request
- `KoA` = getMaxTimeout() - Returns 600000ms (10 minutes)
- `Ks` = Map - Map constructor
- `Kt` = MessageStream class - Streaming message handling
- `L` = lazyLoader(fn) - Lazy module loader pattern
- `LGA` = getDefaultTimeout() - Returns 120000ms (2 minutes)
- `LSB` = getBashToolDescription() - Bash tool description
- `LW` = getSmallFastModel() - Returns lightweight/haiku model
- `LlA` = baseForOwn() - Base for own properties
- `M8` = shellEscape(args) - Shell escape utility
- `MSB` = wrapBashCommand() - Wrap bash command with escaping
- `M_` = NOTEBOOK_EDIT_TOOL = "NotebookEdit"
- `Me8` = Socks5Connection class
- `N5B` = upperFirst() - Uppercase first char
- `NSB` = getReadToolDescription() - Read tool description
- `OSB` = shouldAddDevNull() - Check if need /dev/null redirect
- `O_` = WEB_SEARCH_TOOL = "WebSearch"
- `P6B` = createProxyServer(config) - Create HTTP/HTTPS proxy
- `PSB` = addDevNullToCommand() - Add /dev/null redirect
- `Pj` = castPath() - Cast to path array
- `Pq` = SKILL_TOOL = "Skill"
- `QO6` = findPipeIndex(tokens) - Find first pipe in tokens
- `R5` = EDIT_TOOL = "Edit"
- `RJ` = isClaudeCodeRemote() - Check if remote execution
- `RSB` = bashCommandHelpers module loader
- `Re8` = createSocksServer() - Create SOCKS5 server
- `Rl` = NO_TOKENS_FOUND = "no_tokens_found"
- `S3` = getDefaultSonnetModel() - Returns main Claude model name
- `SN` = keys() - Get object keys
- `SQ` = sandboxDebug(msg, opts) - Sandbox debug logging
- `TR` = getProviderIdentifier() - Returns API provider ID
- `TSB` = extractTokensRange() - Extract tokens from range
- `TY` = isObject() - Check if object
- `Tj` = isArrayLike() - Check array-like
- `U` = moduleWrapper(exports, module) - CommonJS wrapper
- `U5B` = stringToArray() - String to array
- `UA` = require(moduleName) - Node.js require
- `Ve8` = http.createServer
- `W5B` = asciiToArray() - ASCII to array
- `WO6` = child_process.execFile
- `WY9` = AGENT_SYSTEM_PROMPT = "You are an agent..."
- `XGB` = EventDecoder class - Event decoding
- `XO6` = getRipgrepCommand() - Get rg command with args
- `Xb1` = SocksStatus enum (REQUEST_GRANTED, GENERAL_FAILURE, etc)
- `Y5B` = castSlice() - Cast to slice
- `YO6` = fs.realpathSync
- `Yn0` = SERVICE_VERSION = "claude-code-20250219"
- `ZO6` = fs.statSync
- `_N` = toKey() - Convert to key
- `_u` = Array - Array constructor
- `a6B` = arrayIncludes() - Array includes check
- `aiA` = hasUnicode() - Check for unicode
- `axA` = setToString() - Set toString on function
- `b31` = ENTER_PLAN_MODE_TOOL = "EnterPlanMode"
- `bBA` = baseIsEqual() - Base equality check
- `bX` = WRITE_TOOL = "Write"
- `content_block_delta` = CONTENT_BLOCK_DELTA event
- `content_block_start` = CONTENT_BLOCK_START event
- `content_block_stop` = CONTENT_BLOCK_STOP event
- `d6B` = baseIsNaN() - Check if NaN
- `dBA` = baseGet() - Base property get
- `dC` = last() - Get last element
- `dJ` = ASK_USER_QUESTION_TOOL = "AskUserQuestion"
- `eM6` = hasMultilineString(cmd) - Check for multiline strings
- `en` = AGENT_OUTPUT_TOOL = "AgentOutputTool"
- `g5` = READ_TOOL = "Read"
- `gBA` = arrayMap() - Array map
- `gGB` = TODO_WRITE_TOOL = "TodoWrite"
- `gq` = MODEL_OPUS = "claude-opus-4-5"
- `hN` = copyObject() - Copy object properties
- `hz9` = BROWSER_EXTENSION_ID = "com.anthropic.claude_code_browser_extension"
- `i6B` = baseIndexOf() - Base indexOf with NaN
- `id1` = hasHeredoc(cmd) - Check if command has heredoc
- `j6B` = emptyFunction() - No-op function
- `j7` = isArray() - Check if array
- `j9A` = isPlainObject() - Check plain object
- `jBA` = arrayPush() - Array push helper
- `jj` = baseIteratee() - Base iteratee
- `mcp_tool_use` = MCP_TOOL_USE type
- `message_delta` = MESSAGE_DELTA event type
- `message_start` = MESSAGE_START event type
- `message_stop` = MESSAGE_STOP event type
- `nd1` = isOperator(token, op) - Check if token is operator
- `niA` = baseSlice() - Base array slice
- `nxA` = overRest() - Over rest args
- `o5B` = baseSet() - Base set property
- `o6B` = isFlattenable() - Check if flattenable
- `o9` = getConfig() - Returns config with BASE_API_URL, OAuth endpoints
- `oM6` = getSandboxHint() - Returns sandbox usage hint text
- `p6B` = strictIndexOf() - Strict array indexOf
- `pG` = esmExport(obj, key) - ESM export binding
- `pI1` = KILL_SHELL_TOOL = "KillShell"
- `px` = isArguments() - Check if arguments
- `pzA` = capitalize() - Capitalize string
- `qGB` = SYSTEM_PROMPT_BASE = "You are Claude Code..."
- `rM6` = getGitConfig() - Returns git commit/pr config object
- `rd1` = getShellRcFile() - Get .bashrc/.zshrc path
- `s5B` = omit() - Omit properties
- `s8` = TASK_TOOL = "Task"
- `sd1` = path.join
- `server_tool_use` = SERVER_TOOL_USE type
- `siA` = baseEach() - Base forEach
- `tI` = TODO_READ_TOOL object
- `tM6` = getGitCommitInstructions() - Returns git commit instructions
- `text_delta` = TEXT_DELTA event type
- `thinking` = THINKING content type
- `tool_use` = TOOL_USE content type
- `u6B` = baseFindIndex() - Base find index
- `uBA` = toString() - Convert to string
- `uY` = GREP_TOOL = "Grep"
- `vX` = WEB_FETCH_TOOL = "WebFetch"
- `w5B` = createCaseFirst() - Create case function
- `x6B` = Socks5Server class
- `xu` = isIndex() - Check if valid index
- `xz` = nativeMethod(obj, name) - Native method lookup
- `y6B` = SocksCommand enum (connect, bind, udp)
- `yP` = SLASH_COMMAND_TOOL = "SlashCommand"

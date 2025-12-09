# Claude Code 模块索引

## 关键文件位置

### 工具定义
- `tools/tools_004.js` - Bash工具 (D9)
- `tools/tools_005.js` - WebFetch, Edit, Read (vX, R5, g5)
- `tools/tools_006.js` - Glob, Task, Grep, Write, NotebookEdit, WebSearch (CD, s8, uY, bX, M_, O_)
- `tools/tools_012.js` - Skill工具 (Pq)
- `tools/tools_016.js` - AskUserQuestion (dJ)
- `tools/tools_017.js` - EnterPlanMode, SlashCommand (b31, yP)
- `tools/tools_019.js` - KillShell (pI1)

### 系统提示
- `prompts/prompts_003.js` - Bash工具描述 (LSB)
- `tools/tools_006.js:845` - 主系统提示 (qGB)

### Agent系统
- `agents/agents_011.js` - Plan模式逻辑
- `tools/tools_006.js:1111` - claude-code-guide Agent (Uf1)

### API客户端
- `api/api_003.js` - 服务版本 (Yn0)
- `api/api_012.js` - Sentry配置 (bRB)
- `api/api_022.js` - 凭证错误类 (go6)
- `api/api_023.js` - 认证凭证类

### 认证
- `auth/auth_048.js` - OAuth错误处理
- `auth/auth_050.js` - client_id (Hk), no_tokens_found (Rl)
- `auth/auth_051.js` - 托管身份认证

### 遥测
- `telemetry/telemetry_012.js` - 负载均衡策略

### Git
- `git/git_030.js` - ExitPlanMode (a61, kRA)

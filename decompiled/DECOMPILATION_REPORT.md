# Claude Code 反编译分析报告

**版本:** 2.0.57
**分析日期:** 2024-12-08
**源文件:** `@anthropic-ai/claude-code/cli.js`

---

## 1. 概述

Claude Code 是 Anthropic 官方的 CLI 工具，允许用户通过终端与 Claude AI 交互进行软件开发任务。

### 1.1 文件统计

| 指标 | 数值 |
|------|------|
| 原始文件大小 | 10.9 MB |
| 格式化后大小 | 17 MB |
| 格式化后行数 | 450,257 |
| 模块数量 | ~1,685 |
| 类定义数量 | ~996 |
| 遥测事件数量 | 417 |

### 1.2 混淆类型

代码使用了 **esbuild** 打包工具进行构建，特点包括：
- 变量名压缩为短名（如 `iw9`, `NW1`, `HX` 等）
- 使用懒加载模式 `L(() => {...})` 延迟模块初始化
- 字符串常量保持原样（可用于逆向分析）
- 包含完整的第三方库代码（lodash, ink, react 等）

---

## 2. 核心架构

### 2.1 工具系统 (Tools)

Claude Code 提供以下内置工具：

| 工具名 | 混淆变量 | 功能描述 |
|--------|----------|----------|
| Read | `g5` | 读取文件内容 |
| Write | `bX` | 写入文件 |
| Edit | `R5` | 编辑文件（精确替换） |
| Bash | `D9` | 执行终端命令 |
| Glob | `CD` | 文件模式匹配 |
| Grep | `uY` | 内容搜索 |
| Task | `s8` | 启动子代理任务 |
| WebFetch | `vX` | 获取网页内容 |
| WebSearch | `O_` | 网络搜索 |
| TodoWrite | `gGB` | 任务列表管理 |
| NotebookEdit | - | Jupyter 笔记本编辑 |
| AskUserQuestion | - | 向用户提问 |
| BashOutput | - | 获取后台命令输出 |
| KillShell | - | 终止后台进程 |
| Skill | - | 调用技能 |
| SlashCommand | - | 执行斜杠命令 |
| EnterPlanMode | - | 进入计划模式 |
| ExitPlanMode | - | 退出计划模式 |

### 2.2 代理系统 (Agents)

| 代理类型 | 混淆变量 | 用途 |
|----------|----------|------|
| general-purpose | - | 通用多步骤任务 |
| claude-code-guide | `Uf1` | Claude Code 文档查询 |
| Explore | - | 代码库探索 |
| Plan | - | 架构设计规划 |
| statusline-setup | - | 状态栏配置 |

### 2.3 支持的模型

```
claude-opus-4-5-20251101
claude-opus-4-1-20250805
claude-opus-4-20250514
claude-sonnet-4-5-20250929
claude-sonnet-4-20250514
claude-haiku-4-5-20251001
```

---

## 3. 配置系统

### 3.1 环境变量

关键环境变量（共检测到 50+ 个）：

```bash
# API 配置
ANTHROPIC_API_KEY
CLAUDE_API_KEY
CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR
CLAUDE_CODE_API_KEY_HELPER_TTL_MS

# 区域配置
AWS_REGION
AWS_DEFAULT_REGION
CLOUD_ML_REGION
VERTEX_REGION_CLAUDE_*

# 功能开关
CLAUDE_CODE_USE_BEDROCK
CLAUDE_CODE_SKIP_BEDROCK_AUTH
CLAUDE_CODE_REMOTE
CLAUDE_CODE_BUBBLEWRAP
CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR
CLAUDE_CODE_AUTO_CONNECT_IDE

# 调试
OTEL_LOG_USER_PROMPTS
CLAUDE_CODE_DEBUG
```

### 3.2 配置键

```
CLAUDE_AGENT_SDK_VERSION
CLAUDE_AI_AUTHORIZE_URL
CLAUDE_AUTOCOMPACT_PCT_OVERRIDE
CLAUDE_BASH_NO_LOGIN
CLAUDE_CODE_ACTION
CLAUDE_CODE_ADDITIONAL_PROTECTION
CLAUDE_CODE_ALLOW_MCP_TOOLS_FOR_SUBAGENTS
CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR
CLAUDE_CODE_CLIENT_CERT
```

---

## 4. API 集成

### 4.1 支持的提供商

1. **Anthropic API** (默认)
   - 端点: `api.anthropic.com`
   - 路径: `/v1/messages`, `/v1/complete`, `/v1/models`

2. **AWS Bedrock**
   - 通过 AWS SDK 集成
   - 支持区域配置

3. **Google Vertex AI**
   - 通过 Google Cloud SDK 集成
   - 支持多区域部署

### 4.2 API 端点

```
/v1/messages
/v1/messages/batches
/v1/messages/count_tokens
/v1/complete
/v1/files
/v1/models
/v1/batch
/v1/session_ingress/session
/authorize
```

---

## 5. 遥测系统

Claude Code 使用 `tengu_*` 前缀的遥测事件（共 417 个），主要类别：

### 5.1 会话事件
```
tengu_session_start
tengu_session_end
tengu_exit
tengu_startup_telemetry
```

### 5.2 工具事件
```
tengu_tool_use_success
tengu_tool_use_error
tengu_agent_tool_completed
tengu_agent_tool_selected
```

### 5.3 API 事件
```
tengu_api_before_normalize
tengu_api_after_normalize
tengu_1p_event_batch_config
```

### 5.4 功能事件
```
tengu_add_memory_start
tengu_add_memory_success
tengu_add_memory_failure
tengu_input_background
tengu_input_bash
tengu_teleport_*
```

---

## 6. MCP (Model Context Protocol)

Claude Code 实现了 MCP 协议支持：

- **服务器管理:** 连接/断开 MCP 服务器
- **工具调用:** 通过 MCP 调用外部工具
- **资源访问:** 读取 MCP 资源
- **传输层:** 支持 stdio 和 HTTP 传输

---

## 7. 代码流程

### 7.1 入口点

```javascript
main()  // 主入口
init()  // 初始化
start() // 启动
run()   // 运行
```

### 7.2 事件处理器

```javascript
onMessage  // 消息处理
onInput    // 输入处理
onOutput   // 输出处理
onError    // 错误处理
onClose    // 关闭处理
```

---

## 8. UI 组件

使用 **Ink** (React for CLI) 构建 UI：

- 终端渲染组件
- 交互式输入
- 进度指示器
- 代码高亮显示
- Markdown 渲染

---

## 9. 变量名映射表

通过上下文分析推断的变量名：

| 混淆名 | 推断名 |
|--------|--------|
| `g5` | ReadTool |
| `bX` | WriteTool |
| `R5` | EditTool |
| `D9` | BashTool |
| `CD` | GlobTool |
| `uY` | GrepTool |
| `s8` | TaskTool |
| `vX` | WebFetchTool |
| `O_` | WebSearchTool |
| `gGB` | TodoWriteTool |
| `Uf1` | ClaudeCodeGuideAgent |

---

## 10. 目录结构

```
decompiled/
├── cli.formatted.js          # 格式化后的源码 (17MB)
├── analysis_report.json      # 基础分析报告
├── extracted/
│   ├── detailed_analysis.json    # 详细分析
│   └── reconstruction_report.json # 重构报告
├── analyze.js                # 分析脚本
├── extract_modules.js        # 模块提取脚本
├── reconstruct.js            # 变量重构脚本
└── DECOMPILATION_REPORT.md   # 本报告
```

---

## 11. 局限性

1. **变量名不可完全还原** - esbuild 的压缩是单向的
2. **控制流被打乱** - 部分逻辑难以追踪
3. **第三方库代码混杂** - 难以区分核心代码和依赖
4. **缺少类型信息** - TypeScript 类型在编译后丢失

---

## 12. 建议

如需深入了解 Claude Code 源码：
1. 关注官方 GitHub: https://github.com/anthropics/claude-code
2. 查阅官方文档: https://docs.claude.com
3. 申请 Anthropic 职位（源码注释提到正在招聘）

---

*本报告由自动化分析脚本生成，仅供学习研究使用。*

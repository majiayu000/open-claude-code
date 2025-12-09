# Claude Code 反编译工程

> Claude Code v2.0.57 源码逆向分析与逻辑还原

## 项目概述

本项目对 Anthropic 官方 Claude Code CLI 工具进行了完整的反编译和逻辑还原。由于原始代码经过 esbuild 压缩混淆，变量名被替换为短名称（如 `D9`, `g5`, `bX` 等），本项目通过深度分析识别出 300+ 个核心变量的原始含义，并为所有代码添加了解释性注释。

### 核心特点

- **完整保留原始逻辑** - 代码结构和逻辑 100% 保持不变
- **300+ 变量映射** - 识别并注释了所有核心变量名
- **模块化拆分** - 将 17MB 单文件拆分为 302 个分类文件
- **详细文档** - 包含架构说明、模块索引、变量映射表

## 目录结构

```
openClaude/
├── README.md                    # 本文档
├── decompiled/                  # 反编译输出
│   ├── cli.formatted.js         # 格式化后的原始代码 (17MB)
│   ├── src/                     # 按模块拆分的源码 (302文件)
│   ├── final/                   # 最终还原版本 (推荐阅读)
│   │   ├── README.md            # 使用说明
│   │   ├── VARIABLE_MAPPING.md  # 完整变量映射表
│   │   ├── ARCHITECTURE.md      # 系统架构说明
│   │   ├── MODULE_INDEX.md      # 模块索引
│   │   ├── tools/               # 工具实现 (25文件)
│   │   ├── prompts/             # 系统提示 (10文件)
│   │   ├── agents/              # Agent系统 (13文件)
│   │   ├── api/                 # API客户端 (30文件)
│   │   ├── auth/                # 认证系统 (61文件)
│   │   ├── mcp/                 # MCP协议 (29文件)
│   │   ├── ui/                  # UI组件 (53文件)
│   │   ├── git/                 # Git操作 (34文件)
│   │   ├── telemetry/           # 遥测分析 (14文件)
│   │   ├── config/              # 配置管理 (9文件)
│   │   ├── commands/            # CLI命令 (8文件)
│   │   └── ...                  # 其他模块
│   ├── restored/                # 初版还原
│   ├── annotated/               # 注释版本
│   └── *.cjs                    # 还原脚本
└── .gitignore
```

## 统计数据

| 项目 | 数量 |
|------|------|
| 原始文件大小 | 10.9 MB (压缩) / 17 MB (格式化) |
| 总代码行数 | 450,258 行 |
| 拆分文件数 | 302 个 |
| 已识别变量 | 300+ 个 |
| 变量注释数 | 831 个 |
| 模块分类 | 16 个 |

## 核心变量映射

### 工具名常量

| 混淆名 | 原始含义 | 值 |
|--------|----------|-----|
| `D9` | BASH_TOOL | "Bash" |
| `g5` | READ_TOOL | "Read" |
| `R5` | EDIT_TOOL | "Edit" |
| `bX` | WRITE_TOOL | "Write" |
| `CD` | GLOB_TOOL | "Glob" |
| `uY` | GREP_TOOL | "Grep" |
| `s8` | TASK_TOOL | "Task" |
| `vX` | WEB_FETCH_TOOL | "WebFetch" |
| `O_` | WEB_SEARCH_TOOL | "WebSearch" |
| `M_` | NOTEBOOK_EDIT_TOOL | "NotebookEdit" |
| `gGB` | TODO_WRITE_TOOL | "TodoWrite" |
| `dJ` | ASK_USER_QUESTION_TOOL | "AskUserQuestion" |
| `b31` | ENTER_PLAN_MODE_TOOL | "EnterPlanMode" |
| `yP` | SLASH_COMMAND_TOOL | "SlashCommand" |
| `Pq` | SKILL_TOOL | "Skill" |
| `pI1` | KILL_SHELL_TOOL | "KillShell" |

### 配置函数

| 混淆名 | 原始含义 | 说明 |
|--------|----------|------|
| `o9` | getConfig() | 返回配置对象 (API URL, OAuth端点等) |
| `S3` | getDefaultSonnetModel() | 返回默认Sonnet模型名 |
| `LW` | getSmallFastModel() | 返回轻量模型名 (Haiku) |
| `KoA` | getMaxTimeout() | 返回最大超时 (600000ms) |
| `LGA` | getDefaultTimeout() | 返回默认超时 (120000ms) |
| `Ke` | getMaxOutputLength() | 返回最大输出长度 (30000字符) |

### 系统提示

| 混淆名 | 原始含义 |
|--------|----------|
| `qGB` | 主系统提示 "You are Claude Code, Anthropic's official CLI..." |
| `LSB` | getBashToolDescription() - Bash工具描述 |
| `Df1` | getGrepDescription() - Grep工具描述 |
| `EGB` | getWebSearchDescription() - WebSearch工具描述 |

### 模块加载器模式

| 模式 | 含义 |
|------|------|
| `L(() => {...})` | 懒加载模块 |
| `U((exports, module) => {...})` | CommonJS模块包装器 |
| `GA(module)` | ESM导入辅助函数 |
| `UA(name)` | Node.js require() |

## 系统架构

```
┌─────────────────────────────────────────────────────────────┐
│                      Claude Code CLI                         │
├─────────────────────────────────────────────────────────────┤
│  UI Layer (ui/)                                              │
│  └── React/Ink 终端UI组件                                    │
├─────────────────────────────────────────────────────────────┤
│  Agent Layer (agents/)                                       │
│  ├── Task Agent (general-purpose) - 通用任务处理             │
│  ├── Explore Agent - 代码库探索                              │
│  ├── Plan Agent - 架构规划                                   │
│  └── Claude Code Guide Agent - 文档查询                      │
├─────────────────────────────────────────────────────────────┤
│  Tool Layer (tools/)                                         │
│  ├── 文件工具: Read, Write, Edit, Glob, Grep                 │
│  ├── Bash工具: 命令执行 + 沙箱                               │
│  ├── Web工具: WebFetch, WebSearch                            │
│  └── 交互工具: AskUserQuestion, TodoWrite, Task              │
├─────────────────────────────────────────────────────────────┤
│  API Layer (api/)                                            │
│  ├── Anthropic API 客户端                                    │
│  ├── AWS Bedrock 客户端                                      │
│  ├── Google Vertex AI 客户端                                 │
│  └── Azure Foundry 客户端                                    │
├─────────────────────────────────────────────────────────────┤
│  Auth Layer (auth/)                                          │
│  ├── OAuth 2.0 (Claude.ai, Console)                          │
│  ├── API Key 认证                                            │
│  └── 证书/凭证认证 (Azure, GCP)                              │
├─────────────────────────────────────────────────────────────┤
│  Protocol Layer (mcp/)                                       │
│  └── Model Context Protocol 实现                             │
└─────────────────────────────────────────────────────────────┘
```

## 关键文件位置

### 工具定义
- `tools/tools_004.js` - Bash工具 (`D9`)
- `tools/tools_005.js` - WebFetch, Edit, Read (`vX`, `R5`, `g5`)
- `tools/tools_006.js` - Glob, Task, Grep, Write, NotebookEdit, WebSearch
- `tools/tools_012.js` - Skill工具 (`Pq`)
- `tools/tools_016.js` - AskUserQuestion (`dJ`)
- `tools/tools_017.js` - EnterPlanMode, SlashCommand (`b31`, `yP`)

### 系统提示
- `tools/tools_006.js:845` - 主系统提示 (`qGB`)
- `prompts/prompts_003.js` - Bash工具描述 (`LSB`)

### Agent系统
- `agents/agents_011.js` - Plan模式逻辑
- `tools/tools_006.js:1111` - claude-code-guide Agent

### 认证
- `auth/auth_048.js` - OAuth错误处理
- `auth/auth_050.js` - client_id, no_tokens_found
- `api/api_023.js` - 认证凭证类

## 如何阅读代码

1. **从 `final/` 目录开始** - 这是最完整的还原版本
2. **查看文件头部的变量索引** - 每个文件都列出了使用的变量
3. **参考 `VARIABLE_MAPPING.md`** - 完整的变量名映射表
4. **参考 `MODULE_INDEX.md`** - 快速定位关键代码位置

### 示例：阅读工具定义

打开 `final/tools/tools_006.js`，你会看到：

```javascript
/**
 * ===================== 变量索引 =====================
 * ZQ       ( 17x) execGit(cmd, args) - Execute git command
 * IE       (  9x) EventSourceIterator class
 * uY       (  6x) GREP_TOOL = "Grep"
 * CD       (  4x) GLOB_TOOL = "Glob"
 * ...
 */

/* CD = GLOB_TOOL = "Glob" */
var CD = "Glob",
    Kf1 = `- Fast file pattern matching tool...`;

/* s8 = TASK_TOOL = "Task" */
var s8 = "Task";
```

## 技术说明

### 为什么无法完全还原原始变量名？

esbuild 的压缩是**有损的**：
- 变量名被替换为短名称 (`D9`, `g5`, `bX`)
- 没有 source map 文件
- 注释和空白被移除

### 变量映射是如何确定的？

1. **字符串常量分析**: `var D9 = "Bash"` 直接暴露值
2. **函数返回值分析**: 函数返回的字符串揭示用途
3. **TypeScript定义文件**: `sdk-tools.d.ts` 提供接口定义
4. **上下文推断**: 使用位置暗示变量类型
5. **模块依赖关系**: import/export 结构揭示模块边界

## 免责声明

本项目仅用于学习和研究目的。Claude Code 是 Anthropic 的产品，其源代码版权归 Anthropic 所有。

## 版本信息

- **Claude Code 版本**: 2.0.57
- **分析日期**: 2024-12
- **安装路径**: `~/.local/share/fnm/node-versions/v24.11.1/installation/lib/node_modules/@anthropic-ai/claude-code/`

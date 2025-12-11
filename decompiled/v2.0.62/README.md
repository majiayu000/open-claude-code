# Claude Code v2.0.62 逆向分析

> 完整的 Claude Code CLI 源码逆向分析与可读化还原

## 项目概述

本项目对 Anthropic 官方 Claude Code CLI v2.0.62 进行了完整的反编译和代码还原。

### 核心特点

- **变量名还原** - 546 处混淆变量名替换为有意义名称
- **模块化拆分** - 380,352 行代码拆分为 14 个功能模块
- **100% 逻辑保留** - 代码结构和逻辑完全保持不变

## 目录结构

```
v2.0.62/
├── cli.original.js        # 原始压缩代码 (格式化后)
├── cli.readable.js        # 变量名还原后的可读版本
├── VARIABLE_MAPPING.md    # 变量名映射表
├── types/                 # TypeScript 类型定义
│   ├── index.d.ts         # 主入口类型
│   ├── tools.d.ts         # 工具类型定义
│   ├── api.d.ts           # API 类型定义
│   └── config.d.ts        # 配置类型定义
├── modules/               # 模块化拆分
│   ├── core/
│   │   ├── bootstrap.js   # 启动引导
│   │   └── main.js        # 主入口
│   ├── telemetry/
│   │   ├── statsig.js     # Statsig 遥测
│   │   └── sentry.js      # Sentry 错误追踪
│   ├── vendor/
│   │   ├── react.js       # React 运行时
│   │   ├── ink.js         # Ink 终端UI库
│   │   ├── lodash.js      # Lodash 工具库
│   │   └── zod.js         # Zod 验证库
│   ├── auth/
│   │   ├── oauth.js       # OAuth 认证
│   │   └── credentials.js # 凭证管理
│   ├── api/
│   │   └── client.js      # API 客户端
│   ├── tools/
│   │   ├── definitions.js # 工具定义
│   │   └── implementations.js # 工具实现
│   └── ui/
│       └── components.js  # UI 组件
└── MODULE_INDEX.md        # 模块索引
```

## 统计数据

| 指标 | 数值 |
|------|------|
| 原始文件大小 | 9.3 MB (压缩) / 13 MB (格式化) |
| 总代码行数 | 380,352 行 |
| 变量替换数 | 546 处 |
| 模块数量 | 14 个 |
| TypeScript 类型文件 | 4 个 |
| 版本 | v2.0.62 |

## 核心变量映射

### 工具名常量

| 混淆名 | 还原名 | 值 |
|--------|--------|-----|
| `_8` | `BASH_TOOL_NAME` | "Bash" |
| `DZ` | `READ_TOOL_NAME` | "Read" |
| `nM` | `GLOB_TOOL_NAME` | "Glob" |
| `a3` | `TASK_TOOL_NAME` | "Task" |
| `X$` | `GREP_TOOL_NAME` | "Grep" |
| `MX` | `EDIT_TOOL_NAME` | "Edit" |
| `Pv` | `NOTEBOOK_EDIT_TOOL_NAME` | "NotebookEdit" |
| `tq` | `MULTI_EDIT_TOOL_NAME` | "MultiEdit" |
| `aM` | `WRITE_TOOL_NAME` | "Write" |
| `eq` | `WEB_FETCH_TOOL_NAME` | "WebFetch" |
| `h11` | `WEB_SEARCH_TOOL_NAME` | "WebSearch" |
| `Yc` | `SLASH_COMMAND_TOOL_NAME` | "SlashCommand" |

### 配置常量

| 混淆名 | 还原名 | 说明 |
|--------|--------|------|
| `CBB` | `MAX_INPUT_TOKENS` | 180000 |
| `UBB` | `TARGET_INPUT_TOKENS` | 40000 |
| `NKQ` | `MAX_TIMEOUT_MS` | 600000 (10分钟) |
| `LHQ` | `MAX_OUTPUT_LENGTH` | 30000 字符 |
| `tv6` | `READONLY_TOOLS` | 只读工具列表 |
| `ev6` | `EDIT_TOOLS` | 编辑工具列表 |

### 系统提示相关

| 混淆名 | 还原名 | 说明 |
|--------|--------|------|
| `ek1` | `getSystemPromptHeader` | 返回系统提示头部 |
| `eD0` | `GLOB_TOOL_DESCRIPTION` | Glob 工具描述 |
| `AC0` | `getGrepToolDescription` | Grep 工具描述函数 |
| `VBB` | `MULTI_EDIT_TOOL_DESCRIPTION` | MultiEdit 工具描述 |
| `KBB` | `WRITE_TOOL_DESCRIPTION` | Write 工具描述 |
| `qBB` | `TODO_WRITE_TOOL_DESCRIPTION` | TodoWrite 工具描述 |

## 系统架构

```
┌─────────────────────────────────────────────────────────────┐
│                    Claude Code CLI v2.0.62                   │
├─────────────────────────────────────────────────────────────┤
│  UI Layer (ui/)                                              │
│  └── React/Ink 终端UI组件                                    │
├─────────────────────────────────────────────────────────────┤
│  Tools Layer (tools/)                                        │
│  ├── 文件工具: Read, Write, Edit, MultiEdit, Glob, Grep      │
│  ├── Bash工具: 命令执行 + 沙箱                               │
│  ├── Web工具: WebFetch, WebSearch                            │
│  └── 交互工具: AskUserQuestion, TodoWrite, Task              │
├─────────────────────────────────────────────────────────────┤
│  API Layer (api/)                                            │
│  ├── Anthropic API 客户端                                    │
│  ├── AWS Bedrock 客户端                                      │
│  └── Google Vertex AI 客户端                                 │
├─────────────────────────────────────────────────────────────┤
│  Auth Layer (auth/)                                          │
│  ├── OAuth 2.0 认证                                          │
│  └── 凭证/证书管理                                           │
├─────────────────────────────────────────────────────────────┤
│  Telemetry Layer (telemetry/)                                │
│  ├── Statsig - 功能开关                                      │
│  └── Sentry - 错误追踪                                       │
└─────────────────────────────────────────────────────────────┘
```

## 18 种内置工具

| # | 工具名 | 功能 |
|---|--------|------|
| 1 | Bash | 执行终端命令 |
| 2 | Read | 读取文件 |
| 3 | Write | 写入文件 |
| 4 | Edit | 编辑文件 |
| 5 | MultiEdit | 多处编辑 |
| 6 | Glob | 文件模式匹配 |
| 7 | Grep | 内容搜索 |
| 8 | Task | 启动子任务 |
| 9 | WebFetch | 获取网页 |
| 10 | WebSearch | 网络搜索 |
| 11 | NotebookEdit | Jupyter 编辑 |
| 12 | TodoWrite | 任务列表 |
| 13 | AskUserQuestion | 向用户提问 |
| 14 | SlashCommand | 斜杠命令 |
| 15 | Skill | 技能调用 |
| 16 | EnterPlanMode | 进入计划模式 |
| 17 | ExitPlanMode | 退出计划模式 |
| 18 | KillShell | 终止后台进程 |

## 如何阅读代码

1. **从 `cli.readable.js` 开始** - 这是变量名还原后的完整版本
2. **按模块浏览** - 在 `modules/` 目录下按功能模块查看
3. **查看 `VARIABLE_MAPPING.md`** - 完整的变量名映射表
4. **查看 `types/` 目录** - 完整的 TypeScript 类型定义
5. **工具定义在** `modules/tools/definitions.js` - 行 320000-340000

## TypeScript 类型定义

`types/` 目录包含从反编译代码推断出的完整 TypeScript 类型定义：

- **`tools.d.ts`** - 所有 18 种工具的输入/输出类型
- **`api.d.ts`** - API 请求/响应、流式事件、客户端配置
- **`config.d.ts`** - 环境变量、设置 Schema、功能标志
- **`index.d.ts`** - 主入口，会话状态、UI 状态、Git 相关类型

```typescript
// 使用示例
import type { BashToolInput, ReadToolInput, TaskToolInput } from './types';

const bashInput: BashToolInput = {
  command: 'ls -la',
  timeout: 30000,
};
```

## 关键代码位置

| 功能 | 文件 | 行号 |
|------|------|------|
| 系统提示 | cli.readable.js | 319587 |
| 工具定义 | cli.readable.js | 319454-319580 |
| API 客户端 | modules/api/client.js | - |
| OAuth 认证 | modules/auth/oauth.js | - |

## 与 v2.0.57 的差异

v2.0.62 相比之前分析的 v2.0.57 版本：

- 变量名压缩规则有变化（如 `D9` → `_8`）
- 新增 `MultiEdit` 工具
- 代码行数减少约 70,000 行（优化）
- 部分第三方库更新

## 免责声明

本项目仅用于学习和研究目的。Claude Code 是 Anthropic 的产品，其源代码版权归 Anthropic 所有。

---

*分析日期: 2025-12-09*
*Claude Code 版本: 2.0.62*

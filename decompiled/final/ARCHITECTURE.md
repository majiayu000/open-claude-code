# Claude Code 系统架构

## 核心组件

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
│  └── Claude Code Guide - 文档查询                            │
├─────────────────────────────────────────────────────────────┤
│  Tool Layer (tools/)                                         │
│  ├── 文件工具: Read, Write, Edit, Glob, Grep                 │
│  ├── Bash工具: 命令执行 + 沙箱                               │
│  ├── Web工具: WebFetch, WebSearch                            │
│  └── 交互工具: AskUserQuestion, TodoWrite                    │
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
│  └── 证书/凭证认证                                           │
├─────────────────────────────────────────────────────────────┤
│  Protocol Layer (mcp/)                                       │
│  └── Model Context Protocol 实现                             │
└─────────────────────────────────────────────────────────────┘
```

## 模块统计

| 分类 | 文件数 | 变量注释 | 说明 |
|------|--------|---------|------|
| tools | 25 | 285 | - |
| auth | 61 | 95 | - |
| mcp | 29 | 95 | - |
| prompts | 10 | 74 | - |
| api | 30 | 69 | - |
| ui | 53 | 62 | - |
| agents | 13 | 54 | - |
| git | 34 | 39 | - |
| telemetry | 14 | 30 | - |
| config | 9 | 14 | - |
| commands | 8 | 13 | - |
| lodash | 5 | 1 | - |
| crypto | 1 | 0 | - |
| fs | 1 | 0 | - |
| other | 8 | 0 | - |
| process | 1 | 0 | - |

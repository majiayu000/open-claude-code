# Claude Code 架构说明

## 代码库统计

| 分类 | 文件数 | 注释变量数 | 说明 |
|------|--------|-----------|------|
| tools | 25 | 252 | 工具实现 (Bash, Read, Write, Edit, Glob, Grep 等) |
| mcp | 29 | 76 | Model Context Protocol 实现 |
| auth | 61 | 71 | 认证系统 (OAuth, API Key, 证书) |
| prompts | 10 | 68 | 系统提示词和模板 |
| api | 30 | 58 | API客户端 (Anthropic, Bedrock, Vertex, Foundry) |
| agents | 13 | 55 | Agent系统 (Task, Explore, Plan 等) |
| ui | 53 | 48 | React/Ink UI组件 |
| git | 34 | 20 | Git操作和gRPC |
| telemetry | 14 | 20 | 遥测和分析 |
| commands | 8 | 11 | CLI斜杠命令 |
| config | 9 | 9 | 配置管理 |
| lodash | 5 | 1 | Lodash工具函数 |
| crypto | 1 | 0 | 加密操作 |
| fs | 1 | 0 | 文件系统操作 |
| other | 8 | 0 | 其他模块 |
| process | 1 | 0 | 进程管理 |

## 核心模块关系

```
┌─────────────────────────────────────────────────────────────┐
│                      Claude Code CLI                         │
├─────────────────────────────────────────────────────────────┤
│  UI Layer (ui/)                                              │
│  ├── React/Ink Components                                    │
│  └── Terminal Rendering                                      │
├─────────────────────────────────────────────────────────────┤
│  Command Layer (commands/)                                   │
│  ├── Slash Commands                                          │
│  └── Interactive Commands                                    │
├─────────────────────────────────────────────────────────────┤
│  Agent Layer (agents/)                                       │
│  ├── Task Agent (general-purpose)                            │
│  ├── Explore Agent (codebase exploration)                    │
│  ├── Plan Agent (architecture planning)                      │
│  └── Claude Code Guide Agent (documentation)                 │
├─────────────────────────────────────────────────────────────┤
│  Tool Layer (tools/)                                         │
│  ├── File Tools: Read, Write, Edit, Glob, Grep              │
│  ├── Bash Tool: Command execution with sandbox               │
│  ├── Web Tools: WebFetch, WebSearch                          │
│  ├── Task Tools: TodoWrite, Task                             │
│  └── Interactive: AskUserQuestion, Skill, SlashCommand       │
├─────────────────────────────────────────────────────────────┤
│  API Layer (api/)                                            │
│  ├── Anthropic Client (direct API)                           │
│  ├── AWS Bedrock Client                                      │
│  ├── Google Vertex AI Client                                 │
│  └── Azure Foundry Client                                    │
├─────────────────────────────────────────────────────────────┤
│  Auth Layer (auth/)                                          │
│  ├── OAuth 2.0 (Claude.ai, Console)                          │
│  ├── API Key Authentication                                  │
│  └── Certificate/Credential Auth                             │
├─────────────────────────────────────────────────────────────┤
│  Protocol Layer (mcp/)                                       │
│  ├── MCP Server Implementation                               │
│  ├── Tool Registration                                       │
│  └── Message Handling                                        │
├─────────────────────────────────────────────────────────────┤
│  Infrastructure                                              │
│  ├── Config (config/)                                        │
│  ├── Git Integration (git/)                                  │
│  ├── Telemetry (telemetry/)                                  │
│  └── Process Management (process/)                           │
└─────────────────────────────────────────────────────────────┘
```

## 数据流

1. **用户输入** → UI Layer → Command Parser
2. **命令处理** → Agent Layer → Tool Selection
3. **工具执行** → Tool Layer → API/File System
4. **API调用** → API Layer → Auth Layer → External API
5. **响应处理** → Stream Handler → UI Rendering

## 关键文件位置

- **工具定义**: `tools/tools_004.js` - `tools/tools_013.js`
- **系统提示**: `prompts/prompts_003.js` - `prompts/prompts_006.js`
- **Agent逻辑**: `agents/agents_001.js` - `agents/agents_013.js`
- **API客户端**: `api/api_001.js` - `api/api_030.js`
- **认证流程**: `auth/auth_001.js` - `auth/auth_061.js`

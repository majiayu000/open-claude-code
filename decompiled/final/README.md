# Claude Code 反编译代码 - 完整还原版

## 概述

这是 Claude Code v2.0.57 的反编译代码，包含完整的逻辑还原和变量名注释。

- **总文件数**: 302
- **已识别变量**: 215+
- **代码行数**: 450,258

## 目录结构

```
final/
├── tools/      # 工具实现 (Bash, Read, Write, Edit, Glob, Grep, etc.)
├── prompts/    # 系统提示词和模板
├── agents/     # Agent系统 (Task, Explore, Plan, etc.)
├── api/        # API客户端 (Anthropic, Bedrock, Vertex, Foundry)
├── auth/       # 认证系统 (OAuth, API Key, Certificate)
├── mcp/        # Model Context Protocol 实现
├── ui/         # React/Ink UI组件
├── git/        # Git操作和gRPC
├── telemetry/  # 遥测和分析
├── config/     # 配置管理
├── commands/   # CLI斜杠命令
├── lodash/     # Lodash工具函数
└── other/      # 其他模块
```

## 如何阅读代码

1. 每个文件头部有**变量索引**，列出该文件使用的所有已识别变量
2. 变量定义处有**注释**说明其含义
3. 查阅 `VARIABLE_MAPPING.md` 获取完整映射表
4. 查阅 `ARCHITECTURE.md` 了解系统架构

## 核心变量速查

| 变量 | 含义 |
|------|------|
| D9 | Bash工具 |
| g5 | Read工具 |
| R5 | Edit工具 |
| bX | Write工具 |
| CD | Glob工具 |
| uY | Grep工具 |
| s8 | Task工具 |
| qGB | 系统提示词 |
| o9 | 配置函数 |
| L | 懒加载器 |

## 注意事项

- 代码逻辑100%保留，未做任何修改
- 变量名通过上下文分析推断，可能有少量不准确
- esbuild压缩是有损的，无法完全恢复原始源码

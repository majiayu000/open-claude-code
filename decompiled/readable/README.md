# Claude Code 完整可读版本

> 从原始 302 个模块文件增强而来，变量名已实际替换（不仅仅是注释）

## 与原始库的区别

| 对比项 | 原始库 (`final/`) | 可读版本 (`readable/`) |
|--------|------------------|------------------------|
| 变量处理 | 仅在文件头添加注释 | **实际替换变量名** |
| 变量替换数 | 0 | **21,120 处** |
| 模块结构 | 16 个分类目录 | 16 个分类目录（保持不变） |
| 文件数量 | 303 个 | 303 个 |
| TypeScript 类型 | 无 | **4 个完整类型文件** |
| 兼容版本 | v2.0.57 | v2.0.57 + v2.0.62 映射 |

## 目录结构

```
readable/
├── README.md                 # 本文件
├── index.js                  # 主入口和文件索引
├── types/                    # TypeScript 类型定义
│   ├── index.d.ts            # 主入口类型
│   ├── tools.d.ts            # 工具类型 (21 种工具)
│   ├── api.d.ts              # API 类型
│   └── config.d.ts           # 配置类型
├── tools/                    # 工具实现 (25 文件)
├── agents/                   # 代理实现 (13 文件)
├── api/                      # API 客户端 (30 文件)
├── auth/                     # 认证模块 (61 文件)
├── mcp/                      # MCP 协议 (29 文件)
├── ui/                       # UI 组件 (53 文件)
├── git/                      # Git 操作 (34 文件)
├── telemetry/                # 遥测 (14 文件)
├── config/                   # 配置 (9 文件)
├── prompts/                  # 提示词 (10 文件)
├── commands/                 # 命令 (8 文件)
├── lodash/                   # Lodash (5 文件)
├── fs/                       # 文件系统 (1 文件)
├── crypto/                   # 加密 (1 文件)
├── process/                  # 进程 (1 文件)
└── other/                    # 其他 (8 文件)
```

## 变量替换示例

### 原始代码 (final/)
```javascript
// 文件头注释: D9 = BASH_TOOL = "Bash"
if (A.name === D9) {
    return e06.includes(D9);
}
```

### 可读代码 (readable/)
```javascript
if (A.name === BASH_TOOL_NAME) {
    return READONLY_TOOLS.includes(BASH_TOOL_NAME);
}
```

## 已替换的核心变量

### 工具名常量
| 混淆名 | 可读名 | 值 |
|--------|--------|-----|
| `D9`/`_8` | `BASH_TOOL_NAME` | "Bash" |
| `g5`/`DZ` | `READ_TOOL_NAME` | "Read" |
| `bX`/`aM` | `WRITE_TOOL_NAME` | "Write" |
| `R5`/`MX` | `EDIT_TOOL_NAME` | "Edit" |
| `CD`/`nM` | `GLOB_TOOL_NAME` | "Glob" |
| `uY`/`X$` | `GREP_TOOL_NAME` | "Grep" |
| `s8`/`a3` | `TASK_TOOL_NAME` | "Task" |
| `vX`/`eq` | `WEB_FETCH_TOOL_NAME` | "WebFetch" |
| `O_`/`h11` | `WEB_SEARCH_TOOL_NAME` | "WebSearch" |

### 配置常量
| 混淆名 | 可读名 | 值 |
|--------|--------|-----|
| `zGB`/`CBB` | `MAX_INPUT_TOKENS` | 180000 |
| `UGB`/`UBB` | `TARGET_INPUT_TOKENS` | 40000 |
| `NKQ` | `MAX_TIMEOUT_MS` | 600000 (10分钟) |
| `LHQ` | `MAX_OUTPUT_LENGTH` | 30000 |

### 工具列表
| 混淆名 | 可读名 | 包含工具 |
|--------|--------|----------|
| `e06`/`tv6` | `READONLY_TOOLS` | Bash, Glob, Grep, Read, WebFetch, WebSearch |
| `AQ6`/`ev6` | `EDIT_TOOLS` | Edit, MultiEdit, Write, NotebookEdit |

## TypeScript 类型定义

```typescript
import type {
  BashToolInput,
  ReadToolInput,
  TaskToolInput,
  ToolName
} from './types';

// 工具输入类型完整定义
const bashInput: BashToolInput = {
  command: 'ls -la',
  timeout: 30000,
  description: 'List files'
};
```

## 统计数据

- **总代码行数**: 459,618 行
- **总文件数**: 303 个
- **变量替换**: 21,120 处
- **变量映射数**: 235 个
- **TypeScript 类型**: 4 个文件

## 重要关键文件

| 功能 | 文件位置 | 说明 |
|------|----------|------|
| 系统提示词 | `prompts/prompts_003.js` | 312 处替换 |
| 代理核心 | `agents/agents_007.js` | 294 处替换 |
| 工具定义 | `tools/tools_004.js` | 284 处替换 |
| 认证 | `auth/auth_034.js` | 283 处替换 |
| UI 组件 | `ui/ui_029.js` | 281 处替换 |

## 如何使用

1. **阅读代码**: 直接浏览各模块目录下的 `.js` 文件
2. **类型参考**: 查看 `types/` 目录获取 TypeScript 类型定义
3. **搜索功能**: 使用 grep 搜索具体的可读变量名

```bash
# 搜索 Bash 工具相关代码
grep -r "BASH_TOOL_NAME" readable/

# 搜索系统提示
grep -r "SYSTEM_PROMPT" readable/
```

## 版本兼容

本版本合并了 v2.0.57 和 v2.0.62 的变量映射：
- v2.0.57 原始映射（如 `D9` → `BASH_TOOL_NAME`）
- v2.0.62 新映射（如 `_8` → `BASH_TOOL_NAME`）

---

*生成日期: 2025-12-09*
*基于: Claude Code v2.0.57 + v2.0.62*

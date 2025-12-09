# Claude Code 变量名完整映射表

本文档列出了从混淆代码中识别出的所有重要变量名。

## 工具名常量 (Tool Name Constants)

| 混淆名 | 原始含义 | 值 |
|--------|----------|-----|
| D9 | BASH_TOOL_NAME | "Bash" |
| g5 | READ_TOOL_NAME | "Read" |
| bX | WRITE_TOOL_NAME | "Write" |
| R5 | EDIT_TOOL_NAME | "Edit" |
| CD | GLOB_TOOL_NAME | "Glob" |
| uY | GREP_TOOL_NAME | "Grep" |
| s8 | TASK_TOOL_NAME | "Task" |
| vX | WEB_FETCH_TOOL_NAME | "WebFetch" |
| O_ | WEB_SEARCH_TOOL_NAME | "WebSearch" |
| gGB | TODO_WRITE_TOOL_NAME | "TodoWrite" |

## 系统提示函数 (System Prompt Functions)

| 混淆名 | 原始含义 | 说明 |
|--------|----------|------|
| LSB | getBashToolDescription | 返回Bash工具的描述文本 |
| NSB | getReadToolDescription | 返回Read工具的描述文本 |
| OSB | shouldAddDevNull | 检查是否需要添加/dev/null重定向 |
| MSB | wrapBashCommand | 包装bash命令并转义 |
| PSB | addDevNullToCommand | 向命令添加/dev/null重定向 |

## 配置函数 (Config Functions)

| 混淆名 | 原始含义 | 返回值 |
|--------|----------|--------|
| KoA | getMaxTimeout | 600000 (10分钟) |
| LGA | getDefaultTimeout | 120000 (2分钟) |
| Ke | getMaxOutputLength | 30000 字符 |

## 沙箱相关 (Sandbox)

| 混淆名 | 原始含义 | 说明 |
|--------|----------|------|
| SQ | sandboxDebug | 沙箱调试日志函数 |
| P6B | createProxyServer | 创建HTTP/HTTPS代理服务器 |

## SOCKS5代理 (SOCKS5 Proxy)

| 混淆名 | 原始含义 | 说明 |
|--------|----------|------|
| x6B | Socks5Server | SOCKS5服务器类 |
| Me8 | Socks5Connection | SOCKS5连接处理类 |
| Xb1 | SocksStatus | SOCKS响应状态码枚举 |
| y6B | SocksCommand | SOCKS命令枚举 |

## 模块加载器模式 (Module Patterns)

| 模式 | 含义 | 示例 |
|------|------|------|
| L(() => {...}) | 懒加载模块 | 按需加载 |
| U((exports, module) => {...}) | CommonJS包装器 | 模块定义 |
| GA(module) | ESM导入 | import |
| pG(obj, key) | ESM导出绑定 | export |

## Bash命令处理 (Bash Command Processing)

| 混淆名 | 原始含义 | 说明 |
|--------|----------|------|
| id1 | hasHeredoc | 检查命令是否包含heredoc |
| eM6 | hasMultilineString | 检查多行字符串 |
| AO6 | hasInputRedirect | 检查输入重定向 |
| M8 | shellEscape | Shell转义工具 |
| IW | tokenize | 命令分词器 |

## 如何使用此映射表

1. 在阅读混淆代码时，遇到不明变量名先查此表
2. 注释版代码(`annotated/`)已包含内联注释
3. 变量名索引在每个文件头部列出

## 分析方法说明

这些变量名映射是通过以下方法确定的：

1. **字符串常量分析**: `var D9 = "Bash"` 直接显示值
2. **函数返回值分析**: 函数返回的字符串揭示用途
3. **API调用上下文**: 使用位置暗示变量类型
4. **TypeScript定义文件**: sdk-tools.d.ts提供接口定义
5. **模块依赖关系**: import/export结构揭示模块边界

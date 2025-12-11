# Claude Code 反编译项目 - 后续步骤指南

## 当前进度

### 统计数据
| 指标 | 数值 |
|-----|------|
| 总映射数 | 687 |
| 实际替换 | 626 |
| 未识别函数 | ~8,400 |
| 代码总行数 | ~450,000 |

### 已完成模块
- [x] 工具名称常量 (Bash, Read, Write, Grep, etc.)
- [x] 模型常量 (Sonnet, Haiku, Opus)
- [x] 系统提示相关
- [x] Git 操作模块
- [x] OAuth/认证系统
- [x] MCP 协议配置
- [x] AWS STS 客户端
- [x] Zod 验证库类型
- [x] React 核心模块
- [x] 错误处理类
- [x] Lodash 内部实现 (LLM 推断)

---

## 后续步骤

### 1. 扩展 LLM 推断范围

当前 LLM 只分析了前 50 个函数，可以增加分析范围：

```bash
# 修改 src/index.js 中的配置
llmMaxFunctions: 200  # 增加到 200 或更多

# 或者直接修改 LLMInferrer.js
this.options.maxFunctions = 200;
```

**注意**: 增加分析数量会增加 API 调用次数和成本。

### 2. 优先分析的核心模块

#### 2.1 消息处理模块 (高优先级)
```javascript
// 搜索关键词
grep -n "message|content|assistant|user" cli.readable.js
```
- API 消息构建
- 流式响应处理
- 内容块解析

#### 2.2 权限系统 (高优先级)
```javascript
// 搜索关键词
grep -n "permission|allow|deny|approve" cli.readable.js
```
- 工具权限控制
- 文件访问规则
- 用户授权流程

#### 2.3 Agent 执行引擎 (中优先级)
```javascript
// 搜索关键词
grep -n "agent|subagent|spawn|execute" cli.readable.js
```
- 子代理创建
- 任务分发
- 结果收集

#### 2.4 Ink UI 组件 (中优先级)
```javascript
// 搜索关键词
grep -n "render|Box|Text|Spinner" cli.readable.js
```
- 终端渲染
- 用户交互
- 进度显示

#### 2.5 文件操作模块 (低优先级)
```javascript
// 搜索关键词
grep -n "readFile|writeFile|glob|grep" cli.readable.js
```
- 文件读写
- 目录遍历
- 内容搜索

### 3. 手动分析流程

```bash
# 1. 搜索特定模块
cd tools/deobfuscator
grep -n "关键词" output/cli.readable.js | head -50

# 2. 读取上下文 (使用行号)
sed -n '12345,12445p' output/cli.readable.js

# 3. 添加映射到 data/existing-mappings.json
{
  "original": "xyz",
  "readable": "functionName",
  "confidence": 0.9,
  "source": "manual-analysis"
}

# 4. 重新运行工具
node src/index.js
```

### 4. 验证映射质量

```bash
# 检查输出中的替换效果
grep -n "functionName" output/cli.readable.js

# 确保没有误替换
grep -C3 "functionName" output/cli.readable.js | head -30
```

---

## 工具使用

### 基本运行
```bash
cd tools/deobfuscator
node src/index.js                    # 基本模式
node src/index.js --llm              # 启用 LLM 推断
node src/index.js --verbose          # 详细输出
node src/index.js /path/to/file.js   # 指定输入文件
```

### 输出文件
- `output/cli.readable.js` - 转换后的可读代码
- `output/mappings.json` - 完整映射表
- `output/MAPPINGS.md` - Markdown 格式映射表

### 映射文件格式
```json
{
  "original": "混淆名",
  "readable": "可读名",
  "confidence": 0.9,
  "source": "来源",
  "context": "上下文说明"
}
```

---

## 技术细节

### 混淆特征
- esbuild 打包压缩
- 短变量名 (1-3 字符)
- 函数名模式: `[a-zA-Z][a-zA-Z0-9]{0,2}`
- 常量内联

### 识别策略
1. **字符串匹配** - 工具名、错误消息
2. **模式识别** - React 组件、类结构
3. **数据流分析** - 变量使用追踪
4. **LLM 推断** - 上下文语义理解

### 已知限制
- 单字符变量跳过替换 (避免误替换)
- 字符串内容不替换
- 部分动态生成的名称无法识别

---

## 参考资源

- 项目仓库: https://github.com/majiayu000/open-claude-code
- Claude Code 官方: https://docs.claude.com/s/claude-code
- Anthropic API: https://docs.anthropic.com

---

## 贡献指南

1. Fork 项目
2. 添加新映射到 `data/existing-mappings.json`
3. 运行工具验证
4. 提交 PR

映射命名规范:
- 函数: `camelCase` (如 `getUserConfig`)
- 常量: `UPPER_SNAKE_CASE` (如 `MAX_TIMEOUT`)
- 类: `PascalCase` (如 `AuthenticationManager`)
- React 类型: `REACT_XXX_TYPE`
- Zod 类型: `ZodXxx`

---

*最后更新: 2025-12-11*

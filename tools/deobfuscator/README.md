# Claude Code 混淆代码自动还原工具

将 Claude Code CLI 的混淆代码还原为可读版本。

## 功能

1. **静态分析** - 基于字符串常量推断变量名
2. **模式识别** - 识别函数返回值、React组件等模式
3. **数据流分析** - 追踪变量使用位置
4. **LLM 推断** - 使用 Claude SDK 进行智能分析

## 安装

```bash
cd tools/deobfuscator
npm install
```

## 使用方法

### 基础模式 (不使用 LLM)

```bash
# 使用默认输入文件
node src/index.js

# 指定输入文件
node src/index.js /path/to/cli.js
```

### LLM 增强模式

需要设置 `ANTHROPIC_API_KEY` 环境变量：

```bash
export ANTHROPIC_API_KEY=your-api-key

# 启用 LLM 推断
node src/index.js --llm

# 或使用 npm script
npm run analyze:llm
```

### 选项

| 选项 | 说明 |
|------|------|
| `--llm` | 启用 LLM 智能推断 |
| `--verbose` | 显示详细输出 |
| `--help` | 显示帮助信息 |

## 输出

工具会在 `output/` 目录生成：

- `cli.readable.js` - 还原后的可读代码
- `mappings.json` - 变量映射表 (JSON)
- `MAPPINGS.md` - 变量映射表 (Markdown)

## 还原效果

| 模式 | 映射数 | 可读性 |
|------|--------|--------|
| 基础模式 | ~270 | ~70% |
| LLM 模式 | ~400+ | ~85% |

## 架构

```
src/
├── index.js                  # 主入口
├── analyzer/
│   ├── StaticAnalyzer.js     # 静态分析器
│   ├── PatternRecognizer.js  # 模式识别器
│   └── DataFlowAnalyzer.js   # 数据流分析器
├── inferrer/
│   └── LLMInferrer.js        # LLM 推断器 (Claude SDK)
├── transformer/
│   └── CodeTransformer.js    # 代码转换器
└── utils/
    └── MappingManager.js     # 映射管理器
```

## 扩展

### 添加新的变量映射

编辑 `data/existing-mappings.json`：

```json
[
  {"original": "xyz", "readable": "myVariable", "confidence": 1.0, "source": "manual"}
]
```

### 添加新的识别规则

编辑 `src/analyzer/StaticAnalyzer.js` 中的 `stringMappingRules`。

## 示例输出

**替换前:**
```javascript
var D9 = "Bash";
if (A.name === D9) { ... }
```

**替换后:**
```javascript
var BASH_TOOL_NAME = "Bash";
if (A.name === BASH_TOOL_NAME) { ... }
```

## 许可

仅用于学习和研究目的。

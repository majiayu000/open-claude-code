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

## 一键执行方案 (推荐)

### 快速开始

```bash
# 1. 设置 API Key
export ANTHROPIC_API_KEY='your-api-key'

# 2. 一键执行完整分析
./scripts/run-all.sh

# 或者只执行静态分析 (不需要 API Key)
./scripts/run-all.sh --no-llm
```

### 执行模式

| 模式 | 命令 | 说明 |
|------|------|------|
| 完整模式 | `./scripts/run-all.sh` | 执行所有分析步骤 |
| 快速模式 | `./scripts/run-all.sh --fast` | 限制 LLM 分析数量 |
| 静态分析 | `./scripts/run-all.sh --no-llm` | 只执行静态分析 |
| 断点恢复 | `./scripts/run-all.sh --resume` | 从上次中断处继续 |
| 仅验证 | `./scripts/run-all.sh --validate` | 只执行验证步骤 |

### 输出文件

执行完成后，以下文件将被生成/更新：

```
decompiled/readable/
├── cli.readable.js          # 可读代码 (变量已替换)
├── VARIABLE_MAPPING.json    # JSON 格式映射表
├── VARIABLE_MAPPING.md      # Markdown 格式映射表
├── ANALYSIS_REPORT.md       # 详细分析报告
└── VALIDATION_REPORT.md     # 验证结果报告
```

---

## 自动化流水线架构

### 流程图

```
┌─────────────────────────────────────────────────────────────┐
│                    完整流水线架构                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [1] 加载已有映射                                            │
│       │                                                     │
│       ▼                                                     │
│  [2] 静态分析 ─────────────────────────────────────────┐    │
│       │  • 字符串常量匹配                              │    │
│       │  • 数值常量匹配                                │    │
│       ▼                                               │    │
│  [3] 模式识别 ─────────────────────────────────────────┤    │
│       │  • React 组件模式                              │    │
│       │  • 错误类模式                                  │    │
│       │  • Getter 函数模式                             │    │
│       ▼                                               │    │
│  [4] LLM 推断 (可选) ──────────────────────────────────┤    │
│       │  • 批量并行处理                                │    │
│       │  • 断点续传支持                                │    │
│       │  • 优先级队列                                  │    │
│       ▼                                               │    │
│  [5] 代码转换 ◄───────────────────────────────────────┘    │
│       │  • 变量替换                                         │
│       │  • 安全检查                                         │
│       ▼                                                     │
│  [6] 质量验证                                               │
│       │  • 语法检查                                         │
│       │  • 冲突检测                                         │
│       │  • 一致性验证                                       │
│       ▼                                                     │
│  [7] 报告生成                                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 脚本文件说明

| 文件 | 说明 |
|------|------|
| `scripts/run-all.sh` | 一键执行入口脚本 |
| `scripts/full-pipeline.js` | 主流水线逻辑 |
| `scripts/pipeline.config.js` | 配置文件 (可自定义) |
| `scripts/validate-mappings.js` | 验证工具 |

---

## 配置自定义

编辑 `scripts/pipeline.config.js` 可调整：

### LLM 推断配置

```javascript
llmInference: {
  enabled: true,
  model: 'claude-sonnet-4-5-20250929',
  batchSize: 10,           // 每批分析的函数数
  maxConcurrent: 3,        // 最大并发请求
  maxFunctions: 8500,      // 最大分析函数数
  minConfidence: 0.6,      // 置信度阈值
  checkpointInterval: 100, // 断点保存间隔
}
```

### 优先级模块

高优先级模块将优先被 LLM 分析：

```javascript
priorityModules: [
  { pattern: /message|content|stream/, priority: 1 },  // 消息处理
  { pattern: /permission|allow|deny/, priority: 1 },   // 权限系统
  { pattern: /agent|subagent|spawn/, priority: 2 },    // Agent 引擎
  { pattern: /render|Box|Text|Ink/, priority: 2 },     // UI 组件
  { pattern: /auth|oauth|token/, priority: 3 },        // 认证
  { pattern: /file|read|write|glob/, priority: 4 },    // 文件操作
]
```

---

## 手动分析流程

如果需要手动补充映射：

### 1. 搜索特定模块

```bash
cd tools/deobfuscator
grep -n "关键词" output/cli.readable.js | head -50
```

### 2. 读取上下文

```bash
sed -n '12345,12445p' output/cli.readable.js
```

### 3. 添加映射

编辑 `tools/deobfuscator/data/existing-mappings.json`:

```json
{
  "original": "xyz",
  "readable": "functionName",
  "confidence": 0.9,
  "source": "manual-analysis"
}
```

### 4. 重新运行

```bash
./scripts/run-all.sh
```

---

## 验证映射质量

```bash
# 运行验证工具
node scripts/validate-mappings.js

# 严格模式 (警告也视为失败)
node scripts/validate-mappings.js --strict
```

验证检查项：
- 重复映射检测
- 命名规范检查
- JavaScript 保留字检查
- 置信度分布分析
- 语法正确性验证
- 替换一致性检查

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

## 估算

### 完整执行时间

| 模式 | 预计时间 | API 调用 |
|------|----------|----------|
| 静态分析 | ~2 分钟 | 0 |
| 快速模式 | ~10 分钟 | ~10 |
| 完整模式 | ~60-90 分钟 | ~850 |

### API 成本估算 (完整模式)

- 每批 10 个函数
- 约 850 次 API 调用
- 预计成本: $5-15 (取决于模型和响应长度)

---

## 参考资源

- 项目仓库: https://github.com/majiayu000/open-claude-code
- Claude Code 官方: https://docs.claude.com/s/claude-code
- Anthropic API: https://docs.anthropic.com

---

## 贡献指南

1. Fork 项目
2. 添加新映射到 `data/existing-mappings.json`
3. 运行工具验证: `./scripts/run-all.sh --validate`
4. 提交 PR

映射命名规范:
- 函数: `camelCase` (如 `getUserConfig`)
- 常量: `UPPER_SNAKE_CASE` (如 `MAX_TIMEOUT`)
- 类: `PascalCase` (如 `AuthenticationManager`)
- React 类型: `REACT_XXX_TYPE`
- Zod 类型: `ZodXxx`

---

*最后更新: 2025-12-11*

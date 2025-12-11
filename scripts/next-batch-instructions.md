# Claude Code 并行分析指令

复制以下内容到 Claude Code 中执行:

```
请并行启动以下分析任务:

## 任务 1
分析函数: FFQ, VFQ, KFQ, HFQ, zFQ

## 任务 2
分析函数: lK, Sg0, yg0, Kp1, jFQ

## 任务 3
分析函数: kg0, Ip1, Zp1, wQ1, Hp1

## 任务 4
分析函数: SFQ, fh, hh, yFQ, kFQ

## 任务 5
分析函数: YK1, Qi, OVQ, Zi, _p1

```

## 详细指令

使用 Task 工具并行分析以下批次:

### 批次 1
```
你是 JavaScript 代码分析专家。分析以下 Claude Code CLI 中的混淆函数，推断它们的原始名称。

代码文件: /Users/lifcc/Desktop/code/AI/agent/open-claude-code/decompiled/v2.0.62/cli.formatted.js

## 待分析函数 (批次 1)
- FFQ
- VFQ
- KFQ
- HFQ
- zFQ

## 分析步骤
1. 使用 Grep 搜索每个函数的定义和使用
2. 分析函数体、参数、返回值
3. 查看调用上下文推断功能

## 输出格式
只输出 JSON 数组，不要其他内容:
[
  {"original": "函数名", "inferred": "推断名", "confidence": 0.9, "reason": "推断理由"}
]
```

### 批次 2
```
你是 JavaScript 代码分析专家。分析以下 Claude Code CLI 中的混淆函数，推断它们的原始名称。

代码文件: /Users/lifcc/Desktop/code/AI/agent/open-claude-code/decompiled/v2.0.62/cli.formatted.js

## 待分析函数 (批次 2)
- lK
- Sg0
- yg0
- Kp1
- jFQ

## 分析步骤
1. 使用 Grep 搜索每个函数的定义和使用
2. 分析函数体、参数、返回值
3. 查看调用上下文推断功能

## 输出格式
只输出 JSON 数组，不要其他内容:
[
  {"original": "函数名", "inferred": "推断名", "confidence": 0.9, "reason": "推断理由"}
]
```

### 批次 3
```
你是 JavaScript 代码分析专家。分析以下 Claude Code CLI 中的混淆函数，推断它们的原始名称。

代码文件: /Users/lifcc/Desktop/code/AI/agent/open-claude-code/decompiled/v2.0.62/cli.formatted.js

## 待分析函数 (批次 3)
- kg0
- Ip1
- Zp1
- wQ1
- Hp1

## 分析步骤
1. 使用 Grep 搜索每个函数的定义和使用
2. 分析函数体、参数、返回值
3. 查看调用上下文推断功能

## 输出格式
只输出 JSON 数组，不要其他内容:
[
  {"original": "函数名", "inferred": "推断名", "confidence": 0.9, "reason": "推断理由"}
]
```

### 批次 4
```
你是 JavaScript 代码分析专家。分析以下 Claude Code CLI 中的混淆函数，推断它们的原始名称。

代码文件: /Users/lifcc/Desktop/code/AI/agent/open-claude-code/decompiled/v2.0.62/cli.formatted.js

## 待分析函数 (批次 4)
- SFQ
- fh
- hh
- yFQ
- kFQ

## 分析步骤
1. 使用 Grep 搜索每个函数的定义和使用
2. 分析函数体、参数、返回值
3. 查看调用上下文推断功能

## 输出格式
只输出 JSON 数组，不要其他内容:
[
  {"original": "函数名", "inferred": "推断名", "confidence": 0.9, "reason": "推断理由"}
]
```

### 批次 5
```
你是 JavaScript 代码分析专家。分析以下 Claude Code CLI 中的混淆函数，推断它们的原始名称。

代码文件: /Users/lifcc/Desktop/code/AI/agent/open-claude-code/decompiled/v2.0.62/cli.formatted.js

## 待分析函数 (批次 5)
- YK1
- Qi
- OVQ
- Zi
- _p1

## 分析步骤
1. 使用 Grep 搜索每个函数的定义和使用
2. 分析函数体、参数、返回值
3. 查看调用上下文推断功能

## 输出格式
只输出 JSON 数组，不要其他内容:
[
  {"original": "函数名", "inferred": "推断名", "confidence": 0.9, "reason": "推断理由"}
]
```

/**
 * Claude Code 反混淆自动化流水线配置
 *
 * 一次性完整执行所有分析步骤的配置文件
 */

export const config = {
  // ==================== 输入输出路径 ====================
  paths: {
    // 输入文件
    inputFile: '../decompiled/cli.formatted.js',

    // 输出目录
    outputDir: '../decompiled/readable',

    // 中间状态保存目录 (用于断点续传)
    checkpointDir: '../.pipeline-checkpoints',

    // 已有映射文件
    existingMappings: '../tools/deobfuscator/data/existing-mappings.json',

    // 最终映射输出
    finalMappings: '../decompiled/readable/VARIABLE_MAPPING.json',
  },

  // ==================== 静态分析配置 ====================
  staticAnalysis: {
    enabled: true,

    // 字符串常量映射规则
    stringPatterns: {
      // 工具名 (高置信度)
      tools: [
        { value: 'Bash', name: 'BASH_TOOL_NAME', confidence: 0.99 },
        { value: 'Read', name: 'READ_TOOL_NAME', confidence: 0.99 },
        { value: 'Write', name: 'WRITE_TOOL_NAME', confidence: 0.99 },
        { value: 'Edit', name: 'EDIT_TOOL_NAME', confidence: 0.99 },
        { value: 'MultiEdit', name: 'MULTI_EDIT_TOOL_NAME', confidence: 0.99 },
        { value: 'Glob', name: 'GLOB_TOOL_NAME', confidence: 0.99 },
        { value: 'Grep', name: 'GREP_TOOL_NAME', confidence: 0.99 },
        { value: 'Task', name: 'TASK_TOOL_NAME', confidence: 0.99 },
        { value: 'WebFetch', name: 'WEB_FETCH_TOOL_NAME', confidence: 0.99 },
        { value: 'WebSearch', name: 'WEB_SEARCH_TOOL_NAME', confidence: 0.99 },
        { value: 'NotebookEdit', name: 'NOTEBOOK_EDIT_TOOL_NAME', confidence: 0.99 },
        { value: 'TodoWrite', name: 'TODO_WRITE_TOOL_NAME', confidence: 0.99 },
        { value: 'AskUserQuestion', name: 'ASK_USER_QUESTION_TOOL_NAME', confidence: 0.99 },
        { value: 'SlashCommand', name: 'SLASH_COMMAND_TOOL_NAME', confidence: 0.99 },
        { value: 'Skill', name: 'SKILL_TOOL_NAME', confidence: 0.99 },
        { value: 'EnterPlanMode', name: 'ENTER_PLAN_MODE_TOOL_NAME', confidence: 0.99 },
        { value: 'ExitPlanMode', name: 'EXIT_PLAN_MODE_TOOL_NAME', confidence: 0.99 },
        { value: 'KillShell', name: 'KILL_SHELL_TOOL_NAME', confidence: 0.99 },
        { value: 'TaskOutput', name: 'TASK_OUTPUT_TOOL_NAME', confidence: 0.99 },
      ],

      // 模型名
      models: [
        { value: 'claude-opus-4-5-20251101', name: 'MODEL_OPUS_ID', confidence: 0.99 },
        { value: 'claude-sonnet-4-5-20250929', name: 'MODEL_SONNET_ID', confidence: 0.99 },
        { value: 'claude-haiku-4-5-20251001', name: 'MODEL_HAIKU_ID', confidence: 0.99 },
        { value: 'sonnet', name: 'MODEL_ALIAS_SONNET', confidence: 0.95 },
        { value: 'opus', name: 'MODEL_ALIAS_OPUS', confidence: 0.95 },
        { value: 'haiku', name: 'MODEL_ALIAS_HAIKU', confidence: 0.95 },
      ],

      // API 提供商
      providers: [
        { value: 'anthropic', name: 'PROVIDER_ANTHROPIC', confidence: 0.95 },
        { value: 'bedrock', name: 'PROVIDER_BEDROCK', confidence: 0.95 },
        { value: 'vertex', name: 'PROVIDER_VERTEX', confidence: 0.95 },
        { value: 'foundry', name: 'PROVIDER_FOUNDRY', confidence: 0.95 },
      ],

      // Agent 类型
      agents: [
        { value: 'general-purpose', name: 'AGENT_TYPE_GENERAL', confidence: 0.95 },
        { value: 'Explore', name: 'AGENT_TYPE_EXPLORE', confidence: 0.95 },
        { value: 'Plan', name: 'AGENT_TYPE_PLAN', confidence: 0.95 },
        { value: 'claude-code-guide', name: 'AGENT_TYPE_GUIDE', confidence: 0.95 },
      ],
    },

    // 数值常量映射
    numberPatterns: [
      { value: 180000, name: 'MAX_INPUT_TOKENS', confidence: 0.95 },
      { value: 40000, name: 'TARGET_INPUT_TOKENS', confidence: 0.95 },
      { value: 600000, name: 'MAX_TIMEOUT_MS', confidence: 0.95 },
      { value: 120000, name: 'DEFAULT_TIMEOUT_MS', confidence: 0.95 },
      { value: 30000, name: 'MAX_OUTPUT_LENGTH', confidence: 0.95 },
      { value: 2000, name: 'DEFAULT_READ_LINES', confidence: 0.90 },
    ],
  },

  // ==================== 模式识别配置 ====================
  patternRecognition: {
    enabled: true,

    patterns: [
      // React 组件模式: function Xxx() { return createElement... }
      {
        name: 'react-component',
        regex: /function\s+([A-Z][a-zA-Z0-9]*)\s*\([^)]*\)\s*\{[^}]*createElement/,
        nameTransform: (match) => `${match}Component`,
        confidence: 0.85,
      },

      // React Hook 模式: function useXxx()
      {
        name: 'react-hook',
        regex: /function\s+(use[A-Z][a-zA-Z0-9]*)\s*\(/,
        nameTransform: (match) => match,
        confidence: 0.90,
      },

      // 错误类模式: class XxxError extends Error
      {
        name: 'error-class',
        regex: /class\s+([a-zA-Z]+)\s+extends\s+Error/,
        nameTransform: (match) => `${match}Error`,
        confidence: 0.90,
      },

      // Getter 函数模式: function xxx() { return "constantValue" }
      {
        name: 'getter-function',
        regex: /function\s+([a-zA-Z_$][\w$]*)\s*\(\)\s*\{\s*return\s+"([^"]+)"/,
        nameTransform: (match, value) => `get${value.replace(/[^a-zA-Z]/g, '')}`,
        confidence: 0.80,
      },
    ],
  },

  // ==================== LLM 推断配置 ====================
  llmInference: {
    enabled: true,

    // API 配置
    model: 'claude-sonnet-4-5-20250929',

    // 批处理配置
    batchSize: 10,           // 每批分析的函数数
    maxConcurrent: 3,        // 最大并发请求数

    // 函数分析限制
    maxFunctions: 8500,      // 最大分析函数数 (覆盖全部)
    minFunctionLength: 50,   // 最小函数体长度 (过滤简单函数)
    maxContextLines: 30,     // 每个函数的上下文行数

    // 优先级队列 (按模块优先级排序)
    priorityModules: [
      { pattern: /message|content|stream/, priority: 1 },
      { pattern: /permission|allow|deny/, priority: 1 },
      { pattern: /agent|subagent|spawn/, priority: 2 },
      { pattern: /render|Box|Text|Ink/, priority: 2 },
      { pattern: /auth|oauth|token/, priority: 3 },
      { pattern: /file|read|write|glob/, priority: 4 },
    ],

    // 置信度阈值
    minConfidence: 0.6,      // 低于此值的推断将被丢弃

    // 重试配置
    maxRetries: 3,
    retryDelay: 1000,        // ms

    // 断点续传
    checkpointInterval: 100, // 每处理100个函数保存一次
  },

  // ==================== 代码转换配置 ====================
  codeTransform: {
    // 替换策略
    replaceStrategy: 'safe',  // 'safe' | 'aggressive'

    // 跳过规则
    skipPatterns: [
      /^[a-zA-Z]$/,          // 单字符变量
      /^[A-Z]{1,2}$/,        // 1-2字符大写变量 (可能是常用缩写)
      /^_+$/,                // 纯下划线
    ],

    // 保护区域 (不进行替换的代码区域)
    protectedRegions: [
      { start: /["'`]/, end: /["'`]/ },  // 字符串内容
      { start: /\/\//, end: /\n/ },       // 单行注释
      { start: /\/\*/, end: /\*\// },     // 多行注释
    ],
  },

  // ==================== 验证配置 ====================
  validation: {
    enabled: true,

    // 语法验证 (确保转换后代码仍然有效)
    syntaxCheck: true,

    // 映射冲突检测
    conflictCheck: true,

    // 交叉验证 (同一变量在不同上下文的推断是否一致)
    crossValidation: true,

    // 输出详细报告
    detailedReport: true,
  },

  // ==================== 执行控制 ====================
  execution: {
    // 执行模式
    mode: 'full',            // 'full' | 'incremental' | 'validate-only'

    // 日志级别
    logLevel: 'info',        // 'debug' | 'info' | 'warn' | 'error'

    // 是否显示进度条
    showProgress: true,

    // 完成后生成报告
    generateReport: true,

    // 自动应用到 readable/ 目录
    autoApply: true,
  },
};

export default config;

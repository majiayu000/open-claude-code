/**
 * Claude Code v2.0.62 - 配置类型定义
 *
 * 这些类型定义是从反编译代码中推断出来的
 */

// ==================== 环境变量 ====================
export interface ClaudeCodeEnvVars {
  // API 配置
  ANTHROPIC_API_KEY?: string;
  CLAUDE_API_KEY?: string;
  ANTHROPIC_BASE_URL?: string;
  ANTHROPIC_MODEL?: string;
  ANTHROPIC_DEFAULT_SONNET_MODEL?: string;
  ANTHROPIC_DEFAULT_OPUS_MODEL?: string;
  ANTHROPIC_DEFAULT_HAIKU_MODEL?: string;
  ANTHROPIC_SMALL_FAST_MODEL?: string;
  ANTHROPIC_BETAS?: string;
  ANTHROPIC_CUSTOM_HEADERS?: string;

  // AWS Bedrock
  ANTHROPIC_BEDROCK_BASE_URL?: string;
  AWS_REGION?: string;
  AWS_DEFAULT_REGION?: string;
  AWS_PROFILE?: string;
  AWS_ACCESS_KEY_ID?: string;
  AWS_SECRET_ACCESS_KEY?: string;
  AWS_SESSION_TOKEN?: string;
  AWS_BEARER_TOKEN_BEDROCK?: string;
  ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION?: string;

  // Google Vertex
  ANTHROPIC_VERTEX_PROJECT_ID?: string;
  CLOUD_ML_REGION?: string;

  // Azure Foundry
  ANTHROPIC_FOUNDRY_API_KEY?: string;
  ANTHROPIC_FOUNDRY_BASE_URL?: string;
  ANTHROPIC_FOUNDRY_RESOURCE?: string;
  AZURE_CLIENT_ID?: string;
  AZURE_CLIENT_SECRET?: string;
  AZURE_TENANT_ID?: string;

  // Claude Code 功能开关
  CLAUDE_CODE_USE_BEDROCK?: string;
  CLAUDE_CODE_SKIP_BEDROCK_AUTH?: string;
  CLAUDE_CODE_REMOTE?: string;
  CLAUDE_CODE_BUBBLEWRAP?: string;
  CLAUDE_CODE_AUTO_CONNECT_IDE?: string;
  CLAUDE_CODE_DISABLE_ATTACHMENTS?: string;
  CLAUDE_CODE_DISABLE_CLAUDE_MDS?: string;
  CLAUDE_CODE_DISABLE_COMMAND_INJECTION_CHECK?: string;
  CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS?: string;
  CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY?: string;
  CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING?: string;
  CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC?: string;
  CLAUDE_CODE_DISABLE_TERMINAL_TITLE?: string;

  // Bash 配置
  CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR?: string;
  CLAUDE_BASH_NO_LOGIN?: string;
  BASH_DEFAULT_TIMEOUT_MS?: string;
  BASH_MAX_TIMEOUT_MS?: string;
  BASH_MAX_OUTPUT_LENGTH?: string;

  // API 配置
  API_MAX_INPUT_TOKENS?: string;
  API_TARGET_INPUT_TOKENS?: string;
  API_TIMEOUT_MS?: string;

  // 调试
  CLAUDE_CODE_DEBUG?: string;
  CLAUDE_CODE_DEBUG_LOGS_DIR?: string;
  CLAUDE_CODE_DIAGNOSTICS_FILE?: string;
  OTEL_LOG_USER_PROMPTS?: string;

  // 其他
  CLAUDE_CODE_CONTAINER_ID?: string;
  CLAUDE_CODE_EFFORT_LEVEL?: string;
  CLAUDE_AUTOCOMPACT_PCT_OVERRIDE?: string;
}

// ==================== 设置 Schema ====================
export interface ClaudeCodeSettings {
  /** 允许的工具规则 */
  permissions?: PermissionSettings;

  /** API 配置 */
  api?: ApiSettings;

  /** Bash 配置 */
  bash?: BashSettings;

  /** MCP 服务器配置 */
  mcpServers?: Record<string, McpServerConfig>;

  /** 代理配置 */
  agents?: AgentSettings;

  /** UI 配置 */
  ui?: UiSettings;
}

export interface PermissionSettings {
  allow?: PermissionRule[];
  deny?: PermissionRule[];
}

export interface PermissionRule {
  /** 工具名 */
  tool?: string;
  /** 匹配模式 */
  matcher?: string;
}

export interface ApiSettings {
  /** 基础 URL */
  baseUrl?: string;
  /** 默认模型 */
  model?: string;
  /** 超时时间 */
  timeout?: number;
  /** 最大重试次数 */
  maxRetries?: number;
}

export interface BashSettings {
  /** 默认超时 */
  defaultTimeout?: number;
  /** 最大超时 */
  maxTimeout?: number;
  /** 最大输出长度 */
  maxOutputLength?: number;
  /** 是否维护工作目录 */
  maintainWorkingDir?: boolean;
  /** 是否使用登录 shell */
  noLogin?: boolean;
}

export interface McpServerConfig {
  /** 命令 */
  command: string;
  /** 参数 */
  args?: string[];
  /** 环境变量 */
  env?: Record<string, string>;
  /** 工作目录 */
  cwd?: string;
}

export interface AgentSettings {
  /** 默认子代理类型 */
  defaultSubagentType?: string;
  /** 是否允许 MCP 工具 */
  allowMcpToolsForSubagents?: boolean;
}

export interface UiSettings {
  /** 主题 */
  theme?: 'light' | 'dark' | 'system';
  /** 是否显示状态栏 */
  showStatusLine?: boolean;
  /** 终端标题 */
  terminalTitle?: boolean;
}

// ==================== 配置文件位置 ====================
export interface ConfigPaths {
  /** 全局配置 */
  global: string;
  /** 用户配置 */
  user: string;
  /** 项目配置 */
  project: string;
  /** 本地配置 */
  local: string;
}

// ==================== OAuth 配置 ====================
export interface OAuthConfig {
  /** 客户端 ID */
  clientId: string;
  /** 授权 URL */
  authorizeUrl: string;
  /** Token URL */
  tokenUrl: string;
  /** 重定向 URI */
  redirectUri: string;
  /** Scope */
  scope: string[];
}

// ==================== 功能标志 ====================
export interface FeatureFlags {
  /** 是否启用 Web 搜索 */
  webSearchEnabled: boolean;
  /** 是否启用 PDF 支持 */
  pdfSupportEnabled: boolean;
  /** 是否启用多模态 */
  multimodalEnabled: boolean;
  /** 是否启用计划模式 */
  planModeEnabled: boolean;
  /** 是否启用技能 */
  skillsEnabled: boolean;
}

// ==================== 遥测配置 ====================
export interface TelemetryConfig {
  /** Sentry DSN */
  sentryDsn: string;
  /** 是否启用 */
  enabled: boolean;
  /** 采样率 */
  sampleRate: number;
  /** 环境 */
  environment: 'production' | 'development';
}

// ==================== 常量 ====================
export const CONFIG_DEFAULTS = {
  MAX_INPUT_TOKENS: 180000,
  TARGET_INPUT_TOKENS: 40000,
  MAX_TIMEOUT_MS: 600000,
  DEFAULT_TIMEOUT_MS: 120000,
  MAX_OUTPUT_LENGTH: 30000,
  DEFAULT_READ_LINES: 2000,
  MAX_LINE_LENGTH: 2000,
} as const;

export const SETTINGS_SCHEMA_URL =
  'https://json.schemastore.org/claude-code-settings.json';

export const DOCS_MAP_URL =
  'https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md';

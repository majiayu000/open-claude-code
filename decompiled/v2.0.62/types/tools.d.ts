/**
 * Claude Code v2.0.62 - 工具类型定义
 *
 * 这些类型定义是从反编译代码中推断出来的
 */

// ==================== 工具名枚举 ====================
export type ToolName =
  | 'Bash'
  | 'Read'
  | 'Write'
  | 'Edit'
  | 'MultiEdit'
  | 'Glob'
  | 'Grep'
  | 'Task'
  | 'WebFetch'
  | 'WebSearch'
  | 'NotebookEdit'
  | 'TodoWrite'
  | 'AskUserQuestion'
  | 'SlashCommand'
  | 'Skill'
  | 'EnterPlanMode'
  | 'ExitPlanMode'
  | 'KillShell'
  | 'AgentOutputTool'
  | 'BashOutput';

// ==================== 权限行为 ====================
export type PermissionBehavior = 'allow' | 'deny' | 'ask' | 'passthrough';

export interface PermissionDecision {
  behavior: PermissionBehavior;
  updatedInput?: unknown;
  message?: string;
  decisionReason?: {
    type: 'rule' | 'mode';
    rule?: string;
    mode?: string;
  };
  suggestions?: string[];
}

// ==================== 基础工具接口 ====================
export interface Tool<TInput = unknown, TResult = unknown> {
  /** 工具名称 */
  name: ToolName;

  /** 获取工具描述 */
  description(options: { description?: string }): Promise<string>;

  /** 获取工具提示 */
  prompt(): Promise<string>;

  /** 输入参数的 Zod schema */
  inputSchema: unknown;

  /** 用户可见的工具名称 */
  userFacingName(input?: TInput): string;

  /** 工具是否启用 */
  isEnabled(): boolean;

  /** 是否支持并发 */
  isConcurrencySafe(input?: TInput): boolean;

  /** 是否为只读操作 */
  isReadOnly(input?: TInput): boolean;

  /** 检查权限 */
  checkPermissions(input: TInput, context: AppContext): Promise<PermissionDecision>;

  /** 渲染工具使用消息 */
  renderToolUseMessage(input: TInput, options: RenderOptions): React.ReactNode;

  /** 渲染工具被拒绝消息 */
  renderToolUseRejectedMessage?(input: TInput, options: RenderOptions): React.ReactNode;

  /** 渲染工具进度消息 */
  renderToolUseProgressMessage?(input: TInput, options: RenderOptions): React.ReactNode;

  /** 渲染工具排队消息 */
  renderToolUseQueuedMessage?(input: TInput, options: RenderOptions): React.ReactNode;

  /** 渲染工具结果消息 */
  renderToolResultMessage?(result: TResult, options: RenderOptions): React.ReactNode;

  /** 渲染工具错误消息 */
  renderToolUseErrorMessage?(error: Error, options: RenderOptions): React.ReactNode;

  /** 将结果映射为工具结果块 */
  mapToolResultToToolResultBlockParam?(
    result: TResult,
    toolUseId: string,
  ): ToolResultBlockParam;
}

// ==================== Bash 工具 ====================
export interface BashToolInput {
  /** 要执行的命令 */
  command: string;
  /** 命令描述 */
  description?: string;
  /** 超时时间(毫秒) */
  timeout?: number;
  /** 是否在沙箱中运行 */
  sandbox?: boolean;
  /** 是否在后台运行 */
  run_in_background?: boolean;
  /** 危险地禁用沙箱 */
  dangerouslyDisableSandbox?: boolean;
}

export interface BashToolResult {
  stdout: string;
  stderr: string;
  interrupted: boolean;
  summary?: string;
  isImage?: boolean;
  backgroundTaskId?: string;
}

// ==================== Read 工具 ====================
export interface ReadToolInput {
  /** 文件路径(绝对路径) */
  file_path: string;
  /** 起始行偏移 */
  offset?: number;
  /** 读取行数限制 */
  limit?: number;
}

export interface ReadToolResult {
  content: string;
  lineCount: number;
  truncated: boolean;
}

// ==================== Write 工具 ====================
export interface WriteToolInput {
  /** 文件路径(绝对路径) */
  file_path: string;
  /** 文件内容 */
  content: string;
}

// ==================== Edit 工具 ====================
export interface EditToolInput {
  /** 文件路径(绝对路径) */
  file_path: string;
  /** 要替换的旧字符串 */
  old_string: string;
  /** 新字符串 */
  new_string: string;
  /** 是否替换所有匹配项 */
  replace_all?: boolean;
}

// ==================== MultiEdit 工具 ====================
export interface MultiEditOperation {
  old_string: string;
  new_string: string;
  replace_all?: boolean;
}

export interface MultiEditToolInput {
  /** 文件路径(绝对路径) */
  file_path: string;
  /** 编辑操作列表 */
  edits: MultiEditOperation[];
}

// ==================== Glob 工具 ====================
export interface GlobToolInput {
  /** glob 模式 */
  pattern: string;
  /** 搜索路径 */
  path?: string;
}

// ==================== Grep 工具 ====================
export type GrepOutputMode = 'content' | 'files_with_matches' | 'count';

export interface GrepToolInput {
  /** 搜索模式(正则表达式) */
  pattern: string;
  /** 搜索路径 */
  path?: string;
  /** glob 过滤器 */
  glob?: string;
  /** 文件类型 */
  type?: string;
  /** 输出模式 */
  output_mode?: GrepOutputMode;
  /** 大小写不敏感 */
  '-i'?: boolean;
  /** 显示行号 */
  '-n'?: boolean;
  /** 显示前N行 */
  '-B'?: number;
  /** 显示后N行 */
  '-A'?: number;
  /** 显示前后N行 */
  '-C'?: number;
  /** 多行匹配 */
  multiline?: boolean;
  /** 结果限制 */
  head_limit?: number;
  /** 跳过前N个结果 */
  offset?: number;
}

// ==================== Task 工具 ====================
export type SubagentType =
  | 'general-purpose'
  | 'Explore'
  | 'Plan'
  | 'claude-code-guide'
  | 'statusline-setup';

export interface TaskToolInput {
  /** 任务描述 */
  description: string;
  /** 任务提示 */
  prompt: string;
  /** 子代理类型 */
  subagent_type: SubagentType;
  /** 使用的模型 */
  model?: 'sonnet' | 'opus' | 'haiku';
  /** 是否在后台运行 */
  run_in_background?: boolean;
  /** 恢复的代理ID */
  resume?: string;
}

// ==================== WebFetch 工具 ====================
export interface WebFetchToolInput {
  /** URL */
  url: string;
  /** 处理提示 */
  prompt: string;
}

// ==================== WebSearch 工具 ====================
export interface WebSearchToolInput {
  /** 搜索查询 */
  query: string;
  /** 允许的域名 */
  allowed_domains?: string[];
  /** 禁止的域名 */
  blocked_domains?: string[];
}

// ==================== NotebookEdit 工具 ====================
export type NotebookEditMode = 'replace' | 'insert' | 'delete';
export type NotebookCellType = 'code' | 'markdown';

export interface NotebookEditToolInput {
  /** notebook 文件路径 */
  notebook_path: string;
  /** 新的单元格内容 */
  new_source: string;
  /** 单元格ID */
  cell_id?: string;
  /** 单元格类型 */
  cell_type?: NotebookCellType;
  /** 编辑模式 */
  edit_mode?: NotebookEditMode;
}

// ==================== TodoWrite 工具 ====================
export type TodoStatus = 'pending' | 'in_progress' | 'completed';

export interface TodoItem {
  /** 任务内容 */
  content: string;
  /** 任务状态 */
  status: TodoStatus;
  /** 进行中的显示形式 */
  activeForm: string;
}

export interface TodoWriteToolInput {
  /** 任务列表 */
  todos: TodoItem[];
}

// ==================== AskUserQuestion 工具 ====================
export interface QuestionOption {
  /** 选项标签 */
  label: string;
  /** 选项描述 */
  description: string;
}

export interface Question {
  /** 问题内容 */
  question: string;
  /** 问题标题 */
  header: string;
  /** 选项列表 */
  options: QuestionOption[];
  /** 是否多选 */
  multiSelect: boolean;
}

export interface AskUserQuestionToolInput {
  /** 问题列表 */
  questions: Question[];
  /** 用户回答 */
  answers?: Record<string, string>;
}

// ==================== SlashCommand 工具 ====================
export interface SlashCommandToolInput {
  /** 命令 */
  command: string;
}

// ==================== EnterPlanMode 工具 ====================
export interface EnterPlanModeToolInput {
  // 无参数
}

// ==================== ExitPlanMode 工具 ====================
export interface ExitPlanModeToolInput {
  /** 是否启动 swarm */
  launchSwarm?: boolean;
  /** 队友数量 */
  teammateCount?: number;
}

// ==================== KillShell 工具 ====================
export interface KillShellToolInput {
  /** shell ID */
  shell_id: string;
}

// ==================== BashOutput 工具 ====================
export interface BashOutputToolInput {
  /** bash ID */
  bash_id: string;
  /** 是否阻塞 */
  block?: boolean;
  /** 最大等待时间(秒) */
  wait_up_to?: number;
  /** 过滤正则 */
  filter?: string;
}

// ==================== AgentOutputTool 工具 ====================
export interface AgentOutputToolInput {
  /** 代理ID */
  agentId: string;
  /** 是否阻塞 */
  block?: boolean;
  /** 最大等待时间(秒) */
  wait_up_to?: number;
}

// ==================== 工具结果块 ====================
export interface ToolResultBlockParam {
  tool_use_id: string;
  type: 'tool_result';
  content: string | ContentBlock[];
  is_error?: boolean;
}

export interface ContentBlock {
  type: 'text' | 'image';
  text?: string;
  source?: {
    type: 'base64';
    media_type: string;
    data: string;
  };
}

// ==================== 渲染选项 ====================
export interface RenderOptions {
  verbose?: boolean;
  columns?: number;
}

// ==================== 应用上下文 ====================
export interface AppContext {
  getAppState(): Promise<AppState>;
}

export interface AppState {
  toolPermissionContext: ToolPermissionContext;
}

export interface ToolPermissionContext {
  mode: 'bypassPermissions' | 'normal';
}

// ==================== 配置常量 ====================
export interface ClaudeCodeConfig {
  /** 最大输入 token 数 */
  MAX_INPUT_TOKENS: 180000;
  /** 目标输入 token 数 */
  TARGET_INPUT_TOKENS: 40000;
  /** 最大超时时间(ms) */
  MAX_TIMEOUT_MS: 600000;
  /** 默认超时时间(ms) */
  DEFAULT_TIMEOUT_MS: 120000;
  /** 最大输出长度(字符) */
  MAX_OUTPUT_LENGTH: 30000;
  /** 默认读取行数 */
  DEFAULT_READ_LINES: 2000;
  /** 最大行长度 */
  MAX_LINE_LENGTH: 2000;
}

// ==================== 只读工具列表 ====================
export const READONLY_TOOLS: ToolName[] = [
  'Bash',
  'Glob',
  'Grep',
  'Read',
  'WebFetch',
  'WebSearch',
];

// ==================== 编辑工具列表 ====================
export const EDIT_TOOLS: ToolName[] = [
  'Edit',
  'MultiEdit',
  'Write',
  'NotebookEdit',
];

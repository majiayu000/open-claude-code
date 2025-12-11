/**
 * Claude Code v2.0.62 - 完整类型定义入口
 *
 * 从反编译代码中推断的完整 TypeScript 类型定义
 */

// 导出所有类型
export * from './tools';
export * from './api';
export * from './config';

// ==================== 主要入口类型 ====================

/**
 * Claude Code CLI 主配置
 */
export interface ClaudeCodeOptions {
  /** 工作目录 */
  cwd?: string;
  /** 是否详细输出 */
  verbose?: boolean;
  /** 初始提示 */
  prompt?: string;
  /** 是否非交互模式 */
  nonInteractive?: boolean;
  /** 模型选择 */
  model?: string;
  /** 是否绕过权限 */
  dangerouslySkipPermissions?: boolean;
  /** 输出格式 */
  outputFormat?: 'text' | 'json' | 'stream-json';
  /** 最大轮次 */
  maxTurns?: number;
  /** 系统提示覆盖 */
  systemPrompt?: string;
  /** 附加文件 */
  attachments?: string[];
  /** MCP 服务器配置 */
  mcpServers?: string;
  /** 是否恢复会话 */
  resume?: boolean;
  /** 会话 ID */
  sessionId?: string;
}

/**
 * 会话状态
 */
export interface SessionState {
  /** 会话 ID */
  id: string;
  /** 消息历史 */
  messages: import('./api').Message[];
  /** 当前工作目录 */
  cwd: string;
  /** 会话开始时间 */
  startTime: Date;
  /** 总 token 使用量 */
  totalTokens: {
    input: number;
    output: number;
  };
  /** 当前模型 */
  model: string;
  /** 是否在计划模式 */
  inPlanMode: boolean;
  /** 待办事项 */
  todos: import('./tools').TodoItem[];
}

/**
 * 代理类型配置
 */
export interface AgentConfig {
  /** 代理类型 */
  type: import('./tools').SubagentType;
  /** 可用工具 */
  tools: import('./tools').ToolName[];
  /** 系统提示 */
  systemPrompt: string;
  /** 模型 */
  model?: string;
  /** 描述 */
  description: string;
}

/**
 * 预定义的代理配置
 */
export const AGENT_CONFIGS: Record<import('./tools').SubagentType, AgentConfig>;

// ==================== UI 相关类型 ====================

/**
 * 终端 UI 状态
 */
export interface UIState {
  /** 是否正在加载 */
  loading: boolean;
  /** 当前状态消息 */
  statusMessage?: string;
  /** 错误消息 */
  error?: string;
  /** 输入缓冲区 */
  inputBuffer: string;
  /** 是否等待用户输入 */
  waitingForInput: boolean;
  /** 当前活动工具 */
  activeTool?: string;
}

/**
 * 渲染组件 Props
 */
export interface RenderProps {
  /** 会话状态 */
  session: SessionState;
  /** UI 状态 */
  ui: UIState;
  /** 事件处理器 */
  handlers: EventHandlers;
}

/**
 * 事件处理器
 */
export interface EventHandlers {
  /** 提交输入 */
  onSubmit: (input: string) => void;
  /** 取消操作 */
  onCancel: () => void;
  /** 清空屏幕 */
  onClear: () => void;
  /** 退出 */
  onExit: () => void;
}

// ==================== MCP 相关类型 ====================

/**
 * MCP 服务器状态
 */
export interface McpServerState {
  /** 服务器名称 */
  name: string;
  /** 连接状态 */
  status: 'connected' | 'disconnected' | 'error';
  /** 可用工具 */
  tools: McpTool[];
  /** 可用资源 */
  resources: McpResource[];
  /** 错误信息 */
  error?: string;
}

/**
 * MCP 工具
 */
export interface McpTool {
  name: string;
  description: string;
  inputSchema: import('./api').JsonSchema;
}

/**
 * MCP 资源
 */
export interface McpResource {
  uri: string;
  name: string;
  description?: string;
  mimeType?: string;
}

// ==================== Git 相关类型 ====================

/**
 * Git 仓库信息
 */
export interface GitRepoInfo {
  /** 是否是 git 仓库 */
  isGitRepo: boolean;
  /** 当前分支 */
  currentBranch?: string;
  /** 主分支 */
  mainBranch?: string;
  /** 远程 URL */
  remoteUrl?: string;
  /** 仓库根目录 */
  rootDir?: string;
  /** 仓库哈希 */
  repoHash?: string;
}

/**
 * Git 状态
 */
export interface GitStatus {
  /** 暂存的文件 */
  staged: string[];
  /** 未暂存的修改 */
  unstaged: string[];
  /** 未跟踪的文件 */
  untracked: string[];
  /** 是否有冲突 */
  hasConflicts: boolean;
  /** 落后提交数 */
  behind?: number;
  /** 领先提交数 */
  ahead?: number;
}

// ==================== 错误类型 ====================

/**
 * Claude Code 错误基类
 */
export class ClaudeCodeError extends Error {
  code: string;
  details?: Record<string, unknown>;
}

/**
 * 权限错误
 */
export class PermissionError extends ClaudeCodeError {
  tool: string;
  reason: string;
}

/**
 * 工具执行错误
 */
export class ToolExecutionError extends ClaudeCodeError {
  tool: string;
  input: unknown;
  output?: unknown;
}

/**
 * 配置错误
 */
export class ConfigurationError extends ClaudeCodeError {
  configPath?: string;
  invalidKey?: string;
}

// ==================== 版本信息 ====================

export const VERSION = '2.0.62';
export const SERVICE_NAME = 'claude-code';
export const SERVICE_VERSION = 'claude-code-20250219';

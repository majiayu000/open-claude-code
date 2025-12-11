/**
 * Claude Code v2.0.62 - API 类型定义
 *
 * 这些类型定义是从反编译代码中推断出来的
 */

// ==================== 模型名称 ====================
export type ModelName =
  | 'claude-opus-4-5-20251101'
  | 'claude-opus-4-1-20250805'
  | 'claude-opus-4-20250514'
  | 'claude-sonnet-4-5-20250929'
  | 'claude-sonnet-4-20250514'
  | 'claude-haiku-4-5-20251001';

export type ModelAlias = 'sonnet' | 'opus' | 'haiku';

// ==================== API 提供商 ====================
export type ApiProvider = 'anthropic' | 'bedrock' | 'vertex' | 'foundry';

// ==================== 消息类型 ====================
export type MessageRole = 'user' | 'assistant' | 'system';

export interface TextContent {
  type: 'text';
  text: string;
}

export interface ImageContent {
  type: 'image';
  source: {
    type: 'base64';
    media_type: string;
    data: string;
  };
}

export interface ToolUseContent {
  type: 'tool_use';
  id: string;
  name: string;
  input: Record<string, unknown>;
}

export interface ToolResultContent {
  type: 'tool_result';
  tool_use_id: string;
  content: string | ContentBlock[];
  is_error?: boolean;
}

export type ContentBlock = TextContent | ImageContent | ToolUseContent | ToolResultContent;

export interface Message {
  role: MessageRole;
  content: string | ContentBlock[];
}

// ==================== API 请求 ====================
export interface MessagesRequest {
  model: string;
  messages: Message[];
  max_tokens: number;
  system?: string | SystemBlock[];
  tools?: ToolDefinition[];
  tool_choice?: ToolChoice;
  stream?: boolean;
  metadata?: Record<string, unknown>;
  stop_sequences?: string[];
  temperature?: number;
  top_k?: number;
  top_p?: number;
}

export interface SystemBlock {
  type: 'text';
  text: string;
  cache_control?: {
    type: 'ephemeral';
  };
}

export interface ToolDefinition {
  name: string;
  description: string;
  input_schema: JsonSchema;
}

export interface JsonSchema {
  type: string;
  properties?: Record<string, JsonSchema>;
  required?: string[];
  additionalProperties?: boolean;
  items?: JsonSchema;
  description?: string;
  enum?: string[];
  default?: unknown;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}

export type ToolChoice =
  | { type: 'auto' }
  | { type: 'any' }
  | { type: 'none' }
  | { type: 'tool'; name: string };

// ==================== API 响应 ====================
export interface MessagesResponse {
  id: string;
  type: 'message';
  role: 'assistant';
  content: ContentBlock[];
  model: string;
  stop_reason: StopReason;
  stop_sequence?: string;
  usage: Usage;
}

export type StopReason = 'end_turn' | 'max_tokens' | 'stop_sequence' | 'tool_use';

export interface Usage {
  input_tokens: number;
  output_tokens: number;
  cache_creation_input_tokens?: number;
  cache_read_input_tokens?: number;
}

// ==================== 流式响应 ====================
export type StreamEvent =
  | MessageStartEvent
  | ContentBlockStartEvent
  | ContentBlockDeltaEvent
  | ContentBlockStopEvent
  | MessageDeltaEvent
  | MessageStopEvent
  | ErrorEvent
  | PingEvent;

export interface MessageStartEvent {
  type: 'message_start';
  message: Omit<MessagesResponse, 'content'> & { content: [] };
}

export interface ContentBlockStartEvent {
  type: 'content_block_start';
  index: number;
  content_block: ContentBlock;
}

export interface ContentBlockDeltaEvent {
  type: 'content_block_delta';
  index: number;
  delta: TextDelta | InputJsonDelta;
}

export interface TextDelta {
  type: 'text_delta';
  text: string;
}

export interface InputJsonDelta {
  type: 'input_json_delta';
  partial_json: string;
}

export interface ContentBlockStopEvent {
  type: 'content_block_stop';
  index: number;
}

export interface MessageDeltaEvent {
  type: 'message_delta';
  delta: {
    stop_reason: StopReason;
    stop_sequence?: string;
  };
  usage: {
    output_tokens: number;
  };
}

export interface MessageStopEvent {
  type: 'message_stop';
}

export interface ErrorEvent {
  type: 'error';
  error: {
    type: string;
    message: string;
  };
}

export interface PingEvent {
  type: 'ping';
}

// ==================== API 客户端配置 ====================
export interface ApiClientConfig {
  apiKey?: string;
  baseUrl?: string;
  defaultModel?: string;
  timeout?: number;
  maxRetries?: number;
  headers?: Record<string, string>;
}

export interface AnthropicClientConfig extends ApiClientConfig {
  provider: 'anthropic';
}

export interface BedrockClientConfig extends ApiClientConfig {
  provider: 'bedrock';
  region?: string;
  profile?: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
}

export interface VertexClientConfig extends ApiClientConfig {
  provider: 'vertex';
  projectId?: string;
  region?: string;
}

export interface FoundryClientConfig extends ApiClientConfig {
  provider: 'foundry';
  resource?: string;
}

export type ClientConfig =
  | AnthropicClientConfig
  | BedrockClientConfig
  | VertexClientConfig
  | FoundryClientConfig;

// ==================== API 错误 ====================
export class ApiError extends Error {
  status?: number;
  headers?: Record<string, string>;
  error?: {
    type: string;
    message: string;
  };
}

export class AuthenticationError extends ApiError {}
export class RateLimitError extends ApiError {}
export class InternalServerError extends ApiError {}
export class OverloadedError extends ApiError {}

// ==================== API 端点 ====================
export interface ApiEndpoints {
  messages: '/v1/messages';
  messagesBatches: '/v1/messages/batches';
  countTokens: '/v1/messages/count_tokens';
  complete: '/v1/complete';
  files: '/v1/files';
  models: '/v1/models';
}

// ==================== 配置常量 ====================
export const API_CONFIG = {
  ANTHROPIC_BASE_URL: 'https://api.anthropic.com',
  BEDROCK_VERSION: 'bedrock-2023-05-31',
  VERTEX_VERSION: 'vertex-2023-10-16',
  API_VERSION_DATE: '2025-06-18',
  SERVICE_VERSION: 'claude-code-20250219',
} as const;

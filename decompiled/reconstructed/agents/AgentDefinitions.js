/**
 * Claude Code - Agent Definitions
 *
 * Reconstructed from decompiled source.
 * Defines the sub-agents available via the Task tool.
 *
 * Original location: cli.js (tools_013.js)
 * Version: 2.0.57
 */

import { AGENT_BASE_PROMPT, EXPLORE_AGENT_PROMPT } from '../core/SystemPrompts.js';

// ============================================================================
// Agent Type Constants
// ============================================================================

export const AGENT_TYPES = {
  GENERAL_PURPOSE: 'general-purpose',
  CLAUDE_CODE_GUIDE: 'claude-code-guide',
  EXPLORE: 'Explore',
  PLAN: 'Plan',
  STATUSLINE_SETUP: 'statusline-setup',
};

// ============================================================================
// Agent Definitions
// ============================================================================

/**
 * General Purpose Agent
 * Used for complex, multi-step tasks that require research and code execution.
 */
export const GeneralPurposeAgent = {
  agentType: AGENT_TYPES.GENERAL_PURPOSE,
  name: 'General Purpose Agent',
  description: `General-purpose agent for researching complex questions, searching for code, and executing multi-step tasks. When you are searching for a keyword or file and are not confident that you will find the right match in the first few tries use this agent to perform the search for you.`,

  getSystemPrompt: () => AGENT_BASE_PROMPT,

  // Tools available to this agent
  availableTools: ['*'], // All tools

  // Model to use (inherits from parent if not specified)
  model: undefined,
};

/**
 * Claude Code Guide Agent
 * Specialized for answering questions about Claude Code features and documentation.
 */
export const ClaudeCodeGuideAgent = {
  agentType: AGENT_TYPES.CLAUDE_CODE_GUIDE,
  name: 'Claude Code Guide',
  description: `Use this agent when the user asks questions about Claude Code or the Claude Agent SDK. This includes questions about Claude Code features ("can Claude Code...", "does Claude Code have..."), how to use specific features (hooks, slash commands, MCP servers), and Claude Agent SDK architecture or development.

**IMPORTANT:** Before spawning a new agent, check if there is already a running or recently completed claude-code-guide agent that you can resume using the "resume" parameter.`,

  getSystemPrompt: () => AGENT_BASE_PROMPT,

  // Tools available to this agent
  availableTools: ['Glob', 'Grep', 'Read', 'WebFetch', 'WebSearch'],

  model: undefined,
};

/**
 * Explore Agent
 * Fast agent specialized for codebase exploration.
 */
export const ExploreAgent = {
  agentType: AGENT_TYPES.EXPLORE,
  name: 'Explore Agent',
  description: `Fast agent specialized for exploring codebases. Use this when you need to quickly find files by patterns (eg. "src/components/**/*.tsx"), search code for keywords (eg. "API endpoints"), or answer questions about the codebase (eg. "how do API endpoints work?").

When calling this agent, specify the desired thoroughness level: "quick" for basic searches, "medium" for moderate exploration, or "very thorough" for comprehensive analysis across multiple locations and naming conventions.`,

  getSystemPrompt: () => EXPLORE_AGENT_PROMPT,

  // Tools available to this agent
  availableTools: ['Glob', 'Grep', 'Read'],

  model: 'haiku', // Use faster model for exploration
};

/**
 * Plan Agent
 * Software architect agent for designing implementation plans.
 */
export const PlanAgent = {
  agentType: AGENT_TYPES.PLAN,
  name: 'Plan Agent',
  description: `Software architect agent for designing implementation plans. Use this when you need to plan the implementation strategy for a task. Returns step-by-step plans, identifies critical files, and considers architectural trade-offs.`,

  getSystemPrompt: () => AGENT_BASE_PROMPT,

  // Tools available to this agent
  availableTools: ['*'], // All tools

  model: undefined,
};

/**
 * Statusline Setup Agent
 * Specialized for configuring the user's status line settings.
 */
export const StatuslineSetupAgent = {
  agentType: AGENT_TYPES.STATUSLINE_SETUP,
  name: 'Statusline Setup Agent',
  description: `Use this agent to configure the user's Claude Code status line setting.`,

  getSystemPrompt: () => AGENT_BASE_PROMPT,

  // Tools available to this agent
  availableTools: ['Read', 'Edit'],

  model: 'haiku', // Simple task, use faster model
};

// ============================================================================
// All Agents Registry
// ============================================================================

export const ALL_AGENTS = [
  GeneralPurposeAgent,
  ClaudeCodeGuideAgent,
  ExploreAgent,
  PlanAgent,
  StatuslineSetupAgent,
];

/**
 * Get agent definition by type
 * @param {string} agentType - The agent type to look up
 * @returns {Object|undefined} The agent definition or undefined
 */
export function getAgentByType(agentType) {
  return ALL_AGENTS.find(agent => agent.agentType === agentType);
}

/**
 * Get all available agent types
 * @returns {string[]} Array of agent type strings
 */
export function getAvailableAgentTypes() {
  return ALL_AGENTS.map(agent => agent.agentType);
}

// ============================================================================
// Agent Selection Logic
// ============================================================================

/**
 * Determine the best agent for a given task description
 * @param {string} taskDescription - Description of the task
 * @returns {Object} The recommended agent definition
 */
export function selectAgentForTask(taskDescription) {
  const desc = taskDescription.toLowerCase();

  // Check for documentation/help queries
  if (desc.includes('claude code') ||
      desc.includes('how do i') ||
      desc.includes('how to') ||
      desc.includes('documentation')) {
    return ClaudeCodeGuideAgent;
  }

  // Check for exploration queries
  if (desc.includes('find') ||
      desc.includes('search') ||
      desc.includes('where is') ||
      desc.includes('locate')) {
    return ExploreAgent;
  }

  // Check for planning queries
  if (desc.includes('plan') ||
      desc.includes('design') ||
      desc.includes('architect') ||
      desc.includes('strategy')) {
    return PlanAgent;
  }

  // Default to general purpose
  return GeneralPurposeAgent;
}

export default {
  AGENT_TYPES,
  ALL_AGENTS,
  GeneralPurposeAgent,
  ClaudeCodeGuideAgent,
  ExploreAgent,
  PlanAgent,
  StatuslineSetupAgent,
  getAgentByType,
  getAvailableAgentTypes,
  selectAgentForTask,
};

/**
 * Claude Code - Bash Tool Implementation
 *
 * Reconstructed from decompiled source for readability.
 * This is a RECONSTRUCTION based on understanding the minified code,
 * not the original source code.
 *
 * Original location: cli.js (lines ~33000-35000)
 * Version: 2.0.57
 */

import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { connect } from 'node:net';

// ============================================================================
// Constants
// ============================================================================

export const BASH_TOOL_NAME = "Bash";
export const SANDBOXED_BASH_TOOL_NAME = "SandboxedBash";

// Environment variable for sandbox debugging
const SRT_DEBUG = process.env.SRT_DEBUG;

// Default timeout for bash commands (2 minutes)
const DEFAULT_TIMEOUT_MS = 120000;

// Maximum timeout (10 minutes)
const MAX_TIMEOUT_MS = 600000;

// Maximum output length
const MAX_OUTPUT_LENGTH = parseInt(process.env.BASH_MAX_OUTPUT_LENGTH || '30000', 10);

// ============================================================================
// Debug Logging
// ============================================================================

/**
 * Log debug messages for sandbox operations
 * @param {string} message - The message to log
 * @param {Object} options - Logging options
 * @param {string} options.level - Log level: 'info', 'warn', 'error'
 */
function sandboxDebug(message, options = {}) {
  if (!SRT_DEBUG) return;

  const prefix = "[SandboxDebug]";
  const level = options.level || "info";

  switch (level) {
    case "error":
      console.error(`${prefix} ${message}`);
      break;
    case "warn":
      console.warn(`${prefix} ${message}`);
      break;
    default:
      console.log(`${prefix} ${message}`);
  }
}

// ============================================================================
// Network Proxy (for sandboxed execution)
// ============================================================================

/**
 * Create a proxy server for sandboxed network access
 * @param {Object} config - Proxy configuration
 * @param {Function} config.filter - Function to filter allowed connections
 * @returns {http.Server} The proxy server
 */
function createProxyServer(config) {
  const server = createServer();

  // Handle CONNECT requests (for HTTPS tunneling)
  server.on("connect", async (request, clientSocket) => {
    clientSocket.on("error", (error) => {
      sandboxDebug(`Client socket error: ${error.message}`, { level: "error" });
    });

    try {
      const [hostname, portStr] = request.url.split(":");
      const port = portStr ? parseInt(portStr, 10) : undefined;

      if (!hostname || !port) {
        sandboxDebug(`Invalid CONNECT request: ${request.url}`, { level: "error" });
        clientSocket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
        return;
      }

      // Check if connection is allowed by the filter
      if (!await config.filter(port, hostname, clientSocket)) {
        sandboxDebug(`Connection blocked to ${hostname}:${port}`, { level: "error" });
        clientSocket.end(
          "HTTP/1.1 403 Forbidden\r\n" +
          "Content-Type: text/plain\r\n" +
          "X-Proxy-Error: blocked-by-allowlist\r\n\r\n" +
          "Connection blocked by network allowlist"
        );
        return;
      }

      // Establish tunnel to target
      const targetSocket = connect(port, hostname, () => {
        clientSocket.write("HTTP/1.1 200 Connection Established\r\n\r\n");
        targetSocket.pipe(clientSocket);
        clientSocket.pipe(targetSocket);
      });

      targetSocket.on("error", (error) => {
        sandboxDebug(`CONNECT tunnel failed: ${error.message}`, { level: "error" });
        clientSocket.end("HTTP/1.1 502 Bad Gateway\r\n\r\n");
      });

      clientSocket.on("error", (error) => {
        sandboxDebug(`Client socket error: ${error.message}`, { level: "error" });
        targetSocket.destroy();
      });

      clientSocket.on("end", () => targetSocket.end());
      targetSocket.on("end", () => clientSocket.end());

    } catch (error) {
      sandboxDebug(`Error handling CONNECT: ${error}`, { level: "error" });
      clientSocket.end("HTTP/1.1 500 Internal Server Error\r\n\r\n");
    }
  });

  return server;
}

// ============================================================================
// Bash Tool Definition
// ============================================================================

/**
 * The Bash tool schema definition
 */
export const BashToolSchema = {
  name: BASH_TOOL_NAME,
  description: `Executes a given bash command in a persistent shell session with optional timeout.

IMPORTANT: This tool is for terminal operations like git, npm, docker, etc.
DO NOT use it for file operations - use the specialized tools instead.

Usage notes:
- The command argument is required
- Optional timeout in milliseconds (up to 600000ms / 10 minutes)
- Default timeout is 120000ms (2 minutes)
- Output exceeding 30000 characters will be truncated`,

  parameters: {
    type: "object",
    properties: {
      command: {
        type: "string",
        description: "The command to execute"
      },
      timeout: {
        type: "number",
        description: "Optional timeout in milliseconds (max 600000)"
      },
      description: {
        type: "string",
        description: "Clear, concise description of what this command does"
      },
      run_in_background: {
        type: "boolean",
        description: "Run command in background, allowing continued work"
      }
    },
    required: ["command"]
  }
};

// ============================================================================
// Bash Tool Implementation
// ============================================================================

/**
 * Execute a bash command
 * @param {Object} params - Tool parameters
 * @param {string} params.command - The command to execute
 * @param {number} [params.timeout] - Timeout in milliseconds
 * @param {boolean} [params.run_in_background] - Run in background
 * @param {Object} context - Execution context
 * @returns {Promise<Object>} Execution result with stdout/stderr
 */
export async function executeBashCommand(params, context) {
  const { command, timeout, run_in_background } = params;

  // Validate command
  if (!command || typeof command !== 'string') {
    throw new Error('Command is required and must be a string');
  }

  // Calculate effective timeout
  const effectiveTimeout = Math.min(
    timeout || DEFAULT_TIMEOUT_MS,
    MAX_TIMEOUT_MS
  );

  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    let stdout = '';
    let stderr = '';
    let killed = false;

    // Spawn the shell process
    const shell = process.platform === 'win32' ? 'cmd.exe' : '/bin/bash';
    const shellArgs = process.platform === 'win32' ? ['/c', command] : ['-c', command];

    const child = spawn(shell, shellArgs, {
      cwd: context?.cwd || process.cwd(),
      env: { ...process.env, ...context?.env },
      timeout: effectiveTimeout
    });

    // Collect stdout
    child.stdout.on('data', (data) => {
      stdout += data.toString();
      // Truncate if too long
      if (stdout.length > MAX_OUTPUT_LENGTH) {
        stdout = stdout.slice(0, MAX_OUTPUT_LENGTH) + '\n... [truncated]';
      }
    });

    // Collect stderr
    child.stderr.on('data', (data) => {
      stderr += data.toString();
      if (stderr.length > MAX_OUTPUT_LENGTH) {
        stderr = stderr.slice(0, MAX_OUTPUT_LENGTH) + '\n... [truncated]';
      }
    });

    // Handle completion
    child.on('close', (code) => {
      const duration = Date.now() - startTime;

      resolve({
        stdout,
        stderr,
        exitCode: code,
        duration,
        killed
      });
    });

    // Handle errors
    child.on('error', (error) => {
      reject(error);
    });

    // Handle timeout
    if (!run_in_background) {
      setTimeout(() => {
        if (!child.killed) {
          killed = true;
          child.kill('SIGTERM');
        }
      }, effectiveTimeout);
    }
  });
}

// ============================================================================
// Tool Registration
// ============================================================================

/**
 * The complete Bash tool object for registration
 */
export const BashTool = {
  name: BASH_TOOL_NAME,
  schema: BashToolSchema,
  call: executeBashCommand,

  // Determine display name based on sandbox status
  getDisplayName: (isSandboxed) => {
    if (isSandboxed && process.env.CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR) {
      return SANDBOXED_BASH_TOOL_NAME;
    }
    return BASH_TOOL_NAME;
  }
};

export default BashTool;

/**
 * 静态分析器
 * 基于 AST 分析和字符串常量推断变量名
 */

import * as acorn from 'acorn';
import * as walk from 'acorn-walk';

export class StaticAnalyzer {
  constructor() {
    // 字符串值到变量名的映射规则
    this.stringMappingRules = {
      // 工具名
      'Bash': 'BASH_TOOL_NAME',
      'Read': 'READ_TOOL_NAME',
      'Write': 'WRITE_TOOL_NAME',
      'Edit': 'EDIT_TOOL_NAME',
      'MultiEdit': 'MULTI_EDIT_TOOL_NAME',
      'Glob': 'GLOB_TOOL_NAME',
      'Grep': 'GREP_TOOL_NAME',
      'Task': 'TASK_TOOL_NAME',
      'WebFetch': 'WEB_FETCH_TOOL_NAME',
      'WebSearch': 'WEB_SEARCH_TOOL_NAME',
      'NotebookEdit': 'NOTEBOOK_EDIT_TOOL_NAME',
      'TodoWrite': 'TODO_WRITE_TOOL_NAME',
      'AskUserQuestion': 'ASK_USER_QUESTION_TOOL_NAME',
      'SlashCommand': 'SLASH_COMMAND_TOOL_NAME',
      'Skill': 'SKILL_TOOL_NAME',
      'EnterPlanMode': 'ENTER_PLAN_MODE_TOOL_NAME',
      'ExitPlanMode': 'EXIT_PLAN_MODE_TOOL_NAME',
      'KillShell': 'KILL_SHELL_TOOL_NAME',
      'AgentOutputTool': 'AGENT_OUTPUT_TOOL_NAME',
      'BashOutput': 'BASH_OUTPUT_TOOL_NAME',

      // 模型名
      'claude-opus-4-5-20251101': 'MODEL_OPUS_4_5',
      'claude-sonnet-4-5-20250929': 'MODEL_SONNET_4_5',
      'claude-haiku-4-5-20251001': 'MODEL_HAIKU_4_5',
      'sonnet': 'MODEL_ALIAS_SONNET',
      'opus': 'MODEL_ALIAS_OPUS',
      'haiku': 'MODEL_ALIAS_HAIKU',

      // 代理类型
      'general-purpose': 'AGENT_TYPE_GENERAL',
      'Explore': 'AGENT_TYPE_EXPLORE',
      'Plan': 'AGENT_TYPE_PLAN',
      'claude-code-guide': 'AGENT_TYPE_GUIDE',

      // API 提供商
      'anthropic': 'PROVIDER_ANTHROPIC',
      'bedrock': 'PROVIDER_BEDROCK',
      'vertex': 'PROVIDER_VERTEX',
      'foundry': 'PROVIDER_FOUNDRY',

      // 服务信息
      'claude-code': 'SERVICE_NAME',
      'claude-code-20250219': 'SERVICE_VERSION',
      'production': 'ENV_PRODUCTION',
      'development': 'ENV_DEVELOPMENT',

      // API 端点
      '/v1/messages': 'API_MESSAGES_ENDPOINT',
      '/v1/messages/batches': 'API_BATCHES_ENDPOINT',
      '/v1/complete': 'API_COMPLETE_ENDPOINT',

      // 常用字符串
      'text': 'CONTENT_TYPE_TEXT',
      'image': 'CONTENT_TYPE_IMAGE',
      'tool_use': 'CONTENT_TYPE_TOOL_USE',
      'tool_result': 'CONTENT_TYPE_TOOL_RESULT',
      'user': 'ROLE_USER',
      'assistant': 'ROLE_ASSISTANT',
      'system': 'ROLE_SYSTEM',
    };

    // 数值常量规则
    this.numberMappingRules = {
      180000: 'MAX_INPUT_TOKENS',
      40000: 'TARGET_INPUT_TOKENS',
      600000: 'MAX_TIMEOUT_MS',
      120000: 'DEFAULT_TIMEOUT_MS',
      30000: 'MAX_OUTPUT_LENGTH',
      2000: 'DEFAULT_READ_LINES',
    };
  }

  async analyze(code, mappingManager) {
    const inferences = [];

    try {
      const ast = acorn.parse(code, {
        ecmaVersion: 'latest',
        sourceType: 'module',
        locations: true,
        allowHashBang: true,
      });

      // 收集所有变量声明
      this.collectVariableDeclarations(ast, inferences, mappingManager);

      // 分析函数定义
      this.analyzeFunctionDefinitions(ast, inferences, mappingManager);

      // 分析对象属性
      this.analyzeObjectProperties(ast, inferences, mappingManager);

    } catch (error) {
      console.error('  AST 解析错误:', error.message);
      // 使用正则表达式作为后备方案
      this.fallbackRegexAnalysis(code, inferences, mappingManager);
    }

    return inferences;
  }

  collectVariableDeclarations(ast, inferences, mappingManager) {
    walk.simple(ast, {
      VariableDeclarator: (node) => {
        // var X = "StringValue"
        if (node.id.type === 'Identifier' && node.init) {
          const varName = node.id.name;

          // 跳过已有映射的变量
          if (mappingManager.has(varName)) return;

          // 字符串字面量
          if (node.init.type === 'Literal' && typeof node.init.value === 'string') {
            const strValue = node.init.value;
            const inferredName = this.stringMappingRules[strValue];

            if (inferredName) {
              inferences.push({
                original: varName,
                inferred: inferredName,
                confidence: 0.95,
                context: `var ${varName} = "${strValue}"`,
                source: 'string-constant'
              });
            }
          }

          // 数值字面量
          if (node.init.type === 'Literal' && typeof node.init.value === 'number') {
            const numValue = node.init.value;
            const inferredName = this.numberMappingRules[numValue];

            if (inferredName) {
              inferences.push({
                original: varName,
                inferred: inferredName,
                confidence: 0.85,
                context: `var ${varName} = ${numValue}`,
                source: 'number-constant'
              });
            }
          }
        }
      }
    });
  }

  analyzeFunctionDefinitions(ast, inferences, mappingManager) {
    walk.simple(ast, {
      FunctionDeclaration: (node) => {
        if (node.id && node.id.type === 'Identifier') {
          const funcName = node.id.name;
          if (mappingManager.has(funcName)) return;

          // 分析函数体，查找返回的字符串
          const returnedString = this.findReturnedString(node.body);
          if (returnedString && this.stringMappingRules[returnedString]) {
            const baseName = this.stringMappingRules[returnedString];
            inferences.push({
              original: funcName,
              inferred: `get${baseName.replace(/_/g, '')}`,
              confidence: 0.8,
              context: `function returns "${returnedString}"`,
              source: 'function-return'
            });
          }
        }
      },

      // 箭头函数赋值
      AssignmentExpression: (node) => {
        if (node.left.type === 'Identifier' &&
            node.right.type === 'ArrowFunctionExpression') {
          const varName = node.left.name;
          if (mappingManager.has(varName)) return;

          const returnedString = this.findReturnedString(node.right.body);
          if (returnedString && this.stringMappingRules[returnedString]) {
            const baseName = this.stringMappingRules[returnedString];
            inferences.push({
              original: varName,
              inferred: `get${baseName.replace(/_/g, '')}`,
              confidence: 0.75,
              context: `arrow function returns "${returnedString}"`,
              source: 'arrow-return'
            });
          }
        }
      }
    });
  }

  analyzeObjectProperties(ast, inferences, mappingManager) {
    walk.simple(ast, {
      Property: (node) => {
        // { name: varRef } 模式
        if (node.key.type === 'Identifier' && node.key.name === 'name' &&
            node.value.type === 'Identifier') {
          const varName = node.value.name;
          // 这可能是一个工具名变量
          // 标记为待进一步分析
        }
      }
    });
  }

  findReturnedString(body) {
    if (!body) return null;

    // 直接返回字符串
    if (body.type === 'Literal' && typeof body.value === 'string') {
      return body.value;
    }

    // 函数体中的 return 语句
    if (body.type === 'BlockStatement') {
      for (const stmt of body.body) {
        if (stmt.type === 'ReturnStatement' &&
            stmt.argument &&
            stmt.argument.type === 'Literal' &&
            typeof stmt.argument.value === 'string') {
          return stmt.argument.value;
        }
      }
    }

    return null;
  }

  fallbackRegexAnalysis(code, inferences, mappingManager) {
    // 正则表达式后备分析
    // 匹配 var X = "StringValue" 模式
    const varStringPattern = /var\s+([a-zA-Z_$][\w$]*)\s*=\s*"([^"]+)"/g;
    let match;

    while ((match = varStringPattern.exec(code)) !== null) {
      const [, varName, strValue] = match;
      if (mappingManager.has(varName)) continue;

      const inferredName = this.stringMappingRules[strValue];
      if (inferredName) {
        inferences.push({
          original: varName,
          inferred: inferredName,
          confidence: 0.9,
          context: `var ${varName} = "${strValue}"`,
          source: 'regex-string'
        });
      }
    }
  }
}

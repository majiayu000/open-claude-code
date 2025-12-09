/**
 * 模式识别器
 * 识别常见代码模式并推断变量名
 */

export class PatternRecognizer {
  constructor() {
    // 模式规则
    this.patterns = [
      // 模块包装模式
      {
        name: 'module-wrapper',
        regex: /var\s+([a-zA-Z_$][\w$]*)\s*=\s*\(\s*\)\s*=>\s*\{[^}]*require\([^)]+\)/g,
        inferName: (match) => 'lazyModuleLoader',
        confidence: 0.7
      },

      // React 组件模式
      {
        name: 'react-component',
        regex: /var\s+([a-zA-Z_$][\w$]*)\s*=\s*\([^)]*\)\s*=>\s*[a-zA-Z_$][\w$]*\.createElement/g,
        inferName: (match) => 'ReactComponent',
        confidence: 0.75
      },

      // 工具定义模式
      {
        name: 'tool-definition',
        regex: /\{\s*name:\s*([a-zA-Z_$][\w$]*),\s*description:\s*(?:"[^"]*"|[a-zA-Z_$][\w$]*),/g,
        inferName: (match, varName) => `${varName}_TOOL_CONFIG`,
        confidence: 0.8
      },

      // API 端点调用模式
      {
        name: 'api-endpoint',
        regex: /([a-zA-Z_$][\w$]*)\s*\(\s*["']\/v1\//g,
        inferName: (match) => 'apiCall',
        confidence: 0.7
      },

      // 事件处理器模式
      {
        name: 'event-handler',
        regex: /\.on\s*\(\s*["'](\w+)["']\s*,\s*([a-zA-Z_$][\w$]*)\s*\)/g,
        inferName: (match, eventName) => `on${eventName.charAt(0).toUpperCase() + eventName.slice(1)}Handler`,
        confidence: 0.7
      },

      // 错误类定义模式
      {
        name: 'error-class',
        regex: /class\s+([a-zA-Z_$][\w$]*)\s+extends\s+Error/g,
        inferName: (match, className) => className, // 保留类名
        confidence: 0.9
      },

      // 常量数组模式
      {
        name: 'constant-array',
        regex: /var\s+([a-zA-Z_$][\w$]*)\s*=\s*\[\s*([a-zA-Z_$][\w$]*(?:\s*,\s*[a-zA-Z_$][\w$]*)*)\s*\]/g,
        inferName: (match, varName, items) => {
          if (items.includes('Bash') || items.includes('Read') || items.includes('Glob')) {
            return 'TOOL_NAMES_LIST';
          }
          return null;
        },
        confidence: 0.7
      }
    ];

    // Claude Code 特定模式
    this.claudeCodePatterns = [
      // 系统提示模式
      {
        name: 'system-prompt',
        regex: /var\s+([a-zA-Z_$][\w$]*)\s*=\s*["']You are Claude Code/g,
        inferName: () => 'SYSTEM_PROMPT_BASE',
        confidence: 0.95
      },

      // Agent 提示模式
      {
        name: 'agent-prompt',
        regex: /var\s+([a-zA-Z_$][\w$]*)\s*=\s*["']You are an agent/g,
        inferName: () => 'AGENT_SYSTEM_PROMPT',
        confidence: 0.95
      },

      // 权限检查模式
      {
        name: 'permission-check',
        regex: /([a-zA-Z_$][\w$]*)\s*===?\s*["']bypassPermissions["']/g,
        inferName: () => 'permissionMode',
        confidence: 0.8
      },

      // 沙箱模式
      {
        name: 'sandbox-check',
        regex: /([a-zA-Z_$][\w$]*)\s*===?\s*["']sandbox["']/g,
        inferName: () => 'sandboxMode',
        confidence: 0.8
      },

      // MCP 服务器模式
      {
        name: 'mcp-server',
        regex: /([a-zA-Z_$][\w$]*)\s*\.start\s*\(\s*\)\s*.*MCP/gi,
        inferName: () => 'mcpServer',
        confidence: 0.75
      }
    ];
  }

  async recognize(code, mappingManager) {
    const inferences = [];

    // 应用通用模式
    for (const pattern of this.patterns) {
      this.applyPattern(code, pattern, inferences, mappingManager);
    }

    // 应用 Claude Code 特定模式
    for (const pattern of this.claudeCodePatterns) {
      this.applyPattern(code, pattern, inferences, mappingManager);
    }

    // 识别函数调用链
    this.recognizeCallChains(code, inferences, mappingManager);

    // 识别类层次
    this.recognizeClassHierarchy(code, inferences, mappingManager);

    return inferences;
  }

  applyPattern(code, pattern, inferences, mappingManager) {
    const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
    let match;

    while ((match = regex.exec(code)) !== null) {
      const varName = match[1];
      if (!varName || mappingManager.has(varName)) continue;

      const inferredName = pattern.inferName(match, varName, match[2]);
      if (inferredName) {
        // 检查是否已经添加过
        const existing = inferences.find(i => i.original === varName);
        if (existing && existing.confidence >= pattern.confidence) continue;

        inferences.push({
          original: varName,
          inferred: inferredName,
          confidence: pattern.confidence,
          context: match[0].substring(0, 100),
          source: `pattern:${pattern.name}`
        });
      }
    }
  }

  recognizeCallChains(code, inferences, mappingManager) {
    // 识别链式调用模式来推断对象类型
    const chainPatterns = [
      // Promise 链
      {
        regex: /([a-zA-Z_$][\w$]*)\.then\s*\([^)]*\)\.catch/g,
        type: 'promise'
      },
      // Stream 链
      {
        regex: /([a-zA-Z_$][\w$]*)\.pipe\s*\([^)]*\)/g,
        type: 'stream'
      },
      // Array 方法链
      {
        regex: /([a-zA-Z_$][\w$]*)\.map\s*\([^)]*\)\.filter/g,
        type: 'array'
      }
    ];

    for (const pattern of chainPatterns) {
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
      let match;

      while ((match = regex.exec(code)) !== null) {
        const varName = match[1];
        if (mappingManager.has(varName)) continue;

        // 添加类型提示而不是完整重命名
        // 这些信息可以用于后续的 LLM 分析
      }
    }
  }

  recognizeClassHierarchy(code, inferences, mappingManager) {
    // 识别类继承关系
    const classPattern = /class\s+([a-zA-Z_$][\w$]*)\s+extends\s+([a-zA-Z_$][\w$]*)/g;
    let match;

    while ((match = classPattern.exec(code)) !== null) {
      const [, childClass, parentClass] = match;

      // 如果父类名已知，可以推断子类的类型
      const parentReadable = mappingManager.getReadable(parentClass);
      if (parentReadable && !mappingManager.has(childClass)) {
        // 子类可能是父类的特化版本
        inferences.push({
          original: childClass,
          inferred: `${parentReadable}Subclass`,
          confidence: 0.6,
          context: `class ${childClass} extends ${parentClass}`,
          source: 'pattern:class-hierarchy'
        });
      }
    }
  }
}

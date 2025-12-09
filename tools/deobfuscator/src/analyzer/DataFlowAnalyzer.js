/**
 * 数据流分析器
 * 追踪变量的定义和使用，推断变量语义
 */

import * as acorn from 'acorn';
import * as walk from 'acorn-walk';

export class DataFlowAnalyzer {
  constructor() {
    this.defUseChains = new Map(); // 变量定义-使用链
    this.callGraph = new Map(); // 函数调用关系
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

      // 构建定义-使用链
      this.buildDefUseChains(ast);

      // 基于使用位置推断
      this.inferFromUsage(inferences, mappingManager);

      // 类型传播
      this.propagateTypes(ast, inferences, mappingManager);

    } catch (error) {
      console.error('  数据流分析错误:', error.message);
    }

    return inferences;
  }

  buildDefUseChains(ast) {
    const scopes = [{ vars: new Map() }]; // 作用域栈

    const currentScope = () => scopes[scopes.length - 1];

    walk.ancestor(ast, {
      // 进入新作用域
      FunctionDeclaration: (node, ancestors) => {
        scopes.push({ vars: new Map() });
      },
      FunctionExpression: (node, ancestors) => {
        scopes.push({ vars: new Map() });
      },
      ArrowFunctionExpression: (node, ancestors) => {
        scopes.push({ vars: new Map() });
      },

      // 变量声明
      VariableDeclarator: (node, ancestors) => {
        if (node.id.type === 'Identifier') {
          const varName = node.id.name;
          if (!this.defUseChains.has(varName)) {
            this.defUseChains.set(varName, {
              definitions: [],
              uses: [],
              assignedValues: [],
              calledWith: [],
              passedTo: [],
            });
          }

          const chain = this.defUseChains.get(varName);
          chain.definitions.push({
            loc: node.loc,
            init: node.init ? this.getNodeInfo(node.init) : null
          });

          if (node.init) {
            chain.assignedValues.push(this.getNodeInfo(node.init));
          }
        }
      },

      // 变量使用
      Identifier: (node, ancestors) => {
        const varName = node.name;
        const parent = ancestors[ancestors.length - 2];

        // 跳过声明中的标识符
        if (parent && parent.type === 'VariableDeclarator' && parent.id === node) {
          return;
        }

        if (!this.defUseChains.has(varName)) {
          this.defUseChains.set(varName, {
            definitions: [],
            uses: [],
            assignedValues: [],
            calledWith: [],
            passedTo: [],
          });
        }

        const chain = this.defUseChains.get(varName);
        chain.uses.push({
          loc: node.loc,
          context: parent ? parent.type : 'unknown'
        });

        // 作为函数参数
        if (parent && parent.type === 'CallExpression') {
          const argIndex = parent.arguments.indexOf(node);
          if (argIndex >= 0 && parent.callee.type === 'Identifier') {
            chain.passedTo.push({
              function: parent.callee.name,
              argIndex,
              loc: node.loc
            });
          }
        }
      },

      // 函数调用
      CallExpression: (node, ancestors) => {
        if (node.callee.type === 'Identifier') {
          const funcName = node.callee.name;
          if (!this.callGraph.has(funcName)) {
            this.callGraph.set(funcName, { calls: [], calledBy: [] });
          }

          const graph = this.callGraph.get(funcName);
          graph.calls.push({
            args: node.arguments.map(arg => this.getNodeInfo(arg)),
            loc: node.loc
          });
        }
      }
    });
  }

  getNodeInfo(node) {
    if (!node) return { type: 'unknown' };

    switch (node.type) {
      case 'Literal':
        return { type: 'literal', value: node.value, valueType: typeof node.value };
      case 'Identifier':
        return { type: 'identifier', name: node.name };
      case 'CallExpression':
        return {
          type: 'call',
          callee: node.callee.type === 'Identifier' ? node.callee.name : 'complex'
        };
      case 'ArrayExpression':
        return { type: 'array', length: node.elements.length };
      case 'ObjectExpression':
        return {
          type: 'object',
          keys: node.properties.map(p => p.key.type === 'Identifier' ? p.key.name : 'computed')
        };
      default:
        return { type: node.type };
    }
  }

  inferFromUsage(inferences, mappingManager) {
    for (const [varName, chain] of this.defUseChains) {
      if (mappingManager.has(varName)) continue;

      // 基于传递给的函数推断
      for (const passed of chain.passedTo) {
        const funcReadable = mappingManager.getReadable(passed.function);
        if (funcReadable) {
          // 如果传递给已知函数，可以推断变量用途
          const inference = this.inferFromFunctionArg(varName, funcReadable, passed.argIndex);
          if (inference) {
            inferences.push(inference);
          }
        }
      }

      // 基于赋值的值推断
      for (const value of chain.assignedValues) {
        if (value.type === 'literal' && value.valueType === 'string') {
          // 已在 StaticAnalyzer 中处理
        } else if (value.type === 'array') {
          if (value.length > 5) {
            inferences.push({
              original: varName,
              inferred: `${varName}_LIST`,
              confidence: 0.5,
              context: `array with ${value.length} elements`,
              source: 'dataflow:array'
            });
          }
        } else if (value.type === 'object' && value.keys.length > 0) {
          // 根据对象的键推断
          if (value.keys.includes('name') && value.keys.includes('description')) {
            inferences.push({
              original: varName,
              inferred: `${varName}_CONFIG`,
              confidence: 0.6,
              context: `object with keys: ${value.keys.join(', ')}`,
              source: 'dataflow:object'
            });
          }
        }
      }
    }
  }

  inferFromFunctionArg(varName, funcName, argIndex) {
    // 基于已知函数的参数位置推断变量名
    const knownFunctionArgs = {
      'readFile': ['filePath', 'options', 'callback'],
      'writeFile': ['filePath', 'data', 'options', 'callback'],
      'createElement': ['type', 'props', 'children'],
      'fetch': ['url', 'options'],
      'setTimeout': ['callback', 'delay'],
      'setInterval': ['callback', 'delay'],
    };

    for (const [func, args] of Object.entries(knownFunctionArgs)) {
      if (funcName.toLowerCase().includes(func.toLowerCase()) && args[argIndex]) {
        return {
          original: varName,
          inferred: args[argIndex],
          confidence: 0.55,
          context: `passed to ${funcName} as arg ${argIndex}`,
          source: 'dataflow:function-arg'
        };
      }
    }

    return null;
  }

  propagateTypes(ast, inferences, mappingManager) {
    // 类型传播：如果 A = B，且 B 的类型已知，则 A 的类型也已知
    walk.simple(ast, {
      AssignmentExpression: (node) => {
        if (node.left.type === 'Identifier' && node.right.type === 'Identifier') {
          const leftVar = node.left.name;
          const rightVar = node.right.name;

          if (!mappingManager.has(leftVar) && mappingManager.has(rightVar)) {
            const rightReadable = mappingManager.getReadable(rightVar);
            inferences.push({
              original: leftVar,
              inferred: `${rightReadable}_COPY`,
              confidence: 0.5,
              context: `${leftVar} = ${rightVar}`,
              source: 'dataflow:propagation'
            });
          }
        }
      }
    });
  }

  // 获取变量的使用统计
  getUsageStats(varName) {
    const chain = this.defUseChains.get(varName);
    if (!chain) return null;

    return {
      definitionCount: chain.definitions.length,
      useCount: chain.uses.length,
      passedToFunctions: chain.passedTo.length,
      contexts: [...new Set(chain.uses.map(u => u.context))]
    };
  }
}

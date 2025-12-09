/**
 * LLM 推断器
 * 使用 Claude Agent SDK 进行智能变量名推断
 */

import { query } from '@anthropic-ai/claude-agent-sdk';

export class LLMInferrer {
  constructor(options = {}) {
    this.options = {
      batchSize: options.batchSize || 5,
      contextLines: options.contextLines || 25,
      maxFunctions: options.maxFunctions || 50,
    };
    this.stats = {
      apiCalls: 0,
      inferences: 0,
    };
  }

  /**
   * 分析代码中的未知函数/变量
   */
  async analyzeUnknownIdentifiers(code, existingMappings) {
    const inferences = [];

    console.log(`  预处理代码...`);
    const allLines = code.split('\n');
    const lineOffsets = this.buildLineOffsets(code);

    const unknownFunctions = this.extractUnknownFunctions(code, existingMappings, allLines, lineOffsets);
    console.log(`  发现 ${unknownFunctions.length} 个未知函数`);

    const maxFunctions = this.options.maxFunctions;
    const functionsToAnalyze = unknownFunctions.slice(0, maxFunctions);
    if (unknownFunctions.length > maxFunctions) {
      console.log(`  限制为前 ${maxFunctions} 个函数进行分析`);
    }

    const batches = this.createBatches(functionsToAnalyze, this.options.batchSize);
    console.log(`  分成 ${batches.length} 批进行分析`);

    for (let i = 0; i < batches.length; i++) {
      console.log(`  处理第 ${i + 1}/${batches.length} 批...`);
      try {
        const batchInferences = await this.analyzeBatch(batches[i], existingMappings);
        inferences.push(...batchInferences);
        console.log(`    推断了 ${batchInferences.length} 个变量名`);
      } catch (error) {
        console.error(`    批次处理错误: ${error.message}`);
      }
    }

    return inferences;
  }

  buildLineOffsets(code) {
    const offsets = [0];
    for (let i = 0; i < code.length; i++) {
      if (code[i] === '\n') offsets.push(i + 1);
    }
    return offsets;
  }

  getLineNumber(offset, lineOffsets) {
    let low = 0, high = lineOffsets.length - 1;
    while (low < high) {
      const mid = Math.ceil((low + high) / 2);
      if (lineOffsets[mid] <= offset) low = mid;
      else high = mid - 1;
    }
    return low;
  }

  extractUnknownFunctions(code, existingMappings, allLines, lineOffsets) {
    const functions = [];
    const patterns = [
      /function\s+([a-zA-Z_$][\w$]*)\s*\(/g,
      /var\s+([a-zA-Z_$][\w$]*)\s*=\s*(?:function|\([^)]*\)\s*=>)/g,
    ];

    const seen = new Set();

    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(code)) !== null) {
        const name = match[1];
        if (existingMappings.has(name)) continue;
        if (this.isCommonName(name)) continue;
        if (seen.has(name)) continue;
        seen.add(name);

        const lineNumber = this.getLineNumber(match.index, lineOffsets);
        const startLine = Math.max(0, lineNumber - 2);
        const endLine = Math.min(allLines.length, lineNumber + this.options.contextLines);
        const context = allLines.slice(startLine, endLine).join('\n');

        functions.push({ name, lineNumber: lineNumber + 1, context });
      }
    }

    return functions;
  }

  isCommonName(name) {
    if (name.length <= 2) return true;
    if (/^[A-Z][a-z]+$/.test(name) && name.length <= 4) return true;
    return false;
  }

  createBatches(items, batchSize) {
    const batches = [];
    for (let i = 0; i < items.length; i += batchSize) {
      batches.push(items.slice(i, i + batchSize));
    }
    return batches;
  }

  /**
   * 使用 Claude Agent SDK 分析一批函数
   */
  async analyzeBatch(batch, existingMappings) {
    const inferences = [];
    const prompt = this.buildPrompt(batch, existingMappings);

    try {
      const stream = query({
        prompt,
        options: {
          maxTurns: 1,
          systemPrompt: `你是代码分析专家。分析混淆的 JavaScript 函数并推断原始名称。
只输出 JSON 数组: [{"original":"xyz","inferred":"name","confidence":0.8,"reason":"理由"}]
不要输出任何其他内容。`,
        },
      });

      let responseText = '';
      for await (const message of stream) {
        if (message.type === 'assistant') {
          for (const block of message.message.content) {
            if (block.type === 'text') {
              responseText += block.text;
            }
          }
        }
      }

      this.stats.apiCalls++;

      const parsed = this.parseResponse(responseText, batch);
      inferences.push(...parsed);
      this.stats.inferences += parsed.length;

    } catch (error) {
      console.error(`    SDK 调用错误: ${error.message}`);
    }

    return inferences;
  }

  buildPrompt(batch, existingMappings) {
    const examples = existingMappings.getAll()
      .filter(m => m.confidence >= 0.9)
      .slice(0, 10)
      .map(m => `${m.original} → ${m.readable}`)
      .join('\n');

    const functions = batch.map((f, i) =>
      `${i + 1}. \`${f.name}\`:\n\`\`\`js\n${f.context.slice(0, 600)}\n\`\`\``
    ).join('\n\n');

    return `分析 Claude Code CLI 混淆函数，推断原始名称。

已知映射:
${examples}

函数:
${functions}

输出 JSON:`;
  }

  parseResponse(content, batch) {
    const inferences = [];
    try {
      const jsonMatch = content.match(/\[[\s\S]*?\]/);
      if (!jsonMatch) return inferences;

      const parsed = JSON.parse(jsonMatch[0]);
      for (const item of parsed) {
        if (item.original && item.inferred && item.confidence) {
          const batchItem = batch.find(b => b.name === item.original);
          if (batchItem) {
            inferences.push({
              original: item.original,
              inferred: item.inferred,
              confidence: Math.min(item.confidence * 0.9, 0.85),
              context: item.reason || '',
              source: 'claude-agent-sdk',
            });
          }
        }
      }
    } catch (error) {
      // ignore parse errors
    }
    return inferences;
  }

  getStats() {
    return { ...this.stats };
  }
}

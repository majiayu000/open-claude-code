#!/usr/bin/env node
/**
 * Claude Code 混淆代码自动还原工具
 *
 * 功能：
 * 1. 静态规则推断 - 字符串常量映射
 * 2. 模式识别 - 函数返回值、React组件等
 * 3. 数据流分析 - 变量使用追踪
 * 4. LLM辅助推断 - 使用 Claude SDK 进行智能分析
 */

import { StaticAnalyzer } from './analyzer/StaticAnalyzer.js';
import { PatternRecognizer } from './analyzer/PatternRecognizer.js';
import { DataFlowAnalyzer } from './analyzer/DataFlowAnalyzer.js';
import { CodeTransformer } from './transformer/CodeTransformer.js';
import { MappingManager } from './utils/MappingManager.js';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

class Deobfuscator {
  constructor(options = {}) {
    this.options = {
      inputFile: options.inputFile,
      outputDir: options.outputDir || join(__dirname, '../output'),
      verbose: options.verbose || false,
      useLLM: options.useLLM || false,
      llmBatchSize: options.llmBatchSize || 10,
      llmMaxFunctions: options.llmMaxFunctions || 100, // 限制 LLM 分析的函数数量
    };

    this.mappingManager = new MappingManager();
    this.staticAnalyzer = new StaticAnalyzer();
    this.patternRecognizer = new PatternRecognizer();
    this.dataFlowAnalyzer = new DataFlowAnalyzer();
    this.transformer = new CodeTransformer();
    this.llmInferrer = null; // 延迟加载

    this.stats = {
      totalVariables: 0,
      identifiedVariables: 0,
      highConfidence: 0,
      mediumConfidence: 0,
      lowConfidence: 0,
      llmInferences: 0,
      llmApiCalls: 0,
    };
  }

  async run() {
    const totalSteps = this.options.useLLM ? 6 : 5;

    console.log('='.repeat(60));
    console.log('  Claude Code 混淆代码自动还原工具');
    if (this.options.useLLM) {
      console.log('  [LLM 模式已启用 - 使用 Claude SDK]');
    }
    console.log('='.repeat(60));
    console.log();

    // 1. 加载已有映射
    console.log(`[1/${totalSteps}] 加载已有变量映射...`);
    await this.loadExistingMappings();
    console.log(`  已加载 ${this.mappingManager.size()} 个映射\n`);

    // 2. 读取源代码
    console.log(`[2/${totalSteps}] 读取源代码...`);
    const sourceCode = this.loadSourceCode();
    console.log(`  代码长度: ${sourceCode.length} 字符\n`);

    // 3. 静态分析
    console.log(`[3/${totalSteps}] 执行静态分析...`);
    const staticInferences = await this.staticAnalyzer.analyze(sourceCode, this.mappingManager);
    this.mergeInferences(staticInferences, 'static');
    console.log(`  发现 ${staticInferences.length} 个新映射\n`);

    // 4. 模式识别
    console.log(`[4/${totalSteps}] 执行模式识别...`);
    const patternInferences = await this.patternRecognizer.recognize(sourceCode, this.mappingManager);
    this.mergeInferences(patternInferences, 'pattern');
    console.log(`  发现 ${patternInferences.length} 个新映射\n`);

    // 5. LLM 推断 (可选)
    if (this.options.useLLM) {
      console.log(`[5/${totalSteps}] 执行 LLM 智能推断...`);
      await this.runLLMInference(sourceCode);
      console.log();
    }

    // 6. 代码转换
    const transformStep = this.options.useLLM ? 6 : 5;
    console.log(`[${transformStep}/${totalSteps}] 生成可读代码...`);
    const readableCode = await this.transformer.transform(sourceCode, this.mappingManager);
    this.saveOutput(readableCode);

    // 输出统计
    this.printStats();

    return {
      mappings: this.mappingManager.getAll(),
      stats: this.stats
    };
  }

  async runLLMInference(sourceCode) {
    try {
      // 动态导入 LLM 推断器
      const { LLMInferrer } = await import('./inferrer/LLMInferrer.js');
      this.llmInferrer = new LLMInferrer({
        batchSize: this.options.llmBatchSize,
      });

      const llmInferences = await this.llmInferrer.analyzeUnknownIdentifiers(
        sourceCode,
        this.mappingManager
      );

      this.mergeInferences(llmInferences, 'llm');

      const llmStats = this.llmInferrer.getStats();
      this.stats.llmInferences = llmStats.inferences;
      this.stats.llmApiCalls = llmStats.apiCalls;

      console.log(`  LLM 推断了 ${llmStats.inferences} 个新变量名`);
      console.log(`  API 调用次数: ${llmStats.apiCalls}`);

    } catch (error) {
      console.error(`  LLM 推断错误: ${error.message}`);
      if (this.options.verbose) {
        console.error(error.stack);
      }
    }
  }

  async loadExistingMappings() {
    // 加载项目中已有的映射
    const mappingsPath = join(__dirname, '../data/existing-mappings.json');
    if (existsSync(mappingsPath)) {
      const data = JSON.parse(readFileSync(mappingsPath, 'utf-8'));
      this.mappingManager.loadFromArray(data);
    }
  }

  loadSourceCode() {
    if (!this.options.inputFile) {
      throw new Error('请指定输入文件路径');
    }
    return readFileSync(this.options.inputFile, 'utf-8');
  }

  mergeInferences(inferences, source) {
    for (const inf of inferences) {
      if (inf.confidence >= 0.5 && !this.mappingManager.has(inf.original)) {
        this.mappingManager.add({
          original: inf.original,
          readable: inf.inferred,
          confidence: inf.confidence,
          source: source,
          context: inf.context
        });

        if (inf.confidence >= 0.9) this.stats.highConfidence++;
        else if (inf.confidence >= 0.7) this.stats.mediumConfidence++;
        else this.stats.lowConfidence++;
      }
    }
  }

  saveOutput(code) {
    if (!existsSync(this.options.outputDir)) {
      mkdirSync(this.options.outputDir, { recursive: true });
    }

    // 保存转换后的代码
    const outputPath = join(this.options.outputDir, 'cli.readable.js');
    writeFileSync(outputPath, code, 'utf-8');
    console.log(`  输出文件: ${outputPath}`);

    // 保存映射表
    const mappingsPath = join(this.options.outputDir, 'mappings.json');
    writeFileSync(mappingsPath, JSON.stringify(this.mappingManager.getAll(), null, 2), 'utf-8');
    console.log(`  映射表: ${mappingsPath}`);

    // 保存 Markdown 格式的映射表
    const mdPath = join(this.options.outputDir, 'MAPPINGS.md');
    writeFileSync(mdPath, this.mappingManager.toMarkdown(), 'utf-8');
    console.log(`  Markdown: ${mdPath}\n`);
  }

  printStats() {
    console.log('='.repeat(60));
    console.log('  统计信息');
    console.log('='.repeat(60));
    console.log(`  总映射数: ${this.mappingManager.size()}`);
    console.log(`  高置信度 (90%+): ${this.stats.highConfidence}`);
    console.log(`  中置信度 (70-90%): ${this.stats.mediumConfidence}`);
    console.log(`  低置信度 (50-70%): ${this.stats.lowConfidence}`);

    if (this.options.useLLM) {
      console.log(`  LLM 推断: ${this.stats.llmInferences}`);
      console.log(`  API 调用: ${this.stats.llmApiCalls}`);
    }

    console.log();
  }
}

// CLI 入口
async function main() {
  const args = process.argv.slice(2);

  // 帮助信息
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Claude Code 混淆代码自动还原工具

用法:
  node src/index.js [输入文件] [选项]

选项:
  --llm          启用 LLM 智能推断 (需要 ANTHROPIC_API_KEY)
  --verbose      显示详细输出
  --help, -h     显示帮助信息

示例:
  node src/index.js                           # 使用默认输入文件
  node src/index.js /path/to/cli.js           # 指定输入文件
  node src/index.js --llm                     # 启用 LLM 推断
  node src/index.js /path/to/cli.js --llm     # 指定文件并启用 LLM
`);
    process.exit(0);
  }

  // 默认使用项目中的代码
  const projectRoot = resolve(__dirname, '../../..');
  const defaultInput = join(projectRoot, 'decompiled/cli.formatted.js');

  // 第一个参数可以是文件路径
  const inputFile = args[0] && !args[0].startsWith('--') ? args[0] : defaultInput;

  const deobfuscator = new Deobfuscator({
    inputFile,
    verbose: args.includes('--verbose'),
    useLLM: args.includes('--llm'),
  });

  try {
    await deobfuscator.run();
  } catch (error) {
    console.error('错误:', error.message);
    if (args.includes('--verbose')) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

main();

export { Deobfuscator };

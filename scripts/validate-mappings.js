#!/usr/bin/env node
/**
 * 变量映射验证工具
 *
 * 功能：
 * 1. 检查映射冲突 (多个原始名映射到同一可读名)
 * 2. 检查命名规范 (camelCase, UPPER_SNAKE_CASE 等)
 * 3. 检查替换后代码的语法正确性
 * 4. 交叉验证 (同一变量在不同位置的使用一致性)
 * 5. 生成验证报告
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// ==================== 配置 ====================

const CONFIG = {
  mappingsPath: '../decompiled/readable/VARIABLE_MAPPING.json',
  readableCodePath: '../decompiled/readable/cli.readable.js',
  outputReportPath: '../decompiled/readable/VALIDATION_REPORT.md',

  // 命名规范
  namingRules: {
    constants: /^[A-Z][A-Z0-9_]*$/, // UPPER_SNAKE_CASE
    functions: /^[a-z][a-zA-Z0-9]*$/, // camelCase
    classes: /^[A-Z][a-zA-Z0-9]*$/, // PascalCase
    reactComponents: /^[A-Z][a-zA-Z0-9]*(?:Component)?$/,
  },

  // 保留字 (不应该作为可读名)
  reservedWords: [
    'break', 'case', 'catch', 'continue', 'debugger', 'default', 'delete',
    'do', 'else', 'finally', 'for', 'function', 'if', 'in', 'instanceof',
    'new', 'return', 'switch', 'this', 'throw', 'try', 'typeof', 'var',
    'void', 'while', 'with', 'class', 'const', 'enum', 'export', 'extends',
    'import', 'super', 'implements', 'interface', 'let', 'package', 'private',
    'protected', 'public', 'static', 'yield', 'null', 'true', 'false',
    'undefined', 'NaN', 'Infinity', 'arguments', 'eval',
  ],

  // 置信度阈值
  minConfidence: 0.5,
};

// ==================== 验证器类 ====================

class MappingValidator {
  constructor() {
    this.mappings = [];
    this.code = '';
    this.issues = [];
    this.stats = {
      total: 0,
      valid: 0,
      warnings: 0,
      errors: 0,
    };
  }

  async run() {
    console.log('🔍 变量映射验证工具\n');

    // 加载数据
    this.loadMappings();
    this.loadCode();

    console.log(`📊 加载了 ${this.mappings.length} 个映射\n`);

    // 执行验证
    console.log('执行验证检查...\n');

    this.checkDuplicates();
    this.checkNamingConventions();
    this.checkReservedWords();
    this.checkConfidence();
    this.checkSyntax();
    this.checkUsageConsistency();

    // 生成报告
    const report = this.generateReport();
    this.saveReport(report);

    // 打印摘要
    this.printSummary();

    return this.issues.filter(i => i.severity === 'error').length === 0;
  }

  loadMappings() {
    const path = resolve(projectRoot, CONFIG.mappingsPath);
    if (!existsSync(path)) {
      // 尝试备用路径
      const altPath = resolve(projectRoot, 'tools/deobfuscator/output/mappings.json');
      if (existsSync(altPath)) {
        this.mappings = JSON.parse(readFileSync(altPath, 'utf-8'));
        return;
      }
      throw new Error(`映射文件不存在: ${path}`);
    }
    this.mappings = JSON.parse(readFileSync(path, 'utf-8'));
  }

  loadCode() {
    const path = resolve(projectRoot, CONFIG.readableCodePath);
    if (existsSync(path)) {
      this.code = readFileSync(path, 'utf-8');
    }
  }

  // 检查重复映射 (多个原始名 -> 同一可读名)
  checkDuplicates() {
    console.log('  [1/6] 检查重复映射...');

    const readableToOriginals = new Map();

    for (const mapping of this.mappings) {
      const readable = mapping.readable;
      if (!readableToOriginals.has(readable)) {
        readableToOriginals.set(readable, []);
      }
      readableToOriginals.get(readable).push(mapping.original);
    }

    for (const [readable, originals] of readableToOriginals) {
      if (originals.length > 1) {
        this.addIssue('warning', 'duplicate', {
          message: `可读名 "${readable}" 被多个原始名使用`,
          details: originals.join(', '),
          suggestion: '考虑为不同用途添加后缀区分',
        });
      }
    }
  }

  // 检查命名规范
  checkNamingConventions() {
    console.log('  [2/6] 检查命名规范...');

    for (const mapping of this.mappings) {
      const { readable, source } = mapping;

      // 常量应该是 UPPER_SNAKE_CASE
      if (readable.includes('_') && readable === readable.toUpperCase()) {
        if (!CONFIG.namingRules.constants.test(readable)) {
          this.addIssue('warning', 'naming', {
            message: `常量命名不规范: "${readable}"`,
            suggestion: '应使用 UPPER_SNAKE_CASE 格式',
          });
        }
      }
      // 函数应该是 camelCase
      else if (readable.startsWith('get') || readable.startsWith('set') ||
               readable.startsWith('is') || readable.startsWith('has')) {
        if (!CONFIG.namingRules.functions.test(readable)) {
          this.addIssue('info', 'naming', {
            message: `函数命名可能不规范: "${readable}"`,
            suggestion: '应使用 camelCase 格式',
          });
        }
      }
      // React 组件应该是 PascalCase
      else if (readable.endsWith('Component') || /^[A-Z]/.test(readable)) {
        if (!CONFIG.namingRules.reactComponents.test(readable)) {
          this.addIssue('info', 'naming', {
            message: `React 组件命名可能不规范: "${readable}"`,
            suggestion: '应使用 PascalCase 格式',
          });
        }
      }
    }
  }

  // 检查是否使用了 JS 保留字
  checkReservedWords() {
    console.log('  [3/6] 检查保留字冲突...');

    for (const mapping of this.mappings) {
      if (CONFIG.reservedWords.includes(mapping.readable.toLowerCase())) {
        this.addIssue('error', 'reserved', {
          message: `可读名使用了 JavaScript 保留字: "${mapping.readable}"`,
          original: mapping.original,
          suggestion: '请选择其他名称',
        });
      }
    }
  }

  // 检查置信度
  checkConfidence() {
    console.log('  [4/6] 检查置信度分布...');

    const lowConfidence = this.mappings.filter(m => m.confidence < CONFIG.minConfidence);
    const veryLow = this.mappings.filter(m => m.confidence < 0.3);

    if (veryLow.length > 0) {
      this.addIssue('warning', 'confidence', {
        message: `${veryLow.length} 个映射置信度极低 (<30%)`,
        details: veryLow.slice(0, 5).map(m => `${m.original} -> ${m.readable}`).join(', '),
        suggestion: '考虑人工审核这些映射',
      });
    }

    if (lowConfidence.length > this.mappings.length * 0.3) {
      this.addIssue('warning', 'confidence', {
        message: `超过 30% 的映射置信度低于 ${CONFIG.minConfidence * 100}%`,
        suggestion: '考虑增加静态分析规则或人工审核',
      });
    }
  }

  // 语法检查 (如果有转换后的代码)
  checkSyntax() {
    console.log('  [5/6] 检查代码语法...');

    if (!this.code) {
      this.addIssue('info', 'syntax', {
        message: '未找到转换后的代码，跳过语法检查',
      });
      return;
    }

    try {
      // 尝试将代码作为模块解析
      // 注意：这只是基本检查，不是完整的语法验证
      new Function(this.code);
      console.log('    语法检查通过 ✓');
    } catch (error) {
      this.addIssue('error', 'syntax', {
        message: '转换后的代码存在语法错误',
        details: error.message,
        suggestion: '检查变量替换是否破坏了代码结构',
      });
    }
  }

  // 检查使用一致性
  checkUsageConsistency() {
    console.log('  [6/6] 检查使用一致性...');

    if (!this.code) return;

    // 检查是否有原始变量名仍然出现在代码中 (可能遗漏了替换)
    const missedReplacements = [];
    for (const mapping of this.mappings) {
      const regex = new RegExp(`\\b${this.escapeRegex(mapping.original)}\\b`, 'g');
      const matches = this.code.match(regex);
      if (matches && matches.length > 0) {
        missedReplacements.push({
          original: mapping.original,
          readable: mapping.readable,
          count: matches.length,
        });
      }
    }

    if (missedReplacements.length > 0) {
      this.addIssue('warning', 'consistency', {
        message: `${missedReplacements.length} 个变量可能未被完全替换`,
        details: missedReplacements.slice(0, 10)
          .map(m => `${m.original} (${m.count}处)`).join(', '),
        suggestion: '检查替换逻辑是否正确处理了所有出现位置',
      });
    }
  }

  escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  addIssue(severity, type, data) {
    this.issues.push({ severity, type, ...data, timestamp: new Date().toISOString() });

    switch (severity) {
      case 'error': this.stats.errors++; break;
      case 'warning': this.stats.warnings++; break;
    }
  }

  generateReport() {
    const now = new Date().toISOString();

    let report = `# 变量映射验证报告

> 生成时间: ${now}

## 概要

| 指标 | 数量 |
|------|------|
| 总映射数 | ${this.mappings.length} |
| 错误 | ${this.stats.errors} |
| 警告 | ${this.stats.warnings} |
| 验证状态 | ${this.stats.errors === 0 ? '✅ 通过' : '❌ 失败'} |

## 置信度分布

${this.generateConfidenceChart()}

## 来源分布

${this.generateSourceChart()}

## 问题列表

`;

    if (this.issues.length === 0) {
      report += '没有发现问题。\n';
    } else {
      // 按严重性分组
      const errors = this.issues.filter(i => i.severity === 'error');
      const warnings = this.issues.filter(i => i.severity === 'warning');
      const infos = this.issues.filter(i => i.severity === 'info');

      if (errors.length > 0) {
        report += '### 错误\n\n';
        for (const issue of errors) {
          report += `- **[${issue.type}]** ${issue.message}\n`;
          if (issue.details) report += `  - 详情: ${issue.details}\n`;
          if (issue.suggestion) report += `  - 建议: ${issue.suggestion}\n`;
        }
        report += '\n';
      }

      if (warnings.length > 0) {
        report += '### 警告\n\n';
        for (const issue of warnings) {
          report += `- **[${issue.type}]** ${issue.message}\n`;
          if (issue.details) report += `  - 详情: ${issue.details}\n`;
          if (issue.suggestion) report += `  - 建议: ${issue.suggestion}\n`;
        }
        report += '\n';
      }

      if (infos.length > 0) {
        report += '### 信息\n\n';
        for (const issue of infos) {
          report += `- **[${issue.type}]** ${issue.message}\n`;
        }
        report += '\n';
      }
    }

    report += `
## 建议操作

${this.generateSuggestions()}

---
*验证工具版本: 1.0.0*
`;

    return report;
  }

  generateConfidenceChart() {
    const ranges = [
      { label: '90-100%', min: 0.9, max: 1.0 },
      { label: '70-89%', min: 0.7, max: 0.9 },
      { label: '50-69%', min: 0.5, max: 0.7 },
      { label: '<50%', min: 0, max: 0.5 },
    ];

    let chart = '| 置信度范围 | 数量 | 百分比 |\n|------------|------|--------|\n';

    for (const range of ranges) {
      const count = this.mappings.filter(m =>
        m.confidence >= range.min && m.confidence < range.max
      ).length;
      const percent = ((count / this.mappings.length) * 100).toFixed(1);
      chart += `| ${range.label} | ${count} | ${percent}% |\n`;
    }

    return chart;
  }

  generateSourceChart() {
    const sources = {};
    for (const m of this.mappings) {
      const source = m.source || 'unknown';
      sources[source] = (sources[source] || 0) + 1;
    }

    let chart = '| 来源 | 数量 | 百分比 |\n|------|------|--------|\n';
    const total = this.mappings.length;

    for (const [source, count] of Object.entries(sources).sort((a, b) => b[1] - a[1])) {
      const percent = ((count / total) * 100).toFixed(1);
      chart += `| ${source} | ${count} | ${percent}% |\n`;
    }

    return chart;
  }

  generateSuggestions() {
    const suggestions = [];

    if (this.stats.errors > 0) {
      suggestions.push('1. **修复错误**: 首先解决所有错误级别的问题，这些问题可能导致代码无法正常运行。');
    }

    const lowConfidenceCount = this.mappings.filter(m => m.confidence < 0.7).length;
    if (lowConfidenceCount > this.mappings.length * 0.2) {
      suggestions.push('2. **审核低置信度映射**: 大量映射置信度较低，建议人工审核确认。');
    }

    const llmCount = this.mappings.filter(m => m.source === 'llm-inference').length;
    if (llmCount > 0) {
      suggestions.push(`3. **验证 LLM 推断**: ${llmCount} 个映射来自 LLM 推断，建议抽样检查准确性。`);
    }

    if (suggestions.length === 0) {
      suggestions.push('验证通过，无需额外操作。');
    }

    return suggestions.join('\n\n');
  }

  saveReport(report) {
    const path = resolve(projectRoot, CONFIG.outputReportPath);
    writeFileSync(path, report);
    console.log(`\n📄 验证报告已保存: ${path}`);
  }

  printSummary() {
    console.log('\n' + '='.repeat(50));
    console.log('  验证摘要');
    console.log('='.repeat(50));
    console.log(`  总映射数: ${this.mappings.length}`);
    console.log(`  错误: ${this.stats.errors}`);
    console.log(`  警告: ${this.stats.warnings}`);
    console.log(`  状态: ${this.stats.errors === 0 ? '✅ 通过' : '❌ 失败'}`);
    console.log('='.repeat(50) + '\n');
  }
}

// ==================== CLI ====================

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
变量映射验证工具

用法:
  node validate-mappings.js [选项]

选项:
  --strict       严格模式 (警告也视为失败)
  --json         输出 JSON 格式结果
  --help, -h     显示帮助

示例:
  node validate-mappings.js
  node validate-mappings.js --strict
`);
    process.exit(0);
  }

  const validator = new MappingValidator();

  try {
    const success = await validator.run();

    if (args.includes('--strict') && validator.stats.warnings > 0) {
      console.log('严格模式: 存在警告，视为失败');
      process.exit(1);
    }

    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error('验证失败:', error.message);
    process.exit(1);
  }
}

main();

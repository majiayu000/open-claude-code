#!/usr/bin/env node
/**
 * 版本差异分析工具
 *
 * 功能:
 * - 对比两个版本的代码，找出差异
 * - 识别新增、修改、删除的函数
 * - 生成增量分析任务
 *
 * 使用:
 *   node version-diff.js <old-version> <new-version>
 *   node version-diff.js 2.0.57 2.0.62
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

// ==================== 函数指纹计算 ====================

class FunctionFingerprint {
  constructor(code) {
    this.code = code;
    this.functions = new Map();
  }

  extract() {
    const pattern = /function\s+([a-zA-Z_$][\w$]*)\s*\(([^)]*)\)\s*\{/g;
    let match;

    while ((match = pattern.exec(this.code)) !== null) {
      const name = match[1];
      const params = match[2];
      const startIndex = match.index;

      // 提取函数体 (简化版，不处理嵌套)
      const body = this.extractFunctionBody(startIndex);
      const fingerprint = this.computeFingerprint(params, body);

      this.functions.set(name, {
        name,
        params,
        fingerprint,
        bodyHash: createHash('md5').update(body).digest('hex').slice(0, 8),
        lineNum: this.code.slice(0, startIndex).split('\n').length,
      });
    }

    return this.functions;
  }

  extractFunctionBody(startIndex) {
    let depth = 0;
    let inString = false;
    let stringChar = '';
    let bodyStart = -1;

    for (let i = startIndex; i < this.code.length; i++) {
      const char = this.code[i];
      const prevChar = this.code[i - 1];

      // 处理字符串
      if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
        if (!inString) {
          inString = true;
          stringChar = char;
        } else if (char === stringChar) {
          inString = false;
        }
        continue;
      }

      if (inString) continue;

      if (char === '{') {
        if (bodyStart === -1) bodyStart = i;
        depth++;
      } else if (char === '}') {
        depth--;
        if (depth === 0) {
          return this.code.slice(bodyStart, i + 1);
        }
      }
    }

    return '';
  }

  computeFingerprint(params, body) {
    // 移除空白和注释，计算结构指纹
    const normalized = body
      .replace(/\/\/.*$/gm, '')        // 单行注释
      .replace(/\/\*[\s\S]*?\*\//g, '') // 多行注释
      .replace(/\s+/g, ' ')             // 合并空白
      .trim();

    // 提取结构特征
    const features = {
      paramCount: params.split(',').filter(p => p.trim()).length,
      hasAsync: /\basync\b/.test(body),
      hasAwait: /\bawait\b/.test(body),
      hasTry: /\btry\s*\{/.test(body),
      hasReturn: /\breturn\b/.test(body),
      hasIf: /\bif\s*\(/.test(body),
      hasFor: /\bfor\s*\(/.test(body),
      hasWhile: /\bwhile\s*\(/.test(body),
      bodyLength: normalized.length,
    };

    return JSON.stringify(features);
  }
}

// ==================== 版本比较 ====================

class VersionComparator {
  constructor(oldVersion, newVersion) {
    this.oldVersion = oldVersion;
    this.newVersion = newVersion;
    this.oldPath = join(projectRoot, `decompiled/v${oldVersion}/cli.formatted.js`);
    this.newPath = join(projectRoot, `decompiled/v${newVersion}/cli.formatted.js`);
  }

  compare() {
    console.log(`对比版本: v${this.oldVersion} -> v${this.newVersion}`);

    if (!existsSync(this.oldPath)) {
      console.error(`旧版本文件不存在: ${this.oldPath}`);
      return null;
    }
    if (!existsSync(this.newPath)) {
      console.error(`新版本文件不存在: ${this.newPath}`);
      return null;
    }

    const oldCode = readFileSync(this.oldPath, 'utf-8');
    const newCode = readFileSync(this.newPath, 'utf-8');

    const oldFp = new FunctionFingerprint(oldCode);
    const newFp = new FunctionFingerprint(newCode);

    const oldFuncs = oldFp.extract();
    const newFuncs = newFp.extract();

    console.log(`旧版本函数: ${oldFuncs.size}`);
    console.log(`新版本函数: ${newFuncs.size}`);

    // 分析差异
    const result = {
      oldVersion: this.oldVersion,
      newVersion: this.newVersion,
      timestamp: new Date().toISOString(),
      added: [],      // 新增的函数
      removed: [],    // 删除的函数
      modified: [],   // 修改的函数 (指纹变化)
      renamed: [],    // 可能重命名的函数
      unchanged: [],  // 未变化的函数
    };

    // 找新增和修改
    for (const [name, newFunc] of newFuncs) {
      if (!oldFuncs.has(name)) {
        result.added.push(name);
      } else {
        const oldFunc = oldFuncs.get(name);
        if (oldFunc.fingerprint !== newFunc.fingerprint) {
          result.modified.push({
            name,
            oldHash: oldFunc.bodyHash,
            newHash: newFunc.bodyHash,
          });
        } else {
          result.unchanged.push(name);
        }
      }
    }

    // 找删除
    for (const [name] of oldFuncs) {
      if (!newFuncs.has(name)) {
        result.removed.push(name);
      }
    }

    // 尝试匹配重命名 (基于指纹)
    const removedFingerprints = new Map();
    for (const name of result.removed) {
      const func = oldFuncs.get(name);
      removedFingerprints.set(func.fingerprint, name);
    }

    for (const name of result.added) {
      const func = newFuncs.get(name);
      if (removedFingerprints.has(func.fingerprint)) {
        const oldName = removedFingerprints.get(func.fingerprint);
        result.renamed.push({
          oldName,
          newName: name,
          fingerprint: func.fingerprint,
        });
        // 从 added/removed 中移除
        result.added = result.added.filter(n => n !== name);
        result.removed = result.removed.filter(n => n !== oldName);
      }
    }

    return result;
  }

  generateReport(result) {
    if (!result) return '';

    const lines = [
      `# 版本差异报告`,
      ``,
      `## 版本信息`,
      `- 旧版本: v${result.oldVersion}`,
      `- 新版本: v${result.newVersion}`,
      `- 生成时间: ${result.timestamp}`,
      ``,
      `## 变更统计`,
      `| 类型 | 数量 |`,
      `|------|------|`,
      `| 新增 | ${result.added.length} |`,
      `| 删除 | ${result.removed.length} |`,
      `| 修改 | ${result.modified.length} |`,
      `| 重命名 | ${result.renamed.length} |`,
      `| 未变化 | ${result.unchanged.length} |`,
      ``,
    ];

    if (result.added.length > 0) {
      lines.push(`## 新增函数 (${result.added.length})`);
      lines.push('```');
      result.added.slice(0, 50).forEach(n => lines.push(n));
      if (result.added.length > 50) {
        lines.push(`... 还有 ${result.added.length - 50} 个`);
      }
      lines.push('```');
      lines.push('');
    }

    if (result.renamed.length > 0) {
      lines.push(`## 可能的重命名 (${result.renamed.length})`);
      lines.push('| 旧名称 | 新名称 |');
      lines.push('|--------|--------|');
      result.renamed.forEach(r => {
        lines.push(`| ${r.oldName} | ${r.newName} |`);
      });
      lines.push('');
    }

    if (result.modified.length > 0) {
      lines.push(`## 修改的函数 (${result.modified.length})`);
      lines.push('| 函数名 | 旧哈希 | 新哈希 |');
      lines.push('|--------|--------|--------|');
      result.modified.slice(0, 30).forEach(m => {
        lines.push(`| ${m.name} | ${m.oldHash} | ${m.newHash} |`);
      });
      if (result.modified.length > 30) {
        lines.push(`| ... | 还有 ${result.modified.length - 30} 个 | |`);
      }
      lines.push('');
    }

    return lines.join('\n');
  }
}

// ==================== 主程序 ====================

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('用法: node version-diff.js <old-version> <new-version>');
    console.log('示例: node version-diff.js 2.0.57 2.0.62');
    process.exit(1);
  }

  const [oldVersion, newVersion] = args;
  const comparator = new VersionComparator(oldVersion, newVersion);

  const result = comparator.compare();
  if (!result) {
    process.exit(1);
  }

  // 打印摘要
  console.log('\n' + '='.repeat(50));
  console.log('变更摘要:');
  console.log(`  新增: ${result.added.length} 个函数`);
  console.log(`  删除: ${result.removed.length} 个函数`);
  console.log(`  修改: ${result.modified.length} 个函数`);
  console.log(`  重命名: ${result.renamed.length} 个函数`);
  console.log(`  未变化: ${result.unchanged.length} 个函数`);

  // 保存详细报告
  const reportPath = join(projectRoot, `decompiled/readable/VERSION_DIFF_${oldVersion}_${newVersion}.md`);
  const report = comparator.generateReport(result);
  writeFileSync(reportPath, report);
  console.log(`\n报告已保存: ${reportPath}`);

  // 保存 JSON 结果
  const jsonPath = join(projectRoot, `decompiled/readable/VERSION_DIFF_${oldVersion}_${newVersion}.json`);
  writeFileSync(jsonPath, JSON.stringify(result, null, 2));
  console.log(`JSON 已保存: ${jsonPath}`);

  // 生成增量分析任务
  const incrementalTasks = {
    version: newVersion,
    basedOn: oldVersion,
    tasks: [
      ...result.added.map(n => ({ name: n, type: 'new', priority: 1 })),
      ...result.modified.map(m => ({ name: m.name, type: 'modified', priority: 2 })),
    ],
  };

  const tasksPath = join(__dirname, 'incremental-tasks.json');
  writeFileSync(tasksPath, JSON.stringify(incrementalTasks, null, 2));
  console.log(`增量任务已保存: ${tasksPath}`);
}

main().catch(console.error);

/**
 * 代码转换器
 * 将混淆的变量名替换为可读名称
 *
 * 优化版：使用简单的正则替换，提高性能
 */

export class CodeTransformer {
  constructor(options = {}) {
    this.options = {
      addComments: options.addComments !== false,
      preserveOriginal: options.preserveOriginal || false,
      minConfidence: options.minConfidence || 0.5,
    };
  }

  async transform(code, mappingManager) {
    let result = code;

    // 获取所有映射，按变量名长度降序排序（避免短名替换长名的一部分）
    const mappings = mappingManager.getAll()
      .filter(m => m.confidence >= this.options.minConfidence)
      .sort((a, b) => b.original.length - a.original.length);

    console.log(`  应用 ${mappings.length} 个映射...`);

    // 使用简单快速的替换方法
    let count = 0;
    for (const mapping of mappings) {
      const before = result;
      result = this.fastReplace(result, mapping.original, mapping.readable);
      if (result !== before) count++;
    }

    console.log(`  实际替换了 ${count} 个变量`);

    // 添加文件头注释
    if (this.options.addComments) {
      result = this.addHeaderComment(result, mappingManager);
    }

    return result;
  }

  /**
   * 快速替换 - 使用简单的正则表达式
   * 只匹配独立的标识符（前后不能是单词字符）
   */
  fastReplace(code, original, replacement) {
    // 转义特殊正则字符
    const escapedOriginal = original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // 使用负向前瞻和负向后瞻确保是独立标识符
    // 注意：不能在 . 后面（属性访问）
    const pattern = new RegExp(
      `(?<![\\w$\\.])${escapedOriginal}(?![\\w$])`,
      'g'
    );

    return code.replace(pattern, replacement);
  }

  addHeaderComment(code, mappingManager) {
    const stats = this.getStats(mappingManager);
    const timestamp = new Date().toISOString();

    const header = `/**
 * ╔════════════════════════════════════════════════════════════════╗
 * ║  Claude Code - 自动还原版                                       ║
 * ╚════════════════════════════════════════════════════════════════╝
 *
 * 生成时间: ${timestamp}
 *
 * 还原统计:
 * - 总映射数: ${stats.total}
 * - 高置信度 (90%+): ${stats.high}
 * - 中置信度 (70-90%): ${stats.medium}
 * - 低置信度 (50-70%): ${stats.low}
 *
 * 主要变量映射:
${stats.topMappings.map(m => ` * - ${m.original} → ${m.readable} (${(m.confidence * 100).toFixed(0)}%)`).join('\n')}
 *
 * 注意: 此代码由自动工具生成，部分变量名可能不准确
 */

`;

    return header + code;
  }

  getStats(mappingManager) {
    const all = mappingManager.getAll();
    return {
      total: all.length,
      high: all.filter(m => m.confidence >= 0.9).length,
      medium: all.filter(m => m.confidence >= 0.7 && m.confidence < 0.9).length,
      low: all.filter(m => m.confidence >= 0.5 && m.confidence < 0.7).length,
      topMappings: all
        .filter(m => m.confidence >= 0.8)
        .sort((a, b) => b.confidence - a.confidence)
        .slice(0, 20)
    };
  }
}

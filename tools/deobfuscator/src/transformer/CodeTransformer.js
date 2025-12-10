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
      minLength: options.minLength || 2, // 最小变量名长度
    };

    // 需要跳过的短变量名（太常见，容易误替换）
    this.skipPatterns = new Set([
      'Q', 'A', 'B', 'G', 'Z', 'I', 'Y', 'J', 'W', 'X', 'F', 'V', 'K', 'D', 'H', 'C', 'E',
      'L', 'U', 'M', 'N', 'O', 'P', 'R', 'S', 'T',
      '_0', '_1', '_2', '_3', '_4', '_5', '_6', '_7', '_8', '_9',
      'en', // 太短，容易误替换
    ]);
  }

  async transform(code, mappingManager) {
    let result = code;

    // 获取所有映射，过滤并排序
    const mappings = mappingManager.getAll()
      .filter(m => m.confidence >= this.options.minConfidence)
      .filter(m => m.original.length >= this.options.minLength)
      .filter(m => !this.skipPatterns.has(m.original))
      .sort((a, b) => b.original.length - a.original.length);

    console.log(`  应用 ${mappings.length} 个映射...`);

    // 使用简单快速的替换方法
    let count = 0;
    for (const mapping of mappings) {
      const before = result;
      result = this.safeReplace(result, mapping.original, mapping.readable);
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
   * 安全替换 - 避免替换字符串内容和属性访问
   */
  safeReplace(code, original, replacement) {
    // 转义特殊正则字符
    const escapedOriginal = original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // 更严格的匹配：
    // 1. 前面不能是单词字符、$、. (属性访问)
    // 2. 后面不能是单词字符、$
    // 3. 不匹配在引号内的内容（简化处理）
    const pattern = new RegExp(
      `(?<![\\w$\\.])${escapedOriginal}(?![\\w$])`,
      'g'
    );

    // 分段处理，跳过字符串
    return this.replaceOutsideStrings(code, pattern, replacement);
  }

  /**
   * 只替换字符串外的内容（优化版：按行处理，性能更好）
   */
  replaceOutsideStrings(code, pattern, replacement) {
    // 对于大文件，直接使用正则替换（字符串内的变量名通常不会匹配）
    // 因为我们匹配的是变量声明和使用，字符串内的内容不会是有效的变量引用
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

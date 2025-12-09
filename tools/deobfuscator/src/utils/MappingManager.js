/**
 * 变量映射管理器
 * 管理混淆变量名到可读变量名的映射
 */

export class MappingManager {
  constructor() {
    this.mappings = new Map();
  }

  add(mapping) {
    const { original, readable, confidence = 1.0, source = 'unknown', context = '' } = mapping;

    // 如果已存在，只在置信度更高时更新
    if (this.mappings.has(original)) {
      const existing = this.mappings.get(original);
      if (existing.confidence >= confidence) {
        return false;
      }
    }

    this.mappings.set(original, {
      original,
      readable,
      confidence,
      source,
      context,
      addedAt: new Date().toISOString()
    });

    return true;
  }

  get(original) {
    return this.mappings.get(original);
  }

  getReadable(original) {
    const mapping = this.mappings.get(original);
    return mapping ? mapping.readable : null;
  }

  has(original) {
    return this.mappings.has(original);
  }

  size() {
    return this.mappings.size;
  }

  getAll() {
    return Array.from(this.mappings.values());
  }

  getAllAsObject() {
    const obj = {};
    for (const [key, value] of this.mappings) {
      obj[key] = value.readable;
    }
    return obj;
  }

  loadFromArray(arr) {
    for (const item of arr) {
      if (typeof item === 'object' && item.original && item.readable) {
        this.add(item);
      } else if (Array.isArray(item) && item.length >= 2) {
        this.add({ original: item[0], readable: item[1], confidence: item[2] || 1.0 });
      }
    }
  }

  loadFromObject(obj) {
    for (const [original, readable] of Object.entries(obj)) {
      this.add({ original, readable, confidence: 1.0, source: 'predefined' });
    }
  }

  // 按置信度排序
  sortByConfidence() {
    return this.getAll().sort((a, b) => b.confidence - a.confidence);
  }

  // 按来源分组
  groupBySource() {
    const groups = {};
    for (const mapping of this.mappings.values()) {
      const source = mapping.source || 'unknown';
      if (!groups[source]) groups[source] = [];
      groups[source].push(mapping);
    }
    return groups;
  }

  // 导出为 Markdown
  toMarkdown() {
    let md = '# 变量映射表\n\n';
    md += '| 混淆名 | 可读名 | 置信度 | 来源 |\n';
    md += '|--------|--------|--------|------|\n';

    for (const m of this.sortByConfidence()) {
      md += `| \`${m.original}\` | \`${m.readable}\` | ${(m.confidence * 100).toFixed(0)}% | ${m.source} |\n`;
    }

    return md;
  }
}

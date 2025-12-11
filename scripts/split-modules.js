/**
 * Claude Code 模块拆分脚本
 * 将单个大文件拆分为多个模块文件
 */

const fs = require('fs');
const path = require('path');

// 模块边界标记（基于代码分析）
const MODULE_BOUNDARIES = [
  { start: 0, end: 5000, name: 'core/bootstrap', desc: '启动引导代码' },
  { start: 5000, end: 10000, name: 'telemetry/statsig', desc: 'Statsig 遥测' },
  { start: 10000, end: 20000, name: 'telemetry/sentry', desc: 'Sentry 错误追踪' },
  { start: 20000, end: 60000, name: 'vendor/react', desc: 'React 运行时' },
  { start: 60000, end: 100000, name: 'vendor/ink', desc: 'Ink 终端UI库' },
  { start: 100000, end: 150000, name: 'vendor/lodash', desc: 'Lodash 工具库' },
  { start: 150000, end: 200000, name: 'vendor/zod', desc: 'Zod 验证库' },
  { start: 200000, end: 250000, name: 'auth/oauth', desc: 'OAuth 认证' },
  { start: 250000, end: 300000, name: 'auth/credentials', desc: '凭证管理' },
  { start: 300000, end: 320000, name: 'api/client', desc: 'API 客户端' },
  { start: 320000, end: 340000, name: 'tools/definitions', desc: '工具定义' },
  { start: 340000, end: 360000, name: 'tools/implementations', desc: '工具实现' },
  { start: 360000, end: 375000, name: 'ui/components', desc: 'UI 组件' },
  { start: 375000, end: 385000, name: 'core/main', desc: '主入口' },
];

function splitModules(inputFile, outputDir) {
  console.log(`Reading: ${inputFile}`);
  const code = fs.readFileSync(inputFile, 'utf-8');
  const lines = code.split('\n');

  console.log(`Total lines: ${lines.length}`);

  // 创建输出目录
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 拆分模块
  for (const module of MODULE_BOUNDARIES) {
    const moduleDir = path.join(outputDir, path.dirname(module.name));
    if (!fs.existsSync(moduleDir)) {
      fs.mkdirSync(moduleDir, { recursive: true });
    }

    const modulePath = path.join(outputDir, `${module.name}.js`);
    const moduleLines = lines.slice(module.start, Math.min(module.end, lines.length));

    const header = `/**
 * Claude Code v2.0.62 - ${module.desc}
 *
 * 原始位置: 行 ${module.start + 1} - ${Math.min(module.end, lines.length)}
 * 模块: ${module.name}
 */

`;

    fs.writeFileSync(modulePath, header + moduleLines.join('\n'));
    console.log(`Created: ${modulePath} (${moduleLines.length} lines)`);
  }

  // 创建索引文件
  const indexContent = `# Claude Code v2.0.62 模块索引

## 模块结构

${MODULE_BOUNDARIES.map(m => `- **${m.name}** (行 ${m.start + 1}-${m.end}): ${m.desc}`).join('\n')}

## 文件统计

| 模块 | 行数 | 说明 |
|------|------|------|
${MODULE_BOUNDARIES.map(m => `| ${m.name} | ${m.end - m.start} | ${m.desc} |`).join('\n')}
`;

  fs.writeFileSync(path.join(outputDir, 'MODULE_INDEX.md'), indexContent);
  console.log('\nCreated MODULE_INDEX.md');
}

// 主函数
function main() {
  const inputFile = process.argv[2] || 'decompiled/v2.0.62/cli.readable.js';
  const outputDir = process.argv[3] || 'decompiled/v2.0.62/modules';

  splitModules(inputFile, outputDir);
  console.log('\nDone!');
}

main();

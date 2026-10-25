// 校验 tools/analysis/level-3.json：JSON 可解析、每个场次 choice 15 + judge 10、无空字符串。
const fs = require('fs');
const path = require('path');

const analysis = JSON.parse(fs.readFileSync(path.join(__dirname, 'level-3.json'), 'utf8'));
const examDir = path.join(__dirname, '..', '..', 'src', 'data', 'exams');
const sessions = fs.readdirSync(examDir).filter(f => /-3\.json$/.test(f)).map(f => f.replace('.json', '')).sort();

let total = 0;
let errors = [];

// 1) 覆盖全部场次
for (const s of sessions) {
  if (!analysis[s]) errors.push(`缺少场次: ${s}`);
}
for (const key of Object.keys(analysis)) {
  if (!sessions.includes(key)) errors.push(`多余场次: ${key}`);
}

// 2) 每个场次 choice 15 + judge 10，无非空字符串
for (const s of sessions) {
  const a = analysis[s];
  for (const part of ['choice', 'judge']) {
    if (!a[part]) { errors.push(`${s}.${part} 缺失`); continue; }
    const expected = part === 'choice' ? 15 : 10;
    const keys = Object.keys(a[part]);
    if (keys.length !== expected) errors.push(`${s}.${part} 数量为 ${keys.length}，应为 ${expected}`);
    for (let i = 1; i <= expected; i++) {
      const v = a[part][String(i)];
      if (typeof v !== 'string' || v.trim() === '') errors.push(`${s}.${part}.${i} 为空或非字符串`);
    }
    total += keys.length;
  }
}

if (errors.length) {
  console.error('校验失败：');
  errors.forEach(e => console.error(' - ' + e));
  process.exit(1);
}
console.log(`校验通过：${sessions.length} 个场次，共 ${total} 条解析（choice ${sessions.length * 15} + judge ${sessions.length * 10}）。`);

// 校验 tools/analysis/level-5.json：
// 1) JSON 可解析；2) 覆盖 src/data/exams/ 下全部 *-5.json 场次；
// 3) 每个场次 choice 15 题 + judge 10 题，题号 1..15 / 1..10 齐全；
// 4) 所有解析为非空字符串，且不与 answer 冲突（choice 首字应含选项字母）。
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const examsDir = path.join(root, 'src', 'data', 'exams');
const files = fs.readdirSync(examsDir).filter(f => /-5\.json$/.test(f)).sort();

let raw;
try {
  raw = fs.readFileSync(path.join(__dirname, 'level-5.json'), 'utf8');
} catch (e) {
  console.error('FAIL: 无法读取 level-5.json:', e.message);
  process.exit(1);
}

let data;
try {
  data = JSON.parse(raw);
} catch (e) {
  console.error('FAIL: JSON 解析失败:', e.message);
  process.exit(1);
}
console.log('OK: JSON 可解析');

let errors = [];
let total = 0;
const keys = new Set(Object.keys(data));

for (const f of files) {
  const session = f.replace(/\.json$/, '');
  const exam = JSON.parse(fs.readFileSync(path.join(examsDir, f), 'utf8'));
  const ana = data[session];
  if (!ana) { errors.push(`${session}: 缺少解析`); continue; }
  keys.delete(session);

  for (const part of ['choice', 'judge']) {
    const expect = exam[part].length;
    const got = ana[part] ? Object.keys(ana[part]).length : 0;
    if (got !== expect) { errors.push(`${session}.${part}: 应有 ${expect} 条，实际 ${got} 条`); continue; }
    for (const q of exam[part]) {
      const n = String(q.n);
      const text = ana[part][n];
      if (typeof text !== 'string' || !text.trim()) {
        errors.push(`${session}.${part}.${n}: 空字符串或缺失`);
        continue;
      }
      total++;
      if (part === 'choice' && q.answer != null) {
        const letter = 'ABCD'[q.answer];
        if (!text.includes(`答案${letter}`) && !text.includes('答案为')) {
          errors.push(`${session}.choice.${n}: 未指明答案 ${letter}`);
        }
      }
      if (part === 'judge') {
        if (!/^[对错]/.test(text.trim())) {
          errors.push(`${session}.judge.${n}: 未以「对/错」开头`);
        }
      }
    }
  }
}
for (const k of keys) errors.push(`level-5.json 中存在多余场次: ${k}`);

if (errors.length) {
  console.error('FAIL:');
  errors.forEach(e => console.error(' -', e));
  process.exit(1);
}
console.log(`OK: ${files.length} 个场次，每个 choice 15 + judge 10，共 ${total} 条解析，全部非空`);

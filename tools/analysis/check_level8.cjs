const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', '..');
const examDir = path.join(base, 'src', 'data', 'exams');
const files = fs.readdirSync(examDir).filter(f => f.endsWith('-8.json')).sort();
const analysis = JSON.parse(fs.readFileSync(path.join(__dirname, 'level-8.json'), 'utf-8'));

const errors = [];
let total = 0;
for (const f of files) {
  const key = f.replace(/\.json$/, '');
  const exam = JSON.parse(fs.readFileSync(path.join(examDir, f), 'utf-8'));
  const a = analysis[key];
  if (!a) { errors.push(`missing session ${key}`); continue; }
  for (const [kind, count] of [['choice', 15], ['judge', 10]]) {
    const section = a[kind] || {};
    for (let n = 1; n <= count; n++) {
      const v = section[String(n)];
      if (v === undefined || v === null) errors.push(`${key}.${kind}.${n} missing`);
      else if (typeof v !== 'string' || !v.trim()) errors.push(`${key}.${kind}.${n} empty`);
      else total++;
    }
  }
  const letters = 'ABCD';
  for (const q of exam.choice) {
    if (q.answer === null || q.answer === undefined) continue;
    const text = (a.choice || {})[String(q.n)] || '';
    if (!text.includes(`选 ${letters[q.answer]}`)) {
      errors.push(`${key}.choice.${q.n} letter mismatch (answer=${letters[q.answer]})`);
    }
  }
}

console.log(`sessions: ${Object.keys(analysis).length}`);
console.log(`total analysis entries: ${total}`);
console.log(`exam files matched: ${files.length}`);
if (errors.length) {
  console.log('ERRORS:');
  errors.forEach(e => console.log(' -', e));
  process.exit(1);
}
console.log('ALL CHECKS PASSED');

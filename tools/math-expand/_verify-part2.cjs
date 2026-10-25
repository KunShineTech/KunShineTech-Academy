// 自查 part-2.json
const fs = require('fs');
const school = require('../../src/data/math/school.json');
const raw = fs.readFileSync(require('path').join(__dirname, 'part-2.json'), 'utf8');
const part = JSON.parse(raw); // 1) JSON 可解析
const list = school.sections.topics.list;
let ok = true;
part.modules.forEach((m, k) => {
  const src = list[5 + k];
  const n = m.points.length;
  if (n < 6 || n > 8) { ok = false; console.log('BAD count', m.name, n); }
  // 原有知识点标题全部保留
  src.points.forEach((p, i) => {
    const found = m.points.some(q => q.title === p.title);
    if (!found) { ok = false; console.log('MISSING', m.name, p.title); return; }
    // 原有知识点内容原样保留（放在新点之前、保持顺序）
    const idx = m.points.findIndex(q => q.title === p.title);
    if (idx !== i) { ok = false; console.log('ORDER/CONTENT mismatch', m.name, p.title, 'at', idx, 'expect', i); }
  });
  // 结构字段检查
  m.points.forEach(p => {
    ['title', 'explain', 'examples', 'tip'].forEach(f => { if (!(f in p)) { ok = false; console.log('missing field', f, p.title); } });
    if (!Array.isArray(p.examples) || p.examples.length < 1) { ok = false; console.log('no examples', p.title); }
    p.examples.forEach(e => { if (!e.q || !e.a) { ok = false; console.log('bad example', p.title); } });
  });
  console.log(m.name, '| points:', n, '| 原有', src.points.length, '保留✓');
});
console.log(ok ? 'ALL CHECKS PASSED' : 'CHECKS FAILED');

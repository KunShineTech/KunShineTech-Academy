// 校验 tools/analysis/level-6.json：
// 1) JSON 可解析；2) 覆盖全部场次，题数与源卷一致（choice 15，judge 10；2023-12 卷 choice 为 16）；3) 无空字符串；4) 结论文本与答案字段一致（选X / 对、错）。
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const analysis = JSON.parse(fs.readFileSync(path.join(root, 'tools/analysis/level-6.json'), 'utf8'));
const letters = 'ABCD';
let total = 0, errors = [];

const examFiles = fs.readdirSync(path.join(root, 'src/data/exams')).filter(f => /-6\.json$/.test(f)).sort();
for (const f of examFiles) {
  const key = f.replace(/\.json$/, '');
  const exam = JSON.parse(fs.readFileSync(path.join(root, 'src/data/exams', f), 'utf8'));
  const a = analysis[key];
  if (!a) { errors.push(`缺少场次 ${key}`); continue; }

  const cKeys = Object.keys(a.choice || {}).sort((x, y) => +x - +y);
  const jKeys = Object.keys(a.judge || {}).sort((x, y) => +x - +y);
  if (cKeys.length !== exam.choice.length) errors.push(`${key}: choice 数量 ${cKeys.length} != 源卷 ${exam.choice.length}`);
  if (jKeys.length !== exam.judge.length) errors.push(`${key}: judge 数量 ${jKeys.length} != 源卷 ${exam.judge.length}`);

  // 判断题答案串
  const parts = [1, 2, 3, 4].map(i => fs.readFileSync(path.join(root, `tools/judge-answers/part-${i}.json`), 'utf8'));
  const ja = Object.assign({}, ...parts.map(p => JSON.parse(p)));
  let judgeKey = ja[key] === 'invalid' ? '1111001111' : ja[key]; // 2023-12-6 答案表来自人工识图
  if (!judgeKey || judgeKey.length !== 10) errors.push(`${key}: 判断题答案串缺失或长度异常`);

  exam.choice.forEach((q, i) => {
    const t = (a.choice || {})[String(i + 1)];
    if (typeof t !== 'string' || !t.trim()) { errors.push(`${key} C${i + 1}: 空或缺失`); return; }
    total++;
    const m = t.match(/^选([A-D])/);
    if (!m) errors.push(`${key} C${i + 1}: 未以“选X”开头`);
    else if (m[1] !== letters[q.answer]) errors.push(`${key} C${i + 1}: 解析结论 ${m[1]} 与答案 ${letters[q.answer]} 不一致`);
  });
  exam.judge.forEach((q, i) => {
    const t = (a.judge || {})[String(i + 1)];
    if (typeof t !== 'string' || !t.trim()) { errors.push(`${key} J${i + 1}: 空或缺失`); return; }
    total++;
    const expect = judgeKey[i] === '1' ? '对' : '错';
    if (!t.startsWith(expect)) errors.push(`${key} J${i + 1}: 解析结论应以“${expect}”开头`);
  });
}

console.log(`场次数: ${Object.keys(analysis).length}`);
console.log(`解析总条数: ${total}`);
if (errors.length) { console.log('发现错误:'); errors.forEach(e => console.log(' - ' + e)); process.exit(1); }
console.log('全部校验通过 ✔');

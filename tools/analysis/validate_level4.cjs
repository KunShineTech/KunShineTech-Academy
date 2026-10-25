// 校验 tools/analysis/level-4.json：
// 1. JSON 可解析
// 2. 覆盖 src/data/exams/ 下全部 *-4.json 场次
// 3. 每个场次 choice 恰好 15 条（键 "1".."15"）、judge 恰好 10 条（键 "1".."10"）
// 4. 无空字符串 / 空白字符串
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const ANALYSIS = path.join(ROOT, "tools", "analysis", "level-4.json");
const EXAMS = path.join(ROOT, "src", "data", "exams");

const data = JSON.parse(fs.readFileSync(ANALYSIS, "utf8"));
console.log("JSON 可解析: OK");

const errors = [];
const examFiles = fs
  .readdirSync(EXAMS)
  .filter((n) => /-4\.json$/.test(n))
  .sort();
const expectedSessions = new Set(examFiles.map((n) => n.replace(/\.json$/, "")));

for (const session of expectedSessions) {
  if (!(session in data)) {
    errors.push(`缺少场次: ${session}`);
    continue;
  }
  const block = data[session];
  for (const [part, count] of [["choice", 15], ["judge", 10]]) {
    const entries = block && block[part];
    if (typeof entries !== "object" || entries === null || Array.isArray(entries)) {
      errors.push(`${session}.${part} 缺失或不是对象`);
      continue;
    }
    const keys = Object.keys(entries);
    const expected = Array.from({ length: count }, (_, i) => String(i + 1));
    const missing = expected.filter((k) => !(k in entries));
    const extra = keys.filter((k) => !expected.includes(k));
    if (missing.length || extra.length) {
      errors.push(`${session}.${part} 键集合错误: 缺 [${missing}] 多 [${extra}]`);
    }
    for (const k of keys) {
      const v = entries[k];
      if (typeof v !== "string" || !v.trim()) {
        errors.push(`${session}.${part}.${k} 为空或不是字符串`);
      }
    }
  }
}

for (const k of Object.keys(data)) {
  if (!expectedSessions.has(k)) errors.push(`存在多余场次: ${k}`);
}

let total = 0;
for (const b of Object.values(data)) total += Object.keys(b.choice).length + Object.keys(b.judge).length;
console.log(`场次数: ${Object.keys(data).length}`);
console.log(`总解析条数: ${total}`);

if (errors.length) {
  console.log("校验失败:");
  errors.forEach((e) => console.log(" -", e));
  process.exit(1);
}
console.log("全部校验通过 ✓");

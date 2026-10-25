# 合并 repair.json 并重新校验
import json, io, sys, glob, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
rep = json.load(io.open('tools/analysis/repair.json', encoding='utf-8'))
for key, sections in rep.items():
    p = f'src/data/exams/{key}.json'
    paper = json.load(io.open(p, encoding='utf-8'))
    for j in paper['judge']:
        s = str(j['n'])
        if s in sections.get('judge', {}):
            j['analysis'] = sections['judge'][s]
    io.open(p, 'w', encoding='utf-8').write(json.dumps(paper, ensure_ascii=False, indent=1))
print('repaired papers:', len(rep))

keys = json.load(io.open('src/data/judge-answers.json', encoding='utf-8'))
mis, noans = [], 0
for p in sorted(glob.glob('src/data/exams/*.json')):
    paper = json.load(io.open(p, encoding='utf-8'))
    k = f"{paper['session']}-{paper['level']}"
    jkey = keys.get(k) or paper.get('judgeAnswers', '')
    for c in paper['choice']:
        a = c.get('analysis', '')
        if not a: mis.append((k, 'c', c['n'], 'no-analysis')); continue
        m = re.search(r'选\s*([A-D])', a[:22]) or re.search(r'答案[是为：:]?\s*([A-D])', a[:22])
        if m and c.get('answer') is not None and ord(m.group(1)) - 65 != c['answer']:
            mis.append((k, 'c', c['n'], 'text=' + m.group(1), 'key=' + str(c['answer'])))
    for j in paper['judge']:
        a = j.get('analysis', '')
        if not a: mis.append((k, 'j', j['n'], 'no-analysis')); continue
        truth = j.get('answer')
        if truth is None and jkey and j['n'] - 1 < len(jkey): truth = jkey[j['n'] - 1] == '1'
        if truth is None: continue
        m = re.match(r'\s*(正确|错误|对|错)', a[:10])
        if m and (m.group(1)[0] in '正对') != truth:
            mis.append((k, 'j', j['n'], 'text=' + m.group(1), 'key=' + str(truth)))
print('mismatches:', len(mis))
for x in mis: print(x)

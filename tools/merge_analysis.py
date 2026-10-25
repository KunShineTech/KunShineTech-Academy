# 合并逐题解析到试卷 JSON 并做答案一致性检查
import json, io, sys, glob, re, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

for af in glob.glob('tools/analysis/level-*.json'):
    lv = af.split('level-')[1].split('.')[0]
    data = json.load(io.open(af, encoding='utf-8'))
    for session, sections in data.items():
        p = f'src/data/exams/{session}.json'
        if not os.path.exists(p):
            print('MISSING paper:', p); continue
        paper = json.load(io.open(p, encoding='utf-8'))
        ca, ja = sections.get('choice', {}), sections.get('judge', {})
        for c in paper['choice']:
            if str(c['n']) in ca: c['analysis'] = ca[str(c['n'])]
        for j in paper['judge']:
            if str(j['n']) in ja: j['analysis'] = ja[str(j['n'])]
        io.open(p, 'w', encoding='utf-8').write(json.dumps(paper, ensure_ascii=False, indent=1))
    print('merged level', lv, len(data), 'papers')

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
            mis.append((k, 'c', c['n'], 'text=' + m.group(1), 'key=' + str(c['answer']), a[:36]))
    for j in paper['judge']:
        a = j.get('analysis', '')
        if not a: mis.append((k, 'j', j['n'], 'no-analysis')); continue
        truth = j.get('answer')
        if truth is None and jkey and j['n'] - 1 < len(jkey): truth = jkey[j['n'] - 1] == '1'
        if truth is None: continue
        m = re.match(r'\s*(正确|错误|对|错)', a[:10])
        if m:
            ok = (m.group(1)[0] in '正对') == truth
            if not ok: mis.append((k, 'j', j['n'], 'text=' + m.group(1), 'key=' + str(truth), a[:36]))
print('mismatches:', len(mis))
for x in mis: print(x)

import json, glob, os, re, sys

data = json.load(open('tools/analysis/level-1.json', encoding='utf-8'))
exams = {}
for f in sorted(glob.glob('src/data/exams/*-1.json')):
    d = json.load(open(f, encoding='utf-8'))
    exams[os.path.basename(f).replace('-1.json', '')] = d

errors = []

# 1. session coverage
if set(data.keys()) != set(k + '-1' for k in exams.keys()):
    errors.append('session mismatch: %s vs %s' % (sorted(data.keys()), sorted(exams.keys())))

total = 0
for key, d in exams.items():
    a = data.get(key + '-1')
    if a is None:
        errors.append('%s missing' % key)
        continue
    # 2. counts
    if set(a['choice'].keys()) != set(str(i) for i in range(1, 16)):
        errors.append('%s choice keys: %d' % (key, len(a['choice'])))
    if set(a['judge'].keys()) != set(str(i) for i in range(1, 11)):
        errors.append('%s judge keys: %d' % (key, len(a['judge'])))
    # 3. no empty / too-long
    for sec in ['choice', 'judge']:
        for k, v in a[sec].items():
            total += 1
            if not v or not v.strip():
                errors.append('%s %s %s empty' % (key, sec, k))
            if len(v) > 220:
                errors.append('%s %s %s too long (%d)' % (key, sec, k, len(v)))
    # 4. choice analysis conclusion must match exam answer letter
    for i, q in enumerate(d['choice'], 1):
        letter = 'ABCD'[q['answer']]
        m = re.match(r'^答案\s*([A-D]?)', a['choice'][str(i)])
        if not m or (m.group(1) and m.group(1) != letter):
            errors.append('%s choice %d: analysis says %s, answer %s' % (key, i, m.group(1) if m else '?', letter))
    # 5. judge analysis prefix consistency (正确/错误)
    for i, q in enumerate(d['judge'], 1):
        v = a['judge'][str(i)]
        if not (v.startswith('正确') or v.startswith('错误')):
            errors.append('%s judge %d bad prefix' % (key, i))
        if q['answer'] is not None:
            want = '正确' if q['answer'] else '错误'
            if not v.startswith(want):
                errors.append('%s judge %d: data answer=%s but analysis says %s' % (key, i, q['answer'], v[:2]))

# 6. cross-check judge conclusions against verified official/derived keys
keys = {
 '2023-03': 'TFFTFFFFTT', '2023-06': 'TTFFTTTFFT', '2023-09': 'TTTFTFFFFT',
 '2023-12': 'TFFFTTFTFT', '2024-03': 'TTFTFFFTTT', '2024-06': 'FFTFTTFFFT',
 '2024-09': 'TFFFFF TTT F'.replace(' ',''), '2024-12': 'TTFFFFFTFF', '2025-03': 'TFFTFFFFFF',
 '2025-06': 'TFTFFFFF TF'.replace(' ',''), '2025-09': 'FTFFTFFFFT', '2025-12': 'FFFFFFFFFF',
 '2026-03': 'TTFFTTTFTF', '2026-06': 'TTFFT TFFFF'.replace(' ',''), '2026-09': 'TFFTTTTFFF',
}
for key, a in data.items():
    k = keys[key[:-2]]
    for i in range(10):
        want = '正确' if k[i] == 'T' else '错误'
        got = a['judge'][str(i+1)][:2]
        if got != want:
            errors.append('%s judge %d: key=%s analysis=%s' % (key, i+1, want, got))

print('sessions:', len(data))
print('total analyses:', total)
if errors:
    print('ERRORS:')
    [print(' -', e) for e in errors]
    sys.exit(1)
print('ALL CHECKS PASSED')

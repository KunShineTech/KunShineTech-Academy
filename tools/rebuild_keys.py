# 用 HD 判读结果重建 judge-answers.json 并复核关键值
import json, io, sys, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
out = {}
for f in sorted(glob.glob('tools/judge-answers/hd-*.json')):
    d = json.load(io.open(f, encoding='utf-8'))
    for k, v in d.items():
        if k in out and out[k] != v:
            print('CONFLICT:', k, out[k], v)
        out[k] = v
print('hd keys:', len(out))
# 关键人工复核值校验
expect = {'2026-06-7': '0001011011', '2025-09-7': '0010010111', '2023-12-1': '1000110001',
          '2026-06-5': '1011100010', '2026-06-8': '1100101101', '2023-12-5': '1001110111',
          '2023-12-6': '1111001111', '2024-03-2': '0100010011', '2025-12-1': '0000000000'}
for k, v in expect.items():
    got = out.get(k)
    print(k, got, 'OK' if got == v else 'MISMATCH!! expect ' + v)
bad = {k: v for k, v in out.items() if len(v) != 10 or any(c not in '01' for c in v)}
print('bad:', bad)
io.open('src/data/judge-answers.json', 'w', encoding='utf-8').write(json.dumps(out, ensure_ascii=False, indent=0))
print('written')

# 为全部真题重新渲染高清判断题答案表（按红色笔迹自动定位）
import pymupdf, re, os, io, sys, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
SRC = r'D:\GESP'
OUT = os.path.join(os.path.dirname(__file__), 'judge-hd')
os.makedirs(OUT, exist_ok=True)

files = sorted(f for f in os.listdir(SRC) if f.endswith('.pdf') and '真题' in f)
result = {}
for f in files:
    m = re.search(r'(\d{4})年(\d{2})月.*?(\d)级', f)
    if not m: continue
    key = f'{m.group(1)}-{m.group(2)}-{m.group(3)}'
    if key in ('2023-03-1','2023-03-2','2023-06-1','2023-06-2','2023-06-3','2023-06-4'):
        continue  # 旧版式答案为文本，无需图像
    doc = pymupdf.open(os.path.join(SRC, f))
    found = []
    for pno in range(len(doc)):
        for r in doc[pno].search_for('答案'):
            clip = pymupdf.Rect(max(0, r.x0 - 260), max(0, r.y0 - 30), min(doc[pno].rect.width, r.x1 + 460), r.y1 + 32)
            pix = doc[pno].get_pixmap(clip=clip, dpi=120)
            red = 0
            for y in range(0, pix.height, 2):
                for x in range(0, pix.width, 2):
                    rr, gg, bb = pix.pixel(x, y)
                    if rr > 150 and gg < 130 and bb < 130:
                        red += 1
            if red > 40:
                found.append((pno, r))
    if len(found) < 2:
        # 回退：定位「判断题」标题之后第一个「答案」表
        jpos = None
        for pno in range(len(doc)):
            for r in doc[pno].search_for('判断题'):
                jpos = (pno, r.y0); break
            if jpos: break
        pick = None
        if jpos:
            for pno in range(jpos[0], len(doc)):
                for r in doc[pno].search_for('答案'):
                    if (pno, r.y0) > jpos:
                        pick = (pno, r); break
                if pick: break
        if not pick:
            print('NO JUDGE TABLE:', key, len(found)); continue
        pno, r = pick
    else:
        pno, r = found[1]
    clip = pymupdf.Rect(max(0, r.x0 - 260), max(0, r.y0 - 42), min(doc[pno].rect.width, r.x1 + 460), r.y1 + 45)
    doc[pno].get_pixmap(clip=clip, dpi=300).save(os.path.join(OUT, f'{key}.png'))
    result[key] = True
print('rendered:', len(result))

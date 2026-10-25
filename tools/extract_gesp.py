# GESP 真题 PDF 结构化提取脚本 v2（兼容 2023-03/06 旧版式 与 2023-09 后新版式）
# 用法: uv run --with pymupdf python tools/extract_gesp.py
# 输出: tools/exam-json/{场次}-{级别}.json + tools/judge-crops/{场次}-{级别}.png
import pymupdf
import re, os, io, json, sys

SRC = r'D:\GESP'
OUT_JSON = os.path.join(os.path.dirname(__file__), 'exam-json')
OUT_CROP = os.path.join(os.path.dirname(__file__), 'judge-crops')
os.makedirs(OUT_JSON, exist_ok=True)
os.makedirs(OUT_CROP, exist_ok=True)

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def visual_lines(doc):
    lines = []
    for pno, page in enumerate(doc):
        d = page.get_text('dict')
        for b in d['blocks']:
            for l in b.get('lines', []):
                txt = ''.join(s['text'] for s in l['spans']).strip()
                if not txt:
                    continue
                lines.append((pno, round(l['bbox'][1], 1), round(l['bbox'][0], 1), txt))
    lines.sort(key=lambda t: (t[0], t[1], t[2]))
    return [t[3] for t in lines]

def grab_answers(win):
    """从「答案」后的窗口中提取答案：新版 A-D 字母 / 旧版 √×对错"""
    letters = re.findall(r'[A-D]', win)
    marks = re.findall(r'[√×✓✗对错]', win)
    if len(marks) >= 8 and len(marks) >= len(letters):
        return ''.join('1' if c in '√✓对' else '0' for c in marks[:10])
    if len(letters) >= 10:
        return ''.join(letters[:15])
    return ''

def parse(fname, path):
    m = re.search(r'(\d{4})年(\d{2})月.*?(\d)级', fname)
    if not m:
        return None
    session, level = f'{m.group(1)}-{m.group(2)}', int(m.group(3))
    doc = pymupdf.open(path)
    lines = visual_lines(doc)
    full = '\n'.join(lines)

    # 答案表：用原始页序文本定位（表格在页首，原始序更整齐）
    raw_full = '\n'.join(p.get_text() for p in doc[:6])
    answer_tables = []
    for am in re.finditer(r'答\s*案', raw_full):
        win = raw_full[am.end(): am.end() + 130]
        a = grab_answers(win)
        if a:
            answer_tables.append(a)
        if len(answer_tables) >= 3:
            break
    choice_ans = answer_tables[0] if answer_tables and len(answer_tables[0]) >= 10 and answer_tables[0][0] in 'ABCD' else ''
    judge_ans = ''
    for a in answer_tables:
        if a and a[0] in '10' and len(a) >= 8:
            judge_ans = a[:10]
            break

    legacy = '一、单选题' in full

    def sec_range(start_pats, end_pats):
        s = None
        for p in start_pats:
            s = re.search(p, full)
            if s: break
        if not s:
            return ''
        e = None
        for p in end_pats:
            e = re.search(p, full[s.end():])
            if e: break
        return full[s.end(): s.end() + (e.start() if e else len(full))]

    if legacy:
        sec_choice = sec_range([r'一、\s*单选题'], [r'二、\s*判断题'])
        sec_judge = sec_range([r'二、\s*判断题'], [r'三、\s*编程题'])
        sec_prog = sec_range([r'三、\s*编程题'], [r'\Z'])
    else:
        sec_choice = sec_range([r'\n\s*1\s*单选题'], [r'\n\s*2\s*判断题'])
        sec_judge = sec_range([r'\n\s*2\s*判断题'], [r'\n\s*3\s*编程题'])
        sec_prog = sec_range([r'\n\s*3\s*编程题'], [r'\Z'])

    # 选择题
    choice = []
    if legacy:
        qparts = re.split(r'\n\s*(\d{1,2})\s*[.、]\s*', '\n' + sec_choice)
    else:
        qparts = re.split(r'第\s*(\d+)\s*题', sec_choice)
    for i in range(1, len(qparts) - 1, 2):
        n = int(qparts[i]); body = qparts[i + 1]
        opts, stem_lines, cur = {}, [], 'stem'
        for ln in body.split('\n'):
            mo = re.match(r'^[口☐□\s]*([A-D])\s*[.、．]\s*(.*)$', ln.strip())
            if mo:
                cur = mo.group(1)
                opts[cur] = mo.group(2).strip()
            elif cur == 'stem':
                stem_lines.append(ln)
            elif cur in opts:
                opts[cur] = (opts[cur] + ' ' + ln.strip()).strip()
        stem = re.sub(r'\n{2,}', '\n', '\n'.join(stem_lines).strip())
        ans = ord(choice_ans[n - 1]) - 65 if n - 1 < len(choice_ans) else None
        item = {'n': n, 'stem': stem, 'options': [opts.get(c, '') for c in 'ABCD'], 'answer': ans}
        if len(opts) != 4:
            item['warn'] = f'options={len(opts)}'
        if stem:
            choice.append(item)

    # 判断题
    judge = []
    if legacy:
        jparts = re.split(r'\n\s*(\d{1,2})\s*[.、]\s*', '\n' + sec_judge)
    else:
        jparts = re.split(r'第\s*(\d+)\s*题', sec_judge)
    for i in range(1, len(jparts) - 1, 2):
        n = int(jparts[i]); body = jparts[i + 1]
        stem = re.sub(r'\n{2,}', '\n', body.strip())
        ans = None
        if n - 1 < len(judge_ans):
            ans = judge_ans[n - 1] == '1'
        judge.append({'n': n, 'stem': stem, 'answer': ans})

    # 编程题
    prog = []
    if legacy:
        # 3. 时间规划 【问题描述】...
        blocks = re.split(r'\n\s*(\d{1,2})\s*[.、]\s+', '\n' + sec_prog)
        for i in range(1, len(blocks) - 1, 2):
            n = int(blocks[i]); body = blocks[i + 1]
            name_m = re.match(r'([^\n【]+)', body)
            name = name_m.group(1).strip() if name_m else f'编程题 {n}'
            desc_m = re.search(r'【问题描述】\s*(.+?)(?:【输入描述】|【输入格式】|$)', body, re.S)
            desc = desc_m.group(1).strip()[:400] if desc_m else ''
            prog.append({'n': n, 'name': name, 'desc': desc})
    else:
        for pm in re.finditer(r'编程题\s*(\d+)', sec_prog):
            start = pm.start()
            nxt = re.search(r'编程题\s*\d+', sec_prog[pm.end():])
            body = sec_prog[start: pm.end() + (nxt.start() if nxt else len(sec_prog))]
            name_m = re.search(r'试题名称[:：]\s*([^\n|]+)', body)
            name = name_m.group(1).strip() if name_m else f'编程题 {pm.group(1)}'
            desc_m = re.search(r'(?:题目描述|问题描述)\s*\n?(.+?)(?:\n\s*3\.\d|\Z)', body, re.S)
            desc = desc_m.group(1).strip()[:400] if desc_m else ''
            prog.append({'n': int(pm.group(1)), 'name': name, 'desc': desc})

    # 判断题答案裁剪图（新版答案为矢量符号，需图像识别；旧版已从文本获得）
    key = f'{session}-{level}'
    if not judge_ans:
        hits = []
        for pno in range(len(doc)):
            for r in doc[pno].search_for('答案'):
                hits.append((pno, r))
        if len(hits) >= 2:
            pno, r = hits[1]
            clip = pymupdf.Rect(0, max(0, r.y0 - 30), doc[pno].rect.width, r.y1 + 30)
            doc[pno].get_pixmap(clip=clip, dpi=180).save(os.path.join(OUT_CROP, f'{key}.png'))

    return {'session': session, 'level': level, 'file': fname, 'legacy': legacy,
            'choiceCount': len(choice), 'judgeCount': len(judge), 'progCount': len(prog),
            'choiceAnswers': choice_ans, 'judgeAnswers': judge_ans,
            'choice': choice, 'judge': judge, 'programming': prog}

def main():
    files = sorted(f for f in os.listdir(SRC) if f.endswith('.pdf') and '真题' in f)
    report = []
    for f in files:
        try:
            r = parse(f, os.path.join(SRC, f))
            if not r:
                report.append({'file': f, 'error': 'name parse'}); continue
            key = f"{r['session']}-{r['level']}"
            with io.open(os.path.join(OUT_JSON, f'{key}.json'), 'w', encoding='utf-8') as fp:
                json.dump(r, fp, ensure_ascii=False, indent=1)
            warn = sum(1 for c in r['choice'] if 'warn' in c)
            noans = sum(1 for c in r['choice'] if c['answer'] is None)
            jnoans = sum(1 for j in r['judge'] if j['answer'] is None)
            report.append({'key': key, 'choice': r['choiceCount'], 'judge': r['judgeCount'],
                           'prog': r['progCount'], 'cans': r['choiceAnswers'],
                           'c-noans': noans, 'j-noans': jnoans, 'warn': warn})
        except Exception as e:
            report.append({'file': f, 'error': str(e)[:150]})
    with io.open(os.path.join(OUT_JSON, '_report.json'), 'w', encoding='utf-8') as fp:
        json.dump(report, fp, ensure_ascii=False, indent=1)
    bad = [r for r in report if r.get('choice') != 15 or r.get('judge') != 10 or r.get('warn')]
    print('total:', len(report), 'bad:', len(bad))
    for r in bad:
        print(r)

if __name__ == '__main__':
    main()

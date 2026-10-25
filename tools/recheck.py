import sys, fitz, os

jobs = [
    (r"D:\GESP\GESP 2023年12月认证C++ 5级真题.pdf", "2023-12-5"),
    (r"D:\GESP\GESP 2023年12月认证C++ 6级真题.pdf", "2023-12-6"),
    (r"D:\GESP\GESP 2026年06月认证C++ 7级真题.pdf", "2026-06-7"),
    (r"D:\GESP\GESP 2026年06月认证C++ 8级真题.pdf", "2026-06-8"),
]

outdir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "judge-crops-recheck")
os.makedirs(outdir, exist_ok=True)

for pdf, key in jobs:
    doc = fitz.open(pdf)
    found = False
    for pno in range(len(doc)):
        page = doc[pno]
        hits = page.search_for("题号")
        for h in hits:
            # render generous area around the 题号 cell: table extends right and below
            clip = fitz.Rect(0, max(0, h.y0 - 20), page.rect.width, h.y1 + 80)
            pix = page.get_pixmap(matrix=fitz.Matrix(300/72, 300/72), clip=clip)
            out = os.path.join(outdir, f"{key}-p{pno}-{int(h.x0)}.png")
            pix.save(out)
            print(out, pix.width, pix.height)
            found = True
    if not found:
        print(f"{key}: 题号 not found in {pdf}, pages={len(doc)}")
    doc.close()

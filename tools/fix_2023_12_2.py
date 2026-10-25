import json, io
p = 'src/data/exams/2023-12-2.json'
d = json.load(io.open(p, encoding='utf-8'))
d['judge'][6]['analysis'] = '错误。「只能」「必须」的说法过于绝对：C++ 允许混合类型运算，编译器会自动进行隐式类型转换（如 int 与 double 相加时，int 先提升为 double），不需要程序员手动转换成相同类型。'
d['judge'][7]['analysis'] = '正确。变量的类型在定义后固定，但可以把其他类型的值赋给它：编译器自动隐式转换为该变量的类型再存储（如 int x; x = 2.5; 后 x 的值为 2），因此同一变量先后被赋不同类型的值是允许的。'
io.open(p, 'w', encoding='utf-8').write(json.dumps(d, ensure_ascii=False, indent=1))
keys = json.load(io.open('src/data/judge-answers.json', encoding='utf-8'))
jkey = keys['2023-12-2']
ok = True
for n in (7, 8, 9):
    j = d['judge'][n - 1]
    truth = jkey[n - 1] == '1'
    verb = j['analysis'][:2]
    match = (verb[0] in '正对') == truth
    print(n, 'key=', truth, 'verb=', verb, 'match=', match)
    ok = ok and match
print('ALL OK' if ok else 'STILL BAD')

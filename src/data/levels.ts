// GESP C++ 各级别元数据：驱动级别切换导航、级别首页、教学安排与阶段测评页。
// 数据内容对照 CCF GESP 官方认证标准编写；教学自测题为原创示例，非官方真题。

export interface QuizItem {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface ProblemItem {
  title: string;
  statement: string;
  input: string;
  output: string;
  sampleIn: string;
  sampleOut: string;
  solution: string; // 参考程序（C++，\n 分隔行）
  hint: string;     // 思路说明
}

export interface LevelInfo {
  level: number;
  cn: string;        // 一级 / 二级 / 三级
  code: string;      // LEVEL 01
  title: string;
  tagline: string;   // 级别首页大标题
  intro: string;     // 级别首页介绍
  syllabus: string[];
  roadmapIntro: string;
  exam: { choice: number; judge: number; programming: number; duration: number; choiceScore: number; judgeScore: number; progScore: number };
  quiz: QuizItem[];
  problems: ProblemItem[];
  advice: string[];
}

export const levels: LevelInfo[] = [
  {
    level: 1,
    cn: '一级',
    code: 'LEVEL 01',
    title: 'GESP C++ 一级',
    tagline: '从认识计算机，到写出第一个程序。',
    intro:
      '面向零基础学生的 GESP C++ 一级课程。从计算机的构成与编程环境出发，掌握变量与输入输出、基本数据类型、算术/关系/逻辑运算，最终能够独立编写顺序、分支、循环三大结构的程序。',
    syllabus: [
      '计算机的基本构成（CPU、内存、I/O 设备）与常见操作系统概念',
      '集成开发环境使用：创建、编辑、保存、编译、调试',
      'cin / cout / scanf / printf 语句与赋值语句',
      '标识符、关键字、常量、变量、表达式的概念',
      '常量与变量的命名、定义、初始化、自加与自减',
      '算术表达式：加、减、乘、除、整除、求余',
      '逻辑运算：与（&&）、或（||）、非（!）',
      '关系运算：大于、大于等于、小于、小于等于、等于、不等于',
      '基本数据类型：整型、实数型、字符型、布尔型',
      '顺序结构程序的编写',
      '分支结构：if、if-else、switch，了解三目运算',
      '循环结构：for、while、do-while 及 break、continue',
      '程序的注释和调试',
    ],
    roadmapIntro:
      '建议每周一次，每次120分钟。官方知识要求分布在前11个主题中，第12课为考前综合训练。实际课时可依据学生接受情况调整。',
    exam: { choice: 15, judge: 10, programming: 2, duration: 120, choiceScore: 2, judgeScore: 2, progScore: 25 },
    quiz: [
      {
        question: '下列哪个标识符可以作为 C++ 变量名？',
        options: ['2count', 'my_age', 'int', 'hello world'],
        answer: 1,
        explanation: '变量名不能以数字开头，不能是关键字，不能包含空格；my_age 由字母、数字、下划线组成且不以数字开头，合法。',
      },
      {
        question: '表达式 17 % 5 的值是多少？',
        options: ['2', '3', '3.4', '编译错误'],
        answer: 0,
        explanation: '% 是求余运算，17 = 3×5 + 2，所以余数为 2。两个整数相除用 / 会舍去小数部分。',
      },
      {
        question: '关系表达式 5 >= 5 的值是？',
        options: ['true', 'false', '5', '编译失败'],
        answer: 0,
        explanation: '>= 是“大于等于”关系运算，5 等于 5 满足条件，结果为布尔值 true（输出为 1）。',
      },
      {
        question: '下列哪种循环结构先执行循环体，再判断循环条件？',
        options: ['for 循环', 'while 循环', 'do-while 循环', 'if 语句'],
        answer: 2,
        explanation: 'do-while 先执行一次循环体再判断条件，因此循环体至少执行一次；while 和 for 都是先判断后执行。',
      },
    ],
    problems: [
      {
        title: '奇偶判断',
        statement: '输入一个整数 n（-10^9 ≤ n ≤ 10^9），判断它是奇数还是偶数。偶数输出 Even，奇数输出 Odd。',
        input: '一个整数 n',
        output: 'Even 或 Odd',
        sampleIn: '17',
        sampleOut: 'Odd',
        solution:
          "#include <iostream>\nusing namespace std;\nint main() {\n    long long n;\n    cin >> n;\n    if (n % 2 == 0) cout << \"Even\\n\";\n    else cout << \"Odd\\n\";\n    return 0;\n}",
        hint: '用 n % 2 判断：余数为 0 是偶数。负数取余不影响本题判断（余数仍是 0 或 ±1）。数据范围超过 int，要用 long long。',
      },
      {
        title: '累加求和',
        statement: '输入正整数 n（1 ≤ n ≤ 10^6），输出 1 到 n 所有整数的和。',
        input: '一个正整数 n',
        output: '1+2+...+n 的和',
        sampleIn: '100',
        sampleOut: '5050',
        solution:
          "#include <iostream>\nusing namespace std;\nint main() {\n    long long n, sum = 0;\n    cin >> n;\n    for (long long i = 1; i <= n; i++) sum += i;\n    cout << sum << \"\\n\";\n    return 0;\n}",
        hint: '循环累加即可。当 n 很大时和约 5×10^11，超过 int 范围，必须开 long long。教学扩展：可直接用公式 n(n+1)/2。',
      },
    ],
    advice: [
      '知识题：重点检查标识符合法性、整除与求余、关系与逻辑运算的真值。',
      '编程题：必须独立完成读题、写代码、运行、边界测试四步，尤其测试 0、1、负数。',
      '调试习惯：从第一天起就要求学生会看编译错误信息，而不是直接问老师。',
      '认证以官方当期通知为准，教学测评不保证考试通过。',
    ],
  },
  {
    level: 2,
    cn: '二级',
    code: 'LEVEL 02',
    title: 'GESP C++ 二级',
    tagline: '从会写代码，到真正会解题。',
    intro:
      '一套面向小学高年级与初中入门学生的 GESP C++ 二级课程。对照官方考纲，结合程序元素、数学原理、算法思维、例题推导和可交互随堂测验，逐步建立独立编程能力。',
    syllabus: [
      '计算机存储的基本概念及分类（RAM、ROM、Cache）',
      '计算机网络的概念、分类及 TCP/IP 四层模型与 OSI 七层模型',
      '程序设计语言的几大分类及特点，常见高级语言',
      '流程图的概念及基本表示符号，绘制方法',
      'ASCII 编码原理及码值与字符的相互转换',
      '数据类型的转换：强制类型转换和隐式类型转换',
      '多层分支结构：if、if-else、switch 及相互嵌套',
      '多层循环结构：for、while、do-while 及相互嵌套',
      '常用数学函数：绝对值、平方根、最大值、最小值、随机数',
    ],
    roadmapIntro:
      '建议每周一次，每次120分钟。九个官方知识要求分布在前10个主题中，第11、12课为教学强化和考前综合训练。实际课时可依据入学测评调整。',
    exam: { choice: 15, judge: 10, programming: 2, duration: 120, choiceScore: 2, judgeScore: 2, progScore: 25 },
    quiz: [
      {
        question: '下列哪一项属于易失性存储器？',
        options: ['ROM', 'RAM', '机械硬盘', '光盘'],
        answer: 1,
        explanation: 'RAM断电后一般不能保留数据；ROM用于存放非易失信息。',
      },
      {
        question: "字符 'A' 的 ASCII 十进制码是多少？",
        options: ['48', '65', '97', '32'],
        answer: 1,
        explanation: "官方二级大纲要求记住空格32、'0'48、'A'65、'a'97。",
      },
      {
        question: 'int x=7/2; 输出 x 的结果？',
        options: ['3.5', '4', '3', '编译失败'],
        answer: 2,
        explanation: '两个int相除执行整数除法，结果向零截断。',
      },
      {
        question: '以下哪个循环更适合枚举所有 1≤i≤n 和 i<j≤n 的数对？',
        options: ['两个嵌套for', '只有一个if', '一个switch', '只用cout'],
        answer: 0,
        explanation: '双重for分别控制i和j，且让j从i+1开始避免重复。',
      },
    ],
    problems: [
      {
        title: '阶梯收费',
        statement:
          '输入正整数 n（1 ≤ n ≤ 10^4），前10单位每单位2元，超过10至20单位的部分每单位3元，超过20单位的部分每单位5元，输出总费用。',
        input: '一个正整数 n',
        output: '总费用（整数）',
        sampleIn: '25',
        sampleOut: '75',
        solution:
          "#include <iostream>\nusing namespace std;\nint main() {\n    int n, fee = 0;\n    cin >> n;\n    if (n <= 10) fee = n * 2;\n    else if (n <= 20) fee = 10 * 2 + (n - 10) * 3;\n    else fee = 10 * 2 + 10 * 3 + (n - 20) * 5;\n    cout << fee << \"\\n\";\n    return 0;\n}",
        hint: '分段累加：每一档只算自己区间内的数量。样例 25 = 10×2 + 10×3 + 5×5 = 75。务必用 n=10、11、20、21 检查分段边界。',
      },
      {
        title: '数字方阵',
        statement: '输入整数 n（1≤n≤9），输出 n 行，每行从1输出到n，数字之间无空格。要求使用嵌套循环。',
        input: '一个整数 n',
        output: 'n 行数字串',
        sampleIn: '4',
        sampleOut: '1234\n1234\n1234\n1234',
        solution:
          "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= n; j++) cout << j;\n        cout << \"\\n\";\n    }\n    return 0;\n}",
        hint: '外层循环控制行，内层循环控制每行输出 1..n。注意换行在内层循环之外。',
      },
    ],
    advice: [
      '知识题：概念准确率目标至少80%，尤其注意计算机基础和ASCII。',
      '编程题：必须独立完成输入输出、算法、代码、边界测试四步。',
      '复盘：错题分为概念、读题、算法、实现、边界五类。',
      '认证以官方当期通知为准，教学测评不保证考试通过。',
    ],
  },
  {
    level: 3,
    cn: '三级',
    code: 'LEVEL 03',
    title: 'GESP C++ 三级',
    tagline: '用数组与字符串，处理真实世界的数据。',
    intro:
      'GESP C++ 三级课程。在二级分支与循环的基础上，学习数制转换与位运算，掌握一维数组与字符串的存储和处理方法，并通过枚举与模拟建立初步的算法思维，能够解决批量数据类问题。',
    syllabus: [
      '数制与编码：二进制、八进制、十六进制的表示与相互转换',
      '位运算：按位与、按位或、按位非、按位异或及移位运算',
      '数据类型的深入理解与表达式求值',
      '一维数组的定义、初始化、遍历与基本应用',
      '数组应用：统计、最值、查找、逆序、插入与删除',
      '字符类型与字符数组，字符的大小写转换',
      'string 类型：定义、读入、遍历、比较',
      '字符串函数：长度、查找、子串、替换、分割',
    ],
    roadmapIntro:
      '建议每周一次，每次120分钟。官方知识要求分布在前11个主题中，第12课为考前综合训练。数制与位运算概念密集，前4课建议适当放慢。',
    exam: { choice: 15, judge: 10, programming: 2, duration: 120, choiceScore: 2, judgeScore: 2, progScore: 25 },
    quiz: [
      {
        question: '十进制数 13 的二进制表示是？',
        options: ['1101', '1011', '1110', '1001'],
        answer: 0,
        explanation: '13 = 8 + 4 + 1 = 2³+2²+2⁰，二进制为 1101。',
      },
      {
        question: '按位与运算 12 & 10 的结果是？',
        options: ['8', '14', '4', '15'],
        answer: 0,
        explanation: '12 = 1100₂，10 = 1010₂，按位与得 1000₂ = 8。',
      },
      {
        question: '声明 int a[5]; 之后，数组 a 的合法下标范围是？',
        options: ['0 ~ 4', '1 ~ 5', '0 ~ 5', '任意整数'],
        answer: 0,
        explanation: 'C++ 数组下标从 0 开始，长度为 5 的数组合法下标是 0 到 4，越界访问是未定义行为。',
      },
      {
        question: 'string s = "GESP"; 表达式 s.size() 的值是？',
        options: ['3', '4', '5', '编译失败'],
        answer: 1,
        explanation: '"GESP" 含 4 个字符，size() 返回字符串长度 4。',
      },
    ],
    problems: [
      {
        title: '十进制转二进制',
        statement: '输入一个十进制正整数 n（1 ≤ n ≤ 10^9），输出它的二进制表示（不含前导零）。',
        input: '一个正整数 n',
        output: 'n 的二进制表示',
        sampleIn: '13',
        sampleOut: '1101',
        solution:
          "#include <iostream>\nusing namespace std;\nint main() {\n    long long n;\n    cin >> n;\n    if (n == 0) { cout << \"0\\n\"; return 0; }\n    int bits[64], cnt = 0;\n    while (n > 0) {\n        bits[cnt++] = n % 2;\n        n /= 2;\n    }\n    for (int i = cnt - 1; i >= 0; i--) cout << bits[i];\n    cout << \"\\n\";\n    return 0;\n}",
        hint: '短除法：反复对 2 取余得到从低位到高位的比特，倒序输出。用数组暂存余数，注意处理 n=0 的边界。',
      },
      {
        title: '回文串判断',
        statement: '输入一个仅含小写字母的字符串 s（长度 1~100），判断它是否是回文（正读反读相同）。是输出 Yes，否输出 No。',
        input: '一个字符串 s',
        output: 'Yes 或 No',
        sampleIn: 'level',
        sampleOut: 'Yes',
        solution:
          "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    string s;\n    cin >> s;\n    bool ok = true;\n    for (int i = 0; i < (int)s.size() / 2; i++)\n        if (s[i] != s[s.size() - 1 - i]) ok = false;\n    cout << (ok ? \"Yes\" : \"No\") << \"\\n\";\n    return 0;\n}",
        hint: '对称位置比较：s[i] 与 s[size-1-i] 只需比到一半。发现一对不同即可判定不是回文。',
      },
    ],
    advice: [
      '知识题：进制转换和位运算要能手算，不能只会按计算器。',
      '编程题：数组题先画下标图，字符串题先明确 size() 与下标范围。',
      '边界意识：空串、单个字符、最大长度是字符串题的常见失分点。',
      '认证以官方当期通知为准，教学测评不保证考试通过。',
    ],
  },
  {
    level: 4,
    cn: '四级',
    code: 'LEVEL 04',
    title: 'GESP C++ 四级',
    tagline: '把代码拆成函数，让程序学会排序与递推。',
    intro:
      'GESP C++ 四级课程。在三级数组与字符串的基础上，学习指针与地址、结构体与二维数组，掌握函数的声明、定义、调用与三种参数传递，理解变量作用域；进入算法世界：递推算法、三种基本排序、复杂度估算，并能完成文件读写与简单的异常处理。',
    syllabus: [
      '理解 C++ 指针类型的概念，掌握指针类型变量的定义、赋值、解引用',
      '掌握 C++ 结构体、二维及多维数组的基本概念及使用',
      '理解模块化编程思想，掌握函数的声明、定义及调用，掌握形参与实参的概念及区别',
      '掌握变量作用域的概念，理解全局变量与局部变量的区别',
      '掌握函数参数的传递方式：值传递、引用传递、指针传递',
      '掌握递推算法基本思想、递推关系式的推导以及递推问题求解',
      '掌握排序算法的概念，了解内排序和外排序的概念及差别，理解排序算法的时间复杂度、空间复杂度、使用场景以及稳定性',
      '掌握冒泡排序、插入排序、选择排序的算法思想、排序步骤及代码实现',
      '简单算法复杂度的估算，含多项式、指数复杂度',
      '掌握文件操作中的重定向，实现文件读写操作，了解文本文件的分类，掌握写操作、读操作、读写操作',
      '了解异常处理机制，掌握异常处理的常用方法',
    ],
    roadmapIntro:
      '建议每周一次，每次120分钟。11 个官方知识考点分布在前 11 课：指针与结构体打头，函数、作用域与参数传递承上启下，递推与三种排序是算法重点，文件与异常收尾；第 12 课为考前综合训练与模拟测评。排序与递推两课建议放慢节奏，配合手算模拟。',
    exam: { choice: 15, judge: 10, programming: 2, duration: 120, choiceScore: 2, judgeScore: 2, progScore: 25 },
    quiz: [
      {
        question: '已知 int a=10; int *p=&a; *p=20; 则执行后 a 的值是？',
        options: ['10', '20', 'p 的地址', '编译错误'],
        answer: 1,
        explanation: 'p 存的是 a 的地址，*p 是解引用，代表 a 本身；*p=20 就是给 a 赋值 20。',
      },
      {
        question: 'void f(int &x){ x=99; } 主程序 int a=1; f(a); 之后 a 的值是？',
        options: ['1', '99', '0', '不确定'],
        answer: 1,
        explanation: '形参 x 前有 &，是引用传递：x 是 a 的别名，函数内修改 x 会直接改变实参 a。',
      },
      {
        question: '下列排序算法中，通常认为不稳定的是？',
        options: ['冒泡排序', '插入排序', '选择排序', '都稳定'],
        answer: 2,
        explanation: '选择排序通过交换把最小值放到前面，可能改变相等元素的相对顺序；冒泡与插入是稳定的。',
      },
      {
        question: '台阶走法 f(1)=1、f(2)=2、f(n)=f(n-1)+f(n-2)，则 f(5) 等于？',
        options: ['5', '8', '7', '6'],
        answer: 1,
        explanation: '逐项递推：f(3)=f(2)+f(1)=3，f(4)=3+2=5，f(5)=5+3=8。',
      },
    ],
    problems: [
      {
        title: '兔子繁殖',
        statement: '第 1 个月有 1 对刚出生的小兔子；小兔子经过 1 个月长成成年兔；每对成年兔每月生 1 对小兔子。输入正整数 n（1 ≤ n ≤ 45），求第 n 个月末的兔子总对数。',
        input: '一个正整数 n',
        output: '第 n 个月末的兔子对数',
        sampleIn: '6',
        sampleOut: '8',
        solution:
          "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    long long a = 1, b = 1;\n    if (n <= 2) { cout << 1 << \"\\n\"; return 0; }\n    for (int i = 3; i <= n; i++) {\n        long long c = a + b;\n        a = b;\n        b = c;\n    }\n    cout << b << \"\\n\";\n    return 0;\n}",
        hint: '对数按月为 1,1,2,3,5,8... 即斐波那契数列，f(n)=f(n-1)+f(n-2)，初值 f(1)=f(2)=1。用两个变量滚动递推即可；f(45) 约 11 亿，必须开 long long。先手算前 6 项核对样例。',
      },
      {
        title: '成绩单排名',
        statement: '输入正整数 n（n≤100），接下来 n 行，每行一个姓名（不含空格）和总分（0~750）。按总分从高到低输出姓名，空格分隔；总分相同的学生保持输入的先后顺序。',
        input: '第一行 n，接下来 n 行姓名与总分',
        output: '按总分降序的姓名序列',
        sampleIn: '4\nTom 600\nAmy 650\nBob 650\nCoco 590',
        sampleOut: 'Amy Bob Tom Coco',
        solution:
          "#include <iostream>\n#include <string>\nusing namespace std;\nstruct Student {\n    string name;\n    int score;\n};\nint main() {\n    int n;\n    cin >> n;\n    Student s[105];\n    for (int i = 0; i < n; i++) cin >> s[i].name >> s[i].score;\n    for (int i = 1; i < n; i++) {\n        Student key = s[i];\n        int j = i - 1;\n        while (j >= 0 && s[j].score < key.score) {\n            s[j + 1] = s[j];\n            j--;\n        }\n        s[j + 1] = key;\n    }\n    for (int i = 0; i < n; i++) {\n        if (i) cout << \" \";\n        cout << s[i].name;\n    }\n    cout << \"\\n\";\n    return 0;\n}",
        hint: '用结构体数组存学生；「同分保持输入顺序」要求稳定排序，选择排序会打乱相对顺序，应使用插入排序（或冒泡）。降序插入时 while 条件用严格小于，相等的两人不会互相跨越。',
      },
    ],
    advice: [
      '知识题：指针的 & 与 *、三种参数传递对实参的影响、排序稳定性与复杂度、递推的初值与关系式，是四级选择判断题的高频考点。',
      '编程题：递推题先手算前几项找规律并核对样例；排序题先想清楚稳定性要求再选算法；文件题先注释 freopen 本地调通再切换。',
      '复盘：错题按「概念不清、关系式推错、排序选错、边界未查、文件名写错」五类归因，逐类突破。',
      '认证以官方当期通知为准，教学测评不保证考试通过。',
    ],
  },
  {
    level: 5,
    cn: '五级',
    code: 'LEVEL 05',
    title: 'GESP C++ 五级',
    tagline: '从会解题，到懂得算法为何高效。',
    intro:
      'GESP C++ 五级课程。在四级函数、指针、结构体与排序递推的基础上，深入初等数论（素数、公约数、同余）、高精度计算与链表结构，系统学习二分、递归、贪心与分治四大算法思想，并能估算算法复杂度，解决更大规模的问题。',
    syllabus: [
      '初等数论：素数与合数、最大公约数与最小公倍数、同余与模运算、约数与倍数、质因数分解、奇偶性等概念与应用',
      '高精度计算：C++ 数组模拟高精度加法、减法、乘法和除法',
      '链表：单链表、双链表、循环链表的创建、插入、删除、遍历与反转，理解三类链表的区别',
      '辗转相除法（欧几里得算法）、素数表的埃氏筛法和线性筛法、唯一分解定理的原理和应用',
      '算法复杂度估算方法（含多项式、对数）',
      '二分查找和二分答案算法（二分枚举法），能够在有序数组中快速定位目标值',
      '递归算法的基本原理、复杂度分析与优化策略（记忆化、递推）',
      '贪心算法的基本原理与最优子结构，能用贪心解决相关问题',
      '分治算法的基本原理：归并排序与快速排序',
    ],
    roadmapIntro:
      '建议每周一次，每次120分钟。官方知识考点分布在前10个主题中：数论与高精度打基础，链表建立结构思维，复杂度分析与二分、递归、贪心、分治构建算法体系；第11课为综合训练，第12课为考前综合测评。数论与链表代码量较大，建议第3~5课放慢进度、多留上机时间。',
    exam: { choice: 15, judge: 10, programming: 2, duration: 180, choiceScore: 2, judgeScore: 2, progScore: 25 },
    quiz: [
      {
        question: '用辗转相除法求 gcd(96, 42)，第一步之后得到的数对是？',
        options: ['gcd(42, 12)', 'gcd(42, 54)', 'gcd(12, 42)', 'gcd(54, 42)'],
        answer: 0,
        explanation: '96 = 2×42 + 12，余数为 12。辗转相除法将 (a, b) 替换为 (b, a%b)，即 (42, 12)。',
      },
      {
        question: '在 100 万个已排好序的数中二分查找一个数，最多需要比较多少次（量级）？',
        options: ['约 100 万次', '约 1000 次', '约 20 次', '约 2 次'],
        answer: 2,
        explanation: '二分每次将范围减半，比较次数为 log₂(10⁶) ≈ 20。这是对数复杂度远优于线性查找的原因。',
      },
      {
        question: '下列哪个递归函数有正确的出口且问题规模在缩小？',
        options: ['int f(int n){ return f(n)+1; }', 'int f(int n){ if(n==0) return 0; return f(n-1); }', 'int f(int n){ return f(n+1); }', 'int f(int n){ if(n==10) return 0; return f(n-1); }'],
        answer: 1,
        explanation: '选项1无缩小会死循环/栈溢出；选项3规模变大永远到不了出口；选项4当 n>10 时 n-1 永远减不到 10；只有选项2在 n==0 处收束且每轮减 1。',
      },
      {
        question: '某算法的时间复杂度为 O(n²)，当数据规模 n 扩大 10 倍时，运算量大约变为原来的？',
        options: ['10 倍', '100 倍', '2 倍', '不变'],
        answer: 1,
        explanation: 'O(n²) 意味着运算量与 n 的平方成正比，n 扩大 10 倍，运算量约扩大 10² = 100 倍。这也是 n≤10⁵ 时不能用 O(n²) 算法的根本原因。',
      },
    ],
    problems: [
      {
        title: '寻找第 k 个幸运数',
        statement:
          '定义「幸运数」为十进制表示中只含数字 4 和 7 的正整数（如 4、7、44、47、74、77……）。按从小到大顺序，输出第 k 个幸运数（k ≤ 1000）。',
        input: '一个正整数 k',
        output: '第 k 个幸运数',
        sampleIn: '6',
        sampleOut: '77',
        solution:
          "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    int k;\n    cin >> k;\n    string s;\n    int x = k + 1;               // 把序号看成一个二进制数\n    while (x > 1) {\n        s = char('0' + (x & 1) + 3) + s;  // 二进制位 1 -> '4', 0 -> '7'（由低到高）\n        x >>= 1;\n    }\n    cout << s << \"\\n\";\n    return 0;\n}",
        hint: '幸运数与二进制一一对应：1→4、0→7。把 k 写成二进制后逐位映射即可（注意位数 = 二进制长度，从 k+1 的最高位后开始取）。也可用 BFS/队列逐层生成验证规律。答案最长不超过 10 位，int 足够。',
      },
      {
        title: '跳格子的最少次数',
        statement:
          '一条直线上有 n 个格子，每个格子写有一个非负整数 a[i]。站在第 1 格，每次最多向前跳 a[i] 格（至少跳 1 格）。求到达第 n 格的最少跳跃次数；若无法到达输出 -1。（n ≤ 1000）',
        input: '第一行一个正整数 n，第二行 n 个非负整数 a[1..n]',
        output: '最少跳跃次数，或 -1',
        sampleIn: '5\n2 3 1 1 4',
        sampleOut: '2',
        solution:
          "#include <iostream>\nusing namespace std;\nint main() {\n    int n, a[1005];\n    cin >> n;\n    for (int i = 1; i <= n; i++) cin >> a[i];\n    int reach = 1, next = 1, steps = 0;\n    bool ok = true;\n    for (int i = 1; i <= n; ) {\n        if (i + a[i] > next) next = i + a[i];  // 贪心：能跳多远算多远\n        if (i == reach) {                      // 已到当前步数的极限\n            if (next == reach) { ok = false; break; }  // 再也跳不出去\n            reach = next;\n            steps++;\n        }\n        i++;\n    }\n    if (ok) cout << steps << \"\\n\";\n    else cout << -1 << \"\\n\";\n    return 0;\n}",
        hint: '经典贪心（跳跃游戏）：维护当前步数能到达的最远点 reach。扫描时不断用 i+a[i] 更新下一次的 reach；当扫到 reach 时必须再跳一步（steps++），若 reach 原地不动说明被困，输出 -1。样例：第 1 格 reach=3，第 2 格更新到 5，第 3 格触发第二步，到达终点，共 2 步。',
      },
    ],
    advice: [
      '知识题：数论概念（素数、同余、奇偶性）要能手算验证，复杂度题牢记常见量级对照表。',
      '编程题：先写四步拆解（输入输出、数学结构、候选算法、边界），再动笔；模板（gcd、埃氏筛、二分、归并）考前必须能默写。',
      '边界意识：n=1、数据最大值、-1 特判、long long 与取模是五级题的高频失分点。',
      '认证以官方当期通知为准，教学测评不保证考试通过。',
    ],
  },
  {
    level: 6,
    cn: '六级',
    code: 'LEVEL 06',
    title: 'GESP C++ 六级',
    tagline: '从一棵小树出发，走遍搜索与动态规划的森林。',
    intro:
      'GESP C++ 六级课程。在五级数论、二分、递归、贪心与分治的基础上，进入数据结构的核心地带：认识树与二叉树及其遍历，掌握哈夫曼树、完全二叉树与二叉排序树，理解哈夫曼编码与格雷编码；学会按问题特点选择 DFS 或 BFS；掌握一维动态规划与简单背包问题；同时了解面向对象的封装、继承、多态，以及栈、队列与循环队列的经典应用，全面提升建模与解题能力。',
    syllabus: [
      '掌握树的基本概念，掌握其构造与遍历的相关算法',
      '掌握哈夫曼树、完全二叉树、二叉排序树的相关概念和应用',
      '理解哈夫曼编码、格雷编码相关原理并能进行简单应用',
      '掌握深度优先搜索算法（DFS）、宽度优先搜索算法（也称广度优先搜索算法，BFS）、二叉树的搜索算法的概念及应用，能够根据现实问题选择合适的搜索算法',
      '掌握简单动态规划的算法思想，能够使用代码解决相应的一维动态规划问题和简单背包问题',
      '掌握面向对象的思想，了解封装、继承、多态的基本概念，并掌握类的创建和基本的使用方法',
      '掌握栈、队列、循环队列的基本定义、应用场景和常见操作',
    ],
    roadmapIntro:
      '建议每周一次，每次120分钟。七条官方知识考点分布在前10课：树与遍历3课、编码1课、搜索2课、动态规划2课、面向对象1课、栈与队列1课；第11课为综合训练（树+搜索、DP+栈队列的串联应用），第12课为考前综合测评与模拟演练。实际课时可依据学生接受情况调整，搜索与动态规划两章建议放慢节奏、多动手填表模拟。',
    exam: { choice: 15, judge: 10, programming: 2, duration: 180, choiceScore: 2, judgeScore: 2, progScore: 25 },
    quiz: [
      {
        question: '有 n 个结点的完全二叉树（下标从 1 开始），结点 i 的左孩子下标是？',
        options: ['i / 2', '2 * i', '2 * i + 1', 'i + 1'],
        answer: 1,
        explanation: '完全二叉树数组存储时编号规律：左孩子 2i，右孩子 2i+1，父亲 i/2（整除）。i+1 是同层下一个结点，i/2 是父亲。',
      },
      {
        question: '构造哈夫曼树时，每次应该从候选集合中取出哪两棵树合并？',
        options: ['权值最大的两棵', '权值最小的两棵', '高度最高的两棵', '任意两棵'],
        answer: 1,
        explanation: '哈夫曼算法的贪心策略是每次合并权值最小的两棵，使大权值结点拥有更短的路径，从而保证带权路径长度 WPL 最小。WPL 还等于每次合并产生的新权值之和。',
      },
      {
        question: '一维动态规划「爬楼梯」的转移方程 f(i) = f(i-1) + f(i-2) 体现了什么思想？',
        options: ['贪心思想', '分治思想', '把大问题拆成重叠子问题并存储复用', '枚举思想'],
        answer: 2,
        explanation: '动态规划的核心是把原问题拆成重叠的子问题，并把子问题的答案存起来重复利用，避免递归的重复计算。爬楼梯的最后一步只能从 i-1 或 i-2 跨来，两个子问题求和即得转移方程。',
      },
      {
        question: '关于栈和队列，下列说法正确的是？',
        options: ['栈先进先出，队列后进先出', '栈后进先出，队列先进先出', '两者完全相同', '栈只能从栈底删除元素'],
        answer: 1,
        explanation: '栈是后进先出（LIFO），典型应用有括号匹配、撤销操作；队列是先进先出（FIFO），典型应用有任务排队、BFS 的待扩展列表。循环队列用取模实现首尾相接，并故意留一个空位区分队空与队满。',
      },
    ],
    problems: [
      {
        title: '家族树的深度',
        statement:
          '小明的家族可以看成一棵树。输入 n（1 ≤ n ≤ 100）表示家族人数，接下来 n-1 行每行两个整数 u v，表示 u 是 v 的父亲，1 号是家族辈分最高的祖先。请计算这棵家族树的深度（祖先算第 1 层）。',
        input: '第一行正整数 n，接下来 n-1 行，每行两个整数 u v 表示父子关系',
        output: '一个整数，表示树的深度',
        sampleIn: '5\n1 2\n1 3\n2 4\n2 5',
        sampleOut: '3',
        solution:
          "#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> child[105];\nint depth(int u) {\n    int d = 1;\n    for (int i = 0; i < (int)child[u].size(); i++)\n        d = max(d, 1 + depth(child[u][i]));\n    return d;\n}\nint main() {\n    int n;\n    cin >> n;\n    for (int i = 1; i < n; i++) {\n        int u, v;\n        cin >> u >> v;\n        child[u].push_back(v);\n    }\n    cout << depth(1) << \"\\n\";\n    return 0;\n}",
        hint: '树的深度是递归定义的：depth(u) = 1 + 所有孩子的 depth 中的最大值；没有孩子时深度为 1。样例中 1 在第 1 层，2、3 在第 2 层，4、5 在第 3 层，答案 3。自测别忘了 n=1 的边界。',
      },
      {
        title: '连续小票最大金额',
        statement:
          '小华收集了 n 张购物小票，第 i 张的金额是 a[i]（可为负数，表示退款）。他想把一段连续的购物记录拿去参加抽奖，要求这段记录金额总和尽量大。输入 n（1 ≤ n ≤ 1000）和 n 个整数 a[i]（-1000 ≤ a[i] ≤ 1000），输出最大总和。',
        input: '第一行正整数 n，第二行 n 个整数 a[i]',
        output: '一个整数，表示连续一段的最大总和',
        sampleIn: '6\n1 -2 3 5 -1 2',
        sampleOut: '9',
        solution:
          "#include <iostream>\nusing namespace std;\nint main() {\n    int n;\n    cin >> n;\n    long long x, f, best;\n    cin >> x;\n    f = best = x;\n    for (int i = 2; i <= n; i++) {\n        cin >> x;\n        f = max(x, f + x);\n        best = max(best, f);\n    }\n    cout << best << \"\\n\";\n    return 0;\n}",
        hint: '一维 DP（最大连续和）：f = max(a[i], f + a[i])，前面的段挣钱就接上、亏钱就单开，同时记录历史最优。注意初值必须取第一个元素，保证全负数数据（如 -5 -2）答案是 -2 而不是 0。样例选 3+5-1+2 得 9。',
      },
    ],
    advice: [
      '知识题：重点巩固完全二叉树编号公式、三种遍历口诀、哈夫曼 WPL 的「合并和」算法与格雷码异或公式，这些是选择判断的高频考点。',
      '编程题：搜索题先写递归框架再填回溯，DP 题先在草稿纸填小表格，树题先画树，杜绝直接上手硬写。',
      '边界意识：long long 防溢出、数组开足余量、递归注意空结点与栈空队空判断，每道题至少设计两组边界数据自测。',
      '认证以官方当期通知为准，教学测评不保证考试通过。',
    ],
  },
  {
    level: 7,
    cn: '七级',
    code: 'LEVEL 07',
    title: 'GESP C++ 七级',
    tagline: '从会解题，到驾驭图与表的高级武器。',
    intro:
      'GESP C++ 七级课程。在六级树与搜索动态规划的基础上，学习数学库常用函数，深入复杂动态规划（二维 DP、区间 DP、LIS、LCS 及滚动数组空间优化），系统掌握图的存储与 DFS/BFS 遍历、泛洪算法，以及哈希表的概念与应用，能够应对更大规模、更综合的算法问题。',
    syllabus: [
      '数学库常用函数：三角函数 sin(x)、cos(x)；对数函数 log10(x)（以 10 为底）、log2(x)（以 2 为底）；指数函数 exp(x)（以 e 为底）',
      '复杂动态规划：二维动态规划、区间动态规划、最长上升子序列（LIS）、最长公共子序列（LCS），以及基于滚动数组降低空间复杂度的方法',
      '图的定义及基本图论算法：有向图与无向图、节点的度；图的存储（邻接矩阵、邻接表）；基于 DFS 和 BFS 的图搜索与遍历；泛洪（flood fill）算法',
      '哈希表的概念与知识及其应用',
    ],
    roadmapIntro:
      '建议每周一次，每次120分钟。官方知识考点分布在前9课：数学库（第1课）、复杂动态规划（第2-4课）、图论基础（第5-7课）、哈希表（第8-9课）；第10、11课为动态规划、图论与哈希的综合训练，第12课为考前综合测评。动态规划部分思维密度大，建议适当放慢并保证当堂练习量。',
    exam: { choice: 15, judge: 10, programming: 2, duration: 180, choiceScore: 2, judgeScore: 2, progScore: 25 },
    quiz: [
      {
        question: '在 C++ 数学库中，要计算 30° 角的正弦值，正确的做法是？',
        options: ['sin(30)', 'sin(30 * PI / 180)', 'sin(PI / 30)', 'cos(30 * PI / 180)'],
        answer: 1,
        explanation: '数学库三角函数的参数是弧度而非角度，必须先把角度乘以 PI/180 转成弧度；sin(30) 得到的是约 -0.988，是常见错误选项。',
      },
      {
        question: '最长上升子序列（LIS）中，状态 f[i] 的经典定义是？',
        options: ['前 i 个数中的 LIS 长度', '以 a[i] 结尾的最长上升子序列长度', '以 a[i] 开头的最长上升子序列长度', 'a[i] 在所有上升子序列中出现的次数'],
        answer: 1,
        explanation: '「以 a[i] 结尾」才能用「j<i 且 a[j]<a[i] 则 f[i]=max(f[i],f[j]+1)」转移；最终答案是所有 f[i] 的最大值，而不是 f[n]。',
      },
      {
        question: '关于无权图的最短路径（最少边数），下列说法正确的是？',
        options: ['只能用 DFS 逐条枚举', 'BFS 按层扩散，第一次到达目标时的层数就是最少边数', '必须先把边排序', '邻接矩阵无法求最短路'],
        answer: 1,
        explanation: 'BFS 从起点按距离逐层扩展，顶点第一次被访问时距离必然最短；入队时打标记、入队时更新距离是关键实现细节。',
      },
      {
        question: '哈希表中处理冲突的拉链法是指？',
        options: ['拒绝插入冲突的元素', '把所有元素按顺序连成一条链', '哈希值相同的元素在对应桶中挂成一条链，查找时先定位桶再沿链比对', '每发生一次冲突就重建整个表'],
        answer: 2,
        explanation: '拉链法在每个桶位维护一个链表存储同哈希值的元素，平均查找仍为 O(1)，最坏情况退化为 O(链长)。',
      },
    ],
    problems: [
      {
        title: '最少换乘',
        statement: '某市有 n 个公交站点（编号 1~n）、m 条公交线路。每条线路按顺序经过若干个站点，同一条线路上任意两站之间可以直达（双向）。求从站点 s 到站点 t 最少需要换乘几次；若不可达输出 -1。',
        input: '第一行四个整数 n、m、s、t（n≤1000，m≤100，每条线路站点数之和不超过 10^4）。接下来 m 行，每行第一个整数 k 表示该线路站点数，后跟 k 个站点编号。',
        output: '最少换乘次数；不可达输出 -1。',
        sampleIn: '5 2 1 5\n3 1 2 3\n3 3 4 5',
        sampleOut: '1',
        solution:
          "#include <iostream>\n#include <vector>\n#include <queue>\nusing namespace std;\nvector<int> adj[1005];\nint dist[1005];\nint main() {\n    int n, m, s, t;\n    cin >> n >> m >> s >> t;\n    for (int line = 0; line < m; line++) {\n        int k;\n        cin >> k;\n        vector<int> stops(k);\n        for (int i = 0; i < k; i++) cin >> stops[i];\n        for (int i = 0; i < k; i++)\n            for (int j = i + 1; j < k; j++) {\n                adj[stops[i]].push_back(stops[j]);\n                adj[stops[j]].push_back(stops[i]);\n            }\n    }\n    for (int i = 1; i <= n; i++) dist[i] = -1;\n    queue<int> q;\n    q.push(s);\n    dist[s] = 0;\n    while (!q.empty()) {\n        int u = q.front(); q.pop();\n        for (int v : adj[u])\n            if (dist[v] == -1) {\n                dist[v] = dist[u] + 1;\n                q.push(v);\n            }\n    }\n    if (dist[t] == -1) cout << -1 << \"\\n\";\n    else cout << dist[t] - 1 << \"\\n\";\n    return 0;\n}",
        hint: '把「同线路站点两两可达」翻译成邻接表中的边（两两连边或只连相邻站均可），然后 BFS 求最少经过几站，换乘次数 = 经过站数 - 1。样例 1→3→5 经过 2 站，换乘 1 次。dist 数组用 -1 兼任访问标记。',
      },
      {
        title: '网格最大路径和',
        statement: '一个 n×m 的网格，每个格子里有一个非负整数。从左上角 (1,1) 出发，每次只能向右或向下走，到达右下角 (n,m)。求路径上数字之和的最大值。',
        input: '第一行两个整数 n、m（n,m≤500）。接下来 n 行，每行 m 个非负整数（每个数不超过 1000）。',
        output: '最大路径和。',
        sampleIn: '3 3\n1 3 1\n1 5 1\n4 2 1',
        sampleOut: '12',
        solution:
          "#include <iostream>\nusing namespace std;\nlong long f[505][505];\nint main() {\n    int n, m;\n    cin >> n >> m;\n    for (int i = 1; i <= n; i++)\n        for (int j = 1; j <= m; j++) {\n            int x;\n            cin >> x;\n            long long fromUp = (i > 1) ? f[i-1][j] : 0;\n            long long fromLeft = (j > 1) ? f[i][j-1] : 0;\n            long long best = 0;\n            if (i > 1) best = fromUp;\n            if (j > 1 && fromLeft > best) best = fromLeft;\n            f[i][j] = best + x;\n        }\n    cout << f[n][m] << \"\\n\";\n    return 0;\n}",
        hint: '二维 DP：f[i][j] 表示走到 (i,j) 的最大和，f[i][j]=x+max(上方,左方)。第一行第一列只有单一来源，边界用 i>1、j>1 判断。样例最优路径 1→3→5→2→1，和为 12。最大和约 500×500×1000=2.5×10^8，int 勉强够用但开 long long 更稳。',
      },
    ],
    advice: [
      '知识题：数学库重点记弧度制与对数底数；图论重点记度的概念、邻接矩阵与邻接表的区别。',
      '编程题：先识别模型（LIS/LCS/区间DP、BFS/泛洪、哈希计数），再套模板；DP 务必写清状态定义再编码。',
      '复盘：错题按「概念不清、状态定义错、边界遗漏、实现笔误、读题偏差」五类归因，滚动数组与建图是高频失分点。',
      '认证以官方当期通知为准，教学测评不保证考试通过。',
    ],
  },
  {
    level: 8,
    cn: '八级',
    code: 'LEVEL 08',
    title: 'GESP C++ 八级',
    tagline: '从会解题，到懂得为什么这样解。',
    intro:
      'GESP C++ 八级课程，是 GESP 认证体系的最高级别。七级我们已经攻克了复杂动态规划、图论与哈希表；八级在此基础上登上一层楼：以组合数学（计数原理、排列组合、杨辉三角）与倍增法拓宽思维，以最小生成树与最短路径（Kruskal、Prim、Dijkstra、Floyd）收束图论体系，并系统学习算法的时间空间效率分析与优化技巧。完成八级学习后，学生的算法素养已可平滑衔接 CSP-J/S 等更高阶竞赛。',
    syllabus: [
      '掌握计数原理，包括加法原理和乘法原理',
      '掌握排列与组合基础知识，包括排列、组合的基本概念，及能实现基础排列和组合编程问题的一般方法',
      '掌握杨辉三角形（又称帕斯卡三角形）的概念',
      '掌握倍增法概念，了解倍增法的时间复杂度',
      '掌握代数与平面几何基础知识（初中数学部分）：方程的概念及一元一次方程、二元一次方程的基本求解技巧；基础平面几何概念、基本图形（长方形、三角形、圆形等）的面积',
      '掌握图论算法及综合应用技巧：最小生成树的概念、Kruskal 算法、Prim 算法；最短路径的概念、单源最短路径的 Dijkstra 算法、Floyd 算法等；理解实现同一功能的不同算法的比较，并可以灵活解决相关问题',
      '算法的时间和空间效率分析：能够分析各类算法（包括排序、查找、树和图遍历、搜索、分治及动态规划等）的时间和空间复杂度',
      '算法优化：理解不同方法求解一个问题在时间复杂度和空间复杂度上的差异，理解使用数学知识辅助求解问题的技巧，掌握一般的算法优化技巧',
    ],
    roadmapIntro:
      '建议每周一次，每次120分钟。8 条官方知识考点分布在前 10 课：第 1~5 课完成组合数学、倍增与数学基础，第 6~8 课完成最小生成树与最短路径，第 9~10 课完成算法复杂度分析与优化；第 11 课为综合训练，第 12 课为考前综合测评。图论与组合数学并列为八级难点，若学生基础较弱可各增加一次巩固课。',
    exam: { choice: 15, judge: 10, programming: 2, duration: 180, choiceScore: 2, judgeScore: 2, progScore: 25 },
    quiz: [
      {
        question: '从 4 件上衣中选 1 件、3 条裤子中选 1 条配成一套，共有多少种搭配？',
        options: ['7 种', '12 种', '24 种', '4 种'],
        answer: 1,
        explanation: '选衣与选裤是分步关系，缺一不可，用乘法原理：4×3=12 种。「或者」关系才用加法。',
      },
      {
        question: 'C(8,3) 的值等于下列哪一项？',
        options: ['C(8,5)', 'A(8,3)', 'C(7,3)', '56'],
        answer: 0,
        explanation: '由组合数对称性 C(n,m)=C(n,n-m)，C(8,3)=C(8,5)=56；注意 C(8,3)=56 是数值，但 A(8,3)=336，二者不等。',
      },
      {
        question: '用 Dijkstra 求单源最短路时，每次被「确定」（钉死）的点是？',
        options: ['编号最小的未访问点', '未确定点中当前 dist 最小的点', '与起点相邻的点', '边数最多的点'],
        answer: 1,
        explanation: 'Dijkstra 的贪心核心：当前距离最小的未确定点，其最短距离不可能再被改进，可以直接确定。',
      },
      {
        question: 'n=10^5 时，下列哪个时间复杂度的算法能在 1 秒内完成（1 秒约 10^8 次运算）？',
        options: ['O(n²)', 'O(2ⁿ)', 'O(n log n)', 'O(n³)'],
        answer: 2,
        explanation: 'n²=10^10、n³=10^15 都远超 10^8，2ⁿ 更是天文数字；n log n 约 1.7×10^6 次，轻松通过。',
      },
    ],
    problems: [
      {
        title: '校园网布线',
        statement: '学校有 n 个机房，已知 m 条可选网线的两端机房与铺设费用。请设计一个方案使所有机房互相连通，输出最小总费用；若无法连通所有机房，输出 -1。',
        input: '第一行两个整数 n、m（2≤n≤100，1≤m≤2000）。接下来 m 行，每行三个整数 u、v、w，表示 u 与 v 机房之间铺设网线的费用为 w（1≤w≤1000）。',
        output: '一个整数：连通所有机房的最小总费用；若无法连通，输出 -1。',
        sampleIn: '4 4\n1 2 1\n2 3 2\n3 4 3\n1 4 4',
        sampleOut: '6',
        solution:
          "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nint f[105];\nint find(int x){ return f[x]==x ? x : f[x]=find(f[x]); }\nstruct Edge{ int u, v, w; };\nbool cmp(Edge a, Edge b){ return a.w < b.w; }\nint main(){\n    int n, m;\n    cin >> n >> m;\n    vector<Edge> es(m);\n    for(int i=0;i<m;i++) cin >> es[i].u >> es[i].v >> es[i].w;\n    sort(es.begin(), es.end(), cmp);\n    for(int i=1;i<=n;i++) f[i]=i;\n    long long ans=0; int cnt=0;\n    for(int i=0;i<m;i++){\n        int fu=find(es[i].u), fv=find(es[i].v);\n        if(fu!=fv){ f[fu]=fv; ans+=es[i].w; cnt++; }\n    }\n    if(cnt==n-1) cout << ans << '\\n';\n    else cout << -1 << '\\n';\n    return 0;\n}",
        hint: '「连通所有点、总代价最小」是最小生成树的定义，直接套 Kruskal：边排序 + 并查集判环，选够 n-1 条边即停。易错点：必须检查 cnt 是否达到 n-1（判 -1），ans 用 long long，并查集要路径压缩。样例应选费用 1、2、3 的三条边。',
      },
      {
        title: '末班车',
        statement: '深夜公交停运后，要从 1 号车站走到 n 号车站。已知 m 条单向通道及其步行耗时，求最短耗时；若无法到达，输出 -1。',
        input: '第一行两个整数 n、m（2≤n≤500，1≤m≤10^4）。接下来 m 行，每行三个整数 u、v、w，表示从 u 站到 v 站有一条耗时为 w 的单向通道（1≤w≤1000）。',
        output: '一个整数：从 1 号站到 n 号站的最短耗时；若无法到达，输出 -1。',
        sampleIn: '5 5\n1 2 3\n2 3 2\n1 3 9\n3 4 1\n4 5 4',
        sampleOut: '10',
        solution:
          "#include <iostream>\n#include <cstring>\nusing namespace std;\nconst int INF = 0x3f3f3f3f;\nint g[505][505], dist[505];\nbool vis[505];\nint main(){\n    int n, m;\n    cin >> n >> m;\n    memset(g, 0x3f, sizeof g);\n    for(int i=0;i<m;i++){\n        int u, v, w;\n        cin >> u >> v >> w;\n        g[u][v] = min(g[u][v], w);\n    }\n    memset(dist, 0x3f, sizeof dist);\n    dist[1] = 0;\n    for(int t=1; t<=n; t++){\n        int u = 0;\n        for(int i=1; i<=n; i++)\n            if(!vis[i] && dist[i] < dist[u]) u = i;\n        vis[u] = true;\n        for(int v=1; v<=n; v++)\n            if(dist[u] + g[u][v] < dist[v])\n                dist[v] = dist[u] + g[u][v];\n    }\n    if(dist[n] >= INF) cout << -1 << '\\n';\n    else cout << dist[n] << '\\n';\n    return 0;\n}",
        hint: '固定起点的最短路 → Dijkstra（朴素 O(n²) 对本题规模足够）。注意是单向边只存 g[u][v]，重边取 min，结束时 dist[n] 仍为 INF 说明不可达。样例中 1→2→3 只要 5，优于直达的 9，总耗时 5+1+4=10。',
      },
    ],
    advice: [
      '知识题：八级概念题爱考「原理辨析」（加法 vs 乘法、排列 vs 组合）与「算法比较」（Kruskal vs Prim、Dijkstra vs Floyd），建议用对照表形式记忆。',
      '编程题：Kruskal、Dijkstra、Floyd、快速幂、组合数递推五大模板必须做到不看资料一次写对，并养成提交前亲手过一遍样例的习惯。',
      '复杂度意识：读题先扫数据范围，1 秒约 10^8 次运算，据此预判算法上限；优化优先考虑数学公式与预处理，而非常数微调。',
      '认证以官方当期通知为准，教学测评不保证考试通过。',
    ],
  },
];

export const levelMap = new Map(levels.map((l) => [l.level, l]));

export function getLevel(level: number): LevelInfo | undefined {
  return levelMap.get(level);
}

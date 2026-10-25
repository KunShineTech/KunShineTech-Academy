// KunShineTech Academy 课程体系元数据：驱动顶部层级导航、首页课程分区与各课程占位页。
// 结构：navGroups（顶部主菜单，共十三组）→ children（下拉子菜单 / 课程板块）。
// 十三组：GESP / CSP 竞赛 / 程序设计 / Web 技术 / 数学基础 / 计算机核心 / 机器学习 /
// 大模型与 Agent / 具身智能 / AI 基础设施 / 软件工程 / 软件架构 / 科研与职业。
// status: 'available' 已上线 / 'building' 建设中。

export interface Program {
  slug: string;        // 路由标识；gesp 使用独立子树 /gesp/，其余为 /program/{slug}/
  code: string;        // 展示标签
  nav: string;         // 菜单短名称
  title: string;
  tagline: string;     // 一句话口号
  intro: string;
  status: 'available' | 'building';
  href: string;        // 入口链接
  audience: string;    // 适合人群
  plans: string[];     // 规划模块（建设中板块展示用）
}

export interface NavGroup {
  nav: string;         // 课程方向全称（首页分区标题）
  short: string;        // 顶部主菜单短名称
  children: Program[]; // 仅一个元素时渲染为普通链接，多个时渲染为下拉菜单
}

const gesp: Program = {
  slug: 'gesp',
  code: 'CCF GESP',
  nav: 'GESP 总览',
  title: 'GESP C++ 等级认证',
  tagline: '从认识计算机，到算法与数据结构。',
  intro:
    '覆盖 CCF GESP C++ 一至八级的完整互动课程：一级建立编程基础，二级掌握嵌套结构与数学函数，三级驾驭数组与字符串，四级深入函数指针与排序递推，五级攻克数论与二分贪心分治，六级攀登树、搜索与动态规划，七级进阶图论与复杂动态规划，八级登顶组合数学与算法优化。',
  status: 'available',
  href: `${import.meta.env.BASE_URL}/gesp/`,
  audience: '小学高年级至高中编程学习者',
  plans: [],
};

const cspJPrelim: Program = {
  slug: 'csp-j-prelim',
  code: 'CSP-J',
  nav: 'CSP-J 初赛',
  title: 'CSP-J 初赛（第一轮）',
  tagline: '笔试闯关：计算机基础与阅读代码。',
  intro:
    '面向 CSP-J 第一轮（笔试）的备考课程，覆盖计算机基础知识、数学基础、程序阅读与完善、数据结构概念等题型，帮助学生顺利通过笔试关。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/csp-j-prelim/`,
  audience: '具备 GESP 三至五级水平的初学者',
  plans: ['计算机基础知识串讲', '数学基础（进制、组合、逻辑）', '程序阅读与结果预测', '程序完善与填空', '历年真题分类训练', '模拟笔试与讲评'],
};

const cspJFinal: Program = {
  slug: 'csp-j-final',
  code: 'CSP-J',
  nav: 'CSP-J 复赛',
  title: 'CSP-J 复赛（第二轮）',
  tagline: '上机实战：四道算法题的完整训练。',
  intro:
    '面向 CSP-J 第二轮（上机）的集训课程，围绕枚举、模拟、搜索、动态规划、图论等考点，训练读题建模、代码实现、对拍调试与考场策略。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/csp-j-final/`,
  audience: '通过 CSP-J 初赛或具备 GESP 五级水平的学生',
  plans: ['考点体系与真题风格分析', '模拟与枚举专项', '搜索与动态规划专项', '图论与数据结构专项', '对拍与调试训练', '全真模拟赛与复盘'],
};

const cspSPrelim: Program = {
  slug: 'csp-s-prelim',
  code: 'CSP-S',
  nav: 'CSP-S 初赛',
  title: 'CSP-S 初赛（第一轮）',
  tagline: '提高组笔试：更深的概念与更强的代码阅读。',
  intro:
    '面向 CSP-S 第一轮（笔试）的备考课程，涵盖算法复杂度分析、数据结构进阶、组合数学与数论等提高组笔试核心考点。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/csp-s-prelim/`,
  audience: '具备 GESP 六至七级水平的学生',
  plans: ['算法与复杂度分析', '进阶数据结构概念', '数论与组合数学基础', '程序阅读强化训练', '历年真题分类训练', '模拟笔试与讲评'],
};

const cspSFinal: Program = {
  slug: 'csp-s-final',
  code: 'CSP-S',
  nav: 'CSP-S 复赛',
  title: 'CSP-S 复赛（第二轮）',
  tagline: '提高组上机：从会做到拿满。',
  intro:
    '面向 CSP-S 第二轮（上机）的集训课程，系统训练高级数据结构、动态规划进阶、图论算法与数学方法，强调部分分策略、卡常与考场时间管理。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/csp-s-final/`,
  audience: '具备 GESP 七至八级或 CSP-J 高分水平的学生',
  plans: ['高级数据结构专题', '动态规划进阶专题', '图论算法专题', '数学方法专题', '部分分与骗分策略', '全真模拟赛与复盘'],
};

const noi: Program = {
  slug: 'noi',
  code: 'NOI',
  nav: 'NOIP · NOI',
  title: 'NOIP / NOI 竞赛提高',
  tagline: '等级认证之后，竞赛能力没有终点。',
  intro:
    'GESP 8 级只是等级认证的终点；本课程面向 NOIP/NOI 的算法进阶，覆盖树状数组、线段树、并查集、复杂动态规划、网络流、字符串算法与组合数学等高阶竞赛内容。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/noi/`,
  audience: '已完成 GESP 8 级或 CSP-S 水平的竞赛选手',
  plans: ['树状数组与线段树', '并查集与可持久化结构', '动态规划进阶', '网络流', '字符串算法（KMP/后缀）', '组合数学与生成函数'],
};

const python: Program = {
  slug: 'python',
  code: 'PYTHON',
  nav: 'Python',
  title: 'Python 程序设计',
  tagline: '另一门母语，同样的编程思维。',
  intro:
    'Python 零基础到进阶课程：从语法与交互式编程入门，到函数、面向对象、文件与常用库，再到数据分析与自动化小项目，与 GESP 体系思维互通。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/python/`,
  audience: '编程初学者及希望掌握第二语言的学生',
  plans: ['语法基础与交互式编程', '函数与模块化', '列表字典等核心容器', '面向对象入门', '文件操作与常用库', '数据分析与自动化项目'],
};

const cpp: Program = {
  slug: 'cpp',
  code: 'C++',
  nav: 'C++',
  title: 'C++ 程序设计',
  tagline: '系统级性能与面向对象的典范。',
  intro: '面向工程开发的 C++ 课程：在 GESP 语法基础上深入面向对象、模板与 STL，掌握内存管理与现代 C++ 特性，胜任性能敏感型开发。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/cpp/`,
  audience: '有 C++ 语法基础、希望走向工程开发的学习者',
  plans: ['核心语法进阶', '面向对象与模板', 'STL 与泛型编程', '内存管理与性能优化', '现代 C++ 特性', '项目实战'],
};

const csharp: Program = {
  slug: 'csharp',
  code: 'C#',
  nav: 'C#',
  title: 'C# 程序设计',
  tagline: '.NET 平台的优雅语言。',
  intro: 'C# 与 .NET 开发课程：从语法与面向对象起步，掌握 LINQ、异步编程与 ASP.NET Core，构建桌面与 Web 应用。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/csharp/`,
  audience: '有编程基础、希望进入 .NET 生态的学习者',
  plans: ['C# 语法与 .NET 基础', '面向对象与 LINQ', '异步与并发', 'ASP.NET Core 入门', '数据访问与 EF Core', '项目实战'],
};

const java: Program = {
  slug: 'java',
  code: 'JAVA',
  nav: 'Java',
  title: 'Java 程序设计',
  tagline: '企业级开发的主力语言。',
  intro: 'Java 课程：扎实的语法与面向对象基础，配合集合框架、JVM 原理与 Spring Boot，通往企业级后端开发。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/java/`,
  audience: '有编程基础、希望从事后端开发的学习者',
  plans: ['核心语法与面向对象', '集合框架与异常 IO', 'JVM 初探', 'Spring Boot 入门', '数据库与持久化', '项目实战'],
};

const go: Program = {
  slug: 'go',
  code: 'GO',
  nav: 'Go',
  title: 'Go 程序设计',
  tagline: '云原生时代的简洁语言。',
  intro: 'Go 语言课程：简洁的语法、强大的并发模型与丰富的标准库，是云原生与微服务开发的利器。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/go/`,
  audience: '有编程基础、关注云原生方向的学习者',
  plans: ['语法基础', '结构体与接口', 'goroutine 与 channel 并发', '网络编程与标准库', '微服务入门', '项目实战'],
};

const rust: Program = {
  slug: 'rust',
  code: 'RUST',
  nav: 'Rust',
  title: 'Rust 程序设计',
  tagline: '安全与性能兼得。',
  intro: 'Rust 课程：以所有权系统著称的系统级语言，在编译期消灭内存错误，适合高性能与高可靠场景。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/rust/`,
  audience: '有编程基础、追求系统级能力的学习者',
  plans: ['所有权与借用', '结构体与枚举', '错误处理', 'trait 与泛型', '并发安全', '项目实战'],
};

const javascript: Program = {
  slug: 'javascript',
  code: 'JS',
  nav: 'JavaScript',
  title: 'JavaScript 程序设计',
  tagline: '前端之母语，也能写后端。',
  intro: 'JavaScript 课程：浏览器中的交互核心，配合 Node.js 覆盖全栈，理解事件、异步与 ES6+ 现代语法。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/javascript/`,
  audience: '前端初学者与全栈爱好者',
  plans: ['语法与 DOM 操作', '事件与异步编程', 'ES6+ 现代特性', '浏览器 API', 'Node.js 入门', '项目实战'],
};

const typescript: Program = {
  slug: 'typescript',
  code: 'TS',
  nav: 'TypeScript',
  title: 'TypeScript 程序设计',
  tagline: '给 JavaScript 加上类型。',
  intro: 'TypeScript 课程：以静态类型提升大型前端项目的可维护性，掌握类型系统、泛型与工程化实践。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/typescript/`,
  audience: '有 JavaScript 基础、希望进阶工程化的学习者',
  plans: ['类型系统基础', '接口与泛型', '类型收窄与推断', '工程化配置', '与主流框架结合', '项目实战'],
};

const html: Program = {
  slug: 'html',
  code: 'HTML',
  nav: 'HTML',
  title: 'HTML 网页结构',
  tagline: '网页的结构骨架。',
  intro: 'HTML 课程：用语义化标签搭建网页骨架，覆盖表单、多媒体、HTML5 新特性与可访问性基础。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/html/`,
  audience: '零基础前端入门者',
  plans: ['常用标签与语义化', '表单与多媒体', 'HTML5 新特性', '可访问性基础', 'SEO 基础', '页面实战'],
};

const css: Program = {
  slug: 'css',
  code: 'CSS',
  nav: 'CSS',
  title: 'CSS 样式设计',
  tagline: '网页的颜值担当。',
  intro: 'CSS 课程：从选择器与盒模型到 Flex/Grid 布局、响应式设计与动画，让页面既好看又适配各种设备。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/css/`,
  audience: '零基础前端入门者',
  plans: ['选择器与盒模型', 'Flex 与 Grid 布局', '响应式设计', '动画与过渡', '预处理器入门', '页面实战'],
};

const mathSchool: Program = {
  slug: 'math-school',
  code: 'MATH',
  nav: '中小学',
  title: '编程数学 · 中小学',
  tagline: 'GESP 一二级的数学基本功。',
  intro: '覆盖 GESP C++ 一级、二级真题涉及的数学知识：数与运算、整除与奇偶、素数初步、常见几何、时间日期、单位换算与枚举计数，每个知识点配生活化例题与易错提醒，为编程学习和认证考试打好数学地基。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/math-school/`,
  audience: '小学阶段备考 GESP 一二级的学生',
  plans: [],
};

const discreteMath: Program = {slug: 'discrete-math',
  code: 'MATH',
  nav: '离散数学',
  title: '离散数学',
  tagline: 'AI 与算法的逻辑地基。',
  intro: '离散数学是算法正确性推理与 AI 逻辑表达的共同语言：逻辑、集合、图论与组合数学贯穿大模型与搜索算法的始终。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/discrete-math/`,
  audience: '希望夯实 AI 与算法数学基础的学习者',
  plans: ['命题逻辑与集合', '图论基础', '组合数学', '数论初步', '抽象代数概览'],
};

const linearAlgebra: Program = {
  slug: 'linear-algebra',
  code: 'MATH',
  nav: '线性代数',
  title: '线性代数',
  tagline: '向量与矩阵的语言。',
  intro: '从词嵌入到注意力矩阵，线性代数是深度学习的计算底座；掌握它才能真正读懂模型内部的每一步变换。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/linear-algebra/`,
  audience: '希望读懂深度学习数学原理的学习者',
  plans: ['向量与矩阵运算', '线性方程组', '特征值与特征向量', '张量基础', '在深度学习中的应用'],
};

const calculus: Program = {
  slug: 'calculus',
  code: 'MATH',
  nav: '微积分',
  title: '微积分',
  tagline: '理解变化与梯度的数学。',
  intro: '反向传播的本质是链式法则，训练优化依赖梯度；微积分让「模型为什么这样学习」不再神秘。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/calculus/`,
  audience: '希望理解训练原理与优化方法的学习者',
  plans: ['极限与导数', '偏导数与梯度', '积分基础', '多元微积分', '梯度下降的联系'],
};

const probability: Program = {
  slug: 'probability',
  code: 'MATH',
  nav: '概率统计',
  title: '概率论与数理统计',
  tagline: '从不确定性中发现规律。',
  intro: '损失函数、采样生成与模型评估都建立在概率之上；统计学思维是阅读 AI 论文与设计实验的必备能力。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/probability/`,
  audience: '希望建立统计思维、读懂实验结论的学习者',
  plans: ['概率分布', '条件概率与贝叶斯', '期望与方差', '参数估计', '假设检验'],
};

const optimization: Program = {
  slug: 'optimization',
  code: 'MATH',
  nav: '最优化',
  title: '数值分析与最优化',
  tagline: '让模型找到最好的解。',
  intro: '从 SGD 到 Adam，模型训练就是一场大规模数值优化；数值稳定性知识则帮助你避开训练中的坑。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/optimization/`,
  audience: '希望深入训练算法与数值方法的学习者',
  plans: ['梯度下降家族', '数值稳定性', '约束优化', '随机优化', '在模型训练中的应用'],
};

const embodiedMath: Program = {
  slug: 'embodied-math',
  code: 'MATH',
  nav: '具身智能数学',
  title: '具身智能数学',
  tagline: '描述机器人世界的数学。',
  intro: '三维空间的旋转、映射与估计，是机器人感知与控制的数学本体；也是进入 SLAM 与具身大模型的先修课。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/embodied-math/`,
  audience: '具备线代基础、转向机器人方向的学习者',
  plans: ['三维旋转与坐标变换', '李群与李代数', '状态估计', '运动学与动力学数学基础'],
};

const csAlgorithms: Program = {
  slug: 'cs-algorithms',
  code: 'CS',
  nav: '数据结构与算法',
  title: '数据结构与算法',
  tagline: '程序员的通用内功。',
  intro: '从竞赛思维走向工程思维：复杂度分析、经典结构与算法设计范式，是 AI 系统与基础设施开发的共同底座。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/cs-algorithms/`,
  audience: '大学计算机专业学生及自学 CS 核心课的学习者',
  plans: ['复杂度分析', '树与图的高级结构', '哈希与字符串结构', '算法设计范式', '竞赛到工程的过渡'],
};

const computerOrganization: Program = {
  slug: 'computer-organization',
  code: 'CS',
  nav: '计算机组成原理',
  title: '计算机组成原理',
  tagline: '读懂机器如何执行程序。',
  intro: '理解 CPU、缓存与指令集，才能写出真正高性能的代码，也是后续 GPU 与推理优化的硬件基础。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/computer-organization/`,
  audience: '大学计算机专业学生及自学 CS 核心课的学习者',
  plans: ['CPU 与指令集', '存储层次与缓存', '总线与 I/O', '性能分析'],
};

const os: Program = {
  slug: 'os',
  code: 'CS',
  nav: '操作系统',
  title: '操作系统',
  tagline: '管理硬件与并发的系统之魂。',
  intro: '进程、内存与并发是每一行后端代码的运行环境；操作系统知识是 AI Infra 与系统开发的必修课。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/os/`,
  audience: '大学计算机专业学生及自学 CS 核心课的学习者',
  plans: ['进程与线程', '内存管理', '文件系统', '并发与同步'],
};

const networks: Program = {
  slug: 'networks',
  code: 'CS',
  nav: '计算机网络',
  title: '计算机网络',
  tagline: '连接一切的分层协议体系。',
  intro: '从 TCP/IP 到 HTTP，网络知识支撑分布式训练通信与大模型服务部署，是后端与 Infra 的通用语言。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/networks/`,
  audience: '大学计算机专业学生及自学 CS 核心课的学习者',
  plans: ['TCP/IP 协议栈', 'HTTP 与应用层', '路由与传输', '网络安全基础'],
};

const database: Program = {
  slug: 'database',
  code: 'CS',
  nav: '数据库系统',
  title: '数据库系统',
  tagline: '数据的存取艺术与事务保障。',
  intro: '关系模型、索引与事务是 RAG 知识库与训练数据管线的根基；理解引擎原理才能设计高效数据系统。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/database/`,
  audience: '大学计算机专业学生及自学 CS 核心课的学习者',
  plans: ['关系模型与 SQL', '事务与并发控制', '索引与查询优化', 'NoSQL 概览'],
};

const compiler: Program = {
  slug: 'compiler',
  code: 'CS',
  nav: '编译原理',
  title: '编译原理',
  tagline: '从源代码到机器指令的翻译艺术。',
  intro: 'Tokenizer 的本质是词法分析，推理引擎离不开编译优化思想；编译原理是理解大模型与 AI 编译器的钥匙。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/compiler/`,
  audience: '大学计算机专业学生及自学 CS 核心课的学习者',
  plans: ['词法与语法分析', '中间表示', '优化与代码生成', '解释器实践'],
};

const distributedSystems: Program = {
  slug: 'distributed-systems',
  code: 'CS',
  nav: '分布式系统',
  title: '分布式系统',
  tagline: '让万台机器像一台机器一样工作。',
  intro: '一致性、容错与调度是千卡集群训练的软件基础；分布式思维也是设计 Agent 平台与大模型服务的框架。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/distributed-systems/`,
  audience: '大学计算机专业学生及自学 CS 核心课的学习者',
  plans: ['一致性与共识', '容错与复制', '调度与存储', '分布式应用案例'],
};

const parallelComputing: Program = {
  slug: 'parallel-computing',
  code: 'CS',
  nav: '并行计算',
  title: '并行计算',
  tagline: '把问题拆给多个计算单元同时解决。',
  intro: 'SIMD、多线程与 GPU 并行是 CUDA 与高性能推理的前置知识；并行思维贯穿 AI 基础设施的每一层。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/parallel-computing/`,
  audience: '大学计算机专业学生及自学 CS 核心课的学习者',
  plans: ['并行编程模型', 'SIMD 与多线程', 'GPU 并行', '性能优化实践'],
};

const ml: Program = {
  slug: 'ml',
  code: 'ML',
  nav: '机器学习基础',
  title: '机器学习基础',
  tagline: '让程序从数据中学习。',
  intro:
    '经典机器学习课程：NumPy/Pandas 数据处理，回归、分类、聚类、树模型与模型评估调参。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/ml/`,
  audience: '具备 Python 与高中数学基础的学习者',
  plans: ['数学与 NumPy/Pandas 基础', '监督学习：回归与分类', '无监督学习：聚类与降维', '模型评估与调参', '经典项目实战'],
};

const deepLearning: Program = {
  slug: 'deep-learning',
  code: 'DL',
  nav: '深度学习',
  title: '深度学习',
  tagline: '深度网络与 PyTorch 实战。',
  intro:
    '深度学习课程：PyTorch 与自动微分，CNN/RNN，训练技巧与项目实战，为大模型学习打底。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/deep-learning/`,
  audience: '完成机器学习基础的学习者',
  plans: ['PyTorch 与自动微分', 'CNN 与计算机视觉', 'RNN 与序列模型', '训练技巧与正则化', '图像识别项目实战'],
};

const llmCore: Program = {
  slug: 'llm-core',
  code: 'AI',
  nav: '大模型原理',
  title: '大模型原理',
  tagline: '从 Transformer 到对齐训练。',
  intro: '系统拆解现代大语言模型：Attention 机制、预训练流程、SFT 与偏好优化，并以从零实现小型 GPT 收束全部原理。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/llm-core/`,
  audience: '完成深度学习、希望进入大模型方向的学习者',
  plans: ['Transformer 与 Attention', 'Tokenizer 与预训练', 'SFT 与偏好优化', '小型 GPT 从零实现', '开源小模型 LoRA 微调'],
};

const multimodal: Program = {
  slug: 'multimodal',
  code: 'AI',
  nav: '多模态与生成',
  title: '多模态与生成式 AI',
  tagline: '图文音视的统一理解与生成。',
  intro: '从视觉语言模型到 Diffusion 生成，覆盖多模态理解与生成的主流范式，打通从感知到创作的技术链路。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/multimodal/`,
  audience: '完成深度学习、希望进入大模型方向的学习者',
  plans: ['视觉语言模型', 'Diffusion 生成模型', '语音与视频概览', '图文理解应用实战'],
};

const aiAgent: Program = {
  slug: 'ai-agent',
  code: 'AI',
  nav: 'AI Agent 系统',
  title: 'AI Agent 系统',
  tagline: '会规划、会用工具的智能体。',
  intro: '从 RAG 到工具调用与规划记忆，系统构建可评测、可落地的 Agent 系统，是 LLM 应用开发的核心能力。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/ai-agent/`,
  audience: '完成深度学习、希望进入大模型方向的学习者',
  plans: ['RAG 检索增强', '工具调用与编排', '规划与记忆', 'Agent 评测', '企业知识 Agent 实战'],
};

const roboticsBasics: Program = {
  slug: 'robotics-basics',
  code: 'EMBODIED',
  nav: '机器人基础',
  title: '机器人学基础',
  tagline: '从 ROS 2 开始认识机器人。',
  intro: '机器人方向的第一课：以 ROS 2 为框架建立系统观，配合仿真环境完成运动学与传感器的初步实践。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/robotics-basics/`,
  audience: '具备 Python/C++、线代与物理基础，关注机器人方向的学习者',
  plans: ['ROS 2 框架', '机器人运动学', '传感器与执行器', 'Gazebo/MuJoCo 仿真入门'],
};

const slam: Program = {
  slug: 'slam',
  code: 'EMBODIED',
  nav: '感知与 SLAM',
  title: '感知与 SLAM',
  tagline: '让机器人看清世界、知道自己在哪。',
  intro: '视觉感知与状态估计是机器人自主性的来源；SLAM 将多传感器信息融合为一致的环境与位姿理解。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/slam/`,
  audience: '具备 Python/C++、线代与物理基础，关注机器人方向的学习者',
  plans: ['计算机视觉基础', '深度估计与目标识别', '传感器融合', 'SLAM 与状态估计'],
};

const planningControl: Program = {
  slug: 'planning-control',
  code: 'EMBODIED',
  nav: '规划与控制',
  title: '规划与控制',
  tagline: '从路径规划到稳定运动。',
  intro: '在感知之上做决策：路径规划给出「怎么走」，控制算法保证「走得稳」，是机器人落地闭环的关键两层。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/planning-control/`,
  audience: '具备 Python/C++、线代与物理基础，关注机器人方向的学习者',
  plans: ['路径与运动规划', 'PID 与 MPC 控制', '任务规划', '机械臂抓取/导航实战'],
};

const vla: Program = {
  slug: 'vla',
  code: 'EMBODIED',
  nav: '具身大模型',
  title: '具身大模型（VLA 与世界模型）',
  tagline: '给机器人装上大脑。',
  intro: '把大模型的泛化能力带入物理世界：VLA 模型、模仿与强化学习、Sim-to-Real，构成具身智能的最前沿。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/vla/`,
  audience: '具备 Python/C++、线代与物理基础，关注机器人方向的学习者',
  plans: ['视觉语言动作模型', '模仿学习', '强化学习在机器人中的应用', 'Sim-to-Real', '世界模型概览'],
};

const gpuCuda: Program = {
  slug: 'gpu-cuda',
  code: 'INFRA',
  nav: 'GPU 与 CUDA',
  title: 'GPU 与 CUDA',
  tagline: '榨干硬件的性能。',
  intro: 'AI 算力的直接来源：理解 GPU 体系结构并用 CUDA/Triton 编写高性能算子，是推理优化的第一步。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/gpu-cuda/`,
  audience: '具备 C++/系统基础，希望从事 AI Infra 的学习者',
  plans: ['GPU 体系结构', 'CUDA 编程', 'Triton 算子开发', '性能分析与调优'],
};

const distributedTraining: Program = {
  slug: 'distributed-training',
  code: 'INFRA',
  nav: '分布式训练',
  title: '分布式训练',
  tagline: '千卡集群上的模型训练。',
  intro: '大模型训练是分布式系统与深度学习的交叉战场：并行策略、集合通信与容错机制决定训练的效率与成本。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/distributed-training/`,
  audience: '具备 C++/系统基础，希望从事 AI Infra 的学习者',
  plans: ['并行策略（DP/TP/PP）', '通信与集合通信库', '训练容错与检查点', '大规模训练实践'],
};

const inference: Program = {
  slug: 'inference',
  code: 'INFRA',
  nav: '推理优化',
  title: '推理系统优化',
  tagline: '让模型又快又省地服务。',
  intro: '从 KV Cache 到量化与推测解码，推理优化直接决定大模型服务的成本与体验，是 AI Infra 的热门战场。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/inference/`,
  audience: '具备 C++/系统基础，希望从事 AI Infra 的学习者',
  plans: ['KV Cache 与批处理', '量化与压缩', '推测解码', 'vLLM 部署实战'],
};

const seRequirements: Program = {
  slug: 'se-requirements',
  code: 'SE',
  nav: '需求分析',
  title: '软件工程 · 需求分析',
  tagline: '把「想要什么」说清楚。',
  intro: '需求分析课程：学习访谈、用户故事、用例建模与需求文档化，掌握把模糊想法转化为可执行规格的方法。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/se-requirements/`,
  audience: '希望参与真实软件项目的学生与开发者',
  plans: ['需求获取与访谈', '用户故事与用例', '需求建模', '需求规格说明', '需求变更管理', '案例实战'],
};

const seArchitecture: Program = {
  slug: 'se-architecture',
  code: 'SE',
  nav: '架构设计',
  title: '软件工程 · 架构设计',
  tagline: '为系统定下整体骨架。',
  intro: '架构设计课程：在需求与实现之间架起桥梁，学习如何划分系统边界、选择技术路线并输出架构设计文档。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/se-architecture/`,
  audience: '有项目经验、希望承担设计角色的开发者',
  plans: ['架构视图与文档', '质量属性权衡', '技术选型方法', '接口与契约设计', '架构评审', '案例实战'],
};

const seModule: Program = {
  slug: 'se-module',
  code: 'SE',
  nav: '模块设计',
  title: '软件工程 · 模块设计',
  tagline: '高内聚、低耦合的划分艺术。',
  intro: '模块设计课程：学习职责划分、模块化原则与设计模式，把架构落到一个个清晰、可测试的模块上。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/se-module/`,
  audience: '有编程基础、希望提升代码组织能力的开发者',
  plans: ['模块化原则', '类与接口设计', '常用设计模式', '依赖管理', '单元测试友好设计', '案例实战'],
};

const seDevelopment: Program = {
  slug: 'se-development',
  code: 'SE',
  nav: '软件开发',
  title: '软件工程 · 软件开发',
  tagline: '规范、高效地把设计变成代码。',
  intro: '软件开发课程：覆盖编码规范、版本控制、代码评审与持续集成，养成团队级开发习惯。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/se-development/`,
  audience: '希望进入团队开发协作的学习者',
  plans: ['编码规范与风格', 'Git 版本控制', '代码评审流程', '持续集成入门', '调试与问题定位', '案例实战'],
};

const seTesting: Program = {
  slug: 'se-testing',
  code: 'SE',
  nav: '软件测试',
  title: '软件工程 · 软件测试',
  tagline: '让缺陷在交付前现形。',
  intro: '软件测试课程：从单元测试到集成测试、自动化测试与性能测试，建立分层测试思维与质量保障体系。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/se-testing/`,
  audience: '希望系统掌握质量保障方法的学习者',
  plans: ['测试基础与用例设计', '单元测试与测试框架', '集成与接口测试', '自动化测试', '性能测试入门', '案例实战'],
};

const seOps: Program = {
  slug: 'se-ops',
  code: 'SE',
  nav: '软件运维',
  title: '软件工程 · 软件运维',
  tagline: '让软件稳定地跑下去。',
  intro: '软件运维课程：学习部署发布、监控告警、日志分析与故障排查，理解 DevOps 文化与自动化运维实践。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/se-ops/`,
  audience: '希望了解线上系统运行与维护的学习者',
  plans: ['部署与发布流程', '监控与告警', '日志分析', '故障排查方法', 'DevOps 与自动化', '案例实战'],
};

const aiEngineering: Program = {
  slug: 'ai-engineering',
  code: 'SE',
  nav: 'AI 工程',
  title: '软件工程 · AI 工程',
  tagline: 'AI 原生的软件交付能力。',
  intro:
    '面向 AI 时代的工程扩展：AI 辅助开发、Agentic Workflow、LLMOps、数据工程、可靠性与 AI 安全，构建可测试、可维护、可扩展的 AI 系统。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/ai-engineering/`,
  audience: '具备软件开发基础、希望构建 AI 系统的工程师',
  plans: ['AI 辅助开发与代码审查', 'Agentic Workflow', 'LLMOps 与模型运维', '数据工程与可观测性', 'AI 安全与可靠性工程'],
};

const archApplication: Program = {
  slug: 'arch-application',
  code: 'ARCH',
  nav: '应用架构',
  title: '软件架构 · 应用架构',
  tagline: '单个应用内部的结构之美。',
  intro: '应用架构课程：研究分层架构、六边形架构、CQRS 等模式，设计可维护、可测试、能演进的单体应用。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/arch-application/`,
  audience: '有项目开发经验的进阶学习者',
  plans: ['分层架构模式', '六边形与洋葱架构', 'CQRS 与事件溯源概览', '应用演进与重构', '案例剖析'],
};

const archTechnical: Program = {
  slug: 'arch-technical',
  code: 'ARCH',
  nav: '技术架构',
  title: '软件架构 · 技术架构',
  tagline: '技术选型与基础设施的顶层设计。',
  intro: '技术架构课程：围绕可扩展性、可用性与性能，学习服务拆分、中间件选型与云基础设施规划。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/arch-technical/`,
  audience: '有后端开发经验、关注技术决策的学习者',
  plans: ['质量属性与 trade-off', '服务拆分策略', '中间件选型', '高可用设计', '云原生基础设施', '案例剖析'],
};

const archData: Program = {
  slug: 'arch-data',
  code: 'ARCH',
  nav: '数据架构',
  title: '软件架构 · 数据架构',
  tagline: '让数据存得对、流得动、用得好。',
  intro: '数据架构课程：学习数据建模、存储选型、数据流转与治理，设计支撑业务的数据底座。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/arch-data/`,
  audience: '有数据库基础、关注数据系统的学习者',
  plans: ['数据建模方法', '存储技术选型', '数据集成与流转', '数据质量与治理', '实时数仓概览', '案例剖析'],
};

const archSolution: Program = {
  slug: 'arch-solution',
  code: 'ARCH',
  nav: '解决方案架构',
  title: '软件架构 · 解决方案架构',
  tagline: '面向客户问题的整体方案设计。',
  intro: '解决方案架构课程：学习从业务问题出发整合产品与技术的方案设计方法，兼顾可行性与成本。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/arch-solution/`,
  audience: '希望连接业务与技术的学习者',
  plans: ['需求到方案的转化', '方案设计与呈现', '成本与可行性评估', '集成与迁移策略', '案例剖析'],
};

const archEnterprise: Program = {
  slug: 'arch-enterprise',
  code: 'ARCH',
  nav: '企业架构',
  title: '软件架构 · 企业架构',
  tagline: '站在组织高度看系统。',
  intro: '企业架构课程：了解业务架构、数据架构、应用架构与技术架构的对齐方法，学习用架构治理支撑企业战略。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/arch-enterprise/`,
  audience: '有架构经验、希望拓宽视野的进阶学习者',
  plans: ['企业架构框架概览', '业务与 IT 对齐', '架构治理', '架构资产与复用', '案例剖析'],
};

const archAi: Program = {
  slug: 'arch-ai',
  code: 'ARCH',
  nav: 'AI 系统架构',
  title: '软件架构 · AI 系统架构',
  tagline: '设计大模型驱动的系统。',
  intro: '面向 AI 时代的架构扩展：模型服务、RAG 与 Agent 平台、LLMOps 的架构设计方法与真实案例剖析。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/arch-ai/`,
  audience: '有架构经验、转向 AI 系统的进阶学习者',
  plans: ['模型服务与 RAG 架构', 'Agent 平台设计', 'LLMOps 架构', 'AI 平台案例剖析'],
};

const archRobotics: Program = {
  slug: 'arch-robotics',
  code: 'ARCH',
  nav: '机器人系统架构',
  title: '软件架构 · 机器人系统架构',
  tagline: '实时、可靠、智能的机器人系统。',
  intro: '机器人系统是架构设计的硬核场景：实时通信、感知-规划-控制流水线与可靠性设计，兼顾智能与确定性的权衡。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/arch-robotics/`,
  audience: '有架构经验、关注机器人系统的进阶学习者',
  plans: ['ROS 2 系统架构', '感知-规划-控制流水线', '实时通信与可靠性', '机器人系统案例剖析'],
};

const researchMethods: Program = {
  slug: 'research-methods',
  code: 'CAREER',
  nav: '科研方法',
  title: '科研方法与学术能力',
  tagline: '从读论文到做出原创成果。',
  intro: '科研是长期竞争力：系统训练文献检索、论文精读（含学术英语长难句）、论文复现、实验设计与学术写作（LaTeX/英文），打通从学习到原创的路径。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/research-methods/`,
  audience: '规划长期发展的学生与工程师',
  plans: ['论文阅读与文献检索', '学术英语精读与写作', '论文复现', '实验设计与消融', '学术写作（LaTeX）', '顶会与开源贡献'],
};

const fde: Program = {
  slug: 'fde',
  code: 'SE',
  nav: 'FDE 前沿部署',
  title: '前沿部署工程师（FDE）',
  tagline: '深入客户现场的 AI 工程师。',
  intro: '解析 Palantir 带火的前沿部署工程师（Forward Deployed Engineer）岗位：能力模型、客户现场的需求挖掘、快速原型与持续交付、领域知识沉淀与 AI 应用落地方法，面向希望连接技术与业务一线的高级工程师。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/fde/`,
  audience: '希望从事 FDE、解决方案工程师或客户现场交付角色的学习者',
  plans: ['FDE 角色与能力模型', '客户现场的需求挖掘', '快速原型与交付', '领域知识与行业方案', 'AI 应用落地方法', '从 FDE 到产品化'],
};

const career: Program = {
  slug: 'career',
  code: 'CAREER',
  nav: '职业发展',
  title: 'AI 职业发展与岗位路线',
  tagline: '通往大厂与研究机构的路径图。',
  intro: '把能力转化为机会：算法、Infra、机器人与研究岗位的能力画像，求学路径选择与面试项目积累的全景指南。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/career/`,
  audience: '规划长期发展的学生与工程师',
  plans: ['岗位能力画像（算法/Infra/机器人/研究）', '本硕博路径选择', '企业技术方向概览（华为/字节/阿里/腾讯/Google/OpenAI 等）', '简历、面试与项目积累'],
};

const techEnglish: Program = {
  slug: 'tech-english',
  code: 'ENG',
  nav: '技术英语',
  title: '技术英语',
  tagline: '读懂文档，写好注释。',
  intro: '面向程序员的技术英语：读懂英文官方文档与错误信息、规范的变量命名与注释、技术社区交流，让英语学习直接服务编程。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/tech-english/`,
  audience: '有基础英语、希望无障碍阅读技术资料的初学者',
  plans: ['技术文档阅读方法', '命名与注释规范', '错误信息与调试英语', '技术邮件与社区交流', '英文播客与博客'],
};

const engPrimaryKet: Program = {
  slug: 'eng-primary-ket',
  code: 'ENG',
  nav: '小学 · KET',
  title: '小学英语 · KET',
  tagline: '启蒙起步，对标 A2。',
  intro: '小学阶段的英语启蒙与基础积累，对标剑桥 KET（A2 Key）水平：自然拼读、基础词汇语法、简单听说读写，为后续分级打地基。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/eng-primary-ket/`,
  audience: '小学阶段学生',
  plans: ['自然拼读与听力输入', '基础词汇与句型', '分级阅读（RAZ/牛津树）', 'KET 题型初体验', '与编程启蒙的词汇联动'],
};

const engJuniorPet: Program = {
  slug: 'eng-junior-pet',
  code: 'ENG',
  nav: '初中 · PET',
  title: '初中英语 · PET',
  tagline: '对标 B1，衔接高中。',
  intro: '初中阶段英语系统化学习，对标剑桥 PET（B1 Preliminary）与中考水平：核心语法、阅读写作、听说训练，对标国内初中毕业、雅思约 4.0-5.0。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/eng-junior-pet/`,
  audience: '初中阶段学生',
  plans: ['核心语法体系', '阅读与完形策略', '写作句型训练', 'PET 听说专项', '中考题型训练'],
};

const engSenior: Program = {
  slug: 'eng-senior',
  code: 'ENG',
  nav: '高中',
  title: '高中英语（高考）',
  tagline: '对标 B1+~B2，冲高考。',
  intro: '高中阶段英语深度学习，对标高考与 CEFR B1+~B2（雅思约 5.0-5.5）：长难句分析、读后续写、听力与应试策略，同时为四级打底。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/eng-senior/`,
  audience: '高中阶段学生',
  plans: ['长难句与语法填空', '阅读理解策略', '读后续写与应用文', '听力训练', '高考真题与模拟'],
};

const engCet4: Program = {
  slug: 'eng-cet4',
  code: 'ENG',
  nav: '四级',
  title: '英语四级（CET-4）',
  tagline: '对标雅思 5.5-6.0。',
  intro: '大学英语四级备考：词汇、听力、阅读、翻译与写作全题型训练。四级通过（约 425+）大致相当于雅思 5.5-6.0 / CEFR B2 水平，是本科毕业与求职的常见门槛。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/eng-cet4/`,
  audience: '大学生及需要四级证书的求职者',
  plans: ['核心词汇与真题词频', '听力精听方法', '阅读匹配与仔细阅读', '翻译与写作模板', '全真模拟与弱项突破'],
};

const engCet6: Program = {
  slug: 'eng-cet6',
  code: 'ENG',
  nav: '六级',
  title: '英语六级（CET-6）',
  tagline: '对标雅思 6.0-6.5。',
  intro: '大学英语六级备考：在四级基础上提升学术阅读与听力，六级（约 500+）大致相当于雅思 6.0-6.5 / CEFR B2+~C1，是研究生复试与优质岗位的加分项。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/eng-cet6/`,
  audience: '已通过四级、希望进阶的学习者',
  plans: ['高频词汇与学术词表', '听力讲座题型', '长篇阅读与深度阅读', '高级写作句式', '真题精练与模考'],
};

const engIeltsToefl: Program = {
  slug: 'eng-ielts-toefl',
  code: 'ENG',
  nav: '雅思 · 托福',
  title: '雅思 / 托福',
  tagline: '留学与移民的国际通行证。',
  intro: 'IELTS 与 TOEFL iBT 系统备考：听说读写四科技巧、机考适应、口语题库训练。六级 500+ 起步约雅思 6.0-6.5，目标名校通常需要 6.5-7.5 / 托福 90-110。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/eng-ielts-toefl/`,
  audience: '有留学、交换或移民计划的学习者',
  plans: ['听说读写题型精讲', '口语题库与跟读', '写作Task1/2与综合写作', '机考模拟', '分数规划与多次考试策略'],
};

const engToeic: Program = {
  slug: 'eng-toeic',
  code: 'ENG',
  nav: '托业',
  title: '托业（TOEIC）',
  tagline: '职场英语的国际标尺。',
  intro: 'TOEIC 托业备考：商务场景听力与阅读，对标 CEFR B2-C1，是外企、航空、制造等行业广泛认可的职场英语能力证明，与六级、雅思形成互补。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/eng-toeic/`,
  audience: '求职外企或需要职场英语认证的职场人士',
  plans: ['商务听力场景词汇', '阅读速解技巧', '模拟题精练', '900+ 冲刺策略', '与面试英语结合'],
};

const dataEngineering: Program = {
  slug: 'data-engineering',
  code: 'DATA',
  nav: '数据工程',
  title: '数据工程',
  tagline: '把原始数据变成可靠的流水线。',
  intro: '数据工程课程：ETL/ELT 管道、批处理与流式计算（Spark/Flink/Kafka）、数据质量与血缘、调度与湖仓建设，是数据科学与 AI 的基础设施。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/data-engineering/`,
  audience: '希望从事数据工程师/平台工程师的学习者',
  plans: ['SQL 与数据建模进阶', 'ETL/ELT 管道设计', '批处理与流式计算', '数据质量、血缘与治理', '湖仓一体与调度实战'],
};

const dataProcessing: Program = {
  slug: 'data-processing',
  code: 'DATA',
  nav: '数据处理',
  title: '数据处理',
  tagline: '清洗、变换、整合的艺术。',
  intro: '数据处理课程：用 Python（Pandas/Polars）与 SQL 完成数据清洗、变换、合并与性能优化，处理缺失值、异常值与大规模数据的实用技巧。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/data-processing/`,
  audience: '有 Python 基础、需要日常处理数据的学习者',
  plans: ['Pandas/Polars 核心操作', '数据清洗与缺失值处理', '多表合并与重塑', '性能优化与内存管理', '真实脏数据实战'],
};

const dataAnalysis: Program = {
  slug: 'data-analysis',
  code: 'DATA',
  nav: '数据分析',
  title: '数据分析',
  tagline: '从数据中发现业务洞察。',
  intro: '数据分析课程：统计思维、指标体系、A/B 测试、Excel/SQL/Notebook 分析流程，从取数到产出分析报告与决策建议的完整方法论。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/data-analysis/`,
  audience: '希望成为数据分析师或提升数据思维的学习者',
  plans: ['统计思维与指标体系', 'SQL 取数与 Excel 分析', 'A/B 测试与归因', '分析报告与商业洞察', '行业案例实战'],
};

const dataVisualization: Program = {
  slug: 'data-visualization',
  code: 'DATA',
  nav: '数据可视化',
  title: '数据可视化',
  tagline: '让数据自己说话。',
  intro: '数据可视化课程：图表选型原则、Tableau/Power BI 等 BI 工具、Matplotlib/ECharts/D3 编程可视化，以及仪表盘设计与数据叙事。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/data-visualization/`,
  audience: '需要制作图表、报表与仪表盘的学习者',
  plans: ['图表选型与设计原则', 'Tableau / Power BI', 'Matplotlib / ECharts', '交互式仪表盘', '数据叙事与汇报'],
};

const dataScience: Program = {
  slug: 'data-science',
  code: 'DATA',
  nav: '数据科学',
  title: '数据科学',
  tagline: '数据与模型之间的科学。',
  intro: '数据科学课程：在数据分析基础上融合机器学习，完成从问题定义、特征工程、建模评估到部署的端到端项目，衔接机器学习课程。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/data-science/`,
  audience: '完成数据分析、希望进阶数据科学家的学习者',
  plans: ['数据科学与建模流程', '特征工程', '端到端建模项目', '实验管理与复现', '与机器学习课程的衔接'],
};

const opc: Program = {
  slug: 'opc',
  code: 'BIZ',
  nav: '一人公司',
  title: '一人公司（One Person Company）',
  tagline: '一个人就是一家公司。',
  intro: '面向独立开发者、创作者与「超级个体」的经营课程：从一人公司的商业模式与产品定位，到 MVP 开发、自动化运营、内容获客与财税合规，系统掌握不融资也能持续盈利的单人生意方法。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/opc/`,
  audience: '希望独立创业、副业变现或打造个人事业的开发者与创作者',
  plans: ['一人公司商业模式与定位', '产品与最小化验证（MVP）', '独立开发与自动化工具', '获客与内容营销', '财税与合规基础', '规模化与外包协作'],
};

const businessAnalysis: Program = {
  slug: 'business-analysis',
  code: 'BIZ',
  nav: '业务分析',
  title: '业务分析',
  tagline: '把业务问题翻译成技术问题。',
  intro: '业务分析课程：业务流程梳理、利益相关者访谈、业务需求建模（BPMN/用例）、指标与价值分析，衔接软件工程的需求分析，面向 BA 与咨询岗位。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/business-analysis/`,
  audience: '希望连接业务与技术的学生和从业者',
  plans: ['业务流程建模', '干系人访谈与调研', '业务需求文档', '指标与价值分析', 'BA 案例实战'],
};

const businessSolution: Program = {
  slug: 'business-solution',
  code: 'BIZ',
  nav: '业务解决方案',
  title: '业务解决方案',
  tagline: '为客户问题设计整体方案。',
  intro: '业务解决方案课程：从客户业务痛点出发进行方案设计、技术选型与成本评估、POC 验证与投标呈现，衔接解决方案架构，面向售前与方案顾问岗位。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/business-solution/`,
  audience: '售前、方案顾问及希望理解商业交付的学习者',
  plans: ['需求洞察与方案框架', '技术选型与成本估算', 'POC 与验证', '方案呈现与投标', '行业案例实战'],
};

const productManagement: Program = {
  slug: 'product-management',
  code: 'BIZ',
  nav: '产品管理',
  title: '产品管理',
  tagline: '定义做什么、为什么做。',
  intro: '产品管理课程：用户研究、需求优先级（RICE/Kano）、产品路线图、敏捷协作与数据驱动迭代，理解技术团队与商业目标之间的翻译工作。',
  status: 'building',
  href: `${import.meta.env.BASE_URL}/program/product-management/`,
  audience: '希望成为产品经理或提升产品思维的学习者',
  plans: ['用户研究与需求洞察', '需求优先级与路线图', '敏捷与 Scrum 协作', '数据驱动迭代', 'PRD 与案例实战'],
};

export const navGroups: NavGroup[] = [
  {
    nav: '信息学竞赛',
    short: '信奥',
    children: [gesp, cspJPrelim, cspJFinal, cspSPrelim, cspSFinal, noi],
    extra: [
      { nav: '一级', href: `${import.meta.env.BASE_URL}/gesp/level/1/`, level: 1 },
      { nav: '二级', href: `${import.meta.env.BASE_URL}/gesp/level/2/`, level: 2 },
      { nav: '三级', href: `${import.meta.env.BASE_URL}/gesp/level/3/`, level: 3 },
      { nav: '四级', href: `${import.meta.env.BASE_URL}/gesp/level/4/`, level: 4 },
      { nav: '五级', href: `${import.meta.env.BASE_URL}/gesp/level/5/`, level: 5 },
      { nav: '六级', href: `${import.meta.env.BASE_URL}/gesp/level/6/`, level: 6 },
      { nav: '七级', href: `${import.meta.env.BASE_URL}/gesp/level/7/`, level: 7 },
      { nav: '八级', href: `${import.meta.env.BASE_URL}/gesp/level/8/`, level: 8 },
    ],
  },
  { nav: '程序设计与 Web', short: '开发', children: [python, cpp, csharp, java, go, rust, javascript, typescript, html, css] },
  {
    nav: '数学基础',
    short: '数学',
    children: [mathSchool, discreteMath, linearAlgebra, calculus, probability, optimization, embodiedMath],
  },
  { nav: '英语', short: '英语', children: [engPrimaryKet, engJuniorPet, engSenior, engCet4, engCet6, engIeltsToefl, engToeic, techEnglish] },
  {
    nav: '计算机核心',
    short: 'CS',
    children: [
      csAlgorithms,
      computerOrganization,
      os,
      networks,
      database,
      compiler,
      distributedSystems,
      parallelComputing,
      gpuCuda,
      distributedTraining,
      inference,
    ],
  },
  { nav: '数据', short: '数据', children: [dataEngineering, dataProcessing, dataAnalysis, dataVisualization, dataScience] },
  { nav: 'AI 算法', short: 'AI 算法', children: [ml, deepLearning, llmCore, multimodal, aiAgent, roboticsBasics, slam, planningControl, vla] },
  { nav: '业务', short: '业务', children: [businessAnalysis, businessSolution, productManagement, opc] },
  {
    nav: '软件工程与科研',
    short: '工程',
    children: [seRequirements, seArchitecture, seModule, seDevelopment, seTesting, seOps, aiEngineering, researchMethods, fde, career],
  },
  {
    nav: '软件架构',
    short: '架构',
    children: [archApplication, archTechnical, archData, archSolution, archEnterprise, archAi, archRobotics],
  },
];

// 全部课程板块（含子课程），用于占位页生成与查找
export const programs: Program[] = navGroups.flatMap((g) => g.children);

export const programMap = new Map(programs.map((p) => [p.slug, p]));

export function getProgram(slug: string): Program | undefined {
  return programMap.get(slug);
}

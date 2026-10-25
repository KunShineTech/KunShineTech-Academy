import type { ResourceMap } from './resource-types';

// 课程板块学习资源数据（A 组）：覆盖 GESP、CSP-J/S、NOI 竞赛及主流编程语言方向。
// 收录原则：真实存在、广为人知的经典资源；URL 均为官网根路径或经典课程主页，不编造深层链接。
// kind 取值：'免费课程' | '付费课程' | '图书' | '文档与入口'
export const resourcesA: ResourceMap = {
  // GESP C++ 等级认证 1-8 级
  'gesp': [
    { name: 'CCF GESP 官网', kind: '文档与入口', provider: 'CCF', url: 'https://gesp.ccf.org.cn', note: '大纲、报名与认证信息官方入口' },
    { name: '洛谷', kind: '免费课程', provider: '洛谷', url: 'https://www.luogu.com.cn', note: '题单与试炼场适合各级别刷题' },
    { name: '代码随想录', kind: '免费课程', provider: '程序员 Carl', url: 'https://www.programmercarl.com', note: '系统算法学习路线与配套题解' },
    { name: 'AcWing 算法基础课', kind: '付费课程', provider: 'AcWing', url: 'https://www.acwing.com', note: '语法到算法的系统配套课程' },
    { name: '《信息学奥赛一本通》', kind: '图书', provider: '董永建 / 科学技术文献出版社', url: 'https://book.douban.com', note: '信奥经典教材，覆盖普及知识点' },
    { name: '《小学生 C++ 趣味编程》', kind: '图书', provider: '潘洪波 / 清华大学出版社', url: 'https://book.douban.com', note: '趣味案例入门，适合低年级起步' },
    { name: 'OI Wiki', kind: '文档与入口', provider: 'OI Wiki 社区', url: 'https://oi-wiki.org', note: '竞赛知识百科，知识点查缺补漏' },
  ],
  // CSP-J 初赛（笔试：计算机基础、数学、程序阅读）
  'csp-j-prelim': [
    { name: 'CCF NOI 官网', kind: '文档与入口', provider: 'CCF', url: 'https://www.noi.cn', note: 'NOI 系列活动规则与考试大纲' },
    { name: 'OI Wiki', kind: '文档与入口', provider: 'OI Wiki 社区', url: 'https://oi-wiki.org', note: '初赛笔试知识点的百科讲解' },
    { name: '洛谷试炼场', kind: '免费课程', provider: '洛谷', url: 'https://www.luogu.com.cn', note: '按知识点分层的真题练习' },
    { name: 'B 站信息学奥赛初赛视频', kind: '免费课程', provider: '哔哩哔哩', url: 'https://www.bilibili.com', note: '笔试考点免费视频讲解丰富' },
    { name: 'AcWing 算法与编程课', kind: '付费课程', provider: 'AcWing', url: 'https://www.acwing.com', note: '从初赛到复赛的系统学习' },
    { name: '《信息学奥赛一本通·初赛篇》', kind: '图书', provider: '一本通编委会', url: 'https://book.douban.com', note: '面向笔试的教材与模拟题' },
    { name: '《信息学奥赛一本通》', kind: '图书', provider: '董永建 / 科学技术文献出版社', url: 'https://book.douban.com', note: '巩固语法与基础算法的经典' },
  ],
  // CSP-J 复赛（上机）
  'csp-j-final': [
    { name: '洛谷', kind: '免费课程', provider: '洛谷', url: 'https://www.luogu.com.cn', note: '普及组真题与评测练习主阵地' },
    { name: 'Codeforces', kind: '免费课程', provider: 'Codeforces', url: 'https://codeforces.com', note: '海量比赛与题库锻炼实战能力' },
    { name: 'AcWing 算法基础课', kind: '付费课程', provider: 'AcWing', url: 'https://www.acwing.com', note: '复赛常考算法的系统讲解' },
    { name: '《信息学奥赛一本通》', kind: '图书', provider: '董永建 / 科学技术文献出版社', url: 'https://book.douban.com', note: '与上机训练配套的经典教材' },
    { name: '《算法竞赛入门经典》', kind: '图书', provider: '刘汝佳 / 清华大学出版社', url: 'https://book.douban.com', note: '紫书，入门到提高必读' },
    { name: 'OI Wiki', kind: '文档与入口', provider: 'OI Wiki 社区', url: 'https://oi-wiki.org', note: '复赛算法与模板的百科' },
    { name: 'USACO 在线训练', kind: '文档与入口', provider: 'USACO', url: 'https://usaco.org', note: '免费在线题库与比赛训练' },
  ],
  // CSP-S 初赛（笔试）
  'csp-s-prelim': [
    { name: 'CCF NOI 官网', kind: '文档与入口', provider: 'CCF', url: 'https://www.noi.cn', note: 'NOI 系列活动规则与考试大纲' },
    { name: 'OI Wiki', kind: '文档与入口', provider: 'OI Wiki 社区', url: 'https://oi-wiki.org', note: '笔试知识点的百科讲解' },
    { name: '洛谷试炼场', kind: '免费课程', provider: '洛谷', url: 'https://www.luogu.com.cn', note: '提高组笔试真题练习' },
    { name: 'B 站信息学奥赛初赛视频', kind: '免费课程', provider: '哔哩哔哩', url: 'https://www.bilibili.com', note: '提高组笔试考点免费讲解' },
    { name: 'AcWing 算法提高课', kind: '付费课程', provider: 'AcWing', url: 'https://www.acwing.com', note: '拔高训练配合笔试准备' },
    { name: '《信息学奥赛一本通·初赛篇》', kind: '图书', provider: '一本通编委会', url: 'https://book.douban.com', note: '面向笔试的教材与模拟题' },
    { name: '《信息学奥赛一本通》', kind: '图书', provider: '董永建 / 科学技术文献出版社', url: 'https://book.douban.com', note: '巩固基础知识的经典教材' },
  ],
  // CSP-S 复赛（提高组：高级数据结构、网络流等）
  'csp-s-final': [
    { name: 'Codeforces', kind: '免费课程', provider: 'Codeforces', url: 'https://codeforces.com', note: '高水平比赛磨炼算法实战' },
    { name: 'USACO Guide', kind: '免费课程', provider: 'USACO Guide 社区', url: 'https://usaco.guide', note: '模块化算法学习路径推荐' },
    { name: 'AcWing 算法提高课', kind: '付费课程', provider: 'AcWing', url: 'https://www.acwing.com', note: '高级数据结构与算法专题' },
    { name: '《算法竞赛进阶指南》', kind: '图书', provider: '李煜东', url: 'https://book.douban.com', note: '提高组算法进阶的口碑之作' },
    { name: '《算法竞赛入门经典》', kind: '图书', provider: '刘汝佳 / 清华大学出版社', url: 'https://book.douban.com', note: '紫书，训练方法与例题精讲' },
    { name: 'CP-Algorithms', kind: '文档与入口', provider: 'CP-Algorithms 社区', url: 'https://cp-algorithms.com', note: '竞赛算法的公式推导与实现' },
    { name: 'OI Wiki', kind: '文档与入口', provider: 'OI Wiki 社区', url: 'https://oi-wiki.org', note: '高级算法与模板的百科' },
  ],
  // NOIP/NOI 竞赛提高
  'noi': [
    { name: 'USACO Guide', kind: '免费课程', provider: 'USACO Guide 社区', url: 'https://usaco.guide', note: '从提高冲到省选的学习路径' },
    { name: 'Codeforces', kind: '免费课程', provider: 'Codeforces', url: 'https://codeforces.com', note: '高 rating 选手的日常训练场' },
    { name: 'AcWing 算法提高课', kind: '付费课程', provider: 'AcWing', url: 'https://www.acwing.com', note: '省选级别算法专题课程' },
    { name: '《算法竞赛进阶指南》', kind: '图书', provider: '李煜东', url: 'https://book.douban.com', note: '进阶算法的经典中文教材' },
    { name: '《算法竞赛入门经典》', kind: '图书', provider: '刘汝佳 / 清华大学出版社', url: 'https://book.douban.com', note: '紫书，训练体系奠基之作' },
    { name: '《挑战程序设计竞赛》', kind: '图书', provider: '秋叶拓哉等 / 人民邮电出版社', url: 'https://book.douban.com', note: '日本经典竞赛算法书' },
    { name: 'OI Wiki', kind: '文档与入口', provider: 'OI Wiki 社区', url: 'https://oi-wiki.org', note: '百科含历年集训队论文入口' },
    { name: 'NOI 国家集训队论文', kind: '文档与入口', provider: 'CCF / OI 社区', url: 'https://oi-wiki.org', note: '历届顶尖选手的专题论文集' },
  ],
  // Python 程序设计
  'python': [
    { name: '廖雪峰 Python 教程', kind: '免费课程', provider: '廖雪峰', url: 'https://liaoxuefeng.com', note: '中文免费入门教程口碑之作' },
    { name: 'Python 官方教程', kind: '免费课程', provider: 'Python 官方', url: 'https://docs.python.org/zh-cn/3/tutorial/', note: '官方中文版入门教程' },
    { name: 'CS50P', kind: '免费课程', provider: '哈佛大学', url: 'https://cs50.harvard.edu/python/', note: '哈佛公开课，Python 编程导论' },
    { name: 'Python 语言程序设计（嵩天）', kind: '免费课程', provider: '嵩天 / 中国大学MOOC', url: 'https://www.icourse163.org', note: '国家级精品慕课，适合零基础' },
    { name: '菜鸟教程 Python', kind: '免费课程', provider: '菜鸟教程', url: 'https://www.runoob.com', note: '语法速查与在线实例' },
    { name: '黑马程序员 Python 视频', kind: '免费课程', provider: '哔哩哔哩', url: 'https://www.bilibili.com', note: 'B 站播放量最高的入门课之一' },
    { name: 'Real Python', kind: '付费课程', provider: 'Real Python', url: 'https://realpython.com', note: '高质量英文教程与会员课程' },
    { name: '《Python 编程从入门到实践》', kind: '图书', provider: 'Eric Matthes', url: 'https://book.douban.com', note: '全球畅销的 Python 入门书' },
    { name: '《流畅的 Python》', kind: '图书', provider: 'Luciano Ramalho', url: 'https://book.douban.com', note: '深入理解 Python 语言精髓' },
    { name: 'Python 官方文档', kind: '文档与入口', provider: 'Python 官方', url: 'https://docs.python.org/zh-cn/3/', note: '标准库参考的中文官方文档' },
  ],
  // C++ 程序设计
  'cpp': [
    { name: 'LearnCpp 免费教程', kind: '免费课程', provider: 'LearnCpp', url: 'https://learncpp.com', note: '体系完整的英文免费 C++ 教程' },
    { name: 'The Cherno C++ 视频', kind: '免费课程', provider: 'The Cherno', url: 'https://www.youtube.com/@TheCherno', note: 'YouTube 知名 C++ 系列课' },
    { name: '北京大学 C++ 程序设计慕课', kind: '免费课程', provider: '郭炜 / 中国大学MOOC', url: 'https://www.icourse163.org', note: '北大名师主讲的经典慕课' },
    { name: 'Udacity C++ 纳米学位', kind: '付费课程', provider: 'Udacity', url: 'https://www.udacity.com', note: '面向就业的 C++ 系统项目课' },
    { name: '《C++ Primer》', kind: '图书', provider: 'Stanley B. Lippman 等', url: 'https://book.douban.com', note: 'C++ 权威大部头教程' },
    { name: '《C++ Primer Plus》', kind: '图书', provider: 'Stephen Prata', url: 'https://book.douban.com', note: '循序渐进的零基础友好教材' },
    { name: 'cppreference', kind: '文档与入口', provider: 'cppreference 社区', url: 'https://en.cppreference.com', note: 'C++ 标准库参考手册' },
  ],
  // C# 程序设计
  'csharp': [
    { name: 'Microsoft Learn C# 学习路径', kind: '免费课程', provider: 'Microsoft', url: 'https://learn.microsoft.com', note: '微软官方免费 C# 学习路径' },
    { name: 'freeCodeCamp C# 认证', kind: '免费课程', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org', note: '免费课程加项目实战认证' },
    { name: '刘铁猛 C# 语言入门详解', kind: '免费课程', provider: '刘铁猛 / 哔哩哔哩', url: 'https://www.bilibili.com', note: 'B 站人气最高的 C# 免费视频' },
    { name: 'Mosh C# 系列课程', kind: '付费课程', provider: 'Mosh Hamedani / Udemy', url: 'https://www.udemy.com', note: '海外知名讲师的系统 C# 课' },
    { name: '《C# 入门经典》', kind: '图书', provider: 'Wrox / 清华大学出版社', url: 'https://book.douban.com', note: '面向初学者的经典大部头' },
    { name: '《深入理解 C#》', kind: '图书', provider: 'Jon Skeet', url: 'https://book.douban.com', note: 'C# in Depth 中文版进阶必读' },
    { name: 'C# 官方文档', kind: '文档与入口', provider: 'Microsoft', url: 'https://learn.microsoft.com/dotnet/csharp/', note: '语言参考与编程指南' },
    { name: '.NET 官网', kind: '文档与入口', provider: 'Microsoft', url: 'https://dotnet.microsoft.com', note: 'SDK 下载与跨平台开发入口' },
  ],
  // Java 程序设计
  'java': [
    { name: '翁恺 Java 程序设计慕课', kind: '免费课程', provider: '翁恺 / 中国大学MOOC', url: 'https://www.icourse163.org', note: '浙大名师的零基础 Java 慕课' },
    { name: '廖雪峰 Java 教程', kind: '免费课程', provider: '廖雪峰', url: 'https://liaoxuefeng.com', note: '中文免费 Java 入门教程' },
    { name: '黑马程序员 Java 视频', kind: '免费课程', provider: '哔哩哔哩', url: 'https://www.bilibili.com', note: 'B 站播放量最高的 Java 入门课' },
    { name: '慕课网 Java 体系课', kind: '付费课程', provider: '慕课网', url: 'https://www.imooc.com', note: '从入门到框架的实战课程' },
    { name: '《Java 核心技术》', kind: '图书', provider: 'Cay S. Horstmann', url: 'https://book.douban.com', note: 'Java 领域公认的经典教材' },
    { name: '《Effective Java》', kind: '图书', provider: 'Joshua Bloch', url: 'https://book.douban.com', note: 'Java 编程最佳实践 80 条' },
    { name: 'Oracle Java Tutorials', kind: '文档与入口', provider: 'Oracle', url: 'https://docs.oracle.com/javase/tutorial/', note: '官方 Java 学习教程' },
    { name: 'OpenJDK 官网', kind: '文档与入口', provider: 'OpenJDK 社区', url: 'https://openjdk.org', note: '开源实现与 JDK 规范入口' },
  ],
  // Go 程序设计
  'go': [
    { name: 'A Tour of Go', kind: '免费课程', provider: 'Go 团队', url: 'https://go.dev/tour/', note: '官方交互式入门教程' },
    { name: 'Go by Example', kind: '免费课程', provider: 'Go by Example 社区', url: 'https://gobyexample.com', note: '带可运行示例的语法速查' },
    { name: '黑马程序员 Go 视频', kind: '免费课程', provider: '哔哩哔哩', url: 'https://www.bilibili.com', note: 'B 站免费的 Go 入门到项目课' },
    { name: '极客时间《Go 语言核心 36 讲》', kind: '付费课程', provider: '郝林 / 极客时间', url: 'https://time.geekbang.org', note: '深入 Go 语言实现原理' },
    { name: '《Go 程序设计语言》', kind: '图书', provider: 'Alan A. A. Donovan 等', url: 'https://book.douban.com', note: 'Kernighan 参与的经典 Go 教材' },
    { name: '《Go 语言实战》', kind: '图书', provider: 'William Kennedy 等', url: 'https://book.douban.com', note: '面向工程实践的 Go 实战书' },
    { name: 'Go 官方文档', kind: '文档与入口', provider: 'Go 团队', url: 'https://go.dev/doc/', note: '官方教程与语言规范' },
    { name: 'Go 包参考', kind: '文档与入口', provider: 'Go 团队', url: 'https://pkg.go.dev', note: '标准库与第三方包文档' },
  ],
  // Rust 程序设计
  'rust': [
    { name: 'The Rust Book', kind: '免费课程', provider: 'Rust 官方', url: 'https://doc.rust-lang.org/book/', note: 'Rust 官方免费入门书' },
    { name: 'Rustlings', kind: '免费课程', provider: 'Rust 社区', url: 'https://github.com/rust-lang/rustlings', note: '边修小练习边学语法' },
    { name: 'Rust 中文社区视频', kind: '免费课程', provider: 'Rust 中文社区 / 哔哩哔哩', url: 'https://www.bilibili.com', note: 'B 站中文翻译与分享资源丰富' },
    { name: '极客时间《Rust 编程第一课》', kind: '付费课程', provider: '陈天 / 极客时间', url: 'https://time.geekbang.org', note: '资深工程师主讲的系统 Rust 课' },
    { name: '《Rust 程序设计语言》', kind: '图书', provider: 'Steve Klabnik 等', url: 'https://book.douban.com', note: 'The Rust Book 的中文纸质版' },
    { name: '《Rust 实战》', kind: '图书', provider: 'Tim McNamara', url: 'https://book.douban.com', note: 'Rust in Action 中文版项目实战' },
    { name: 'Rust 官方文档', kind: '文档与入口', provider: 'Rust 团队', url: 'https://doc.rust-lang.org', note: '标准库与工具链文档入口' },
  ],
  // JavaScript 程序设计
  'javascript': [
    { name: 'JavaScript.info', kind: '免费课程', provider: 'Ilya Kantor', url: 'https://javascript.info', note: '现代 JavaScript 免费教程' },
    { name: 'freeCodeCamp JS 认证', kind: '免费课程', provider: 'freeCodeCamp', url: 'https://www.freecodecamp.org', note: '免费课程加项目认证' },
    { name: 'Frontend Masters', kind: '付费课程', provider: 'Frontend Masters', url: 'https://www.frontendmasters.com', note: '前端进阶付费课程平台' },
    { name: '《JavaScript 高级程序设计》', kind: '图书', provider: 'Nicholas C. Zakas', url: 'https://book.douban.com', note: '红宝书，JS 领域权威教材' },
    { name: '《你不知道的 JavaScript》', kind: '图书', provider: 'Kyle Simpson', url: 'https://book.douban.com', note: '深入理解 JS 核心机制' },
    { name: 'MDN JavaScript', kind: '文档与入口', provider: 'Mozilla', url: 'https://developer.mozilla.org', note: '最权威的 Web 技术参考文档' },
  ],
  // TypeScript 程序设计
  'typescript': [
    { name: 'TypeScript 官方手册', kind: '免费课程', provider: 'Microsoft', url: 'https://www.typescriptlang.org/docs/', note: '官网自带的免费入门教程' },
    { name: 'TypeScript Deep Dive', kind: '免费课程', provider: 'Basarat Ali Syed', url: 'https://basarat.gitbook.io/typescript/', note: '开源免费的深入 TS 教程' },
    { name: 'Total TypeScript', kind: '付费课程', provider: 'Matt Pocock', url: 'https://www.totaltypescript.com', note: '海外热门的 TS 进阶付费课' },
    { name: '《TypeScript 编程》', kind: '图书', provider: 'Boris Cherny', url: 'https://book.douban.com', note: 'Programming TypeScript 中文版' },
    { name: '《Effective TypeScript》', kind: '图书', provider: 'Dan Vanderkam', url: 'https://book.douban.com', note: 'TS 进阶的 62 条实用建议' },
    { name: 'TypeScript 官网', kind: '文档与入口', provider: 'Microsoft', url: 'https://www.typescriptlang.org', note: 'Playground 与文档总入口' },
  ],
};

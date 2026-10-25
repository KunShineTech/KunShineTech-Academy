// 课程学习资源汇总：合并各分组资源，供课程板块页面按 slug 查询展示。
import type { ResourceMap } from './resource-types';
import { resourcesA } from './resources-a';
import { resourcesB } from './resources-b';
import { resourcesC } from './resources-c';
import { resourcesD } from './resources-d';
import { resourcesE } from './resources-e';
import { resourcesF } from './resources-f';
import { resourcesG } from './resources-g';

export const resources: ResourceMap = {
  ...resourcesA,
  ...resourcesB,
  ...resourcesC,
  ...resourcesD,
  ...resourcesE,
  ...resourcesF,
  ...resourcesG,
  'opc': [
    { name: 'Indie Hackers', kind: '免费课程', provider: 'Indie Hackers', url: 'https://www.indiehackers.com', note: '独立开发者社区与收入案例访谈' },
    { name: 'Product Hunt', kind: '文档与入口', provider: 'Product Hunt', url: 'https://www.producthunt.com', note: '新产品发布与冷启动获客平台' },
    { name: 'Stripe Atlas 指南', kind: '免费课程', provider: 'Stripe', url: 'https://stripe.com', note: '创业公司与合规开设指南' },
    { name: '《小而美：持续盈利的经营法则》', kind: '图书', provider: '萨希尔·拉文吉亚', url: 'https://book.douban.com', note: 'Gumroad 创始人的一人公司方法论' },
    { name: '《一人企业》', kind: '图书', provider: '保罗·贾维斯', url: 'https://book.douban.com', note: '重新定义规模与增长' },
    { name: '小报童/知识付费平台', kind: '文档与入口', provider: '小报童', url: 'https://xiaobot.net', note: '中文创作者变现平台参考' },
  ],
  'fde': [
    { name: 'Palantir 工程博客', kind: '文档与入口', provider: 'Palantir', url: 'https://www.palantir.com', note: 'FDE 岗位理念与工程实践来源' },
    { name: 'Forward Deployed Engineering 讨论', kind: '免费课程', provider: 'a16z / 播客', url: 'https://a16z.com', note: 'FDE 模式的前线视角与访谈' },
    { name: '解决方案架构学习路径', kind: '免费课程', provider: 'AWS Skill Builder', url: 'https://skillbuilder.aws', note: '客户现场方案设计训练' },
    { name: '《问题导向的软件开发》', kind: '图书', provider: '工程实践类读物', url: 'https://book.douban.com', note: '需求挖掘与原型交付方法' },
    { name: 'Hacker News', kind: '文档与入口', provider: 'Y Combinator', url: 'https://news.ycombinator.com', note: '前沿技术与独立开发讨论社区' },
  ],
  'math-school': [
    { name: '国家中小学智慧教育平台', kind: '免费课程', provider: '教育部', url: 'https://basic.smartedu.cn', note: '官方免费中小学全科课程' },
    { name: '可汗学院中文数学', kind: '免费课程', provider: 'Khan Academy', url: 'https://www.khanacademy.org', note: '从算术到几何的免费体系课' },
    { name: 'B 站小学/初中数学', kind: '免费课程', provider: 'bilibili', url: 'https://www.bilibili.com', note: '免费数学同步讲解视频' },
    { name: '洋葱学园', kind: '付费课程', provider: '洋葱学园', url: 'https://www.yangcong345.com', note: '动画讲解数学概念' },
    { name: '小学/初中数学公式手册', kind: '图书', provider: '各出版社', url: 'https://book.douban.com', note: '公式速查工具书' },
    { name: '人教版电子课本', kind: '文档与入口', provider: '人民教育出版社', url: 'https://www.pep.com.cn', note: '官方教材与教学资源' },
  ],
};

export const resourceKinds = ['免费课程', '付费课程', '图书', '文档与入口'] as const;

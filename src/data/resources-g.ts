import type { ResourceMap } from './resource-types';

// 数据方向与业务方向学习资源
export const resourcesG: ResourceMap = {
  'data-engineering': [
    { name: 'Apache 开源项目文档', kind: '免费课程', provider: 'Apache Software Foundation', url: 'https://www.apache.org', note: 'Spark/Flink/Kafka 等官方文档' },
    { name: 'Kaggle Learn 数据工程路径', kind: '免费课程', provider: 'Kaggle', url: 'https://www.kaggle.com', note: '免费微课与动手实验' },
    { name: 'Coursera 数据工程专项', kind: '付费课程', provider: 'Coursera', url: 'https://www.coursera.org', note: '数据工程与云平台证书课程' },
    { name: '《数据密集型应用系统设计》', kind: '图书', provider: 'Martin Kleppmann', url: 'https://book.douban.com', note: 'DDIA，数据系统必读经典' },
    { name: 'dbt 文档', kind: '文档与入口', provider: 'dbt Labs', url: 'https://www.getdbt.com', note: '现代 ELT 转换层工具' },
  ],
  'data-processing': [
    { name: 'Pandas 官方文档', kind: '免费课程', provider: 'pandas', url: 'https://pandas.pydata.org', note: '数据处理标准库完整教程' },
    { name: 'SQLBolt 互动教程', kind: '免费课程', provider: 'SQLBolt', url: 'https://sqlbolt.com', note: '浏览器里边学边练 SQL' },
    { name: 'Mode SQL 教程', kind: '免费课程', provider: 'Mode Analytics', url: 'https://mode.com', note: '面向分析师的 SQL 实战课' },
    { name: '《利用 Python 进行数据分析》', kind: '图书', provider: 'Wes McKinny', url: 'https://book.douban.com', note: 'Pandas 作者写的数据处理圣经' },
    { name: 'Polars 文档', kind: '文档与入口', provider: 'Polars', url: 'https://pola.rs', note: '新一代高性能 DataFrame 库' },
  ],
  'data-analysis': [
    { name: 'Google 数据分析证书', kind: '免费课程', provider: 'Coursera / Google', url: 'https://www.coursera.org', note: '入门数据分析系统课程' },
    { name: 'Kaggle 数据分析竞赛', kind: '免费课程', provider: 'Kaggle', url: 'https://www.kaggle.com', note: '真实数据集练手最佳平台' },
    { name: '知乎/得到数据分析专栏', kind: '付费课程', provider: '知识付费平台', url: 'https://www.zhihu.com', note: '商业分析思维进阶专栏' },
    { name: '《深入浅出数据分析》', kind: '图书', provider: 'Head First 系列', url: 'https://book.douban.com', note: '统计思维入门经典' },
    { name: '国家统计局数据', kind: '文档与入口', provider: '国家统计局', url: 'https://www.stats.gov.cn', note: '公开权威数据源练习分析' },
  ],
  'data-visualization': [
    { name: 'Tableau Public 免费版', kind: '免费课程', provider: 'Tableau', url: 'https://public.tableau.com', note: '免费 BI 工具与作品社区' },
    { name: 'ECharts 示例库', kind: '免费课程', provider: 'Apache ECharts', url: 'https://echarts.apache.org', note: '中文文档与海量图表示例' },
    { name: 'D3.js 官方文档', kind: '文档与入口', provider: 'D3.js', url: 'https://d3js.org', note: 'Web 数据可视化底层库' },
    { name: '《Storytelling with Data》', kind: '图书', provider: 'Cole Nussbaumer Knaflic', url: 'https://book.douban.com', note: '数据叙事与图表设计经典' },
    { name: 'Matplotlib 文档', kind: '文档与入口', provider: 'Matplotlib', url: 'https://matplotlib.org', note: 'Python 绘图标准库' },
  ],
  'data-science': [
    { name: 'Kaggle 数据科学竞赛', kind: '免费课程', provider: 'Kaggle', url: 'https://www.kaggle.com', note: '从特征工程到建模的实战' },
    { name: 'Harvard CS109 数据科学', kind: '免费课程', provider: 'Harvard', url: 'https://cs109.github.io', note: '经典数据科学公开课程' },
    { name: 'IBM 数据科学证书', kind: '付费课程', provider: 'Coursera / IBM', url: 'https://www.coursera.org', note: '端到端数据科学专项' },
    { name: '《Python 数据科学手册》', kind: '图书', provider: 'Jake VanderPlas', url: 'https://book.douban.com', note: 'NumPy/Pandas/ML 工具书' },
    { name: 'Hugging Face Datasets', kind: '文档与入口', provider: 'Hugging Face', url: 'https://huggingface.co', note: '公开数据集仓库' },
  ],
  'business-analysis': [
    { name: 'BABOK 业务分析知识体系', kind: '免费课程', provider: 'IIBA', url: 'https://www.iiba.org', note: 'BA 领域权威知识框架' },
    { name: 'Coursera 商业分析专项', kind: '免费课程', provider: 'Coursera / Wharton', url: 'https://www.coursera.org', note: '沃顿商学院商业分析课' },
    { name: 'CBAP 认证培训', kind: '付费课程', provider: 'IIBA 授权机构', url: 'https://www.iiba.org', note: '业务分析专业认证路径' },
    { name: '《用户故事与敏捷方法》', kind: '图书', provider: 'Cohn（清华大学出版社）', url: 'https://book.douban.com', note: '需求表达经典' },
    { name: '人人都是产品经理社区', kind: '文档与入口', provider: 'woshipm.com', url: 'https://www.woshipm.com', note: '中文产品/业务分析社区' },
  ],
  'business-solution': [
    { name: 'AWS 解决方案架构学习路径', kind: '免费课程', provider: 'AWS Skill Builder', url: 'https://skillbuilder.aws', note: '云上方案设计免费课程' },
    { name: 'Microsoft Learn', kind: '免费课程', provider: 'Microsoft', url: 'https://learn.microsoft.com', note: 'Azure 方案与认证学习平台' },
    { name: '云厂商解决方案案例库', kind: '文档与入口', provider: 'AWS / 阿里云等', url: 'https://aws.amazon.com', note: '各行业落地案例参考' },
    { name: '《解决方案架构师手册》', kind: '图书', provider: 'Saurabh Shrivastava 等', url: 'https://book.douban.com', note: '方案架构入门与面试参考' },
    { name: '阿里云大学', kind: '付费课程', provider: '阿里云', url: 'https://edu.aliyun.com', note: '云计算与行业方案课程' },
  ],
  'product-management': [
    { name: 'Coursera 产品管理专项', kind: '免费课程', provider: 'Coursera / UVA', url: 'https://www.coursera.org', note: '敏捷产品管理慕课' },
    { name: '人人都是产品经理社区', kind: '免费课程', provider: 'woshipm.com', url: 'https://www.woshipm.com', note: '中文产品知识与文章库' },
    { name: 'NPDP / PMP 认证培训', kind: '付费课程', provider: '产品经理认证机构', url: 'https://www.coursera.org', note: '产品经理国际认证路径' },
    { name: '《启示录：打造用户喜爱的产品》', kind: '图书', provider: 'Marty Cagan', url: 'https://book.douban.com', note: '产品经理圣经' },
    { name: '《用户体验要素》', kind: '图书', provider: 'Jesse James Garrett', url: 'https://book.douban.com', note: '产品设计经典框架' },
  ],
};

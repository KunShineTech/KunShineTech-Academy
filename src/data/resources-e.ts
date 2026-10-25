import type { ResourceMap } from './resource-types';

// 英语方向学习资源：技术英语 / 学术英语 / 考试英语
export const resourcesE: ResourceMap = {
  'tech-english': [
    { name: 'BBC Learning English', kind: '免费课程', provider: 'BBC', url: 'https://www.bbc.co.uk/learningenglish', note: '英式英语综合学习老牌免费站' },
    { name: 'English for Career Development', kind: '免费课程', provider: 'Coursera / University of Pennsylvania', url: 'https://www.coursera.org', note: '职场英语经典免费慕课' },
    { name: 'Cambly 外教口语', kind: '付费课程', provider: 'Cambly', url: 'https://www.cambly.com', note: '按分钟计费的外教口语平台' },
    { name: 'English Grammar in Use', kind: '图书', provider: 'Murphy / Cambridge', url: 'https://book.douban.com', note: '全球最畅销英语语法书' },
    { name: 'YouGlish', kind: '文档与入口', provider: 'YouGlish', url: 'https://youglish.com', note: '输入单词听视频中真人发音' },
    { name: 'MDN Web Docs', kind: '文档与入口', provider: 'Mozilla', url: 'https://developer.mozilla.org', note: '精读英文技术文档的最佳材料' },
  ],
};

import type { ResourceMap } from './resource-types';

// 英语分级学习资源：小学·KET / 初中·PET / 高中 / 四级 / 六级 / 雅思托福 / 托业
export const resourcesF: ResourceMap = {
  'eng-primary-ket': [
    { name: '剑桥少儿英语 / KET 官方', kind: '免费课程', provider: 'Cambridge English', url: 'https://www.cambridgeenglish.org', note: 'A2 Key 官方样题与备考资源' },
    { name: 'Super Simple', kind: '免费课程', provider: 'Super Simple Learning', url: 'https://supersimple.com', note: '儿歌动画英语启蒙经典站' },
    { name: 'RAZ / 牛津阅读树分级读物', kind: '图书', provider: 'Learning A-Z / Oxford', url: 'https://book.douban.com', note: '主流英语分级阅读体系' },
    { name: '新概念英语（第一册）', kind: '图书', provider: '外研社 / Pearson', url: 'https://book.douban.com', note: '经典入门教材，适合零基础起步' },
    { name: 'B 站少儿英语资源', kind: '文档与入口', provider: 'bilibili', url: 'https://www.bilibili.com', note: '免费自然拼读与绘本讲解视频' },
  ],
  'eng-junior-pet': [
    { name: 'PET 官方备考资源', kind: '免费课程', provider: 'Cambridge English', url: 'https://www.cambridgeenglish.org', note: 'B1 Preliminary 样题与词汇表' },
    { name: 'B 站初中英语系统课', kind: '免费课程', provider: 'bilibili', url: 'https://www.bilibili.com', note: '语法与中考题型免费讲解' },
    { name: '新概念英语（第二册）', kind: '图书', provider: '外研社 / Pearson', url: 'https://book.douban.com', note: '初中语法体系经典教材' },
    { name: '剑桥英语语法（English Grammar in Use）', kind: '图书', provider: 'Murphy / Cambridge', url: 'https://book.douban.com', note: '语法查阅与练习工具书' },
    { name: '中国教育考试网', kind: '文档与入口', provider: '教育部考试中心', url: 'https://www.neea.edu.cn', note: '中考相关考试政策入口' },
  ],
  'eng-senior': [
    { name: 'B 站高考英语一轮复习', kind: '免费课程', provider: 'bilibili', url: 'https://www.bilibili.com', note: '长难句/阅读/写作免费系统课' },
    { name: '新东方在线中学英语', kind: '付费课程', provider: '新东方', url: 'https://www.koolearn.com', note: '高考英语全科备考' },
    { name: '五年高考三年模拟', kind: '图书', provider: '曲一线', url: 'https://book.douban.com', note: '高考英语真题模拟标配' },
    { name: '新概念英语（第三册）', kind: '图书', provider: '外研社 / Pearson', url: 'https://book.douban.com', note: '高中长难句与写作提升' },
    { name: '中国教育考试网', kind: '文档与入口', provider: '教育部考试中心', url: 'https://www.neea.edu.cn', note: '高考政策与考试日历官方入口' },
  ],
  'eng-cet4': [
    { name: '中国大学MOOC 四级课程', kind: '免费课程', provider: '中国大学MOOC', url: 'https://www.icourse163.org', note: '高校教师主讲四级系统课' },
    { name: 'B 站四级免费课', kind: '免费课程', provider: 'bilibili', url: 'https://www.bilibili.com', note: '词汇/听力/阅读免费资源' },
    { name: '新东方在线四六级', kind: '付费课程', provider: '新东方', url: 'https://www.koolearn.com', note: '四六级全科付费班' },
    { name: '星火英语四级真题', kind: '图书', provider: '星火英语', url: 'https://book.douban.com', note: '历年真题与专项训练' },
    { name: '中国教育考试网 CET 入口', kind: '文档与入口', provider: '教育部考试中心', url: 'https://cet.neea.edu.cn', note: '四六级官方报名与成绩查询' },
  ],
  'eng-cet6': [
    { name: '中国大学MOOC 六级课程', kind: '免费课程', provider: '中国大学MOOC', url: 'https://www.icourse163.org', note: '六级听说读写系统慕课' },
    { name: 'B 站六级免费课', kind: '免费课程', provider: 'bilibili', url: 'https://www.bilibili.com', note: '听力与写作专项免费讲解' },
    { name: '考虫四六级', kind: '付费课程', provider: '考虫', url: 'https://www.kaochong.com', note: '四六级在线直播课' },
    { name: '星火英语六级真题', kind: '图书', provider: '星火英语', url: 'https://book.douban.com', note: '六级真题与高频词' },
    { name: '中国教育考试网 CET 入口', kind: '文档与入口', provider: '教育部考试中心', url: 'https://cet.neea.edu.cn', note: '六级报名与成绩查询官方入口' },
  ],
  'eng-ielts-toefl': [
    { name: 'IELTS 官方备考资源', kind: '免费课程', provider: 'IELTS / British Council', url: 'https://www.ielts.org', note: '雅思题型介绍与免费样题' },
    { name: 'TOEFL iBT 官方备考', kind: '免费课程', provider: 'ETS', url: 'https://www.ets.org', note: '托福官方免费练习题' },
    { name: '新东方在线雅思/托福', kind: '付费课程', provider: '新东方', url: 'https://www.koolearn.com', note: '雅思托福全科付费班' },
    { name: '剑桥雅思真题集', kind: '图书', provider: 'Cambridge / 新东方引进', url: 'https://book.douban.com', note: '剑 4-19 真题必备' },
    { name: '教育部考试中心雅思报名', kind: '文档与入口', provider: 'NEEA', url: 'https://ielts.neea.cn', note: '雅思大陆报名与考位查询' },
  ],
  'eng-toeic': [
    { name: 'TOEIC 官方介绍与样题', kind: '免费课程', provider: 'ETS', url: 'https://www.ets.org', note: '托业题型说明与免费样题' },
    { name: 'B 站托业备考课', kind: '免费课程', provider: 'bilibili', url: 'https://www.bilibili.com', note: '听力阅读技巧免费讲解' },
    { name: '新东方托业课程', kind: '付费课程', provider: '新东方', url: 'https://www.koolearn.com', note: '托业 800+/900+ 目标班' },
    { name: '托业官方指南', kind: '图书', provider: 'ETS / 引进版', url: 'https://book.douban.com', note: '官方指南与全真模拟' },
    { name: '托业中国报名入口', kind: '文档与入口', provider: '托业中国', url: 'https://www.toeic.cn', note: '大陆托业报名与成绩查询' },
  ],
};

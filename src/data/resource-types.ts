// 课程学习资源条目：供各课程板块页面展示。
// kind: '免费课程' | '付费课程' | '图书' | '文档与入口'
// 收录原则：真实存在、广为人知、链接稳定（官网根路径或经典课程主页），不编造深层 URL。

export interface ResourceItem {
  name: string;    // 资源名称
  kind: '免费课程' | '付费课程' | '图书' | '文档与入口';
  provider: string; // 提供方 / 作者
  url: string;     // 入口链接
  note: string;    // 一句话说明（30 字以内）
}

export type ResourceMap = Record<string, ResourceItem[]>;

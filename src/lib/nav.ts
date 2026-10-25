// 根据去掉 base 后的当前路径，定位所属顶部菜单组与二级板块。
// 用于左侧章节导航：只有匹配到板块时才渲染侧栏（首页等无所属板块的页面保持通栏）。
import { navGroups, type NavGroup } from '../data/programs';

export function findGroup(rel: string): { group: NavGroup; slug: string } | null {
  for (const g of navGroups) {
    for (const c of g.children) {
      const hit =
        c.slug === 'gesp'
          ? rel.startsWith('/gesp') || rel.startsWith('/exams')
          : rel.startsWith(`/program/${c.slug}/`);
      if (hit) return { group: g, slug: c.slug };
    }
  }
  return null;
}

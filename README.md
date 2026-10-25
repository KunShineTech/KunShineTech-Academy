# GESP C++ 二级 · Astro + MDX 互动课程

适用：小学高年级 / 初中入门；建议12次课×120分钟。基于上传的《CCF 编程能力等级认证 C++&Python 认证标准》中 **C++二级** 章节（PDF第11—13页）编写。

## 运行

```bash
npm install
npm run dev
# http://localhost:4321
npm run build
npm run preview
```

需要 Node.js 20.19+ 或22.12+（Astro 5版本要求请以实际安装版本为准）。部署 GitHub Pages 时，应把 `astro.config.mjs` 中 `site` 改为实际域名；如果是 `username.github.io/repo/` 子路径部署，还需要配置 `base` 并相应处理站内链接（当前项目按根路径部署）。

## 目录

```text
src/content/lessons/   # 12个可编辑的MDX课程单元
src/components/        # Check选择题、Task编程题、Reveal折叠解析
src/pages/             # 课程首页、课程详情、教学安排、阶段测评
src/styles/            # 深色主题与响应式样式
```

## 教学说明

- 官方二级九项知识：RAM/ROM/Cache、网络与TCP/IP/OSI、语言分类、流程图、ASCII、类型转换、多层分支、多层循环、数学函数（含rand/srand）。
- 第8、11、12课加入**枚举、模拟、综合题训练**作为教学拓展，**不是将其宣称为二级官方单列考点**。
- `Check`组件在浏览器检查选择题；`Task`组件只呈现编程题，不在浏览器编译C++；请使用本地IDE或沙箱判题系统。
- 代码示例遵循C++11，所有示例按常见标准环境编写；请按授课环境运行测试。
- 课堂数学解释与题目为原创教学内容，官方考纲只是知识范围依据。
- 官方二级认证结构：15道单选、10道判断、2道编程，总分100分，120分钟。官方安排及报名规则以当期通知为准。

## 安全与版权

- 不内置在线C++执行器，避免在Web服务直接执行不可信代码。
- 不将上传的官方PDF复制入公开网站；如需引用官方文件，使用合法的官方链接并注意版权。
- 请勿将学生个人信息写入静态仓库。

## Obsidian保存建议

- 课程产品主索引：`KunShineTech-Vault/08-内容创作/08-课程开发/GESP二级Astro课程项目说明.md`
- 完整Astro源代码：独立GitHub仓库，如 `KunShineTech-GESP-Course`；不要把node_modules、dist或学生数据放入Vault。
- 课程Markdown源稿可与MDX代码仓库同步，Vault内仅保留设计说明、索引与课程迭代记录。

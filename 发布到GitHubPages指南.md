# 发布到 GitHub Pages 指南

## 一次性配置（5 分钟）

1. **在 GitHub 创建仓库**
   - 推荐命名为 `<你的用户名>.github.io`（用户站点，访问地址 `https://<用户名>.github.io/`）
   - 或任意名字如 `gesp-academy`（项目站点，访问地址 `https://<用户名>.github.io/gesp-academy/`）

2. **配置站点地址**
   - 把 `astro.config.mjs` 里的 `site` 改为你的访问地址，例如：
     ```js
     site: 'https://zhangsan.github.io'
     // 项目站点则还要加 base：
     site: 'https://zhangsan.github.io', base: '/gesp-academy'
     ```

3. **首次推送代码**（在项目目录执行）：
   ```bash
   git init
   git add .
   git commit -m "init: KunShineTech Academy"
   git branch -M main
   git remote add origin https://github.com/<用户名>/<仓库名>.git
   git push -u origin main
   ```

4. **开启 GitHub Pages**
   - 仓库 **Settings → Pages → Source** 选择 **GitHub Actions**
   - （`.github/workflows/deploy.yml` 已随代码提交，推送后自动触发构建部署）

5. **验证**：Actions 页面出现绿色对勾后，访问你的地址即可。

## 日常更新

推送 `main` 分支即自动重新构建发布，无需手动操作：
```bash
git add .
git commit -m "更新内容"
git push
```

## 说明

- 构建产物约 8MB、400+ 页面，GitHub Pages（软上限 1GB）完全够用
- 若构建失败，在仓库 **Actions** 标签页查看日志；常见问题：Node 版本（工作流默认 20，可改）、大小写敏感的文件名
- 自定义域名：Settings → Pages → Custom domain 填入域名并配 DNS CNAME 记录

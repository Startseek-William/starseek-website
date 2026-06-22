# 星索导航科技 企业官网

深圳市星索导航科技有限公司（Shenzhen Starseek Navigation Technology Co., Ltd.）官方网站。

## 技术栈

- 纯静态 HTML + CSS + JS，无框架依赖
- 双语支持：中文 (`/zh/`) / 英文 (`/en/`)
- 深色科技简约风设计

## 目录结构

```
starseek-website/
├── index.html              # 根入口，浏览器语言自动跳转
├── CNAME                   # GitHub Pages 自定义域名（待配置）
├── zh/                     # 中文页面
│   ├── index.html          # 首页
│   ├── products.html       # 产品中心
│   ├── solutions.html      # 解决方案
│   ├── about.html          # 关于我们
│   └── contact.html        # 联系我们
├── en/                     # 英文页面
│   ├── index.html
│   ├── products.html
│   ├── solutions.html
│   ├── about.html
│   └── contact.html
├── css/
│   └── style.css           # 全局样式系统
├── js/
│   ├── i18n.js             # 中英文翻译字典
│   └── main.js             # 导航、语言切换、交互逻辑
└── images/                 # 图片资源（待添加）
```

## 本地预览

```bash
cd starseek-website
python3 -m http.server 8000
```

浏览器访问 `http://localhost:8000`

## 部署到 GitHub Pages

1. 创建 GitHub 仓库，例如 `starseek-website`
2. 配置仓库 Settings → Pages → Source 为 `main` 分支
3. 如需自定义域名，修改 `CNAME` 文件
4. 推送代码：

```bash
git init
git add -A
git commit -m "Initial commit: Starseek Navigation website"
git remote add origin <your-repo-url>
git push -u origin main
```

## 待办事项

- [ ] 替换公司 Logo (`images/logo.png`)
- [ ] 替换产品图片 (`images/products/`)
- [ ] 填入真实联系方式（地址、电话）
- [ ] 配置 Google Maps 或其他地图服务
- [ ] 如需自定义域名，修改 `CNAME` 文件

## 设计系统

| 项目     | 值                                   |
| -------- | ------------------------------------- |
| 主色     | `#0A84FF` (科技蓝)                    |
| 辅色     | `#00D4AA` (青绿)                      |
| 背景     | `#0D1117` (深色)                      |
| 卡片背景 | `#141B25`                             |
| 字体     | PingFang SC / Inter                   |

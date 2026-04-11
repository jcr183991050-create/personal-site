# 个人网站项目

一个现代化的个人作品集网站，使用React、TypeScript和Tailwind CSS构建。

## 🚀 功能特性

- **响应式设计**：适配手机、平板、桌面
- **深色模式**：支持系统偏好和手动切换
- **作品集展示**：项目卡片，包含技术栈标签
- **博客系统**：Markdown文章，支持Frontmatter
- **关于我**：个人介绍、技能展示、经历时间线
- **联系方式**：联系表单和社交媒体链接
- **现代化技术栈**：React 18、TypeScript、Tailwind CSS、Vite

## 📁 项目结构

```
src/
├── components/     # 可复用组件（布局、UI、共享）
├── pages/         # 页面组件（首页、关于、作品集、博客、联系）
├── data/          # 静态数据和博客内容
├── types/         # TypeScript类型定义
├── routes.tsx     # 路由配置
└── App.tsx        # 主应用组件
```

## 🛠️ 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 🚀 部署到GitHub Pages

### 步骤1：创建GitHub仓库
1. 访问 [github.com](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 输入仓库名称：`personal-site`
4. 选择公开（Public）仓库
5. 不要初始化README、.gitignore等（代码已存在）
6. 点击 "Create repository"

### 步骤2：关联远程仓库并推送
```bash
# 关联远程仓库（替换your-username为你的GitHub用户名）
git remote add origin https://github.com/jicongri/personal-site.git

# 推送代码到GitHub
git branch -M main
git push -u origin main
```

### 步骤3：配置GitHub Pages
1. 在GitHub仓库页面，点击 "Settings" → "Pages"
2. 在 "Source" 部分，选择 "Deploy from a branch"
3. 分支选择 "main"，文件夹选择 "/ (root)"
4. 点击 "Save"
5. 等待几分钟，访问 `https://jicongri.github.io/personal-site/`

## 🎨 自定义内容

### 更新个人信息
- `src/data/portfolio.ts` - 替换为你的真实项目
- `src/data/skills.ts` - 更新技能列表
- `src/pages/About.tsx` - 修改个人介绍和经历
- `src/data/blog/index.ts` - 添加更多博客文章

### 添加图片资源
在 `public/images/` 目录添加：
- 个人头像
- 项目截图
- 网站图标

## 📱 技术栈

- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Vite** - 构建工具
- **React Router v6** - 客户端路由
- **React Markdown** - Markdown渲染
- **React Icons** - 图标库

## 🔗 部署到Vercel（推荐）

1. 将代码推送到GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入GitHub仓库
4. 自动部署，免费HTTPS和CDN

## 📄 许可证

MIT

// 博客文章类型
export interface BlogPostMeta {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  slug: string;
  content?: string;
}

// 文章数据（硬编码）
const blogPostsData: BlogPostMeta[] = [
  {
    id: '1',
    slug: 'post-1',
    title: '我的第一篇博客文章',
    date: '2026-04-11',
    tags: ['React', 'TypeScript'],
    excerpt: '这是我的第一篇博客文章，介绍如何使用React和TypeScript构建个人网站。',
    content: `# 欢迎来到我的博客

这是我的第一篇博客文章。我将分享如何使用React和TypeScript构建个人网站的过程。

## 技术栈选择

我选择了以下技术栈：

- **React**: 用于构建用户界面
- **TypeScript**: 提供类型安全
- **Tailwind CSS**: 快速样式开发
- **Vite**: 构建工具

## 实现步骤

1. 项目初始化
2. 配置路由
3. 创建组件
4. 部署上线

## 代码示例

\`\`\`typescript
const App = () => {
  return <h1>Hello, World!</h1>;
};
\`\`\`

感谢阅读！`,
  },
  {
    id: '2',
    slug: 'post-2',
    title: 'Tailwind CSS入门指南',
    date: '2026-04-10',
    tags: ['CSS', 'Tailwind'],
    excerpt: '学习如何使用Tailwind CSS快速构建现代用户界面。',
    content: `# Tailwind CSS入门指南

Tailwind CSS是一个实用的CSS框架，可以帮助您快速构建自定义设计。

## 优点

- **实用类优先**: 直接在HTML中使用类名
- **响应式设计**: 内置响应式工具
- **定制化**: 完全可配置的设计系统

## 基本使用

\`\`\`html
<button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
  点击我
</button>
\`\`\`

## 响应式示例

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- 内容 -->
</div>
\`\`\`

希望这个指南对您有帮助！`,
  },
];

// 按日期排序（最新的在前）
blogPostsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// 获取所有文章
export const getAllPosts = () => blogPostsData.map(({ content, ...post }) => post);

// 按ID获取文章
export const getPostById = (id: string) => blogPostsData.find(post => post.id === id);

// 按slug获取文章（包含内容）
export const getPostBySlug = (slug: string) => blogPostsData.find(post => post.slug === slug);
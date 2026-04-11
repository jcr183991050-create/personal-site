import type { ProjectList } from '../types/portfolio';

export const projects: ProjectList = [
  {
    id: '1',
    title: '个人网站',
    description: '使用React和Tailwind CSS构建的响应式个人网站。',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/username/personal-site',
    liveUrl: 'https://personal-site.example.com',
    image: '/images/project1.png',
    featured: true,
  },
  {
    id: '2',
    title: '电子商务平台',
    description: '全栈电子商务应用，包含用户认证、支付集成和产品管理。',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce.example.com',
    image: '/images/project2.png',
    featured: true,
  },
  {
    id: '3',
    title: '任务管理应用',
    description: '拖放式任务管理工具，支持团队协作和实时更新。',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'DnD'],
    githubUrl: 'https://github.com/username/task-manager',
    liveUrl: 'https://tasks.example.com',
    image: '/images/project3.png',
    featured: false,
  },
  {
    id: '4',
    title: '天气应用',
    description: '基于位置的天气应用，提供实时天气数据和预报。',
    technologies: ['Vue.js', 'OpenWeather API', 'Vite'],
    githubUrl: 'https://github.com/username/weather-app',
    liveUrl: 'https://weather.example.com',
    image: '/images/project4.png',
    featured: false,
  },
];
import { Link } from 'react-router-dom';
import ThemeToggle from '../shared/ThemeToggle';

const Header = () => {
  const navItems = [
    { path: '/', label: '首页' },
    { path: '/about', label: '关于我' },
    { path: '/portfolio', label: '作品集' },
    { path: '/blog', label: '博客' },
    { path: '/contact', label: '联系方式' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            个人网站
          </Link>
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
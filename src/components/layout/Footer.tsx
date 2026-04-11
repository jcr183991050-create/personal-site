const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© {new Date().getFullYear()} 个人网站. 保留所有权利.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">GitHub</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">联系方式</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">联系表单</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">姓名</label>
              <input type="text" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">邮箱</label>
              <input type="email" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">消息</label>
              <textarea rows={4} className="w-full border rounded px-3 py-2"></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              发送
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">其他联系方式</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="font-medium mr-2">邮箱:</span>
              <span>example@email.com</span>
            </li>
            <li className="flex items-center">
              <span className="font-medium mr-2">GitHub:</span>
              <a href="#" className="text-blue-600 hover:underline">github.com/username</a>
            </li>
            <li className="flex items-center">
              <span className="font-medium mr-2">LinkedIn:</span>
              <a href="#" className="text-blue-600 hover:underline">linkedin.com/in/username</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
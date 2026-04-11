import { skills } from '../data/skills';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">关于我</h1>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">个人介绍</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            我是一名前端开发工程师，专注于使用现代Web技术构建优秀的用户体验。
            热爱学习新技术，喜欢解决复杂问题，并致力于编写清晰、可维护的代码。
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">技能</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="border rounded-lg p-4 flex flex-col items-center hover:shadow transition"
              >
                <span className="font-medium">{skill.name}</span>
                <span className={`text-sm mt-1 px-2 py-1 rounded ${
                  skill.level === 'expert' ? 'bg-green-100 text-green-800' :
                  skill.level === 'advanced' ? 'bg-blue-100 text-blue-800' :
                  skill.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {skill.level}
                </span>
                <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">经历</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold">前端开发工程师</h3>
              <p className="text-gray-600">某科技公司 · 2023年至今</p>
              <p className="text-gray-700 mt-2">
                负责React应用开发，参与产品设计和性能优化。
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-bold">全栈开发实习生</h3>
              <p className="text-gray-600">某创业公司 · 2022年</p>
              <p className="text-gray-700 mt-2">
                参与Node.js后端和React前端的全栈项目开发。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
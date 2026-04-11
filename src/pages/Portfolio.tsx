import { projects } from '../data/portfolio';

const Portfolio = () => {
  return (
    <div className="min-h-screen py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">作品集</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col"
          >
            <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
              <div className="text-gray-500">项目图片</div>
            </div>
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-blue-600"
                >
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  在线演示
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
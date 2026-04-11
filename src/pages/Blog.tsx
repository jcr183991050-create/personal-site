import { getAllPosts } from '../data/blog';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">博客</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Link
                to={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                阅读更多 →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug } from '../data/blog';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">文章未找到</h1>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          ← 返回博客列表
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 max-w-4xl mx-auto">
      <article className="prose lg:prose-xl max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 flex-wrap gap-2">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>
        <div className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content || '内容加载中...'}
          </ReactMarkdown>
        </div>
        <footer className="mt-12 pt-6 border-t">
          <Link to="/blog" className="text-blue-600 hover:underline">
            ← 返回博客列表
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default BlogPost;
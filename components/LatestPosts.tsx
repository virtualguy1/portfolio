import React from 'react';
import { Link } from 'react-router-dom';
import { MDXPost } from '../types';

interface LatestPostsProps {
  posts: MDXPost[];
}

export const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-terminal-green mb-6 border-b border-gray-800 pb-2">
        Latest Posts
      </h2>
      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.slug} className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8">
            <span className="text-gray-200 w-32 shrink-0 text-sm font-mono">{post.publishedAt}</span>
            <Link
              to={`/blog/${post.slug}`}
              className="text-terminal-highlight hover:underline text-sm font-medium"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
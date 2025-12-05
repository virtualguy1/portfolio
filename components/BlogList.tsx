import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MDXPost } from '../types';

export const BlogList: React.FC = () => {
    const [posts, setPosts] = useState<MDXPost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const modules = import.meta.glob('../content/blog/*.mdx');
            const postPromises = Object.entries(modules).map(async ([path, loader]) => {
                const mod = await loader() as any;
                const slug = path.split('/').pop()?.replace('.mdx', '') || '';
                return {
                    slug,
                    ...mod.frontmatter,
                } as MDXPost;
            });

            const loadedPosts = await Promise.all(postPromises);
            loadedPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
            setPosts(loadedPosts);
        };

        fetchPosts();
    }, []);

    return (
        <div className="animate-fade-in">
            <h2 className="text-xl font-bold mb-6 text-terminal-green border-b border-gray-800 pb-2">
                <span className="text-terminal-green mr-2">$</span>
                ls ./Blog
            </h2>
            <div className="space-y-8">
                {posts.map((post) => (
                    <article key={post.slug} className="group">
                        <Link to={`/blog/${post.slug}`} className="block">
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-lg md:text-xl font-semibold group-hover:text-terminal-highlight transition-colors">
                                    {post.title}
                                </h3>
                                <span className="text-sm text-gray-500 font-mono whitespace-nowrap md:ml-4">
                                    {post.publishedAt}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm md:text-base line-clamp-2">
                                {post.summary}
                            </p>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
};

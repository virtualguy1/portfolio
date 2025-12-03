import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';

const components = {
    h1: (props: any) => <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-terminal-highlight" {...props} />,
    h2: (props: any) => <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-terminal-highlight" {...props} />,
    h3: (props: any) => <h3 className="text-lg md:text-xl font-bold mt-6 mb-3 text-terminal-highlight" {...props} />,
    p: (props: any) => <p className="mb-4 leading-relaxed text-gray-300" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300" {...props} />,
    li: (props: any) => <li className="ml-4" {...props} />,
    a: (props: any) => <a className="text-terminal-highlight hover:underline" {...props} />,
    blockquote: (props: any) => <blockquote className="border-l-4 border-terminal-green pl-4 italic my-4 text-gray-400" {...props} />,
    code: (props: any) => <code className="bg-gray-800 rounded px-1 py-0.5 text-sm font-mono text-terminal-green" {...props} />,
    pre: (props: any) => <pre className="bg-gray-900 rounded p-4 overflow-x-auto mb-4 border border-gray-800" {...props} />,
    img: (props: any) => <img className="rounded-lg my-6 max-w-full border border-gray-800" {...props} />,
    hr: (props: any) => <hr className="border-gray-800 my-8" {...props} />,
};

export const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [Content, setContent] = useState<any>(null);
    const [meta, setMeta] = useState<any>(null);

    useEffect(() => {
        const loadPost = async () => {
            try {
                const module = await import(`../content/blog/${slug}.mdx`);
                setContent(() => module.default);
                setMeta(module.frontmatter);
            } catch (error) {
                console.error('Error loading post:', error);
            }
        };

        if (slug) {
            loadPost();
        }
    }, [slug]);

    if (!Content) {
        return (
            <div className="animate-pulse">
                <div className="h-8 bg-gray-800 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-800 rounded w-1/4 mb-8"></div>
                <div className="space-y-4">
                    <div className="h-4 bg-gray-800 rounded"></div>
                    <div className="h-4 bg-gray-800 rounded"></div>
                    <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in max-w-none">
            <Link to="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-terminal-highlight mb-8 transition-colors font-mono">
                <span className="mr-2">←</span> cd ..
            </Link>

            <header className="mb-8 pb-8 border-b border-gray-800">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-terminal-highlight">
                    {meta?.title}
                </h1>
                <div className="flex items-center text-sm text-gray-500 font-mono">
                    <time dateTime={meta?.publishedAt}>{meta?.publishedAt}</time>
                </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <MDXProvider components={components}>
                    <Content />
                </MDXProvider>
            </div>
        </div>
    );
};

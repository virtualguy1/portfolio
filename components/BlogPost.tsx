import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { motion } from "framer-motion";

const components = {
  h1: (props: any) => (
    <h1
      className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-tui-cyan border-b border-tui-border pb-2"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="text-xl md:text-2xl font-bold mt-8 mb-4 text-tui-magenta"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="text-lg md:text-xl font-bold mt-6 mb-3 text-tui-green"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="mb-4 leading-relaxed text-tui-fg" {...props} />
  ),
  ul: (props: any) => (
    <ul
      className="list-disc list-inside mb-4 space-y-2 text-tui-fg"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol
      className="list-decimal list-inside mb-4 space-y-2 text-tui-fg"
      {...props}
    />
  ),
  li: (props: any) => <li className="ml-4" {...props} />,
  a: (props: any) => (
    <a
      className="text-tui-cyan hover:text-tui-green hover:underline transition-colors"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-2 border-tui-muted pl-4 italic my-4 text-tui-muted font-mono"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-tui-border px-1 py-0.5 text-sm font-mono text-tui-orange"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-tui-border p-4 overflow-x-auto mb-4 border border-tui-border rounded"
      {...props}
    />
  ),
  img: (props: any) => (
    <img className="my-6 max-w-full border border-tui-border" {...props} />
  ),
  hr: (props: any) => <hr className="border-tui-border my-8" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto my-6">
      <table
        className="w-full border-collapse border border-tui-border font-mono text-sm"
        {...props}
      />
    </div>
  ),
  thead: (props: any) => <thead className="bg-tui-border" {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => (
    <tr
      className="border-b border-tui-border hover:bg-tui-border/50 transition-colors"
      {...props}
    />
  ),
  th: (props: any) => (
    <th
      className="border border-tui-border px-4 py-2 text-left font-bold text-tui-cyan"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="border border-tui-border px-4 py-2 text-tui-fg" {...props} />
  ),
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
        console.error("Error loading post:", error);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  if (!Content) {
    return (
      <div className="font-mono text-tui-muted text-sm">Loading post...</div>
    );
  }

  return (
    <motion.div
      className="max-w-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back button */}
      <Link
        to="/blog"
        className="inline-flex items-center text-sm text-tui-cyan hover:text-tui-green mb-6 transition-colors font-mono"
      >
        <span className="mr-2">←</span>
        cd ../blog
      </Link>

      {/* Header */}
      <header className="mb-8 pb-4 border-b border-tui-border">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-tui-cyan font-mono">
          {meta?.title}
        </h1>
        <div className="flex items-center text-sm text-tui-yellow font-mono">
          <time dateTime={meta?.publishedAt}>{meta?.publishedAt}</time>
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </div>

      {/* Bottom navigation */}
      <div className="mt-12 pt-6 border-t border-tui-border">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-tui-cyan hover:text-tui-green transition-colors font-mono"
        >
          <span className="mr-2">←</span>
          Back to all posts
        </Link>
      </div>
    </motion.div>
  );
};

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { motion } from "framer-motion";
import { staggerContainer, staggerChild, viewportOnce } from "./animations";

const components = {
  h1: (props: any) => (
    <motion.h1
      className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-tui-cyan border-b border-tui-border pb-2"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.3 }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <motion.h2
      className="text-xl md:text-2xl font-bold mt-8 mb-4 text-tui-magenta"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.3 }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <motion.h3
      className="text-lg md:text-xl font-bold mt-6 mb-3 text-tui-green"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.3 }}
      {...props}
    />
  ),
  p: (props: any) => (
    <motion.p
      className="mb-4 leading-relaxed text-tui-fg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.3 }}
      {...props}
    />
  ),
  ul: (props: any) => (
    <motion.ul
      className="list-disc list-inside mb-4 space-y-2 text-tui-fg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.3 }}
      {...props}
    />
  ),
  ol: (props: any) => (
    <motion.ol
      className="list-decimal list-inside mb-4 space-y-2 text-tui-fg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.3 }}
      {...props}
    />
  ),
  li: (props: any) => <li className="ml-4" {...props} />,
  a: (props: any) => (
    <motion.a
      className="text-tui-cyan hover:text-tui-green transition-colors link-underline"
      whileHover={{ x: 1 }}
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <motion.blockquote
      className="border-l-2 border-tui-muted pl-4 italic my-4 text-tui-muted font-mono"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.3 }}
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
    <motion.pre
      className="bg-tui-border p-4 overflow-x-auto mb-4 border border-tui-border rounded"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.3 }}
      {...props}
    />
  ),
  img: (props: any) => (
    <motion.img
      className="my-6 max-w-full border border-tui-border"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.4 }}
      {...props}
    />
  ),
  hr: (props: any) => (
    <motion.hr
      className="border-tui-border my-8"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={viewportOnce}
      transition={{ duration: 0.5 }}
      {...props}
    />
  ),
  table: (props: any) => (
    <motion.div
      className="overflow-x-auto my-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.3 }}
    >
      <table
        className="w-full border-collapse border border-tui-border font-mono text-sm"
        {...props}
      />
    </motion.div>
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
      <div className="font-mono text-tui-muted text-sm">
        <span className="cursor-block"></span> Loading post...
      </div>
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
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-tui-cyan hover:text-tui-green mb-6 transition-colors font-mono link-underline"
        >
          <motion.span
            className="mr-2"
            whileHover={{ x: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            ←
          </motion.span>
          cd ../blog
        </Link>
      </motion.div>

      {/* Header */}
      <motion.header
        className="mb-8 pb-4 border-b border-tui-border"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-2xl md:text-3xl font-bold mb-2 text-tui-cyan font-mono"
          variants={staggerChild}
        >
          {meta?.title}
        </motion.h1>
        <motion.div
          className="flex items-center text-sm text-tui-yellow font-mono"
          variants={staggerChild}
        >
          <time dateTime={meta?.publishedAt}>{meta?.publishedAt}</time>
        </motion.div>
      </motion.header>

      {/* Content */}
      <motion.div
        className="prose prose-invert prose-lg max-w-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </motion.div>

      {/* Bottom navigation */}
      <motion.div
        className="mt-12 pt-6 border-t border-tui-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.3 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-tui-cyan hover:text-tui-green transition-colors font-mono link-underline"
        >
          <motion.span
            className="mr-2"
            whileHover={{ x: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            ←
          </motion.span>
          Back to all posts
        </Link>
      </motion.div>
    </motion.div>
  );
};

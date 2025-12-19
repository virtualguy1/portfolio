import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import { motion } from "framer-motion";

const components = {
  h1: (props: any) => (
    <motion.h1
      className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-terminal-green"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      {...props}
    />
  ),
  h2: (props: any) => (
    <motion.h2
      className="text-xl md:text-2xl font-bold mt-8 mb-4 text-terminal-green"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <motion.h3
      className="text-lg md:text-xl font-bold mt-6 mb-3 text-terminal-green"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      {...props}
    />
  ),
  p: (props: any) => (
    <motion.p
      className="mb-4 leading-relaxed text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      {...props}
    />
  ),
  ul: (props: any) => (
    <motion.ul
      className="list-disc list-inside mb-4 space-y-2 text-gray-300"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      {...props}
    />
  ),
  ol: (props: any) => (
    <motion.ol
      className="list-decimal list-inside mb-4 space-y-2 text-gray-300"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      {...props}
    />
  ),
  li: (props: any) => <li className="ml-4" {...props} />,
  a: (props: any) => (
    <motion.a
      className="text-terminal-green hover:underline"
      whileHover={{ color: "#4ade80" }}
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <motion.blockquote
      className="border-l-4 border-terminal-green pl-4 italic my-4 text-gray-400"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-800 rounded px-1 py-0.5 text-sm font-mono text-terminal-green"
      {...props}
    />
  ),
  pre: (props: any) => (
    <motion.pre
      className="bg-gray-900 rounded p-4 overflow-x-auto mb-4 border border-gray-800"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      {...props}
    />
  ),
  img: (props: any) => (
    <motion.img
      className="rounded-lg my-6 max-w-full border border-gray-800"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    />
  ),
  hr: (props: any) => (
    <motion.hr
      className="border-gray-800 my-8"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    />
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

  const loadingPulseVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (!Content) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-8 bg-gray-800 rounded w-3/4 mb-4"
          variants={loadingPulseVariants}
          animate="animate"
        />
        <motion.div
          className="h-4 bg-gray-800 rounded w-1/4 mb-8"
          variants={loadingPulseVariants}
          animate="animate"
        />
        <div className="space-y-4">
          <motion.div
            className="h-4 bg-gray-800 rounded"
            variants={loadingPulseVariants}
            animate="animate"
          />
          <motion.div
            className="h-4 bg-gray-800 rounded"
            variants={loadingPulseVariants}
            animate="animate"
          />
          <motion.div
            className="h-4 bg-gray-800 rounded w-5/6"
            variants={loadingPulseVariants}
            animate="animate"
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Animated back button */}
      <Link
        to="/blog"
        className="inline-flex items-center text-sm text-gray-500 hover:text-terminal-highlight mb-8 transition-colors font-mono group"
      >
        <motion.span
          className="mr-2"
          initial={{ x: 0 }}
          whileHover={{ x: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          ←
        </motion.span>
        <motion.span
          whileHover={{ color: "#4ade80" }}
          transition={{ duration: 0.2 }}
        >
          cd ..
        </motion.span>
      </Link>

      {/* Header with staggered animation */}
      <motion.header
        className="mb-8 pb-8 border-b border-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 text-terminal-green"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
        >
          {meta?.title}
        </motion.h1>
        <motion.div
          className="flex items-center text-sm text-gray-500 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <time dateTime={meta?.publishedAt}>{meta?.publishedAt}</time>
        </motion.div>
      </motion.header>

      {/* Content with reveal animation */}
      <motion.div
        className="prose prose-invert prose-lg max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </motion.div>

      {/* Bottom fade-in navigation hint */}
      <motion.div
        className="mt-12 pt-8 border-t border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-gray-500 hover:text-terminal-highlight transition-colors font-mono group"
        >
          <motion.span
            className="mr-2"
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            ←
          </motion.span>
          Back to all posts
        </Link>
      </motion.div>
    </motion.div>
  );
};

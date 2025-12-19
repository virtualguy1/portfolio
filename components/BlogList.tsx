import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { MDXPost } from "../types";
import { AnimatedPage } from "./AnimatedPage";

export const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<MDXPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const modules = import.meta.glob("../content/blog/*.mdx");
      const postPromises = Object.entries(modules).map(
        async ([path, loader]) => {
          const mod = (await loader()) as any;
          const slug = path.split("/").pop()?.replace(".mdx", "") || "";
          return {
            slug,
            ...mod.frontmatter,
          } as MDXPost;
        },
      );

      const loadedPosts = await Promise.all(postPromises);
      loadedPosts.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      );
      setPosts(loadedPosts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const sectionHeaderVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const articleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <AnimatedPage>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-8 bg-gray-800 rounded w-1/3 mb-6 animate-pulse"></div>
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2 animate-pulse">
                  <div className="h-6 bg-gray-800 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-800 rounded w-full"></div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            <motion.h2
              className="text-xl font-bold mb-6 text-terminal-green border-b border-gray-800 pb-2"
              variants={sectionHeaderVariants}
            >
              <span className="text-terminal-green mr-2">$</span>
              ls ./Blog
            </motion.h2>

            {posts.length > 0 ? (
              <motion.div className="space-y-8" variants={containerVariants}>
                {posts.map((post) => (
                  <motion.article
                    key={post.slug}
                    className="group relative"
                    variants={articleVariants}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2, ease: "easeOut" as const },
                    }}
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-200 group-hover:text-terminal-highlight transition-colors duration-200">
                          {post.title}
                        </h3>
                        <span className="text-sm text-gray-500 font-mono whitespace-nowrap md:ml-4 group-hover:text-gray-400 transition-colors duration-200">
                          {post.publishedAt}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm md:text-base line-clamp-2 group-hover:text-gray-300 transition-colors duration-200">
                        {post.summary}
                      </p>
                    </Link>

                    {/* Animated underline on hover */}
                    <div className="h-[1px] bg-terminal-green mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.p
                className="text-gray-500 text-center py-8 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                No posts found. Check back soon!
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
};

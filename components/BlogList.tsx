import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { MDXFrontmatter, MDXPost } from "../types";
import { AnimatedPage } from "./AnimatedPage";
import { Box } from "./ui/Box";
import { staggerContainer, staggerChild } from "./animations";

// Shape that Vite's `import.meta.glob()` loader resolves to for an MDX file.
type BlogModule = { frontmatter: MDXFrontmatter };

export const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<MDXPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchPosts = async () => {
      const modules = import.meta.glob<BlogModule>("../content/blog/*.mdx");
      const postPromises = Object.entries(modules).map(
        async ([path, loader]): Promise<MDXPost> => {
          const mod = await loader();
          const slug = path.split("/").pop()?.replace(".mdx", "") ?? "";
          return { slug, ...mod.frontmatter };
        },
      );

      const loadedPosts = await Promise.all(postPromises);
      loadedPosts.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime(),
      );
      if (cancelled) return;
      setPosts(loadedPosts);
      setIsLoading(false);
    };

    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, []);

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
            className="font-mono text-tui-muted"
            role="status"
            aria-live="polite"
          >
            <span className="cursor-block" aria-hidden="true"></span> Loading
            blog posts...
          </motion.div>
        ) : (
          <Box title="find ./blog -type f">
            {posts.length > 0 ? (
              <motion.div
                className="space-y-6 font-mono"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {posts.map((post, index) => (
                  <motion.div key={post.slug} variants={staggerChild}>
                    <Link to={`/blog/${post.slug}`} className="block group">
                      <motion.div
                        className="space-y-1"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Date and filename */}
                        <div className="flex flex-col md:flex-row md:gap-4 text-sm">
                          <motion.span
                            className="text-tui-yellow"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {post.publishedAt}
                          </motion.span>
                          <motion.span
                            className="text-tui-green group-hover:text-tui-cyan transition-colors"
                            whileHover={{
                              textShadow:
                                "0 0 8px rgba(126, 231, 135, 0.5)",
                            }}
                          >
                            {post.slug}.md
                          </motion.span>
                        </div>

                        {/* Summary as quoted string */}
                        <motion.div
                          className="text-tui-muted text-sm pl-0 md:pl-28"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.1 }}
                        >
                          "{post.summary}"
                        </motion.div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <p className="text-tui-muted font-mono text-sm">
                No posts found. Check back soon!
              </p>
            )}
          </Box>
        )}
      </AnimatePresence>
    </AnimatedPage>
  );
};

import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { MDXPost } from "../types";
import { AnimatedPage } from "./AnimatedPage";
import { Box } from "./ui/Box";

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
          >
            Loading blog posts...
          </motion.div>
        ) : (
          <Box title="find ./blog -type f">
            {posts.length > 0 ? (
              <div className="space-y-6 font-mono">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="block group"
                  >
                    <div className="space-y-1">
                      {/* Date and filename */}
                      <div className="flex flex-col md:flex-row md:gap-4 text-sm">
                        <span className="text-tui-yellow">{post.publishedAt}</span>
                        <span className="text-tui-green group-hover:text-tui-cyan transition-colors">
                          {post.slug}.md
                        </span>
                      </div>
                      
                      {/* Summary as quoted string */}
                      <div className="text-tui-muted text-sm pl-0 md:pl-28">
                        "{post.summary}"
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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

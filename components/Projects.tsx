import React from "react";
import { motion } from "framer-motion";
import { ProjectItem } from "../types";
import { Box } from "./ui/Box";
import { Tag } from "./ui/Tag";
import {
  staggerContainer,
  staggerChild,
  staggerContainerFast,
  viewportOnce,
} from "./animations";

interface ProjectsProps {
  projects: ProjectItem[];
}

// Animated tree character component (purely decorative ASCII).
const TreeChar: React.FC<{
  char: string;
  delay?: number;
}> = ({ char, delay = 0 }) => (
  <motion.span
    aria-hidden="true"
    className="text-tui-border"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={viewportOnce}
    transition={{ duration: 0.2, delay }}
  >
    {char}
  </motion.span>
);

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="mb-12">
      <Box title="ls -la ./projects">
        {projects.length === 0 ? (
          <p className="font-mono text-sm text-tui-muted">
            <span className="text-tui-yellow">$</span> total 0 — nothing to list
            yet. Check back soon!
          </p>
        ) : (
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="font-mono"
                variants={staggerChild}
              >
                {/* Directory listing style */}
                <div className="flex flex-col md:flex-row md:items-start gap-2">
                  {/* Permissions — decorative "ls -la"-style flavour */}
                  <motion.span
                    aria-hidden="true"
                    className="text-tui-muted text-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    drwxr-xr-x
                  </motion.span>

                  <div className="flex-1 space-y-2">
                    {/* Project name with glow effect */}
                    <motion.div
                      className="text-tui-green font-bold"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.05 }}
                      whileHover={{
                        textShadow: "0 0 8px rgba(126, 231, 135, 0.5)",
                      }}
                    >
                      {project.title}
                    </motion.div>

                    {/* Description with tree characters */}
                    <motion.div
                      className="flex gap-2 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                    >
                      <TreeChar char="├──" delay={index * 0.1 + 0.15} />
                      <span className="text-tui-fg">{project.description}</span>
                    </motion.div>

                    {/* Tech stack with staggered tags */}
                    <div className="flex gap-2 items-center flex-wrap">
                      <TreeChar char="├──" delay={index * 0.1 + 0.2} />
                      <motion.div
                        className="flex flex-wrap gap-2"
                        variants={staggerContainerFast}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportOnce}
                      >
                        {project.techStack.map((tech, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={viewportOnce}
                            transition={{
                              duration: 0.2,
                              delay: index * 0.1 + 0.25 + idx * 0.05,
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            }}
                          >
                            <Tag color="orange">{tech}</Tag>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Link with animated arrow */}
                    <motion.div
                      className="flex gap-2 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    >
                      <TreeChar char="└──" delay={index * 0.1 + 0.35} />
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} (opens in new tab)`}
                        className="text-tui-cyan hover:text-tui-green transition-colors link-underline"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.span
                          aria-hidden="true"
                          className="inline-block"
                          whileHover={{ x: 2 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                          }}
                        >
                          →
                        </motion.span>{" "}
                        {project.link.replace("https://", "")}
                      </motion.a>
                    </motion.div>
                  </div>
                </div>

                {/* Separator except for last item */}
                {index < projects.length - 1 && (
                  <motion.div
                    className="text-tui-border mt-4 text-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.3 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                  >
                    {" "}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </Box>
    </section>
  );
};

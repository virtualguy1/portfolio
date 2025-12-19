import React from "react";
import { motion } from "framer-motion";
import { ProjectItem } from "../types";
import { staggerContainer, viewportOnce } from "./animations";

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const sectionHeaderVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.1,
      },
    }),
  };

  const techTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="mb-12"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2
        className="text-xl font-bold text-terminal-green mb-6 border-b border-gray-800 pb-2"
        variants={sectionHeaderVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-terminal-green mr-2">$</span>
        cd ./Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border border-gray-800 p-6 group cursor-pointer"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            whileHover={{
              y: -5,
              borderColor: "#22c55e",
              boxShadow: "0 0 25px rgba(34, 197, 94, 0.2)",
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <motion.h3
                className="text-lg font-bold text-gray-200"
                whileHover={{ color: "#4ade80" }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <motion.a
                href={project.link}
                className="text-terminal-green hover:text-terminal-highlight"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                [view]
              </motion.a>
            </div>

            <motion.p
              className="text-gray-400 text-sm mb-6 leading-relaxed h-20 overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mt-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {project.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  className="text-xs font-mono bg-gray-900 text-gray-500 px-2 py-1 rounded"
                  variants={techTagVariants}
                  whileHover={{
                    backgroundColor: "#166534",
                    color: "#4ade80",
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

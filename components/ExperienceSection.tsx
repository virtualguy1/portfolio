import React from "react";
import { motion, Variants } from "framer-motion";
import { ExperienceItem } from "../types";
import {
  staggerContainer,
  fadeInUp,
  slideInFromLeft,
  dotPulse,
  viewportOnce,
} from "./animations";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
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

  const experienceCardVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: index * 0.15,
      },
    }),
  };

  const responsibilityVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.section
      className="mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.h2
        className="text-xl font-bold text-terminal-green mb-6 border-b border-gray-800 pb-2"
        variants={sectionHeaderVariants}
      >
        <span className="text-terminal-green mr-2">$</span>
        cat ./Experience
      </motion.h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-4 md:pl-0"
            custom={index}
            variants={experienceCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Mobile timeline dot */}
            <motion.div
              className="absolute left-0 top-2 w-2 h-2 bg-terminal-green rounded-full md:hidden"
              variants={dotPulse}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <div className="flex items-center gap-2">
                {/* Desktop decorative dot */}
                <motion.span
                  className="hidden md:inline-block w-2 h-2 bg-terminal-green rounded-full"
                  variants={dotPulse}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                />
                <motion.h3
                  className="text-lg font-bold text-gray-200"
                  whileHover={{ color: "#4ade80", x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {exp.role}
                </motion.h3>
              </div>
              <motion.span
                className="text-sm text-gray-400 font-mono md:text-right"
                variants={fadeInUp}
              >
                {exp.period}
              </motion.span>
            </div>

            <motion.div className="mb-3 pl-0 md:pl-5" variants={fadeInUp}>
              <span className="text-gray-300 italic">{exp.company}</span>
            </motion.div>

            <motion.ul
              className="list-disc list-outside ml-5 md:ml-9 space-y-1 text-gray-400 text-sm leading-relaxed mb-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {exp.responsibilities.map((resp, idx) => (
                <motion.li
                  key={idx}
                  variants={responsibilityVariants}
                  whileHover={{ x: 5, color: "#d1d5db" }}
                  transition={{ duration: 0.2 }}
                >
                  {resp}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="pl-0 md:pl-5 text-xs text-gray-500 font-mono"
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {exp.skills}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

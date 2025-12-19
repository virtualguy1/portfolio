import React from "react";
import { motion } from "framer-motion";
import { SkillCategory } from "../types";
import {
  staggerContainer,
  fadeInUp,
  slideInFromLeft,
  viewportOnce,
} from "./animations";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
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

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
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
        echo $SKILLS
      </motion.h2>

      <motion.div
        className="space-y-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="text-sm leading-relaxed"
            variants={skillItemVariants}
            whileHover={{
              x: 8,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            <motion.span
              className="font-bold text-gray-200"
              whileHover={{ color: "#4ade80" }}
              transition={{ duration: 0.2 }}
            >
              {skill.category}:{" "}
            </motion.span>
            <motion.span
              className="text-gray-400"
              whileHover={{ color: "#d1d5db" }}
              transition={{ duration: 0.2 }}
            >
              {skill.items}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

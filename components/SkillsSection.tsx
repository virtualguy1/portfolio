import React, { memo } from "react";
import { motion } from "framer-motion";
import { SkillCategory } from "../types";
import { Box } from "./ui/Box";
import {
  staggerContainer,
  staggerChild,
  staggerContainerFast,
  viewportOnce,
} from "./animations";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

// Animated skill tag with hover effects. `memo`'d because it renders
// once per comma-separated skill and the props are primitives that
// never change after mount.
const SkillTag = memo(function SkillTag({
  skill,
  index,
}: {
  skill: string;
  index: number;
}) {
  return (
    <motion.span
      className="px-2 py-1 bg-tui-border/20 text-tui-orange rounded text-xs border border-tui-border hover:border-tui-cyan hover:text-tui-cyan tag-enhanced"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportOnce}
      transition={{
        duration: 0.2,
        delay: index * 0.03,
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
        boxShadow: "0 0 10px rgba(255, 166, 87, 0.3)",
      }}
    >
      {skill.trim()}
    </motion.span>
  );
});

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="mb-8">
      <Box title="cat skills.txt">
        <div className="overflow-x-auto overflow-y-hidden">
          <motion.table
            className="w-full font-mono text-sm border-collapse"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <thead>
              <motion.tr
                className="border-b border-tui-border"
                variants={staggerChild}
              >
                <th className="text-left py-2 pr-4 text-tui-cyan font-bold">
                  Category
                </th>
                <th className="text-left py-2 text-tui-cyan font-bold">
                  Technologies
                </th>
              </motion.tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <motion.tr
                  key={index}
                  className={`${
                    index !== skills.length - 1
                      ? "border-b border-tui-border/30"
                      : ""
                  } hover:bg-tui-border/10 transition-colors`}
                  variants={staggerChild}
                  whileHover={{
                    backgroundColor: "rgba(48, 54, 61, 0.15)",
                  }}
                >
                  <motion.td
                    className="py-3 pr-4 align-top text-tui-magenta font-semibold whitespace-nowrap"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {skill.category}
                  </motion.td>
                  <td className="py-3 text-tui-fg">
                    <motion.div
                      className="flex flex-wrap gap-2"
                      variants={staggerContainerFast}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                    >
                      {skill.items.split(",").map((item, idx) => (
                        <SkillTag key={idx} skill={item} index={idx} />
                      ))}
                    </motion.div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      </Box>
    </section>
  );
};

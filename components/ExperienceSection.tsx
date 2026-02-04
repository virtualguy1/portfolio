import React from "react";
import { motion } from "framer-motion";
import { ExperienceItem } from "../types";
import { Box } from "./ui/Box";
import {
  staggerContainer,
  staggerChild,
  viewportOnce,
} from "./animations";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

// Animated separator line
const AnimatedSeparator: React.FC = () => (
  <motion.div
    className="text-tui-border pt-4 overflow-hidden whitespace-nowrap"
    initial={{ width: 0, opacity: 0 }}
    whileInView={{ width: "100%", opacity: 1 }}
    viewport={viewportOnce}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {"─ ".repeat(50)}
  </motion.div>
);

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  return (
    <section className="mb-8">
      <Box title="cat experience.log">
        <motion.div
          className="space-y-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              variants={staggerChild}
            >
              {/* Company and Role on same line */}
              <motion.div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <motion.h3
                    className="text-base md:text-lg font-bold text-tui-magenta"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {exp.role}
                  </motion.h3>
                  <motion.span
                    className="text-tui-cyan text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                  >
                    @ {exp.company}
                  </motion.span>
                </div>

                {/* Period */}
                <motion.div
                  className="text-tui-yellow font-mono text-sm whitespace-nowrap"
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.15 }}
                >
                  [{exp.period}]
                </motion.div>
              </motion.div>

              {/* Responsibilities with staggered bullets */}
              <motion.ul
                className="space-y-2 text-tui-muted text-sm md:text-base pt-1"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    className="flex gap-2"
                    variants={staggerChild}
                  >
                    <motion.span
                      className="flex-shrink-0 text-tui-green"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={viewportOnce}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                        delay: idx * 0.05,
                      }}
                    >
                      •
                    </motion.span>
                    <span className="flex-1">{resp}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Separator (except for last item) */}
              {index < experiences.length - 1 && <AnimatedSeparator />}
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </section>
  );
};

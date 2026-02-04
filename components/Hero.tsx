import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "./ui/Box";
import { useGlitchTyping } from "../hooks/useGlitchTyping";
import { staggerContainer, staggerChild } from "./animations";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
}

// Animated ASCII underline component
const AnimatedUnderline: React.FC<{ length: number }> = ({ length }) => {
  return (
    <motion.div
      className="text-tui-border overflow-hidden"
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {"─".repeat(length)}
      </motion.span>
    </motion.div>
  );
};

export const Hero: React.FC<HeroProps> = ({ name, title, summary }) => {
  // Glitched typing effect for name
  const { displayText: displayName, isComplete } = useGlitchTyping({
    text: name,
    typingSpeed: 80,
    glitchChance: 0.8,
  });

  // Split summary into lines for chevron display
  const summaryLines = summary.split(". ").filter((line) => line.trim());

  return (
    <section className="mb-8">
      <Box title="whoami">
        <div className="space-y-4">
          {/* Name with glitch effect */}
          <h1 className="text-2xl md:text-3xl font-bold text-tui-fg">
            {displayName}
            {!isComplete && (
              <span className="cursor-block"></span>
            )}
          </h1>

          {/* ASCII underline - animated draw when typing is complete */}
          <AnimatePresence>
            {isComplete && <AnimatedUnderline length={name.length} />}
          </AnimatePresence>

          {/* Title and Summary - staggered reveal after name is complete */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* Title */}
                <motion.div
                  className="text-tui-magenta text-lg"
                  variants={staggerChild}
                >
                  {title}
                </motion.div>

                {/* Summary with chevrons - each line staggers in */}
                <motion.div
                  className="space-y-2 text-tui-muted text-sm md:text-base"
                  variants={staggerContainer}
                >
                  {summaryLines.map((line, idx) => (
                    <motion.div
                      key={idx}
                      className="flex gap-2"
                      variants={staggerChild}
                    >
                      <motion.span
                        className="text-tui-green flex-shrink-0"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx, duration: 0.2 }}
                      >
                        &gt;
                      </motion.span>
                      <span>
                        {line.trim()}
                        {idx < summaryLines.length - 1 ? "." : ""}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Box>
    </section>
  );
};

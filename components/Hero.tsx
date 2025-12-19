import React from "react";
import { motion, Variants } from "framer-motion";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
}

export const Hero: React.FC<HeroProps> = ({ name, title, summary }) => {
  // Calculate animation duration based on name length
  const nameDuration = name.length * 0.08;

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut" as const,
      },
    },
  };

  const cursorVariants: Variants = {
    blink: {
      opacity: [1, 0],
      transition: {
        duration: 0.7,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      },
    },
  };

  const summaryVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        delay: nameDuration + 0.5,
      },
    },
  };

  return (
    <section className="mb-12 text-left">
      <div className="flex items-center mb-4">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-100 inline-flex flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={char === " " ? "mr-2" : ""}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.span
          className="inline-block w-[3px] h-8 md:h-10 bg-terminal-green ml-1"
          variants={cursorVariants}
          initial={{ opacity: 0 }}
          animate="blink"
          transition={{
            delay: nameDuration + 0.3,
          }}
        />
      </div>

      <motion.p
        className="text-gray-400 leading-relaxed text-sm md:text-base max-w-2xl"
        variants={summaryVariants}
        initial="hidden"
        animate="visible"
      >
        {summary}
      </motion.p>
    </section>
  );
};

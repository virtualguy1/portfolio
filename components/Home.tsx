import React from "react";
import { motion } from "framer-motion";
import { Hero } from "./Hero";
import { ExperienceSection } from "./ExperienceSection";
import { SkillsSection } from "./SkillsSection";
import { ProfileData } from "../types";
import { AnimatedPage } from "./AnimatedPage";

interface HomeProps {
  data: ProfileData;
}

export const Home: React.FC<HomeProps> = ({ data }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };

  return (
    <AnimatedPage>
      <main>
        {/* Hero Section */}
        <motion.div
          custom={0}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <Hero name={data.name} title={data.title} summary={data.summary} />
        </motion.div>

        {/* Experience Section */}
        <motion.div
          custom={1}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <ExperienceSection experiences={data.experience} />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          custom={2}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <SkillsSection skills={data.skills} />
        </motion.div>
      </main>
    </AnimatedPage>
  );
};

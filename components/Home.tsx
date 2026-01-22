import React from "react";
import { Hero } from "./Hero";
import { ExperienceSection } from "./ExperienceSection";
import { SkillsSection } from "./SkillsSection";
import { ProfileData } from "../types";
import { AnimatedPage } from "./AnimatedPage";

interface HomeProps {
  data: ProfileData;
}

export const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <AnimatedPage>
      <main>
        <Hero name={data.name} title={data.title} summary={data.summary} />
        <ExperienceSection experiences={data.experience} />
        <SkillsSection skills={data.skills} />
      </main>
    </AnimatedPage>
  );
};

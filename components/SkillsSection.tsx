import React from 'react';
import { SkillCategory } from '../types';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-terminal-green mb-6 border-b border-gray-800 pb-2">
        Skills
      </h2>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="text-sm leading-relaxed">
            <span className="font-bold text-gray-200">{skill.category}: </span>
            <span className="text-gray-400">{skill.items}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
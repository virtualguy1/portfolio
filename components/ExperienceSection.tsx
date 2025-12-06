import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold text-terminal-green mb-6 border-b border-gray-800 pb-2">
        <span className="text-terminal-green mr-2">$</span>
        cat ./Experience
      </h2>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-4 md:pl-0">
            {/* Mobile timeline dot */}
            <div className="absolute left-0 top-2 w-2 h-2 bg-terminal-green rounded-full md:hidden"></div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <div className="flex items-center gap-2">
                {/* Desktop decorative dot */}
                <span className="hidden md:inline-block w-2 h-2 bg-terminal-green rounded-full"></span>
                <h3 className="text-lg font-bold text-gray-200">{exp.role}</h3>
              </div>
              <span className="text-sm text-gray-400 font-mono md:text-right">{exp.period}</span>
            </div>

            <div className="mb-3 pl-0 md:pl-5">
              <span className="text-gray-300 italic">{exp.company}</span>
            </div>

            <ul className="list-disc list-outside ml-5 md:ml-9 space-y-1 text-gray-400 text-sm leading-relaxed mb-3">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>

            <div className="pl-0 md:pl-5 text-xs text-gray-500 font-mono">
              {exp.skills}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
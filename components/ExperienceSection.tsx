import React from "react";
import { ExperienceItem } from "../types";
import { Box } from "./ui/Box";

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  return (
    <section className="mb-8">
      <Box title="cat experience.log">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="space-y-2">
              {/* Company and Role on same line */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base md:text-lg font-bold text-tui-magenta">
                    {exp.role}
                  </h3>
                  <span className="text-tui-cyan text-sm md:text-base">
                    @ {exp.company}
                  </span>
                </div>

                {/* Period */}
                <div className="text-tui-yellow font-mono text-sm whitespace-nowrap">
                  [{exp.period}]
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 text-tui-muted text-sm md:text-base pt-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="flex-shrink-0 text-tui-green">•</span>
                    <span className="flex-1">{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="text-tui-orange text-xs font-mono pt-1">
                # {exp.skills}
              </div>

              {/* Separator (except for last item) */}
              {index < experiences.length - 1 && (
                <div className="text-tui-border pt-4 overflow-hidden whitespace-nowrap">
                  {"─ ".repeat(50)}
                </div>
              )}
            </div>
          ))}
        </div>
      </Box>
    </section>
  );
};

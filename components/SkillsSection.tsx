import React from "react";
import { SkillCategory } from "../types";
import { Box } from "./ui/Box";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="mb-8">
      <Box title="cat skills.txt">
        <div className="overflow-x-auto">
          <table className="w-full font-mono text-sm border-collapse">
            <thead>
              <tr className="border-b border-tui-border">
                <th className="text-left py-2 pr-4 text-tui-cyan font-bold">
                  Category
                </th>
                <th className="text-left py-2 text-tui-cyan font-bold">
                  Technologies
                </th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr 
                  key={index} 
                  className={`${
                    index !== skills.length - 1 ? 'border-b border-tui-border/30' : ''
                  } hover:bg-tui-border/10 transition-colors`}
                >
                  <td className="py-3 pr-4 align-top text-tui-magenta font-semibold whitespace-nowrap">
                    {skill.category}
                  </td>
                  <td className="py-3 text-tui-fg">
                    <div className="flex flex-wrap gap-2">
                      {skill.items.split(',').map((item, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-tui-border/20 text-tui-orange rounded text-xs border border-tui-border hover:border-tui-cyan hover:text-tui-cyan transition-colors"
                        >
                          {item.trim()}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Box>
    </section>
  );
};

import React from "react";
import { Box } from "./ui/Box";
import { useGlitchTyping } from "../hooks/useGlitchTyping";

interface HeroProps {
  name: string;
  title: string;
  summary: string;
}

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
              <span className="inline-block w-[3px] h-7 bg-tui-green ml-1 animate-pulse"></span>
            )}
          </h1>

          {/* ASCII underline - show when typing is complete */}
          {isComplete && (
            <div className="text-tui-border">{"─".repeat(name.length)}</div>
          )}

          {/* Title - show after name is complete */}
          {isComplete && (
            <div className="text-tui-magenta text-lg">{title}</div>
          )}

          {/* Summary with chevrons */}
          {isComplete && (
            <div className="space-y-2 text-tui-muted text-sm md:text-base">
              {summaryLines.map((line, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-tui-green flex-shrink-0">&gt;</span>
                  <span>
                    {line.trim()}
                    {idx < summaryLines.length - 1 ? "." : ""}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Box>
    </section>
  );
};

import React, { memo } from "react";
import { motion } from "framer-motion";

type TagColor = "orange" | "green" | "cyan" | "yellow" | "magenta";

interface TagProps {
  children: React.ReactNode;
  color?: TagColor;
}

// Color configurations with glow shadows. Hoisted to module scope so
// the object isn't re-created on every render.
const COLOR_CONFIG: Record<TagColor, { text: string; glow: string }> = {
  orange: {
    text: "text-tui-orange",
    glow: "0 0 10px rgba(255, 166, 87, 0.4), 0 0 20px rgba(255, 166, 87, 0.2)",
  },
  green: {
    text: "text-tui-green",
    glow: "0 0 10px rgba(126, 231, 135, 0.4), 0 0 20px rgba(126, 231, 135, 0.2)",
  },
  cyan: {
    text: "text-tui-cyan",
    glow: "0 0 10px rgba(121, 192, 255, 0.4), 0 0 20px rgba(121, 192, 255, 0.2)",
  },
  yellow: {
    text: "text-tui-yellow",
    glow: "0 0 10px rgba(227, 179, 65, 0.4), 0 0 20px rgba(227, 179, 65, 0.2)",
  },
  magenta: {
    text: "text-tui-magenta",
    glow: "0 0 10px rgba(210, 168, 255, 0.4), 0 0 20px rgba(210, 168, 255, 0.2)",
  },
};

const TagComponent: React.FC<TagProps> = ({ children, color = "orange" }) => {
  const config = COLOR_CONFIG[color];

  return (
    <motion.span
      className={`font-mono text-sm ${config.text} inline-block`}
      whileHover={{
        scale: 1.08,
        y: -2,
        textShadow: config.glow,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 15,
      }}
    >
      <span aria-hidden="true">[</span>
      {children}
      <span aria-hidden="true">]</span>
    </motion.span>
  );
};

export const Tag = memo(TagComponent);

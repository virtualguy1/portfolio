import React from "react";
import { motion } from "framer-motion";

interface TagProps {
  children: React.ReactNode;
  color?: "orange" | "green" | "cyan" | "yellow" | "magenta";
}

export const Tag: React.FC<TagProps> = ({ children, color = "orange" }) => {
  const colorClasses = {
    orange: "text-tui-orange",
    green: "text-tui-green",
    cyan: "text-tui-cyan",
    yellow: "text-tui-yellow",
    magenta: "text-tui-magenta",
  };

  return (
    <motion.span
      className={`font-mono text-sm ${colorClasses[color]}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      [{children}]
    </motion.span>
  );
};

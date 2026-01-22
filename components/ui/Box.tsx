import React from "react";
import { motion } from "framer-motion";

interface BoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Box: React.FC<BoxProps> = ({ title, children, className = "" }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Desktop: Box with borders */}
      <div className="hidden md:block font-mono text-sm border border-tui-border">
        {/* Title bar */}
        {title && (
          <div className="border-b border-tui-border px-3 py-1 bg-tui-border/10">
            <span className="text-tui-cyan">┌─ {title}</span>
          </div>
        )}
        
        {/* Content area */}
        <div className="px-4 py-6">
          {children}
        </div>
      </div>

      {/* Mobile: Simple border */}
      <div className="block md:hidden font-mono text-sm border border-tui-border">
        {/* Title bar */}
        {title && (
          <div className="border-b border-tui-border px-2 py-1 bg-tui-border/10">
            <span className="text-tui-cyan">{title}</span>
          </div>
        )}
        
        {/* Content */}
        <div className="px-3 py-4">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

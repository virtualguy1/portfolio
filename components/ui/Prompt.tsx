import React from "react";

interface PromptProps {
  path?: string;
  children?: React.ReactNode;
}

export const Prompt: React.FC<PromptProps> = ({ path = "~", children }) => {
  return (
    <span className="font-mono text-tui-green">
      {path} $ {children}
    </span>
  );
};

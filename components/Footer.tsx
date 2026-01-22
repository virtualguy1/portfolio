import React from "react";
import { NavLink } from "../types";

interface FooterProps {
  links: NavLink[];
  copyrightName: string;
}

export const Footer: React.FC<FooterProps> = ({ links, copyrightName }) => {
  return (
    <footer className="mt-12 pt-6 pb-8 font-mono">
      {/* Top horizontal rule */}
      <div className="border-t border-tui-border mb-4"></div>
      
      {/* Links and copyright on one line */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm px-2">
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-tui-cyan hover:text-tui-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              [{link.label}]
            </a>
          ))}
        </div>
        
        <div className="text-tui-muted text-xs">
          © {new Date().getFullYear()} {copyrightName}
        </div>
      </div>
    </footer>
  );
};

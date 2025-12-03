import React from 'react';
import { NavLink } from '../types';

interface FooterProps {
  links: NavLink[];
  copyrightName: string;
}

export const Footer: React.FC<FooterProps> = ({ links, copyrightName }) => {
  return (
    <footer className="mt-20 pt-8 pb-12 border-t border-gray-900 text-center">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-terminal-green hover:text-terminal-highlight hover:underline font-mono text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="text-gray-500 text-xs font-mono">
        &copy; 2025, {copyrightName}. <span className="text-terminal-green">Be kind</span>, <span className="text-terminal-green">code</span>, <span className="text-terminal-green">inspire</span>.
      </p>
    </footer>
  );
};
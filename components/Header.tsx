import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavLink } from '../types';

interface HeaderProps {
  links: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <nav className="flex justify-center gap-4 md:gap-6 py-8 text-sm md:text-base">
      {links.map((link, index) => {
        const isExternal = link.url.startsWith('http') || link.url.startsWith('mailto');

        if (isExternal) {
          return (
            <a
              key={index}
              href={link.url}
              className="text-gray-400 hover:text-terminal-highlight hover:underline transition-colors font-mono"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          );
        }

        return (
          <RouterNavLink
            key={index}
            to={link.url}
            className={({ isActive }) =>
              `text-gray-400 hover:text-terminal-highlight hover:underline transition-colors font-mono ${isActive ? 'text-terminal-highlight underline' : ''}`
            }
          >
            {link.label}
          </RouterNavLink>
        );
      })}
    </nav>
  );
};
import React from "react";
import { NavLink as RouterNavLink } from "react-router";
import { motion } from "framer-motion";
import { NavLink } from "../types";
import { staggerContainer, fadeInDown } from "./animations";

interface HeaderProps {
  links: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <motion.nav
      className="flex justify-center gap-4 md:gap-6 py-8 text-sm md:text-base"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {links.map((link, index) => {
        const isExternal =
          link.url.startsWith("http") || link.url.startsWith("mailto");

        if (isExternal) {
          return (
            <motion.a
              key={index}
              href={link.url}
              className="text-gray-400 hover:text-terminal-highlight hover:underline transition-colors font-mono"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInDown}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          );
        }

        return (
          <motion.div
            key={index}
            variants={fadeInDown}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <RouterNavLink
              to={link.url}
              className={({ isActive }) =>
                `text-gray-400 hover:text-terminal-highlight hover:underline transition-colors font-mono ${isActive ? "text-terminal-highlight underline" : ""}`
              }
            >
              {link.label}
            </RouterNavLink>
          </motion.div>
        );
      })}
    </motion.nav>
  );
};

import React from "react";
import { NavLink as RouterNavLink } from "react-router";
import { motion } from "framer-motion";
import { NavLink } from "../types";
import { Prompt } from "./ui/Prompt";

interface HeaderProps {
  links: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <motion.div
      className="py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Desktop Box */}
      <nav className="hidden md:block font-mono text-sm border border-tui-border">
        <div className="flex items-center gap-4 px-4 py-3">
          <Prompt path="~/abhinav" />
          {links.map((link, index) => {
            const isExternal =
              link.url.startsWith("http") || link.url.startsWith("mailto");

            if (isExternal) {
              return (
                <a
                  key={index}
                  href={link.url}
                  className="text-tui-muted hover:text-tui-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [{link.label}]
                </a>
              );
            }

            return (
              <RouterNavLink
                key={index}
                to={link.url}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-tui-cyan"
                      : "text-tui-muted hover:text-tui-cyan"
                  }`
                }
              >
                [{link.label}]
              </RouterNavLink>
            );
          })}
        </div>
      </nav>

      {/* Mobile Simple */}
      <nav className="block md:hidden font-mono text-sm border border-tui-border px-3 py-3">
        <div className="mb-2">
          <Prompt path="~" />
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => {
            const isExternal =
              link.url.startsWith("http") || link.url.startsWith("mailto");

            if (isExternal) {
              return (
                <a
                  key={index}
                  href={link.url}
                  className="text-tui-muted hover:text-tui-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [{link.label}]
                </a>
              );
            }

            return (
              <RouterNavLink
                key={index}
                to={link.url}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-tui-cyan"
                      : "text-tui-muted hover:text-tui-cyan"
                  }`
                }
              >
                [{link.label}]
              </RouterNavLink>
            );
          })}
        </div>
      </nav>
    </motion.div>
  );
};

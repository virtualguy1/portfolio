import React from "react";
import { NavLink as RouterNavLink } from "react-router";
import { motion } from "framer-motion";
import { NavLink } from "../types";
import { Prompt } from "./ui/Prompt";
import { staggerContainer, staggerChild } from "./animations";

interface HeaderProps {
  links: NavLink[];
}

// Animated nav link wrapper
const AnimatedNavLink: React.FC<{
  href: string;
  label: string;
  isExternal: boolean;
  index: number;
}> = ({ href, label, isExternal, index }) => {
  const linkContent = (
    <motion.span
      className="inline-block"
      whileHover={{ x: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span aria-hidden="true">[</span>
      {label}
      <span aria-hidden="true">]</span>
    </motion.span>
  );

  if (isExternal) {
    return (
      <motion.a
        href={href}
        aria-label={`${label} (opens in new tab)`}
        className="text-tui-muted hover:text-tui-cyan transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        whileHover={{
          textShadow: "0 0 8px rgba(121, 192, 255, 0.4)",
        }}
      >
        {linkContent}
      </motion.a>
    );
  }

  return (
    <RouterNavLink
      to={href}
      className={({ isActive }) =>
        `transition-colors ${
          isActive ? "text-tui-cyan" : "text-tui-muted hover:text-tui-cyan"
        }`
      }
    >
      {({ isActive }) => (
        <motion.span
          className={`inline-block ${isActive ? "glow-pulse" : ""}`}
          aria-current={isActive ? "page" : undefined}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{
            x: 2,
            textShadow: "0 0 8px rgba(121, 192, 255, 0.4)",
          }}
        >
          <span aria-hidden="true">[</span>
          {label}
          <span aria-hidden="true">]</span>
        </motion.span>
      )}
    </RouterNavLink>
  );
};

export const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <motion.div
      className="py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Desktop Box */}
      <motion.nav
        aria-label="Primary"
        className="hidden md:block font-mono text-sm border border-tui-border"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center gap-4 px-4 py-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerChild} aria-hidden="true">
            <Prompt path="~/abhinav" />
          </motion.div>
          {links.map((link, index) => {
            const isExternal =
              link.url.startsWith("http") || link.url.startsWith("mailto");

            return (
              <AnimatedNavLink
                key={link.url}
                href={link.url}
                label={link.label}
                isExternal={isExternal}
                index={index}
              />
            );
          })}
        </motion.div>
      </motion.nav>

      {/* Mobile Simple */}
      <motion.nav
        aria-label="Primary"
        className="block md:hidden font-mono text-sm border border-tui-border px-3 py-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          aria-hidden="true"
        >
          <Prompt path="~" />
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {links.map((link, index) => {
            const isExternal =
              link.url.startsWith("http") || link.url.startsWith("mailto");

            return (
              <AnimatedNavLink
                key={link.url}
                href={link.url}
                label={link.label}
                isExternal={isExternal}
                index={index}
              />
            );
          })}
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};

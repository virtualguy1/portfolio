import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "../types";
import { staggerContainer, viewportOnce } from "./animations";

interface FooterProps {
  links: NavLink[];
  copyrightName: string;
}

export const Footer: React.FC<FooterProps> = ({ links, copyrightName }) => {
  return (
    <motion.footer
      aria-label="Site footer"
      className="mt-2 pt-6 pb-8 font-mono"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.4 }}
    >
      {/* Top horizontal rule - animated */}
      <motion.div
        aria-hidden="true"
        className="border-t border-tui-border mb-4"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Links and copyright on one line */}
      <motion.div
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm px-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <nav aria-label="Contact & social" className="flex flex-wrap gap-4">
          {links.map((link, index) => {
            const isEmail = link.url.startsWith("mailto:");
            return (
              <motion.a
                key={link.url}
                href={link.url}
                aria-label={
                  isEmail
                    ? `Email ${link.label}`
                    : `${link.label} (opens in new tab)`
                }
                className="text-tui-cyan hover:text-tui-green transition-colors"
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{
                  x: 2,
                  textShadow: "0 0 8px rgba(121, 192, 255, 0.4)",
                }}
              >
                <span aria-hidden="true">[</span>
                {link.label}
                <span aria-hidden="true">]</span>
              </motion.a>
            );
          })}
        </nav>

        <motion.div
          className="text-tui-muted text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <span aria-hidden="true">©</span>
          <span className="sr-only">
            Copyright{" "}
          </span> {new Date().getFullYear()} {copyrightName}
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

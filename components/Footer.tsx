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
      className="mt-2 pt-6 pb-8 font-mono"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.4 }}
    >
      {/* Top horizontal rule - animated */}
      <motion.div
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
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className="text-tui-cyan hover:text-tui-green transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{
                x: 2,
                textShadow: "0 0 8px rgba(121, 192, 255, 0.4)",
              }}
            >
              [{link.label}]
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-tui-muted text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          © {new Date().getFullYear()} {copyrightName}
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

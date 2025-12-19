import React from "react";
import { motion, Variants } from "framer-motion";
import { NavLink } from "../types";
import { staggerContainer, fadeInUp, viewportOnce } from "./animations";

interface FooterProps {
  links: NavLink[];
  copyrightName: string;
}

export const Footer: React.FC<FooterProps> = ({ links, copyrightName }) => {
  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const footerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.footer
      className="mt-10 pt-8 pb-12 border-t border-gray-900 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={footerVariants}
    >
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            className="text-terminal-green hover:text-terminal-highlight font-mono text-sm relative"
            variants={linkVariants}
            whileHover={{
              scale: 1.1,
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
            {/* Animated underline */}
            <motion.span
              className="absolute bottom-0 left-0 w-full h-[1px] bg-terminal-highlight origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" as const }}
            />
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        className="text-gray-500 text-xs font-mono"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        &copy; {new Date().getFullYear()}, {copyrightName}.{" "}
        <motion.span
          className="text-terminal-green"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Keep calm, code, deploy, and debug.
        </motion.span>
      </motion.p>
    </motion.footer>
  );
};

import { Variants, Transition } from 'framer-motion';

// Minimal transition - subtle and fast
export const smoothTransition: Transition = {
  duration: 0.3,
  ease: 'easeOut',
};

// Basic fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smoothTransition,
  },
};

// Subtle fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

// Page transition variants (minimal)
export const pageVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

// Viewport settings for scroll animations
export const viewportOnce = {
  once: true,
  margin: '-50px',
};

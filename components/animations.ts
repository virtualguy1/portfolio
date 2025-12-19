import { Variants, Transition } from 'framer-motion';

// Base transition configs
export const smoothTransition: Transition = {
  duration: 0.5,
  ease: 'easeOut',
};

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
};

// Fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smoothTransition,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

// Slide animations
export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

// Stagger containers
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

// Hover effects (for whileHover prop)
export const hoverScale = {
  scale: 1.02,
  transition: springTransition,
};

export const hoverLift = {
  y: -5,
  transition: springTransition,
};

export const hoverGlow = {
  boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
  borderColor: '#22c55e',
  transition: { duration: 0.2 },
};

// Tap effects (for whileTap prop)
export const tapScale = {
  scale: 0.98,
};

// Page transition variants
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

// Terminal-themed animations
export const cursorBlink = {
  opacity: [1, 0],
  transition: {
    duration: 0.7,
    repeat: Infinity,
    repeatType: 'reverse' as const,
  },
};

export const typewriter: Variants = {
  hidden: { width: 0 },
  visible: {
    width: 'auto',
    transition: {
      duration: 1.2,
      ease: 'linear',
    },
  },
};

// Character-by-character typing animation helper
export const letterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

// Timeline dot animation
export const dotPulse: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15,
    },
  },
};

// Card animations for projects
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// List item animations
export const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

// Viewport settings for scroll animations
export const viewportOnce = {
  once: true,
  margin: '-50px',
};

export const viewportAlways = {
  once: false,
  margin: '-50px',
};

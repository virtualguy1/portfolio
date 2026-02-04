import { Variants, Transition } from 'framer-motion';

// ============================================
// BASE TRANSITIONS
// ============================================

// Minimal transition - subtle and fast
export const smoothTransition: Transition = {
  duration: 0.3,
  ease: 'easeOut',
};

// Smooth spring for bouncy effects
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

// Slower ease for dramatic reveals
export const revealTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier
};

// ============================================
// BASIC ANIMATIONS
// ============================================

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: revealTransition,
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: revealTransition,
  },
};

// Scale fade (for tags, badges)
export const scaleFade: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

// ============================================
// PAGE TRANSITIONS
// ============================================

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

// ============================================
// STAGGER ANIMATIONS
// ============================================

// Container for staggered children
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

// Fast stagger for quick reveals
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

// Slow stagger for dramatic effect
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Child item for stagger (fade up)
export const staggerChild: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Child item (fade in only)
export const staggerChildFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

// Child item (slide from left)
export const staggerChildLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ============================================
// BOX BORDER TRACE ANIMATION
// ============================================

// Border trace animation for Box component
export const borderTrace: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 0.8,
        ease: 'easeInOut',
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
};

// Box content fade (appears after border traces)
export const boxContent: Variants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.4, // Wait for border to trace
      ease: 'easeOut',
    },
  },
};

// Box title bar animation
export const boxTitleBar: Variants = {
  hidden: { 
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};

// ============================================
// HOVER ANIMATIONS
// ============================================

// Link hover animation
export const linkHover = {
  rest: { 
    x: 0,
    color: '#8b949e', // tui-muted
  },
  hover: { 
    x: 2,
    color: '#79c0ff', // tui-cyan
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

// Tag hover with bounce
export const tagHover = {
  rest: { 
    scale: 1,
    y: 0,
  },
  hover: { 
    scale: 1.02,
    y: -2,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
  },
  tap: {
    scale: 0.98,
  },
};

// ============================================
// SPECIAL EFFECTS
// ============================================

// ASCII underline draw animation
export const underlineDraw: Variants = {
  hidden: { 
    width: 0,
    opacity: 0,
  },
  visible: {
    width: '100%',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Typewriter cursor blink
export const cursorBlink: Variants = {
  blink: {
    opacity: [1, 1, 0, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1], // Step-like timing
    },
  },
};

// Glow pulse animation
export const glowPulse: Variants = {
  pulse: {
    boxShadow: [
      '0 0 5px rgba(121, 192, 255, 0.2)',
      '0 0 15px rgba(121, 192, 255, 0.4)',
      '0 0 5px rgba(121, 192, 255, 0.2)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================
// VIEWPORT SETTINGS
// ============================================

// Viewport settings for scroll animations
export const viewportOnce = {
  once: true,
  margin: '-50px',
};

// Viewport for earlier trigger
export const viewportEarly = {
  once: true,
  margin: '-100px',
};

// Viewport for later trigger (element more in view)
export const viewportLate = {
  once: true,
  margin: '0px',
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Create stagger delay for manual use
export const getStaggerDelay = (index: number, baseDelay = 0.1): number => {
  return index * baseDelay;
};

// Create custom stagger container with configurable timing
export const createStaggerContainer = (
  staggerDelay = 0.1,
  initialDelay = 0.1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    },
  },
});

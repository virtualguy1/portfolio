import React from "react";
import { motion } from "framer-motion";
import { boxContent, boxTitleBar, viewportOnce } from "../animations";

interface BoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

// SVG Border component that traces itself
const AnimatedBorder: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  // Create the path for a rectangle
  const pathD = `M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
    >
      <motion.path
        d={pathD}
        fill="none"
        stroke="#30363d"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: {
            duration: 0.6,
            ease: "easeInOut",
          },
          opacity: {
            duration: 0.1,
          },
        }}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

export const Box: React.FC<BoxProps> = ({ title, children, className = "" }) => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  const boxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (boxRef.current) {
      const updateDimensions = () => {
        if (boxRef.current) {
          setDimensions({
            width: boxRef.current.offsetWidth,
            height: boxRef.current.offsetHeight,
          });
        }
      };

      updateDimensions();

      // Update on resize
      const resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(boxRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <motion.div
      className={`relative ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {/* Desktop: Box with animated borders */}
      <div
        ref={boxRef}
        className="hidden md:block font-mono text-sm relative"
      >
        {/* Animated SVG Border */}
        {dimensions.width > 0 && (
          <AnimatedBorder width={dimensions.width} height={dimensions.height} />
        )}

        {/* Title bar */}
        {title && (
          <motion.div
            className="border-b border-tui-border px-3 py-1 bg-tui-border/10"
            variants={boxTitleBar}
          >
            <span className="text-tui-cyan">┌─ {title}</span>
          </motion.div>
        )}

        {/* Content area */}
        <motion.div className="px-4 py-6" variants={boxContent}>
          {children}
        </motion.div>
      </div>

      {/* Mobile: Simple border with fade animation */}
      <motion.div
        className="block md:hidden font-mono text-sm border border-tui-border"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Title bar */}
        {title && (
          <div className="border-b border-tui-border px-2 py-1 bg-tui-border/10">
            <span className="text-tui-cyan">{title}</span>
          </div>
        )}

        {/* Content */}
        <div className="px-3 py-4">{children}</div>
      </motion.div>
    </motion.div>
  );
};

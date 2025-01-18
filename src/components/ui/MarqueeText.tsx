'use client';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeTextProps {
  text: string;
  className?: string;
  repeat?: number;
}

const marqueeVariants = {
  animate: {
    x: [0, -8000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 80,
        ease: "linear",
        repeatDelay: 0
      },
    },
  },
};

const MarqueeText = ({ text, className, repeat = 3 }: MarqueeTextProps) => {
  return (
    <div className="w-screen relative z-10 mix-blend-difference overflow-hidden text-white pointer-events-none -left-1/2 translate-x-1/2">
      <motion.h1
        variants={marqueeVariants}
        animate="animate"
        className={cn(
          "inline-block will-change-transform whitespace-nowrap",
          className
        )}
      >
        {Array(repeat).fill(text).map((t, i) => (
          <span key={i}>{t} &nbsp;</span>
        ))}
      </motion.h1>
    </div>
  );
};

export default MarqueeText;
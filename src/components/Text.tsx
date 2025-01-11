"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextProps {
  children: React.ReactNode;
  highlighted?: string[];
}

const Text = ({ children, highlighted = [] }: TextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const highlightText = (text: string) => {
    if (!highlighted.length) return text;

    return text.split(' ').map((word, i) => (
      highlighted.includes(word) ? (
        <span key={i} className="p-2 bg-black text-white">
          {word}
        </span>
      ) : ' ' + word + ' '
    ));
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-[80vw] text-center mx-auto py-48 px-4 md:px-8"
    >
      <p className="text-2xl md:text-4xl !leading-[4rem]">
        {typeof children === 'string' ? highlightText(children) : children}
      </p>
    </motion.div>
  );
};

export default Text;
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { textContent } from "@/data/text"

const Text = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const highlightText = (text: string) => {
    if (!textContent.highlighted.length) return text;

    return text.split(' ').map((word, i) => (
      textContent.highlighted.includes(word) ? (
        <span key={i} className="p-2 bg-black uppercase text-white">
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
      className="w-full xl:max-w-[80vw] text-center mx-auto py-16 md:py-0 xl:py-32 px-5 md:px-8"
    >
      <p className="text-2xl lg:text-4xl 2xl:text-7xl !leading-[2.8rem] lg:!leading-[4rem] 2xl:!leading-[1.6]">
        {typeof textContent.content === 'string' ? highlightText(textContent.content) : textContent.content}
      </p>
    </motion.div>
  );
};

export default Text;
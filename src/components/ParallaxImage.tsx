'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { parallaxImage } from '@/data/parallaxImage';

const ParallaxImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="px-5 lg:px-16 xl:px-32 2xl:px-64 py-16 2xl:py-32">
      <div 
        ref={containerRef}
        className="relative h-[40vh] md:h-[60vh] xl:h-[80vh] overflow-hidden"
      >
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-full -top-[10%]"
        >
          <Image
            src={parallaxImage.src}
            alt={parallaxImage.alt}
            fill
            priority
            className="aspect-square object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxImage;
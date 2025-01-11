'use client'
import React from 'react'
import { motion } from "framer-motion";
import { HiArrowRight } from 'react-icons/hi';
import { Button } from './ui/button';

const marqueeVariants = {
  animate: {
    x: [0, -8000], // Dostosuj wartość przesuwu w zależności od długości tekstu
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

const HomepageHero = () => {
  return (
    <section className="w-full min-h-[80vh] relative flex flex-col lg:flex-row md:gap-y-12 mb-32 isolate">
      {/* Left Section: Content*/}
      <div className="flex flex-1 flex-col justify-center items-center lg:max-w-[50%] z-10 space-y-12 md:space-y-20 bg-white">
        <div className="w-screen relative z-10 mix-blend-difference overflow-hidden text-white pointer-events-none -left-1/2 translate-x-1/2">
          <motion.h1
            variants={marqueeVariants}
            animate="animate"
            className="inline-block will-change-transform text-6xl md:text-[240px] font-bold leading-tight whitespace-nowrap"
          >
            We Create Digital Products That People Love &nbsp;
            We Create Digital Products That People Love &nbsp;
            We Create Digital Products That People Love &nbsp;
          </motion.h1>
        </div>

        <div className="px-16 md:px-32 space-y-24">
          {/* Description */}
          <p className="mt-8 mb-10 text-lg md:text-2xl text-gray-700 max-w-3xl">
            We craft innovative digital experiences that resonate with audiences and elevate brands globally. Partner with us to create something exceptional.
          </p>

          {/* Button */}
          <Button text={'Get Started'} icon={<HiArrowRight />} target={'_blank'} />
        </div>
      </div>

      {/* Right Section: Video */}
      <div className="flex-1 lg:max-w-[50%] relative">
        <div className="w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/movie.mp4" type="video/mp4" />
          </video>
          
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;

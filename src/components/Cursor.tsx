"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Immediately update mouse position for smooth following
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll('a, button, input, [role="button"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[50px] h-[50px] border border-black rounded-full pointer-events-none z-50"
        animate={{ 
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          scale: isHovered ? 1.5 : 1 
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          restDelta: 0.001
        }}
      />
      
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-50"
        animate={{ 
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 2 : 1 
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 500,
          restDelta: 0.001
        }}
      />
    </>
  );
};

export default Cursor;
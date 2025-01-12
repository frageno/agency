"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface Project {
  title: string;
  image: string;
  link: string; // Added link property
}

const projects: Project[] = [
  {
    title: "Embracing the Digital Age: Optinet's Quest for brand & digital Transformation",
    image: "/project-3.png",
    link: "/projects/project-1"
  },
  {
    title: "Embracing the Digital Age: Optinet's Quest for brand & digital Transformation",
    image: "/project-3.png",
    link: "/projects/project-2"
  },
  {
    title: "Embracing the Digital Age: Optinet's Quest for brand & digital Transformation",
    image: "/project-3.png",
    link: "/projects/project-3"
  },
  {
    title: "Embracing the Digital Age: Optinet's Quest for brand & digital Transformation",
    image: "/project-3.png",
    link: "/projects/project-4"
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { scrollYProgress: headlineProgress } = useScroll({
    offset: ["0.1 end", "0.4 end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const headlineX = useTransform(scrollYProgress, [0, 0.2], ["-100%", "0%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-background py-16 md:py-32"
    >
      <motion.h2 
        className="text-6xl md:text-[320px] font-bold italic px-16 whitespace-nowrap"
      >
        Work
      </motion.h2>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-8 md:gap-16 px-16"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "relative flex-shrink-0 w-[800px] flex flex-col",
                "group"
              )}
            >
              <div className="flex-1 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="my-10">
                <h3 className="text-4xl mb-8">
                  {project.title}
                </h3>
                <Button 
                  text="View Project" 
                  className="inline-block"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
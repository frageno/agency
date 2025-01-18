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
    image: "/projects/project-1.jpg",
    link: "/projects/project-1"
  },
  {
    title: "Embracing the Digital Age: Optinet's Quest for brand & digital Transformation",
    image: "/projects/project-2.jpg",
    link: "/projects/project-2"
  },
  {
    title: "Embracing the Digital Age: Optinet's Quest for brand & digital Transformation",
    image: "/projects/project-3.jpg",
    link: "/projects/project-3"
  },
  {
    title: "Embracing the Digital Age: Optinet's Quest for brand & digital Transformation",
    image: "/projects/project-4.jpg",
    link: "/projects/project-4"
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["400px start", "end end"],
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
        className="text-6xl md:text-[100px] xl:text-[320px] font-bold px-5 md:px-16 whitespace-nowrap"
      >
        Work
      </motion.h2>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-8 md:gap-16 px-5 md:px-16"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "relative flex-shrink-0 w-[300px] md:w-[650px] flex flex-col",
                "group"
              )}
            >
              <div className="flex-1 rounded-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full md:h-[640px]"
                />
              </div>
              <div className="my-10">
                <h3 className="text-xl md:text-4xl md:leading-[1.4] mb-8">
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
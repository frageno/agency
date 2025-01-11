"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string; // Added link property
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Description for project 1",
    image: "/project-3.png",
    link: "/projects/project-1"
  },
  {
    title: "Project 2",
    description: "Description for project 2",
    image: "/project-3.png",
    link: "/projects/project-2"
  },
  {
    title: "Project 3",
    description: "Description for project 3",
    image: "/project-3.png",
    link: "/projects/project-3"
  },
  {
    title: "Project 4",
    description: "Description for project 4",
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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-background"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="flex gap-8 px-16"
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
              <div className="mb-6">
                <h3 className="text-4xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-lg opacity-80 mb-4">
                  {project.description}
                </p>
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
'use client';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MasonryImagesProps {
    images: {
      src: string;
      alt: string;
    }[];
  }
  
  const MasonryImages = ({ images }: MasonryImagesProps) => {
  
    return (
      <div className="relative px-5 xl:px-16 2xl:px-48 py-16 2xl:py-32">
        <div className="flex flex-wrap justify-between gap-6 md:gap-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={cn(
                "relative overflow-hidden",
                index % 2 === 0 
                  ? "w-full xl:w-[33vw] 2xl:w-[25vw] h-[400px]" 
                  : "w-full xl:w-[50vw] 2xl:w-[47vw] h-[730px] xl:mt-64",
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default MasonryImages;
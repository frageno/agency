'use client';
import { motion } from "framer-motion";
import Link from "next/link";

interface Card {
  title: string;
  description: string;
  image: string;
  link: string;
}

const cards: Card[] = [
  {
    title: "Digital Strategy",
    description: "We help brands navigate the ever-evolving digital landscape with strategic solutions.",
    image: "/project-2.png",
    link: "/services/strategy"
  },
  {
    title: "Brand Identity",
    description: "Creating distinctive visual languages that make brands stand out in crowded markets.",
    image: "/card2.jpg",
    link: "/services/branding"
  },
  {
    title: "Development",
    description: "Building robust digital solutions that drive business growth and user engagement.",
    image: "/card3.jpg",
    link: "/services/development"
  }
];

const CardTeaser = ({ title, description, image, link }: Card) => {
    return (
      <motion.div 
        className="group relative h-[900px] overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-110 group-hover:scale-100"
        />
        
        {/* Overlay that fades on hover */}
        <div className="absolute inset-0 bg-black transition-opacity duration-700 group-hover:opacity-0" />
        
        {/* Content */}
        <div className="relative h-full p-12 flex flex-col justify-between">
          <div className="h-full p-12 flex justify-center flex-col">
            <div className="transform transition-all duration-700 translate-y-[0%] group-hover:-translate-y-[100%]">
              <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-black">{title}</h3>
              <motion.p 
                className="text-xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:text-black"
              >
                {description}
              </motion.p>
              <Link 
                href={link}
                className="mt-auto inline-block w-fit px-8 py-4 bg-white text-black text-xl hover:bg-black hover:text-white border border-white transition-colors"
              >
                Learn More
              </Link>
            </div>
              <img className="absolute bottom-0 opacity-0 transition-all duration-500 group-hover:opacity-100" src="/project-2.png" alt="" />
          </div>
        </div>
      </motion.div>
    );
};
  
  const CardsTeasers = () => {
    return (
      <section className="w-full grid grid-cols-1 md:grid-cols-3">
        {cards.map((card, index) => (
          <CardTeaser key={index} {...card} />
        ))}
      </section>
    );
  };
  
  export default CardsTeasers;
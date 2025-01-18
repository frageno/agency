'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

interface Card {
  title: string;
  description: string;
  image: string;
  link: string;
}

const cards: Card[] = [
  {
    title: "Digital Strategy",
    description: "We help brands navigate the ever-evolving digital landscape with strategic, innovative, and tailored solutions. By combining data-driven insights, creative expertise, and cutting-edge technologies, we empower businesses to stay ahead of trends, connect authentically with their audience, and achieve measurable results. From crafting compelling campaigns to optimizing digital experiences, our approach ensures your brand thrives in a competitive and dynamic environment.",
    image: "cards/digital.jpg",
    link: "/services/strategy"
  },
  {
    title: "Brand Identity",
    description: "Creating distinctive visual languages that make brands stand out in crowded markets, we craft designs that resonate deeply with audiences. By blending creativity, strategy, and a deep understanding of brand identity, we develop visual systems that tell compelling stories, evoke emotions, and create lasting impressions. Whether through bold graphics, cohesive branding, or innovative design concepts, we ensure your brand captures attention and leaves a memorable mark.",
    image: "cards/brand.jpg",
    link: "/services/branding"
  },
  {
    title: "Development",
    description: "Building robust digital solutions that drive business growth and user engagement, we design and develop platforms that seamlessly integrate functionality, performance, and user-centric experiences. From scalable websites and custom applications to e-commerce solutions and interactive tools, our approach ensures that every digital product aligns with your business goals while delivering exceptional value to users. By leveraging the latest technologies and industry best practice.",
    image: "cards/development.jpg",
    link: "/services/development"
  }
];

const CardTeaser = ({ title, description, image, link }: Card) => {
    return (
      <motion.div 
        className="group relative min-h-[70vh] lg:min-h-[50vh] xl:min-h-[80vh] overflow-hidden"
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
        <div className="relative h-full p-4 2xl:p-12 flex flex-col justify-between">
          <div className="h-full p-4 2xl:p-12 flex flex-row xl:flex-col justify-center
          ">
            <div className="transform transition-all duration-700 translate-y-[20%] group-hover:translate-y-[10%] lg:group-hover:translate-y-[3%] xl:group-hover:-translate-y-[30%] 2xl:group-hover:-translate-y-[20%] 2k:group-hover:-translate-y-1/2">
              <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-black">{title}</h3>
              <motion.p 
                className="text-base 2xl:text-xl max-h-0 !leading-8 opacity-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:text-black group-hover:max-h-[500px]"
              >
                {description}
              </motion.p>
              <Link 
                href={link}
                className="mt-6 inline-block w-fit px-8 py-4 bg-white text-black text-xl hover:bg-black hover:text-white border border-white opacity-100 group-hover:opacity-0 transition-all duration-300"
              >
                 <HiArrowUpRight className="text-2xl transform transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="w-full aspect-video md:h-[400px] lg:h-[300px] fhd:h-[350px] 2k:h-[450px] absolute left-0 bottom-0 opacity-0 translate-y-[30%] group-hover:translate-y-[0%] group-hover:opacity-100 transition-all duration-500">
              <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    );
};
  
  const CardsTeasers = () => {
    return (
      <section className="w-full grid grid-cols-1 xl:grid-cols-3">
        {cards.map((card, index) => (
          <CardTeaser key={index} {...card} />
        ))}
      </section>
    );
  };
  
  export default CardsTeasers;
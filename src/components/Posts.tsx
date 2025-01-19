"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";

interface Post {
  title: string;
  category: string;
  date: string;
  link: string;
}

const containerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Controls delay between each item animation
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 100
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

const posts: Post[] = [
  {
    title: "The Future of Digital Design: Trends to Watch",
    category: "Design",
    date: "March 15, 2024",
    link: "/blog/future-of-design"
  },
  {
    title: "How AI is Transforming User Experience",
    category: "Technology",
    date: "March 10, 2024",
    link: "/blog/ai-and-ux"
  },
  {
    title: "Building Sustainable Digital Products",
    category: "Development",
    date: "March 5, 2024",
    link: "/blog/sustainable-products"
  }
];

const Posts = () => {
    return (
      <section className="py-32 px-5 md:px-16">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link 
                href={post.link}
                className="group block relative"
              >
                <div className="relative transition-transform duration-700 bg-white px-5 py-12 md:py-24 before:content-[''] before:absolute before:top-0 before:left-[50%] before:w-[100vw] before:h-full before:bg-white before:-ml-[50vw] before:mix-blend-difference before:scale-y-0 before:transition-transform before:duration-700 before:ease-in-out before:pointer-events-none before:z-[1] group-hover:before:scale-y-100">
                  <div className="relative z-[2] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="flex items-center">
                      <motion.div
                        variants={{
                          initial: { rotate: 45 },
                          hover: { rotate: 0 }
                        }}
                        initial="initial"
                        whileHover="hover"
                        transition={{ duration: 0.3 }}
                      >
                      </motion.div>
                      <div>
                        <h3 className="text-2xl md:text-4xl font-bold mb-4 duration-700 group-hover:text-white transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                          <span className="bg-black text-white text-lg py-3 px-6 uppercase duration-700 group-hover:text-black group-hover:bg-white transition-all">
                            {post.category}
                          </span>
                          <span className="bg-black text-white text-lg py-3 px-6 duration-700 group-hover:text-black group-hover:bg-white transition-all">
                            {post.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl text-white bg-black rounded-full p-5 duration-700 transition-colors group-hover:bg-white group-hover:text-black">
                        <HiArrowUpRight />
                    </div>
                  </div>
                </div>
              {/* Separator line */}
              {index !== posts.length - 1 && (
                <div className="w-screen h-px bg-black/10" />
              )}
                
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    );
  };
  
  export default Posts;
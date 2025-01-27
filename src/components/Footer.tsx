'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { footerData } from "@/data/footer";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 100 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5 
      }
    }
  };

  return (
    <motion.footer 
      id="footer"
      className="bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Footer Hero */}
      <div className="max-w-3xl mx-auto px-5 pt-24 lg:pt-32 xl:pt-64 pb-8 lg:pb-32">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          variants={itemVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl xl:text-[150px] 2xl:text-[250px] font-bold"
          >
            {footerData.hero.title}
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Link 
              href={footerData.hero.buttonLink}
              className="px-8 py-4 border border-white text-xl hover:bg-white hover:text-black transition-all"
            >
              {footerData.hero.buttonText}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-3xl mx-auto px-5 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Navigation Links */}
          <div>
            <h3 className="text-3xl font-bold mb-8">{footerData.navigation.title}</h3>
            <ul className="space-y-4">
              {footerData.navigation.links.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-xl hover:text-gray-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-8">{footerData.contact.title}</h3>
            <div className="space-y-4 text-xl mb-8">
              {footerData.contact.info.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p>{footerData.contact.info.email}</p>
              <p>{footerData.contact.info.phone}</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-3xl font-bold mb-8">{footerData.contact.title}</h3>
            <div className="space-y-4 text-xl mb-8">
              {footerData.contact.info.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <p>{footerData.contact.info.email}</p>
              <p>{footerData.contact.info.phone}</p>
            </div>
            
            <div className="flex flex-col xl:flex-row gap-6">
              {footerData.social.links.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-xl hover:text-gray-400 transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-3xl mx-auto">
        <div className="border-t border-white/10 px-5 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              {footerData.bottom.copyright}
            </p>
            <div className="flex gap-8">
              {footerData.bottom.links.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
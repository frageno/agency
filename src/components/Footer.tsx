'use client';
import Link from 'next/link';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const footerLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
];

const socialLinks = [
  { title: "Instagram", href: "https://instagram.com" },
  { title: "LinkedIn", href: "https://linkedin.com" },
  { title: "Twitter", href: "https://twitter.com" },
];

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.footer 
      className="bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Footer Hero */}
      <div className="max-w-3xl mx-auto pt-64 pb-32">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          variants={itemVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-[250px] font-bold"
          >
            Let's talk
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Link 
              href="/contact"
              className="px-8 py-4 border border-white text-xl hover:bg-white hover:text-black transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-3xl mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Navigation Links */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.map((link, index) => (
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

          {/* Contact & Social */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-4 text-xl mb-8">
              <p>123 Agency Street</p>
              <p>New York, NY 10001</p>
              <p>hello@agency.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-4 text-xl mb-8">
              <p>123 Agency Street</p>
              <p>New York, NY 10001</p>
              <p>hello@agency.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
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
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Agency. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link 
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
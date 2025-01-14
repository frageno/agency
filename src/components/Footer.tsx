'use client';
import Link from 'next/link';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const footerLinks = [
  { title: "Studio", href: "/studio" },
  { title: "Work", href: "/about" },
  { title: "Branding", href: "/projects" },
  { title: "Digital", href: "/contact" },
  { title: "Services", href: "/contact" },
  { title: "Insights", href: "/contact" },
  { title: "Projects", href: "/contact" },
  { title: "Contact", href: "/contact" },
];

const socialLinks = [
  { title: "Instagram", href: "https://instagram.com" },
  { title: "LinkedIn", href: "https://linkedin.com" },
  { title: "Twitter", href: "https://twitter.com" },
];

const Footer = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    
    const { scrollYProgress } = useScroll({
      target: footerRef,
      offset: ["start end", "start start"]
    });
  
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  
    return (
      <div ref={footerRef} className="relative h-[1000px]"> {/* Spacer div for scroll trigger */}
        <motion.footer 
          style={{ y }}
          className="fixed w-screen bottom-0 top-0 left-0 bg-black text-white min-h-screen z-0"
        >
          <div className="h-full flex flex-col justify-end">
        {/* Footer Hero */}
        <div className="max-w-3xl mx-auto pt-64 pb-32">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="text-4xl md:text-[250px] font-bold">Let's talk</h2>
            <Link 
                href="/contact"
                className="px-8 py-4 border border-white text-xl hover:bg-white hover:text-black transition-all"
            >
                Contact Us
            </Link>
            </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-3xl mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Navigation Links */}
          <div>
            <ul className="space-y-5">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-4xl hover:text-gray-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-2xl mb-8">Get in Touch</h3>
            <div className="space-y-4 text-xl mb-8">
              <p>123 Agency Street</p>
              <p>New York, NY 10001</p>
              <p>hello@agency.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <h3 className="text-2xl mb-8">Get in Touch</h3>
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
            <h3 className="text-2xl mb-8">Get in Touch</h3>
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
      <div className="max-w-3xl mx-auto border-t border-white/10">
        <div className="py-8">
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
      </div>
    </motion.footer>
    </div>
  );
};

export default Footer;
"use client";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { navLinks, navbarContent } from "@/data/navbar"


const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-screen bg-background"
    >
      <div className="flex items-center justify-between px-5 md:px-16 py-8">
        {/* Logo */}
        <Link href="/" className="text-lg lg:text-6xl font-bold">
          {navbarContent.logoText}
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden flex flex-col gap-1.5 z-50"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-black block"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-0.5 bg-black block"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-8 h-0.5 bg-black block"
          />
        </button>

        {/* Mobile Menu */}
        <motion.nav
          initial={false}
          animate={isOpen ? { x: "0%" } : { x: "100%" }}
          className="fixed top-0 right-0 bottom-0 left-0 w-screen bg-background xl:hidden flex flex-col items-center justify-center"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl py-4 hover:text-black/60 transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <Link 
            href={navbarContent.navbarButtonLink}
            onClick={() => setIsOpen(false)}
            className="mt-8 px-8 py-4 bg-black text-white text-xl hover:bg-black/90 transition-colors"
          >
            {navbarContent.navbarButtonTitle}
          </Link>
        </motion.nav>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-12">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "text-3xl hover:text-black/90 transition-colors",
                "relative after:absolute after:left-0 after:-bottom-2",
                "after:h-0.5 after:w-0 after:bg-black",
                "hover:after:w-full after:transition-all"
              )}
            >
              {link.title}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="px-8 py-4 bg-black text-white text-xl hover:bg-black/90 transition-colors"
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
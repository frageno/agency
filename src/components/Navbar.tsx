"use client";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
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
      className="fixed top-0 left-0 right-0 z-50 bg-background"
    >
      <div className="flex items-center justify-between px-16 py-8">
        {/* Logo */}
        <Link href="/" className="text-lg lg:text-6xl font-bold">
          Agency.
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-12">
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
        </nav>
        <Link 
          href="/contact"
          className="px-8 py-4 bg-black text-white text-xl hover:bg-black/90 transition-colors"
        >
          Let's Talk
        </Link>
      </div>
    </motion.header>
  );
};

export default Navbar;
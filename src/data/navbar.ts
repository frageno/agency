import { NavLink, NavbarProps } from '@/types';

export const navLinks: NavLink[] = [
  { title: "Home", href: "#home" },
  { title: "Projects", href: "#projects" },
  { title: "Strategy", href: "#strategy" },
  { title: "About", href: "#about" },
]

export const navbarContent: NavbarProps = {
    logoText: "Agency",
    navbarButtonLink: "#footer",
    navbarButtonTitle: "Let's Talk"
}
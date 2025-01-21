import { NavLink, NavbarProps } from '@/types';

export const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]

export const navbarContent: NavbarProps[] = {
    logoText: "Agency",
    navbarButtonLink: "/contact",
    navbarButtonTitle: "Let's Talk"
}
import { Footer } from '@/types';

export const footerData: Footer[] = {
    hero: {
        title: "Let's talk",
        buttonText: "Contact Us",
        buttonLink: "/contact"
      },
    navigation: {
      title: "Navigation",
      links: [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Projects", href: "/projects" },
        { title: "Contact", href: "/contact" }
      ]
    },
    contact: {
      title: "Get in Touch",
      info: {
        address: ["123 Agency Street", "New York, NY 10001"],
        email: "hello@agency.com",
        phone: "+1 (555) 123-4567"
      }
    },
    social: {
      links: [
        { title: "Instagram", href: "https://instagram.com" },
        { title: "LinkedIn", href: "https://linkedin.com" },
        { title: "Twitter", href: "https://twitter.com" }
      ]
    },
    bottom: {
      copyright: "© 2024 Agency. All rights reserved.",
      links: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" }
      ]
    }
}
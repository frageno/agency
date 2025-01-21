export interface Post {
    title: string;
    category: string;
    date: string;
    link: string;
}

export interface About {
    title: string;
    columns: {
      paragraphs: string[];
    }[];
}

export interface Card {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Footer {
  title: string;
  href: string;
  address: string[];
  email: string;
  phone: string;
}

export interface HomepageHero {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  movieUrl: string;
}

export interface MasonryImagesProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export interface NavLink {
  title: string;
  href: string;
}

export interface NavbarProps {
  logoText: string;
  navbarButtonLink: string;
  navbarButtonTitle: string;
}

export interface ParallaxImage {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  image: string;
  link: string;
}

export interface ProjectHeadline {
  headline: string;
}

export interface Text {
  text: string;
  highlighted: string;
}

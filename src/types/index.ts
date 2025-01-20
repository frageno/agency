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
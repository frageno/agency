'use client';
import MarqueeText from "./ui/MarqueeText";
import { aboutData } from "@/data/about";

const About = () => {
  return (
    <section id="about" className="py-12 2xl:py-32 relative">
      <MarqueeText 
        text={aboutData.title}
        className="text-6xl md:text-[240px] font-bold leading-tight text-black"
      />
      
      <div className="max-w-3xl mx-auto px-5 xl:px-16 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-xl md:text-2xl !leading-relaxed xl:ml-64">
          {aboutData.columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-8">
              {column.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
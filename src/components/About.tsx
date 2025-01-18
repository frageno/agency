'use client';
import MarqueeText from "./ui/MarqueeText";

const About = () => {
  return (
    <section className="py-16 2xl:py-32 relative">
      <MarqueeText 
        text="About Our Creative Digital Agency" 
        className="text-6xl md:text-[240px] font-bold leading-tight text-black"
      />
      
      <div className="max-w-3xl mx-auto px-5 xl:px-16 mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-xl md:text-2xl !leading-relaxed xl:ml-64">
          <div className="space-y-8">
            <p>
              We are a digital agency that believes in the power of creative innovation 
              and strategic thinking. Founded on the principles of excellence and 
              forward-thinking solutions, we've been transforming brands and businesses 
              since our inception.
            </p>
            <p>
              Our team of experts combines creativity with technical expertise to deliver 
              digital experiences that not only meet but exceed expectations. We pride 
              ourselves on our ability to understand and translate our clients' visions 
              into reality.
            </p>
          </div>
          
          <div className="space-y-8">
            <p>
              From brand strategy to digital transformation, we offer comprehensive 
              solutions that help businesses thrive in the digital age. Our approach 
              is collaborative, innovative, and always focused on delivering measurable 
              results.
            </p>
            <p>
              We believe in building lasting partnerships with our clients, understanding 
              their unique challenges, and crafting tailored solutions that drive 
              success. Our commitment to excellence and innovation has made us a 
              trusted partner for businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
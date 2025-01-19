import HomepageHero from "@/components/HomepageHero";
import Text from "@/components/Text";
import Projects from "@/components/Projects";
import CardsTeasers from "@/components/Cards";
import ParallaxImage from "@/components/ParallaxImage";
import About from "@/components/About";
import MasonryImages from "@/components/MasonaryImages";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <div>
      <HomepageHero />
      <Text highlighted={["innovative", "outstanding"]}>
        We create innovative digital experiences that transform businesses and delight users.
        Our approach combines creativity to deliver impactful digital solutions.
        With years of expertise, we consistently deliver outstanding results for our clients.
        Let's collaborate to turn your vision into digital success.
      </Text>
      <Projects />
      <CardsTeasers />
      <ParallaxImage 
        src="/image.jpg" 
        alt="Agency hero image" 
      />
      <About />
      <MasonryImages 
        images={[
          { src: "/image.jpg", alt: "About image 1" },
          { src: "/image.jpg", alt: "About image 2" },
        ]} 
      />
      <Posts />
    </div>
  );
}

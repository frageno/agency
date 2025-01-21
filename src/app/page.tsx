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
      <Text />
      <Projects />
      <CardsTeasers />
      <ParallaxImage />
      <About />
      <MasonryImages />
      <Posts />
    </div>
  );
}

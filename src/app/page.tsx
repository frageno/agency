import HomepageHero from "@/components/HomepageHero";
import Text from "@/components/Text";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <HomepageHero />
      <Text highlighted={["innovative", "outstanding"]}>
        We create innovative digital experiences that transform businesses and delight users.
        Our approach combines creativity and strategy to deliver impactful digital solutions.
        With years of expertise, we consistently deliver outstanding results for our clients.
        Let's collaborate to turn your vision into digital success.
      </Text>
      <Projects />
    </div>
  );
}

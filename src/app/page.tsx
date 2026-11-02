import SiteHeader from "./_components/SiteHeader/SiteHeader";
import Hero from "./_components/Hero/Hero";
import About from "./_components/About/About";
import FeaturedProjects from "./_components/FeaturedProjects/FeaturedProjects";
import CareerTimeline from "./_components/CareerTimeline/CareerTimeline";
import Contact from "./_components/Contact/Contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <CareerTimeline />
        <Contact />
      </main>
    </>
  );
}

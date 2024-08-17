import AboutSection from "@/components/about-section/about-section";
import FeatureSection from "@/components/features-section/features-section";
import HeroSection from "@/components/hero-section/hero-section";
import Testimonials from "@/components/testimonials-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
    </main>
  );
}

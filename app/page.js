import AboutSection from "@/components/about-section";
import CTAsection from "@/components/cta-section";
import FeatureSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <CTAsection />
      <AboutSection />
    </main>
  );
}

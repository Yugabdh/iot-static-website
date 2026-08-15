import AboutSection from "@/components/about-section";
import CTAsection from "@/components/cta-section";
import FeatureSection from "@/components/features-section";
import HeroSection from "@/components/hero-section";

export const metadata = {
  title: 'BMS Integrator India | Tridium Niagara & LOYTEC | SD IoTecs',
  description: 'Vendor-neutral BMS supply, installation, testing, commissioning and cloud integration. Tridium Niagara and LOYTEC accredited. Hyderabad, Bengaluru, Pune.',
  keywords: ["SD IoTecs", "SD IoTecs site", "SD IoTecs website", "Intelligent Building", "Cloud Integration", "Semantic Ontology", "Digital Twin", "UDMI", "Digital Buildings", "Advanced Analytics", "3D Graphics"],
  metadataBase: new URL('https://www.sdiotecs.com/'),
};

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

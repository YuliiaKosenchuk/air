import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import OurExpertise from "./components/OurExpertise/OurExpertise";
import VisionSection from "./components/VisionSection/VisionSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ContactSection from "./components/ContactSection/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhoWeAre />
      <OurExpertise />
      <ServicesSection />
      <TestimonialsSection />
      <VisionSection />
      <ContactSection />
    </main>
  );
}

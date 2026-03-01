import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import OurExpertise from "./components/OurExpertise/OurExpertise";
import Header from "./components/Header/Header";
import VisionSection from "./components/VisionSection/VisionSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import HeroSection from "./components/HeroSection/HeroSection";


export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection/>
      <WhoWeAre />
      <OurExpertise />
      <ServicesSection />
      <TestimonialsSection />
      <VisionSection />
    </main>
  );
}
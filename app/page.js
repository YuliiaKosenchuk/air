import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import OurExpertise from "./components/OurExpertise/OurExpertise";
import VisionSection from "./components/VisionSection/VisionSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <WhoWeAre />
      <OurExpertise />
      <ServicesSection />
      <TestimonialsSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

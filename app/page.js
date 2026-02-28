import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import OurExpertise from "./components/OurExpertise/OurExpertise";
import Header from "./components/Header/Header";
import VisionSection from "./components/VisionSection/VisionSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Header />
      <WhoWeAre />
      <OurExpertise />
      <TestimonialsSection />
      <VisionSection />
    </main>
  );
}
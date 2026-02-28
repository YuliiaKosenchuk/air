import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import OurExpertise from "./components/OurExpertise/OurExpertise";
import Header from "./components/Header/Header";
import VisionSection from "./components/VisionSection/VisionSection";

export default function Home() {
  return (
    <main>
      <Header />
      <WhoWeAre />
      <OurExpertise />
      <VisionSection />
    </main>
  );
}
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import OurExpertise from "./components/OurExpertise/OurExpertise";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <WhoWeAre />
      <OurExpertise />
    </main>
  );
}
import AppSection from "../components/AppSection";
import Footer from "../components/Footer";
import MotivationSection from "../components/ParallaxSection";
import AboutSection from "../components/AboutSection";
import PriceSection from "../components/PlansSection";
import "@radix-ui/themes/styles.css";
import BannerHome from "../components/BannerHome";
import EquipeSection from "../components/EquipeSection";

export default function Home() {
  return (
    <main className="">
      <BannerHome />
      <AboutSection />
      <PriceSection />
      <EquipeSection />
      <MotivationSection />      
      <AppSection />
      <Footer />
    </main>
  );
}

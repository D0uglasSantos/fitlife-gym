import AppSection from "./components/AppSection";
import BannerSection from "./components/BannerSection";
import Footer from "./components/Footer";
import MotivationSection from "./components/MotivationSection";
import VideoSection from "./components/VideoSection";
import CompareSection from "./components/PresentationSection";
import PriceSection from "./components/PlansSection";
import "@radix-ui/themes/styles.css";

export default function Home() {
  return (
    <main className="">
      <BannerSection />
      <CompareSection />
      <PriceSection />
      <MotivationSection />
      <VideoSection />
      <AppSection />
      <Footer />
    </main>
  );
}

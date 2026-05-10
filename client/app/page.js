import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendyPlants from "@/components/TrendyPlants";
import TopSelling from "@/components/TopSelling";
import Reviews from "@/components/Reviews";
import BestO2 from "@/components/BestO2";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      <Hero />
      <TrendyPlants />
      <TopSelling />
      <Reviews />
      <BestO2 />
      <Footer />
    </main>
  );
}

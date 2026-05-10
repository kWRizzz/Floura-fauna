import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendyPlants from "@/components/TrendyPlants";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      <Hero />
      <TrendyPlants />
    </main>
  );
}

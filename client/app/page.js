import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#1A251E]">
      <Navbar />
      
      {/* Hero Section Placeholder */}
      <section className="h-screen flex items-center justify-center border-b border-white/10">
        <h1 className="text-4xl md:text-6xl font-serif text-white/50">Hero Section Coming Next...</h1>
      </section>
    </main>
  );
}

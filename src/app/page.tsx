import Navbar from "@/components/navbar";
import Hero from "@/components/herosection/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
    </main>
  );
}

import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="flex items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio 🚀</h1>
      </section>
    </main>
  );
}

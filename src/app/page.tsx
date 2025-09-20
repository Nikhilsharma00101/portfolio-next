import Navbar from "@/components/navbar";
import Hero from "@/components/herosection/hero";
import DraggableCards  from "@/components/aboutsection/AboutSection";
import OrbitingSkills  from "@/components/skillssection/skills";
import ProjectCarousel from "@/components/projectsection/project";
import TimelineGalaxy from "@/components/projectplanning/TimelineGalaxy";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <DraggableCards />
      {/* Skills Section */}
      <OrbitingSkills />
      {/* Projects Section */}
      <ProjectCarousel />
      {/* Project Planning Section */}
      <TimelineGalaxy />
      {/* Testimonials Section */}
      <Testimonials />
    </main>
  );
}

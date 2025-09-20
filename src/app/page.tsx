import Navbar from "@/components/navbar";
import Hero from "@/components/herosection/hero";
import DraggableCards from "@/components/aboutsection/AboutSection";
import OrbitingSkills from "@/components/skillssection/skills";
import ProjectCarousel from "@/components/projectsection/project";
import TimelineGalaxy from "@/components/projectplanning/TimelineGalaxy";
import Testimonials from "@/components/testimonials/Testimonials";
import CertificateCarousel from "@/components/certificates/certificates";
import Contact from "@/components/contactsection/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about">
        <DraggableCards />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <OrbitingSkills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectCarousel />
      </section>

      {/* Project Planning Section */}
      <section id="planning">
        <TimelineGalaxy />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Certificate Section */}
      <section id="certificates">
        <CertificateCarousel />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

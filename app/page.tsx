import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen relative selection:bg-purple-500/30">
      <ParticleBackground />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}

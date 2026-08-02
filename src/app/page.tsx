import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Community from "@/components/sections/Community";
import Contact from "@/components/sections/tempContact";
import Certifications from "@/components/sections/certifications";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Community />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
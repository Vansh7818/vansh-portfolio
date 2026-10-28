import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Credentials from "@/components/sections/Credentials";
import Journey from "@/components/sections/Journey";
import GitHubSection from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Journey />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

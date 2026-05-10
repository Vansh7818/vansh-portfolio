import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import CodingProfiles from "./components/CodingProfiles/CodingProfiles";
import Certifications from "./components/Certifications/Certifications";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-[#0B1120] text-white min-h-screen">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <CodingProfiles />

      <Certifications />

      <Contact />
 
      <Footer />
      

    </div>
  );
}

export default App;
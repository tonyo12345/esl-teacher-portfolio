import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import TeachingPhilosophy from "./components/TeachingPhilosophy";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Certifications />
      <TeachingPhilosophy />
      <Gallery />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
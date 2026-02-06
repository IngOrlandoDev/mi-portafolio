import MainLayout from "./components/layout/MainLayout";
import Hero from "./sections/hero/Hero";
import Experience from "./sections/experience/Experience";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  );
}

export default App;

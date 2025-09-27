import Navbar from "./components/NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import SiteFooter from "./sections/SiteFooter";
import EducationSection from "./sections/Education";

export default function App() {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />

      <Home />
      <About />
      <EducationSection/>
      <Projects />
      <Skills />

      <SiteFooter />
    </div>
  );
}

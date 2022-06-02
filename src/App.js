import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import CarouselSkills from "./components/CarouselSkills";

function App() {
  return (
    <div className="bg-main-body">
      <Navbar />
      <Home />
      <About />
      <CarouselSkills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

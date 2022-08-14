import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skills2 from "./components/Skills2";

function App() {
  return (
    <div className="bg-main-body">
      <Navbar />
      <Home />
      <About />
      <Skills2 />
      <Work /> 
      <Contact />
    </div>
  );
}

export default App;

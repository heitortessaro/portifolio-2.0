import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
// import Skills from "./components/Skills";
import Work from './components/Work';
import Contact from './components/Contact';
import Skills2 from './components/Skills2';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills2 />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

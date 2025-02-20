import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import './App.css'
import Certifications from "./Pages/Certifications";



const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificate" element={<Certifications />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

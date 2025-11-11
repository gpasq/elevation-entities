import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Project from "./pages/Project";
import StyleGuide from "./pages/StyleGuide";
import Components from "./pages/Components";
import logo from "../public/ElevationEntities.svg";

export default function App() {
  return (
    <Router>
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Elevation Entities" className="h-8" />
          <span className="font-display text-xl text-text font-semibold">
            Elevation Entities
          </span>
        </div>
        <div className="flex gap-6 text-text">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/project">Project</Link>
          <Link to="/style-guide">Style Guide</Link>
          <Link to="/components">Components</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/components" element={<Components />} />
      </Routes>

      <footer className="bg-primary text-white py-10 mt-20 text-center text-sm">
        © {new Date().getFullYear()} Elevation Entities. All rights reserved.
      </footer>
    </Router>
  );
}


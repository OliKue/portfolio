import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";

import { TopSection } from "./components/topSection/TopSection";
import { HeroSection } from "./components/heroSection/HeroSection";
import { SkillsSection } from "./components/skillsSection/SkillsSection";
import { ProjectsSection } from "./components/projectsSection/ProjectsSection";
import { ContactSection } from "./components/contactSection/ContactSection";

function App() {
  return (
    <div className="Body">
      <Navbar />
      <TopSection />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;

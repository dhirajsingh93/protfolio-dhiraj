import React, { useState } from "react";

import NeonCursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeCaseStudySlug, setActiveCaseStudySlug] = useState(null);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f2f2f0] font-sans selection:bg-white/20 selection:text-[#f2f2f0] relative">
      {/* Neon Glowing Cursor */}
      <NeonCursor />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      {activeCaseStudySlug ? (
        <CaseStudyView
          projectSlug={activeCaseStudySlug}
          onBack={handleBackToProjects}
          onNavigateSlug={handleOpenCaseStudySlug}
        />
      ) : (
        <main>
          <Hero />
          <About />
          <Services />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </main>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

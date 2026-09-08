import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import CaseStudyView from "./components/CaseStudyView";

export default function App() {
  const [activeCaseStudySlug, setActiveCaseStudySlug] = useState(null);

  // Handle URL hash
  // useEffect(() => {
  //   const handleHashOrPathChange = () => {
  //     const hash = window.location.hash.replace("#", "");

  //     // Example:
  //     // #projects/rentbro
  //     // #projects/vyra
  //     if (hash.startsWith("projects/")) {
  //       const slug = hash.split("/")[1];

  //       if (slug) {
  //         setActiveCaseStudySlug(slug);
  //         return;
  //       }
  //     }

  //     // #projects
  //     setActiveCaseStudySlug(null);
  //   };

  //   // Run once when app loads
  //   handleHashOrPathChange();

  //   // Listen for hash changes
  //   window.addEventListener("hashchange", handleHashOrPathChange);

  //   return () => {
  //     window.removeEventListener("hashchange", handleHashOrPathChange);
  //   };
  // }, []);

  // // Open project case study
  // const handleOpenCaseStudySlug = (slug) => {
  //   setActiveCaseStudySlug(slug);

  //   window.location.hash = `projects/${slug}`;
  // };

  // // Back to projects
  // const handleBackToProjects = () => {
  //   setActiveCaseStudySlug(null);

  //   window.location.hash = "projects";
  // };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f2f2f0] font-sans selection:bg-white/20 selection:text-[#f2f2f0] relative">

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
import React, { useState, useEffect } from "react";
import { Menu, X, Github, Download } from "lucide-react";

import { scrollToSection } from "../utils/scrollToSection";

// Resume PDF
import resume from "../assets/Dhiraj.pdf";

export default function Navbar() {
  const [isInHero, setIsInHero] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "Story" },
    { id: "services", label: "Services" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Message" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroEl =
        document.getElementById("home") ||
        document.getElementById("hero");

      const heroHeight = heroEl
        ? heroEl.offsetHeight
        : window.innerHeight;

      setIsInHero(window.scrollY < heroHeight - 50);
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      id="mainNav"
      className={`absolute top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-[100] backdrop-blur-xl transition-all duration-500 ease-in-out rounded-2xl border ${
        isInHero
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-6 pointer-events-none"
      } ${
        isScrolled
          ? "py-3 border-white/25 shadow-[0_10px_35px_rgba(0,0,0,0.95)] bg-[#0f0f0f]/95"
          : "py-4 border-white/15 shadow-xl bg-[#0f0f0f]/90"
      }`}
    >
      <div className="px-6 flex items-center justify-between">

        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="font-sora font-extrabold text-lg sm:text-xl text-[#f2f2f0] flex items-center gap-2 flex-shrink-0 cursor-pointer select-none"
        >
          <span className="text-[#8a8a8a] font-mono">
            &gt;_
          </span>

          <span>DHIRAJ SINGH</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-[#f2f2f0]">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-[#f2f2f0] cursor-pointer hover:text-white/60 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* GitHub */}
          <a
            href="https://github.com/dhirajsingh93"
            target="_blank"
            rel="noreferrer"
            className="text-[#f2f2f0] cursor-pointer flex items-center gap-1.5 border border-white/15 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <Github className="w-3.5 h-3.5" />

            <span>GitHub</span>
          </a>

          {/* Resume Download */}
          <a
            href={resume}
            download="Dhiraj-Singh-Resume.pdf"
            className="text-[#f2f2f0] cursor-pointer flex items-center gap-1.5 border border-white/15 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5" />

            <span>RESUME</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#f2f2f0] p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 space-y-4 border-t border-white/10 mt-3 bg-[#141414] rounded-b-2xl">

          {/* Site Index */}
          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-3 font-bold font-mono">
              SITE INDEX
            </div>

            <div className="flex flex-col space-y-2 font-mono text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-[#f2f2f0] py-1 hover:text-white/60 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Find Me */}
          <div className="pt-3 border-t border-white/10">

            <div className="text-[10px] uppercase tracking-widest text-[#8a8a8a] mb-3 font-bold font-mono">
              FIND ME
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/dhirajsingh93"
              target="_blank"
              rel="noreferrer"
              className="text-[#f2f2f0] font-mono text-sm flex items-center gap-2 mb-4 hover:text-white/60 transition-colors duration-300"
            >
              <Github className="w-4 h-4" />

              <span>GitHub</span>
            </a>

            {/* Resume */}
            <a
              href={resume}
              download="Dhiraj-Singh-Resume.pdf"
              className="text-[#f2f2f0] font-mono text-sm flex items-center gap-2 hover:text-white/60 transition-colors duration-300"
            >
              <Download className="w-4 h-4" />

              <span>Download Resume</span>
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}
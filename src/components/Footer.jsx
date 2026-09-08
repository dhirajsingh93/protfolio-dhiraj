import React from "react";

import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import {
  handleGlassMouseMove,
  handleGlassMouseLeave,
} from "../utils/useGlassTilt";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 text-xs text-[#9A9088] relative z-10">
      <div
        className="glass max-w-7xl mx-auto px-6 py-6 rounded-2xl flex flex-col gap-6 cursor-pointer"
        onMouseMove={handleGlassMouseMove}
        onMouseLeave={handleGlassMouseLeave}
      >
        {/* ================= TOP ================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Brand */}
          <div>
            <div className="mono-text text-sm">
              <span className="text-[#FF9A3D] font-mono font-bold">
                &gt;_
              </span>{" "}
              <span className="text-[#F5F1EC] font-bold">
                dhiraj.dev
              </span>
            </div>

            <div className="text-[#666] font-mono text-[10px] mt-1">
              Full Stack Developer · Building Digital Experiences
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">

            {/* GitHub */}
            <a
              href="https://github.com/dhirajsingh93"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#777] hover:text-[#f8f6f5] hover:border-[#f8f8f9]/50 hover:bg-[#FF9A3D]/[0.05] transition-all duration-300"
            >
              <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dhiraj-singh-1b0942373/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#777] hover:text-[#6232ff] hover:border-[#6845ff]/50 hover:bg-[#FF9A3D]/[0.05] transition-all duration-300"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            {/* ================= WHATSAPP ================= */}
           <a
  href="https://wa.me/919354910181?text=Hello%20Dhiraj%2C%20I%20visited%20your%20portfolio."
  target="_blank"
  rel="noreferrer"
  aria-label="WhatsApp"
  className="group w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#777] hover:text-[#1df62c] hover:border-[#1df62d]/50 hover:bg-[#FF9A3D]/[0.05] transition-all duration-300"
>
  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
</a>

            {/* Email */}
            <a
              href="mailto:dhirajsingh93549@gmail.com"
              aria-label="Email"
              className="group w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#777] hover:text-[#FF9A3D] hover:border-[#FF9A3D]/50 hover:bg-[#FF9A3D]/[0.05] transition-all duration-300"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/itzz_dhirajsingh?igsi=MWR5dnB0ZXltcW95Ng=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#777] hover:text-[#f70000] hover:border-[#f70805]/50 hover:bg-[#FF9A3D]/[0.05] transition-all duration-300"
            >
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.07]" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* Copyright */}
          <div className="font-mono text-[10px] text-[#555]">
            © {currentYear} Dhiraj Singh. All rights reserved.
          </div>

          {/* Back To Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#666] hover:text-[#FF9A3D] transition-colors"
          >
            Back to top

            <span className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-[#FF9A3D]/40 transition-all">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
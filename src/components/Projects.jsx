import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const project = {
  number: "01",
  name: "HMS — Hospital Management System",
  subtitle: "Full-Stack Healthcare Management Platform",

  description:
    "A modern hospital management platform designed to simplify patient management, doctor workflows, appointments, authentication, and healthcare operations through a centralized dashboard.",

  image:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",

  technologies: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],

  github: "https://github.com/",
  live: "#",
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-20 bg-[#080808] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ff9a3d]/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#FF9A3D] text-xs font-bold tracking-[0.25em]">
              05 — PROJECTS
            </span>

            <Sparkles className="w-4 h-4 text-[#FF9A3D]" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#F5F1EC]">
            Things I've Built.
          </h2>

          <p className="mt-4 text-[#777] max-w-2xl leading-relaxed">
            Real-world applications built with modern technologies,
            scalable architecture, and a strong focus on user experience.
          </p>
        </motion.div>

        {/* PROJECT CARD */}
        <motion.article
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -8 }}
          className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025] hover:border-[#FF9A3D]/30 transition-colors duration-500"
        >

          {/* TOP IMAGE */}
          <div className="relative h-[300px] sm:h-[380px] overflow-hidden">

            <motion.img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/30 to-transparent" />

            {/* DARK OVERLAY ON HOVER */}
            <motion.div
              className="absolute inset-0 bg-[#ff9a3d]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* PROJECT NUMBER */}
            <div className="absolute top-6 left-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-xl border border-white/10"
              >
                <span className="text-xs font-bold text-white">
                  {project.number}
                </span>
              </motion.div>
            </div>

            {/* FEATURED BADGE */}
            <div className="absolute top-6 right-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FF9A3D] text-black"
              >
                <Sparkles className="w-3 h-3" />

                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Featured
                </span>
              </motion.div>
            </div>

            {/* IMAGE CONTENT */}
            <div className="absolute bottom-7 left-6 right-6">

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-[#FF9A3D] text-xs font-semibold mb-2"
              >
                Full-Stack Web Application
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl font-bold text-white"
              >
                {project.name}
              </motion.h3>

              <p className="text-white/60 text-sm mt-2">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* CARD CONTENT */}
          <div className="p-6 sm:p-8">

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#888] text-sm sm:text-base leading-relaxed max-w-3xl"
            >
              {project.description}
            </motion.p>

            {/* TECHNOLOGIES */}
            <div className="flex flex-wrap gap-3 mt-7">

              {project.technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.35 + index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                  }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.035] border border-white/10 hover:border-[#FF9A3D]/30 transition-colors"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-4 h-4 object-contain ${
                      tech.name === "Express"
                        ? "invert"
                        : ""
                    }`}
                  />

                  <span className="text-xs font-medium text-[#aaa]">
                    {tech.name}
                  </span>
                </motion.div>
              ))}

            </div>

            {/* DIVIDER */}
            <div className="h-px bg-white/10 my-7" />

            {/* BOTTOM */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">

              {/* PROJECT TYPE */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#555]">
                  Project Type
                </p>

                <p className="text-sm text-[#aaa] mt-1">
                  Full-Stack • MERN • Dashboard
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex items-center gap-3">

                {/* GITHUB */}  
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-[#aaa] hover:text-white hover:border-white/20 transition-colors text-xs font-semibold"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>

                {/* LIVE */}
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF9A3D] text-black hover:bg-[#ffad63] transition-colors text-xs font-bold"
                >
                  Live Demo
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

              </div>
            </div>
          </div>

          {/* BOTTOM GLOW */}
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#FF9A3D]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        </motion.article>
      </div>
    </section>
  );
};

export default Projects;  
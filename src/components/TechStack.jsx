
import React from "react";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  GitBranch,
} from "lucide-react";

export default function Skills() {
  const techIcons = {
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",

    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",

    HTML5:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",

    CSS3:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

    Tailwind:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",

    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",

    Express:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

    Git:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",

    GitHub:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

    C:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",

    "C++":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  };

  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description:
        "Building responsive, interactive and modern user interfaces.",
      icon: Code2,
      skills: [
        { name: "React", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "Tailwind", level: "Intermediate" },
        { name: "Bootstrap", level: "Intermediate" },
      ],
    },

    {
      number: "02",
      title: "Backend",
      description:
        "Creating server-side applications, APIs and backend logic.",
      icon: Server,
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express", level: "Intermediate" },
        { name: "REST API", level: "Intermediate" },
      ],
    },

    {
      number: "03",
      title: "Database",
      description:
        "Working with structured and NoSQL databases for web applications.",
      icon: Database,
      skills: [
        { name: "MongoDB", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
      ],
    },

    {
      number: "04",
      title: "Programming",
      description:
        "Strong programming fundamentals with problem-solving experience.",
      icon: Code2,
      skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "C", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
      ],
    },

    {
      number: "05",
      title: "AI & APIs",
      description:
        "Exploring AI-powered applications and third-party API integration.",
      icon: BrainCircuit,
      skills: [
        { name: "Python", level: "Intermediate" },
        { name: "AI APIs", level: "Learning" },
        { name: "REST API", level: "Intermediate" },
      ],
    },

    {
      number: "06",
      title: "Tools & Workflow",
      description:
        "Using modern development tools to build and manage projects.",
      icon: Wrench,
      skills: [
        { name: "Git", level: "Intermediate" },
        { name: "GitHub", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#0f0f0f] text-[#f2f2f0] py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-[450px] h-[350px] bg-[#FF9A3D]/[0.025] blur-[130px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[250px] bg-white/[0.015] blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">

          <div>
             <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF9A3D] mb-5 font-bold">
              04 — Skills
            </div>

            <h2 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              My
              <span className="text-[#777]"> Toolkit.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base leading-relaxed text-[#888]">
            A collection of technologies and tools I use to design, develop
            and deploy modern web applications.
          </p>

        </div>

        {/* ================= SKILL GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#FF9A3D]/30 hover:bg-[#171717]"
              >

                {/* Card Header */}

                <div className="flex items-start justify-between mb-7">

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-[#FF9A3D]/30 group-hover:bg-[#FF9A3D]/[0.05] transition-all duration-500">
                      <Icon className="w-5 h-5 text-[#777] group-hover:text-[#FF9A3D] transition-colors duration-500" />
                    </div>

                    <div>
                      <h3 className="font-sora text-lg sm:text-xl font-bold">
                        {group.title}
                      </h3>

                      <span className="font-mono text-[10px] text-[#555] uppercase tracking-widest">
                        /{group.number}
                      </span>
                    </div>

                  </div>

                </div>

                {/* Description */}

                <p className="font-mono text-xs leading-relaxed text-[#777] mb-6">
                  {group.description}
                </p>

                {/* Skills */}

                <div className="space-y-3">

                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.015] px-3 py-2.5 hover:border-white/15 hover:bg-white/[0.035] transition-all duration-300"
                    >

                      {/* Logo + Name */}

                      <div className="flex items-center gap-3">

                        {techIcons[skill.name] ? (
                          <img
                            src={techIcons[skill.name]}
                            alt={skill.name}
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          <div className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center">
                            <GitBranch className="w-3 h-3 text-[#777]" />
                          </div>
                        )}

                        <span className="font-mono text-xs text-[#aaa]">
                          {skill.name}
                        </span>

                      </div>

                      {/* Level */}

                      <span
                        className={`font-mono text-[9px] uppercase tracking-wider ${
                          skill.level === "Advanced"
                            ? "text-[#FF9A3D]"
                            : skill.level === "Intermediate"
                            ? "text-[#888]"
                            : "text-[#555]"
                        }`}
                      >
                        {skill.level}
                      </span>

                    </div>
                  ))}

                </div>

                {/* Hover Line */}

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF9A3D] group-hover:w-full transition-all duration-700" />

              </div>
            );
          })}

        </div>

        {/* ================= BOTTOM STACK ================= */}

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          <span className="font-mono text-xs uppercase tracking-widest text-[#555]">
            Constantly Learning
          </span>

          <span className="font-mono text-xs text-[#666]">
            React · Node.js · Python · MongoDB · MySQL · AI
          </span>

        </div>

      </div>
    </section>
  );
}


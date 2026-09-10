import React, { useEffect, useRef, useState } from "react";

// Project Images
 import hms from "../assets/projects-pic/hms.png";
// import hms2 from "../assets/projects-pic/hms-2.png";
// import hms3 from "../assets/projects-pic/hms-3.png";
import hms4 from "../assets/projects-pic/hms4.png";
// others
import soloFitness from "../assets/projects-pic/fitness.png";
import neoGym from "../assets/projects-pic/neo-gym.png";
import weather from "../assets/projects-pic/weather.png";
import calculator from "../assets/projects-pic/calculator.png";
import techpilot from "../assets/projects-pic/techpilot.png";
//clients pic

import vkEngineers from "../assets/projects-pic/vk-engineers.png";
import umadeepSchool from "../assets/projects-pic/umadeep-school.png";



import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  Code2,
  BriefcaseBusiness,
  Atom,
  Server,
  Database,
  Palette,
  FileCode2,
  Braces,
  Cloud,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


/* =========================================================
   PROJECT DATA
========================================================= */

const projects = {
  featured: {
    number: "01",
    category: "Full-Stack Application",
    title: "Hospital Management System",
    description:
      "A complete healthcare management platform designed for managing doctors, patients, appointments, authentication, dashboards and healthcare operations.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
    ],

    type: "Full-Stack • MERN • Dashboard",

    image:hms,
    images: [
      "/projects/hms.png",
      "/projects/hms-2.png",
      "/projects/hms-3.png",
      hms4,
    ],

    github: "#",
    live: "#",
  },

  client: [
    {
      number: "02",
      title: "VK Engineers",
      category: "Client Project",

      description:
        "A professional engineering business website created to showcase services, company information and provide an easy way for potential customers to connect and reach out.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
      ],

      type: "Client Work • Business",

      image: vkEngineers,

      github: "#",
      live: "#",
    },

    {
      number: "03",
      title: "Umadeep School",
      category: "Client Project",

      description:
        "A modern educational website developed for a school to present important information, facilities and services while making it easy for visitors to connect with the institution.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
      ],

      type: "Client Work • Education",

      image:umadeepSchool,

      github: "#",
      live: "#",
    },
  ],

  other: [
    {
      number: "04",
      title: "Solo Fitness",
      category: "RPG Fitness System",

      description:
        "An RPG-inspired fitness tracker with daily quests, XP progression, levels, streaks, boss battles and punishment mechanics.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      type: "Frontend • JavaScript",

      image:soloFitness,

      github: "#",
      live: "#",
    },

    {
      number: "05",
      title: "NEO GYMM",
      category: "Modern Fitness Website",

      description:
        "A modern responsive gym website focused on strong visuals, fitness content, smooth interactions and an engaging user experience.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      type: "Frontend • UI/UX",

      image: neoGym,

      github: "#",
      live: "#",
    },

    {
      number: "06",
      title: "Weather App",
      category: "Real-Time Weather",

      description:
        "A responsive weather application that fetches live weather information and presents important weather details through a clean interface.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "API",
      ],

      type: "Frontend • API",

      image: weather,

      github: "#",
      live: "#",
    },

    {
      number: "07",
      title: "Calculator",
      category: "Interactive Calculator",

      description:
        "A clean and responsive calculator built with JavaScript featuring interactive controls and a simple user-friendly interface.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      type: "Frontend • JavaScript",

      image: calculator,

      github: "#",
      live: "#",
    },

    {
      number: "08",
      title: "TechPilot",
      category: "Gaming Product Showcase",

      description:
        "A modern gaming gear website featuring a bold dark interface, product showcase sections and a responsive experience.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],

      type: "Frontend • Gaming UI",

      image: techpilot,

      github: "#",
      live: "#",
    },
  ],
};


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================================================
   TECHNOLOGY ICONS
========================================================= */

const techIcons = {
  React: {
    icon: Atom,
    color: "text-cyan-400",
  },

  "Node.js": {
    icon: Server,
    color: "text-green-400",
  },

  Express: {
    icon: Server,
    color: "text-zinc-300",
  },

  MongoDB: {
    icon: Database,
    color: "text-green-500",
  },

  Tailwind: {
    icon: Palette,
    color: "text-cyan-400",
  },

  HTML: {
    icon: FileCode2,
    color: "text-orange-400",
  },

  CSS: {
    icon: Palette,
    color: "text-blue-400",
  },

  JavaScript: {
    icon: Braces,
    color: "text-yellow-400",
  },

  API: {
    icon: Cloud,
    color: "text-purple-400",
  },
};


/* =========================================================
   TECHNOLOGY BADGES
========================================================= */

function TechBadges({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => {
        const data = techIcons[tech] || {
          icon: Globe,
          color: "text-zinc-400",
        };

        const Icon = data.icon;

        return (
          <motion.span
            key={tech}

            initial={{
              opacity: 0,
              y: 8,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.5,
            }}

            transition={{
              delay: index * 0.06,
              duration: 0.3,
            }}

            whileHover={{
              y: -2,
              scale: 1.03,
            }}

            className="
              inline-flex
              items-center
              gap-2
              rounded-md
              border
              border-white/[0.09]
              bg-white/[0.035]
              px-3
              py-1.5
              text-xs
              font-medium
              text-zinc-300
              transition-all
              duration-300
              hover:border-orange-400/30
              hover:bg-orange-400/[0.05]
              hover:text-white
            "
          >
            <Icon
              size={14}
              strokeWidth={1.8}
              className={data.color}
            />

            {tech}
          </motion.span>
        );
      })}
    </div>
  );
}


/* =========================================================
   CARD GLOW
========================================================= */

function useCardGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 160,
    damping: 24,
  });

  const smoothY = useSpring(y, {
    stiffness: 160,
    damping: 24,
  });

  const opacity = useMotionValue(0);

  const handleMove = (e) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    opacity.set(1);
  };

  const handleLeave = () => {
    opacity.set(0);
  };

  return {
    smoothX,
    smoothY,
    opacity,
    handleMove,
    handleLeave,
  };
}


/* =========================================================
   3D TILT CARD
========================================================= */

function TiltCard({
  children,
  className = "",
  onClick,
}) {
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(
    rotateX,
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const springY = useSpring(
    rotateY,
    {
      stiffness: 180,
      damping: 18,
    }
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateYValue =
      ((x - centerX) / centerX) * 4;

    const rotateXValue =
      -((y - centerY) / centerY) * 4;

    rotateY.set(rotateYValue);
    rotateX.set(rotateXValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}

      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
      }}

      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}

      className={className}
    >
      {children}
    </motion.div>
  );
}


/* =========================================================
   PROJECT BUTTONS
========================================================= */

function ProjectButtons({
  github,
  live,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {/* GitHub */}

      <motion.a
       
        href={github}

        target={
          github !== "#"
            ? "_blank"
            : undefined
        }

        rel="noreferrer"

        whileHover={{
          y: -2,
        }}

        whileTap={{
          scale: 0.96,
        }}

        className="
          inline-flex
          items-center
          gap-2
          rounded-md
          border
          border-white/[0.09]
          bg-white/[0.025]
          px-3
          py-2
          text-xs
          font-medium
          text-zinc-400
          transition-all
          hover:border-white/20
          hover:bg-white/[0.05]
          hover:text-white
        "
      >
        <Github size={14} />

        Code
      </motion.a>


      {/* Live */}

      <motion.a
       
        href={live}

        target={
          live !== "#"
            ? "_blank"
            : undefined
        }

        rel="noreferrer"

        whileHover={{
          y: -2,
          x: 2,
        }}

        whileTap={{
          scale: 0.96,
        }}

        className="
          group
          inline-flex
          items-center
          gap-2
          rounded-md
          bg-orange-400
          px-3
          py-2
          text-xs
          font-semibold
          text-black
          transition-all
          hover:bg-orange-300
        "
      >
        Live Demo

        <ArrowUpRight
          size={14}

          className="
            transition-transform
            duration-300
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      </motion.a>
    </div>
  );
}


/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader() {
  return (
    <motion.div
      variants={reveal}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.2,
      }}

      className="mb-12"
    >
      <div className="flex items-end justify-between gap-8">
        <div>
          {/* Label */}

          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                text-xs
                font-mono
                font-medium
                tracking-wide
                text-orange-400
              "
            >
              05 — PROJECTS
            </span>

            <span
              className="
                h-px
                w-12
                bg-orange-400/40
              "
            />
          </div>


          {/* Heading */}

          <h2
            className="
              text-4xl
              font-semibold
              tracking-tight
              text-[#f2f2f0]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Selected{" "}

            <span className="text-orange-400">
              Work
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-zinc-500
              sm:text-base
            "
          >
            A collection of applications,
            experiments and real-world client
            projects I've built while developing
            my skills.
          </p>
        </div>


        {/* Counter */}

        <div
          className="
            hidden
            text-right
            md:block
          "
        >
          <p
            className="
              font-mono
              text-xs
              text-zinc-500
            "
          >
            08 PROJECTS
          </p>

          <p
            className="
              mt-1
              text-[10px]
              tracking-wider
              text-zinc-700
            "
          >
            AND COUNTING
          </p>
        </div>
      </div>
    </motion.div>
  );
}


/* =========================================================
   FEATURED PROJECT
========================================================= */

function FeaturedProject({
  project,
  onOpen,
}) {
  const glow =
    useCardGlow();

  return (
    <motion.div
      variants={reveal}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.15,
      }}

      onMouseMove={glow.handleMove}
      onMouseLeave={glow.handleLeave}

      className="relative"
    >

      {/* Cursor Glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          z-20
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-400/[0.08]
          blur-3xl
        "

        style={{
          left: glow.smoothX,
          top: glow.smoothY,
          opacity: glow.opacity,
        }}
      />


      <TiltCard className="group relative cursor-pointer" onClick={() => onOpen(project)}>

        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.10]
            bg-[#101010]
            transition-all
            duration-500
            group-hover:border-orange-400/25
          "
        >

          {/* Featured Badge */}

          <div
            className="
              absolute
              left-5
              top-5
              z-30
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                delay: 0.2,
              }}

              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-400/20
                bg-orange-400/10
                px-3
                py-1.5
                text-[10px]
                font-semibold
                text-orange-300
                backdrop-blur-md
              "
            >
              <Sparkles size={12} />

              FEATURED PROJECT
            </motion.div>
          </div>


          {/* Main Grid */}

          <div
            className="
              grid
              lg:grid-cols-[1.05fr_0.95fr]
            "
          >

            {/* ================= IMAGE ================= */}

            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                border-b
                border-white/[0.06]
                sm:min-h-[380px]
                lg:min-h-[500px]
                lg:border-b-0
                lg:border-r
              "
            >

              <motion.img
                src={project.image}
                alt={project.title}

                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-contain
                  opacity-70
                  transition-opacity
                  duration-700
                  group-hover:opacity-90
                "

                whileHover={{
                  scale: 1.06,
                }}

                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />


              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#101010]
                  via-black/20
                  to-transparent
                "
              />


              {/* Number */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                "
              >
                <span
                  className="
                    font-mono
                    text-xs
                    text-zinc-500
                  "
                >
                  PROJECT / {project.number}
                </span>
              </div>
            </div>


            {/* ================= CONTENT ================= */}

            <div
              className="
                flex
                flex-col
                justify-between
                p-7
                sm:p-9
                lg:p-11
              "
            >

              <div>

                {/* Category */}

                <div
                  className="
                    mb-5
                    flex
                    items-center
                    gap-3
                  "
                >
                  <Code2
                    size={15}
                    className="text-orange-400"
                  />

                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-zinc-500
                    "
                  >
                    {project.category}
                  </span>
                </div>


                {/* Title */}

                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 0.5,
                  }}

                  className="
                    max-w-lg
                    text-3xl
                    font-semibold
                    leading-[0.98]
                    tracking-tight
                    text-white
                    sm:text-4xl
                    lg:text-5xl
                  "
                >
                  {project.title}
                </motion.h3>


                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-xl
                    text-sm
                    leading-7
                    text-zinc-400
                    sm:text-base
                  "
                >
                  {project.description}
                </p>


                {/* Divider */}

                <div
                  className="
                    my-7
                    h-px
                    bg-white/[0.07]
                  "
                />


                {/* Technologies */}

                <TechBadges
                  technologies={
                    project.technologies
                  }
                />

              </div>


              {/* Bottom */}

              <div className="mt-9">

                <p
                  className="
                    mb-4
                    text-[10px]
                    font-medium
                    text-zinc-500
                  "
                >
                  {project.type}
                </p>

                <ProjectButtons
                  github={project.github}
                  live={project.live}
                />

              </div>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}


/* =========================================================
   CLIENT PROJECT CARD
========================================================= */

function ClientCard({
  project,
  onOpen,
}) {
  const glow =
    useCardGlow();

  return (
    <motion.div
      variants={reveal}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.1,
      }}

      onMouseMove={glow.handleMove}
      onMouseLeave={glow.handleLeave}

      className="relative"
    >

      {/* Glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          z-10
          h-44
          w-44
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-400/[0.07]
          blur-3xl
        "

        style={{
          left: glow.smoothX,
          top: glow.smoothY,
          opacity: glow.opacity,
        }}
      />


      <TiltCard className="group h-full cursor-pointer" onClick={() => onOpen(project)}>

        <div
          className="
            relative
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-xl
            border
            border-white/[0.09]
            bg-[#101010]
            p-5
            transition-all
            duration-500
            group-hover:border-orange-400/20
          "
        >

          {/* Top */}

          <div
            className="
              flex
              items-center
              justify-between
            "
          >
            <span
              className="
                font-mono
                text-xs
                text-zinc-600
              "
            >
              {project.number}
            </span>

            <span
              className="
                rounded-md
                border
                border-orange-400/20
                bg-orange-400/10
                px-2.5
                py-1
                text-[10px]
                font-medium
                text-orange-300
              "
            >
              CLIENT WORK
            </span>
          </div>


          {/* Image */}

          <div
            className="
              relative
              mt-5
              h-52
              overflow-hidden
              rounded-lg
              border
              border-white/[0.06]
              bg-black
            "
          >

            <motion.img
              src={project.image}
              alt={project.title}

              className="
                h-full
                w-full
                object-contain
                opacity-75
                transition-opacity
                duration-500
                group-hover:opacity-100
              "

              whileHover={{
                scale: 1.08,
              }}

              transition={{
                duration: 0.6,
              }}
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                to-transparent
              "
            />
          </div>


          {/* Content */}

          <div className="mt-5">

            <p
              className="
                mb-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-orange-400
              "
            >
              {project.category}
            </p>


            <h3
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              {project.title}
            </h3>


            <p
              className="
                mt-3
                line-clamp-3
                text-sm
                leading-6
                text-zinc-500
              "
            >
              {project.description}
            </p>
          </div>


          {/* Bottom */}

          <div
            className="
              mt-auto
              pt-7
            "
          >

            <TechBadges
              technologies={
                project.technologies
              }
            />


            <div
              className="
                my-6
                h-px
                bg-white/[0.07]
              "
            />


            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
              "
            >

              <span
                className="
                  text-[10px]
                  text-zinc-500
                "
              >
                {project.type}
              </span>


              <ProjectButtons
                github={project.github}
                live={project.live}
              />
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}


/* =========================================================
   OTHER PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  onOpen,
}) {
  const glow =
    useCardGlow();

  return (
    <motion.div
      variants={reveal}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.08,
      }}

      onMouseMove={glow.handleMove}
      onMouseLeave={glow.handleLeave}

      className="relative"
    >

      {/* Glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          z-10
          h-40
          w-40
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-orange-400/[0.06]
          blur-3xl
        "

        style={{
          left: glow.smoothX,
          top: glow.smoothY,
          opacity: glow.opacity,
        }}
      />


      <TiltCard className="group h-full cursor-pointer" onClick={() => onOpen(project)}>

        <div
          className="
            relative
            flex
            h-full
            flex-col
            overflow-hidden
            rounded-xl
            border
            border-white/[0.08]
            bg-[#101010]
            p-4
            transition-all
            duration-500
            group-hover:border-white/[0.15]
          "
        >

          {/* Header */}

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <span
              className="
                font-mono
                text-xs
                text-zinc-600
              "
            >
              {project.number}
            </span>


            <div
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded
                border
                border-white/[0.08]
                text-zinc-600
                transition-colors
                group-hover:border-orange-400/20
                group-hover:text-orange-400
              "
            >
              <ExternalLink size={11} />
            </div>
          </div>


          {/* Image */}

          <div
            className="
              relative
              mt-4
              h-48
              overflow-hidden
              rounded-lg
              border
              border-white/[0.06]
              bg-black
            "
          >

            <motion.img
              src={project.image}
              alt={project.title}

              className="
                h-full
                w-full
                object-contain
                opacity-70
                transition-opacity
                duration-500
                group-hover:opacity-100
              "

              whileHover={{
                scale: 1.08,
              }}

              transition={{
                duration: 0.6,
              }}
            />


            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                to-transparent
              "
            />
          </div>


          {/* Content */}

          <div className="mt-5">

            <p
              className="
                mb-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-orange-400
              "
            >
              {project.category}
            </p>


            <h3
              className="
                text-xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              {project.title}
            </h3>


            <p
              className="
                mt-3
                line-clamp-3
                text-sm
                leading-6
                text-zinc-500
              "
            >
              {project.description}
            </p>
          </div>


          {/* Bottom */}

          <div
            className="
              mt-auto
              pt-6
            "
          >

            <TechBadges
              technologies={
                project.technologies
              }
            />


            <div
              className="
                my-5
                h-px
                bg-white/[0.07]
              "
            />


            <div
              className="
                flex
                flex-wrap
                items-center
                justify-between
                gap-2
              "
            >

              <span
                className="
                  text-[10px]
                  text-zinc-500
                "
              >
                {project.type}
              </span>


              <ProjectButtons
                github={project.github}
                live={project.live}
              />
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}



/* =========================================================
   PROJECT POPUP / MODAL
========================================================= */

function ProjectModal({ project, onClose }) {
  const touchStartX = useRef(null);
  const sliderImages =
    project?.images?.length
      ? project.images
      : project?.image
        ? [project.image]
        : [];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && sliderImages.length > 1) {
        setActiveImage((prev) => (prev + 1) % sliderImages.length);
      }
      if (e.key === "ArrowLeft" && sliderImages.length > 1) {
        setActiveImage(
          (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, sliderImages.length]);

  if (!project) return null;

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="
        fixed inset-0 z-[999]
        flex items-center justify-center
        bg-black/80 p-4
        backdrop-blur-xl
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.96 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="
          relative
          max-h-[92vh]
          w-full max-w-5xl
          overflow-y-auto
          rounded-2xl
          border border-white/[0.12]
          bg-[#101010]
          shadow-2xl shadow-black/50
        "
      >
        {/* Close */}
        <motion.button
          type="button"
          onClick={onClose}
          whileHover={{ scale: 1.08, rotate: 4 }}
          whileTap={{ scale: 0.94 }}
          className="
            absolute right-4 top-4 z-40
            flex h-10 w-10 items-center justify-center
            rounded-full
            border border-white/10
            bg-black/60
            text-zinc-300
            backdrop-blur-md
            transition hover:border-orange-400/30
            hover:text-orange-400
          "
          aria-label="Close project"
        >
          <span className="text-xl leading-none">×</span>
        </motion.button>

        {/* Image / Slider */}
        <div
          className="relative h-[330px] overflow-hidden bg-black sm:h-[460px] lg:h-[560px] touch-pan-y"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null || sliderImages.length <= 1) return;
            const endX = e.changedTouches[0].clientX;
            const diff = endX - touchStartX.current;
            if (Math.abs(diff) > 50) {
              if (diff < 0) nextImage();
              else prevImage();
            }
            touchStartX.current = null;
          }}
        >
          <motion.img
            key={sliderImages[activeImage]}
            src={sliderImages[activeImage]}
            alt={`${project.title} preview ${activeImage + 1}`}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="h-full w-full object-contain"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {sliderImages.length > 1 && (
            <>
              <motion.button
                type="button"
                onClick={prevImage}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="
                  absolute left-4 top-1/2 z-20
                  flex h-11 w-11 -translate-y-1/2
                  items-center justify-center
                  rounded-full border border-white/10
                  bg-black/55 text-xl text-white
                  backdrop-blur-md
                  hover:border-orange-400/30 hover:text-orange-400
                "
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </motion.button>

              <motion.button
                type="button"
                onClick={nextImage}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="
                  absolute right-4 top-1/2 z-20
                  flex h-11 w-11 -translate-y-1/2
                  items-center justify-center
                  rounded-full border border-white/10
                  bg-black/55 text-xl text-white
                  backdrop-blur-md
                  hover:border-orange-400/30 hover:text-orange-400
                "
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </motion.button>

              <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeImage === index
                        ? "w-8 bg-orange-400"
                        : "w-1.5 bg-white/40"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <div className="
                absolute bottom-5 right-5 z-20
                rounded-full border border-white/10
                bg-black/55 px-3 py-1.5
                font-mono text-[10px] text-zinc-300
                backdrop-blur-md
              ">
                {activeImage + 1} / {sliderImages.length}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-orange-400">
              PROJECT / {project.number}
            </span>

            <span className="h-px w-8 bg-orange-400/30" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {project.title}
          </h3>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            {project.description}
          </p>

          <div className="my-7 h-px bg-white/[0.07]" />

          <TechBadges technologies={project.technologies} />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-zinc-500">{project.type}</span>

            <ProjectButtons
              github={project.github}
              live={project.live}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


/* =========================================================
   MAIN PROJECTS COMPONENT
========================================================= */

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"

      className="
        relative
        overflow-hidden
        bg-[#0b0b0b]
        px-5
        py-24
        sm:px-8
        lg:px-12
        xl:px-16
      "
    >

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
        "
      >

        {/* Orange Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[550px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-orange-400/[0.025]
            blur-[130px]
          "
        />


        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
          "

          style={{
            backgroundImage:
              `
              linear-gradient(
                rgba(255,255,255,.4) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,.4) 1px,
                transparent 1px
              )
              `,

            backgroundSize:
              "70px 70px",
          }}
        />
      </div>


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
        "
      >

        {/* Header */}

        <SectionHeader />


        {/* =================================================
            FEATURED HMS
        ================================================= */}

        <div className="mb-20">

          <FeaturedProject
            project={
              projects.featured
            }
          />

        </div>


        {/* =================================================
            CLIENT WORK TITLE
        ================================================= */}

        <motion.div
          variants={reveal}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
          }}

          className="
            mb-7
            flex
            items-center
            gap-4
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <BriefcaseBusiness
              size={14}
              className="text-orange-400"
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-zinc-400
              "
            >
              Client Work
            </span>
          </div>


          <div
            className="
              h-px
              flex-1
              bg-white/[0.08]
            "
          />
        </motion.div>


        {/* =================================================
            CLIENT PROJECTS
        ================================================= */}

        <motion.div
          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.1,
          }}

          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}

          className="
            mb-20
            grid
            gap-5
            md:grid-cols-2
          "
        >

          {projects.client.map(
            (project) => (
              <ClientCard
                key={project.number}
                project={project}
                onOpen={openProject}
              />
            )
          )}

        </motion.div>


        {/* =================================================
            MORE PROJECTS TITLE
        ================================================= */}

        <motion.div
          variants={reveal}

          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
          }}

          className="
            mb-7
            flex
            items-center
            gap-4
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <Sparkles
              size={14}
              className="text-orange-400"
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-zinc-400
              "
            >
              More Projects
            </span>
          </div>


          <div
            className="
              h-px
              flex-1
              bg-white/[0.08]
            "
          />
        </motion.div>


        {/* =================================================
            MORE PROJECTS GRID
        ================================================= */}

        <motion.div
          initial="hidden"

          whileInView="visible"

          viewport={{
            once: true,
            amount: 0.05,
          }}

          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}

          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {projects.other.map(
            (project) => (
              <ProjectCard
                key={project.number}
                project={project}
                onOpen={openProject}
              />
            )
          )}

        </motion.div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 0.2,
            duration: 0.6,
          }}

          className="
            mt-16
            flex
            items-center
            justify-center
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
              text-xs
              text-zinc-700
            "
          >

            <span
              className="
                h-px
                w-10
                bg-white/[0.06]
              "
            />

            More coming soon

            <span
              className="
                h-px
                w-10
                bg-white/[0.06]
              "
            />

          </div>
        </motion.div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
      />
    </section>
  );
}
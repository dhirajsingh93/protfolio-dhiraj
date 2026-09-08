import React from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
  Code2,
  Building2,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      type: "work",
      number: "01",
      icon: Briefcase,
      title: "Web Developer (Maintenance)",
      organization: "J.C. Bose University of Science and Technology, YMCA",
      location: "Faridabad, Haryana",
      period: "2025 — Present",
      description:
        "Managing and maintaining the university community college website, fixing issues, updating content and improving the overall website experience and performance.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Git",
      ],
    },
  ];

  const education = [
    {
      number: "01",
      title: "B.Voc. Web Development",
      organization:
        "J.C. Bose University of Science and Technology, YMCA",
      location: "Faridabad, Haryana",
      period: "2025 — Present",
      description:
        "Currently pursuing a Bachelor of Vocation in Web Development with a focus on modern frontend development, backend technologies, databases and full-stack application development.",
      tags: [
        "Web Development",
        "JavaScript",
        "React.js",
        "Node.js",
        "MySQL",
        "MongoDB",
      ],
    },
    {
      number: "02",
      title: "Senior Secondary Education",
      organization: "Fogaat Public Sr. Sec. School",
      location: "Ballabhgarh, Haryana",
      period: "2021 — 2023",
      description:
        "Completed senior secondary education under the CBSE curriculum.",
      tags: ["CBSE", "Senior Secondary"],
    },
  ];

  const TechBadge = ({ children }) => (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-[#8a8a8a] font-mono text-[10px] uppercase tracking-wider hover:text-[#FF9A3D] hover:border-[#FF9A3D]/30 transition-all duration-300">
      <Code2 className="w-3 h-3" />
      {children}
    </span>
  );

  const TimelineCard = ({ item, accent = "orange" }) => {
    const Icon = item.icon || Building2;

    const accentColor =
      accent === "orange" ? "#FF9A3D" : "#FF5722";

    return (
      <div className="relative group">
        {/* Timeline Dot */}
        <div
          className="absolute -left-[39px] top-8 w-5 h-5 rounded-full bg-[#0f0f0f] border-2 transition-all duration-500 group-hover:scale-125"
          style={{
            borderColor: accentColor,
            boxShadow: `0 0 18px ${accentColor}55`,
          }}
        >
          <div
            className="absolute inset-[4px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: accentColor }}
          />
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-[#171717]">
          {/* Top gradient glow */}
          <div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700"
            style={{ backgroundColor: accentColor }}
          />

          {/* Header */}
          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border transition-all duration-500"
                style={{
                  borderColor: `${accentColor}40`,
                  backgroundColor: `${accentColor}08`,
                }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: accentColor }}
                />
              </div>

              <div>
                <div className="font-mono text-[10px] text-[#555] mb-1">
                  /{item.number}
                </div>

                <h3 className="font-sora text-lg sm:text-xl font-bold text-[#F5F1EC] tracking-tight group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p
                  className="text-sm font-semibold mt-1"
                  style={{ color: accentColor }}
                >
                  {item.organization}
                </p>
              </div>
            </div>

            {/* Period */}
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-[#777]" />
              <span className="font-mono text-[10px] text-[#999]">
                {item.period}
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="relative flex items-center gap-2 mb-5">
            <MapPin
              className="w-3.5 h-3.5"
              style={{ color: accentColor }}
            />
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#666]">
              {item.location}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.07] mb-5" />

          {/* Description */}
          <p className="relative text-sm leading-7 text-[#888] max-w-3xl">
            {item.description}
          </p>

          {/* Technologies */}
          <div className="relative flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/[0.07]">
            {item.tags.map((tag) => (
              <TechBadge key={tag}>{tag}</TechBadge>
            ))}
          </div>

          {/* Bottom hover line */}
          <div
            className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      </div>
    );
  };

  return (
    <section
      id="experience"
      className="relative bg-[#0f0f0f] text-[#f2f2f0] py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FF9A3D]/[0.025] blur-[130px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-white/[0.015] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10">

        {/* ================= HEADER ================= */}
        <div className="mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF9A3D] mb-3 font-bold">
            06 — Experience
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              My{" "}
              <span className="text-[#777]">
                Journey.
              </span>
            </h2>

            <p className="max-w-lg text-sm sm:text-base leading-relaxed text-[#777]">
              A timeline of my professional experience and
              academic journey in web development.
            </p>
          </div>
        </div>

        {/* ================= WORK EXPERIENCE ================= */}
        <div className="mb-20">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#FF9A3D]/[0.05] border border-[#FF9A3D]/20 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#FF9A3D]" />
            </div>

            <div>
              <h3 className="font-sora text-xl font-bold">
                Work Experience
              </h3>

              <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] mt-1">
                Professional Experience
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative ml-5 pl-8 border-l border-[#FF9A3D]/20">
            {experiences.map((item) => (
              <TimelineCard
                key={item.number}
                item={item}
                accent="orange"
              />
            ))}
          </div>
        </div>

        {/* ================= EDUCATION ================= */}
        <div>
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#FF5722]/[0.05] border border-[#FF5722]/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#FF5722]" />
            </div>

            <div>
              <h3 className="font-sora text-xl font-bold">
                Education
              </h3>

              <p className="font-mono text-[10px] uppercase tracking-widest text-[#555] mt-1">
                Academic Background
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative ml-5 pl-8 border-l border-[#FF5722]/20 space-y-6">
            {education.map((item) => (
              <TimelineCard
                key={item.number}
                item={item}
                accent="red"
              />
            ))}
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF9A3D] shadow-[0_0_10px_#FF9A3D]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#666]">
              Currently Learning & Building
            </span>
          </div>

          <span className="font-mono text-xs text-[#555]">
            Full Stack · AI · Modern Web
          </span>
        </div>
      </div>
    </section>
  );
}
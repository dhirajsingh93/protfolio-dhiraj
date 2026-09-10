import React, { useState } from "react";

export default function Services() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState(null);

  const serviceOfferings = [
    {
      title: "FULL STACK DEVELOPMENT",
      desc: "React · Node.js · Express",
    },
    {
      title: "FRONTEND DEVELOPMENT",
      desc: "React · JavaScript · Tailwind CSS",
    },
    {
      title: "BACKEND DEVELOPMENT",
      desc: "Node.js · Express · REST APIs",
    },
    {
      title: "DATABASE DEVELOPMENT",
      desc: "MongoDB · MySQL · Mongoose",
    },
    {
      title: "RESPONSIVE WEB DESIGN",
      desc: "Modern · Mobile-Friendly · Accessible",
    },
    {
      title: "API INTEGRATION",
      desc: "REST APIs · Third-Party Services",
    },
    {
      title: "AUTHENTICATION SYSTEMS",
      desc: "JWT · Login · Role-Based Access",
    },
    {
      title: "AI INTEGRATION",
      desc: "AI APIs · Gemini · Intelligent Features",
    },
    {
      title: "WEB DEPLOYMENT",
      desc: "Git · GitHub · Cloud Deployment",
    },
  ];

  const handleServiceClick = (title) => {
    // Toggle selection
    if (selectedServiceTitle === title) {
      setSelectedServiceTitle(null);
    } else {
      setSelectedServiceTitle(title);
    }
  };

  const isPaused = selectedServiceTitle !== null;

  return (
    <section
      id="services"
      className="py-20 relative bg-[#0f0f0f] border-y border-[#f2f2f0]/15 overflow-hidden text-[#f2f2f0]"
    >
      {/* =====================================================
          SECTION HEADER
          ===================================================== */}

      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-8 flex items-center justify-between">

          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#FF9A3D] mb-5 font-bold">
              03 — Services & Capabilities
            </div>

        {selectedServiceTitle && (
          <button
            onClick={() => setSelectedServiceTitle(null)}
            className="font-mono text-xs text-[#efeee9] hover:text-[#8a8a8a] transition-colors cursor-pointer"
          >
            [Selected: {selectedServiceTitle} &bull; Click to Resume Scrolling]
          </button>
        )}

      </div>

      {/* =====================================================
          CONTINUOUS MARQUEE
          ===================================================== */}

      <div className="w-full overflow-hidden select-none py-6 bg-[#161616] group">

        <div
          className="animate-marquee-left group-hover:[animation-play-state:paused] flex items-center space-x-12 whitespace-nowrap"
          style={{
            animationPlayState: isPaused ? "paused" : undefined,
          }}
        >

          {/* Duplicate list for seamless infinite loop */}
          {[...serviceOfferings, ...serviceOfferings].map(
            (service, idx) => {

              const isSelected =
                selectedServiceTitle === service.title;

              return (
                <div
                  key={idx}
                  onClick={() =>
                    handleServiceClick(service.title)
                  }
                  className="flex items-center space-x-12 flex-shrink-0 cursor-pointer group/item transition-all duration-300"
                >

                  {/* Service Content */}
                  <div className="flex flex-col">

                    {/* Service Title */}
                    <span
                      className={`font-sora text-xl sm:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
                        isSelected
                          ? "text-[#efeee9]"
                          : "text-[#8a8a8a] group-hover/item:text-[#efeee9]"
                      }`}
                    >
                      {service.title}
                    </span>

                    {/* Service Description */}
                    <span
                      className={`font-mono text-xs transition-colors duration-300 mt-0.5 ${
                        isSelected
                          ? "text-[#f2f2f0]"
                          : "text-[#8a8a8a]/70 group-hover/item:text-[#f2f2f0]"
                      }`}
                    >
                      {service.desc}
                    </span>

                  </div>

                  {/* Separator */}
                  <span className="text-[#8a8a8a] font-mono text-2xl select-none">
                    &bull;
                  </span>

                </div>
              );
            }
          )}

        </div>
      </div>
    </section>
  );
}
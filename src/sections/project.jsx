import { useEffect, useMemo, useRef, useState } from "react";
import img from "../assets/img/img.png";
import photo1 from "../assets/img/photo1.png";
import project2 from "../assets/img/pro2.png";
import pr2 from "../assets/img/pro2.1.png";
import text from "../assets/img/textsum.png"
import resume from "../assets/img/resume.png"
import { AnimatePresence, useMotionValueEvent, useScroll, motion } from "framer-motion";
import { NavLink } from "react-router";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" &&
    window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);

    const handler = (e) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mql.matches);

    mql.addEventListener("change", handler);

    return () => {
      mql.removeEventListener("change", handler);
    };
  }, [query]);

  return isMobile;
};

export default function Project() {
  const isMobile = useIsMobile();

  const sceneRef = useRef(null);

  // const activeProject = projects[activeIndex];
  const [activeIndex, setActiveIndex] = useState(0);


  const projects = useMemo(
    () => [
      {
        title: "Event Management",
        link: "https://github.com/Tanusonisoni/EventManagement.git",
        bgColor: "#06361c",
        image: isMobile ? img : photo1,
      },
      {
        title: "Real time quiz System",
        link: "https://notes-app-ebon-nu.vercel.app/",
        bgColor: "#1f2221",
        image: isMobile ? pr2 : project2,
      },
      
      {
        title: "Resume Builder",
        link: "https://github.com/Tanusonisoni/ResumeBuilder.git",
        bgColor: "",
        image: resume
      },
      {
        title: "Text Summarizer",
        link: "",
        bgColor: "#3b3b35",
        image: text
      }
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const threshold = projects.map(
    (_, i) => (i + 1) / projects.length
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = threshold.findIndex((t) => v <= t);

    setActiveIndex(
      idx === -1 ? threshold.length - 1 : idx
    );
  });

  const activeProject = projects[activeIndex];
  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h2
          className={`
    relative
    z-30
    text-3xl
    font-semibold
    text-center
    ${isMobile ? "mt-4 mb-2" : "mt-8 mb-3"}
  `}
        >
          My Work
        </h2>

        <div
          className={`
    relative
    w-full
    flex-1
    flex
    flex-col
    items-center
    ${isMobile ? "mt-0" : "mt-0"}
  `}
        >
          {projects.map((project, idx) => (
            <div
              key={`${project.title}-${idx}`}
              className={`
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[85%]
        max-w-[1200px]
        transition-all
        duration-500
        ${activeIndex === idx
                  ? "opacity-100 z-20"
                  : "opacity-0 z-0 pointer-events-none"
                }
      `}
            >

              {/* PROJECT NAME */}
              <AnimatePresence mode="wait">
                {activeIndex === idx && (
                  <motion.h3
                    key={project.title}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4 }}
                    className="
              relative
              z-30
              text-center
              text-white/95
              italic
              font-semibold
              text-[clamp(1rem,3vw,2rem)]
              leading-tight
              mb-4
            "
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>

              {/* PROJECT IMAGE */}
              <div
                className={`
          relative
          w-full
          overflow-hidden
          bg-black/20
          shadow-2xl
          ${isMobile
                    ? "h-[48vh] rounded-lg"
                    : "h-[58vh] rounded-xl"
                  }
        `}
                style={{
                  zIndex: 10,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="relative z-10 w-full h-full object-cover"
                  style={{
                    filter:
                      "drop-shadow(0 16px 40px rgba(0,0,0,0.65))",
                  }}
                  loading="lazy"
                />

                <div
                  className="pointer-events-none absolute inset-0 z-20"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-10">
          <img
            src={activeProject.image}
            alt={activeProject.title}
            className="w-72 h-72 object-contain"
          />

          <h3 className="mt-5 text-2xl font-semibold text-center">
            {activeProject.title}
          </h3>
        </div> */}
        {/* <div className="mt-6 flex justify-center">
          <a
            href={projects.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
      inline-block
      px-6 py-3
      rounded-full
      bg-white
      text-black
      font-semibold
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
      cursor-pointer
    "
          >
            View Project
          </a>
        </div> */}
        <div className="mt-6 flex justify-center">
          <a
            href={activeProject.link}
            target="_blank"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                activeProject.link,
                "_blank",
                "noopener,noreferrer"
              );
            }}
            rel="noopener noreferrer"
            className="
      group relative
      px-7 py-3 mb-10
      rounded-full
      border border-white/20
      bg-white/10
      backdrop-blur-md
      text-white
      font-semibold
      overflow-hidden
      transition-all duration-300
      hover:scale-105
      hover:border-white/40
      hover:bg-white/20
    "
          >
            <span className="relative z-10">
              View Project →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
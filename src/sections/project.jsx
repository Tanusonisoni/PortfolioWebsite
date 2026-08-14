import { useEffect, useMemo, useRef, useState } from "react";
import img from "../assets/img/img.png";
import photo1 from "../assets/img/photo1.png";
import project2 from "../assets/img/pro2.png";
import pr2 from "../assets/img/pro2.1.png";
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

  const [activeIndex, setActiveIndex] = useState(0);

  const projects = useMemo(
    () => [
      {
        title: "Event Management",
        link: "https://notes-app-ebon-nu.vercel.app/",
        bgColor: "#06361c",
        image: isMobile ? img : photo1,
      },
      {
        title: "Real time quiz System",
        link: "https://notes-app-ebon-nu.vercel.app/",
        bgColor: "#1f2221",
        image: isMobile ? pr2 : project2,
      },
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
        <h2 className={`text-3xl font-semobold z-10 text-center ${isMobile ? "mt-4" : "mt-8"}`}>
          My Work
        </h2>

        <div
          className={`relative w-full flex-1 flex items-center justify-center ${isMobile ? "-mt-4" : "mt-8"
            }`}>
          {
            projects.map((projects, idx) => (
              <div key={`${projects.title}-${idx}`}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                transition-all  duration-500 ${activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10"
                  }`}
                style={{ width: "85%", maxWidth: "1200px" }}>

                <AnimatePresence mode="wait">
                  {activeIndex === idx && (
                    <motion.h3 key={Project.title}
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}

                      className={`block text-center text-[clam(2rem,6vw,5rem)]
                    text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0
                    italic font-semibold ${isMobile ? "mt-24" : ""
                        }`}
                      style={{
                        zIndex: 5,
                        textAlign: isMobile ? "center" : "left",
                      }}>
                      {projects.title}
                    </motion.h3>
                  )}
                </AnimatePresence>

                <div className={`relative w-full overflow-hidden bg-black/20 shadow-2xl
                  md:shadow-{0_35px_60px_-15px_rgba(0,0,0,0.7) ${isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"
                  }h-[62vh] sm:h-[66vh]`}
                  style={{ zIndex: 10, transition: "box-shadow 250ms ease" }}

                >

                  <img src={projects.image} alt={Project.title}
                    className="w-full h-full object-cover drop-shadow-xl md:srop-shadow-2xl"
                    style={{
                      position: "relative",
                      zIndex: 10,
                      filter: "dropShadow(0,16px 40px rgba(0,0,0,.65)",
                      transition: "filter 200ms ease",

                    }}

                    loading="lazy" />
                  <div className="pointer-events-none absolute inset-0"
                    style={{
                      zIndex: 11,
                      background: "liner-gradient(180deg,rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)"
                    }}>

                  </div>
                </div>
              </div>
            ))
          }

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
          <NavLink
            to="https://notes-app-ebon-nu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
      group relative
      px-7 py-3
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
          </NavLink>
        </div>
      </div>
    </section>
  );
}
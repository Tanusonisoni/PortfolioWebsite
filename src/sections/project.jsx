import { motion } from "framer-motion";
import ecoQuestImage from "../assets/img/ecoquest.jpeg";
import inventoryImage from "../assets/img/quizappli.png";
import quizImage from "../assets/img/placement.jpeg";

const projects = [
  {
    title: "EcoQuest",
    description: "Learn about our planet. Take action. Make a difference.",
    image: ecoQuestImage,
    links: {
      project: "https://major-project-frontend-drab.vercel.app/",
      demo: "/Ecoquest-demo.mp4"
    },
  },
  {
    title: "Inventory Management System",
    description: "Manage products, track stock, and streamline inventory operations.",
    image: inventoryImage,
    links: {
      project: "https://inverntory-managementsystem.onrender.com/",
      github: "https://github.com/Tanusonisoni/Inverntory_managementSystem",
      demo: null,
    },
  },
  {
    title: "Real-Time Quiz Application",
    description: "An interactive placement preparation app with focused topic quizzes.",
    image: quizImage,
    links: {
      project: "https://notes-app-ebon-nu.vercel.app/",
      demo: null,
    },
  },
];

function ProjectAction({ href, children, disabled = false }) {
  const className =
    "inline-flex min-h-9 items-center justify-center rounded-full border border-white/20 px-3 py-1.5 text-xs font-semibold transition-all duration-300";

  if (!href || disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${className} cursor-not-allowed bg-white/5 text-white/50`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} bg-white/10 text-white hover:scale-105 hover:border-white/40 hover:bg-white/20`}
    >
      {children}
    </a>
  );
}

export default function Project() {
  return (
    <section id="projects" className="relative bg-black py-10 text-white sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-7 text-center text-3xl font-semibold sm:mb-9"
        >
          My Work
        </motion.h2>

        <div className="mx-auto grid max-w-5xl bg-[] grid-cols-1 items-stretch gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl"
            >
              <div className="h-28 w-full shrink-0 overflow-hidden bg-black/20 sm:h-32">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-3">
                <h3 className="mb-1.5 text-base font-semibold leading-snug text-white/95">
                  {project.title}
                </h3>
                <p className="mb-3 flex-1 text-xs leading-relaxed text-white/70">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  <ProjectAction href={project.links.project}>
                    {project.links.project ? "View Project" : "Coming Soon"}
                  </ProjectAction>
                  {project.links.github && (
                    <ProjectAction href={project.links.github}>
                      GitHub
                    </ProjectAction>
                  )}
                  <ProjectAction
                    href={project.links.demo}
                    disabled={!project.links.demo}
                  >
                    {project.links.demo ? "Watch Demo" : "Demo Not Available"}
                  </ProjectAction>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

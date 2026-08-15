import Particlelay from "../components/ParticleLay"
import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import { href } from "react-router"
import first from "../assets/img/image.png"
import { FaGithub, FaLinkedin } from "react-icons/fa"

// const socials=[
//   {Icons : FaLinkedin,label : "LinkedIn" , href:"https://www.linkedin.com/in/tanu-soni-302564330?utm_source=share_via&utm_content=profile&utm_medium=member_android"},
//   {Icons : FaGithub,label:"GitHub", href:"https://github.com/Tanusonisoni"}
// ]

const socials = [
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanu-soni-302564330",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Tanusonisoni",
  },
];

const golwVari = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" },
  hover: {
    scale: 1.2, y: -3,
    filter: "drop-shadow(0 0 8px rgba(13.88,204,0.9)) drop-shadow(0 0 18px rgba(16 ,185, 129 , 0.8))",
    transition: { type: "spring", stffness: 300, damping: 15 }

  },
  tap: { scale: 0.95, y: 0, transition: { duration: 0.08 } }

}
export default function Home() {
  const roles = ["MERN Stack Developer", "Frontend Developer"]
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(1);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeOut = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex(v => v + 1);
      else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex(v => v - 1);
      else if (deleting && subIndex === 0) {
        setDeleting(false); setIndex(p => (p + 1) % roles.length);
        setSubIndex(1);
      }

    }, deleting ? 40 : 60);

    return () => clearTimeout(timeOut);
  }, [subIndex, index, deleting, roles])

  return (
    <section id="home"
      className="w-full h-screen relative bg-black overflow-hidden">
      <Particlelay />

      <div>
        <div className="absolute -top-32 -left-32 
      w-[70vw] sm:w-[z-500vw] md:w-[40vw] 
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full
      bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
      opacity-30 sm:opacity-20 md:opacity-10 
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-pulse"></div>
        <div
          className="absolute right-0 bottom-0
      w-[70vw] sm:w-[z-500vw] md:w-[40vw] 
      h-[70vw] sm:h-[50vw] md:h-[40vw]
      max-w-[500px] max-h-[500px]
      rounded-full
      bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
      opacity-30 sm:opacity-20 md:opacity-10 
      blur-[100px] sm:blur-[130px] md:blur-[150px]
      animate-pulse delay-500">
        </div>
      </div>

      <div className="relative z-10 h-full w-full mt-5 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-centre lg-text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-48rem">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>

              <span>
                {roles[index].substring(0, subIndex)}
              </span>

              <span className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                style={{ heigh: "1em" }}></span>

            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold
  text-transparent bg-clip-text
  bg-gradient-to-r from-[#00f5d4] via-[#00bf8f] to-[#302b63]
  "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello I'm

              <br />
              <span className="text-white text-5xl  sm:texttext-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Tanu Soni
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 text:base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx:0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}>
              I turn Complex ideas into seamless, high-impact web experiances - building modern ,scalable and iightning-fast application that make a differance.</motion.p>


            <motion.div className="mt-8 flex fkex-wrap gap-3 sm:gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >

              <a
                href="#project"
                className="inline-block px-5 py-2.5 rounded-full font-medium text-base text-white m-4
  bg-gradient-to-r from-[#1cd828] via-[#00bf8f] to-[#302b63]
  shadow-lg
  scale-95 hover:scale-110
  transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-5 py-2 h-12 mt-4 rounded-full whitespace-nowrap ... 
                bg-gray-200
                scale-95 hover:scale-110
                transition-all"
              >
                My Resume
              </a>
            </motion.div>

           
          <div 
          className="mt-6 left:0 sm:mt-10 flex gap-5 text-2xl md:text-3xl justify-start lg:justify-start">       
          {socials.map(({ Icon, label, href }) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={golwVari}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

       <div className="relative w-full h-full">
 <div className="relative hidden lg:block h-screen">
  <motion.img
    src={first}
    alt="Tanu Soni"
    className="absolute top-[55%] -translate-y-1/2 object-contain select-none pointer-events-none"
    style={{
      right: "30%",
      width: "min(38vw, 600px)",
      maxWidth: "90%",
      maxHeight: "70vh",
    }}
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  />
</div>

{/* <div className="relative hidden lg:block h-screen">
   <div className="absolute
  top:1/2
  -translate-y-1/2
  pointer-events-none"
  style={{right:"10px",width:"min(22vw,410vw",
  heigh:"min(40vw,760px)",
  borderRadius:"50%",
  filter:"blur(38px)",opacity:0.32,background:"conic-gradient(from 0deg,#1cd8d2 , #00bf8f, #302b63, #1cd8d2"
  }}></div> 


  <motion.img
    src={first}
    alt="Tanu Soni"
    className="
      absolute
      top-[48%]
      -translate-y-1/2
      object-contain
      select-none
      pointer-events-none
      drop-shadow-[0_0_7px_rgba(0,217,166,0.08)]
    "
    style={{
      right: "130px",
      width: "min(34vw, 540px)",
      maxWidth: "85%",
      maxHeight: "77vh",
    }}
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  />
</div> */}
</div>
      </div>
    </section >
  )
}
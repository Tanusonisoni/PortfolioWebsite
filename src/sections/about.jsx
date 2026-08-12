import react from "react"
import { motion } from "framer-motion";
import profile from "../assets/img/my.jpeg"
import { useNavigate } from "react-router";



export default function About() {

  const navigate=useNavigate();


  const stats=[
    {label:"Projects",value:"2+"},
    {label:"Speciality",value:"MERN Stack Development"},
    {label:"Focus",value:"Performance & UX"},
  ]
  const glows = [
    "-top-10 -left-10 w-[320px] h-[220px] opacity-20 blur-[80px]",
    "bottom-0 right-10 w-[350px] h-[250px] opacity-10 blur-[90px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>
      <div className="realtive z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-6"
        initial={{opacity:0, y:24}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6}}
        viewport={{once:true,amount:0.4}}
        >
          <motion.div className="relative w-[260px] h-[260px] md:w-[200px] md:h-[200px]
          rounded-2xl overflow-hidden shadow-2xl
           bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25"
           whileHover={{scale:1.02}}
           transition={{type:"spring" , stiffness:200 , damping:10}}>
            <img 
            className="absolute inset-0 w-full h-full object-cover 
            "
            src={profile} alt="image"/>
          </motion.div>

          <div
          className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
            bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">Tanu Soni</h2>

            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
            Full Stack Devloper</p>

            <p
            className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl">I build scalable,modern applications with a strong focus on clean architecture with a strong focus on clean architecture,delightful UX, and performance. My toolkit spans javaScript,
              React,Nodejs Tailwind Css Express and RestfulApi's bringing ideas to life from concept to production with robust APIs and smooth interface</p>
            
            <div
            className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">

              {stats.map((item,i)=>(
                <motion.div key={i}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                initial={{opacity:0,y:10}}
                whileInView={{opacity:1, y:0}}
                transition={{delay:0.05*i,opacity:1,y:0}}
                viewport={{once:true, amount:0.3}}>
                  <div className="text-sm text-gray-400">
                    {item.label}
                  </div>
                  <div className="text-base font-demobold">{item.value}</div>
        
                </motion.div>
              ))}
            </div>

            <div
            className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 jutify-center md:justify-start">
              <button onClick={()=> navigate("/project")}
                className="inline-flex items-center jutify-center rounded-lg bg-white 
                text-black font-semibold px-5 py-3 hover:bg-gray-200
                trasnition">View Projects</button>
              <button
              className="inline-flex items-center justify-center rounded-lg
              border border-white/20 bg-white/10 text-white px-5 py-3 hover-bg-white-20">Get in touch</button>
            </div>

          </div>


        </motion.div>

        <motion.div
        className="text-center md:text-left"
        initial={{opacity:0,x:-30}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.6}}
        viewport={{once:true,amount:0.4}}>

          <h3 className="text-xl sm:text-3xl font-bold text-whit mb-3">About Me</h3>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">I’m a fresher developer focused on creating clean, scalable, and engaging web experiences with modern technologies.</p>
        </motion.div>

      </div>
    </section>
  );
}
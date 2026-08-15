import React, { useState } from 'react'
import Navbar from './components/navbar'
import Home from './sections/home'
import About from './sections/about'
import Skills from './sections/skills'
import Projects from './sections/project'
import Contact from './sections/contact'
import Footer from './sections/footer'
import Project from './sections/project'
import IntroAnimation from "./components/introAnimation"
import { Routes, Route } from "react-router"

// import CustomCursor from './components/customcursor'


function App() {
  const [intro, setIntro] = useState(false);
  return (
    // <>

    //   <Navbar />
    //   <Home />
    //   <About />
    //   {/* <Routes>
    //   <Route path="/" element={<Home />} /> 
    //    <Route path="/project" element={<Project />} /> 
    // </Routes> */}
    //   <Skills />
    //   <Project />
    //    <Contact/>
    //   <Footer />

    // </>
      <>
     {!intro && <IntroAnimation onFinish={()=>
     setIntro(true)}/>}

      {intro &&(
      <div className="gradient min-h-screen ">
        {/* <customCursor/> */}
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>

      </div>
      )}


       </>





  );
}

export default App

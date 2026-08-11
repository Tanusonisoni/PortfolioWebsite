import React, { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { TbRuler } from "react-icons/tb";
import Overlaymenu from "./overlaymenu";
// import logo from "../assets/logo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forcevisible,setForcevisible]=useState(false)


  const lastScrollY=useRef(0);
  const timerId=useRef(null);
  useEffect(()=>{
    const homeSection=document.querySelector("#home");
    const observer=new IntersectionObserver(
      ([entry])=>{
        if(entry.isIntersecting){
          setForcevisible(true);
          setVisible(true);
        }
        else 
        {
          setForcevisible(false);
        }
      },{threshol:0.1}
    )
    if(homeSection) observer.observe(homeSection);
    return ()=>{
      if(homeSection) observer.unobserve(homeSection)
    }
  },[])

  useEffect(()=>{
    const handelScroll=()=>{
      if(forcevisible)
      {
        setVisible(true);
        return;
      }
      const currentScrollY=window.scrollY;
      if(currentScrollY>lastScrollY.current)
      {
        setVisible(false)
      }
      else{
        setVisible(true)
      
      if(timerId.current) clearTimeout(timerId.current);
      timerId.current=setTimeout(()=>{
        setVisible(false)
      },3000)
    }
    lastScrollY.current=currentScrollY
    }
    window.addEventListener("scroll",handelScroll,{passive:true})
    return ()=>{
      window.removeEventListener("scroll",handelScroll)
      if(timerId.current) clearTimeout(timerId.current);
    }
  },[forcevisible])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 z-50">

        {/* Logo */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
        {/* <img src="logo" alt="mylogo"/> */}
          <span className="text-2xl font-bold text-white">
            Tanu
          </span>
        </div>

        {/* Menu */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl"
            aria-label="Open Menu"
          >
            <FiMenu className="text-3xl" />
          </button>
        </div>

        {/* Reach Out */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 p-2">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>

      </nav>

      <Overlaymenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
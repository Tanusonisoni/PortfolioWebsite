import { useState } from "react"

const useISMobile =(query="(max-width:639)")=>{
 const {isMobile,setIsMobile}=useState(
  typeof window !== "undefined" && window.matchMedia(query).matches
 )
}
export default function Project(){
  return (
    <section
    id="projects"
    className="relative text-white"></section>
  )
}

import { motion } from "framer-motion";
import projects from '../Details/ProjectData.ts'
import { useEffect, useState } from "react";
import ProjectCard from "../Components/ProjectCard.tsx";
import Footer from "../Components/Footer.tsx";

const Project = () => {
    const [project,setProject] = useState(projects)
    useEffect(()=>{
        setProject(projects)
    },[])
  return (
    <motion.div className="p-8" initial={{ y: -100 }} animate={{ y: 0 }}>
        <h1 className="text-4xl font-bold text-center mb-10">🚀 Sanjai Kumar R - Projects</h1>
        <p className="text-center text-lg mb-10 text-gray-600">
            This collection showcases full-stack applications, AI tools, research-based solutions, and real-time collaboration platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {
                project.map((p) =>(
                    <ProjectCard project={p}/>
                ))
            }
        </div>
        <Footer/>
      </motion.div>
  )
}

export default Project

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
        <h2 className="text-3xl font-bold">Projects</h2>
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

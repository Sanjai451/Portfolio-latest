import React from "react";
import { workExperiences } from "../Details/WorkExperience";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <div className="py-16">
      <h3 className="text-3xl font-bold text-blue-500">Work Experience</h3>
      <p className="mt-4 text-gray-600">
        I've worked on various projects, leveling up my skills and teaming up with talented individuals. Here's my journey:
      </p>

      {/* Timeline UI */}
      <div className="mt-10 flex flex-col space-y-8 border-l-4 border-blue-500 pl-6">
        {workExperiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-transform transform hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="absolute -left-7 top-5 w-4 h-4 bg-blue-500 rounded-full"></div>
            <h4 className="text-xl font-semibold">{exp.role}</h4>
            <p className="text-gray-500">{exp.company}</p>
            <p className="text-sm text-gray-400">{exp.duration}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;

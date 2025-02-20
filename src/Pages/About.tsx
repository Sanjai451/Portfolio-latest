import { motion } from "framer-motion";
import ShowImage from "../Components/AboutSection/ShowImage";
import { NavLink } from "react-router-dom";
import { ABOUT_DATA1, ABOUT_DATA2, ABOUT_DATA3 } from "../Details/AboutData";

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-12 lg:px-16">
      
      {/* Left Section - Image */}
      <motion.div 
        className="w-full lg:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ShowImage />
      </motion.div>

      {/* Right Section - Content */}
      <motion.div 
        className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 inline-block text-transparent bg-clip-text">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">{ABOUT_DATA1}</p>
        <p className="text-lg text-gray-300 leading-relaxed">{ABOUT_DATA2}</p>
        <p className="text-lg text-gray-300 leading-relaxed">{ABOUT_DATA3}</p>

        {/* Buttons Section */}
        <div className="flex justify-center lg:justify-start space-x-6 mt-6">
          <NavLink 
            to="/project" 
            className="px-6 py-3 text-lg font-semibold bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            View Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className="px-6 py-3 text-lg font-semibold bg-pink-500 hover:bg-pink-600 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Contact
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

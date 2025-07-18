import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ShowImage from "./AboutSection/ShowImage";
import TextRotating from "./TextOnHome/TextRotating";

const HeroSection = () => {
  return (
    <div className={"custom_center custom_hero_section"} style={{ position:"absolute" }} >
      <div className="div custom_center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hey there, explore my journey!
            
          </motion.h1>
          <div className="rotatingTextHome custom_rotatingText">
            <h1>Creative</h1> 
            <TextRotating />
          </div>
          {/* Subtitle with Animation */}
          <motion.p
            className="mt-4 text-lg md:text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Showcasing my skills, projects, and experiences.
          </motion.p>

          <div className="imageHero">
            <ShowImage/>
          </div>

          {/* Call to Action Buttons */}
          <div className="div custom_div_hero">
          <motion.div
            className="mt-6 flex space-x-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <NavLink to={'/project'} className={'px-6 py-3 text-lg font-semibold border border-white rounded-lg shadow-lg hover:scale-105 transition duration-300 pointer'}>View Projects</NavLink>
            <NavLink to={'/contact'} className={'px-6 py-3 text-lg font-semibold border border-white rounded-lg shadow-lg hover:scale-105 transition duration-300 pointer'}>Contact</NavLink>

          </motion.div>

          </div>
      </div>
    </div>
  );
};

export default HeroSection;

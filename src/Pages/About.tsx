import { motion } from "framer-motion";
import ShowImage from "../Components/AboutSection/ShowImage";
import { NavLink } from "react-router-dom";
import ABOUT_DATA from "../Details/AboutData";

const About = () => (
    <div className="about">
        <ShowImage/>
        <div className="div">
            <div className="wordings">
                <p>
                    {ABOUT_DATA}       
                </p>
                <div className="buttonsAbout">
                    <NavLink to={'/project'} className={'px-6 py-3 text-lg font-semibold border border-white rounded-lg shadow-lg hover:scale-105 transition duration-300 pointer'}>View Projects</NavLink>
                    <NavLink to={'/contact'} className={'px-6 py-3 text-lg font-semibold border border-white rounded-lg shadow-lg hover:scale-105 transition duration-300 pointer'}>Contact</NavLink>
                </div>
            </div>
        </div>
        
    </div>
  );
export default About  
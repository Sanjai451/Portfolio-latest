import { NavLink } from "react-router-dom"
import UsePressureText from "../Components/TextOnHome/PressureText/UsePressureText"
import ContactDetails from "./ContactDetails"
import Skills from "./SkillsSection/Skills"

const Details = () => {
  return (
    <div className="details">
      <div className="skills  ">
        <Skills/>

        <NavLink to={'/project'} className={'px-6 py-3 text-lg font-semibold border border-white rounded-lg shadow-lg hover:scale-105 transition duration-300 pointer'}>View Projects</NavLink>
            
        <ContactDetails/>
      </div>
      <div className="details_home mt-10">
        <UsePressureText />
      </div>
    </div>
  )
}

export default Details

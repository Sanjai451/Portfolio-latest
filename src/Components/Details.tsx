import UsePressureText from "../Components/TextOnHome/PressureText/UsePressureText"
import ContactDetails from "./ContactDetails"
import Skills from "./SkillsSection/Skills"

const Details = () => {
  return (
    <div className="details">
      <div className="skills  ">
        <Skills/>
        <ContactDetails/>
      </div>
      <div className="details_home mt-10">
        <UsePressureText/>
      </div>
    </div>
  )
}

export default Details

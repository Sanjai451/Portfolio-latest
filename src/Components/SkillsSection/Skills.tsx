import skills from "../../Details/SkillData";
import Education from "../Education";
import Footer from "../Footer";
import WorkExperience from "../WorkExperience";

const Skills = () => {
  return (
    <section className='skill_cont max-container'>

      <div className='py-10 flex flex-col'>
        <h1 className='subhead_text  blue-gradient_text'>My Skills</h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Full Stack Developer through hands-on learning and building applications.
        </p>
      </div>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    <WorkExperience/>
    <Education/>


        <Footer/> 
      {/* <hr className='border-slate-200' /> */}
    </section>
  );
};

export default Skills;

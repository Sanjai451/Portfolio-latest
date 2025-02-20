import { educationData } from "../Details/Education";

const Education = () => {
  return (
    <div className="py-16">
      <h3 className="subhead_text blue-gradient_text text-lect">Education</h3>
      <div className="mt-5 flex flex-col gap-6 text-slate-500 items-end">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-white shadow-lg rounded-lg p-6 w-4/4 transform transition duration-500 hover:scale-105 text-right"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-sm text-gray-500">
              <strong>{edu.institution}</strong> | {edu.duration}
            </p>
            <p className="text-gray-700 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

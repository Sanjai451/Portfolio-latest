import React from "react";
import { Project } from "../Details/ProjectData";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-48 object-cover"
      />

      {/* Project Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>

        {/* Links */}
        <div className="flex justify-between items-center mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-800 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577v-2.165c-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.744.082-.729.082-.729 1.205.086 1.84 1.24 1.84 1.24 1.07 1.836 2.805 1.306 3.49.998.107-.776.42-1.306.763-1.605-2.665-.303-5.466-1.334-5.466-5.931 0-1.311.469-2.384 1.235-3.225-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.398 3.004-.403 1.02.005 2.047.137 3.005.403 2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.241 2.873.118 3.176.768.841 1.235 1.914 1.235 3.225 0 4.61-2.805 5.624-5.475 5.92.43.371.814 1.102.814 2.22v3.293c0 .32.192.693.8.576C20.565 21.797 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          { String(project.website).length > 3 && 
            <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 1 0-2 0v5H5V5h5a1 1 0 1 0 0-2zm8.293 1.293-7 7a1 1 0 1 0 1.414 1.414l7-7A1 1 0 0 0 18.293 4.293zM15 3a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-6z" />
                </svg>
                Live Site
                {/* { String(project.website).length } */}
              </a>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";

const ProjectCard = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="text-xl font-semibold mb-1 font-primary">
        {project.name}
      </h3>
      <h5 className="text-sm text-gray-500 mb-2 font-primary">
        {project.description}
      </h5>
      <p className="text-sm  mb-4 font-primary">
        <span className="font-semibold text-gray-600">
          Web Technologies used:
        </span>{" "}
        <span className="text-gray-600">{project.tools}</span>
      </p>
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-200 text-center font-primary"
      >
        Live Site
      </a>
    </div>
  </div>
);

export default ProjectCard;

import React from 'react';
import projects from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => (
  <section className="projects py-8">
    <h2 className="text-3xl font-bold mb-2 text-center font-primary">Projects</h2>
    <p className="text-center text-gray-500 mb-10 font-primary">Some of my recent works and experiments</p>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  </section>
);

export default Projects; 
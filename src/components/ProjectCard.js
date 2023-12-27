import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-links">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
        <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;

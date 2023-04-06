import React from 'react';
import './Project.css';

const Project = ({ title, description, imageUrl, technologies, projectUrl, githubUrl }) => {
  return (
    <div className="project">
      <img className="project-image" src={imageUrl} alt={title} />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <ul className="technologies">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={projectUrl} target="_blank" rel="noreferrer">Deployed Application</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub Repository</a>
        </div>
      </div>
    </div>
  );
};

export default Project;

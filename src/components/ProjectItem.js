import React from "react";

function ProjectItem({ project }) {
  return (
    <div >
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div>
        {project.technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  ); 
        }

export default ProjectItem;

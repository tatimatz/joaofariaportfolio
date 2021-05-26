import React, { useState } from "react";
import { projectsData } from "../data/projectsData.js";
import ButtonsGalerie from '../components/ButtonsGalerie';

const Project = (props) => {
  const [currentProject] = useState(projectsData);
  const project = currentProject[props.projectNumber];

  console.log(currentProject);

  return (
    <div className="project-main">
      <div className="project-content">
        <h1>{project.title}</h1>
        <p>{project.date}</p>
        <ul className="techniques">
          {project.techniques.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="img-content">
        <div className="img-container hover">
          <span>
          <p style={{'font-size':'1rem'}}>{project.infos}</p>
          </span>
          <img src={project.img} alt={project.title} />
        </div>
        < ButtonsGalerie />
      </div>
    </div>
  );
};

export default Project;

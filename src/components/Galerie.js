import React, { useState } from 'react';
import { projectsData } from "../data/projectsData.js";

const Galerie = (props) => {

const [currentProject] = useState(projectsData);
  const project = currentProject[props.projectNumber];

  console.log(currentProject);


    return (
        <div className="gallery">
            <div className="gallery-item" >
            {project.galerie.map((item) => {
            return <img className="frame" src={item} alt="blabla" key={item.id} />;
          })}
                
            </div>
        </div>
    )
}

export default Galerie

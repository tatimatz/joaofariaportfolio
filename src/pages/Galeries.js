import React from 'react';
import Galerie from '../components/Galerie';
import { projectsData } from "../data/projectsData.js";

export const Galerie1 = () => {

  console.log(projectsData);
  
  return (
    <div>
      <div className="galerie">
        <Galerie projectNumber={0} />
      </div>
    </div>
  )
}



export const Galerie2 = () => {
  return (
    <div>
      <div className="galerie">
      <Galerie projectNumber={1} />
      </div>
    </div>
  )
}



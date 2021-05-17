import React from 'react';
import Galerie from '../components/Galerie';
import { GaleriesData } from '../data/galeriesData.js'

export const Galerie1 = () => {
  console.log(GaleriesData);
  return (
    <div>
      <div className="galerie">
        <Galerie galerieNumber={0} />
      </div>
    </div>
  )
}



export const Galerie2 = () => {
  return (
    <div>
      <div className="galerie">
      <Galerie galerieNumber={0} />
      </div>
    </div>
  )
}



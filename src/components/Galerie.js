import React, { useState } from 'react';
import FbImageGrid from 'react-facebook-photo-grid';
import { GaleriesData } from '../data/galeriesData.js';

const Galerie = (props) => {

    const [currentGalerie] = useState(GaleriesData);
    const galerie = currentGalerie[props.galerieNumber].tableaux;


    return (
        <div>
        <FbImageGrid images={galerie} maxWidth={800}  />
        </div>
    )
}

export default Galerie

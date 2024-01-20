import React from 'react'
import { Row, Col } from 'react-bootstrap';
import '../css/WeC.css'

export const WeC = ({ name, urlImage, urlImage2, urlImage3, name1, name2}) => {
  return (
    <body>
      <h2 className="d-flex justify-content-center titleWe">Frase del equipo</h2>
      <div class="creadores">
        <div class="creador">
          <img src={urlImage} alt="Creador 1"/>
          <h3>{name}</h3>
        </div>

        <div class="creador">
          <img src={urlImage2} alt="Creador 2"/>
          <h3>{name1}</h3>
        </div>

        <div class="creador">
          <img src={urlImage3} alt="Creador 3"/>
          <h3>{name2}</h3>
        </div>
      </div>      
    </body>
  )
}

export default WeC
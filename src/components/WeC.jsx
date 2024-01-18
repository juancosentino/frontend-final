import React from 'react'
import { Row, Col } from 'react-bootstrap';
import '../css/WeC.css'

export const WeC = ({ h2, urlImage }) => {
  return (
    <>
        {/* <div className='box'>
            <img src={urlImage} alt="" />
            <h2 className='nameWe'>{h2}</h2>
        </div> */}
        <div class="contenedor-externo">
          <div class="div-azul">
            <img src={urlImage} className='imgWe' alt=""/>
            <h2 className='nameWe'>{h2}</h2>
          </div>
          <div class="div-azul">
            <img src={urlImage} className='imgWe' alt=""/>
            <h2 className='nameWe'>{h2}</h2>            
          </div>
          <div class="div-azul">
            <img src={urlImage} className='imgWe' alt=""/>
            <h2 className='nameWe'>{h2}</h2>
          </div>
          <div class="div-azul">
            <img src={urlImage} className='imgWe' alt=""/>
            <h2 className='nameWe'>{h2}</h2>
          </div>
        </div> 
    </>
  )
}

export default WeC
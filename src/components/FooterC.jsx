import React from 'react'
import '../css/FooterC.css'
import { Container, Row, Col } from 'react-bootstrap'

const FooterC = () => {
  return (
    <>
  <Container fluid expand="md" style={{ background: '#CAF0F8', marginTop: '20px', padding: '20px' ,borderTop: '1px dashed #0085CC'}}>
    <Row className='justify-content-center align-items-center'>
      <Col sm={12} md={6} lg={3} className='mb-4 mx-auto text-center'>
        <h5 className='fuente-footer'>Redes Sociales</h5>
        <p className='fuente-footer'>
          Síguenos en nuestras redes sociales para mantenerte informado sobre nuestras novedades.
        </p>
        <a href="https://facebook.com" className='fuente-footer'>Facebook</a> |{' '}
        <a href="https://twitter.com" className='fuente-footer'>Twitter</a> |{' '}
        <a href="https://instagram.com" className='fuente-footer'>Instagram</a>
      </Col>
      <Col sm={12} md={6} lg={3} className='mb-4 mx-auto text-center'>
        <h5 className='fuente-footer'>Ubicación</h5>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1059174722654!2d-65.20974192507296!3d-26.836583276692604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1707007972343!5m2!1ses-419!2sar" 
          width="80%" height="100" allowFullScreen="" 
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </Col>
      <Col sm={12} md={6} lg={3} className='mb-4 mx-auto text-center'>
        <h5 className='fuente-footer'>Contacto</h5>
        <p className='fuente-footer'>
          Teléfono: +123 456 789<br />
          Correo Electrónico: info@veterinaria.com
        </p>
      </Col>
    </Row>
  </Container>
</>
  )
}

export default FooterC
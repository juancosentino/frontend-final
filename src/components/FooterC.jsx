import React from 'react'
import '../css/FooterC.css'

const FooterC = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Redes Sociales</h5>
          <p>
            Síguenos en nuestras redes sociales para mantenerte informado sobre nuestras novedades.
          </p>
          {/* Agrega enlaces a tus redes sociales */}
          <a href="https://facebook.com">Facebook</a> |{' '}
          <a href="https://twitter.com">Twitter</a> |{' '}
          <a href="https://instagram.com">Instagram</a>
        </div>
        <div className="col-md-3">
          <h5>Ubicación</h5>
          {/* {<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.423666958226!2d-65.
            207167!3d-26.8365833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b
            8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1704930056775!5m2!1ses-419!2sar" 
            width="20px" height="20px" style="border:0;" allowfullscreen="" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"/>} */}
        </div>
        <div className="col-md-3">
          <h5>Contacto</h5>
          <p>
            Teléfono: +123 456 789<br />
            Correo Electrónico: info@veterinaria.com
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default FooterC
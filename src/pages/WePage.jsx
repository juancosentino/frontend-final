import NavbarC from "../components/NavbarC"
import FooterC from "../components/FooterC"
import WeC from "../components/WeC"
import { Container, Row } from 'react-bootstrap'
import '../css/WeC.css'

export const WePage = () => {
    const contenedorEstilos = {
      height: '100vh'
    }
  return (
    <div className="pagina" style={contenedorEstilos}>
        <NavbarC/>

        <h1 className="d-flex justify-content-center titleWe">Frase del Equipo</h1>
        
        <WeC urlImage=' https://i.pinimg.com/474x/f6/43/a1/f643a1437bc4c490837cad9d1a2ec24c.jpg' h2='Juan Cosentino' />

        <FooterC/>


    </div>
  )
}

export default WePage
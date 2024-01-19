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
        
        <WeC urlImage='https://i.pinimg.com/236x/7c/37/11/7c3711a96dba0f88a6bc01f71863b3fb.jpg' name='Juan Cosentino' 
        urlImage2='https://i.pinimg.com/236x/7c/37/11/7c3711a96dba0f88a6bc01f71863b3fb.jpg' name1='Ignacio Fernández'
        urlImage3='https://i.pinimg.com/236x/7c/37/11/7c3711a96dba0f88a6bc01f71863b3fb.jpg' name2='Benjamin Zelaya'
        />

        <FooterC/>


    </div>
  )
}

export default WePage
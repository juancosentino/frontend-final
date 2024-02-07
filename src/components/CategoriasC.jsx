import { Container, Row, Col, Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import '../css/CategoriasC.css'
import Swal from "sweetalert2"

const CategoriasC = () => {
    const token = JSON.parse(sessionStorage.getItem('token'))
    const role = JSON.parse(sessionStorage.getItem('role'))

    const handleClick = () => {
        if(token && role === 'user'){
            location.href = '/Turnos'
        }else{
            Swal.fire({
                icon: "error",
                title: "Debes iniciar sesion para solicitar un turno",
                /* text: "Algún campo esta vacio!" */
            });
        }
    }
  return (
    <>
        <Container>
            <Row className="RowCat">
                <Col className="ColCat">
                    <Link to={`/Alimento`} className="LinkCat backCat1">
                        Alimentos
                    </Link>
                </Col>
                <Col className="ColCat">
                    <Link to={`/Accesorio`} className="LinkCat backCat2">
                        Accesorios
                    </Link>
                </Col>
                <Col className="ColCat">
                    <Link to={`/Juguetes`} className="LinkCat backCat3">
                        Juguetes
                    </Link>  
                </Col>
            </Row>
            <Row>
                <Col className="ColCat">
                <Link to={'#'} onClick={handleClick} 
                className="LinkCat1 backCat4">
                    ATENCION AL CLIENTE
                </Link> 
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default CategoriasC
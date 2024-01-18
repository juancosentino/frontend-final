import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../css/NavbarC.css'

  const NavbarC = () => {
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/30760.png" alt="" width={35}
            className='imgNav'/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/We">Sobre Nosotros</Nav.Link>
                <Nav.Link href="/contact">Contacto</Nav.Link>
                <NavDropdown title="Productos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Alimentos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Accesorios
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Juguetes</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Favoritos
                  </NavDropdown.Item> 
                </NavDropdown>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link href="/Login">Iniciar Sesion</Nav.Link>
                <Nav.Link href="/Register">Registrarse</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
  
  export default NavbarC
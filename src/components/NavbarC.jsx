import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, FormControl, Button } from 'react-bootstrap';
import '../css/NavbarC.css'

  const NavbarC = () => {
    const token = JSON.parse(sessionStorage.getItem('token'))
    const role = JSON.parse(sessionStorage.getItem('role'))
    
    const singOff = () => {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('role')
      location.href = '/'
    }

    return (
      <>
        <Navbar expand="lg" className="" style={{background: '#CAF0F8', borderBottom: '1px dashed #0085CC'}}>
          <Container fluid>
            <Navbar.Brand href={token && role === 'user' ? '/user' : token && role === 'admin' ? '/admin' : '/'}>
            <img src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/30760.png" alt="" width={35}
            className='imgNav'/>  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href={token && role === 'user' ? '/user' : token && role === 'admin' ? '/admin' : '/'} 
                className='fuente-navbar' 
                style={{ fontSize: '20px', color: 'black' }}>
                  Inicio
                </Nav.Link>
                {
                  token && role === 'user'
                  ?
                  <>
                    <Nav.Link href="/We" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Sobre Nosotros</Nav.Link>
                    <Nav.Link href="/Plans" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Planes</Nav.Link>
                    <Nav.Link href="/Products" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Productos</Nav.Link>
                    {/* <Nav.Link href="*" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Profesionales</Nav.Link> */}
                    <Nav.Link href="*" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Favorito</Nav.Link>
                    <Nav.Link href="*" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Carrito</Nav.Link>
                  </>
                  : token && role === 'admin'
                  ?
                  <>
                    <Nav.Link href="/AdminPacientes" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Pacientes</Nav.Link>
                    <Nav.Link href="/adminTurnos" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Turnos</Nav.Link>
                  </>
                  :
                  <>
                    <Nav.Link href="/We" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Sobre Nosotros</Nav.Link>
                    <Nav.Link href="/Plans" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Planes</Nav.Link>
                    <Nav.Link href="/Products" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Productos</Nav.Link>
                    <Nav.Link href="*" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Profesionales</Nav.Link>
                  </>
                }
              </Nav>
              {
                token && role 
                ?
                <Nav className="ms-auto">
                  <Nav.Link href="#" 
                  className='fuente-navbar' 
                  style={{ fontSize: '20px', color: 'black' }} onClick={singOff}>
                    Cerrar Sesion
                  </Nav.Link>
                </Nav> 
                :
                <Nav className="ms-auto">
                <Nav.Link href="/Login" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }}>Iniciar Sesion</Nav.Link>
                <Nav.Link href="/Register" className='fuente-navbar' style={{ fontSize: '20px', color: 'black' }} >Registrarse</Nav.Link>
                </Nav>
              }
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
  
  export default NavbarC
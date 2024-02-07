import '../css/LoginC.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Col, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'

function LoginC() {
  const [ formValues, setFormValues ] = useState({
    email: '',
    pass: ''
  })

  const handleChange = (ev) =>{
    setFormValues({...formValues, [ev.target.name]: ev.target.value})
  }

  const handleClick = async(ev) => {
    ev.preventDefault()
    if(!formValues.email || !formValues.pass){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algún campo esta vacio!"
      });
    }else{
      const sendFormLogin = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          emailUsuario: formValues.email,
          contrasenia: formValues.pass
        })
      })

      const data = await sendFormLogin.json()
      console.log(data)
      if(data.role === 'admin'){
        sessionStorage.setItem('token', JSON.stringify(data.token))
        sessionStorage.setItem('role', JSON.stringify(data.role))
        sessionStorage.setItem('usuario', JSON.stringify(data.usuario))
        location.href = '/admin'
      }else{
        sessionStorage.setItem('token', JSON.stringify(data.token))
        sessionStorage.setItem('role', JSON.stringify(data.role))
        sessionStorage.setItem('usuario', JSON.stringify(data.usuario))
        location.href = '/user'
      }
      
    }
  }

  return (
    <>
      <Container fluid className='container-reg'>
        <Row className='Row-reg'>
          <Col className='col-left'>
            <Link to={'/'} className='btn-login' style={{textDecoration: 'none'}}>
              <button className='link-home'>
                Pagina Principal
              </button>
            </Link>
            <Form className='form-reg' >
              <div className='div-reg'>
                <img src="https://cdn-icons-png.flaticon.com/512/74/74472.png" 
                alt="" 
                width={30}
                height={30}
                style={{margin: '2px'}}/>
                <Form.Group controlId="formNombre">
                  <Form.Control type="email" name='email' value={formValues.email} onChange={handleChange} placeholder="Mail" />
                </Form.Group>
              </div>
              <div className='div-reg'>
                <img src="https://cdn-icons-png.flaticon.com/512/63/63541.png" 
                alt="" 
                width={25}
                height={25}
                style={{margin: '2px'}}/>
                <Form.Group controlId="formPassword">
                  <Form.Control type="password" name='pass' value={formValues.pass} onChange={handleChange} placeholder="Contraseña" />
                </Form.Group>
              </div>
              <div className='div-p'>
                <p>No tienes cuenta? </p>
                <Link to={'/Register'}>
                  Registrate
                </Link>
              </div>
              <Button variant="primary" type="submit" onClick={handleClick} className='btn-reg' 
              style={{fontSize: '18px', width: '140px'}}>
                Iniciar Sesion
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
    
  );
}
export default LoginC 
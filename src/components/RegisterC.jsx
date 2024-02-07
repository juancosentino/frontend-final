import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Col, Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'
import '../css/RegisterC.css'
import Swal from 'sweetalert2';

const RegisterC = () => {
  const [ formValues, setFormValues ] = useState({
    user: '',
    email: '',
    pass: '',
    rpass: ''
  })

  const handleChange = (ev) =>{
    setFormValues({...formValues, [ev.target.name]: ev.target.value})
  }

  const handleClick = async(ev) =>{
    ev.preventDefault()
    console.log(formValues)
    const { user, email, pass, rpass } = formValues

    if(!user || !email || !pass || !rpass){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algún campo esta vacio!"
      });
    }else if(pass === rpass){
      
      const sendFormRegister = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
          body: JSON.stringify({
            nombreUsuario: user,
            emailUsuario: email,
            contrasenia: pass
         })
      })

      const data = await sendFormRegister.json()
      
      if(data){
        Swal.fire({
          title: "Registro exitoso. Bienvenido@!",
          /* text: "You clicked the button!", */
          icon: "success"
        });
      }

    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden!"
      });
    }
  }

  return (
    <>
        <Container fluid className='container-reg'>
        <Row className='Row-reg'>
          <Col className='col-left'>
            <Link to={'/'} className='link-home'>
              Pagina Principal
            </Link>
            <Form className='form-reg' >
              <div className='div-reg'>
                <img src="https://cdn-icons-png.flaticon.com/512/74/74472.png" 
                alt="" 
                width={30}
                height={30}
                style={{margin: '2px'}}/>
                <Form.Group controlId="formNombre">
                  <Form.Control type="text" name='user' value={formValues.user} 
                  onChange={handleChange} 
                  placeholder="Usuario" />
                </Form.Group>
              </div>
              <div className='div-reg'>
                <img src="https://cdn-icons-png.flaticon.com/512/761/761755.png" 
                alt="" 
                width={30}
                height={30}
                style={{margin: '2px'}}/>
                <Form.Group controlId="formCorreo">
                  <Form.Control type="text" name='email' value={formValues.mail} 
                  onChange={handleChange} 
                  placeholder="Mail" />
                </Form.Group>
              </div>
              <div className='div-reg'>
                <img src="https://cdn-icons-png.flaticon.com/512/63/63541.png" 
                alt="" 
                width={25}
                height={25}
                style={{margin: '2px'}}/>
                <Form.Group controlId="formPassword">
                  <Form.Control type="password" name='pass' value={formValues.pass} 
                  onChange={handleChange} 
                  placeholder="Contraseña" />
                </Form.Group>
              </div>
              <div className='div-reg'>
                <img src="https://cdn.icon-icons.com/icons2/629/PNG/512/lock-outlined-padlock-symbol-for-security-interface_icon-icons.com_57803.png" 
                alt="" 
                width={25}
                height={25}
                style={{margin: '2px'}}/>
                <Form.Group controlId="formRPassword">
                  <Form.Control type="password" name='rpass' value={formValues.rpass} 
                  onChange={handleChange} 
                  placeholder="Repetir Contaseña" />
                </Form.Group>
              </div>
              <Button variant="primary" type="submit" onClick={handleClick} className='btn-reg'>
                Enviar
              </Button>
            </Form>
          </Col>
          <Col className='col-right'>
            <h2>¡Bienvenido a nuestra comunidad! Estamos encantados de tenerte con nosotros. 
              Regístrate y descubre todo lo que tenemos preparado para ti. 
              ¡Esperamos que tu experiencia sea increíble!
            </h2>
            <img src="https://www.colvetrionegro.com.ar/wp-content/uploads/2020/04/dog-vet-1536x1025.png" 
            alt="" 
            width={400}/>
            <p>Listo para ser miembro?</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RegisterC
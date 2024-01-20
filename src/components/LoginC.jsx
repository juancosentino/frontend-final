import React from 'react'
import '../css/LoginC.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function LoginC() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log('Correo:', email, 'Contraseña:', password);
  };

  return (
    <>
      <div className='body'>
      <section className='left-section'>
        <div className='welcome'>
          <h2>¡Bienvenido al refugio del bienestar animal!,</h2>
          <p>Aquí, cada ronroneo 
          y ladrido es una canción de alegría. Permítenos ser parte del viaje 
          de cuidado y felicidad de tus queridos amigos peludos.</p>
          <img  className='imgLogin' src="https://cdn-icons-png.flaticon.com/512/7019/7019169.png" 
          alt=""/>
        </div>
      </section>
      <section className='right-section'>
        <Form className='formLogin' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </section>
    </div>
    </>
    
  );
}

/* const LoginC = () => {


  return (
    <div className='body'>
      <section className='left-section'>
        <div className='welcome'>
          <h2>¡Bienvenido al refugio del bienestar animal!,</h2>
          <p>Aquí, cada ronroneo 
          y ladrido es una canción de alegría. Permítenos ser parte del viaje 
          de cuidado y felicidad de tus queridos amigos peludos.</p>
        </div>
      </section>
      <section className='right-section'>
        
      </section>
    </div>
  );
};
 */

export default LoginC 
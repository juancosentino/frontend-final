import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import "../css/TurnosC.css"

const TurnoC = () => {
  const [formData, setFormData] = useState({
    nombreDueño: '',
    email: '',
    telefono: '',
    nombreMascota: '',
    especie: '',
    raza: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleClick = async(ev) =>{
    ev.preventDefault()
    console.log(formData)
    const { nombreDueño, email, telefono, nombreMascota, especie, raza } = formData

    if(!nombreDueño || !email || !telefono || !nombreMascota || !especie || !raza){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algún campo esta vacio!"
        });
    }else{
        const sendFormTurnos = await fetch('http://localhost:3001/api/pacientes', {
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
              body: JSON.stringify({
                dueño: nombreDueño,
                email: email,
                telefono: telefono,
                mascota: nombreMascota,
                especie: especie,
                raza: raza
            })
        })

        const data = await sendFormTurnos.json()

        if(data){
            Swal.fire({
              title: "Turno solicitado!",
              text: "Recibiras un mail con los datos de tu turno!", 
              icon: "success"
            });

            setTimeout(() => {
                location.href = '/user'
            }, 2500)
        }
    }
  }

  return (
    <div className='div-turnos'>
        <h2 className='fuente-turnos titulo-turnos'>Solicitar Turno</h2>
        <Form className='form-turnos'>
            <h3 className='fuente-turnos'>Informacion del Dueño</h3>

            <Form.Group >
            <Form.Control
                className='inputs-turnos'
                type="text"
                placeholder="Nombre del dueño"
                name="nombreDueño"
                onChange={handleChange}
            />
            </Form.Group>

            <Form.Group>
            <Form.Control
                className='inputs-turnos'
                type="text"
                placeholder="Mail"
                name="email"
                onChange={handleChange}
            />
            </Form.Group>

            <Form.Group>
            <Form.Control
                className='inputs-turnos'
                placeholder="Teléfono"
                type='text'
                name="telefono"
                onChange={handleChange}
            />
            </Form.Group>

            <h3 className='fuente-turnos'>Informacion de la Mascota</h3>
            <Form.Group>
            <Form.Control
                className='inputs-turnos'
                placeholder='Nombre de la mascota'
                type="text"
                name="nombreMascota"
                onChange={handleChange}
            />
            </Form.Group>

            <Form.Group>
            <Form.Control
                className='inputs-turnos'
                type="text"
                name="especie"
                placeholder='Especie'
                onChange={handleChange}
            />
            </Form.Group>

            <Form.Group>
            <Form.Control
                className='inputs-turnos'
                type="text"
                name="raza"
                placeholder='Raza'
                onChange={handleChange}
            />
            </Form.Group>

            <Button variant="primary" 
            onClick={handleClick} 
            type="submit"
            className='btn-turnos'>
            Solicitar Turno
            </Button>

        </Form>
    </div>
  );
};

export default TurnoC;

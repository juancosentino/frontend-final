import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";

const AdminTurnos = () => {
  const [turnos, setTurnos] = useState([]);

  const getAllTurnos = async () => {
      try {
          const response = await fetch('http://localhost:3001/api/turnos');
          const data = await response.json();
          setTurnos(data);
          console.log(data);
      } catch (error) {
          console.error('Error fetching pacientes:', error);
      }
  };

  useEffect(() => {
      getAllTurnos();
  }, []);

  const [user, setUser] = useState({})

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (pacienteData) => {
      setShow1(true);
      console.log(pacienteData)
      setUser(pacienteData)
  }

  const handleClick1 = async(ev) =>{
      ev.preventDefault()
      console.log(user)
      const deletePaciente = await fetch(`http://localhost:3001/api/turnos/${user._id}`,{
          method: 'DELETE',
          headers:{
              'content-type':'application/json' 
          } 
      })

      if(deletePaciente){
          Swal.fire({
              title: "Paciente Eliminado!",
              icon: "success"
          });

          setTimeout(() => {
              location.href = '/admin'
          }, 2500)
      }else{
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "El paciente no se pudo eliminar!"
          });
      }
  }

  /* const handleClick2 = async (ev) => {
    ev.preventDefault();
    
    try {
        const deleteAllTurnos = await fetch('http://localhost:3001/api/turnos', {
            method: 'DELETE',
            headers: {    
                'content-type': 'application/json'
            },
            body: JSON.stringify(getAllTurnos)
        });

        if (deleteAllTurnos.ok) {
            Swal.fire({
                title: "Todos los turnos han sido eliminados!",
                icon: "success"
            });

            // Actualizar la lista de turnos después de eliminar todos
            getAllTurnos();
        } else {
            // Manejar errores específicos si es necesario
            const errorMessage = await deleteAllTurnos.json();
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage.message || "Error al eliminar todos los turnos"
            });
        }
    } catch (error) {
        // Manejar errores generales
        console.error('Error en la solicitud DELETE para eliminar todos los turnos:', error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Hubo un error al procesar la solicitud para eliminar todos los turnos."
        });
    }
}; */

  return (
      <>
          <div className="d-flex align-items-center mt-3" style={{height: '56vh', display:'flex', flexDirection:'column'}}>
              <Table striped bordered hover className="w-50" style={{height: '10px'}}>
                  <thead>
                      <tr>
                          <th>N°</th>
                          <th>Dueño</th>
                          <th>Email</th>
                          <th>Teléfono</th>
                          <th>Mascota</th>
                          <th>Fecha</th>
                          <th>Hora</th>
                          <th>Editar/Eliminar</th>
                      </tr>
                  </thead>
                  <tbody>
                      {turnos.map((turno, index) => (
                          <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{turno.dueño}</td>
                              <td>{turno.detalle}</td>
                              <td>{turno.veterinario}</td>
                              <td>{turno.mascota}</td>
                              <td>{turno.fecha}</td>
                              <td>{turno.hora}</td>
                              <td>
                                  <Button variant="danger" onClick={() => handleShow1(turno)} className="my-2">
                                      Eliminar
                                  </Button>

                                  <Modal show={show1} onHide={handleClose1}>
                                      <Modal.Header closeButton>
                                          <Modal.Title>Eliminar Paciente</Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                          <Form style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                              <h3 style={{marginBottom: '20px'}}>Estas seguro de eliminar el paciente?</h3>
                                              <img src="https://i.pinimg.com/474x/04/5e/13/045e13bff9255ba5aa434b55bf22d3cf.jpg" 
                                              alt="" 
                                              style={{width:'100px',  borderRadius:'10px', marginBottom:'10px'}}/>
                                              <Button variant="primary" onClick={handleClick1} type="submit" style={{width:'200px'}}>
                                                  Estoy seguro
                                              </Button>
                                          </Form>
                                      </Modal.Body>
                                  </Modal>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </Table>
             {/*  <Button variant="danger" style={{width:'300px'}} onClick={handleClick2}>
                Eliminar Todos los turnos
              </Button> */}
          </div>
      </>
  );
};

export default AdminTurnos
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Swal from "sweetalert2";

const AdminPacientes = () => {
    const [pacientes, setPacientes] = useState([]);

    const getAllPacientes = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/pacientes');
            const data = await response.json();
            setPacientes(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching pacientes:', error);
        }
    };

    useEffect(() => {
        getAllPacientes();
    }, []);

    const [show, setShow] = useState(false);

    const [user, setUser] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = (pacienteData) => {
        setShow1(true);
        console.log(pacienteData)
        setUser(pacienteData)
    }

    const [ formValues, setFormValues ] = useState({
        dueño: '',
        detalle: '',
        veterinario: '',
        mascota: '',
        fecha: '',
        hora: ''
    })
    
    const handleChange = (ev) =>{
        setFormValues({...formValues, [ev.target.name]: ev.target.value})
    }
    
    const handleClick = async(ev) =>{
        ev.preventDefault()
        console.log(formValues)
        const { dueño, detalle, veterinario, mascota, fecha, hora } = formValues
    
        if(!dueño || !detalle || !veterinario || !mascota || !fecha || !hora){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algún campo esta vacio!"
          });
        }else{
          
          const sendFormTurno = await fetch('http://localhost:3001/api/turnos', {
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
              body: JSON.stringify({
                dueño: dueño,
                detalle: detalle,
                veterinario: veterinario,
                mascota: mascota,
                fecha: fecha,
                hora: hora
             })
          })
    
          const data = await sendFormTurno.json()
          
          if(data){
            Swal.fire({
              title: "Turno otorgado con exito!",
              text: "Tarea realizada con exito!",
              icon: "success"
            });

            setTimeout(() => {
                location.href = '/AdminPacientes'
            }, 2000)

          }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El turno no se puedo otorgar!"
            });
          }
    
        }
    }

    const handleClick1 = async(ev) =>{
        ev.preventDefault()
        console.log(user)
        const deletePaciente = await fetch(`http://localhost:3001/api/pacientes/${user._id}`,{
            method: 'DELETE',
            headers:{
                'content-type':'application/json' 
            } 
        })

        if(deletePaciente){
            Swal.fire({
                title: "Paciente Eliminado!",
                /* text: "Recibiras un mail con los datos de tu turno!", */ 
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

    return (
        <>
            <div className="d-flex justify-content-center mt-3" style={{height: '56vh'}}>
                <Table striped bordered hover className="w-50" style={{height: '10px'}}>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Dueño</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Mascota</th>
                            <th>Editar/Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map((paciente, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{paciente.dueño}</td>
                                <td>{paciente.email}</td>
                                <td>{paciente.telefono}</td>
                                <td>{paciente.mascota}</td>
                                <td>
                                    <Button variant="warning" onClick={handleShow} className="my-2">
                                        Turno
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                        <Modal.Title>Otorgar Turno</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" >
                                                    <Form.Control type="text" onChange={handleChange} name="dueño" placeholder="Dueño" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Control type="text" onChange={handleChange} name="detalle" placeholder="Detalle de la cita" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Control type="text" onChange={handleChange} name="veterinario" placeholder="Veterinario" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Control type="text" onChange={handleChange} name="mascota" placeholder="Mascota" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" >  
                                                    <Form.Control type="date" onChange={handleChange} name="fecha" placeholder="Fecha" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" >
                                                    <Form.Control type="time" onChange={handleChange} name="hora" placeholder="Hora" />
                                                </Form.Group>
                                                <Button variant="primary" onClick={handleClick} type="submit">
                                                    Conceder turno
                                                </Button>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>
                                    
                                    <Button variant="danger" onClick={() => handleShow1(paciente)} className="my-2">
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
            </div>
        </>
    );
};

export default AdminPacientes;

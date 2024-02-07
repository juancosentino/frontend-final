import { useEffect, useState } from "react";
import '../css/DoctorC.css';
import { Container, Row, Col } from 'react-bootstrap';

const DoctorC = () => {
  const [doctores, setDoctores] = useState([]);

  const getAllDoctores = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/prof');
      const data = await response.json();

        // Verificamos si la respuesta contiene un array llamado 'doctores'
      if (Array.isArray(data.doctores)) {
        // Ordenamos el array de manera aleatoria
        const doctoresAleatorios = data.doctores.sort(() => Math.random() - 0.5);
                
        // Tomamos los primeros 4 doctores
        setDoctores(doctoresAleatorios.slice(0, 4));
      } else {
        console.error('La respuesta de la API no contiene un array "doctores":', data);
      }
      }catch (error) {
      console.error('Error al obtener datos de la API', error);
    }
  }

  useEffect(() => {
    getAllDoctores();
  }, []);

  return (
    <Container /* className="ContainerHomePage" */>
      <Row>
        {doctores.map((doctor, index) => (
          <Col key={index} sm={12} md={6} lg={3} className="col-doc">
            <div className="Div-Doc">
              <h2 style={{marginTop: '9px'}}>Dr. {doctor.apellido}</h2>
              <h2>{doctor.especialidad}</h2>
              {/* <h2>{doctor.correo}</h2> */}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DoctorC;



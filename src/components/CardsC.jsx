
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/CardsC.css"

const CardsC = ({ imagen, descripcion, precio, titulo, idProduct }) => {
  return (
    <div className='mi-card-container'>
      <Card style={{ width: '15rem', borderRadius: '15px', border: '2px solid #00507A' }} className='mi-card'>
        <Card.Img variant="top" src={imagen} style={{ height: '200px', objectFit: 'contain', borderRadius: '25px' }} />
        <Card.Body className='bodyCard'>
          <Card.Title className='tipo-letra'>{titulo}</Card.Title>
          <Card.Text className='tipo-letra'>{/* Precio: */}${precio}</Card.Text>
          <Link to={`/Product/${idProduct}`} className='btn-home tipo-letra'>
            <Button variant="" block>
              Ver Más
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
    
  )
}

export default CardsC
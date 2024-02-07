import CardsC from "../components/CardsC";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../css/CategoriasC.css';

const ProductsDestC = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const getProducts = await fetch('http://localhost:3001/api/products');
      const data = await getProducts.json();

      // Verificamos si la respuesta contiene un array llamado 'getAllProducts'
      if (Array.isArray(data.getAllProducts)) {
        // Ordenamos el array de manera aleatoria
        const productsAleatorios = data.getAllProducts.sort(() => Math.random() - 0.5);
                
        // Tomamos los primeros 4 productos
        setProducts(productsAleatorios.slice(0, 4));
      } else {
        console.error('La respuesta de la API no contiene un array "getAllProducts":', data);
      }
    } catch (error) {
      console.error('Error al obtener datos de la API', error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container className="ContainerHomePage">
      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={12} md={6} lg={3} className="mb-3 Col-Des">
            <CardsC
              imagen={product.imagen}
              titulo={product.titulo}
              precio={product.precio}
              descripcion={product.descripcion}
              idProduct={product._id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsDestC;

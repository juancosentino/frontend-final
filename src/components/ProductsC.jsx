import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import CardsC from './CardsC';
import "../css/ProductsC.css"

const ProductsC = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const getAllProducts = async () => {
    try {
      const getProducts = await fetch('http://localhost:3001/api/products');
      const data = await getProducts.json();
      setProducts(data.getAllProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Calcula el índice del último producto en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  // Calcula el índice del primer producto en la página actual
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Obtiene los productos para la página actual
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambia la página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="ContainerHomePage contenedor-products">
      <Row>
        {currentProducts.map((product, index) => (
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
      <Pagination className='paginacion-products'>
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
        </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default ProductsC;

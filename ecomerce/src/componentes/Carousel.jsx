import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const Carousel = () => { 
  const [productoData, setProductoData] = useState([]);
  
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4200/Producto/');
        console.log(response.data);
        setProductoData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducto();
  }, []);

  return (
    <div className="carousel" style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        width: '100%', 
        height: '100%', 
        margin: '10px'
    }}>
      {productoData.map((producto, index) => (
        <Card key={index} style={{ width: '18rem', margin: '0 20px' }}>
          <Card.Img variant="top" src="img.jpg" />
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>{producto.descripcion}</Card.Text>
            <Card.Text>{producto.precio}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Carousel;





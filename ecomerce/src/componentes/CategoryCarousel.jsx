import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CategoryCarousel = () => {
  const [categoriaData, setCategoriaData] = useState([]);

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4200/categoria/');
        console.log(response.data);
        setCategoriaData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCategoria();
  }, []);

  const categorias = categoriaData.map(item => item.categoria);

  return (
    <div style={{ width: '100%', height: '200px', overflow: 'hidden', padding: '1em' }}>
      <h1>{categorias.nombre}</h1>
      <h1>hola como estan</h1>
      <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true}>
        {categoriaData.map((categoria , index) => (
          <div key={index}>
            <img src="https://via.placeholder.com/400" alt="placeholder" style={{ width: '100%', height: '200px' }} />
            <p className="legend">{categoria.nombre}</p>
            <h1>hola como estan</h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;


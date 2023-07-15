import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
  {categoriaData.length > 0 ? (
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} autoPlay={true}>
      {categoriaData.map((categoria, index) => (
        <div key={index}>
          <h1 style={{ fontSize: '30px' }}>{categoria.Nombre}</h1>
          <br/>
        </div>
      ))}
    </Carousel>
    ) : (
        <h1 style={{ fontSize: '30px' }}>Loading...</h1>
      )}
    </div>

  );
}

export default CategoryCarousel;



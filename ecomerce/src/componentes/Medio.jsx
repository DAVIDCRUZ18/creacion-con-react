import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import carrucel_motos  from './imagenes/carrucel_motos.jpg';
import moto1  from './imagenes/moto1.jpg';
import imagen2 from './imagenes/imagen2.jpg';

export const Medio = () => {
  return (
    <div>
        <div className="mb-6">
            <img className="img-fluid mb-3" src={carrucel_motos} alt="portada" width="20%" height="10px" />
        </div>
        <div>
            
        </div>
        <Container className="mt-3 mb-5">
            {/* Contenido de tu componente */}
        </Container>

        <Carousel className="mb-3">
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={moto1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50"
              src={imagen2}
              alt="Second slide"
            />

        <Carousel.Caption>
            <img className="d-block w-50"
              src={moto1}
              alt="Second slide"
            />
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Añade más Carousel.Item para más imágenes */}
        </Carousel>
    </div>
  )
}

export default Medio;
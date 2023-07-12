import React, { useState } from 'react';

const Carousel = ({ nombre,nombre2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? nombre.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === nombre.length - 1 ? 0 : prevIndex + 1));
  };
  

  return (
    
    <div className="carousel">
      <button onClick={goToPrevious}>&lt;</button>

      <h2>{nombre[currentIndex]}</h2>
      <h2>{nombre2[currentIndex]}</h2>
      
      <button onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default Carousel;

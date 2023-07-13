import React, { useState, useEffect } from "react";

const ImagenesComponent = () => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:/api/images/")
      .then((response) => response.json())
      .then((data) => setImagenes(data));
  }, []);

  return (
    <div>
      {imagenes.map((imagen) => (
        <div key={imagen.id}>
          <img src={imagen.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImagenesComponent;
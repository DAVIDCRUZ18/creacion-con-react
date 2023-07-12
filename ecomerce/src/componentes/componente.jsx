import React, { useState } from 'react';
import axios from 'axios';


export const Componente = () => {
  const [productos, setProductos] = useState([]);

  function llamarApi() {
    axios.get('http://127.0.0.1:4200/Producto/')
      .then(respuesta => {
        console.log(respuesta.data);
        setProductos(respuesta.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>
      <Carousel imagen={imagen} />
      <div>
        {productos.length !== 0 && productos[0].nombre}
        <button onClick={llamarApi}>Activar API</button>
      </div>
    </div>
  );
};

export default Componente;
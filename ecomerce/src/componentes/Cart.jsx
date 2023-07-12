import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cart({ cartItems }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    llamarApi();
  }, []);

  function llamarApi() {
    axios.get('http://127.0.0.1:4200/Producto/')
      .then(respuesta => {
        console.log(respuesta.data);
        setProductos(respuesta.data);
      })
      .catch(error => {
        console.error(error);
        setError('Hubo un error al cargar los datos del producto.');
      });
  }

  return (
    <div>
      <div>
        {error && <p>{error}</p>}
        {productos.length !== 0 && productos[0].nombre}
        <button onClick={llamarApi}>Activar API</button>
      </div>
      {cartItems.map(item => (
        <div key={item.product.id}>
          <p>{item.product.name}</p>
          <p>{item.count}</p>
          {/* You could add a "Remove" button here */}
        </div>
      ))}
    </div>
  );
}

export default Cart;


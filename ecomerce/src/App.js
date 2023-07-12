import React, { useState, useEffect } from 'react';
import  Carousel  from './componentes/Carousel';
import  Footer  from  './componentes/Footer' ;
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import  Cart  from './componentes/Cart';
import Header from './componentes/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Medio from './componentes/Medio';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'



const App = () => {
  const [nombres, setImages] = useState([]);
  const [descripcion, setImages1] = useState([]);
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:4200/Producto/');
      console.log(response.data);
      const nombres = []
      response.data.map(nombre => nombres.push(nombre.nombre));
      setImages(nombres);
      console.log(nombres);
      const descripciones = []
      response.data.map(descripcion => descripciones.push(descripcion.descripcion));
      setImages1(descripciones);
      console.log(descripciones);
    } catch (error) {
      console.error(error);
    }
  }



  return (
    <div className="app">
      <Header />
      
      <Carousel nombre={nombres} nombre2={descripcion}  />

      <Medio />

      <Medio/>
      
      <Footer />

    </div>
  );
};

export default App;
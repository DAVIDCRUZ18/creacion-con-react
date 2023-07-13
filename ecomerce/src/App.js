import React, { useState, useEffect } from 'react';
import  Carousel  from './componentes/Carousel';
import  Footer  from  './componentes/Footer' ;
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Tabla from './componentes/Tabla';
import Header from './componentes/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Medio from './componentes/Medio';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import CategoryCarousel from './componentes/CategoryCarousel';


const App = () => {
  return (
    <div className="app">
      <Header />
      <Carousel />
      <CategoryCarousel/>
      <Medio />
      
      <Medio />
      
      <div>
      <Tabla/>
      </div>
      
      <Footer />

    </div>
  );
};

export default App;
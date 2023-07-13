import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Tabla = () => {
  const [motosData, setMotosData] = useState([]);
  
  useEffect(() => {
    const fetchMoto = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4200/Moto/');
        console.log(response.data);
        setMotosData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMoto();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
      <MDBTable small>
        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Clase</th>
            <th scope='col'>Modelo</th>
            <th scope='col'>Año</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {motosData.map((moto, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{moto.clase}</td>
              <td>{moto.modelo}</td>
              <td>{moto.ano}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Tabla;



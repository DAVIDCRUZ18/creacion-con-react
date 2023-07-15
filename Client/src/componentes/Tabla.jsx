import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Tabla = () => {
  const [motosData, setMotosData] = useState([]);

  useEffect(() => {
    const fetchMoto = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:4200/Moto/');
        if (response.status !== 200) {
          console.error('Error: API response status is', response.status);
          return;
        }
        console.log(response.data);
        setMotosData(response.data);
      } catch (error) {
        console.error('Network error:', error);
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
            <tr key={moto.id || index}>
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




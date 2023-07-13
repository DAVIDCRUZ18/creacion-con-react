import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function Cart({ cartItems }) {

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Header>Carrito</Card.Header>
        <ListGroup variant="flush">
          {cartItems.map(item => (
            <ListGroup.Item key={item.product.id}>
              <p>{item.product.name}</p>
              <p>Cantidad: {item.count}</p>
              {/* You could add a "Remove" button here */}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default Cart;



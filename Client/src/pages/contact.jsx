import React from "react";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // implement form submission logic here
  };

  return (
    <Container className="mt-5 py-3">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 className="text-center mb-4">Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" name="message" required />
            </Form.Group>
            <br/>
            <Button type="submit" variant="primary">Send</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};


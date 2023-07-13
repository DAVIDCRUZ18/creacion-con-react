import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import moto1  from './imagenes/moto1.jpg';


function Header() {
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">My E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <img
              className="d-block"
              src={moto1}
                alt="First slide"
                style={{ width: "60px" }}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;
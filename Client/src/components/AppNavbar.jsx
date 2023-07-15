import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Navbar, Nav } from "react-bootstrap";
import "./AppNavbar.css";

export const AppNavbar = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="navbar-dark">
      <Navbar.Brand>
        <Link to="/" id="NavTitle" className="custom-link">Lunatiks Bikes</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-center">
          <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active custom-link nav-link" : "custom-link nav-link"}>Shop</Nav.Link>
          <Nav.Link as={Link} to="/contact" className={location.pathname === "/contact" ? "active custom-link nav-link" : "custom-link nav-link"}>Contact</Nav.Link>
          <Nav.Link as={Link} to="/cart" className={location.pathname === "/cart" ? "active custom-link nav-link" : "custom-link nav-link"}>
            <ShoppingCart size={32} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

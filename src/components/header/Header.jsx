import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import Home from '../home/Home'
import { Link } from "react-router-dom";
const move = () => {
  window.scrollTo(0, 0);
};
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link
        } to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link as={Link} to ="/addproduct">addproduct</Nav.Link>
            <Nav.Link as={Link} to ="/updateproduct">updateproduct</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

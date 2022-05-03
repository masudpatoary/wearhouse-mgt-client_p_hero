import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" variant="pills" defaultActiveKey="/home">
              <Nav.Link eventKey="link-1" as={Link} to="home">Home</Nav.Link>
              <Nav.Link eventKey="link-2" as={Link} to="register">Register</Nav.Link>
              <Nav.Link eventKey="link-3" as={Link} to="login">Log In</Nav.Link></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

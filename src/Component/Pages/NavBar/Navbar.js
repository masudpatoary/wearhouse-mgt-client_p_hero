import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const NavBar = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="home">Core Inventory</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" variant="pills" defaultActiveKey="/home">
              <Nav.Link eventKey="link-1" as={Link} to="home" className="ms-md-3 my-1">Home</Nav.Link>
              <Nav.Link eventKey="link-2" as={Link} to="blogs" className=" my-1">Blogs</Nav.Link>
              {
                user ?
                  <>
                    <Nav.Link eventKey="link-3" as={Link} to="manageinventories" className=" my-1">Manage-Inventories</Nav.Link>
                    <Button eventKey="link-4" onClick={handleSignOut} variant="outline-primary" className=" ms-md-3 my-1">Log Out</Button>
                  </>
                  : <>
                    <Nav.Link eventKey="link-5" as={Link} to="login" className=" my-1">Log In</Nav.Link>
                    <Nav.Link eventKey="link-6" as={Link} to="register" className=" my-1">Register</Nav.Link>
                  </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

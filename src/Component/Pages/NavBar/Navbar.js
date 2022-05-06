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
              <Nav.Link eventKey="link-1" as={Link} to="home">Home</Nav.Link>

              {
                user ?
                  <>
                    <Nav.Link eventKey="link-2" as={Link} to="inventories">Inventories</Nav.Link>
                    <Nav.Link eventKey="link-3" as={Link} to="abc">abc</Nav.Link>
                  </>
                  :
                  <>
                    
                  </>

              }

              {
                user ?
                  <Button onClick={handleSignOut} variant={'primary'} className="ms-3">Log Out</Button>
                  :
                  <>
                    <Nav.Link eventKey="link-3" as={Link} to="login">Log In</Nav.Link>
                    <Nav.Link eventKey="link-2" as={Link} to="register">Register</Nav.Link>
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

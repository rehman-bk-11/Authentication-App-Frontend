import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><strong>Not LoggedIn</strong></Navbar.Brand>
          <Nav className="nl-auto"> 
            <Nav.Link as={Link} to="/login" className='navbar-link'>Login</Nav.Link> 
            <Nav.Link as={Link} to="/register" className='navbar-link'>Signup</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

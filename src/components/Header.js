import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-black header'>    
      <Navbar expand="lg"  className="navbar-dark">
        <Container className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              alt=""
              src="./qutlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top logoImage logo-spacing"
            />
            QUT Japan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className='d-flex '>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About us</Nav.Link>
              <Nav.Link as={Link} to="/sponsor">Sponsors</Nav.Link>
              <Nav.Link as={Link} to="/event">Events</Nav.Link>
              <Nav.Link as={Link} to="/snapshot">Snapshots</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

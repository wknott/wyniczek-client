import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
function Menu() {
  return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/" href="#">Wyniczek</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/create" href="#">Stwórz Wynik</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}
export default Menu;
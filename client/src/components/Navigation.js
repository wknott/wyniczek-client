import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

function Navigation({isAuthenticated, handleLogout}) {
  return(
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/" href="#">Wyniczek</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/games" href="#">Gry</Nav.Link>
          <Nav.Link as={Link} to="/createresult" href="#">Nowy wynik</Nav.Link>
        </Nav>
        {isAuthenticated
          ? <NavItem onClick={handleLogout}>Logout</NavItem>
          : <>
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/users" href="#">Nowy użytkownik</Nav.Link>
                <Nav.Link as={Link} to="/signup" href="#">Logowanie</Nav.Link>
              </Nav>
            </>
        }
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
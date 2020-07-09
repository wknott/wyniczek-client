import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navigation({ isAuthenticated, handleLogout }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/" href="#">
        Wyniczek
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {isAuthenticated ?
            <>
              <Nav.Link as={Link} to="/gry" href="#">
                Gry
              </Nav.Link>
              <Nav.Link as={Link} to="/nowy-wynik" href="#">
                Nowy wynik
              </Nav.Link>
              <Nav.Link as={Link} to="/uzytkownicy" href="#">
                Użytkownicy
              </Nav.Link>
            </> : <></>}
          <Nav.Link as={Link} to="/statystyki-gier" href="#">
            Statystyki gier
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {isAuthenticated ? (
            <Nav.Link onClick={handleLogout}>Wyloguj</Nav.Link>
          ) : (
              <>
                <Nav.Link as={Link} to="/rejestracja" href="#">
                  Rejestracja
              </Nav.Link>
                <Nav.Link as={Link} to="/logowanie" href="#">
                  Logowanie
              </Nav.Link>
              </>
            )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

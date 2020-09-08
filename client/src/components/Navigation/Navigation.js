import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectAuth, handleLogout } from "../../authSlice";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const { isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/" href="#">
        Wyniczek
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {isAuthenticated ?
            <Nav.Link as={Link} to="/nowy-wynik" href="#">
              Nowy wynik
              </Nav.Link>
            : <></>}
          <Nav.Link as={Link} to="/gry" href="#">
            Gry
              </Nav.Link>
          <Nav.Link as={Link} to="/uzytkownicy" href="#">
            Użytkownicy
              </Nav.Link>
          <Nav.Link as={Link} to="/statystyki-gier" href="#">
            Statystyki gier
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {isAuthenticated ? (
            <Nav.Link onClick={() => dispatch(handleLogout())}>Wyloguj</Nav.Link>
          ) : (
              <>
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

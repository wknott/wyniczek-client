import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectAuth, handleLogout } from "../../authSlice";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { toResults, toNewResult, toGames, toUsers, toStats, toLogin } from "../../routes";

const Navigation = () => {
  const { isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand as={Link} to={toResults()} href="#">
        Wyniczek
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {isAuthenticated ?
            <Nav.Link as={Link} to={toNewResult()} href="#">
              Nowy wynik
              </Nav.Link>
            : <></>}
          <Nav.Link as={Link} to={toGames()} href="#">
            Gry
              </Nav.Link>
          <Nav.Link as={Link} to={toUsers()} href="#">
            Użytkownicy
              </Nav.Link>
          <Nav.Link as={Link} to={toStats()} href="#">
            Statystyki gier
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {isAuthenticated ? (
            <Nav.Link onClick={() => dispatch(handleLogout())}>Wyloguj</Nav.Link>
          ) : (
              <>
                <Nav.Link as={Link} to={toLogin()} href="#">
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

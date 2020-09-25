import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { selectAuth, handleLogout } from "../../authSlice";
import { toResults, toNewResult, toGames, toUsers, toStats, toLogin } from "../../routes";
import { StyledNavigation, StyledList, Item, StyledLink, LeftAlignItem, HamburgerItem, MobileList } from "./styled";
import Burger from "./Burger";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const Menu = (
    <>
      {isAuthenticated ?
        <Item onClick={() => setOpen(open => !open)}>
          <StyledLink to={toNewResult()}>
            Nowy wynik
        </StyledLink>
        </Item>
        : <></>}
      <Item onClick={() => setOpen(open => !open)}>
        <StyledLink to={toGames()}>
          Gry
      </StyledLink>
      </Item>
      <Item onClick={() => setOpen(open => !open)}>
        <StyledLink to={toUsers()}>
          Użytkownicy
      </StyledLink>
      </Item>
      <Item onClick={() => setOpen(open => !open)}>
        <StyledLink to={toStats()}>
          Statystyki
      </StyledLink>
      </Item>
      {isAuthenticated ? (
        <LeftAlignItem onClick={() => dispatch(handleLogout())}>
          <StyledLink to="/wyloguj">
            Wyloguj
        </StyledLink>
        </LeftAlignItem>
      ) : (
          <LeftAlignItem onClick={() => setOpen(open => !open)}>
            <StyledLink to={toLogin()}>
              Logowanie
          </StyledLink>
          </LeftAlignItem>
        )
      }
    </>
  );

  return (
    <StyledNavigation>
      <Item>
        <StyledLink to={toResults()}>
          Wyniki
        </StyledLink>
      </Item>
      <StyledList>
        {Menu}
      </StyledList>
      <HamburgerItem>
        <Burger open={open} setOpen={setOpen} />
      </HamburgerItem>
      { open &&
        <MobileList open={open}>
          {Menu}
        </MobileList>
      }
    </StyledNavigation >
  );
}

export default Navigation;

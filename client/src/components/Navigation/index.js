import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, handleLogout } from "../../authSlice";
import { toResults, toNewResult, toGames, toUsers, toStats, toLogin } from "../../routes";
import {
  StyledNavigation, StyledList, Item, StyledLink,
  LeftAlignItem, HamburgerItem, MobileList, Image
} from "./styled";
import Burger from "./Burger";
import { selectOpen, handleClose } from "./navSlice";
import logo from "./logo2.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const open = useSelector(selectOpen);
  const { isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const Menu = (
    <>
      <Item onClick={() => dispatch(handleClose())}>
        <StyledLink to={toResults()}>
          Wyniki
        </StyledLink>
      </Item>
      <Item onClick={() => dispatch(handleClose())}>
        <StyledLink to={toNewResult()}>
          Nowy wynik
        </StyledLink>
      </Item>
      <Item onClick={() => dispatch(handleClose())}>
        <StyledLink to={toGames()}>
          Gry
        </StyledLink>
      </Item>
      <Item onClick={() => dispatch(handleClose())}>
        <StyledLink to={toUsers()}>
          Użytkownicy
        </StyledLink>
      </Item>
      <Item onClick={() => dispatch(handleClose())}>
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
          <LeftAlignItem onClick={() => dispatch(handleClose())}>
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
      <div>
        <NavLink to={toResults()}>
          <Image src={logo} alt="Logo" />
        </NavLink>
      </div>
      <StyledList>
        {Menu}
      </StyledList>
      <HamburgerItem>
        <Burger />
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

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuth, handleLogout } from "../../../authSlice";
import {
  toNewResult,
  toGames,
  toUsers,
  toStats,
  toLogin,
  toResults,
} from "../../../routes";
import {
  StyledNavigation,
  StyledList,
  Item,
  StyledLink,
  LeftAlignItem,
  HamburgerItem,
  MobileList,
  Image,
} from "./styled";
import Burger from "./Burger";
import { selectOpen, handleClose } from "./navSlice";
import logo from "./logo.png";

const Navigation = () => {
  const open = useSelector(selectOpen);
  const { isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const Menu = (
    <>
      {isAuthenticated &&
        <Item onClick={() => dispatch(handleClose())}>
          <StyledLink to={toNewResult()}>
            Nowy wynik
            </StyledLink>
        </Item>
      }
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
        <NavLink to={toResults()} onClick={() => dispatch(handleClose())}>
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

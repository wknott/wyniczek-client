import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuth, handleLogout } from "../../../common/authSlice";
import {
  toNewResult,
  toGames,
  toUsers,
  toLogin,
  toResults,
} from "../../../common/routes";
import {
  StyledNavigation,
  StyledList,
  Item,
  StyledLink,
  LeftAlignItem,
  HamburgerItem,
  MobileList,
  Image,
  ItemName,
} from "./styled";
import Burger from "./Burger";
import { selectOpen, handleClose } from "./navSlice";
import { selectTheme, toggleTheme } from "../../../themeSlice";
import logo from "./logo.png";

const Navigation = () => {
  const open = useSelector(selectOpen);
  const { isAuthenticated } = useSelector(selectAuth);
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const Menu = (
    <>
      {isAuthenticated &&
        <Item as={StyledLink} to={toNewResult()}>
          <ItemName>
            Nowy wynik
          </ItemName>
        </Item>
      }
      <Item as={StyledLink} to={toGames()}>
        <ItemName>
          Gry
        </ItemName>
      </Item>
      <Item as={StyledLink} to={toUsers()}>
        <ItemName>
          Użytkownicy
        </ItemName>
      </Item>
      <LeftAlignItem
        onClick={() => dispatch(toggleTheme())}
      >
        <ItemName>
          Włącz {theme === "light" ? "jasny" : "ciemny"} motyw
        </ItemName>
      </LeftAlignItem>
      {isAuthenticated ? (
        <LeftAlignItem
          as={StyledLink} to={"/wyloguj"}
          onClick={() => dispatch(handleLogout())}
        >
          <ItemName>
            Wyloguj
          </ItemName>
        </LeftAlignItem>
      ) : (
        <LeftAlignItem as={StyledLink} to={toLogin()}>
          <ItemName>
            Logowanie
          </ItemName>
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
      <StyledList onClick={() => dispatch(handleClose())}>
        {Menu}
      </StyledList>
      <HamburgerItem>
        <Burger />
      </HamburgerItem>
      {open &&
        <MobileList open={open} onClick={() => dispatch(handleClose())}>
          {Menu}
        </MobileList>
      }
    </StyledNavigation >
  );
}

export default Navigation;

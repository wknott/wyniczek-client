import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "link-active";

export const StyledNavigation = styled.nav`
  background-color: ${({ theme }) => theme.colors.windsor};
  display: grid;
  grid-template-columns: auto 5fr auto;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    display: grid;
    grid-template-areas: 
      "logo burger"
      "list list";
  }
`;

export const List = styled.ul`
  max-width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  text-transform: uppercase;
`;

export const StyledList = styled(List)`
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const MobileList = styled(List)`
  grid-area: list;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Item = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 20px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: block;
    padding: 10px 20px;
  }
`;

export const LeftAlignItem = styled(Item)`
  margin-left: auto;
`;

export const HamburgerItem = styled(Item)`
  margin-left: auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;
export const StyledLink = styled(NavLink).attrs(() => ({ activeClassName }))`
  &.${activeClassName} {
    font-weight: bold;
  };

  color: ${({ theme }) => theme.colors.white};
`;

export const ItemName = styled.span`
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    border-bottom: 1px solid;
  }
`;

export const Image = styled.img`
  margin: 0px 20px;
  height: 62px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    height: 52px;
  }
`;
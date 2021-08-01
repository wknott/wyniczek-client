import styled from "styled-components";
import StyledLink from "../../../common/StyledLink";
import Header from "../../../common/Header";

export const Container = styled.div`
  width: 100%;
  margin-top: 64px;
  padding: 40px;
  display: grid;
  grid-template-areas: 
    "table table"
    "game details";
  grid-gap: 40px;
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  box-shadow: ${({ theme }) => theme.colors.sectionBackground} 0px 4px 12px;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
    padding: 20px;
    grid-gap: 12px;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "table"
      "details"
      "game";
  };
`;

export const Game = styled.div`
  grid-area: game;
`;

export const TableContainer = styled.div`
  grid-area: table;
`;

export const Details = styled.div`
  grid-area: details;
`;

export const Link = styled(StyledLink)`
  justify-content: center;
  padding: 16px;
`;

export const StyledHeader = styled(Header)`
  grid-column: span 2;
`;
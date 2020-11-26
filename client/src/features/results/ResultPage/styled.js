import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: grid;
  grid-template-areas: 
    "table table table"
    "game details details";
  grid-gap: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 8px;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "table"
      "details"
      "game";
  }
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
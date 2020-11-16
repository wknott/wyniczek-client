import styled from "styled-components";

export const GameTilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, 250px);
  grid-gap: 20px;
  justify-content: center; 

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    grid-template-columns: 250px;
  }
`;

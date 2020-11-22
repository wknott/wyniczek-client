import styled from "styled-components";
import Link from "../../../common/Link";

export const GameTilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, 250px);
  grid-gap: 20px;
  justify-content: space-between; 

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    grid-template-columns: 250px;
  }
`;

export const GamePageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  margin: 24px 0 8px;
`;
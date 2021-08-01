import styled, { css } from "styled-components";
import Tile from "../../../common/Tile";

export const StyledTile = styled(Tile)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.03);
    opacity: 0.9;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
  
  grid-template-columns: 1fr;
  text-align: center;
  justify-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    padding: 16px;
    grid-gap: 8px;
    ${({ small }) => !small && css`
     grid-template-columns: 1fr 2fr;
    `}
  }
`;

export const Image = styled.div`
  padding-top: calc(100% * 100 / 100);
  width: 100%;
  background-image: url("${({ url }) => url}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const GameName = styled.h2`
  margin: 0;
  font-size: 24px;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    font-size: 16px;
    font-weight: 700;
  }
`;

export const StyledParagraph = styled.p`
  margin: 0px;
`;

export const GameDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;
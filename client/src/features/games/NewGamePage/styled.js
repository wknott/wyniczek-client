import styled from "styled-components";
import Tile from "../../../common/Tile";
import Header from "../../../common/Header";

export const GameImage = styled.img`
  width: 100%;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVertical}px){
    max-height: 300px;
    object-fit: contain;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-bottom: 10px;
  grid-template-columns: 1fr 1fr;
`;

export const GameDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTile = styled(Tile)`
  grid-template-columns: 1fr 2fr;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVertical}px){
    grid-template-columns: 1fr; 
  }
`;

export const ErrorMessage = styled.p`
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.brightText};
`;

export const GameHeader = styled(Header)`
  margin: 0;
`;
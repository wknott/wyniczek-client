import styled from "styled-components";
import Tile from "../../../common/Tile";

export const GameImage = styled.img`
  max-width: 400px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    width: 100%;
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
  grid-template-columns: 1fr;
`;

export const ErrorMessage = styled.p`
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
`;
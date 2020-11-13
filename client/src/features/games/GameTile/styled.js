import styled from "styled-components";
import Tile from "../../../common/Tile";

export const StyledTile = styled(Tile)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    opacity: 0.9;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 5px;
  object-fit: contain;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    width: 100px;
  }
`;

export const DefaultImage = styled.img`
  width: 100px;
`;

export const DefaultImageContainer = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameName = styled.h2`
  font-size: 24px;
`;
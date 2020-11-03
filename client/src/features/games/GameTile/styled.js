import styled from "styled-components";

export const Tile = styled.div`
  box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.violet};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 6px;
  padding: 12px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 5px;
  object-fit: contain;
`;

export const DefaultImage = styled.img`
  width: 100px;
`;

export const DefaultImageContainer = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 5px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameName = styled.h2`
  font-size: 32px;
  overflow-wrap: anywhere;
`;
import styled, { css } from "styled-components";
import Button from "../../../common/Button";
import Link from "../../../common/Link";

export const GameTilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat( ${({ numberOfTiles }) => numberOfTiles < 2 ? 2 : "auto-fit"}, minmax(250px, 1fr));
  grid-gap: 20px;
  justify-content: space-between; 

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const GamePageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  margin: 24px 0 14px;
  display: flex;
  align-items: center;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVertical}px){
    font-size: 13px;
    margin: 12px 0 2px;
  }
`;

export const SortButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 10px;
`;

export const SortButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  translate: 0.3s 0.3s;

  ${({ active }) => !active && css`
    outline: none;
    transform: scale(1.03, 1.1);  
    background-color: ${({ theme }) => theme.colors.denim};
`};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVertical}px){
    font-size: 13px;
  }
`;
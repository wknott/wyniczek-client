import { Link } from "react-router-dom";
import styled from "styled-components";
import { TableCell, TableRow } from "../../../../common/Table";

export const Thumbnail = styled.img`
  width: 64px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    width: 48px;
  }
`;

export const TableCellThumbnail = styled(TableCell)`
  padding: 8px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    padding: 4px;
  }
`;

export const Icon = styled.img`
  height: 24px;
  filter: invert(100%);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  &:hover{
    text-decoration: none;
  }
`;

export const DesktopDate = styled.p`
  margin: 0px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    display: none;
  }
`;

export const MobileDate = styled.p`
  margin: 0px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    display: none;
  }
`;

export const ResultRow = styled(TableRow)`
  cursor: pointer;
`;
import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableCell = styled.td`
  background-color: white;
  color: black;
  padding: 16px;
  border: 1px solid black;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    font-size: 12px;
    padding: 8px 4px;
  }
`;

export const TableHead = styled.th`
  padding: 16px;
  border: 1px solid black;
  background-color: ${({ theme }) => theme.colors.violet};
  color: ${({ theme }) => theme.colors.lightText};
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    font-size: 12px;
    padding: 8px 4px;
    font-weight: normal;
  }
  
`;

export const TableRow = styled.tr`

`;
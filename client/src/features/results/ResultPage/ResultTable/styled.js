import styled from "styled-components";
import { Table, TableCell } from "../../../../common/Table";

export const StyledTableCell = styled(TableCell)`
  font-size: 20px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const StyledTable = styled(Table)`
  /* @media(min-width: ${({ theme }) => theme.breakpoints.mobileMax}px ){
    width: auto;
  }; */
`;
import styled from "styled-components";
import { TableCell } from "../../../../common/Table";

export const StyledTableCell = styled(TableCell)`
  font-size: 20px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.amber};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;
import styled from "styled-components";
import Link from "../Link";

export default styled(Link)`
  margin: 24px 0 14px;
  display: flex;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVertical}px){
    font-size: 13px;
    margin: 12px 0 2px;
  }
`;
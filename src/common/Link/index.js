import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px 32px;
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.brightText};
  display: block;
  text-transform: uppercase;
  
  &:hover {
    color: ${({ theme }) => theme.colors.brightText};
    text-decoration: none;
    filter: brightness(110%);
  }
`;
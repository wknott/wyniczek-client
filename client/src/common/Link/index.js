import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
  background-color: ${({ theme }) => theme.colors.windsor};
  padding: 16px 32px;
  font-size: 14px;
  border-radius: 5px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  text-transform: uppercase;
  
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    filter: brightness(110%);
  }
`;
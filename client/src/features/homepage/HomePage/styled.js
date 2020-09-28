import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.violet};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};
  display: block;

  &:hover {
    color: ${({ theme }) => theme.colors.lightText};
    text-decoration: none;
    filter: brightness(110%);
  }
`;
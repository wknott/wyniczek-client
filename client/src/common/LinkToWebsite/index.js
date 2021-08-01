import styled from "styled-components";

export default styled.a`
  display: inline;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    filter: brightness(130%);
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:active {
    filter: brightness(150%);
  }
`;
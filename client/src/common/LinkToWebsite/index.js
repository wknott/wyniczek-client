import styled from "styled-components";

export default styled.a`
  display: inline;
  color: ${({ theme }) => theme.colors.windsor};

  &:hover {
    filter: brightness(130%);
    border-bottom: 1px solid ${({ theme }) => theme.colors.windsor};
  }

  &:active {
    filter: brightness(150%);
  }
`;
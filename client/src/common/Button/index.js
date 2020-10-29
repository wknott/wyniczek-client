import styled from "styled-components";

export default styled.button`
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.violet};
  color: ${({ theme }) => theme.colors.lightText};
  transition: 0.5s;
  border-radius: 5px;

  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(130%);
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.grey};
    &:hover {
      filter: none;
    }

    &:active {
      filter: none;
    }
  }
`;
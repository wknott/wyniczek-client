import styled from "styled-components";

export default styled.button`
  padding: 10px;
  border: none;
  background-color: ${({ theme }) => theme.colors.windsor};
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  
  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(130%);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.alto};
    color: ${({ theme }) => theme.colors.grey};
    cursor: not-allowed;

    &:hover {
      filter: none;
    }

    &:active {
      filter: none;
    }
  }
`;
import styled from "styled-components";

export default styled.button`
  padding: 16px 24px;
  font-size: 14px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.brightText};
  transition: 0.5s;
  text-transform: uppercase;
  cursor: pointer;
  
  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(130%);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
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
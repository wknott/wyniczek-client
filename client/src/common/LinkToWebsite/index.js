import styled from "styled-components";

export default styled.a`
  display: inline;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.windsor};
  padding: 4px;
  border-radius: 2px;
  transition: 0.3s;
  
  &:hover {
    filter: brightness(120%);
  }
`;
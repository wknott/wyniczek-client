import styled from "styled-components";

export default styled.ul`
  list-style-type: none;
  padding: 10px 20px;
`;

export const ListItem = styled.li`
  padding: 10px 0px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.colors.text};
  }
`;
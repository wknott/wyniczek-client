import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-size: 14px;
  text-transform: none;
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: black;
  border-radius: 5px;
  padding: 10px;
  margin: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`; 
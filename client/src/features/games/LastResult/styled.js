import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-size: 14px;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 5px;
  padding: 5px;
  margin: 0;
`; 
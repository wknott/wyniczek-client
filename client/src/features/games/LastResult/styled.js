import styled from "styled-components";
import Link from "../../../common/Link";

export const StyledParagraph = styled(Link)`
  font-size: 14px;
  text-transform: none;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 5px;
  padding: 10px;
  margin: 0;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`; 
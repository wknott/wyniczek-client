import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;

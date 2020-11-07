import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.windsor};
  border-radius: 5px;
`;

import styled from "styled-components";

export default styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.violet};
  border-radius: 5px;
`;

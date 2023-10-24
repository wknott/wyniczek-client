import styled from "styled-components";

export default styled.div`
  box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.disabled};
  padding: 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 12px;
  }
`;
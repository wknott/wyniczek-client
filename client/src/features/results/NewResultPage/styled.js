import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Wrapper = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 12px;
    grid-gap: 12px;
  };
`;
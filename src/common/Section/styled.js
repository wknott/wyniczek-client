import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 5px 5px 5px 0px ${({ theme }) => theme.colors.emperor};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  max-width: 100%;

  @media(min-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    padding: 30px;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 30px;
  text-align: center;
`;
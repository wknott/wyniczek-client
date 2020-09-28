import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.violet};
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px ${({ theme }) => theme.colors.dark};

  @media(min-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    padding: 30px;
  }
`;

export const SectionHeader = styled.h2`
  font-size: 30px;
  text-align: center;
`;
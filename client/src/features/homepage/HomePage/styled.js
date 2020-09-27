import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.violet};
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px ${({ theme }) => theme.colors.dark};

  @media(min-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    padding: 30px;
  }
`;

export const DarkSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.lightText};
`;

export const SectionHeader = styled.h2`
  font-size: 30px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  background-color: ${({ theme }) => theme.colors.violet};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};
  display: block;

`;
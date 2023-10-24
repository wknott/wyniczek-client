import styled from "styled-components";

export const DescriptionList = styled.dl`
  font-size: 24px;
  margin: 0 0 8px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Term = styled.dt`
  margin-right: 10px;
  display: inline;
`;

export const Description = styled.dd`
  margin: 0;
  display: inline;
  font-weight: 700;
`;
import styled, { css } from "styled-components";

export const StyledPager = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const PagerButton = styled.img`
  width: 40px;
  margin: 0px 10px; 
  filter: invert(12%) sepia(71%) saturate(4450%) hue-rotate(276deg) brightness(81%) contrast(107%);
  
  &:hover{
    filter: invert(12%) sepia(71%) saturate(4450%) hue-rotate(276deg) brightness(100%) contrast(107%);
  }
  ${({ disabled }) => disabled && css`
    filter: invert(83%) sepia(20%) saturate(14%) hue-rotate(347deg) brightness(86%) contrast(96%);
    
    &:hover{
      filter: invert(83%) sepia(20%) saturate(14%) hue-rotate(347deg) brightness(86%) contrast(96%);
    }
  `} 
`;
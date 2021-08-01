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

export const PagerButton = styled.button`
  color: ${({theme}) => theme.colors.primary};
  background: none;
  border: none;
  cursor: pointer;
  
  & svg {
    width: 32px;
    height: 32px;
  }

  &:hover{
    filter: brightness(1.3);
  }

  &:active{
    filter: brightness(1.5);
  }

  ${({ disabled }) => disabled && css`
    color: ${({theme}) => theme.colors.disabled};

    &:hover,
    &:active {
      filter: unset;
      cursor: unset;
    }
  `} 
`;
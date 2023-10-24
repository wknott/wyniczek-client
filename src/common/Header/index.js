import styled from "styled-components";

export default styled.h1`
  font-size: 32px;
  margin: 24px 0px 14px;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px){
    font-size: 24px;
    margin: 12px 0px 2px;
  }
`;
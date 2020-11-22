import styled from "styled-components";

export default styled.main`
  padding: 10px;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  @media(max-width: 1132px){
    max-width: calc(100% - 2 * 16px);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: calc(100% - 2 * 4px);
  }
`;
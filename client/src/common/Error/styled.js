import styled from "styled-components";
import Header from "../Header";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledHeader = styled(Header)`
  margin-top: -40px;
  margin-bottom: 0;
`;

export const Image = styled.img`
  width: 128px;
`;

export const SubHeader = styled.h2`
  font-size: 18px;
  margin-bottom: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px ) {
    font-size: 14px;
  };
`;
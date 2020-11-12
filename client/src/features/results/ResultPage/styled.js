import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 300px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 64px;
  }
`;

export const GameName = styled(Link)`
  text-decoration: none;
`;

export const Date = styled.p`
  margin: 0;
`;
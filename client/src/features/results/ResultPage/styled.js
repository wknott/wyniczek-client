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
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

export const Image = styled.img`
  width: 300px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    max-width: 100px;
    margin-right: 8px;
  }
`;

export const GameName = styled(Link)`
  text-align: center;
  font-size: 24px;
  padding: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.windsor};
  border-radius: 5px;
  overflow-wrap: anyware;
  max-width: 300px;

  &:hover{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    filter: brightness(110%);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    padding: 4px;
    max-width: 100px;
  }
`;

export const Date = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.windsor};
`;

export const Winner = styled.p`
  font-size: 24px;
  margin: 0;
  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const FirstPlayer = styled.p`
margin: 0;
`;

export const Icon = styled.img`
  height: 24px;
  margin-right: 8px;
`;

export const Game = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;
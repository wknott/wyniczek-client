import styled from "styled-components";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile";

export const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  object-fit: contain;

  /* @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100px;
  }; */
`;

export const DefaultImage = styled.img`
  width: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 50px;
  };
`;

export const DefaultImageContainer = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 100px;
  };
`;

export const StyledSection = styled(Section)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
`;

export const Tags = styled.ul`
  margin: 0;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: -8px;
  margin-bottom: 45px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: 16px;
  };
`;

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.pink};
  font-size: 14px;
  line-height: 140%;
  border-radius: 5px;
  margin-left: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
    margin-bottom: 8px;
  };
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  };
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  };
`;

export const GameTile = styled(Tile)`
  grid-template-columns: 1fr 1fr;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileVertical}px){
    grid-template-columns: 1fr;
  }
`;
import styled from "styled-components";
import Section from "../../../common/Section";

export const Image = styled.img`
  width: 200px;
  border-radius: 5px;
  object-fit: contain;
`;

export const DefaultImage = styled.img`
  width: 100px;
`;

export const DefaultImageContainer = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 5px;
  object-fit: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSection = styled(Section)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
`;
import styled from "styled-components";
import ReactLoading from "react-loading";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.05em;
  margin: 48px 0;
`;

export const StyledReactLoading = styled(ReactLoading)`
  fill: ${({ theme }) => theme.colors.primary} !important;
`;
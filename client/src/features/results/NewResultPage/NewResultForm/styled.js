import styled from "styled-components";
import Button from "../../../../common/Button";

export const Form = styled.form`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: minmax(160px, auto) repeat( ${({ numberOfScores }) => numberOfScores}, minmax(80px, 400px));

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 4px;
    grid-template-columns: minmax(100px, auto) repeat( ${({ numberOfScores }) => numberOfScores}, minmax(80px, 400px));
  }
`;

export const StyledButton = styled(Button)`
  width: 50%;
  background-color: ${({ theme, color }) => theme.colors[color]};
`;

export const SubmitButton = styled(Button)`
  grid-column-start: 1;
  grid-column-end: -1;
`;

export const Paragraph = styled.p`
  margin: 0;
  align-self: center;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const FieldName = styled(Paragraph)`
  background-color: ${({ theme }) => theme.colors.windsor};
`;

export const Result = styled(Paragraph)`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.amber};
`;
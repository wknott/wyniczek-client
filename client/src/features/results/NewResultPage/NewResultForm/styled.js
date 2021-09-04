import styled from "styled-components";
import Button from "../../../../common/Button";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: minmax(160px, auto) repeat( ${({ columns }) => columns - 1}, minmax(80px, 400px));

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 4px;
    grid-template-columns: minmax(100px, auto) repeat( ${({ columns }) => columns - 1}, minmax(80px, 400px));
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme, color }) => theme.colors[color]};
  
  &:hover {
    filter: brightness(90%);
  }

  &:active {
    filter: brightness(80%);
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: unset;
  }
`;

export const SubmitButton = styled(Button)`
  grid-column-start: 1;
  grid-column-end: -1;
`;

export const LabelContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
`;

export const Paragraph = styled.p`
  margin: 0;
  align-self: center;
  font-size: 16px;
  font-weight: 600;
  padding: 10px;
  color: ${({ theme }) => theme.colors.brightText};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const FieldName = styled(Paragraph)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Result = styled(Paragraph)`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 4px;
`;

export const Checkbox = styled.input`
  align-self: center;
  margin-left: 10px;
  width: 20px;
  height: 20px;
`;
import styled from "styled-components";
import Button from "../../../common/Button";

export const Form = styled.form`
  max-width: 400px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
`;

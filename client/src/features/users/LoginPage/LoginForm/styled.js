import styled from "styled-components";
import Button from "../../../../common/Button";

export const Form = styled.form`
  max-width: 500px;
  border: 2px solid ${({ theme }) => theme.colors.windsor};
  border-radius: 16px;
  padding: 20px;
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
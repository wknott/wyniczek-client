import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

export const StyledTextField = styled(TextField)`
  background-color: ${({ theme }) => theme.colors.sectionBackground};
  & .MuiSvgIcon-root {
      fill: ${({ theme }) => theme.colors.text};
    }
  & .MuiSvgIcon-root {
      fill: ${({ theme }) => theme.colors.text};
    }
  & .MuiFilledInput-underline:before {
    border-bottom-color: ${({ theme }) => theme.colors.text} !important;
  }
  & label {
    color: ${({ theme }) => theme.colors.text};
  }
  & input {
    color: ${({ theme }) => theme.colors.text};
  }
  & label .Mui-focused {
    color: ${({ theme }) => theme.colors.primary};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
`;
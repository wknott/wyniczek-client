import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    background-color: ${({ theme }) => theme.colors.body};
    overflow-y: scroll;
    padding-bottom: 100px;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    text-decoration: none;
  }
`;
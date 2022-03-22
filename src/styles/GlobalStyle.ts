import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Migra";
    src: url("/fonts/migra/Migra-Light.otf");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: "Migra";
    src: url("/fonts/migra/Migra-Regular.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.textPrimary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

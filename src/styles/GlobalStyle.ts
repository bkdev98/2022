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

  @font-face {
    font-family: "Neue Montreal";
    src: url("/fonts/neue-montreal/NeueMontreal-Medium.otf");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Neue Montreal";
    src: url("/fonts/neue-montreal/NeueMontreal-Regular.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Maelstrom";
    src: url("/fonts/maelstrom/MaelstromBold.ttf");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  @font-face {
    font-family: "Tusker Grotesk";
    src: url("/fonts/tusker-grotesk/TuskerGrotesk-1700Bold.otf");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Neue Montreal", sans-serif;
    background-color: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.textPrimary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5 {
    margin: 0px;
  }

  h2 {
    font-size: 1.875rem;
  }

  h5 {
    font-size: 1.125rem;
  }

  * {
    box-sizing: border-box;
  }
`

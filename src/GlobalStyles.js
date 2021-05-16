import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  #root {
    font-family: "Montserrat", sans-serif;
    background: url("${background}");
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

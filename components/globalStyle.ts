import { createGlobalStyle } from "styled-components";

export const color = {
  white: "#fefefe",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${color.white};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-x: hidden;
  }
`;

import { createGlobalStyle } from "styled-components";
import { grayscale } from "./base/colors";
import { fontSizes } from "./base/variables";

const GlobalStyle = createGlobalStyle`
  body {
 
    margin: 0;
    font-family: "Fira Sans", sans-serif;
    font-size: ${fontSizes.mainSize};
    background-color: ${grayscale.blackLight};
    color: ${grayscale.white};
  }
  *:focus {
    outline: none;
  }
    *:focus {
    outline: none;
  }
  div::-webkit-scrollbar {
    display: none;
  }
  div {
    scrollbar-width: none;
  }
    h1 {
    font-size: 35px;
  }
  h2 {
    font-size: 25px;
    font-weight: bold;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
  }
  h4 {
    font-size: 18px;
  }
  
  .main-content {
    padding: 1em 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
  }
`;

export default GlobalStyle;

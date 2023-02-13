import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: white;
  }
  
  body{
    background: linear-gradient(blue 0%, black 100%);
    height:100vh
  }
  
  button {
    cursor: pointer;
    color: black;
    text-transform: capitalize;
  }`;
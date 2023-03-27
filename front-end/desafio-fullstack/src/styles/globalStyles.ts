import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
}

body{
    background-color: #f5f5f5;
}

  button {
    cursor: pointer;
  }

`;

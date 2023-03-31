import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    color: inherit;
    text-decoration: none;
    list-style: none;

}
html{
  height: 100%;
  width: 100%;
}
:root{
  --color-primary: #292929;
  --color-secondary: #FFFFFF;
  -color-secondary_2: #f5f5f5

}
body{
    background-color: var(--color-secondary_2);
    color: var(--color-primary);
    height: 100%;
    width: 100%;
}


  button {
    cursor: pointer;
    background-color: white;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    border-radius: 5px;
    padding: 10px 20px;

  &&:hover {
    background-color:var(--color-secondary);
    cursor: pointer;
  }
  }

  #root{
    width: 100%;
    height: 100%;
  }
  .App{
    width: 100%;
    height: 100%;
  }

`;

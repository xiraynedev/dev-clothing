import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'roboto', sans-serif;
    padding: 20px 60px;
    
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a:link, a:visited, a:hover, a:active {
    color: rgb(78, 49, 5);
    text-decoration: none;
  }
`
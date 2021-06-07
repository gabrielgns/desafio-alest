import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  html {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: Montserrat;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }
  
  body {
    background-color: ${(props) => props.theme['#071422']};
    color: ${(props) => props.theme['#AFC2D4']};
    -webkit-font-smoothing: antialiased;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  }

  body,input,textarea,button {
    font: 400 1rem Nunito, sans-serif ;
  }
`

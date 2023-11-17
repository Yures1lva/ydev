import { createGlobalStyle } from 'styled-components'




export const GlobalStyle = createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container{
      max-width: 60rem;
      margin: 0 auto;
      padding: 0 ;
    }

    a, button{
      cursor: pointer;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
      font-family:  'Manjari', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    button{
      margin: 5px 0;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: transparent;
      cursor: pointer;
      transition: all ease-in-out ;
      border-radius: 6px;
      border: 2px solid #2B64D8;
    }

`
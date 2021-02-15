import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    
    text-align:antialiased;
    outline:none;
  }
  body{
    background:#f2f2f2;
    color:#303030;
    font-family:Arial, Helvetica, sans-serif;
  }
  button{
    cursor:pointer;
  }
`

export default GlobalStyle
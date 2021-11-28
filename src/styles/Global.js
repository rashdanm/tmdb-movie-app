import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #020b18;
    font-family: 'Jura', sans-serif;
    color: #fff;
    overflow-y: auto;
    scrollbar-width: none;
    overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

img {
    width: 185px;
    height: 278px;
    border-radius: 4px;
}

a, a:visited, a:hover, a:active {
    color: white;
}

.active {
    color: red;
}
`;

export default GlobalStyles;

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
}

a, a:visited, a:hover, a:active {
    color: white;
}

.active {
    color: red;
}
`;

export default GlobalStyles;

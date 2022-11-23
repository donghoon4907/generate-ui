import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { mixinBgLv0 } from "./mixins/background";

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: 'Google Sans Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/googlesansmono/v18/P5sUzYWFYtnZ_Cg-t0Uq_rfivrdYH4RE8-pZ5gQ1abT53zVU.woff) format('woff');
}

@font-face{
    font-family: 'Google Sans Text';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/googlesanstext/v21/5aUu9-KzpRiLCAt4Unrc-xIKmCU5mE4.woff) format('woff');
}

html, body {
    height: 100%;
    margin: 0;
}

body {
    font-family: ${({ theme }) => theme.fontFamily.default};
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 24px;
    overflow: hidden;

    ${mixinBgLv0}
}

* {
    box-sizing: border-box;
}

a,
a:hover,
a:focus,
a:active,
a:visited {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}

h1 {
    margin-bottom: 8px;
}

svg {
    cursor: pointer;
}

p {
    margin-bottom: 5px;
}

button {
    cursor: pointer;
}

div::-webkit-scrollbar, textarea::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

div::-webkit-scrollbar-thumb, textarea::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.dividerColor};
    border-radius: 5px;
}

`;

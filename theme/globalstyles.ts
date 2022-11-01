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
    font-family: Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Microsoft NeoGothic', 'Droid sans', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.body_lg};
    font-weight: ${({ theme }) => theme.fontWeight.body_lg};
    letter-spacing: ${({ theme }) => theme.letterSpacing.body_lg};
    line-height: ${({ theme }) => theme.lineHeight.body_lg};

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

`;

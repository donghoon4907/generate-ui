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
    font-family: ${({ theme }) => theme.fontFamily.text};
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

button {
    -webkit-font-smoothing: antialiased;
    border: none;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow: visible;
    background: transparent;
    vertical-align: middle;
    appearance: none;
    user-select: none;
    line-height: inherit;
    color: inherit;
    cursor: pointer;
}
`;

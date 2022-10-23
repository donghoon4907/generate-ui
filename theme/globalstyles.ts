import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
#root,
body,
html {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    -o-tab-size: 4;
}

body {
    font-family: ${({ theme }) => theme.fontFamily.display};
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
}

h1 {
    
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 0;
    color: inherit !important;
}

hr {
    width: 100%;
    background-color: ${({ theme }) => theme.dividerColor};
    border: none;
    height: 1px !important;
    margin: 0;
}

ol,
ul {
    padding: 0;
}

ol,
ul,
dl {
    margin: 0;
}

a,
a:hover,
a:focus,
a:active,
a:visited {
    text-decoration: none;
    color: inherit;
}

pre,
code,
kbd,
samp {
    unicode-bidi: normal !important;
}

button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    cursor: pointer;
}

#main::-webkit-scrollbar, #popover::-webkit-scrollbar {
    width: 8px;
}

#main::-webkit-scrollbar-thumb, #popover::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.iconColor};
    border-radius: 10px;
}

.a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip-path: polygon(0 0, 0 0, 0 0);
}

.btn-close {
    color: var(--frisklog-icon-color) !important;
    opacity: 1 !important;
}

.page-item.active {
    font-weight: bold;
}
.page-link {
    color: var(--frisklog-text-color) !important;
    background-color: var(--frisklog-box-color) !important;
    border: none !important;

    &:hover {
        background-color: var(--frisklog-hover-color) !important;
        color: $fr-black-color !important;
    }
}

.icon-button svg, .anticon-close svg {
    width: 20px;
    height: 20px;

    fill: ${({ theme }) => theme.iconColor};

    &:hover {
        fill: ${({ theme }) => theme.hoverColor};
    }
}
.ant-modal-body {
    padding: ${({ theme }) => theme.padding.sm};
}
.ant-popover-inner-content {
    padding: 0 !important;
}
.ant-modal-header, .ant-modal-title, .ant-modal-body, .ant-modal-footer, .ant-popover-title, .ant-popover-inner-content {
    background: ${({ theme }) => theme.modalBgColor} !important;
    color: ${({ theme }) => theme.textColor} !important;
}
.ant-modal-header, .ant-popover-title {
    border-bottom-color: ${({ theme }) => theme.dividerColor} !important;
}
.ant-modal-mask {
    z-index: 1050 !important;
}
.ant-modal-wrap {
    z-index: 1060 !important;
}

.ant-modal-footer {
    border-top-color: ${({ theme }) => theme.dividerColor} !important;
}
.toastui-editor-contents img {
    width: 100% !important;
}
`;

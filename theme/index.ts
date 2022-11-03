import {
  DefaultTheme,
  BreakPoint,
  Color,
  BoxShadow,
  FontFamily
} from "styled-components";

const mediaQuery = (maxWidth: number) =>
  `@media only screen and (max-width: ${maxWidth}px)`;

const fontFamily: FontFamily = {
  default:
    "Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Microsoft NeoGothic', 'Droid sans', sans-serif"
  // display: "'Google Sans',sans-serif",
  // text: "'Google Sans Text',sans-serif",
  // mono: "'Google Sans Mono',sans-serif"
};

const breakPoint: BreakPoint = {
  md: mediaQuery(600),
  lg: mediaQuery(1294)
};

const color: Color = {
  black: "#000",
  white: "#fff",
  bootstrapBlue: "#0d6efd",
  bootstrapGreen: "#198754",
  bootstrapRed: "#dc3545"
};

const boxShadow: BoxShadow = {
  inputInset: "inset 0 1px 2px rgba(0, 0, 0, .075)",
  inputFocus: `0 0 0 0.25rem rgba(13, 110, 253, 0.25)`,
  inputInvalid: `0 0 0 0.25rem rgba(220, 53, 69, 0.25)`,
  inputValid: `0 0 0 0.25rem rgba(25, 135, 84, 0.25)`,
  nav: "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)"
};

export const theme = {
  fontFamily,
  color,
  boxShadow,
  breakPoint,
  borderRadius: "4px"
};

export const lightTheme: DefaultTheme = {
  ...theme,
  linkTextColor: "#0b57d0",
  activeBgColor: "#c2e7ff",
  activeTextColor: "#001d35",
  bgColor_lv0: color.white,
  textColor_lv0: "#1f1f1f",
  bgColor_lv1: "#f8fafd",
  textColor_lv1: "",
  bgColor_lv2: "#f3f6fc",
  textColor_lv2: "",
  bgColor_lv3: "#eff3fa",
  textColor_lv3: "",
  bgColor_lv4: "#edf2fa",
  textColor_lv4: "",
  bgColor_lv5: "#eaf0f9",
  textColor_lv5: "",
  btnBorderColor: "#747775",
  hoverBgColor: "linear-gradient(0deg, rgba(68,71,70,.08), rgba(68,71,70,.08))",
  utilityBorderColor: "#747775",
  dividerColor: "#e1e3e1"
};

export const darkTheme: DefaultTheme = {
  ...theme,
  linkTextColor: "#a8c7fa",
  activeBgColor: "#004a77",
  activeTextColor: "#c2e7ff",
  bgColor_lv0: "#1f1f1f",
  textColor_lv0: "#e3e3e3",
  bgColor_lv1: "#28292a",
  textColor_lv1: "",
  bgColor_lv2: "#2d2f31",
  textColor_lv2: "#c4c7c5",
  bgColor_lv3: "#333438",
  textColor_lv3: "",
  bgColor_lv4: "#34363a",
  textColor_lv4: "",
  bgColor_lv5: "#383a3e",
  textColor_lv5: "",
  btnBorderColor: "rgba(227,227,227,.08)",
  hoverBgColor:
    "linear-gradient(0deg, hsla(140,3%,77%,.08), hsla(140,3%,77%,.08))",
  utilityBorderColor: "#8e918f",
  dividerColor: "#444746"
};

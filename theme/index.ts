import {
  DefaultTheme,
  FontSize,
  LineHeight,
  FontWeight,
  BreakPoint,
  Color,
  BoxShadow,
  LetterSpacing,
  FontFamily
} from "styled-components";

const mediaQuery = (maxWidth: number) =>
  `@media only screen and (max-width: ${maxWidth}px)`;

const fontSize: FontSize = {
  display_xlg: "88px",
  display_lg: "57px",
  display_md: "45px",
  display_sm: "36px",
  headline_lg: "32px",
  headline_md: "28px",
  headline_sm: "24px",
  title_lg: "22px",
  title_md: "16px",
  title_sm: "14px",
  label_lg: "14px",
  label_md: "12px",
  label_sm: "11px",
  body_lg: "16px",
  body_md: "14px",
  body_sm: "12px",
  code_lg: "16px",
  code_md: "14px"
};

const lineHeight: LineHeight = {
  display_xlg: "96px",
  display_lg: "64px",
  display_md: "52px",
  display_sm: "44px",
  headline_lg: "40px",
  headline_md: "36px",
  headline_sm: "32px",
  title_lg: "30px",
  title_md: "24px",
  title_sm: "20px",
  label_lg: "20px",
  label_md: "16px",
  label_sm: "16px",
  body_lg: "24px",
  body_md: "20px",
  body_sm: "16px",
  code_lg: "24px",
  code_md: "20px"
};

const fontWeight: FontWeight = {
  display_xlg: "475",
  display_lg: "475",
  display_md: "475",
  display_sm: "475",
  headline_lg: "475",
  headline_md: "475",
  headline_sm: "475",
  title_lg: "400",
  title_md: "500",
  title_sm: "500",
  label_lg: "500",
  label_md: "400",
  label_sm: "500",
  body_lg: "400",
  body_md: "400",
  body_sm: "400",
  code_lg: "400",
  code_md: "400"
};

const letterSpacing: LetterSpacing = {
  display_xlg: "0",
  display_lg: "0",
  display_md: "0",
  display_sm: "0",
  headline_lg: "0",
  headline_md: "0",
  headline_sm: "0",
  title_lg: "0",
  title_md: "0",
  title_sm: "0",
  label_lg: "0",
  label_md: "0",
  label_sm: "0",
  body_lg: "0",
  body_md: "0",
  body_sm: ".1px",
  code_lg: "0",
  code_md: "0"
};

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
  blue: "#0d6efd",
  green: "#198754",
  red: "#dc3545"
};

const boxShadow: BoxShadow = {
  inputInset: "inset 0 1px 2px rgba(0, 0, 0, .075)",
  inputFocus: `0 0 0 0.25rem rgba(13, 110, 253, 0.25)`,
  inputInvalid: `0 0 0 0.25rem rgba(220, 53, 69, 0.25)`,
  inputValid: `0 0 0 0.25rem rgba(25, 135, 84, 0.25)`
};

export const theme = {
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  fontWeight,
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
  bgColor_lv0: "#fff",
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

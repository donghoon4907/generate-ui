import {
  DefaultTheme,
  FontSize,
  Padding,
  Margin,
  BreakPoint,
  Color,
  StatusColor,
  FontFamily
} from "styled-components";

const DEFAULT_FONTSIZE = 16;

const calcRem = (size: number) => `${size / DEFAULT_FONTSIZE}rem`;

const mediaQuery = (maxWidth: number) =>
  `@media only screen and (max-width: ${maxWidth}px)`;

const fontSize: FontSize = {
  sm: calcRem(14),
  md: calcRem(16),
  lg: calcRem(18),
  xlg: calcRem(20),
  xxlg: calcRem(22),
  xxxlg: calcRem(24),
  titleSize: calcRem(50)
};

const fontFamily: FontFamily = {
  display: '"Google Sans",sans-serif',
  text: '"Google Sans Text",sans-serif'
};

const padding: Padding = {
  sm: calcRem(8),
  md: calcRem(10),
  lg: calcRem(12),
  xlg: calcRem(14),
  xxlg: calcRem(16),
  xxxlg: calcRem(18)
};

const margin: Margin = {
  sm: calcRem(8),
  md: calcRem(10),
  lg: calcRem(12),
  xlg: calcRem(14),
  xxlg: calcRem(16),
  xxxlg: calcRem(18)
};

const breakPoint: BreakPoint = {
  xs: mediaQuery(576),
  sm: mediaQuery(768),
  md: mediaQuery(992),
  lg: mediaQuery(1200),
  wd: mediaQuery(1500)
};

const color: Color = {
  black_base: "#000",
  black_primary: "#121212",
  black_secondary: "#232323",
  white_base: "#fff",
  white_primary: "#f7f7f8",
  white_secondary: "#e6e6e6",
  divider: "#eaecef",
  disabled: "#646464",
  inactive: "#868e96",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  blue: "#2e6bd8"
};

const statusColor: StatusColor = {
  online: color.success,
  offline: color.danger,
  away: color.disabled,
  busy: color.warning
};

export const theme = {
  fontFamily,
  fontSize,
  padding,
  margin,
  color,
  statusColor,
  breakPoint,
  borderRadius: "4px"
};

export const lightTheme: DefaultTheme = {
  ...theme,
  bgColor: color.white_primary,
  headerBgColor: color.white_base,
  boxBgColor: color.white_base,
  borderColor: color.white_secondary,
  inputBgColor: color.white_base,
  iconColor: color.blue,
  hoverColor: "#eee",
  textColor: color.black_base,
  dividerColor: color.divider,
  primaryBtnColor: color.blue,
  primaryBtnTextColor: color.white_base,
  secondaryBtnColor: color.white_base,
  secondaryBtnTextColor: color.black_base,
  modalBgColor: color.white_base,
  githubBgColor: color.black_base,
  githubTextColor: color.white_base,
  readOnlyBtnColor: color.blue,
  readOnlyBtnTextColor: color.white_base
};

export const darkTheme: DefaultTheme = {
  ...theme,
  bgColor: color.black_primary,
  headerBgColor: color.black_primary,
  boxBgColor: color.black_secondary,
  borderColor: color.black_secondary,
  inputBgColor: color.black_secondary,
  iconColor: "#909090",
  hoverColor: color.black_primary,
  textColor: color.white_base,
  dividerColor: color.black_secondary,
  primaryBtnColor: "#f8f9fa",
  primaryBtnTextColor: color.black_base,
  secondaryBtnColor: "3c3c3c",
  secondaryBtnTextColor: color.black_base,
  modalBgColor: color.black_base,
  githubBgColor: color.white_base,
  githubTextColor: color.black_base,
  readOnlyBtnColor: color.white_base,
  readOnlyBtnTextColor: color.black_base
};

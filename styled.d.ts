import "styled-components";

declare module "styled-components" {
  export interface SizeRule {
    xs?: string;
    sm: string;
    md: string;
    lg: string;
    xlg?: string;
    xxlg?: string;
    xxxlg?: string;
  }

  export interface FontSize extends SizeRule {
    titleSize: string;
  }

  export interface Padding extends SizeRule {}

  export interface Margin extends SizeRule {}

  export interface FontFamily {
    display: string;
    text: string;
  }
  export interface Color {
    black_base: string;
    black_primary: string;
    black_secondary: string;
    white_base: string;
    white_primary: string;
    white_secondary: string;
    divider: string;
    disabled: string;
    inactive: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    blue: string;
  }

  export interface StatusColor {
    [statusCode: string]: string;
  }

  export interface BreakPoint extends SizeRule {
    xs: string;
    wd: string;
  }

  export interface DefaultTheme {
    fontFamily: FontFamily;
    fontSize: FontSize;
    padding: Padding;
    margin: Margin;
    color: Color;
    statusColor: StatusColor;
    breakPoint: BreakPoint;
    bgColor: string;
    headerBgColor: string;
    boxBgColor: string;
    borderColor: string;
    inputBgColor: string;
    iconColor: string;
    hoverColor: string;
    textColor: string;
    dividerColor: string;
    primaryBtnColor: string;
    primaryBtnTextColor: string;
    secondaryBtnColor: string;
    secondaryBtnTextColor: string;
    modalBgColor: string;
    githubBgColor: string;
    githubTextColor: string;
    borderRadius: string;
    readOnlyBtnColor: string;
    readOnlyBtnTextColor: string;
  }
}

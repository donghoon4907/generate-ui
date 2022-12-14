import "styled-components";

declare module "styled-components" {
  export interface FontFamily {
    default: string;
  }

  export interface Color {
    black: string;
    gray_lv0: string;
    gray_lv1: string;
    gray_lv2: string;
    lightBlue_lv0: string;
    lightBlue_lv1: string;
    white: string;
    lightDividerColor: string;
    darkDividerColor: string;
    darkTextColor_lv0: string;
    bootstrapBlue: string;
    bootstrapGreen: string;
    bootstrapRed: string;
    bootstrapYellow: string;
  }

  export interface BoxShadow {
    inputInset: string;
    inputFocus: string;
    inputInvalid: string;
    inputValid: string;
    nav: string;
  }

  export interface BreakPoint {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }

  export interface DefaultTheme {
    fontFamily: FontFamily;
    color: Color;
    boxShadow: BoxShadow;
    breakPoint: BreakPoint;

    linkTextColor: string;
    activeBgColor: string;
    activeTextColor: string;
    bgColor_lv0: string;
    textColor_lv0: string;
    bgColor_lv1: string;
    textColor_lv1: string;
    bgColor_lv2: string;
    textColor_lv2: string;
    bgColor_lv3: string;
    textColor_lv3: string;
    bgColor_lv4: string;
    textColor_lv4: string;
    bgColor_lv5: string;
    textColor_lv5: string;
    btnBorderColor: string;
    hoverBgColor: string;
    utilityBorderColor: string;
    dividerColor: string;
    disableColor: string;
  }
}

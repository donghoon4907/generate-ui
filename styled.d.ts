import "styled-components";

declare module "styled-components" {
  export interface Rule {
    display_xlg: string;
    display_lg: string;
    display_md: string;
    display_sm: string;
    headline_lg: string;
    headline_md: string;
    headline_sm: string;
    title_lg: string;
    title_md: string;
    title_sm: string;
    label_lg: string;
    label_md: string;
    label_sm: string;
    body_lg: string;
    body_md: string;
    body_sm: string;
    code_lg: string;
    code_md: string;
  }

  export interface FontSize extends Rule {}

  export interface LineHeight extends Rule {}

  export interface FontWeight extends Rule {}

  export interface LetterSpacing extends Rule {}

  export interface FontFamily {
    display: string;
    text: string;
    mono: string;
  }
  export interface Color {}

  export interface BreakPoint {
    md: string;
    lg: string;
  }

  export interface DefaultTheme {
    fontFamily: FontFamily;
    fontSize: FontSize;
    fontWeight: FontWeight;
    lineHeight: LineHeight;
    letterSpacing: LetterSpacing;
    color: Color;
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
  }
}

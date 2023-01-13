import type { ISelectOption } from "../interfaces/select";

export interface IModalLayout {
  label: string;
  labelPos: ISelectOption;
  labelColor: string;
  labelFontSize: number;
  labelLineHeight: number;
  labelLetterSpacing: number;
  labelFontWeight: ISelectOption;
  inputType: ISelectOption;
  inputColor: string;
  inputFontSize: number;
  inputLineHeight: number;
  inputLetterSpacing: number;
  inputTextAlign: ISelectOption;
  inputPaddingTop: number;
  inputPaddingRight: number;
  inputPaddingBottom: number;
  inputPaddingLeft: number;
  inputBorderTopLeftRadius: number;
  inputBorderTopRightRadius: number;
  inputBorderBottomLeftRadius: number;
  inputBorderBottomRightRadius: number;
  inputBorderStyle: ISelectOption;
  inputBorderColor: string;
  inputBorderWidth: number;
  inputBgColorHex: string;
  inputBgColorAlpha: number;
  inputPlaceholder: string;
}

export interface IModalButton {
  label: string;
  width: number;
  color: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  fontWeight: ISelectOption;
  textAlign: ISelectOption;
  textOverflow: ISelectOption;
  borderStyle: ISelectOption;
  borderColor: string;
  borderWidth: number;
  bgColorHex: string;
  bgColorAlpha: number;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
}

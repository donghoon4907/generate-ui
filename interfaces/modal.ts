import type { ISelectOption } from "./select";
import type { IBorderRadius } from "../model/borderRadius";
import type { IPadding } from "../model/padding";
import { modalInputTypeOptions } from "../components/options/InputType";
import { labelPositionOptions } from "../components/options/LabelPosition";
import { textAlignOptions } from "../components/options/TextAlign";
import { borderStyleOptions } from "../components/options/BorderStyle";
import constants from "../constants";
import { fontWeightOptions } from "../components/options/FontWeight";
import { textOverflowOptions } from "../components/options/TextOverflow";

export interface IModalLayoutOption {
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

export interface IModalButtonOption extends IPadding, IBorderRadius {
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
}

export const defaultModalLayoutOption: IModalLayoutOption = {
  label: "레이블",
  labelPos: labelPositionOptions[0],
  labelColor: constants.color.blackHex,
  labelFontSize: 16,
  labelLineHeight: 25,
  labelLetterSpacing: 0,
  labelFontWeight: fontWeightOptions[3],
  inputType: modalInputTypeOptions[0],
  inputColor: constants.color.blackHex,
  inputFontSize: 16,
  inputLineHeight: 25,
  inputLetterSpacing: 0,
  inputTextAlign: textAlignOptions[0],
  inputPaddingTop: 4,
  inputPaddingRight: 4,
  inputPaddingBottom: 4,
  inputPaddingLeft: 4,
  inputBorderTopLeftRadius: 4,
  inputBorderTopRightRadius: 4,
  inputBorderBottomLeftRadius: 4,
  inputBorderBottomRightRadius: 4,
  inputBorderStyle: borderStyleOptions[1],
  inputBorderColor: constants.color.blackHex,
  inputBorderWidth: 1,
  inputBgColorHex: constants.color.whiteHex,
  inputBgColorAlpha: 1,
  inputPlaceholder: "입력하세요"
};

export const defaultModalButtonOption: IModalButtonOption = {
  label: "버튼",
  width: 100,
  color: constants.color.blackHex,
  fontSize: 16,
  lineHeight: 25,
  letterSpacing: 0,
  fontWeight: fontWeightOptions[3],
  textAlign: textAlignOptions[1],
  textOverflow: textOverflowOptions[0],
  paddingTop: 4,
  paddingRight: 4,
  paddingBottom: 4,
  paddingLeft: 4,
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  borderStyle: borderStyleOptions[1],
  borderColor: constants.color.blackHex,
  borderWidth: 1,
  bgColorHex: constants.color.whiteHex,
  bgColorAlpha: 1
};

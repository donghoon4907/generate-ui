import type { ISelectOption } from "./select";
import { modalInputTypeOptions } from "../components/options/InputType";
import { labelPositionOptions } from "../components/options/LabelPosition";
import { textAlignOptions } from "../components/options/TextAlign";
import { borderStyleOptions } from "../components/options/BorderStyle";
import constants from "../constants";
import { fontWeightOptions } from "../components/options/FontWeight";

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
}

export const defaultModalLayoutOption: IModalLayoutOption = {
  label: "레이블 명",
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
  inputBgColorAlpha: 1
};
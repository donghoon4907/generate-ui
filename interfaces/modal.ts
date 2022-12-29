import type { ISelectOption } from "./select";
import { modalInputTypeOptions } from "../components/options/InputType";
import { labelPositionOptions } from "../components/options/LabelPosition";
import { textAlignOptions } from "../components/options/TextAlign";
import { borderStyleOptions } from "../components/options/BorderStyle";
import constants from "../constants";

export interface IModalLayoutOption {
  label: string;
  labelPos: ISelectOption;
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
  inputBackgroundColorHex: string;
  inputBackgroundColorRgb: string;
  inputBackgroundColorAlpha: number;
}

export const defaultModalLayoutOption: IModalLayoutOption = {
  label: "레이블 명",
  labelPos: labelPositionOptions[0],
  inputType: modalInputTypeOptions[0],
  inputColor: "#000000",
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
  inputBackgroundColorHex: constants.color.whiteHex,
  inputBackgroundColorRgb: constants.color.whiteRgb,
  inputBackgroundColorAlpha: 1
};

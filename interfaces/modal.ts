import type { ISelectOption } from "./select";
import { modalInputTypeOptions } from "../components/options/InputType";
import { labelPositionOptions } from "../components/options/LabelPosition";
import { textAlignOptions } from "../components/options/TextAlign";

export interface IModalLayoutOption {
  label: string;
  labelPos: ISelectOption;
  inputType: ISelectOption;
  inputColor: string;
  inputFontSize: number;
  inputLineHeight: number;
  inputLetterSpacing: number;
  inputTextAlign: ISelectOption;
}

export const defaultModalLayoutOption = {
  label: "레이블 명",
  labelPos: labelPositionOptions[0],
  inputType: modalInputTypeOptions[0],
  inputColor: "#000000",
  inputFontSize: 16,
  inputLineHeight: 25,
  inputLetterSpacing: 0,
  inputTextAlign: textAlignOptions[0]
};

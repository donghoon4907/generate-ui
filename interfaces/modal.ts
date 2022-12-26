import { modalInputTypeOptions } from "../components/options/InputType";
import { labelPositionOptions } from "../components/options/LabelPosition";
import { ISelectOption } from "./select";

export interface IModalLayoutOption {
  label: string;
  labelPos: ISelectOption;
  inputType: ISelectOption;
}

export const defaultModalLayoutOption = {
  label: "레이블 명",
  labelPos: labelPositionOptions[0],
  inputType: modalInputTypeOptions[0]
};

import type { ISelectOption } from "../../interfaces/select";
import { PositionOption } from "../../types/select-option";

export const labelPositionOptions: ISelectOption[] = [
  {
    label: "위",
    value: PositionOption.TOP,
    preview: null
  },
  {
    label: "오른쪽",
    value: PositionOption.RIGHT,
    preview: null
  },
  {
    label: "왼쪽",
    value: PositionOption.LEFT,
    preview: null
  }
];

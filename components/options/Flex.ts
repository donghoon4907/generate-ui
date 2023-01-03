import type { ISelectOption } from "../../interfaces/select";
import { JustifyContentOption } from "../../types/select-option";

export const justifyContentOptions: ISelectOption[] = [
  {
    label: "왼쪽",
    value: JustifyContentOption.LEFT,
    preview: null
  },
  {
    label: "가운데",
    value: JustifyContentOption.CENTER,
    preview: null
  },
  {
    label: "오른쪽",
    value: JustifyContentOption.RIGHT,
    preview: null
  }
];

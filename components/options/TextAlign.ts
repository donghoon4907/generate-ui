import type { ISelectOption } from "../../interfaces/select";
import { TextAlignOption } from "../../types/select-option";

export const textAlignOptions: ISelectOption[] = [
  {
    label: "왼쪽",
    value: TextAlignOption.LEFT,
    preview: null
  },
  {
    label: "가운데",
    value: TextAlignOption.CENTER,
    preview: null
  },
  {
    label: "오른쪽",
    value: TextAlignOption.RIGHT,
    preview: null
  }
];

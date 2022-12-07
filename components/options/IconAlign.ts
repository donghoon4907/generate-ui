import type { SelectOption } from "../../interfaces/select";
import { IconAlignOption } from "../../types/select-option";

export const iconAlignOptions: SelectOption<IconAlignOption>[] = [
  {
    label: "왼쪽",
    value: IconAlignOption.LEFT,
    preview: null
  },
  {
    label: "오른쪽",
    value: IconAlignOption.RIGHT,
    preview: null
  }
];

import type { SelectOption } from "../../interfaces/select";
import { TextOverflowOption } from "../../types/select-option";

export const textOverflowOptions: SelectOption<TextOverflowOption>[] = [
  {
    label: "허용",
    value: TextOverflowOption.CLIP,
    preview: null
  },
  {
    label: "생략 처리",
    value: TextOverflowOption.ELLIPSIS,
    preview: null
  }
];

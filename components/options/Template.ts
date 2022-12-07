import type { SelectOption } from "../../interfaces/select";
import { LangOption } from "../../types/select-option";

export const langOptions: SelectOption<LangOption>[] = [
  {
    label: "Javascript",
    value: LangOption.JS,
    preview: null
  }
];

import type { CSSProperties, Dispatch, SetStateAction } from "react";
import { useState } from "react";

import type { ISelectOption } from "../interfaces/select";
import { TextOverflowOption } from "../types/select-option";

export const useTextOverflow: (
  defaultTextOverflow: ISelectOption
) => [
  ISelectOption,
  Dispatch<SetStateAction<ISelectOption>>,
  CSSProperties
] = defaultTextOverflow => {
  const [textOverflow, setTextOverflow] =
    useState<ISelectOption>(defaultTextOverflow);

  const output: CSSProperties = {
    textOverflow: textOverflow.value,
    wordBreak:
      textOverflow.value === TextOverflowOption.CLIP ? "break-all" : "normal",
    whiteSpace:
      textOverflow.value === TextOverflowOption.ELLIPSIS ? "nowrap" : "normal"
  };

  return [textOverflow, setTextOverflow, output];
};

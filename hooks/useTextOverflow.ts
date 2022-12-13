import type { CSSProperties } from "react";
import { useState } from "react";

import type { SelectOption } from "../interfaces/select";
import { TextOverflowOption } from "../types/select-option";

export const useTextOverflow = (defaultTextOverflow: SelectOption) => {
  const [textOverflow, setTextOverflow] =
    useState<SelectOption>(defaultTextOverflow);

  const textOverflowStyle: CSSProperties = {
    textOverflow: textOverflow.value,
    wordBreak:
      textOverflow.value === TextOverflowOption.CLIP ? "break-all" : "normal",
    whiteSpace:
      textOverflow.value === TextOverflowOption.ELLIPSIS ? "nowrap" : "normal"
  };

  return {
    textOverflow,
    setTextOverflow,
    textOverflowStyle
  };
};

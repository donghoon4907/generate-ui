import type { CSSProperties, Dispatch, SetStateAction } from "react";
import { useState } from "react";

import type { ISelectOption } from "../interfaces/select";
import { generateTextOverflow } from "../lib/calc/style";

export const useTextOverflow: (
  defaultTextOverflow: ISelectOption
) => [
  ISelectOption,
  Dispatch<SetStateAction<ISelectOption>>,
  CSSProperties
] = defaultTextOverflow => {
  const [textOverflow, setTextOverflow] =
    useState<ISelectOption>(defaultTextOverflow);

  return [
    textOverflow,
    setTextOverflow,
    generateTextOverflow(textOverflow.value)
  ];
};

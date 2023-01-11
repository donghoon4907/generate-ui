import { useState } from "react";

import type { CoreSetState } from "../types/core";
import type { ISelectOption } from "../interfaces/select";
import type { IBorder } from "../model/border";

export interface ISetBorder {
  setStyle: CoreSetState<ISelectOption>;
  setColor: CoreSetState<string>;
  setWidth: CoreSetState<number>;
}

export interface IUseBorder extends IBorder, ISetBorder {}

export const useBorder: (
  defaultBorder: IBorder
) => IUseBorder = defaultBorder => {
  const [style, setStyle] = useState<ISelectOption>(defaultBorder.style);
  const [color, setColor] = useState(defaultBorder.color);
  const [width, setWidth] = useState(defaultBorder.width);

  return {
    style,
    color,
    width,
    setStyle,
    setColor,
    setWidth
  };
};

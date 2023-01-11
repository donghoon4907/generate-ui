import { useState } from "react";

import type { IBorderRadius } from "../model/borderRadius";
import type { CoreSetState } from "../types/core";

export interface ISetBorderRadius {
  setTopLeft: CoreSetState<number>;
  setTopRight: CoreSetState<number>;
  setBottomLeft: CoreSetState<number>;
  setBottomRight: CoreSetState<number>;
}

export interface IUseBorderRadius extends IBorderRadius, ISetBorderRadius {}

export const useBorderRadius: (
  defaultBorderRadius: number | IBorderRadius
) => IUseBorderRadius = defaultBorderRadius => {
  const isNumber = typeof defaultBorderRadius === "number";

  const [topLeft, setTopLeft] = useState<number>(
    isNumber ? defaultBorderRadius : defaultBorderRadius.topLeft
  );
  const [topRight, setTopRight] = useState<number>(
    isNumber ? defaultBorderRadius : defaultBorderRadius.topRight
  );
  const [bottomLeft, setBottomLeft] = useState<number>(
    isNumber ? defaultBorderRadius : defaultBorderRadius.bottomLeft
  );
  const [bottomRight, setBottomRight] = useState<number>(
    isNumber ? defaultBorderRadius : defaultBorderRadius.bottomRight
  );

  return {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    setTopLeft,
    setTopRight,
    setBottomLeft,
    setBottomRight
  };
};

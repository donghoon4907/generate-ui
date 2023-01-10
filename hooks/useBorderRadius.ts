import { useState } from "react";

import type { IBorderRadius } from "../model/borderRadius";
import type { CoreSetState } from "../types/core";

export interface ISetStateBorderRadius {
  setBorderTopLeftRadius: CoreSetState<number>;
  setBorderTopRightRadius: CoreSetState<number>;
  setBorderBottomLeftRadius: CoreSetState<number>;
  setBorderBottomRightRadius: CoreSetState<number>;
}

export interface IUseBorderRadius extends IBorderRadius, ISetStateBorderRadius {
  setBorderRadius: CoreSetState<number>;
}

export const useBorderRadius: (
  defaultBorderRadius: number | IBorderRadius
) => IUseBorderRadius = defaultBorderRadius => {
  const isNumber = typeof defaultBorderRadius === "number";

  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState<number>(
    isNumber ? defaultBorderRadius : defaultBorderRadius.borderTopLeftRadius
  );
  const [borderTopRightRadius, setBorderTopRightRadius] = useState<number>(
    isNumber ? defaultBorderRadius : defaultBorderRadius.borderTopRightRadius
  );
  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState<number>(
    isNumber ? defaultBorderRadius : defaultBorderRadius.borderBottomLeftRadius
  );
  const [borderBottomRightRadius, setBorderBottomRightRadius] =
    useState<number>(
      isNumber
        ? defaultBorderRadius
        : defaultBorderRadius.borderBottomRightRadius
    );

  const setBorderRadius = (borderRadius: number) => {
    setBorderTopLeftRadius(borderRadius);
    setBorderTopRightRadius(borderRadius);
    setBorderBottomLeftRadius(borderRadius);
    setBorderBottomRightRadius(borderRadius);
  };

  return {
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    setBorderRadius,
    setBorderTopLeftRadius,
    setBorderTopRightRadius,
    setBorderBottomLeftRadius,
    setBorderBottomRightRadius
  };
};

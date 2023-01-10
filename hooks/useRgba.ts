import { useState, useMemo } from "react";

import type { CoreSetState } from "../types/core";
import { hexToRgb } from "../lib/calc/rgb";
import { IRgba } from "../model/rgba";

export interface ISetStateRgba {
  setHex: CoreSetState<string>;
  setAlpha: CoreSetState<number>;
}

export interface IUseRgba extends IRgba, ISetStateRgba {
  toString: () => string;
}

export const useRgba: (
  defaultHex: string,
  defaultAlpha?: number
) => IUseRgba = (defaultHex, defaultAlpha = 1) => {
  const [hex, setHex] = useState(defaultHex);
  const [alpha, setAlpha] = useState(defaultAlpha);

  const rgb = useMemo(() => hexToRgb(hex), [hex]);

  const toString = () => {
    return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})` : "";
  };

  return {
    hex,
    alpha,
    setHex,
    setAlpha,
    toString
  };
};

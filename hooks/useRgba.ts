import type { Dispatch, SetStateAction } from "react";
import { useState, useMemo } from "react";

import { hexToRgb } from "../lib/calc/rgb";

export const useRgba: (
  defaultHex: string,
  defaultAlpha?: number
) => [
  string,
  Dispatch<SetStateAction<string>>,
  number,
  Dispatch<SetStateAction<number>>,
  string
] = (defaultHex, defaultAlpha = 1) => {
  const [hex, setHex] = useState(defaultHex);
  const [alpha, setAlpha] = useState(defaultAlpha);

  const rgb = useMemo(() => hexToRgb(hex), [hex]);

  const output = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})` : "";

  return [hex, setHex, alpha, setAlpha, output];
};

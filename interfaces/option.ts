import type { CoreSetState } from "../types/core";

export interface IScrollOption {
  scrollThumbColor: string;
  setScrollThumbColor: CoreSetState<string>;
}

export interface IRgbOption {
  hex: string;
  setHex: CoreSetState<string>;
}

export interface IRgbaOption extends IRgbOption {
  alpha: number;
  setAlpha: CoreSetState<number>;
}

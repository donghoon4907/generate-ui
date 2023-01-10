import type { CoreSetState } from "../types/core";
import type { ISelectOption } from "./select";

export interface IBorderOption {
  borderStyle: ISelectOption;
  setBorderStyle: CoreSetState<ISelectOption>;
  borderWidth: number;
  setBorderWidth: CoreSetState<number>;
  borderColor: string;
  setBorderColor: CoreSetState<string>;
}

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

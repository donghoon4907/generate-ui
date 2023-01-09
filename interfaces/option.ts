import type { IGlobalPadding, IPadding } from "../model/padding";
import type { CoreSetState } from "../types/core";
import { ISelectOption } from "./select";

export interface IPaddingOption extends IPadding {
  setPadding: CoreSetState<Partial<IPadding>>;
}

export interface IGlobalPaddingOption extends IGlobalPadding {
  setPadding: CoreSetState<Partial<IPadding>>;
}

export interface IBorderRadiusOption {
  borderTopLeftRadius: number;
  setBorderTopLeftRadius: CoreSetState<number>;
  borderTopRightRadius: number;
  setBorderTopRightRadius: CoreSetState<number>;
  borderBottomLeftRadius: number;
  setBorderBottomLeftRadius: CoreSetState<number>;
  borderBottomRightRadius: number;
  setBorderBottomRightRadius: CoreSetState<number>;
  checkAllBorderRadiusOption: boolean;
  setCheckAllBorderRadiusOption: CoreSetState<boolean>;
}

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

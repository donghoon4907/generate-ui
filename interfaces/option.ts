import type { CoreSetState } from "../types/core";
import { ISelectOption } from "./select";

export interface IPaddingOption {
  paddingTop: number;
  setPaddingTop: CoreSetState<number>;
  paddingRight: number;
  setPaddingRight: CoreSetState<number>;
  paddingBottom: number;
  setPaddingBottom: CoreSetState<number>;
  paddingLeft: number;
  setPaddingLeft: CoreSetState<number>;
  checkAllPaddingOption: boolean;
  setCheckAllPaddingOption: CoreSetState<boolean>;
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

export interface IRgbaOption {
  setRgb: CoreSetState<string>;
  hex: string;
  setHex: CoreSetState<string>;
  alpha: number;
  setAlpha: CoreSetState<number>;
}

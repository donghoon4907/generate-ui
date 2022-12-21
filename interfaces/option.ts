import { Dispatch, SetStateAction } from "react";

import { ISelectOption } from "./select";

export interface IPaddingOption {
  paddingTop: number;
  setPaddingTop: Dispatch<SetStateAction<number>>;
  paddingRight: number;
  setPaddingRight: Dispatch<SetStateAction<number>>;
  paddingBottom: number;
  setPaddingBottom: Dispatch<SetStateAction<number>>;
  paddingLeft: number;
  setPaddingLeft: Dispatch<SetStateAction<number>>;
  checkAllPaddingOption: boolean;
  setCheckAllPaddingOption: Dispatch<SetStateAction<boolean>>;
}

export interface IBorderRadiusOption {
  borderTopLeftRadius: number;
  setBorderTopLeftRadius: Dispatch<SetStateAction<number>>;
  borderTopRightRadius: number;
  setBorderTopRightRadius: Dispatch<SetStateAction<number>>;
  borderBottomLeftRadius: number;
  setBorderBottomLeftRadius: Dispatch<SetStateAction<number>>;
  borderBottomRightRadius: number;
  setBorderBottomRightRadius: Dispatch<SetStateAction<number>>;
  checkAllBorderRadiusOption: boolean;
  setCheckAllBorderRadiusOption: Dispatch<SetStateAction<boolean>>;
}

export interface IBorderOption {
  borderStyle: ISelectOption;
  setBorderStyle: Dispatch<SetStateAction<ISelectOption>>;
  borderWidth: number;
  setBorderWidth: Dispatch<SetStateAction<number>>;
  borderColor: string;
  setBorderColor: Dispatch<SetStateAction<string>>;
}

export interface IRgbaOption {
  setRgb: Dispatch<SetStateAction<string>>;
  hex: string;
  setHex: Dispatch<SetStateAction<string>>;
  alpha: number;
  setAlpha: Dispatch<SetStateAction<number>>;
}

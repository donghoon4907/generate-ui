import type { ISelectOption } from "../interfaces/select";

export interface IFont {
  color: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  textAlign: ISelectOption;
  textOverflow: ISelectOption;
  fontWeight: ISelectOption;
}

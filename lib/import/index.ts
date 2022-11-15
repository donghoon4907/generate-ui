import { CSSProperties } from "react";
import { hexToRgb } from "../calc/rgb";

export interface StyleProperties extends CSSProperties {
  backgroundColorAlpha: number;
}

export class ImportToObj {
  private objStyle: Record<string, string>;

  constructor(strStyle: string) {
    this.objStyle = this.normalizeStyle(strStyle);
  }

  normalizeStyle(strStyle: string) {
    const result = {};

    const splitStrStyle = strStyle.split(";");

    splitStrStyle.forEach();

    return result;
  }
}

import type { CSSProperties } from "react";
import { useState } from "react";

import type { CoreSetState } from "../types/core";
import type { ISelectOption } from "../interfaces/select";
import type { IFont } from "../model/font";
import { generateTextOverflow } from "../lib/calc/style";

export interface ISetFont {
  setColor: CoreSetState<string>;
  setFontSize: CoreSetState<number>;
  setLineHeight: CoreSetState<number>;
  setLetterSpacing: CoreSetState<number>;
  setTextAlign: CoreSetState<ISelectOption>;
  setTextOverflow: CoreSetState<ISelectOption>;
  setFontWeight: CoreSetState<ISelectOption>;
}

export interface IUseFont extends Partial<IFont>, ISetFont {
  getTextOverflowStyle: () => CSSProperties | null;
}

export const useFont: (
  defaultFont: Partial<IFont>
) => IUseFont = defaultFont => {
  const [color, setColor] = useState(defaultFont.color);
  const [fontSize, setFontSize] = useState(defaultFont.fontSize);
  const [lineHeight, setLineHeight] = useState(defaultFont.lineHeight);
  const [letterSpacing, setLetterSpacing] = useState(defaultFont.letterSpacing);
  const [textAlign, setTextAlign] = useState(defaultFont.textAlign);
  const [textOverflow, setTextOverflow] = useState(defaultFont.textOverflow);
  const [fontWeight, setFontWeight] = useState(defaultFont.fontWeight);

  const getTextOverflowStyle = () => {
    let output = null;

    if (textOverflow) {
      output = generateTextOverflow(textOverflow.value);
    }

    return output;
  };

  return {
    color,
    fontSize,
    lineHeight,
    letterSpacing,
    textAlign,
    textOverflow,
    fontWeight,
    setColor,
    setFontSize,
    setLineHeight,
    setLetterSpacing,
    setTextAlign,
    setTextOverflow,
    setFontWeight,
    getTextOverflowStyle
  };
};

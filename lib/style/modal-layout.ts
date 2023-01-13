import type { CSSProperties } from "react";

import type { IModalLayout } from "../../model/modal";
import { hexToRgb } from "../calc/rgb";
import { InputTypeOption, PositionOption } from "../../types/select-option";

export function makeLayoutStyle({
  labelPos,
  labelColor,
  labelFontSize,
  labelLineHeight,
  labelLetterSpacing,
  labelFontWeight,
  inputType,
  inputColor,
  inputFontSize,
  inputLineHeight,
  inputLetterSpacing,
  inputTextAlign,
  inputPaddingTop,
  inputPaddingRight,
  inputPaddingBottom,
  inputPaddingLeft,
  inputBorderTopLeftRadius,
  inputBorderTopRightRadius,
  inputBorderBottomLeftRadius,
  inputBorderBottomRightRadius,
  inputBorderStyle,
  inputBorderColor,
  inputBorderWidth,
  inputBgColorHex,
  inputBgColorAlpha
}: IModalLayout) {
  const labelPosValue = labelPos.value;

  const rgb = hexToRgb(inputBgColorHex);

  const inputBgColor = rgb
    ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${inputBgColorAlpha})`
    : "inherit";

  const containerStyle: CSSProperties = {
    display: "flex"
  };

  const labelStyle: CSSProperties = {
    color: labelColor,
    fontSize: labelFontSize,
    lineHeight: `${labelLineHeight}px`,
    letterSpacing: labelLetterSpacing,
    fontWeight: labelFontWeight.value
  };

  const inputWrapperStyle: CSSProperties = {
    flex: 1,
    borderTopLeftRadius: inputBorderTopLeftRadius,
    borderTopRightRadius: inputBorderTopRightRadius,
    borderBottomLeftRadius: inputBorderBottomLeftRadius,
    borderBottomRightRadius: inputBorderBottomRightRadius,
    borderStyle: inputBorderStyle.value,
    borderWidth: inputBorderWidth,
    borderColor: inputBorderColor,
    backgroundColor: inputBgColor,
    overflow: "hidden"
  };

  const inputStyle: CSSProperties = {
    color: inputColor,
    fontSize: inputFontSize,
    lineHeight: `${inputLineHeight}px`,
    letterSpacing: inputLetterSpacing,
    textAlign: inputTextAlign.value as any,
    width: "100%",
    paddingTop: inputPaddingTop,
    paddingRight: inputPaddingRight,
    paddingBottom: inputPaddingBottom,
    paddingLeft: inputPaddingLeft,
    borderTopLeftRadius: inputBorderTopLeftRadius,
    borderTopRightRadius: inputBorderTopRightRadius,
    borderBottomLeftRadius: inputBorderBottomLeftRadius,
    borderBottomRightRadius: inputBorderBottomRightRadius,
    border: "none",
    backgroundColor: inputBgColor,
    verticalAlign: "middle"
  };

  if (inputType.value === InputTypeOption.TEXTAREA) {
    inputStyle.resize = "none";
    inputWrapperStyle.height = "100px";
    inputStyle.height = "100px";
  }

  if (labelPosValue === PositionOption.TOP) {
    containerStyle.flexDirection = "column";
  } else {
    containerStyle.justifyContent = "space-between";
    containerStyle.alignItems = "center";
    containerStyle.gap = 5;

    if (labelPosValue === PositionOption.RIGHT) {
      inputWrapperStyle.order = 1;
      labelStyle.order = 2;
    } else if (labelPosValue === PositionOption.LEFT) {
      inputWrapperStyle.order = 2;
      labelStyle.order = 1;
    }

    if (inputType.value === InputTypeOption.TEXTAREA) {
      labelStyle.height = "100px";
    }
  }

  return {
    containerStyle,
    labelStyle,
    inputWrapperStyle,
    inputStyle
  };
}

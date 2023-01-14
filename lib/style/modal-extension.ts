import type { CSSProperties } from "react";

import type { IModalLayout, IModalButton } from "../../model/modal";
import { hexToRgb } from "../calc/rgb";
import { generateTextOverflow } from "../calc/style";
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
    fontSize: `${labelFontSize}px`,
    lineHeight: `${labelLineHeight}px`,
    letterSpacing: `${labelLetterSpacing}px`,
    fontWeight: labelFontWeight.value
  };

  const inputWrapperStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: `${inputBorderTopLeftRadius}px`,
    borderTopRightRadius: `${inputBorderTopRightRadius}px`,
    borderBottomLeftRadius: `${inputBorderBottomLeftRadius}px`,
    borderBottomRightRadius: `${inputBorderBottomRightRadius}px`,
    borderStyle: inputBorderStyle.value,
    borderWidth: `${inputBorderWidth}px`,
    borderColor: inputBorderColor,
    backgroundColor: inputBgColor,
    overflow: "hidden"
  };

  const inputStyle: CSSProperties = {
    color: inputColor,
    fontSize: `${inputFontSize}px`,
    lineHeight: `${inputLineHeight}px`,
    letterSpacing: `${inputLetterSpacing}px`,
    textAlign: inputTextAlign.value as any,
    width: "100%",
    paddingTop: `${inputPaddingTop}px`,
    paddingRight: `${inputPaddingRight}px`,
    paddingBottom: `${inputPaddingBottom}px`,
    paddingLeft: `${inputPaddingLeft}px`,
    borderTopLeftRadius: `${inputBorderTopLeftRadius}px`,
    borderTopRightRadius: `${inputBorderTopRightRadius}px`,
    borderBottomLeftRadius: `${inputBorderBottomLeftRadius}px`,
    borderBottomRightRadius: `${inputBorderBottomRightRadius}px`,
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
    containerStyle.gap = "5px";

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

export function makeButtonStyle({
  width,
  fontSize,
  letterSpacing,
  borderWidth,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  lineHeight,
  fontWeight,
  textAlign,
  textOverflow,
  borderStyle,
  bgColorHex,
  bgColorAlpha,
  ...another
}: IModalButton) {
  const rgb = hexToRgb(bgColorHex);

  const backgroundColor = rgb
    ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${bgColorAlpha})`
    : "inherit";

  const textOverflowStyle = generateTextOverflow(textOverflow.value);

  const btnStyle: CSSProperties = {
    width: `${width}px`,
    fontSize: `${fontSize}px`,
    letterSpacing: `${letterSpacing}px`,
    borderWidth: `${borderWidth}px`,
    paddingTop: `${paddingTop}px`,
    paddingRight: `${paddingRight}px`,
    paddingBottom: `${paddingBottom}px`,
    paddingLeft: `${paddingLeft}px`,
    borderTopLeftRadius: `${borderTopLeftRadius}px`,
    borderTopRightRadius: `${borderTopRightRadius}px`,
    borderBottomLeftRadius: `${borderBottomLeftRadius}px`,
    borderBottomRightRadius: `${borderBottomRightRadius}px`,
    lineHeight: `${lineHeight}px`,
    fontWeight: fontWeight.value,
    textAlign: textAlign.value as any,
    borderStyle: borderStyle.value,
    backgroundColor,
    overflow: "hidden",
    ...another,
    ...textOverflowStyle
  };

  return {
    btnStyle
  };
}

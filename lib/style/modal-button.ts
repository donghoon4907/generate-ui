import type { CSSProperties } from "react";

import type { IModalButton } from "../../model/modal";
import { hexToRgb } from "../calc/rgb";
import { generateTextOverflow } from "../calc/style";

export function makeButtonStyle({
  lineHeight,
  fontWeight,
  textAlign,
  textOverflow,
  borderStyle,
  bgColorHex,
  bgColorAlpha,
  ...btnStyles
}: IModalButton) {
  const rgb = hexToRgb(bgColorHex);

  const backgroundColor = rgb
    ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${bgColorAlpha})`
    : "inherit";

  const textOverflowStyle = generateTextOverflow(textOverflow.value);

  const btnStyle: CSSProperties = {
    ...btnStyles,
    lineHeight: `${lineHeight}px`,
    fontWeight: fontWeight.value,
    textAlign: textAlign.value as any,
    borderStyle: borderStyle.value,
    backgroundColor,
    overflow: "hidden",
    ...textOverflowStyle
  };

  return {
    btnStyle
  };
}

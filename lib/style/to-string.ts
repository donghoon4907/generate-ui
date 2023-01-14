import { CSSProperties } from "react";

import { isNumber } from "../calc/number";

/**
 * 오브젝트형 스타일을 문자열로 변환
 *
 * @param style 오브젝트형 스타일
 */
export const styleToString = (style: CSSProperties) =>
  Object.entries(style).reduce((acc, [key, value]) => {
    let cssKey = key.replace(/[A-Z]/g, char => `-${char.toLowerCase()}`);

    return acc + `${cssKey}: ${value};`;
  }, "");

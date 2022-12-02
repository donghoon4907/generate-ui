import { CSSProperties } from "react";

import { isNumber } from "../calc/number";

/**
 * 오브젝트형 스타일을 문자열로 변환
 *
 * @param style 오브젝트형 스타일
 */
export const styleToString = (style: CSSProperties) => {
  let result = "";

  for (const [key, value] of Object.entries(style)) {
    // 대문자 -> 소문자
    let cssKey = key.replace(/[A-Z]/g, char => `-${char.toLowerCase()}`);

    if (isNumber(value)) {
      result += `${cssKey}: ${value}px;`;
    } else {
      result += `${cssKey}: ${value};`;
    }
  }

  return result;
};

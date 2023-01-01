import { css } from "styled-components";

export const mixinBoxShadow = (...args: string[]) => {
  let result;

  if (args.length === 0) {
    result = "none";
  } else if (args.length === 1) {
    result = args[0];
  } else {
    result = args.join(",");
  }

  return css`
    box-shadow: ${props => {
      return "";
    }};
  `;
};

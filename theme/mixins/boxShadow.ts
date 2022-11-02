import { css } from "styled-components";

export const mixinBoxShadow = (...args: string[]) => {
  let result;

  console.log(args);
  if (args.length === 0) {
    result = "none";
  } else if (args.length === 1) {
    result = args[0];
  } else {
    result = args.join(",");
  }

  console.log(result);

  return css`
    box-shadow: ${props => {
      console.log(props);
      return "";
    }};
  `;
};

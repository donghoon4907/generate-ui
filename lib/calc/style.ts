import type { CSSProperties } from "react";

import { TextOverflowOption } from "../../types/select-option";

export function generateTextOverflow(textOverflow: string) {
  const output: CSSProperties = {
    textOverflow,
    wordBreak:
      textOverflow === TextOverflowOption.CLIP ? "break-all" : "normal",
    whiteSpace:
      textOverflow === TextOverflowOption.ELLIPSIS ? "nowrap" : "normal"
  };

  return output;
}

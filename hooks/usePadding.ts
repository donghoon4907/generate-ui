import { useState } from "react";

import { isNumber } from "../lib/calc/number";
import { IPadding } from "../model/padding";

export const usePadding: (
  defaultPadding: number | IPadding
) => [IPadding, (padding: IPadding) => void] = defaultPadding => {
  const [top, setTop] = useState<number>(
    isNumber(defaultPadding)
      ? (defaultPadding as number)
      : (defaultPadding as IPadding).top
  );
  const [right, setRight] = useState<number>(
    isNumber(defaultPadding)
      ? (defaultPadding as number)
      : (defaultPadding as IPadding).right
  );
  const [bottom, setBottom] = useState<number>(
    isNumber(defaultPadding)
      ? (defaultPadding as number)
      : (defaultPadding as IPadding).bottom
  );
  const [left, setLeft] = useState<number>(
    isNumber(defaultPadding)
      ? (defaultPadding as number)
      : (defaultPadding as IPadding).left
  );

  const setPadding = (padding: number | Partial<IPadding>) => {
    if (isNumber(padding)) {
      setTop(padding as number);
      setRight(padding as number);
      setBottom(padding as number);
      setLeft(padding as number);
    } else {
      const { top, right, bottom, left } = padding as Partial<IPadding>;

      if (isNumber(top)) {
        setTop(top as number);
      }

      if (isNumber(right)) {
        setRight(right as number);
      }

      if (isNumber(bottom)) {
        setBottom(bottom as number);
      }

      if (isNumber(left)) {
        setLeft(left as number);
      }
    }
  };

  const output: IPadding = {
    top,
    right,
    bottom,
    left
  };

  return [output, setPadding];
};

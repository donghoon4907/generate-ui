import { useState } from "react";

import type { IPadding } from "../model/padding";
import type { CoreSetState } from "../types/core";

export interface ISetPadding {
  setTop: CoreSetState<number>;
  setRight: CoreSetState<number>;
  setBottom: CoreSetState<number>;
  setLeft: CoreSetState<number>;
}

export interface IUsePadding extends IPadding, ISetPadding {}

export const usePadding: (
  defaultPadding: number | IPadding
) => IUsePadding = defaultPadding => {
  const isNumber = typeof defaultPadding === "number";

  const [top, setTop] = useState<number>(
    isNumber ? defaultPadding : defaultPadding.top
  );
  const [right, setRight] = useState<number>(
    isNumber ? defaultPadding : defaultPadding.right
  );
  const [bottom, setBottom] = useState<number>(
    isNumber ? defaultPadding : defaultPadding.bottom
  );
  const [left, setLeft] = useState<number>(
    isNumber ? defaultPadding : defaultPadding.left
  );

  return {
    top,
    right,
    bottom,
    left,
    setTop,
    setRight,
    setBottom,
    setLeft
  };
};

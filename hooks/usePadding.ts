import { useState } from "react";

import type { IPadding } from "../model/padding";
import type { CoreSetState } from "../types/core";

export interface ISetStatePadding {
  setPaddingTop: CoreSetState<number>;
  setPaddingRight: CoreSetState<number>;
  setPaddingBottom: CoreSetState<number>;
  setPaddingLeft: CoreSetState<number>;
}

export interface IUsePadding extends IPadding, ISetStatePadding {
  setPadding: CoreSetState<number>;
}

export const usePadding: (
  defaultPadding: number | IPadding
) => IUsePadding = defaultPadding => {
  const isNumber = typeof defaultPadding === "number";

  const [paddingTop, setPaddingTop] = useState<number>(
    isNumber ? defaultPadding : defaultPadding.paddingTop
  );
  const [paddingRight, setPaddingRight] = useState<number>(
    isNumber ? defaultPadding : defaultPadding.paddingRight
  );
  const [paddingBottom, setPaddingBottom] = useState<number>(
    isNumber ? defaultPadding : defaultPadding.paddingBottom
  );
  const [paddingLeft, setPaddingLeft] = useState<number>(
    isNumber ? defaultPadding : defaultPadding.paddingLeft
  );

  const setPadding = (padding: number) => {
    setPaddingTop(padding);
    setPaddingRight(padding);
    setPaddingBottom(padding);
    setPaddingLeft(padding);
  };

  return {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    setPadding,
    setPaddingTop,
    setPaddingRight,
    setPaddingBottom,
    setPaddingLeft
  };
};

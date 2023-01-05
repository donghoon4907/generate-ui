import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IScrollOption } from "../../../interfaces/option";
import { ColorOption } from "./Color";

interface Props extends IGridOption, IScrollOption {
  id: string;
}

export const ScrollOption: FC<Props> = ({
  id,
  span,
  scrollThumbColor,
  setScrollThumbColor
}) => {
  return (
    <>
      <ColorOption
        id={`setScrollThumbColor${id}`}
        span={span}
        hex={scrollThumbColor}
        setHex={setScrollThumbColor}
      />
    </>
  );
};

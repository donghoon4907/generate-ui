import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IRgba } from "../../../model/rgba";
import type { ISetStateRgba } from "../../../hooks/useRgba";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { ColorOption } from "./Color";

interface Props extends IGridOption, IRgba, ISetStateRgba {
  id: string;
}

export const RgbaOption: FC<Props> = ({
  id,
  span,
  hex,
  alpha,
  setHex,
  setAlpha
}) => {
  return (
    <>
      <ColorOption id={`setHex${id}`} span={span} hex={hex} setHex={setHex} />
      <Grid.Column span={span}>
        <RequireLabel htmlFor={`setAlpha${id}`}>투명도</RequireLabel>
        <CountingInput
          id={`setAlpha${id}`}
          ariaLabel="alpha"
          count={alpha}
          setCount={setAlpha}
          limit={1}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.DECIMAL}
          unit=""
        />
      </Grid.Column>
    </>
  );
};

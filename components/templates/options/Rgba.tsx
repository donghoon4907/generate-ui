import type { ChangeEvent, FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IRgbaOption } from "../../../interfaces/option";
import * as Grid from "../../partial/Grid";
import { hexToRgb } from "../../../lib/calc/rgb";
import { RequireLabel } from "../../RequireLabel";
import { DefaultInput } from "../../Input";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";

interface Props extends IGridOption, IRgbaOption {
  id: string | number;
}

export const RgbaOption: FC<Props> = ({
  id,
  span,
  hex,
  setRgb,
  setHex,
  alpha,
  setAlpha
}) => {
  const handleChangeColor = (evt: ChangeEvent<HTMLInputElement>) => {
    const rgb = hexToRgb(evt.target.value);

    if (rgb !== null) {
      setRgb(`${rgb.r},${rgb.g},${rgb.b}`);
    }

    setHex(evt.target.value);
  };

  return (
    <>
      <Grid.Column span={span}>
        <RequireLabel htmlFor={`setHex${id}`}>RGB</RequireLabel>
        <DefaultInput
          type="color"
          id={`setHex${id}`}
          value={hex}
          onChange={handleChangeColor}
        />
      </Grid.Column>
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

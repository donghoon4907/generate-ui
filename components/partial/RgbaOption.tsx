import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import { CountingInput } from "../CountingInput";
import { CountNumberType } from "../../types/count";
import * as Grid from "./Grid";
import { RequireLabel } from "../RequireLabel";
import { DefaultInput } from "../Input";
import { hexToRgb } from "../../lib/calc/rgb";
import type { GridCoreProps } from "../../interfaces/grid";

interface Props extends GridCoreProps {
  id: string | number;
  hex: string;
  setRgb: Dispatch<SetStateAction<string>>;
  setHex: Dispatch<SetStateAction<string>>;
  alpha: number;
  setAlpha: Dispatch<SetStateAction<number>>;
}

export const RgbaOption: FC<Props> = ({
  id,
  hex,
  setRgb,
  setHex,
  alpha,
  setAlpha,
  span
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

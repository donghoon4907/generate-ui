import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IBorderOption } from "../../../interfaces/option";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CustomSelect } from "../../CustomSelect";
import { borderStyleOptions } from "../../options/BorderStyle";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { ColorOption } from "./Color";

interface Props extends IGridOption, IBorderOption {
  id: string;
}

export const BorderOption: FC<Props> = ({
  id,
  span,
  borderStyle,
  setBorderStyle,
  borderWidth,
  setBorderWidth,
  borderColor,
  setBorderColor
}) => {
  return (
    <>
      <Grid.Column span={span}>
        <RequireLabel>스타일</RequireLabel>
        <CustomSelect
          activeOption={borderStyle}
          setOption={setBorderStyle}
          options={borderStyleOptions}
        />
      </Grid.Column>
      <Grid.Column span={span}>
        <RequireLabel htmlFor={`setBorderWidth${id}`}>너비</RequireLabel>
        <CountingInput
          id={`setBorderWidth${id}`}
          ariaLabel="테두리 굵기"
          count={borderWidth}
          setCount={setBorderWidth}
          limit={10}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
      </Grid.Column>
      <ColorOption
        id={`setBorderColor${id}`}
        span={span}
        hex={borderColor}
        setHex={setBorderColor}
      />
    </>
  );
};

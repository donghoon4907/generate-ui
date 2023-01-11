import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IUseBorder } from "../../../hooks/useBorder";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CustomSelect } from "../../CustomSelect";
import { borderStyleOptions } from "../../options/BorderStyle";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { ColorOption } from "./Color";

interface Props extends IGridOption, IUseBorder {
  id: string;
}

export const BorderOption: FC<Props> = ({
  id,
  span,
  style,
  color,
  width,
  setStyle,
  setColor,
  setWidth
}) => {
  return (
    <>
      <Grid.Column span={span}>
        <RequireLabel>스타일</RequireLabel>
        <CustomSelect
          activeOption={style}
          setOption={setStyle}
          options={borderStyleOptions}
        />
      </Grid.Column>
      <Grid.Column span={span}>
        <RequireLabel htmlFor={`setBorderWidth${id}`}>너비</RequireLabel>
        <CountingInput
          id={`setBorderWidth${id}`}
          ariaLabel="테두리 굵기"
          count={width}
          setCount={setWidth}
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
        hex={color}
        setHex={setColor}
      />
    </>
  );
};

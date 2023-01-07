import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { ISelectOption } from "../../../interfaces/select";
import type { CoreSetState } from "../../../types/core";
import * as Grid from "../../partial/Grid";
import { CountingInput } from "../../CountingInput";
import { CustomSelect } from "../../CustomSelect";
import { iconAlignOptions } from "../../options/IconAlign";
import { RequireLabel } from "../../RequireLabel";
import { CountNumberType } from "../../../types/count";
import { isNumber } from "../../../lib/calc/number";
import { ColorOption } from "./Color";

interface Props extends IGridOption {
  id: string;
  iconAlign?: ISelectOption;
  setIconAlign?: CoreSetState<ISelectOption>;
  iconSize?: number;
  setIconSize?: CoreSetState<number>;
  iconColor?: string;
  setIconColor?: CoreSetState<string>;
}

export const IconOption: FC<Props> = ({
  id,
  span,
  iconAlign,
  setIconAlign,
  iconSize,
  setIconSize,
  iconColor,
  setIconColor
}) => {
  const isShowIconSize = isNumber(iconSize) && setIconSize;

  const isShowIconColor = iconColor && setIconColor;

  const isShowIconAlign = iconAlign && setIconAlign;

  return (
    <>
      {isShowIconColor && (
        <ColorOption
          id={id}
          span={span}
          hex={iconColor}
          setHex={setIconColor}
        />
      )}
      {isShowIconAlign && (
        <Grid.Column span={span}>
          <RequireLabel>정렬</RequireLabel>
          <CustomSelect
            activeOption={iconAlign}
            setOption={setIconAlign}
            options={iconAlignOptions}
          />
        </Grid.Column>
      )}
      {isShowIconSize && (
        <Grid.Column span={span}>
          <RequireLabel htmlFor={`setIconSize${id}`}>크기</RequireLabel>
          <CountingInput
            id={`setIconSize${id}`}
            ariaLabel="아이콘 크기"
            count={iconSize!}
            setCount={setIconSize}
            limit={20}
            showIcon={true}
            showFeedback={true}
            numberType={CountNumberType.INTEGER}
            unit="px"
          />
        </Grid.Column>
      )}
    </>
  );
};

import type { ChangeEvent, FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IIconOption } from "../../../interfaces/option";
import * as Grid from "../../partial/Grid";
import { CountingInput } from "../../CountingInput";
import { CustomSelect } from "../../CustomSelect";
import { DefaultInput } from "../../Input";
import { iconAlignOptions } from "../../options/IconAlign";
import { RequireLabel } from "../../RequireLabel";
import { CountNumberType } from "../../../types/count";

interface Props extends IGridOption, IIconOption {
  id: string | number;
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
  const handleChangeIconColor = (evt: ChangeEvent<HTMLInputElement>) => {
    setIconColor(evt.target.value);
  };

  return (
    <>
      <Grid.Column span={span}>
        <RequireLabel htmlFor={`setIconColor${id}`}>색</RequireLabel>
        <DefaultInput
          type="color"
          id={`setIconColor${id}`}
          value={iconColor}
          onChange={handleChangeIconColor}
        />
      </Grid.Column>
      <Grid.Column span={span}>
        <RequireLabel>정렬</RequireLabel>
        <CustomSelect
          activeOption={iconAlign}
          setOption={setIconAlign}
          options={iconAlignOptions}
        />
      </Grid.Column>
      <Grid.Column span={span}>
        <RequireLabel htmlFor={`setIconSize${id}`}>크기</RequireLabel>
        <CountingInput
          id={`setIconSize${id}`}
          ariaLabel="아이콘 크기"
          count={iconSize}
          setCount={setIconSize}
          limit={20}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
      </Grid.Column>
    </>
  );
};

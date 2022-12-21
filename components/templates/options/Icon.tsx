import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { ISelectOption } from "../../../interfaces/select";
import * as Grid from "../../partial/Grid";
import { CountingInput } from "../../CountingInput";
import { CustomSelect } from "../../CustomSelect";
import { DefaultInput } from "../../Input";
import { iconAlignOptions } from "../../options/IconAlign";
import { RequireLabel } from "../../RequireLabel";
import { CountNumberType } from "../../../types/count";

interface Props extends IGridOption {
  id: string | number;
  iconAlign: ISelectOption;
  setIconAlign: Dispatch<SetStateAction<ISelectOption>>;
  iconSize: number;
  setIconSize: Dispatch<SetStateAction<number>>;
  iconColor: string;
  setIconColor: Dispatch<SetStateAction<string>>;
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

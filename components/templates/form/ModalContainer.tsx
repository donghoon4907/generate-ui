import type { FC } from "react";

import type { IBorderRadiusOption } from "../../../interfaces/option";
import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { BorderRadiusOption } from "../options/BorderRadius";
import { WithLabel } from "../../WithLabel";
import { Switch } from "../../Switch";

interface Props extends IGridOption, IBorderRadiusOption {
  width: number;
  setWidth: CoreSetState<number>;
  checkAddHeader: boolean;
  setCheckAddHeader: CoreSetState<boolean>;
  checkAddFooter: boolean;
  setCheckAddFooter: CoreSetState<boolean>;
}
export const ModalContainerForm: FC<Props> = ({
  span,
  width,
  setWidth,
  checkAddHeader,
  setCheckAddHeader,
  checkAddFooter,
  setCheckAddFooter,
  borderTopLeftRadius,
  setBorderTopLeftRadius,
  borderTopRightRadius,
  setBorderTopRightRadius,
  borderBottomLeftRadius,
  setBorderBottomLeftRadius,
  borderBottomRightRadius,
  setBorderBottomRightRadius,
  checkAllBorderRadiusOption,
  setCheckAllBorderRadiusOption
}) => {
  return (
    <>
      <Grid.FoldableTitle span={span} title="레이아웃 설정">
        <Grid.Column span={span}>
          <RequireLabel htmlFor="setWidth">너비</RequireLabel>
          <CountingInput
            id="setWidth"
            ariaLabel="너비"
            count={width}
            setCount={setWidth}
            limit={500}
            showIcon={true}
            showFeedback={true}
            numberType={CountNumberType.INTEGER}
            unit="px"
          />
        </Grid.Column>
        <Grid.BorderColumn span={span}>
          <RequireLabel htmlFor="">레이아웃 추가</RequireLabel>
          <WithLabel id="addHeader" label="헤더">
            <Switch
              id="addHeader"
              width={40}
              checked={checkAddHeader}
              setChecked={setCheckAddHeader}
            />
          </WithLabel>
          <WithLabel id="addFooter" label="푸터">
            <Switch
              id="addFooter"
              width={40}
              checked={checkAddFooter}
              setChecked={setCheckAddFooter}
            />
          </WithLabel>
        </Grid.BorderColumn>
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="모서리각 설정">
        <BorderRadiusOption
          id="Modal"
          span={span}
          borderTopLeftRadius={borderTopLeftRadius}
          setBorderTopLeftRadius={setBorderTopLeftRadius}
          borderTopRightRadius={borderTopRightRadius}
          setBorderTopRightRadius={setBorderTopRightRadius}
          borderBottomLeftRadius={borderBottomLeftRadius}
          setBorderBottomLeftRadius={setBorderBottomLeftRadius}
          borderBottomRightRadius={borderBottomRightRadius}
          setBorderBottomRightRadius={setBorderBottomRightRadius}
          checkAllBorderRadiusOption={checkAllBorderRadiusOption}
          setCheckAllBorderRadiusOption={setCheckAllBorderRadiusOption}
        />
      </Grid.FoldableTitle>
    </>
  );
};

import type { FC } from "react";

import type { IBorderOption } from "../../../interfaces/option";
import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import type { IUseBorderRadius } from "../../../hooks/useBorderRadius";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { BorderRadiusOption } from "../options/BorderRadius";
import { WithLabel } from "../../WithLabel";
import { Switch } from "../../Switch";
import { RgbaOption } from "../options/Rgba";
import { BorderOption } from "../options/Border";

interface Props extends IGridOption, IUseBorderRadius, IBorderOption {
  width: number;
  setWidth: CoreSetState<number>;
  checkAddHeader: boolean;
  setCheckAddHeader: CoreSetState<boolean>;
  checkAddFooter: boolean;
  setCheckAddFooter: CoreSetState<boolean>;
  backgroundColorHex: string;
  setBackgroundColorHex: CoreSetState<string>;
  backgroundColorAlpha: number;
  setBackgroundColorAlpha: CoreSetState<number>;
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
  borderStyle,
  setBorderStyle,
  borderWidth,
  setBorderWidth,
  borderColor,
  setBorderColor,
  backgroundColorHex,
  setBackgroundColorHex,
  backgroundColorAlpha,
  setBackgroundColorAlpha
}) => {
  const displayName = "ModalContainer";

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
          <div>
            <label htmlFor="">레이아웃 추가</label>
          </div>

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

      <Grid.FoldableTitle span={span} title="모서리각 설정" defaultFold={false}>
        <BorderRadiusOption
          id={displayName}
          span={span}
          borderTopLeftRadius={borderTopLeftRadius}
          setBorderTopLeftRadius={setBorderTopLeftRadius}
          borderTopRightRadius={borderTopRightRadius}
          setBorderTopRightRadius={setBorderTopRightRadius}
          borderBottomLeftRadius={borderBottomLeftRadius}
          setBorderBottomLeftRadius={setBorderBottomLeftRadius}
          borderBottomRightRadius={borderBottomRightRadius}
          setBorderBottomRightRadius={setBorderBottomRightRadius}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="테두리 설정" defaultFold={false}>
        <BorderOption
          id={displayName}
          span={span}
          borderStyle={borderStyle}
          setBorderStyle={setBorderStyle}
          borderWidth={borderWidth}
          setBorderWidth={setBorderWidth}
          borderColor={borderColor}
          setBorderColor={setBorderColor}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="배경색 설정" defaultFold={false}>
        <RgbaOption
          id={displayName}
          span={span}
          hex={backgroundColorHex}
          setHex={setBackgroundColorHex}
          alpha={backgroundColorAlpha}
          setAlpha={setBackgroundColorAlpha}
        />
      </Grid.FoldableTitle>
    </>
  );
};

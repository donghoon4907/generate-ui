import type { FC } from "react";

import type { ISelectOption } from "../../../interfaces/select";
import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { BorderRadiusOption } from "../options/BorderRadius";
import { WithLabel } from "../../WithLabel";
import { Switch } from "../../Switch";
import { RgbaOption } from "../options/Rgba";
import { BorderOption } from "../options/Border";

interface Props extends IGridOption {
  width: number;
  checkAddHeader: boolean;
  checkAddFooter: boolean;
  backgroundColorHex: string;
  backgroundColorAlpha: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
  borderStyle: ISelectOption;
  borderColor: string;
  borderWidth: number;
  setWidth: CoreSetState<number>;
  setCheckAddHeader: CoreSetState<boolean>;
  setCheckAddFooter: CoreSetState<boolean>;
  setBackgroundColorHex: CoreSetState<string>;
  setBackgroundColorAlpha: CoreSetState<number>;
  setBorderTopLeftRadius: CoreSetState<number>;
  setBorderTopRightRadius: CoreSetState<number>;
  setBorderBottomLeftRadius: CoreSetState<number>;
  setBorderBottomRightRadius: CoreSetState<number>;
  setBorderStyle: CoreSetState<ISelectOption>;
  setBorderColor: CoreSetState<string>;
  setBorderWidth: CoreSetState<number>;
}
export const ModalContainerForm: FC<Props> = ({
  span,
  width,
  checkAddHeader,
  checkAddFooter,
  backgroundColorHex,
  backgroundColorAlpha,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderStyle,
  borderWidth,
  borderColor,
  setWidth,
  setCheckAddHeader,
  setCheckAddFooter,
  setBackgroundColorHex,
  setBackgroundColorAlpha,
  setBorderTopLeftRadius,
  setBorderTopRightRadius,
  setBorderBottomLeftRadius,
  setBorderBottomRightRadius,
  setBorderStyle,
  setBorderWidth,
  setBorderColor
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
          topLeft={borderTopLeftRadius}
          setTopLeft={setBorderTopLeftRadius}
          topRight={borderTopRightRadius}
          setTopRight={setBorderTopRightRadius}
          bottomLeft={borderBottomLeftRadius}
          setBottomLeft={setBorderBottomLeftRadius}
          bottomRight={borderBottomRightRadius}
          setBottomRight={setBorderBottomRightRadius}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="테두리 설정" defaultFold={false}>
        <BorderOption
          id={displayName}
          span={span}
          style={borderStyle}
          color={borderColor}
          width={borderWidth}
          setStyle={setBorderStyle}
          setWidth={setBorderWidth}
          setColor={setBorderColor}
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

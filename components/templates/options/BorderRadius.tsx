import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IBorderRadiusOption } from "../../../interfaces/option";
import * as Grid from "../../partial/Grid";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { RequireLabel } from "../../RequireLabel";
import { Switch } from "../../Switch";
import { WithLabel } from "../../WithLabel";
import constants from "../../../constants";

interface Props extends IGridOption, IBorderRadiusOption {
  id: string | number;
}

export const BorderRadiusOption: FC<Props> = ({
  id,
  span,
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
  const setBorderRadius = (px: number) => {
    setBorderTopLeftRadius(px);
    setBorderTopRightRadius(px);
    setBorderBottomLeftRadius(px);
    setBorderBottomRightRadius(px);
  };

  return (
    <>
      <Grid.Column span={span}>
        <RequireLabel
          htmlFor={
            checkAllBorderRadiusOption
              ? `setBorderTopLeftRadius${id}`
              : `setBorderRadius${id}`
          }
        >
          {`모서리 각 ${checkAllBorderRadiusOption ? "Top-Left" : ""}`}
        </RequireLabel>
        <CountingInput
          id={
            checkAllBorderRadiusOption
              ? `setBorderTopLeftRadius${id}`
              : `setBorderRadius${id}`
          }
          ariaLabel={
            checkAllBorderRadiusOption
              ? "border-top-left-radius"
              : "border-radius"
          }
          count={borderTopLeftRadius}
          setCount={
            checkAllBorderRadiusOption
              ? setBorderTopLeftRadius
              : setBorderRadius
          }
          limit={100}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
        <WithLabel
          id={`setDetailBorderRadius${id}`}
          label={constants.label.showAllBorderRadius}
        >
          <Switch
            id={`setDetailBorderRadius${id}`}
            width={40}
            checked={checkAllBorderRadiusOption}
            setChecked={setCheckAllBorderRadiusOption}
          />
        </WithLabel>
      </Grid.Column>
      {checkAllBorderRadiusOption && (
        <>
          <Grid.Column span={span}>
            <RequireLabel htmlFor={`setBorderTopRightRadius${id}`}>
              모서리 각 Top-Right
            </RequireLabel>
            <CountingInput
              id={`setBorderTopRightRadius${id}`}
              ariaLabel="border-top-right-radius"
              count={borderTopRightRadius}
              setCount={setBorderTopRightRadius}
              limit={100}
              showIcon={true}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
            />
          </Grid.Column>
          <Grid.Column span={span}>
            <RequireLabel htmlFor={`setBorderBottomRightRadius${id}`}>
              모서리 각 Bottom-Left
            </RequireLabel>
            <CountingInput
              id={`setBorderBottompRightRadius${id}`}
              ariaLabel="border-bottom-left-radius"
              count={borderBottomLeftRadius}
              setCount={setBorderBottomLeftRadius}
              limit={100}
              showIcon={true}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
            />
          </Grid.Column>
          <Grid.Column span={span}>
            <RequireLabel htmlFor={`setBorderBottomRightRadius${id}`}>
              모서리 각 Bottom-Right
            </RequireLabel>
            <CountingInput
              id={`setBorderBottomRightRadius${id}`}
              ariaLabel="border-bottom-right-radius"
              count={borderBottomRightRadius}
              setCount={setBorderBottomRightRadius}
              limit={100}
              showIcon={true}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
            />
          </Grid.Column>
        </>
      )}
    </>
  );
};

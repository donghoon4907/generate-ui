import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IPaddingOption } from "../../../interfaces/option";
import * as Grid from "../../partial/Grid";
import constants from "../../../constants";
import { RequireLabel } from "../../RequireLabel";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { WithLabel } from "../../WithLabel";
import { Switch } from "../../Switch";

interface Props extends IGridOption, IPaddingOption {
  id: string;
}

export const PaddingOption: FC<Props> = ({
  id,
  span,
  paddingTop,
  setPaddingTop,
  paddingRight,
  setPaddingRight,
  paddingBottom,
  setPaddingBottom,
  paddingLeft,
  setPaddingLeft,
  checkAllPaddingOption,
  setCheckAllPaddingOption
}) => {
  const setPadding = (px: number) => {
    setPaddingTop(px);
    setPaddingRight(px);
    setPaddingBottom(px);
    setPaddingLeft(px);
  };

  return (
    <>
      <Grid.Column span={span}>
        <RequireLabel
          htmlFor={
            checkAllPaddingOption ? `setPaddingTop${id}` : `setPadding${id}`
          }
        >
          {`여백 ${checkAllPaddingOption ? "Top" : ""}`}
        </RequireLabel>
        <CountingInput
          id={checkAllPaddingOption ? `setPaddingTop${id}` : `setPadding${id}`}
          ariaLabel={checkAllPaddingOption ? "padding-top" : "padding"}
          count={paddingTop}
          setCount={checkAllPaddingOption ? setPaddingTop : setPadding}
          limit={30}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
        <WithLabel
          id={`setDetailPadding${id}`}
          label={constants.label.showAllPadding}
        >
          <Switch
            id={`setDetailPadding${id}`}
            width={40}
            checked={checkAllPaddingOption}
            setChecked={setCheckAllPaddingOption}
          />
        </WithLabel>
      </Grid.Column>
      {checkAllPaddingOption && (
        <>
          <Grid.Column span={span}>
            <RequireLabel htmlFor="setPaddingRight">여백 Right</RequireLabel>
            <CountingInput
              id={`setPaddingRight${id}`}
              ariaLabel="padding-right"
              count={paddingRight}
              setCount={setPaddingRight}
              limit={30}
              showIcon={true}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
            />
          </Grid.Column>
          <Grid.Column span={span}>
            <RequireLabel htmlFor={`setPaddingBottom${id}`}>
              여백 Bottom
            </RequireLabel>
            <CountingInput
              id={`setPaddingBottom${id}`}
              ariaLabel="padding-bottom"
              count={paddingBottom}
              setCount={setPaddingBottom}
              limit={30}
              showIcon={true}
              showFeedback={true}
              numberType={CountNumberType.INTEGER}
              unit="px"
            />
          </Grid.Column>
          <Grid.Column span={span}>
            <RequireLabel htmlFor={`setPaddingLeft${id}`}>
              여백 Left
            </RequireLabel>
            <CountingInput
              id={`setPaddingLeft${id}`}
              ariaLabel="padding-left"
              count={paddingLeft}
              setCount={setPaddingLeft}
              limit={30}
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

import type { Dispatch, FC, SetStateAction } from "react";

import { CountingInput } from "../CountingInput";
import { CountNumberType } from "../../types/count";
import * as Grid from "./Grid";
import { RequireLabel } from "../RequireLabel";
import { Switch } from "../Switch";
import { WithLabel } from "../WithLabel";
import type { GridCoreProps } from "../../interfaces/grid";
import constants from "../../constants";

interface Props extends GridCoreProps {
  id: string | number;
  paddingTop: number;
  setPaddingTop: Dispatch<SetStateAction<number>>;
  paddingRight: number;
  setPaddingRight: Dispatch<SetStateAction<number>>;
  paddingBottom: number;
  setPaddingBottom: Dispatch<SetStateAction<number>>;
  paddingLeft: number;
  setPaddingLeft: Dispatch<SetStateAction<number>>;
  isShowAllOption: boolean;
  setIsShowAllOption: Dispatch<SetStateAction<boolean>>;
}

export const PaddingOption: FC<Props> = ({
  id,
  paddingTop,
  setPaddingTop,
  paddingRight,
  setPaddingRight,
  paddingBottom,
  setPaddingBottom,
  paddingLeft,
  setPaddingLeft,
  isShowAllOption,
  setIsShowAllOption,
  span
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
          htmlFor={isShowAllOption ? `setPaddingTop${id}` : `setPadding${id}`}
        >
          {`여백 ${isShowAllOption ? "Top" : ""}`}
        </RequireLabel>
        <CountingInput
          id={isShowAllOption ? `setPaddingTop${id}` : `setPadding${id}`}
          ariaLabel={isShowAllOption ? "padding-top" : "padding"}
          count={paddingTop}
          setCount={isShowAllOption ? setPaddingTop : setPadding}
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
            checked={isShowAllOption}
            setChecked={setIsShowAllOption}
          />
        </WithLabel>
      </Grid.Column>
      {isShowAllOption && (
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

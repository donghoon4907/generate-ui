import type { FC } from "react";
import { useState } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { ISetStatePadding } from "../../../hooks/usePadding";
import type { IPadding } from "../../../model/padding";
import * as Grid from "../../partial/Grid";
import constants from "../../../constants";
import { RequireLabel } from "../../RequireLabel";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { WithLabel } from "../../WithLabel";
import { Switch } from "../../Switch";

interface Props extends IGridOption, IPadding, ISetStatePadding {
  id: string;
  defaultCheckAll?: boolean;
}

export const PaddingOption: FC<Props> = ({
  span,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft,
  id,
  defaultCheckAll = false
}) => {
  const [checkAll, setCheckAll] = useState(defaultCheckAll);

  const handlePaddingTop = (count: number) => {
    setPaddingTop(count);

    if (!checkAll) {
      setPaddingRight(count);
      setPaddingBottom(count);
      setPaddingLeft(count);
    }
  };

  return (
    <>
      <Grid.Column span={span}>
        <RequireLabel
          htmlFor={checkAll ? `setPaddingTop${id}` : `setPadding${id}`}
        >
          {checkAll ? "상단" : "전체"}
        </RequireLabel>
        <CountingInput
          id={checkAll ? `setPaddingTop${id}` : `setPadding${id}`}
          ariaLabel={checkAll ? "padding-top" : "padding"}
          count={paddingTop}
          setCount={handlePaddingTop}
          limit={30}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
        <WithLabel
          id={`checkAllPadding${id}`}
          label={constants.label.showAllPadding}
        >
          <Switch
            id={`checkAllPadding${id}`}
            width={40}
            checked={checkAll}
            setChecked={setCheckAll}
          />
        </WithLabel>
      </Grid.Column>
      {checkAll && (
        <>
          <Grid.Column span={span}>
            <RequireLabel htmlFor={`setPaddingRight${id}`}>오른쪽</RequireLabel>
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
            <RequireLabel htmlFor={`setPaddingBottom${id}`}>하단</RequireLabel>
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
            <RequireLabel htmlFor={`setPaddingLeft${id}`}>왼쪽</RequireLabel>
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

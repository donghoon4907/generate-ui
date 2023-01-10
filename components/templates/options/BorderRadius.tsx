import type { FC } from "react";
import { useState } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IBorderRadius } from "../../../model/borderRadius";
import type { ISetStateBorderRadius } from "../../../hooks/useBorderRadius";
import * as Grid from "../../partial/Grid";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { RequireLabel } from "../../RequireLabel";
import { Switch } from "../../Switch";
import { WithLabel } from "../../WithLabel";
import constants from "../../../constants";

interface Props extends IGridOption, IBorderRadius, ISetStateBorderRadius {
  id: string;
  defaultCheckAll?: boolean;
}

export const BorderRadiusOption: FC<Props> = ({
  span,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  setBorderTopLeftRadius,
  setBorderTopRightRadius,
  setBorderBottomLeftRadius,
  setBorderBottomRightRadius,
  id,
  defaultCheckAll = false
}) => {
  const [checkAll, setCheckAll] = useState(defaultCheckAll);

  const handleBorderTopLeftRadius = (count: number) => {
    setBorderTopLeftRadius(count);

    if (!checkAll) {
      setBorderTopRightRadius(count);
      setBorderBottomLeftRadius(count);
      setBorderBottomRightRadius(count);
    }
  };

  return (
    <>
      <Grid.Column span={span}>
        <RequireLabel
          htmlFor={
            checkAll ? `setBorderTopLeftRadius${id}` : `setBorderRadius${id}`
          }
        >
          {checkAll ? "상단 왼쪽" : "전체"}
        </RequireLabel>
        <CountingInput
          id={checkAll ? `setBorderTopLeftRadius${id}` : `setBorderRadius${id}`}
          ariaLabel={checkAll ? "border-top-left-radius" : "border-radius"}
          count={borderTopLeftRadius}
          setCount={handleBorderTopLeftRadius}
          limit={100}
          showIcon={true}
          showFeedback={true}
          numberType={CountNumberType.INTEGER}
          unit="px"
        />
        <WithLabel
          id={`checkAllBorderRadius${id}`}
          label={constants.label.showAllBorderRadius}
        >
          <Switch
            id={`checkAllBorderRadius${id}`}
            width={40}
            checked={checkAll}
            setChecked={setCheckAll}
          />
        </WithLabel>
      </Grid.Column>
      {checkAll && (
        <>
          <Grid.Column span={span}>
            <RequireLabel htmlFor={`setBorderTopRightRadius${id}`}>
              상단 오른쪽
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
            <RequireLabel htmlFor={`setBorderBottomLeftRadius${id}`}>
              하단 왼쪽
            </RequireLabel>
            <CountingInput
              id={`setBorderBottomLeftRadius${id}`}
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
              하단 오른쪽
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

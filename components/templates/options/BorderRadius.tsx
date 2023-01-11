import type { FC } from "react";
import { useState } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IUseBorderRadius } from "../../../hooks/useBorderRadius";
import * as Grid from "../../partial/Grid";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { RequireLabel } from "../../RequireLabel";
import { Switch } from "../../Switch";
import { WithLabel } from "../../WithLabel";
import constants from "../../../constants";

interface Props extends IGridOption, IUseBorderRadius {
  id: string;
  defaultCheckAll?: boolean;
}

export const BorderRadiusOption: FC<Props> = ({
  span,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  setTopLeft,
  setTopRight,
  setBottomLeft,
  setBottomRight,
  id,
  defaultCheckAll = false
}) => {
  // 분리 설정 여부
  const [checkAll, setCheckAll] = useState(defaultCheckAll);

  const setBorderTopLeftRadius = (count: number) => {
    setTopLeft(count);

    if (!checkAll) {
      setTopRight(count);
      setBottomLeft(count);
      setBottomRight(count);
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
          count={topLeft}
          setCount={setBorderTopLeftRadius}
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
              count={topRight}
              setCount={setTopRight}
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
              count={bottomLeft}
              setCount={setBottomLeft}
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
              count={bottomRight}
              setCount={setBottomRight}
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

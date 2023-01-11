import type { FC } from "react";
import { useState } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IUsePadding } from "../../../hooks/usePadding";
import * as Grid from "../../partial/Grid";
import constants from "../../../constants";
import { RequireLabel } from "../../RequireLabel";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { WithLabel } from "../../WithLabel";
import { Switch } from "../../Switch";

interface Props extends IGridOption, IUsePadding {
  id: string;
  defaultCheckAll?: boolean;
}

export const PaddingOption: FC<Props> = ({
  span,
  top,
  right,
  bottom,
  left,
  setTop,
  setRight,
  setBottom,
  setLeft,
  id,
  defaultCheckAll = false
}) => {
  // 분리 설정 여부 체크
  const [checkAll, setCheckAll] = useState(defaultCheckAll);

  const setPaddingTop = (count: number) => {
    setTop(count);

    if (!checkAll) {
      setRight(count);
      setBottom(count);
      setLeft(count);
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
          count={top}
          setCount={setPaddingTop}
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
              count={right}
              setCount={setRight}
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
              count={bottom}
              setCount={setBottom}
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
              count={left}
              setCount={setLeft}
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

import type { FC } from "react";
import { useState } from "react";

import type { IPaddingOption } from "../../../interfaces/option";
import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import type { IModalLayoutOption } from "../../../interfaces/modal";
import { defaultModalLayoutOption } from "../../../interfaces/modal";
import * as Grid from "../../partial/Grid";
import { PaddingOption } from "../options/Padding";
import { PrimaryButton, WarningButton } from "../../Button";
import { DragableInputOption } from "../options/DragableInput";

interface Props extends IGridOption, IPaddingOption {
  layouts: IModalLayoutOption[];
  setLayouts: CoreSetState<IModalLayoutOption[]>;
}

export const ModalBodyForm: FC<Props> = ({
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
  setCheckAllPaddingOption,
  layouts,
  setLayouts
}) => {
  // body - 현재 드래그 중인 레이아웃 순서
  const [draggingOrder, setDraggingOrder] = useState(-1);
  // body - 현재 마우스 오버 중인 레이아웃 순서
  const [hoverOrder, setHoverOrder] = useState(-1);
  // 순서 변경 활성화 여부
  const [activeOrderMode, setActiveOrderMode] = useState(false);

  const handleCreateLayout = () => {
    setLayouts([...layouts, defaultModalLayoutOption]);
  };

  const handleToggleOrderMode = () => {
    setActiveOrderMode(!activeOrderMode);
  };

  return (
    <>
      <Grid.FoldableTitle span={span} title="여백 설정">
        <PaddingOption
          id="ModalBody"
          span={span}
          paddingTop={paddingTop}
          setPaddingTop={setPaddingTop}
          paddingRight={paddingRight}
          setPaddingRight={setPaddingRight}
          paddingBottom={paddingBottom}
          setPaddingBottom={setPaddingBottom}
          paddingLeft={paddingLeft}
          setPaddingLeft={setPaddingLeft}
          checkAllPaddingOption={checkAllPaddingOption}
          setCheckAllPaddingOption={setCheckAllPaddingOption}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="레이아웃 관리">
        <Grid.BorderColumn span={span}>
          <PrimaryButton type="button" onClick={handleCreateLayout}>
            레이아웃 추가
          </PrimaryButton>
        </Grid.BorderColumn>
        <Grid.BorderColumn span={span}>
          <WarningButton type="button" onClick={handleToggleOrderMode}>
            순서 변경 {activeOrderMode && "종료"}
          </WarningButton>
        </Grid.BorderColumn>
        {layouts.map((layout, index) => (
          <DragableInputOption
            key={`layout${index}`}
            span={span}
            order={index}
            layouts={layouts}
            setLayouts={setLayouts}
            draggingOrder={draggingOrder}
            setDraggingOrder={setDraggingOrder}
            hoverOrder={hoverOrder}
            setHoverOrder={setHoverOrder}
            isExpand={!activeOrderMode}
            {...layout}
          />
        ))}
      </Grid.FoldableTitle>
    </>
  );
};

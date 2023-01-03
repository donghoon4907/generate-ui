import type { FC } from "react";
import { useState } from "react";

import type { IPaddingOption } from "../../../interfaces/option";
import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import type { ISelectOption } from "../../../interfaces/select";
import {
  IModalButtonOption,
  defaultModalButtonOption
} from "../../../interfaces/modal";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CustomSelect } from "../../CustomSelect";
import { justifyContentOptions } from "../../options/Flex";
import { PaddingOption } from "../options/Padding";
import { PrimaryButton, WarningButton } from "../../Button";
import { DragableButtonOption } from "../options/DragableButton";

interface Props extends IGridOption, IPaddingOption {
  align: ISelectOption;
  setAlign: CoreSetState<ISelectOption>;
  buttons: IModalButtonOption[];
  setButtons: CoreSetState<IModalButtonOption[]>;
}
export const ModalFooterForm: FC<Props> = ({
  span,
  align,
  setAlign,
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
  buttons,
  setButtons
}) => {
  // 현재 드래그 중인 레이아웃 순서
  const [draggingOrder, setDraggingOrder] = useState(-1);
  // 현재 마우스 오버 중인 레이아웃 순서
  const [hoverOrder, setHoverOrder] = useState(-1);
  // 순서 변경 활성화 여부
  const [activeOrderMode, setActiveOrderMode] = useState(false);

  const handleCreateButton = () => {
    setButtons([...buttons, defaultModalButtonOption]);
  };

  const handleToggleOrderMode = () => {
    setActiveOrderMode(!activeOrderMode);
  };

  return (
    <>
      <Grid.FoldableTitle span={span} title="레이아웃 설정">
        <Grid.Column span={span}>
          <RequireLabel htmlFor="setFooterAlign">정렬</RequireLabel>
          <CustomSelect
            activeOption={align}
            setOption={setAlign}
            options={justifyContentOptions}
          />
        </Grid.Column>
      </Grid.FoldableTitle>
      <Grid.FoldableTitle span={span} title="여백 설정" defaultFold={false}>
        <PaddingOption
          id="ModalFooter"
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
      <Grid.FoldableTitle span={span} title="버튼 관리" defaultFold={false}>
        <Grid.BorderColumn span={span}>
          <PrimaryButton type="button" onClick={handleCreateButton}>
            버튼 추가
          </PrimaryButton>
        </Grid.BorderColumn>
        <Grid.BorderColumn span={span}>
          <WarningButton type="button" onClick={handleToggleOrderMode}>
            순서 변경 {activeOrderMode && "종료"}
          </WarningButton>
        </Grid.BorderColumn>
        {buttons.map((button, index) => (
          <DragableButtonOption
            key={`button${index}`}
            span={span}
            order={index}
            buttons={buttons}
            setButtons={setButtons}
            draggingOrder={draggingOrder}
            setDraggingOrder={setDraggingOrder}
            hoverOrder={hoverOrder}
            setHoverOrder={setHoverOrder}
            isExpand={!activeOrderMode}
            {...button}
          />
        ))}
      </Grid.FoldableTitle>
    </>
  );
};

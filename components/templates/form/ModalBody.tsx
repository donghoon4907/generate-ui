import type {
  ChangeEvent,
  Dispatch,
  FC,
  MouseEvent,
  SetStateAction
} from "react";

import type { IPaddingOption } from "../../../interfaces/option";
import type { IGridOption } from "../../../interfaces/grid";
import type { IModalLayoutOption } from "../../../interfaces/modal";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { PaddingOption } from "../options/Padding";
import { DangerButton, PrimaryButton } from "../../Button";
import { DefaultInput } from "../../Input";
import { FoldableTitle } from "../../FoldableTitle";

interface Props extends IGridOption, IPaddingOption {
  showPadding: boolean;
  setShowPadding: Dispatch<SetStateAction<boolean>>;
  showManageLayout: boolean;
  setShowManageLayout: Dispatch<SetStateAction<boolean>>;
  layouts: IModalLayoutOption[];
  setLayouts: Dispatch<SetStateAction<IModalLayoutOption[]>>;
  dragOrder: number;
  setDragOrder: Dispatch<SetStateAction<number>>;
  hoverOrder: number;
  setHoverOrder: Dispatch<SetStateAction<number>>;
}

export const ModalBodyForm: FC<Props> = ({
  span,
  showPadding,
  setShowPadding,
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
  showManageLayout,
  setShowManageLayout,
  layouts,
  setLayouts,
  dragOrder,
  setDragOrder,
  hoverOrder,
  setHoverOrder
}) => {
  const handleCreateLayout = () => {
    const nextLayout: IModalLayoutOption = {
      useLabel: true,
      label: "제목",
      useInput: true
    };

    setLayouts([...layouts, nextLayout]);
  };

  const handleRemoveLayout = (order: number) => {
    setLayouts(prevLayouts =>
      prevLayouts.filter((layout, index) => order !== index)
    );
  };

  const handleChangeLabel = (
    evt: ChangeEvent<HTMLInputElement>,
    order: number
  ) => {
    setLayouts(prevLayouts =>
      prevLayouts.map((layout, index) => {
        if (order === index) {
          return {
            ...layout,
            label: evt.target.value
          };
        }

        return layout;
      })
    );
  };

  const handleDragEnter = (order: number) => {
    if (dragOrder !== -1) {
      setHoverOrder(order);
    }
  };

  const handleDrag = (order: number) => {
    setDragOrder(order);
  };

  const handleDrop = (order: number) => {
    if (dragOrder !== order) {
      const cloneLayout = layouts;

      const [dragLayout] = cloneLayout.splice(dragOrder, 1);

      cloneLayout.splice(order, 0, dragLayout);

      setLayouts([...cloneLayout]);
    }
  };

  const handleDragEnd = () => {
    setDragOrder(-1);

    setHoverOrder(-1);
  };

  return (
    <>
      <Grid.FoldableTitle
        fold={showPadding}
        setFold={setShowPadding}
        span={span}
      >
        <span>여백 설정</span>
      </Grid.FoldableTitle>
      <PaddingOption
        id="ModalBody"
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
        span={showPadding ? 1 : 0}
      />
      <Grid.FoldableTitle
        fold={showManageLayout}
        setFold={setShowManageLayout}
        span={span}
      >
        <span>레이아웃 관리</span>
      </Grid.FoldableTitle>
      <Grid.Column span={showManageLayout ? 1 : 0}>
        <PrimaryButton type="button" onClick={handleCreateLayout}>
          레이아웃 추가
        </PrimaryButton>
      </Grid.Column>
      {layouts.map((layout, index) => (
        <Grid.DragableColumn
          key={`Layout${index}`}
          span={showManageLayout ? 1 : 0}
          onDragOver={evt => evt.preventDefault()}
          onDragStart={() => handleDrag(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          isDragEnter={hoverOrder === index}
        >
          <div>- 순서 {index + 1}</div>
          <FoldableTitle defaultFold={true} title="레이블 설정">
            <RequireLabel htmlFor={`setLabel${index}`}>레이블명</RequireLabel>
            <DefaultInput
              id={`setLabel${index}`}
              value={layout.label}
              onChange={evt => handleChangeLabel(evt, index)}
              draggable={true}
              onDragStart={evt => evt.preventDefault()}
            />
          </FoldableTitle>
          <FoldableTitle defaultFold={true} title="입력창 설정">
            <RequireLabel htmlFor={`setLabel${index}`}>레이블명</RequireLabel>
            <DefaultInput
              id={`setLabel${index}`}
              value={layout.label}
              onChange={evt => handleChangeLabel(evt, index)}
              draggable={true}
              onDragStart={evt => evt.preventDefault()}
            />
          </FoldableTitle>

          <DangerButton type="button" onClick={() => handleRemoveLayout(index)}>
            삭제
          </DangerButton>
        </Grid.DragableColumn>
      ))}
    </>
  );
};

import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IModalLayoutOption } from "../../../interfaces/modal";
import type { ISelectOption } from "../../../interfaces/select";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { DangerButton } from "../../Button";
import { DefaultInput } from "../../Input";
import { FoldableTitle } from "../../FoldableTitle";
import { labelPositionOptions } from "../../options/LabelPosition";
import { CustomSelect } from "../../CustomSelect";
import { modalInputTypeOptions } from "../../options/InputType";

interface Props extends IGridOption, IModalLayoutOption {
  order: number;
  layouts: IModalLayoutOption[];
  setLayouts: Dispatch<SetStateAction<IModalLayoutOption[]>>;
  draggingOrder: number;
  setDraggingOrder: Dispatch<SetStateAction<number>>;
  hoverOrder: number;
  setHoverOrder: Dispatch<SetStateAction<number>>;
}

export const DragableInputOption: FC<Props> = ({
  span,
  order,
  label,
  labelPos,
  inputType,
  layouts,
  setLayouts,
  draggingOrder,
  setDraggingOrder,
  hoverOrder,
  setHoverOrder
}) => {
  const updateLayout = (newLayout: Partial<IModalLayoutOption>) => {
    setLayouts(prevLayouts =>
      prevLayouts.map((layout, index) => {
        if (order === index) {
          return {
            ...layout,
            ...newLayout
          };
        }

        return layout;
      })
    );
  };
  const handleChangeLabel = (evt: ChangeEvent<HTMLInputElement>) => {
    const label = evt.target.value;

    updateLayout({ label });
  };

  const handleChangeLabelPos = (labelPos: ISelectOption) => {
    updateLayout({ labelPos });
  };

  const handleChangeInputType = (inputType: ISelectOption) => {
    updateLayout({ inputType });
  };

  const handleRemove = () => {
    setLayouts(prevLayouts =>
      prevLayouts.filter((_, index) => order !== index)
    );
  };

  const handleDragEnter = () => {
    if (draggingOrder !== -1) {
      setHoverOrder(order);
    }
  };

  const handleDragStart = () => {
    setDraggingOrder(order);
  };

  const handleDragEnd = () => {
    setDraggingOrder(-1);

    setHoverOrder(-1);
  };

  const handleDrop = () => {
    if (draggingOrder !== order) {
      const cloneLayout = layouts;

      const [dragLayout] = cloneLayout.splice(draggingOrder, 1);

      cloneLayout.splice(order, 0, dragLayout);

      setLayouts([...cloneLayout]);
    }
  };

  return (
    <Grid.DragableColumn
      span={span}
      onDragOver={evt => evt.preventDefault()}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
      isDragEnter={hoverOrder === order}
    >
      <div>- 순서 {order + 1}</div>
      <FoldableTitle title="레이블 설정">
        <RequireLabel htmlFor={`setLabel${order}`}>레이블 명</RequireLabel>
        <DefaultInput
          id={`setLabel${order}`}
          value={label}
          onChange={handleChangeLabel}
          draggable={true}
          onDragStart={evt => evt.preventDefault()}
        />
        <RequireLabel htmlFor={`setLabelPos${order}`}>레이블 위치</RequireLabel>
        <CustomSelect
          activeOption={labelPos}
          setOption={handleChangeLabelPos}
          options={labelPositionOptions}
        />
      </FoldableTitle>
      <FoldableTitle title="입력창 설정">
        <RequireLabel htmlFor={`setInputType${order}`}>입력 타입</RequireLabel>
        <CustomSelect
          activeOption={inputType}
          setOption={handleChangeInputType}
          options={modalInputTypeOptions}
        />
      </FoldableTitle>

      <DangerButton type="button" onClick={handleRemove}>
        삭제
      </DangerButton>
    </Grid.DragableColumn>
  );
};

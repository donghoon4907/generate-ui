import type { FC } from "react";
import { useState } from "react";

import type { CoreProps } from "../interfaces/core";
import type { IGridOption } from "../interfaces/grid";
import type {
  IModalButtonOption,
  IModalLayoutOption
} from "../interfaces/modal";
import type { CoreSetState } from "../types/core";
import * as Grid from "./partial/Grid";

interface Props extends CoreProps, IGridOption {
  // 아이템 순서
  order: number;
  // 아이템 전체 목록
  list: Array<IModalLayoutOption | IModalButtonOption>;
  // 아이템 전체 목록 수정 핸들러
  setList: CoreSetState<Array<IModalLayoutOption | IModalButtonOption>>;
  // 드래그 활성화 여부
  draggable: boolean;
}

export const GridDraggable: FC<Props> = ({
  children,
  span,
  order,
  list,
  setList,
  draggable
}) => {
  // 현재 드래그 중인 레이아웃 순서
  const [draggingOrder, setDraggingOrder] = useState(-1);
  // 현재 마우스 오버 중인 레이아웃 순서
  const [hoverOrder, setHoverOrder] = useState(-1);

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
      const cloneList = list;

      const [draggingItem] = cloneList.splice(draggingOrder, 1);

      cloneList.splice(order, 0, draggingItem);

      setList([...cloneList]);
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
      draggable={draggable}
    >
      {children}
    </Grid.DragableColumn>
  );
};

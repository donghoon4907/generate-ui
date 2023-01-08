import type { FC } from "react";

import type { CoreProps } from "../interfaces/core";
import type { IGridOption } from "../interfaces/grid";
import type {
  IModalButtonOption,
  IModalLayoutOption
} from "../interfaces/modal";
import type { CoreSetState } from "../types/core";
import * as Grid from "./partial/Grid";
import { useDispatch, useSelector } from "../context";
import { SET_DRAG_ORDER, SET_DROP_ORDER } from "../context/action";

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

export const GridOrdering: FC<Props> = ({
  children,
  span,
  order,
  list,
  setList,
  draggable
}) => {
  const dispatch = useDispatch();

  const { dragOrder, dropOrder } = useSelector();

  const handleDragEnter = () => {
    if (dragOrder !== -1) {
      dispatch({
        type: SET_DROP_ORDER,
        payload: order
      });
    }
  };

  const handleDragStart = () => {
    dispatch({
      type: SET_DRAG_ORDER,
      payload: order
    });
  };

  const handleDragEnd = () => {
    dispatch({
      type: SET_DRAG_ORDER,
      payload: -1
    });

    dispatch({
      type: SET_DROP_ORDER,
      payload: -1
    });
  };

  const handleDrop = () => {
    if (dragOrder !== dropOrder) {
      const cloneList = list;

      const [dragItem] = cloneList.splice(dragOrder, 1);

      cloneList.splice(order, 0, dragItem);

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
      isDragEnter={dropOrder === order}
      draggable={draggable}
    >
      {children}
    </Grid.DragableColumn>
  );
};

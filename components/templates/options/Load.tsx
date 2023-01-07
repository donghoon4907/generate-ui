import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type {
  IModalButtonOption,
  IModalLayoutOption
} from "../../../interfaces/modal";
import type { ISelectOption } from "../../../interfaces/select";
import * as Grid from "../../partial/Grid";
import { CustomSelect } from "../../CustomSelect";

interface Props extends IGridOption {
  // 순서
  order: number;
  // 아이템 전체 목록
  list: Array<IModalLayoutOption | IModalButtonOption>;
  // list 내 item의 세부 설정 핸들러
  updateItem: (
    options: Partial<IModalLayoutOption | IModalButtonOption>
  ) => void;
}

export const LoadOption: FC<Props> = ({ span, order, list, updateItem }) => {
  const handleLoad = (item: ISelectOption) => {
    if (confirm("선택한 설정을 불러오시겠습니까?")) {
      // label과 나머지 설정을 분리
      const { label, ...another } = list[+item.value];

      updateItem(another);
    }
  };

  const mapToList: ISelectOption[] = list.map((_, index) => ({
    label: `순서 ${index + 1}`,
    value: index.toString(),
    preview: null
  }));

  return (
    <Grid.FoldableTitle span={span} title="설정 불러오기">
      <Grid.Column span={span}>
        <div>
          <label>불러오기 목록</label>
        </div>
        <CustomSelect
          activeOption={mapToList[order]}
          setOption={handleLoad}
          options={mapToList}
        />
      </Grid.Column>
    </Grid.FoldableTitle>
  );
};

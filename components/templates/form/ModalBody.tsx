import type { FC } from "react";

import type { IPaddingOption } from "../../../interfaces/option";
import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import type { IModalLayoutOption } from "../../../interfaces/modal";
import { defaultModalLayoutOption } from "../../../interfaces/modal";
import * as Grid from "../../partial/Grid";
import { PaddingOption } from "../options/Padding";
import { PrimaryButton } from "../../Button";
import { DraggableInputOption } from "../options/DraggableInput";
import { ChangeOrderOption } from "../options/ChangeOrder";
import { InjectUseStateObjectArray } from "../../injections/UseState";

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
  const handleCreateLayout = () => {
    setLayouts([...layouts, defaultModalLayoutOption]);
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

        <ChangeOrderOption span={span}>
          {activeOrderMode =>
            layouts.map((layout, index) => (
              <InjectUseStateObjectArray
                index={index}
                setArray={setLayouts}
                key={`layout${index}`}
              >
                {updateItem => (
                  <DraggableInputOption
                    span={span}
                    order={index}
                    layouts={layouts}
                    setLayouts={setLayouts}
                    isExpand={!activeOrderMode}
                    updateItem={updateItem}
                    {...layout}
                  />
                )}
              </InjectUseStateObjectArray>
            ))
          }
        </ChangeOrderOption>
      </Grid.FoldableTitle>
    </>
  );
};

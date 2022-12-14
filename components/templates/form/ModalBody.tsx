import type { FC } from "react";

import type { IScrollOption } from "../../../interfaces/option";
import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import type { IModalLayoutOption } from "../../../interfaces/modal";
import { defaultModalLayoutOption } from "../../../interfaces/modal";
import * as Grid from "../../partial/Grid";
import { PaddingOption } from "../options/Padding";
import { PrimaryButton } from "../../Button";
import { ModalLayoutOption } from "../options/ModalLayout";
import { ChangeOrderOption } from "../options/ChangeOrder";
import { InjectUseStateObjectArray } from "../../injections/UseState";
import { ScrollOption } from "../options/Scroll";
import { GridOrdering } from "../../GridOrdering";

interface Props extends IGridOption, IScrollOption {
  layouts: IModalLayoutOption[];
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  setLayouts: CoreSetState<IModalLayoutOption[]>;
  setPaddingTop: CoreSetState<number>;
  setPaddingRight: CoreSetState<number>;
  setPaddingBottom: CoreSetState<number>;
  setPaddingLeft: CoreSetState<number>;
}

export const ModalBodyForm: FC<Props> = ({
  span,
  scrollThumbColor,
  setScrollThumbColor,
  layouts,
  setLayouts,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft
}) => {
  const displayName = "ModalBody";

  const handleCreateLayout = () => {
    setLayouts([...layouts, defaultModalLayoutOption]);
  };

  return (
    <>
      <Grid.FoldableTitle span={span} title="여백 설정">
        <PaddingOption
          id={displayName}
          span={span}
          top={paddingTop}
          right={paddingRight}
          bottom={paddingBottom}
          left={paddingLeft}
          setTop={setPaddingTop}
          setRight={setPaddingRight}
          setBottom={setPaddingBottom}
          setLeft={setPaddingLeft}
        />
      </Grid.FoldableTitle>
      <Grid.FoldableTitle span={span} title="스크롤 설정" defaultFold={false}>
        <ScrollOption
          id={displayName}
          span={span}
          scrollThumbColor={scrollThumbColor}
          setScrollThumbColor={setScrollThumbColor}
        />
      </Grid.FoldableTitle>

      <Grid.FoldableTitle span={span} title="레이아웃 관리" defaultFold={false}>
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
                  <GridOrdering
                    span={span}
                    order={index}
                    list={layouts}
                    setList={setLayouts}
                    draggable={activeOrderMode}
                  >
                    <ModalLayoutOption
                      span={span}
                      order={index}
                      layouts={layouts}
                      setLayouts={setLayouts}
                      isExpand={!activeOrderMode}
                      updateItem={updateItem}
                      {...layout}
                    />
                  </GridOrdering>
                )}
              </InjectUseStateObjectArray>
            ))
          }
        </ChangeOrderOption>
      </Grid.FoldableTitle>
    </>
  );
};

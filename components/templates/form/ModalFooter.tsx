import type { FC } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { CoreSetState } from "../../../types/core";
import type { ISelectOption } from "../../../interfaces/select";
import type { IModalButtonOption } from "../../../interfaces/modal";
import { defaultModalButtonOption } from "../../../interfaces/modal";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { CustomSelect } from "../../CustomSelect";
import { justifyContentOptions } from "../../options/Flex";
import { PaddingOption } from "../options/Padding";
import { PrimaryButton } from "../../Button";
import { ModalButtonOption } from "../options/ModalButton";
import { ChangeOrderOption } from "../options/ChangeOrder";
import { InjectUseStateObjectArray } from "../../injections/UseState";
import { GridOrdering } from "../../GridOrdering";

interface Props extends IGridOption {
  align: ISelectOption;
  buttons: IModalButtonOption[];
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
  setAlign: CoreSetState<ISelectOption>;
  setButtons: CoreSetState<IModalButtonOption[]>;
  setPaddingTop: CoreSetState<number>;
  setPaddingRight: CoreSetState<number>;
  setPaddingBottom: CoreSetState<number>;
  setPaddingLeft: CoreSetState<number>;
}
export const ModalFooterForm: FC<Props> = ({
  span,
  align,
  setAlign,
  buttons,
  setButtons,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  setPaddingTop,
  setPaddingRight,
  setPaddingBottom,
  setPaddingLeft
}) => {
  const handleCreateButton = () => {
    setButtons([...buttons, defaultModalButtonOption]);
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

      <Grid.FoldableTitle span={span} title="버튼 관리" defaultFold={false}>
        <Grid.BorderColumn span={span}>
          <PrimaryButton type="button" onClick={handleCreateButton}>
            버튼 추가
          </PrimaryButton>
        </Grid.BorderColumn>
        <ChangeOrderOption span={span}>
          {activeOrderMode =>
            buttons.map((button, index) => (
              <InjectUseStateObjectArray
                index={index}
                setArray={setButtons}
                key={`button${index}`}
              >
                {updateItem => (
                  <GridOrdering
                    span={span}
                    order={index}
                    list={buttons}
                    setList={setButtons}
                    draggable={activeOrderMode}
                  >
                    <ModalButtonOption
                      span={span}
                      order={index}
                      buttons={buttons}
                      setButtons={setButtons}
                      isExpand={!activeOrderMode}
                      updateItem={updateItem}
                      {...button}
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

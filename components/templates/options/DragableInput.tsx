import type { ChangeEvent, FC } from "react";
import { useState } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IModalLayoutOption } from "../../../interfaces/modal";
import type { ISelectOption } from "../../../interfaces/select";
import type { CoreSetState } from "../../../types/core";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { DangerButton } from "../../Button";
import { DefaultInput } from "../../Input";
import { labelPositionOptions } from "../../options/LabelPosition";
import { CustomSelect } from "../../CustomSelect";
import { modalInputTypeOptions } from "../../options/InputType";
import { FontOption } from "./Font";
import { ModalBodyLayoutTabType } from "../../../types/tab";
import { BorderRadiusOption } from "./BorderRadius";
import { PaddingOption } from "./Padding";
import { BorderOption } from "./Border";
import { RgbaOption } from "./Rgba";

interface Props extends IGridOption, IModalLayoutOption {
  order: number;
  layouts: IModalLayoutOption[];
  setLayouts: CoreSetState<IModalLayoutOption[]>;
  draggingOrder: number;
  setDraggingOrder: CoreSetState<number>;
  hoverOrder: number;
  setHoverOrder: CoreSetState<number>;
  isExpand: boolean;
}

export const DragableInputOption: FC<Props> = ({
  span,
  order,
  label,
  labelPos,
  inputType,
  inputColor,
  inputFontSize,
  inputLineHeight,
  inputLetterSpacing,
  inputTextAlign,
  inputPaddingTop,
  inputPaddingRight,
  inputPaddingBottom,
  inputPaddingLeft,
  inputBorderTopLeftRadius,
  inputBorderTopRightRadius,
  inputBorderBottomLeftRadius,
  inputBorderBottomRightRadius,
  inputBorderStyle,
  inputBorderColor,
  inputBorderWidth,
  inputBackgroundColorHex,
  inputBackgroundColorAlpha,
  layouts,
  setLayouts,
  draggingOrder,
  setDraggingOrder,
  hoverOrder,
  setHoverOrder,
  isExpand
}) => {
  const [activeTab, setActiveTab] = useState<ModalBodyLayoutTabType>(
    ModalBodyLayoutTabType.LABEL
  );

  const [checkAllPadding, setCheckAllPadding] = useState(false);

  const [checkAllBorderRadius, setCheckAllBorderRadius] = useState(false);

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

  const setLabelPos = (labelPos: ISelectOption) => {
    updateLayout({ labelPos });
  };

  const setInputType = (inputType: ISelectOption) => {
    updateLayout({ inputType });
  };

  const setInputColor = (inputColor: string) => {
    updateLayout({ inputColor });
  };

  const setInputFontSize = (inputFontSize: number) => {
    updateLayout({ inputFontSize });
  };

  const setInputLineHeight = (inputLineHeight: number) => {
    updateLayout({ inputLineHeight });
  };

  const setInputLetterSpacing = (inputLetterSpacing: number) => {
    updateLayout({ inputLetterSpacing });
  };

  const setInputTextAlign = (inputTextAlign: ISelectOption) => {
    updateLayout({ inputTextAlign });
  };

  const setInputPaddingTop = (inputPaddingTop: number) => {
    updateLayout({ inputPaddingTop });
  };

  const setInputPaddingRight = (inputPaddingRight: number) => {
    updateLayout({ inputPaddingRight });
  };

  const setInputPaddingBottom = (inputPaddingBottom: number) => {
    updateLayout({ inputPaddingBottom });
  };

  const setInputPaddingLeft = (inputPaddingLeft: number) => {
    updateLayout({ inputPaddingLeft });
  };

  const setInputBorderTopLeftRadius = (inputBorderTopLeftRadius: number) => {
    updateLayout({ inputBorderTopLeftRadius });
  };

  const setInputBorderTopRightRadius = (inputBorderTopRightRadius: number) => {
    updateLayout({ inputBorderTopRightRadius });
  };

  const setInputBorderBottomLeftRadius = (
    inputBorderBottomLeftRadius: number
  ) => {
    updateLayout({ inputBorderBottomLeftRadius });
  };

  const setInputBorderBottomRightRadius = (
    inputBorderBottomRightRadius: number
  ) => {
    updateLayout({ inputBorderBottomRightRadius });
  };

  const setInputBorderStyle = (inputBorderStyle: ISelectOption) => {
    updateLayout({ inputBorderStyle });
  };

  const setInputBorderColor = (inputBorderColor: string) => {
    updateLayout({ inputBorderColor });
  };

  const setInputBorderWidth = (inputBorderWidth: number) => {
    updateLayout({ inputBorderWidth });
  };

  const setInputBackgroundColorHex = (inputBackgroundColorHex: string) => {
    updateLayout({ inputBackgroundColorHex });
  };

  const setInputBackgroundColorRgb = (inputBackgroundColorRgb: string) => {
    updateLayout({ inputBackgroundColorRgb });
  };

  const setInputBackgroundColorAlpha = (inputBackgroundColorAlpha: number) => {
    updateLayout({ inputBackgroundColorAlpha });
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

  const handleClickTab = (activeTab: ModalBodyLayoutTabType) => {
    setActiveTab(activeTab);
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
      draggable={!isExpand}
    >
      <Grid.ResponsiveContainer span={span}>
        <Grid.ResponsiveRow span={span}>
          <div>
            {!isExpand && "-"} 순서 {order + 1}
          </div>
        </Grid.ResponsiveRow>
        {isExpand && (
          <>
            <Grid.ResponsiveRow span={span}>
              <Grid.Tab
                active={activeTab === ModalBodyLayoutTabType.LABEL}
                onClick={() => handleClickTab(ModalBodyLayoutTabType.LABEL)}
              >
                레이블 설정
              </Grid.Tab>
              <Grid.Tab
                active={activeTab === ModalBodyLayoutTabType.INPUT}
                onClick={() => handleClickTab(ModalBodyLayoutTabType.INPUT)}
              >
                입력창 설정
              </Grid.Tab>
            </Grid.ResponsiveRow>
            {activeTab === ModalBodyLayoutTabType.LABEL && (
              <Grid.FoldableTitle span={span} title="텍스트 설정">
                <Grid.Column span={span}>
                  <RequireLabel htmlFor={`setLabel${order}`}>
                    레이블 명
                  </RequireLabel>
                  <DefaultInput
                    id={`setLabel${order}`}
                    value={label}
                    onChange={handleChangeLabel}
                    // draggable={true}
                    // onDragStart={evt => evt.preventDefault()}
                  />
                </Grid.Column>
                <Grid.Column span={span}>
                  <RequireLabel htmlFor={`setLabelPos${order}`}>
                    레이블 위치
                  </RequireLabel>
                  <CustomSelect
                    activeOption={labelPos}
                    setOption={setLabelPos}
                    options={labelPositionOptions}
                  />
                </Grid.Column>
              </Grid.FoldableTitle>
            )}
            {activeTab === ModalBodyLayoutTabType.INPUT && (
              <>
                <Grid.FoldableTitle span={span} title="기본 설정">
                  <Grid.Column span={span}>
                    <RequireLabel htmlFor={`setInputType${order}`}>
                      입력 타입
                    </RequireLabel>
                    <CustomSelect
                      activeOption={inputType}
                      setOption={setInputType}
                      options={modalInputTypeOptions}
                    />
                  </Grid.Column>
                </Grid.FoldableTitle>
                <Grid.FoldableTitle
                  span={span}
                  title="텍스트 설정"
                  defaultFold={false}
                >
                  <FontOption
                    id={`DragableInput${order}`}
                    span={span}
                    color={inputColor}
                    setColor={setInputColor}
                    fontSize={inputFontSize}
                    setFontSize={setInputFontSize}
                    lineHeight={inputLineHeight}
                    setLineHeight={setInputLineHeight}
                    letterSpacing={inputLetterSpacing}
                    setLetterSpacing={setInputLetterSpacing}
                    textAlign={inputTextAlign}
                    setTextAlign={setInputTextAlign}
                  />
                </Grid.FoldableTitle>
                <Grid.FoldableTitle
                  span={span}
                  title="여백 설정"
                  defaultFold={false}
                >
                  <PaddingOption
                    id={`DragableInput${order}`}
                    span={span}
                    paddingTop={inputPaddingTop}
                    setPaddingTop={setInputPaddingTop}
                    paddingRight={inputPaddingRight}
                    setPaddingRight={setInputPaddingRight}
                    paddingBottom={inputPaddingBottom}
                    setPaddingBottom={setInputPaddingBottom}
                    paddingLeft={inputPaddingLeft}
                    setPaddingLeft={setInputPaddingLeft}
                    checkAllPaddingOption={checkAllPadding}
                    setCheckAllPaddingOption={setCheckAllPadding}
                  />
                </Grid.FoldableTitle>
                <Grid.FoldableTitle
                  span={span}
                  title="모서리각 설정"
                  defaultFold={false}
                >
                  <BorderRadiusOption
                    id={`DragableInput${order}`}
                    span={span}
                    borderTopLeftRadius={inputBorderTopLeftRadius}
                    setBorderTopLeftRadius={setInputBorderTopLeftRadius}
                    borderTopRightRadius={inputBorderTopRightRadius}
                    setBorderTopRightRadius={setInputBorderTopRightRadius}
                    borderBottomLeftRadius={inputBorderBottomLeftRadius}
                    setBorderBottomLeftRadius={setInputBorderBottomLeftRadius}
                    borderBottomRightRadius={inputBorderBottomRightRadius}
                    setBorderBottomRightRadius={setInputBorderBottomRightRadius}
                    checkAllBorderRadiusOption={checkAllBorderRadius}
                    setCheckAllBorderRadiusOption={setCheckAllBorderRadius}
                  />
                </Grid.FoldableTitle>
                <Grid.FoldableTitle
                  span={span}
                  title="테두리 설정"
                  defaultFold={false}
                >
                  <BorderOption
                    id={`DragableInput${order}`}
                    span={span}
                    borderStyle={inputBorderStyle}
                    setBorderStyle={setInputBorderStyle}
                    borderWidth={inputBorderWidth}
                    setBorderWidth={setInputBorderWidth}
                    borderColor={inputBorderColor}
                    setBorderColor={setInputBorderColor}
                  />
                </Grid.FoldableTitle>
                <Grid.FoldableTitle
                  span={span}
                  title="배경색 설정"
                  defaultFold={false}
                >
                  <RgbaOption
                    id={`DragableInput${order}`}
                    span={span}
                    hex={inputBackgroundColorHex}
                    setRgb={setInputBackgroundColorRgb}
                    setHex={setInputBackgroundColorHex}
                    alpha={inputBackgroundColorAlpha}
                    setAlpha={setInputBackgroundColorAlpha}
                  />
                </Grid.FoldableTitle>
              </>
            )}
            <Grid.Column span={span}>
              <DangerButton type="button" onClick={handleRemove}>
                삭제
              </DangerButton>
            </Grid.Column>
          </>
        )}
      </Grid.ResponsiveContainer>
    </Grid.DragableColumn>
  );
};

import type { ChangeEvent, FC } from "react";
import { useState, useCallback } from "react";

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
  labelColor,
  labelFontSize,
  labelLineHeight,
  labelLetterSpacing,
  labelFontWeight,
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
  inputBgColorHex,
  inputBgColorAlpha,
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

  const updateLayout = useCallback(
    (newLayout: Partial<IModalLayoutOption>) => {
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
    },
    [order, setLayouts]
  );

  const setLabelPos = (labelPos: ISelectOption) => {
    updateLayout({ labelPos });
  };

  const setLabelColor = useCallback(
    (labelColor: string) => {
      updateLayout({ labelColor });
    },
    [updateLayout]
  );

  const setLabelFontSize = (labelFontSize: number) => {
    updateLayout({ labelFontSize });
  };

  const setLabelLineHeight = (labelLineHeight: number) => {
    updateLayout({ labelLineHeight });
  };

  const setLabelLetterSpacing = (labelLetterSpacing: number) => {
    updateLayout({ labelLetterSpacing });
  };

  const setLabelFontWeight = (labelFontWeight: ISelectOption) => {
    updateLayout({ labelFontWeight });
  };

  const setInputType = (inputType: ISelectOption) => {
    updateLayout({ inputType });
  };

  const setInputColor = useCallback(
    (inputColor: string) => {
      updateLayout({ inputColor });
    },
    [updateLayout]
  );

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

  const setInputBgColorHex = useCallback(
    (inputBgColorHex: string) => {
      updateLayout({ inputBgColorHex });
    },
    [updateLayout]
  );

  const setInputBgColorAlpha = (inputBgColorAlpha: number) => {
    updateLayout({ inputBgColorAlpha });
  };

  const handleChangeLabel = (evt: ChangeEvent<HTMLInputElement>) => {
    const label = evt.target.value;

    updateLayout({ label });
  };

  const handleLoadLayout = (layout: ISelectOption) => {
    if (confirm("선택한 레이아웃의 설정을 불러오시겠습니까?")) {
      updateLayout(layouts[+layout.value]);
    }
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

  const mapToLayout: ISelectOption[] = layouts.map((_, index) => ({
    label: `레이아웃 순서 ${index + 1}`,
    value: index.toString(),
    preview: null
  }));

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
          <div>순서 {order + 1}</div>
        </Grid.ResponsiveRow>
        {!isExpand && (
          <Grid.ResponsiveRow span={span}>
            {!isExpand && <div>{`- Label: ${label}`}</div>}
          </Grid.ResponsiveRow>
        )}

        {isExpand && (
          <>
            <Grid.ResponsiveRow span={span}>
              <Grid.Tab
                active={activeTab === ModalBodyLayoutTabType.LABEL}
                onClick={() => handleClickTab(ModalBodyLayoutTabType.LABEL)}
              >
                레이블설정
              </Grid.Tab>
              <Grid.Tab
                active={activeTab === ModalBodyLayoutTabType.INPUT}
                onClick={() => handleClickTab(ModalBodyLayoutTabType.INPUT)}
              >
                입력창설정
              </Grid.Tab>
              <Grid.Tab
                active={activeTab === ModalBodyLayoutTabType.LOAD}
                onClick={() => handleClickTab(ModalBodyLayoutTabType.LOAD)}
              >
                불러오기
              </Grid.Tab>
            </Grid.ResponsiveRow>
            {activeTab === ModalBodyLayoutTabType.LABEL && (
              <>
                <Grid.FoldableTitle span={span} title="레이아웃 설정">
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
                <Grid.FoldableTitle
                  span={span}
                  title="텍스트 설정"
                  defaultFold={false}
                >
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
                  <FontOption
                    id={`LayoutLabel${order}`}
                    span={span}
                    color={labelColor}
                    setColor={setLabelColor}
                    fontSize={labelFontSize}
                    setFontSize={setLabelFontSize}
                    lineHeight={labelLineHeight}
                    setLineHeight={setLabelLineHeight}
                    letterSpacing={labelLetterSpacing}
                    setLetterSpacing={setLabelLetterSpacing}
                    fontWeight={labelFontWeight}
                    setFontWeight={setLabelFontWeight}
                  />
                </Grid.FoldableTitle>
              </>
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
                    id={`LayoutInput${order}`}
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
                    id={`LayoutInput${order}`}
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
                    id={`LayoutInput${order}`}
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
                    id={`LayoutInput${order}`}
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
                    id={`LayoutInput${order}`}
                    span={span}
                    hex={inputBgColorHex}
                    setHex={setInputBgColorHex}
                    alpha={inputBgColorAlpha}
                    setAlpha={setInputBgColorAlpha}
                  />
                </Grid.FoldableTitle>
              </>
            )}
            {activeTab === ModalBodyLayoutTabType.LOAD && (
              <>
                <Grid.FoldableTitle span={span} title="설정 불러오기">
                  <Grid.Column span={span}>
                    <div>
                      <label>레이아웃 목록</label>
                    </div>
                    <CustomSelect
                      activeOption={mapToLayout[order]}
                      setOption={handleLoadLayout}
                      options={mapToLayout}
                    />
                  </Grid.Column>
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
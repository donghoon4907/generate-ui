import type { ChangeEvent, FC } from "react";
import { useState, useCallback } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IModalButtonOption } from "../../../interfaces/modal";
import type { ISelectOption } from "../../../interfaces/select";
import type { CoreSetState } from "../../../types/core";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { DangerButton } from "../../Button";
import { FeedbackInput } from "../../Input";
import { CustomSelect } from "../../CustomSelect";
import { FontOption } from "./Font";
import { ModalFooterButtonTabType } from "../../../types/tab";
import { BorderRadiusOption } from "./BorderRadius";
import { PaddingOption } from "./Padding";
import { BorderOption } from "./Border";
import { RgbaOption } from "./Rgba";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";

interface Props extends IGridOption, IModalButtonOption {
  order: number;
  buttons: IModalButtonOption[];
  setButtons: CoreSetState<IModalButtonOption[]>;
  draggingOrder: number;
  setDraggingOrder: CoreSetState<number>;
  hoverOrder: number;
  setHoverOrder: CoreSetState<number>;
  isExpand: boolean;
}

export const DragableButtonOption: FC<Props> = ({
  span,
  order,
  buttons,
  setButtons,
  label,
  width,
  color,
  fontSize,
  lineHeight,
  letterSpacing,
  fontWeight,
  textAlign,
  textOverflow,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderStyle,
  borderColor,
  borderWidth,
  bgColorHex,
  bgColorAlpha,
  draggingOrder,
  setDraggingOrder,
  hoverOrder,
  setHoverOrder,
  isExpand
}) => {
  const [activeTab, setActiveTab] = useState<ModalFooterButtonTabType>(
    ModalFooterButtonTabType.BUTTON
  );

  const [checkAllPadding, setCheckAllPadding] = useState(false);

  const [checkAllBorderRadius, setCheckAllBorderRadius] = useState(false);

  const updateLayout = useCallback(
    (newButton: Partial<IModalButtonOption>) => {
      setButtons(prevButtons =>
        prevButtons.map((button, index) => {
          if (order === index) {
            return {
              ...button,
              ...newButton
            };
          }

          return button;
        })
      );
    },
    [order, setButtons]
  );

  const setWidth = (width: number) => {
    updateLayout({ width });
  };

  const setColor = useCallback(
    (color: string) => {
      updateLayout({ color });
    },
    [updateLayout]
  );

  const setFontSize = (fontSize: number) => {
    updateLayout({ fontSize });
  };

  const setLineHeight = (lineHeight: number) => {
    updateLayout({ lineHeight });
  };

  const setLetterSpacing = (letterSpacing: number) => {
    updateLayout({ letterSpacing });
  };

  const setFontWeight = (fontWeight: ISelectOption) => {
    updateLayout({ fontWeight });
  };

  const setTextAlign = (textAlign: ISelectOption) => {
    updateLayout({ textAlign });
  };

  const setTextOverflow = (textOverflow: ISelectOption) => {
    updateLayout({ textOverflow });
  };

  const setPaddingTop = (paddingTop: number) => {
    updateLayout({ paddingTop });
  };

  const setPaddingRight = (paddingRight: number) => {
    updateLayout({ paddingRight });
  };

  const setPaddingBottom = (paddingBottom: number) => {
    updateLayout({ paddingBottom });
  };

  const setPaddingLeft = (paddingLeft: number) => {
    updateLayout({ paddingLeft });
  };

  const setBorderTopLeftRadius = (borderTopLeftRadius: number) => {
    updateLayout({ borderTopLeftRadius });
  };

  const setBorderTopRightRadius = (borderTopRightRadius: number) => {
    updateLayout({ borderTopRightRadius });
  };

  const setBorderBottomLeftRadius = (borderBottomLeftRadius: number) => {
    updateLayout({ borderBottomLeftRadius });
  };

  const setBorderBottomRightRadius = (borderBottomRightRadius: number) => {
    updateLayout({ borderBottomRightRadius });
  };

  const setBorderStyle = (borderStyle: ISelectOption) => {
    updateLayout({ borderStyle });
  };

  const setBorderColor = (borderColor: string) => {
    updateLayout({ borderColor });
  };

  const setBorderWidth = (borderWidth: number) => {
    updateLayout({ borderWidth });
  };

  const setBgColorHex = useCallback(
    (bgColorHex: string) => {
      updateLayout({ bgColorHex });
    },
    [updateLayout]
  );

  const setBgColorAlpha = (bgColorAlpha: number) => {
    updateLayout({ bgColorAlpha });
  };

  const handleChangeLabel = (evt: ChangeEvent<HTMLInputElement>) => {
    const label = evt.target.value;

    updateLayout({ label });
  };

  const handleLoadButton = (button: ISelectOption) => {
    if (confirm("선택한 버튼의 설정을 불러오시겠습니까?")) {
      updateLayout(buttons[+button.value]);
    }
  };

  const handleRemove = () => {
    setButtons(prevButtons =>
      prevButtons.filter((_, index) => order !== index)
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
      const cloneButtons = buttons;

      const [dragButton] = cloneButtons.splice(draggingOrder, 1);

      cloneButtons.splice(order, 0, dragButton);

      setButtons([...cloneButtons]);
    }
  };

  const handleClickTab = (activeTab: ModalFooterButtonTabType) => {
    setActiveTab(activeTab);
  };

  const mapToButtons: ISelectOption[] = buttons.map((_, index) => ({
    label: `순서 ${index + 1}`,
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
            {!isExpand && <div>{`- Button: ${label}`}</div>}
          </Grid.ResponsiveRow>
        )}

        {isExpand && (
          <>
            <Grid.ResponsiveRow span={span}>
              <Grid.Tab
                active={activeTab === ModalFooterButtonTabType.BUTTON}
                onClick={() => handleClickTab(ModalFooterButtonTabType.BUTTON)}
              >
                버튼설정
              </Grid.Tab>
              <Grid.Tab
                active={activeTab === ModalFooterButtonTabType.LOAD}
                onClick={() => handleClickTab(ModalFooterButtonTabType.LOAD)}
              >
                불러오기
              </Grid.Tab>
            </Grid.ResponsiveRow>
            {activeTab === ModalFooterButtonTabType.BUTTON && (
              <>
                <Grid.FoldableTitle span={span} title="레이아웃 설정">
                  <Grid.Column span={span}>
                    <RequireLabel htmlFor={`setWidth${order}`}>
                      너비
                    </RequireLabel>
                    <CountingInput
                      id={`setWidth${order}`}
                      ariaLabel="너비"
                      count={width}
                      setCount={setWidth}
                      limit={100}
                      showIcon={true}
                      showFeedback={true}
                      numberType={CountNumberType.INTEGER}
                      unit="px"
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
                      버튼명
                    </RequireLabel>
                    <FeedbackInput
                      id={`setLabel${order}`}
                      value={label}
                      setValue={handleChangeLabel}
                      condition={label.length < 10}
                      invalidComment="버튼명은 10자 미만으로 입력하세요."
                    />
                  </Grid.Column>
                  <FontOption
                    id={`ModalFooterButton${order}`}
                    span={span}
                    color={color}
                    setColor={setColor}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    lineHeight={lineHeight}
                    setLineHeight={setLineHeight}
                    letterSpacing={letterSpacing}
                    setLetterSpacing={setLetterSpacing}
                    textAlign={textAlign}
                    setTextAlign={setTextAlign}
                    textOverflow={textOverflow}
                    setTextOverflow={setTextOverflow}
                    fontWeight={fontWeight}
                    setFontWeight={setFontWeight}
                  />
                </Grid.FoldableTitle>
                <Grid.FoldableTitle
                  span={span}
                  title="여백 설정"
                  defaultFold={false}
                >
                  <PaddingOption
                    id={`ModalFooterButton${order}`}
                    span={span}
                    paddingTop={paddingTop}
                    setPaddingTop={setPaddingTop}
                    paddingRight={paddingRight}
                    setPaddingRight={setPaddingRight}
                    paddingBottom={paddingBottom}
                    setPaddingBottom={setPaddingBottom}
                    paddingLeft={paddingLeft}
                    setPaddingLeft={setPaddingLeft}
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
                    id={`ModalFooterButton${order}`}
                    span={span}
                    borderTopLeftRadius={borderTopLeftRadius}
                    setBorderTopLeftRadius={setBorderTopLeftRadius}
                    borderTopRightRadius={borderTopRightRadius}
                    setBorderTopRightRadius={setBorderTopRightRadius}
                    borderBottomLeftRadius={borderBottomLeftRadius}
                    setBorderBottomLeftRadius={setBorderBottomLeftRadius}
                    borderBottomRightRadius={borderBottomRightRadius}
                    setBorderBottomRightRadius={setBorderBottomRightRadius}
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
                    id={`ModalFooterButton${order}`}
                    span={span}
                    borderStyle={borderStyle}
                    setBorderStyle={setBorderStyle}
                    borderWidth={borderWidth}
                    setBorderWidth={setBorderWidth}
                    borderColor={borderColor}
                    setBorderColor={setBorderColor}
                  />
                </Grid.FoldableTitle>
                <Grid.FoldableTitle
                  span={span}
                  title="배경색 설정"
                  defaultFold={false}
                >
                  <RgbaOption
                    id={`ModalFooterButton${order}`}
                    span={span}
                    hex={bgColorHex}
                    setHex={setBgColorHex}
                    alpha={bgColorAlpha}
                    setAlpha={setBgColorAlpha}
                  />
                </Grid.FoldableTitle>
              </>
            )}

            {activeTab === ModalFooterButtonTabType.LOAD && (
              <>
                <Grid.FoldableTitle span={span} title="설정 불러오기">
                  <Grid.Column span={span}>
                    <div>
                      <label>버튼 목록</label>
                    </div>
                    <CustomSelect
                      activeOption={mapToButtons[order]}
                      setOption={handleLoadButton}
                      options={mapToButtons}
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

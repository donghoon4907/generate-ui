import type { FC } from "react";
import { useState, useCallback } from "react";

import type { IGridOption } from "../../../interfaces/grid";
import type { IModalButtonOption } from "../../../interfaces/modal";
import type { ISelectOption } from "../../../interfaces/select";
import type { CoreSetState } from "../../../types/core";
import * as Grid from "../../partial/Grid";
import { RequireLabel } from "../../RequireLabel";
import { DangerButton } from "../../Button";
import { FeedbackInput } from "../../Input";
import { FontOption } from "./Font";
import { ModalFooterButtonTabType } from "../../../types/tab";
import { BorderRadiusOption } from "./BorderRadius";
import { PaddingOption } from "./Padding";
import { BorderOption } from "./Border";
import { RgbaOption } from "./Rgba";
import { CountingInput } from "../../CountingInput";
import { CountNumberType } from "../../../types/count";
import { useTab } from "../../../hooks/useTab";
import { LoadOption } from "./Load";

interface Props extends IGridOption, IModalButtonOption {
  order: number;
  buttons: IModalButtonOption[];
  setButtons: CoreSetState<IModalButtonOption[]>;
  updateItem: (option: Record<any, any>) => void;
  isExpand: boolean;
}

export const ModalButtonOption: FC<Props> = ({
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
  updateItem,
  isExpand
}) => {
  const [activeTab, setActiveTab] = useTab(ModalFooterButtonTabType.BUTTON);

  const [checkAllPadding, setCheckAllPadding] = useState(false);

  const [checkAllBorderRadius, setCheckAllBorderRadius] = useState(false);

  const setWidth = (width: number) => {
    updateItem({ width });
  };

  const setColor = useCallback(
    (color: string) => {
      updateItem({ color });
    },
    [updateItem]
  );

  const setFontSize = (fontSize: number) => {
    updateItem({ fontSize });
  };

  const setLineHeight = (lineHeight: number) => {
    updateItem({ lineHeight });
  };

  const setLetterSpacing = (letterSpacing: number) => {
    updateItem({ letterSpacing });
  };

  const setFontWeight = (fontWeight: ISelectOption) => {
    updateItem({ fontWeight });
  };

  const setTextAlign = (textAlign: ISelectOption) => {
    updateItem({ textAlign });
  };

  const setTextOverflow = (textOverflow: ISelectOption) => {
    updateItem({ textOverflow });
  };

  const setPaddingTop = (paddingTop: number) => {
    updateItem({ paddingTop });
  };

  const setPaddingRight = (paddingRight: number) => {
    updateItem({ paddingRight });
  };

  const setPaddingBottom = (paddingBottom: number) => {
    updateItem({ paddingBottom });
  };

  const setPaddingLeft = (paddingLeft: number) => {
    updateItem({ paddingLeft });
  };

  const setBorderTopLeftRadius = (borderTopLeftRadius: number) => {
    updateItem({ borderTopLeftRadius });
  };

  const setBorderTopRightRadius = (borderTopRightRadius: number) => {
    updateItem({ borderTopRightRadius });
  };

  const setBorderBottomLeftRadius = (borderBottomLeftRadius: number) => {
    updateItem({ borderBottomLeftRadius });
  };

  const setBorderBottomRightRadius = (borderBottomRightRadius: number) => {
    updateItem({ borderBottomRightRadius });
  };

  const setBorderStyle = (borderStyle: ISelectOption) => {
    updateItem({ borderStyle });
  };

  const setBorderColor = useCallback(
    (borderColor: string) => {
      updateItem({ borderColor });
    },
    [updateItem]
  );

  const setBorderWidth = (borderWidth: number) => {
    updateItem({ borderWidth });
  };

  const setBgColorHex = useCallback(
    (bgColorHex: string) => {
      updateItem({ bgColorHex });
    },
    [updateItem]
  );

  const setBgColorAlpha = (bgColorAlpha: number) => {
    updateItem({ bgColorAlpha });
  };

  const handleChangeLabel = (label: string) => {
    updateItem({ label });
  };

  const handleRemove = () => {
    setButtons(prevButtons =>
      prevButtons.filter((_, index) => order !== index)
    );
  };

  return (
    <Grid.ResponsiveContainer span={span}>
      <Grid.ResponsiveRow span={span}>
        <div>순서 {order + 1}</div>
      </Grid.ResponsiveRow>
      {!isExpand && (
        <Grid.ResponsiveRow span={span}>
          {!isExpand && <div>{`- 버튼명: ${label}`}</div>}
        </Grid.ResponsiveRow>
      )}

      {isExpand && (
        <>
          <Grid.ResponsiveRow span={span}>
            <Grid.Tab
              active={activeTab === ModalFooterButtonTabType.BUTTON}
              onClick={() => setActiveTab(ModalFooterButtonTabType.BUTTON)}
            >
              버튼설정
            </Grid.Tab>
            <Grid.Tab
              active={activeTab === ModalFooterButtonTabType.LOAD}
              onClick={() => setActiveTab(ModalFooterButtonTabType.LOAD)}
            >
              불러오기
            </Grid.Tab>
          </Grid.ResponsiveRow>
          {activeTab === ModalFooterButtonTabType.BUTTON && (
            <>
              <Grid.FoldableTitle span={span} title="기본 설정">
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
              </Grid.FoldableTitle>
              <Grid.FoldableTitle
                span={span}
                title="레이아웃 설정"
                defaultFold={false}
              >
                <Grid.Column span={span}>
                  <RequireLabel htmlFor={`setWidth${order}`}>너비</RequireLabel>
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
            <LoadOption
              span={span}
              order={order}
              list={buttons}
              updateItem={updateItem}
            />
          )}
          <Grid.Column span={span}>
            <DangerButton type="button" onClick={handleRemove}>
              삭제
            </DangerButton>
          </Grid.Column>
        </>
      )}
    </Grid.ResponsiveContainer>
  );
};

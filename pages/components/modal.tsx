import type { NextPage } from "next";
import Head from "next/head";
import type { CSSProperties } from "react";
import { useState, Fragment } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import type { ISelectOption } from "../../interfaces/select";
import * as Component from "../../components/partial/Component";
import * as Grid from "../../components/partial/Grid";
import { ModalTabType } from "../../types/tab";
import { mixinBtnDefault } from "../../theme/mixins/button";
import {
  IModalLayoutOption,
  defaultModalLayoutOption
} from "../../interfaces/modal";
import { ModalContainerForm } from "../../components/templates/form/ModalContainer";
import { ModalHeaderForm } from "../../components/templates/form/ModalHeader";
import { ModalBodyForm } from "../../components/templates/form/ModalBody";
import { InputTypeOption, PositionOption } from "../../types/select-option";
import { fontWeightOptions } from "../../components/options/FontWeight";
import constants from "../../constants";
import { useRgba } from "../../hooks/useRgba";
import { hexToRgb } from "../../lib/calc/rgb";

const Layer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  padding: 20px;
`;

const Modal = styled.div`
  border: 1px solid ${({ theme }) => theme.color.black};
  background: ${({ theme }) => theme.color.white};
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
`;

const CloseIconWrapper = styled.button<{ iconSize: number }>`
  width: ${({ iconSize }) => iconSize}px;
  height: ${({ iconSize }) => iconSize}px;

  & > svg {
    width: 100%;
    height: 100%;
    fill: #000;
  }

  ${mixinBtnDefault}
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: 500px;
  overflow-y: auto;
`;

const ComponentModal: NextPage = () => {
  /* order - constans */
  // grid span
  const GRID_SPAN = 1;
  /* order - state */
  // container - 너비
  const [width, setWidth] = useState(500);
  // container - 모서리 각
  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(10);
  const [borderTopRightRadius, setBorderTopRightRadius] = useState(10);
  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(10);
  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(10);
  // container - 배경색
  const [
    bgColorHex,
    setBgColorHex,
    bgColorAlpha,
    setBgColorAlpha,
    backgroundColor
  ] = useRgba(constants.color.whiteHex);
  // container - 모서리 각 모두 보기 여부
  const [checkAllBorderRadius, setCheckAllBorderRadius] = useState(false);
  // header - 제목
  const [headerTitle, setHeaderTitle] = useState("모달 제목");
  // header - 텍스트 색
  const [headerTitleColor, setHeaderTitleColor] = useState(
    constants.color.blackHex
  );
  // header - 텍스트 크기
  const [headerTitleFontSize, setHeaderTitleFontSize] = useState(16);
  // header - 텍스트 높이
  const [headerTitleLineHeight, setHeaderTitleLineHeight] = useState(25);
  // header - 자간
  const [headerTitleLetterSpacing, setHeaderTitleLetterSpacing] = useState(0);
  // header - 여백
  const [headerPaddingTop, setHeaderPaddingTop] = useState(10);
  const [headerPaddingRight, setHeaderPaddingRight] = useState(10);
  const [headerPaddingBottom, setHeaderPaddingBottom] = useState(10);
  const [headerPaddingLeft, setHeaderPaddingLeft] = useState(10);
  // header - 굵기
  const [headerTitleFontWeight, setHeaderTitleFontWeight] =
    useState<ISelectOption>(fontWeightOptions[3]);
  // header - 여백 모두 보기 여부
  const [checkAllHeaderPadding, setCheckAllHeaderPadding] = useState(false);
  // body - 여백
  const [bodyPaddingTop, setBodyPaddingTop] = useState(10);
  const [bodyPaddingRight, setBodyPaddingRight] = useState(10);
  const [bodyPaddingBottom, setBodyPaddingBottom] = useState(10);
  const [bodyPaddingLeft, setBodyPaddingLeft] = useState(10);
  // body - 여백 모두 보기 여부
  const [checkAllBodyPadding, setCheckAllBodyPadding] = useState(false);
  // header - 닫기 아이콘 크기
  const [closeIconSize, setCloseIconSize] = useState(20);
  // 탭 활성화 관리
  const [activeTab, setActiveTab] = useState<ModalTabType>(ModalTabType.MODAL);
  // container - 헤더 설정 활성화 여부
  const [checkAddHeader, setCheckAddHeader] = useState(true);
  // container - 푸터 설정 활성화 여부
  const [checkAddFooter, setCheckAddFooter] = useState(false);
  // body - 추가된 레이아웃 수
  const [layouts, setLayouts] = useState<IModalLayoutOption[]>([
    defaultModalLayoutOption
  ]);
  /* order - variable */
  // preview style
  const modalStyle: CSSProperties = {
    width,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    backgroundColor,
    overflow: "hidden"
  };

  const headerWrapperStyle: CSSProperties = {
    paddingTop: headerPaddingTop,
    paddingRight: headerPaddingRight,
    paddingBottom: headerPaddingBottom,
    paddingLeft: headerPaddingLeft
  };

  const headerTitleStyle: CSSProperties = {
    color: headerTitleColor,
    fontSize: headerTitleFontSize,
    lineHeight: `${headerTitleLineHeight}px`,
    letterSpacing: headerTitleLetterSpacing,
    fontWeight: headerTitleFontWeight.value
  };

  const bodyWrapperStyle: CSSProperties = {
    paddingTop: bodyPaddingTop,
    paddingRight: bodyPaddingRight,
    paddingBottom: bodyPaddingBottom,
    paddingLeft: bodyPaddingLeft
  };
  /* handler */
  const handleExport = () => {};

  const handleClickTab = (activeTab: ModalTabType) => {
    setActiveTab(activeTab);
  };

  return (
    <>
      <Head>
        <title>Components - Modal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component.Container>
        <Component.Section>
          <Component.Header>Preview</Component.Header>
          <Layer>
            <Modal style={modalStyle}>
              {checkAddHeader && (
                <ModalHeader style={headerWrapperStyle}>
                  <span style={headerTitleStyle}>{headerTitle}</span>
                  <CloseIconWrapper type="button" iconSize={closeIconSize}>
                    <AiOutlineClose />
                  </CloseIconWrapper>
                </ModalHeader>
              )}

              <ModalBody style={bodyWrapperStyle}>
                {layouts.map((layout, index) => {
                  const {
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
                    inputBgColorAlpha
                  } = layout;

                  const labelPosValue = labelPos.value;

                  const rgb = hexToRgb(inputBgColorHex);

                  const inputBgColor = rgb
                    ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${inputBgColorAlpha})`
                    : "inherit";

                  const containerStyle: CSSProperties = {
                    display: "flex"
                  };

                  const labelStyle: CSSProperties = {
                    color: labelColor,
                    fontSize: labelFontSize,
                    lineHeight: `${labelLineHeight}px`,
                    letterSpacing: labelLetterSpacing,
                    fontWeight: labelFontWeight.value
                  };

                  const inputWrapperStyle: CSSProperties = {
                    flex: 1,
                    borderTopLeftRadius: inputBorderTopLeftRadius,
                    borderTopRightRadius: inputBorderTopRightRadius,
                    borderBottomLeftRadius: inputBorderBottomLeftRadius,
                    borderBottomRightRadius: inputBorderBottomRightRadius,
                    borderStyle: inputBorderStyle.value,
                    borderWidth: inputBorderWidth,
                    borderColor: inputBorderColor,
                    backgroundColor: inputBgColor,
                    overflow: "hidden"
                  };

                  const inputStyle: CSSProperties = {
                    color: inputColor,
                    fontSize: inputFontSize,
                    lineHeight: `${inputLineHeight}px`,
                    letterSpacing: inputLetterSpacing,
                    textAlign: inputTextAlign.value as any,
                    width: "100%",
                    paddingTop: inputPaddingTop,
                    paddingRight: inputPaddingRight,
                    paddingBottom: inputPaddingBottom,
                    paddingLeft: inputPaddingLeft,
                    borderTopLeftRadius: inputBorderTopLeftRadius,
                    borderTopRightRadius: inputBorderTopRightRadius,
                    borderBottomLeftRadius: inputBorderBottomLeftRadius,
                    borderBottomRightRadius: inputBorderBottomRightRadius,
                    border: "none",
                    backgroundColor: inputBgColor,
                    verticalAlign: "middle"
                  };

                  if (inputType.value === InputTypeOption.TEXTAREA) {
                    inputStyle.resize = "none";
                    inputWrapperStyle.height = "100px";
                    inputStyle.height = "100px";
                  }

                  if (labelPosValue === PositionOption.TOP) {
                    containerStyle.flexDirection = "column";
                  } else {
                    containerStyle.justifyContent = "space-between";
                    containerStyle.alignItems = "center";
                    containerStyle.gap = 5;

                    if (labelPosValue === PositionOption.RIGHT) {
                      inputWrapperStyle.order = 1;
                      labelStyle.order = 2;
                    } else if (labelPosValue === PositionOption.LEFT) {
                      inputWrapperStyle.order = 2;
                      labelStyle.order = 1;
                    }

                    if (inputType.value === InputTypeOption.TEXTAREA) {
                      labelStyle.height = "100px";
                    }
                  }

                  return (
                    <Fragment key={`PreviewLayout${index}`}>
                      <div style={containerStyle}>
                        <div style={labelStyle}>{label}</div>
                        <div style={inputWrapperStyle}>
                          {inputType.value === InputTypeOption.TEXTAREA ? (
                            <textarea style={inputStyle} />
                          ) : (
                            <input type={inputType.value} style={inputStyle} />
                          )}
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </ModalBody>
            </Modal>
          </Layer>
        </Component.Section>
        <Component.RightAside>
          <Component.Header>Option</Component.Header>
          <Component.Scrollable>
            <Grid.ResponsiveContainer span={GRID_SPAN}>
              <Grid.ResponsiveRow span={GRID_SPAN}>
                <Grid.Tab
                  active={activeTab === ModalTabType.MODAL}
                  onClick={() => handleClickTab(ModalTabType.MODAL)}
                >
                  Container
                </Grid.Tab>
                {checkAddHeader && (
                  <Grid.Tab
                    active={activeTab === ModalTabType.HEADER}
                    onClick={() => handleClickTab(ModalTabType.HEADER)}
                  >
                    Header
                  </Grid.Tab>
                )}

                <Grid.Tab
                  active={activeTab === ModalTabType.BODY}
                  onClick={() => handleClickTab(ModalTabType.BODY)}
                >
                  Body
                </Grid.Tab>
                {checkAddFooter && (
                  <Grid.Tab
                    active={activeTab === ModalTabType.FOOTER}
                    onClick={() => handleClickTab(ModalTabType.FOOTER)}
                  >
                    Footer
                  </Grid.Tab>
                )}
              </Grid.ResponsiveRow>
              {activeTab === ModalTabType.MODAL && (
                <ModalContainerForm
                  span={GRID_SPAN}
                  width={width}
                  setWidth={setWidth}
                  checkAddHeader={checkAddHeader}
                  setCheckAddHeader={setCheckAddHeader}
                  checkAddFooter={checkAddFooter}
                  setCheckAddFooter={setCheckAddFooter}
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
                  backgroundColorHex={bgColorHex}
                  setBackgroundColorHex={setBgColorHex}
                  backgroundColorAlpha={bgColorAlpha}
                  setBackgroundColorAlpha={setBgColorAlpha}
                />
              )}

              {activeTab === ModalTabType.HEADER && (
                <ModalHeaderForm
                  span={GRID_SPAN}
                  title={headerTitle}
                  setTitle={setHeaderTitle}
                  titleColor={headerTitleColor}
                  setTitleColor={setHeaderTitleColor}
                  titleFontSize={headerTitleFontSize}
                  setTitleFontSize={setHeaderTitleFontSize}
                  titleLineHeight={headerTitleLineHeight}
                  setTitleLineHeight={setHeaderTitleLineHeight}
                  titleLetterSpacing={headerTitleLetterSpacing}
                  setTitleLetterSpacing={setHeaderTitleLetterSpacing}
                  titleFontWeight={headerTitleFontWeight}
                  setTitleFontWeight={setHeaderTitleFontWeight}
                  paddingTop={headerPaddingTop}
                  setPaddingTop={setHeaderPaddingTop}
                  paddingRight={headerPaddingRight}
                  setPaddingRight={setHeaderPaddingRight}
                  paddingBottom={headerPaddingBottom}
                  setPaddingBottom={setHeaderPaddingBottom}
                  paddingLeft={headerPaddingLeft}
                  setPaddingLeft={setHeaderPaddingLeft}
                  checkAllPaddingOption={checkAllHeaderPadding}
                  setCheckAllPaddingOption={setCheckAllHeaderPadding}
                  closeIconSize={closeIconSize}
                  setCloseIconSize={setCloseIconSize}
                />
              )}
              {activeTab === ModalTabType.BODY && (
                <ModalBodyForm
                  span={GRID_SPAN}
                  paddingTop={bodyPaddingTop}
                  setPaddingTop={setBodyPaddingTop}
                  paddingRight={bodyPaddingRight}
                  setPaddingRight={setBodyPaddingRight}
                  paddingBottom={bodyPaddingBottom}
                  setPaddingBottom={setBodyPaddingBottom}
                  paddingLeft={bodyPaddingLeft}
                  setPaddingLeft={setBodyPaddingLeft}
                  checkAllPaddingOption={checkAllBodyPadding}
                  setCheckAllPaddingOption={setCheckAllBodyPadding}
                  layouts={layouts}
                  setLayouts={setLayouts}
                />
              )}
            </Grid.ResponsiveContainer>
          </Component.Scrollable>
        </Component.RightAside>
      </Component.Container>
    </>
  );
};

export default ComponentModal;

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
  IModalButtonOption,
  IModalLayoutOption,
  defaultModalButtonOption,
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
import { justifyContentOptions } from "../../components/options/Flex";
import { ModalFooterForm } from "../../components/templates/form/ModalFooter";
import { generateTextOverflow } from "../../lib/calc/style";
import { borderStyleOptions } from "../../components/options/BorderStyle";
import { usePadding } from "../../hooks/usePadding";

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
  background: ${({ theme }) => theme.color.white};
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseIconWrapper = styled.button`
  & > svg {
    width: 100%;
    height: 100%;
  }

  ${mixinBtnDefault}
`;

const ModalBody = styled.div<{ thumbColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: 500px;
  overflow-y: auto;

  &::-webkit-scrollbar,
  textarea::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb,
  textarea::-webkit-scrollbar-thumb {
    background-color: ${({ thumbColor }) => thumbColor};
    border-radius: 5px;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
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
  // container - 테두리
  const [borderStyle, setBorderStyle] = useState<ISelectOption>(
    borderStyleOptions[1]
  );
  const [borderColor, setBorderColor] = useState(constants.color.blackHex);
  const [borderWidth, setBorderWidth] = useState(1);
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
  // header - 굵기
  const [headerTitleFontWeight, setHeaderTitleFontWeight] =
    useState<ISelectOption>(fontWeightOptions[3]);
  // header - 여백
  const [headerPadding, setHeaderPadding] = usePadding(10);
  // body - 여백
  const [bodyPadding, setBodyPadding] = usePadding(10);
  // body - scroll color
  const [bodyScrollThumbColor, setBodyScrollThumbColor] = useState(
    constants.color.lightDividerHex
  );
  // header - 닫기 아이콘 크기
  const [closeIconSize, setCloseIconSize] = useState(20);
  // header - 닫기 아이콘 색상
  const [closeIconColor, setCloseIconColor] = useState(
    constants.color.blackHex
  );
  // 탭 활성화 관리
  const [activeTab, setActiveTab] = useState<ModalTabType>(ModalTabType.MODAL);
  // container - 헤더 설정 활성화 여부
  const [checkAddHeader, setCheckAddHeader] = useState(true);
  // container - 푸터 설정 활성화 여부
  const [checkAddFooter, setCheckAddFooter] = useState(false);
  // body - 추가된 레이아웃 목록
  const [layouts, setLayouts] = useState<IModalLayoutOption[]>([
    defaultModalLayoutOption
  ]);
  // footer - 정렬
  const [footerAlign, setFooterAlign] = useState<ISelectOption>(
    justifyContentOptions[2]
  );
  const [footerPadding, setFooterPadding] = usePadding(10);
  // footer - 여백 
  // footer - 추가된 버튼 목록
  const [buttons, setButtons] = useState<IModalButtonOption[]>([
    { ...defaultModalButtonOption, label: "취소" },
    { ...defaultModalButtonOption, label: "확인" }
  ]);
  /* order - variable */
  // preview style
  const modalStyle: CSSProperties = {
    width,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    border: `${borderWidth}px ${borderStyle.value} ${borderColor}`,
    backgroundColor,
    overflow: "hidden"
  };

  const headerWrapperStyle: CSSProperties = {
    paddingTop: headerPadding.top,
    paddingRight: headerPadding.right,
    paddingBottom: headerPadding.bottom,
    paddingLeft: headerPadding.left,
    borderBottom: `${borderWidth}px ${borderStyle.value} ${borderColor}`
  };

  const headerTitleStyle: CSSProperties = {
    color: headerTitleColor,
    fontSize: headerTitleFontSize,
    lineHeight: `${headerTitleLineHeight}px`,
    letterSpacing: headerTitleLetterSpacing,
    fontWeight: headerTitleFontWeight.value
  };

  const closeIconStyle: CSSProperties = {
    width: closeIconSize,
    height: closeIconSize,
    color: closeIconColor
  };

  const bodyWrapperStyle: CSSProperties = {
    paddingTop: bodyPadding.top,
    paddingRight: bodyPadding.right,
    paddingBottom: bodyPadding.bottom,
    paddingLeft: bodyPadding.left
  };

  const footerWrapperStyle: CSSProperties = {
    paddingTop: footerPadding.top,
    paddingRight: footerPadding.right,
    paddingBottom: footerPadding.bottom,
    paddingLeft: footerPadding.left,
    justifyContent: footerAlign.value,
    borderTop: `${borderWidth}px ${borderStyle.value} ${borderColor}`
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
                  <CloseIconWrapper type="button" style={closeIconStyle}>
                    <AiOutlineClose />
                  </CloseIconWrapper>
                </ModalHeader>
              )}

              <ModalBody
                style={bodyWrapperStyle}
                thumbColor={bodyScrollThumbColor}
              >
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
                    inputBgColorAlpha,
                    inputPlaceholder
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
                            <input
                              type={inputType.value}
                              placeholder={inputPlaceholder}
                              style={inputStyle}
                            />
                          )}
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </ModalBody>
              {checkAddFooter && (
                <ModalFooter style={footerWrapperStyle}>
                  {buttons.map((button, index) => {
                    const {
                      label,
                      lineHeight,
                      fontWeight,
                      textAlign,
                      textOverflow,
                      borderStyle,
                      bgColorHex,
                      bgColorAlpha,
                      ...btnStyles
                    } = button;

                    const rgb = hexToRgb(bgColorHex);

                    const bgColor = rgb
                      ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${bgColorAlpha})`
                      : "inherit";

                    const textOverflowStyle = generateTextOverflow(
                      textOverflow.value
                    );

                    const btnStyle: CSSProperties = {
                      ...btnStyles,
                      lineHeight: `${lineHeight}px`,
                      fontWeight: fontWeight.value,
                      textAlign: textAlign.value as any,
                      borderStyle: borderStyle.value,
                      backgroundColor: bgColor,
                      overflow: "hidden",
                      ...textOverflowStyle
                    };

                    return (
                      <button key={`${index}`} style={btnStyle}>
                        {label}
                      </button>
                    );
                  })}
                </ModalFooter>
              )}
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
                  borderStyle={borderStyle}
                  setBorderStyle={setBorderStyle}
                  borderWidth={borderWidth}
                  setBorderWidth={setBorderWidth}
                  borderColor={borderColor}
                  setBorderColor={setBorderColor}
                  backgroundColorHex={bgColorHex}
                  setBackgroundColorHex={setBgColorHex}
                  backgroundColorAlpha={bgColorAlpha}
                  setBackgroundColorAlpha={setBgColorAlpha}
                />
              )}

              {activeTab === ModalTabType.HEADER && (
                <ModalHeaderForm
                  span={GRID_SPAN}
                  paddingTop={headerPadding.top}
                  paddingRight={headerPadding.right}
                  paddingBottom={headerPadding.bottom}
                  paddingLeft={headerPadding.left}
                  setPadding={setHeaderPadding}
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
                  closeIconSize={closeIconSize}
                  setCloseIconSize={setCloseIconSize}
                  closeIconColor={closeIconColor}
                  setCloseIconColor={setCloseIconColor}
                />
              )}
              {activeTab === ModalTabType.BODY && (
                <ModalBodyForm
                  span={GRID_SPAN}
                  paddingTop={bodyPadding.top}
                  paddingRight={bodyPadding.right}
                  paddingBottom={bodyPadding.bottom}
                  paddingLeft={bodyPadding.left}
                  setPadding={setBodyPadding}
                  layouts={layouts}
                  setLayouts={setLayouts}
                  scrollThumbColor={bodyScrollThumbColor}
                  setScrollThumbColor={setBodyScrollThumbColor}
                />
              )}
              {activeTab === ModalTabType.FOOTER && (
                <ModalFooterForm
                  span={GRID_SPAN}
                  align={footerAlign}
                  setAlign={setFooterAlign}
                  paddingTop={footerPadding.top}
                  paddingRight={footerPadding.right}
                  paddingBottom={footerPadding.bottom}
                  paddingLeft={footerPadding.left}
                  setPadding={setFooterPadding}
                  buttons={buttons}
                  setButtons={setButtons}
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

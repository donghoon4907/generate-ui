import type { NextPage } from "next";
import type { CSSProperties } from "react";
import Head from "next/head";
import { useState, Fragment } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import type { ISelectOption } from "../../interfaces/select";
import type {
  IModalButtonOption,
  IModalLayoutOption
} from "../../interfaces/modal";
import * as Component from "../../components/partial/Component";
import * as Grid from "../../components/partial/Grid";
import { ModalTabType } from "../../types/tab";
import { mixinBtnDefault } from "../../theme/mixins/button";
import {
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
import { useBorderRadius } from "../../hooks/useBorderRadius";
import { useBorder } from "../../hooks/useBorder";
import { useFont } from "../../hooks/useFont";
import { useTab } from "../../hooks/useTab";

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
  // container - ??????
  const [width, setWidth] = useState(500);
  // container - ?????????
  const bgColorRgba = useRgba(constants.color.whiteHex);
  // container - ????????? ???
  const borderRadius = useBorderRadius(10);
  // container - ?????????
  const border = useBorder({
    style: borderStyleOptions[1],
    color: constants.color.blackHex,
    width: 1
  });
  // header - ??????
  const [headerTitle, setHeaderTitle] = useState("?????? ??????");
  // header - ????????? ???
  const headerTitleFont = useFont({
    color: constants.color.blackHex,
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0,
    fontWeight: fontWeightOptions[3]
  });
  // header - ??????
  const headerPadding = usePadding(10);
  // body - ??????
  const bodyPadding = usePadding(10);
  // body - scroll color
  const [bodyScrollThumbColor, setBodyScrollThumbColor] = useState(
    constants.color.lightDividerHex
  );
  // header - ?????? ????????? ??????
  const [closeIconSize, setCloseIconSize] = useState(20);
  // header - ?????? ????????? ??????
  const [closeIconColor, setCloseIconColor] = useState(
    constants.color.blackHex
  );
  // ??? ????????? ??????
  const [activeTab, setActiveTab] = useTab(ModalTabType.MODAL);
  // container - ?????? ?????? ????????? ??????
  const [checkAddHeader, setCheckAddHeader] = useState(true);
  // container - ?????? ?????? ????????? ??????
  const [checkAddFooter, setCheckAddFooter] = useState(false);
  // body - ????????? ???????????? ??????
  const [layouts, setLayouts] = useState<IModalLayoutOption[]>([
    defaultModalLayoutOption
  ]);
  // footer - ??????
  const [footerAlign, setFooterAlign] = useState<ISelectOption>(
    justifyContentOptions[2]
  );
  const footerPadding = usePadding(10);
  // footer - ??????
  // footer - ????????? ?????? ??????
  const [buttons, setButtons] = useState<IModalButtonOption[]>([
    { ...defaultModalButtonOption, label: "??????" },
    { ...defaultModalButtonOption, label: "??????" }
  ]);
  /* order - variable */
  // preview style
  const modalStyle: CSSProperties = {
    width,
    borderTopLeftRadius: borderRadius.topLeft,
    borderTopRightRadius: borderRadius.topRight,
    borderBottomLeftRadius: borderRadius.bottomLeft,
    borderBottomRightRadius: borderRadius.bottomRight,
    borderStyle: border.style.value,
    borderWidth: border.width,
    borderColor: border.color,
    backgroundColor: bgColorRgba.toString(),
    overflow: "hidden"
  };

  const headerWrapperStyle: CSSProperties = {
    paddingTop: headerPadding.top,
    paddingRight: headerPadding.right,
    paddingBottom: headerPadding.bottom,
    paddingLeft: headerPadding.left,
    borderBottom: `${border.width}px ${border.style.value} ${border.color}`
  };

  const headerTitleStyle: CSSProperties = {
    color: headerTitleFont.color,
    fontSize: headerTitleFont.fontSize,
    lineHeight: `${headerTitleFont.lineHeight}px`,
    letterSpacing: headerTitleFont.letterSpacing,
    fontWeight: headerTitleFont.fontWeight?.value
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
    borderTop: `${border.width}px ${border.style.value} ${border.color}`
  };
  /* handler */
  const handleExport = () => {};

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
                  onClick={() => setActiveTab(ModalTabType.MODAL)}
                >
                  Container
                </Grid.Tab>
                {checkAddHeader && (
                  <Grid.Tab
                    active={activeTab === ModalTabType.HEADER}
                    onClick={() => setActiveTab(ModalTabType.HEADER)}
                  >
                    Header
                  </Grid.Tab>
                )}

                <Grid.Tab
                  active={activeTab === ModalTabType.BODY}
                  onClick={() => setActiveTab(ModalTabType.BODY)}
                >
                  Body
                </Grid.Tab>
                {checkAddFooter && (
                  <Grid.Tab
                    active={activeTab === ModalTabType.FOOTER}
                    onClick={() => setActiveTab(ModalTabType.FOOTER)}
                  >
                    Footer
                  </Grid.Tab>
                )}
              </Grid.ResponsiveRow>
              {activeTab === ModalTabType.MODAL && (
                <ModalContainerForm
                  span={GRID_SPAN}
                  width={width}
                  checkAddHeader={checkAddHeader}
                  checkAddFooter={checkAddFooter}
                  borderTopLeftRadius={borderRadius.topLeft}
                  borderTopRightRadius={borderRadius.topRight}
                  borderBottomLeftRadius={borderRadius.bottomLeft}
                  borderBottomRightRadius={borderRadius.bottomRight}
                  borderStyle={border.style}
                  borderWidth={border.width}
                  borderColor={border.color}
                  backgroundColorHex={bgColorRgba.hex}
                  backgroundColorAlpha={bgColorRgba.alpha}
                  setWidth={setWidth}
                  setCheckAddHeader={setCheckAddHeader}
                  setCheckAddFooter={setCheckAddFooter}
                  setBorderTopLeftRadius={borderRadius.setTopLeft}
                  setBorderTopRightRadius={borderRadius.setTopRight}
                  setBorderBottomLeftRadius={borderRadius.setBottomLeft}
                  setBorderBottomRightRadius={borderRadius.setBottomRight}
                  setBorderStyle={border.setStyle}
                  setBorderColor={border.setColor}
                  setBorderWidth={border.setWidth}
                  setBackgroundColorHex={bgColorRgba.setHex}
                  setBackgroundColorAlpha={bgColorRgba.setAlpha}
                />
              )}

              {activeTab === ModalTabType.HEADER && (
                <ModalHeaderForm
                  span={GRID_SPAN}
                  paddingTop={headerPadding.top}
                  paddingRight={headerPadding.right}
                  paddingBottom={headerPadding.bottom}
                  paddingLeft={headerPadding.left}
                  title={headerTitle}
                  titleColor={headerTitleFont.color!}
                  titleFontSize={headerTitleFont.fontSize!}
                  titleLineHeight={headerTitleFont.lineHeight!}
                  titleLetterSpacing={headerTitleFont.letterSpacing!}
                  titleFontWeight={headerTitleFont.fontWeight!}
                  closeIconSize={closeIconSize}
                  closeIconColor={closeIconColor}
                  setPaddingTop={headerPadding.setTop}
                  setPaddingRight={headerPadding.setRight}
                  setPaddingBottom={headerPadding.setBottom}
                  setPaddingLeft={headerPadding.setLeft}
                  setTitle={setHeaderTitle}
                  setTitleColor={headerTitleFont.setColor}
                  setTitleFontSize={headerTitleFont.setFontSize}
                  setTitleLineHeight={headerTitleFont.setLineHeight}
                  setTitleLetterSpacing={headerTitleFont.setLetterSpacing}
                  setTitleFontWeight={headerTitleFont.setFontWeight}
                  setCloseIconSize={setCloseIconSize}
                  setCloseIconColor={setCloseIconColor}
                />
              )}
              {activeTab === ModalTabType.BODY && (
                <ModalBodyForm
                  span={GRID_SPAN}
                  scrollThumbColor={bodyScrollThumbColor}
                  layouts={layouts}
                  paddingTop={bodyPadding.top}
                  paddingRight={bodyPadding.right}
                  paddingBottom={bodyPadding.bottom}
                  paddingLeft={bodyPadding.left}
                  setScrollThumbColor={setBodyScrollThumbColor}
                  setLayouts={setLayouts}
                  setPaddingTop={bodyPadding.setTop}
                  setPaddingRight={bodyPadding.setRight}
                  setPaddingBottom={bodyPadding.setBottom}
                  setPaddingLeft={bodyPadding.setLeft}
                />
              )}
              {activeTab === ModalTabType.FOOTER && (
                <ModalFooterForm
                  span={GRID_SPAN}
                  align={footerAlign}
                  buttons={buttons}
                  paddingTop={footerPadding.top}
                  paddingRight={footerPadding.right}
                  paddingBottom={footerPadding.bottom}
                  paddingLeft={footerPadding.left}
                  setAlign={setFooterAlign}
                  setButtons={setButtons}
                  setPaddingTop={footerPadding.setTop}
                  setPaddingRight={footerPadding.setRight}
                  setPaddingBottom={footerPadding.setBottom}
                  setPaddingLeft={footerPadding.setLeft}
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

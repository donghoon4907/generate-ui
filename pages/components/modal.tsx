import type { NextPage } from "next";
import type { CSSProperties } from "react";
import Head from "next/head";
import { useState, Fragment } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import type { ISelectOption } from "../../interfaces/select";
import type { IModalButton, IModalLayout } from "../../model/modal";
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
import { InputTypeOption } from "../../types/select-option";
import { fontWeightOptions } from "../../components/options/FontWeight";
import constants from "../../constants";
import { useRgba } from "../../hooks/useRgba";
import { justifyContentOptions } from "../../components/options/Flex";
import { ModalFooterForm } from "../../components/templates/form/ModalFooter";
import { borderStyleOptions } from "../../components/options/BorderStyle";
import { usePadding } from "../../hooks/usePadding";
import { useBorderRadius } from "../../hooks/useBorderRadius";
import { useBorder } from "../../hooks/useBorder";
import { useFont } from "../../hooks/useFont";
import { useTab } from "../../hooks/useTab";
import { makeLayoutStyle } from "../../lib/style/modal-layout";
import { makeButtonStyle } from "../../lib/style/modal-button";
import { ConvertModal } from "../../lib/style/modal";
import { copyToClipboard } from "../../lib/copy/clipboard";
import { PrimaryButton } from "../../components/Button";

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

const CloseIconWrapper = styled.button`
  & > svg {
    width: 100%;
    height: 100%;
  }

  ${mixinBtnDefault}
`;

const ModalBody = styled.div<{ thumbColor: string }>`
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

const ButtonWrapper = styled.div`
  width: 100px;
`;

const ComponentModal: NextPage = () => {
  /* order - constans */
  // grid span
  const GRID_SPAN = 1;
  /* order - state */
  // container - 너비
  const [width, setWidth] = useState(500);
  // container - 배경색
  const bgColorRgba = useRgba(constants.color.whiteHex);
  // container - 모서리 각
  const borderRadius = useBorderRadius(10);
  // container - 테두리
  const border = useBorder({
    style: borderStyleOptions[1],
    color: constants.color.blackHex,
    width: 1
  });
  // header - 제목
  const [headerTitle, setHeaderTitle] = useState("모달 제목");
  // header - 텍스트 색
  const headerTitleFont = useFont({
    color: constants.color.blackHex,
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0,
    fontWeight: fontWeightOptions[3]
  });
  // header - 여백
  const headerPadding = usePadding(10);
  // body - 여백
  const bodyPadding = usePadding(10);
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
  const [activeTab, setActiveTab] = useTab(ModalTabType.MODAL);
  // container - 헤더 설정 활성화 여부
  const [checkAddHeader, setCheckAddHeader] = useState(true);
  // container - 푸터 설정 활성화 여부
  const [checkAddFooter, setCheckAddFooter] = useState(false);
  // body - 추가된 레이아웃 목록
  const [layouts, setLayouts] = useState<IModalLayout[]>([
    defaultModalLayoutOption
  ]);
  // footer - 정렬
  const [footerAlign, setFooterAlign] = useState<ISelectOption>(
    justifyContentOptions[2]
  );
  const footerPadding = usePadding(10);
  // footer - 여백
  // footer - 추가된 버튼 목록
  const [buttons, setButtons] = useState<IModalButton[]>([
    { ...defaultModalButtonOption, label: "취소" },
    { ...defaultModalButtonOption, label: "확인" }
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
    borderBottom: `${border.width}px ${border.style.value} ${border.color}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
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
    color: closeIconColor,
    cursor: "pointer"
  };

  const bodyWrapperStyle: CSSProperties = {
    paddingTop: bodyPadding.top,
    paddingRight: bodyPadding.right,
    paddingBottom: bodyPadding.bottom,
    paddingLeft: bodyPadding.left,
    display: "flex",
    flexDirection: "column",
    gap: 5,
    maxHeight: 500,
    overflowY: "auto"
  };

  const footerWrapperStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 5,
    paddingTop: footerPadding.top,
    paddingRight: footerPadding.right,
    paddingBottom: footerPadding.bottom,
    paddingLeft: footerPadding.left,
    justifyContent: footerAlign.value,
    borderTop: `${border.width}px ${border.style.value} ${border.color}`
  };
  /* handler */
  const handleExport = () => {
    const exportToModal = new ConvertModal({
      container: modalStyle,
      header: checkAddHeader ? headerWrapperStyle : null,
      headerTitle: checkAddHeader ? headerTitleStyle : null,
      headerIcon: checkAddHeader ? closeIconStyle : null,
      body: bodyWrapperStyle,
      footer: checkAddFooter ? footerWrapperStyle : null
    });

    exportToModal.generateModal({
      title: headerTitle,
      layouts,
      buttons
    });

    // if (html) {
    //   exportToSelect.addTemplate();
    // }

    copyToClipboard(exportToModal.getHtml);
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
                <div style={headerWrapperStyle}>
                  <span style={headerTitleStyle}>{headerTitle}</span>
                  <CloseIconWrapper type="button" style={closeIconStyle}>
                    <AiOutlineClose />
                  </CloseIconWrapper>
                </div>
              )}

              <ModalBody
                style={bodyWrapperStyle}
                thumbColor={bodyScrollThumbColor}
              >
                {layouts.map((layout, index) => {
                  const {
                    containerStyle,
                    labelStyle,
                    inputWrapperStyle,
                    inputStyle
                  } = makeLayoutStyle(layout);

                  return (
                    <Fragment key={`PreviewLayout${index}`}>
                      <div style={containerStyle}>
                        <div style={labelStyle}>{layout.label}</div>
                        <div style={inputWrapperStyle}>
                          {layout.inputType.value ===
                          InputTypeOption.TEXTAREA ? (
                            <textarea style={inputStyle} />
                          ) : (
                            <input
                              type={layout.inputType.value}
                              placeholder={layout.inputPlaceholder}
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
                <div style={footerWrapperStyle}>
                  {buttons.map((button, index) => {
                    const { btnStyle } = makeButtonStyle(button);

                    return (
                      <button key={`${index}`} style={btnStyle}>
                        {button.label}
                      </button>
                    );
                  })}
                </div>
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
          <Component.Footer>
            <ButtonWrapper>
              <PrimaryButton type="button" onClick={handleExport}>
                Export
              </PrimaryButton>
            </ButtonWrapper>
          </Component.Footer>
        </Component.RightAside>
      </Component.Container>
    </>
  );
};

export default ComponentModal;

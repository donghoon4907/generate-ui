import type { NextPage } from "next";
import Head from "next/head";
import type { CSSProperties } from "react";
import { useState, Fragment } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import * as Component from "../../components/partial/Component";
import * as Grid from "../../components/partial/Grid";
import { mixinBgLv1 } from "../../theme/mixins/background";
import { ModalTabType } from "../../types/tab";
import { mixinBtnDefault } from "../../theme/mixins/button";
import { DefaultInput } from "../../components/Input";
import { useTheme } from "../../hooks/useTheme";
import type { IModalLayoutOption } from "../../interfaces/modal";
import { ModalContainerForm } from "../../components/templates/form/ModalContainer";
import { ModalHeaderForm } from "../../components/templates/form/ModalHeader";
import { ModalBodyForm } from "../../components/templates/form/ModalBody";

const Layer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

const Modal = styled.div`
  border: 1px solid ${({ theme }) => theme.dividerColor};

  ${mixinBgLv1}
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
`;

const CloseIconWrapper = styled.button<{ iconSize: number }>`
  width: ${({ iconSize }) => iconSize}px;
  height: ${({ iconSize }) => iconSize}px;

  & > svg {
    width: 100%;
    height: 100%;
  }

  ${mixinBtnDefault}
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ComponentModal: NextPage = () => {
  /* order - state */
  const { theme } = useTheme();
  // container - 너비
  const [width, setWidth] = useState(500);
  // container - 모서리 각
  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(10);
  const [borderTopRightRadius, setBorderTopRightRadius] = useState(10);
  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(10);
  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(10);
  // container - 모서리 각 모두 보기 여부
  const [checkAllBorderRadius, setCheckAllBorderRadius] = useState(false);
  // header - 제목
  const [headerTitle, setHeaderTitle] = useState("모달 제목");
  // header - 텍스트 색
  const [headerTitleColor, setHeaderTitleColor] = useState(theme.textColor_lv0);
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
  // layout 설정 보이기
  const [showLayout, setShowLayout] = useState(true);
  // header - 제목 설정 보이기
  const [showHeaderTitle, setShowHeaderTitle] = useState(true);
  // header - padding 설정 보이기
  const [showHeaderPadding, setShowHeaderPadding] = useState(true);
  // body - padding 설정 보이기
  const [showBodyPadding, setShowBodyPadding] = useState(true);
  // 모서리 각 설정 보이기
  const [showBorderRadius, setShowBorderRadius] = useState(true);
  // 닫기 아이콘 설정 보이기
  const [showCloseIcon, setShowCloseIcon] = useState(true);
  // 탭 활성화 관리
  const [activeTab, setActiveTab] = useState<ModalTabType>(ModalTabType.MODAL);
  // container - 헤더 설정 활성화 여부
  const [checkAddHeader, setCheckAddHeader] = useState(true);
  // container - 푸터 설정 활성화 여부
  const [checkAddFooter, setCheckAddFooter] = useState(false);
  // body - 레이아웃 관리 보이기
  const [showManageLayout, setShowManageLayout] = useState(true);
  // body - 추가된 레이아웃 수
  const [layouts, setLayouts] = useState<IModalLayoutOption[]>([
    { useLabel: true, label: "제목", useInput: true }
  ]);
  // body - 현재 드래그 중인 레이아웃 순서
  const [dragOrder, setDragOrder] = useState(-1);
  // body - 현재 마우스 오버 중인 레이아웃 순서
  const [hoverOrder, setHoverOrder] = useState(-1);
  /* order - variable */
  // grid span
  const gridSpan = 1;
  // preview style
  const modalStyle: CSSProperties = {};
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
            <Modal
              style={{
                width,
                borderTopLeftRadius,
                borderTopRightRadius,
                borderBottomLeftRadius,
                borderBottomRightRadius,
                overflow: "hidden"
              }}
            >
              {checkAddHeader && (
                <ModalHeader
                  style={{
                    paddingTop: headerPaddingTop,
                    paddingRight: headerPaddingRight,
                    paddingBottom: headerPaddingBottom,
                    paddingLeft: headerPaddingLeft
                  }}
                >
                  <span
                    style={{
                      color: headerTitleColor,
                      fontSize: headerTitleFontSize,
                      lineHeight: `${headerTitleLineHeight}px`,
                      letterSpacing: headerTitleLetterSpacing
                    }}
                  >
                    {headerTitle}
                  </span>
                  <CloseIconWrapper type="button" iconSize={closeIconSize}>
                    <AiOutlineClose />
                  </CloseIconWrapper>
                </ModalHeader>
              )}

              <ModalBody
                style={{
                  paddingTop: bodyPaddingTop,
                  paddingRight: bodyPaddingRight,
                  paddingBottom: bodyPaddingBottom,
                  paddingLeft: bodyPaddingLeft
                }}
              >
                {layouts.map((layout, index) => (
                  <Fragment key={`PreviewLayout${index}`}>
                    <span>{layout.label}</span>
                    <DefaultInput />
                  </Fragment>
                ))}
              </ModalBody>
            </Modal>
          </Layer>
        </Component.Section>
        <Component.RightAside>
          <Component.Header>Option</Component.Header>
          <Component.Scrollable>
            <Grid.ResponsiveContainer span={gridSpan}>
              <Grid.Row span={gridSpan}>
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
              </Grid.Row>
              {activeTab === ModalTabType.MODAL && (
                <ModalContainerForm
                  span={gridSpan}
                  showLayout={showLayout}
                  setShowLayout={setShowLayout}
                  width={width}
                  setWidth={setWidth}
                  checkAddHeader={checkAddHeader}
                  setCheckAddHeader={setCheckAddHeader}
                  checkAddFooter={checkAddFooter}
                  setCheckAddFooter={setCheckAddFooter}
                  showBorderRadius={showBorderRadius}
                  setShowBorderRadius={setShowBorderRadius}
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
              )}

              {activeTab === ModalTabType.HEADER && (
                <ModalHeaderForm
                  span={gridSpan}
                  showTitle={showHeaderTitle}
                  setShowTitle={setShowHeaderTitle}
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
                  showPadding={showHeaderPadding}
                  setShowPadding={setShowHeaderPadding}
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
                  showCloseIcon={showCloseIcon}
                  setShowCloseIcon={setShowCloseIcon}
                  closeIconSize={closeIconSize}
                  setCloseIconSize={setCloseIconSize}
                />
              )}
              {activeTab === ModalTabType.BODY && (
                <ModalBodyForm
                  span={gridSpan}
                  showPadding={showBodyPadding}
                  setShowPadding={setShowBodyPadding}
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
                  showManageLayout={showManageLayout}
                  setShowManageLayout={setShowManageLayout}
                  layouts={layouts}
                  setLayouts={setLayouts}
                  dragOrder={dragOrder}
                  setDragOrder={setDragOrder}
                  hoverOrder={hoverOrder}
                  setHoverOrder={setHoverOrder}
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

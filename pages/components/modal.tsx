import type { NextPage } from "next";
import Head from "next/head";
import type { ChangeEvent, CSSProperties, MouseEvent } from "react";
import { useState, Fragment } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import * as Component from "../../components/partial/Component";
import * as Grid from "../../components/partial/Grid";
import { RequireLabel } from "../../components/RequireLabel";
import { mixinBgLv1 } from "../../theme/mixins/background";
import { CountingInput } from "../../components/CountingInput";
import { CountNumberType } from "../../types/count";
import { BorderRadiusOption } from "../../components/partial/BorderRadiusOption";
import { ModalTabType } from "../../types/tab";
import { PaddingOption } from "../../components/partial/PaddingOption";
import { mixinBtnDefault } from "../../theme/mixins/button";
import { DefaultInput, FeedbackInput } from "../../components/Input";
import { FontOption } from "../../components/partial/FontOption";
import { useTheme } from "../../hooks/useTheme";
import { WithLabel } from "../../components/WithLabel";
import { Switch } from "../../components/Switch";
import { ModalLayoutOption } from "../../interfaces/modal";
import { DangerButton, PrimaryButton } from "../../components/Button";

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
  // 너비
  const [width, setWidth] = useState(500);
  // 모서리 각
  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(10);

  const [borderTopRightRadius, setBorderTopRightRadius] = useState(10);

  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(10);

  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(10);
  // 모서리 각 모두 보기 여부
  const [isSetDetailBorderRadius, setIsSetDetailBorderRadius] = useState(false);
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
  // // header - 텍스트 정렬
  // const [headerTitleTextAlign, setHeaderTitleTextAlign] =
  //   useState<SelectOption>(textAlignOptions[0]);
  // header - 여백
  const [headerPaddingTop, setHeaderPaddingTop] = useState(10);
  const [headerPaddingRight, setHeaderPaddingRight] = useState(10);
  const [headerPaddingBottom, setHeaderPaddingBottom] = useState(10);
  const [headerPaddingLeft, setHeaderPaddingLeft] = useState(10);
  // header - 여백 모두 보기 여부
  const [showAllHeaderPadding, setShowAllHeaderPadding] = useState(false);
  // body - 여백
  const [bodyPaddingTop, setBodyPaddingTop] = useState(10);
  const [bodyPaddingRight, setBodyPaddingRight] = useState(10);
  const [bodyPaddingBottom, setBodyPaddingBottom] = useState(10);
  const [bodyPaddingLeft, setBodyPaddingLeft] = useState(10);
  // body - 여백 모두 보기 여부
  const [showAllBodyPadding, setShowAllBodyPadding] = useState(false);
  // header - 닫기 아이콘 크기
  const [closeIconSize, setCloseIconSize] = useState(20);
  // layout 설정 보이기
  const [showLayout, setShowLayout] = useState(true);
  // header - 텍스트 설정 보이기
  const [showHeaderText, setShowHeaderText] = useState(true);
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
  // body - 폼 관리 보이기
  const [showManageForm, setShowManageForm] = useState(true);
  // body - 레이아웃 관리 보이기
  const [showManageLayout, setShowManageLayout] = useState(true);
  // body - 추가된 레이아웃 수
  const [layouts, setLayouts] = useState<ModalLayoutOption[]>([
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

  const handleCreateLayout = () => {
    const nextLayout: ModalLayoutOption = {
      useLabel: true,
      label: "제목",
      useInput: true
    };

    setLayouts([...layouts, nextLayout]);
  };

  const handleRemoveLayout = (order: number) => {
    setLayouts(prevLayouts =>
      prevLayouts.filter((layout, index) => order !== index)
    );
  };

  const handleChangeLabel = (
    evt: ChangeEvent<HTMLInputElement>,
    order: number
  ) => {
    setLayouts(prevLayouts =>
      prevLayouts.map((layout, index) => {
        if (order === index) {
          return {
            ...layout,
            label: evt.target.value
          };
        }

        return layout;
      })
    );
  };

  const handleChangeOrder = () => {};

  const handleDragEnter = (order: number) => {
    if (dragOrder !== -1) {
      setHoverOrder(order);
    }
  };
  const handleDrag = (order: number) => {
    setDragOrder(order);
  };

  const handleDrop = (order: number) => {
    if (dragOrder !== order) {
      const cloneLayout = layouts;

      const [dragLayout] = cloneLayout.splice(dragOrder, 1);

      cloneLayout.splice(order, 0, dragLayout);

      setLayouts([...cloneLayout]);
    }

    setDragOrder(-1);

    setHoverOrder(-1);
  };

  const handleDragOver = (evt: MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
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
                <>
                  <Grid.FoldableTitle
                    fold={showLayout}
                    setFold={setShowLayout}
                    span={gridSpan}
                  >
                    <span>레이아웃 설정</span>
                  </Grid.FoldableTitle>
                  <Grid.Column span={showLayout ? 1 : 0}>
                    <RequireLabel htmlFor="setWidth">너비</RequireLabel>
                    <CountingInput
                      id="setWidth"
                      ariaLabel="너비"
                      count={width}
                      setCount={setWidth}
                      limit={500}
                      showIcon={true}
                      showFeedback={true}
                      numberType={CountNumberType.INTEGER}
                      unit="px"
                    />
                  </Grid.Column>
                  <Grid.Column span={showLayout ? 1 : 0}>
                    <RequireLabel htmlFor="">레이아웃 추가</RequireLabel>
                    <WithLabel id="addHeader" label="헤더">
                      <Switch
                        id="addHeader"
                        width={40}
                        checked={checkAddHeader}
                        setChecked={setCheckAddHeader}
                      />
                    </WithLabel>
                    <WithLabel id="addFooter" label="푸터">
                      <Switch
                        id="addFooter"
                        width={40}
                        checked={checkAddFooter}
                        setChecked={setCheckAddFooter}
                      />
                    </WithLabel>
                  </Grid.Column>

                  <Grid.FoldableTitle
                    fold={showBorderRadius}
                    setFold={setShowBorderRadius}
                    span={gridSpan}
                  >
                    <span>모서리각 설정</span>
                  </Grid.FoldableTitle>
                  <BorderRadiusOption
                    id="Modal"
                    borderTopLeftRadius={borderTopLeftRadius}
                    setBorderTopLeftRadius={setBorderTopLeftRadius}
                    borderTopRightRadius={borderTopRightRadius}
                    setBorderTopRightRadius={setBorderTopRightRadius}
                    borderBottomLeftRadius={borderBottomLeftRadius}
                    setBorderBottomLeftRadius={setBorderBottomLeftRadius}
                    borderBottomRightRadius={borderBottomRightRadius}
                    setBorderBottomRightRadius={setBorderBottomRightRadius}
                    isShowAllOption={isSetDetailBorderRadius}
                    setIsShowAllOption={setIsSetDetailBorderRadius}
                    span={showBorderRadius ? 1 : 0}
                  />
                </>
              )}

              {activeTab === ModalTabType.HEADER && (
                <>
                  <Grid.FoldableTitle
                    fold={showHeaderText}
                    setFold={setShowHeaderText}
                    span={gridSpan}
                  >
                    <span>제목 설정</span>
                  </Grid.FoldableTitle>
                  <Grid.Column span={showHeaderText ? 1 : 0}>
                    <RequireLabel htmlFor="setHeaderTitle">제목</RequireLabel>
                    <FeedbackInput
                      id="setHeaderTitle"
                      value={headerTitle}
                      setValue={setHeaderTitle}
                      limit={10}
                      showFeedback={true}
                    />
                  </Grid.Column>
                  <FontOption
                    id="HeaderTitle"
                    color={headerTitleColor}
                    setColor={setHeaderTitleColor}
                    fontSize={headerTitleFontSize}
                    setFontSize={setHeaderTitleFontSize}
                    lineHeight={headerTitleLineHeight}
                    setLineHeight={setHeaderTitleLineHeight}
                    letterSpacing={headerTitleLetterSpacing}
                    setLetterSpacing={setHeaderTitleLetterSpacing}
                    span={showHeaderText ? 1 : 0}
                  />
                  <Grid.FoldableTitle
                    fold={showHeaderPadding}
                    setFold={setShowHeaderPadding}
                    span={gridSpan}
                  >
                    <span>여백 설정</span>
                  </Grid.FoldableTitle>
                  <PaddingOption
                    id="ModalHeader"
                    paddingTop={headerPaddingTop}
                    setPaddingTop={setHeaderPaddingTop}
                    paddingRight={headerPaddingRight}
                    setPaddingRight={setHeaderPaddingRight}
                    paddingBottom={headerPaddingBottom}
                    setPaddingBottom={setHeaderPaddingBottom}
                    paddingLeft={headerPaddingLeft}
                    setPaddingLeft={setHeaderPaddingLeft}
                    isShowAllOption={showAllHeaderPadding}
                    setIsShowAllOption={setShowAllHeaderPadding}
                    span={showHeaderPadding ? 1 : 0}
                  />
                  <Grid.FoldableTitle
                    fold={showCloseIcon}
                    setFold={setShowCloseIcon}
                    span={gridSpan}
                  >
                    <span>아이콘 설정</span>
                  </Grid.FoldableTitle>
                  <Grid.Column span={showCloseIcon ? 1 : 0}>
                    <RequireLabel htmlFor="setCloseIconSize">크기</RequireLabel>
                    <CountingInput
                      id="setCloseIconSize"
                      ariaLabel="닫기 아이콘 크기"
                      count={closeIconSize}
                      setCount={setCloseIconSize}
                      limit={50}
                      showIcon={true}
                      showFeedback={true}
                      numberType={CountNumberType.INTEGER}
                      unit="px"
                    />
                  </Grid.Column>
                </>
              )}
              {activeTab === ModalTabType.BODY && (
                <>
                  <Grid.FoldableTitle
                    fold={showBodyPadding}
                    setFold={setShowBodyPadding}
                    span={gridSpan}
                  >
                    <span>여백 설정</span>
                  </Grid.FoldableTitle>
                  <PaddingOption
                    id="ModalBody"
                    paddingTop={bodyPaddingTop}
                    setPaddingTop={setBodyPaddingTop}
                    paddingRight={bodyPaddingRight}
                    setPaddingRight={setBodyPaddingRight}
                    paddingBottom={bodyPaddingBottom}
                    setPaddingBottom={setBodyPaddingBottom}
                    paddingLeft={bodyPaddingLeft}
                    setPaddingLeft={setBodyPaddingLeft}
                    isShowAllOption={showAllBodyPadding}
                    setIsShowAllOption={setShowAllBodyPadding}
                    span={showBodyPadding ? 1 : 0}
                  />
                  <Grid.FoldableTitle
                    fold={showManageLayout}
                    setFold={setShowManageLayout}
                    span={gridSpan}
                  >
                    <span>레이아웃 관리</span>
                  </Grid.FoldableTitle>
                  <Grid.Column span={showManageLayout ? 1 : 0}>
                    <PrimaryButton type="button" onClick={handleCreateLayout}>
                      레이아웃 추가
                    </PrimaryButton>
                  </Grid.Column>
                  {layouts.map((layout, index) => (
                    <Grid.Column
                      key={`Layout${index}`}
                      span={showManageLayout ? 1 : 0}
                      draggable={true}
                      onDragOver={handleDragOver}
                      onDragStart={() => handleDrag(index)}
                      onDragEnter={() => handleDragEnter(index)}
                      onDrop={() => handleDrop(index)}
                      showBefore={hoverOrder === index}
                    >
                      <RequireLabel htmlFor={`setOrder${index}`}>
                        순서
                      </RequireLabel>
                      <DefaultInput
                        id={`setOrder${index}`}
                        value={index + 1}
                        disabled
                      />
                      <RequireLabel htmlFor={`setLabel${index}`}>
                        Label 설정
                      </RequireLabel>
                      <DefaultInput
                        id={`setLabel${index}`}
                        value={layout.label}
                        onChange={evt => handleChangeLabel(evt, index)}
                      />
                      <DangerButton
                        type="button"
                        onClick={() => handleRemoveLayout(index)}
                      >
                        삭제
                      </DangerButton>
                    </Grid.Column>
                  ))}
                </>
              )}
            </Grid.ResponsiveContainer>
          </Component.Scrollable>
        </Component.RightAside>
      </Component.Container>
    </>
  );
};

export default ComponentModal;

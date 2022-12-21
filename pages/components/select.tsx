import type { NextPage } from "next";
import Head from "next/head";
import type { CSSProperties } from "react";
import { useState } from "react";
import styled from "styled-components";

import * as Component from "../../components/partial/Component";
import * as Grid from "../../components/partial/Grid";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { CountNumberType } from "../../types/count";
import { borderStyleOptions } from "../../components/options/BorderStyle";
import { RequireLabel } from "../../components/RequireLabel";
import { langOptions } from "../../components/options/Template";
import { textAlignOptions } from "../../components/options/TextAlign";
import { copyToClipboard } from "../../lib/copy/clipboard";
import type {
  SelectButtonOption,
  SelectListOption
} from "../../lib/style/select";
import { ConvertSelect } from "../../lib/style/select";
import { textOverflowOptions } from "../../components/options/TextOverflow";
import { LangOption } from "../../types/select-option";
import { useTextOverflow } from "../../hooks/useTextOverflow";
import { SelectTabType } from "../../types/tab";
import { CountingInput } from "../../components/CountingInput";
import { ISelectOption } from "../../interfaces/select";
import { BorderOption } from "../../components/templates/options/Border";
import { RgbaOption } from "../../components/templates/options/Rgba";
import { PreferenceOption } from "../../components/templates/options/Preference";
import { FontOption } from "../../components/templates/options/Font";
import { PaddingOption } from "../../components/templates/options/Padding";
import { BorderRadiusOption } from "../../components/templates/options/BorderRadius";

const OptionItem = styled.li`
  &:hover {
    background: ${({ theme }) => theme.activeBgColor};
  }
`;

const ComponentSelect: NextPage = () => {
  /* order - state */
  // 너비
  const [width, setWidth] = useState(200);
  // select - 텍스트 높이
  const [selectLineHeight, setSelectLineHeight] = useState(25);
  // option - 텍스트 높이
  const [optionLineHeight, setOptionLineHeight] = useState(25);
  // select - 자간
  const [selectLetterSpacing, setSelectLetterSpacing] = useState(0);
  // option - 자간
  const [optionLetterSpacing, setOptionLetterSpacing] = useState(0);
  // select - 제목
  const [label, setLabel] = useState("제목");
  // common - 배경색
  const [backgroundColorHex, setBackgroundColorHex] = useState("#ffffff");
  const [backgroundColorRgb, setBackgroundColorRgb] = useState("255,255,255");
  const [backgroundColorAlpha, setBackgroundColorAlpha] = useState(1);
  // select - 텍스트 색
  const [selectColor, setSelectColor] = useState("#000000");
  // option - 텍스트 색
  const [optionColor, setOptionColor] = useState("#000000");
  // select - 모서리 각
  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(4);
  const [borderTopRightRadius, setBorderTopRightRadius] = useState(4);
  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(4);
  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(4);
  // select - 모서리 각 모든 설정 보기 여부
  const [checkAllSelectBorderRadius, setCheckAllSelectBorderRadius] =
    useState(false);
  // select - 여백
  const [selectPaddingTop, setSelectPaddingTop] = useState(4);
  const [selectPaddingRight, setSelectPaddingRight] = useState(4);
  const [selectPaddingBottom, setSelectPaddingBottom] = useState(4);
  const [selectPaddingLeft, setSelectPaddingLeft] = useState(4);
  // select - 여백 모든 설정 보기 여부
  const [checAllSellectPadding, setCheckAllSelectPadding] = useState(false);
  // option - 여백
  const [optionPaddingTop, setOptionPaddingTop] = useState(4);
  const [optionPaddingRight, setOptionPaddingRight] = useState(4);
  const [optionPaddingBottom, setOptionPaddingBottom] = useState(4);
  const [optionPaddingLeft, setOptionPaddingLeft] = useState(4);
  // option - 여백 모든 설정 보기 여부
  const [checkAllOptionPadding, setCheckAllOptionPadding] = useState(false);
  // common - 테두리
  const [borderStyle, setBorderStyle] = useState<ISelectOption>(
    borderStyleOptions[1]
  );
  const [borderWidth, setBorderWidth] = useState(1);
  const [borderColor, setBorderColor] = useState("#000000");
  // common - 언어
  const [lang, setLang] = useState<ISelectOption>(langOptions[0]);
  // common - html 템플릿 추가 여부
  const [html, setHtml] = useState(false);
  // select - 텍스트 크기
  const [selectFontSize, setSelectFontSize] = useState(16);
  // option - 텍스트 크기
  const [optionFontSize, setOptionFontSize] = useState(16);
  // select - 텍스트 정렬 기본값: 가운데 정렬
  const [selectTextAlign, setSelectTextAlign] = useState<ISelectOption>(
    textAlignOptions[0]
  );
  // option - 텍스트 정렬 기본값: 가운데 정렬
  const [optionTextAlign, setOptionTextAlign] = useState<ISelectOption>(
    textAlignOptions[0]
  );
  // select - 텍스트 줄바꿈 기본값: 줄바꿈 허용
  const {
    textOverflow: selectTextOverflow,
    setTextOverflow: setSelectTextOverflow,
    textOverflowStyle: selectTextOverflowStyle
  } = useTextOverflow(textOverflowOptions[0]);
  // option - 텍스트 줄바꿈 기본값: 줄바꿈 허용
  const {
    textOverflow: optionTextOverflow,
    setTextOverflow: setOptionTextOverflow,
    textOverflowStyle: optionTextOverflowStyle
  } = useTextOverflow(textOverflowOptions[0]);
  // common - layout 설정 보이기
  const [showLayout, setShowLayout] = useState(true);
  // common - 테두리 설정 보이기
  const [showBorder, setShowBorder] = useState(true);
  // common - 배경색 설정 보이기
  const [showBackgroundColor, setShowBackgroundColor] = useState(true);
  // common - 환경 설정 보이기
  const [showPreference, setShowPreference] = useState(true);
  // select - 텍스트 설정 보이기
  const [showSelectText, setShowSelectText] = useState(true);
  // option - 텍스트 설정 보이기
  const [showOptionText, setShowOptionText] = useState(true);
  // select - padding 설정 보이기
  const [showSelectPadding, setShowSelectPadding] = useState(true);
  // option - padding 설정 보이기
  const [showOptionPadding, setShowOptionPadding] = useState(true);
  // select - 모서리 각 설정 보이기
  const [showSelectBorderRadius, setShowSelectBorderRadius] = useState(true);
  // 탭 활성화 관리
  const [activeTab, setActiveTab] = useState<SelectTabType>(
    SelectTabType.COMMON
  );
  /* order - variable */
  // grid span
  const gridSpan = 3;
  // select min height
  const minHeight =
    selectPaddingTop + selectPaddingBottom + selectLineHeight + borderWidth * 2;
  // preview style
  const selectWrapperStyle: CSSProperties = {
    width: "100%",
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderStyle: borderStyle.value,
    borderWidth,
    borderColor,
    backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
    backgroundImage: `url("data:image/svg+xml, %3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 5px center",
    backgroundSize: "16px 16px",
    padding: "0 20px 0 0",
    userSelect: "none",
    outline: "none",
    minHeight
  };
  const selectLabelStyle: CSSProperties = {
    width: "100%",
    display: "block",
    color: selectColor,
    fontSize: selectFontSize,
    lineHeight: `${selectLineHeight}px`,
    letterSpacing: selectLetterSpacing,
    textAlign: selectTextAlign.value as any,
    paddingTop: selectPaddingTop,
    paddingRight: selectPaddingRight,
    paddingBottom: selectPaddingBottom,
    paddingLeft: selectPaddingLeft,
    overflow: "hidden",
    ...selectTextOverflowStyle
  };
  const optionWrapperStyle: CSSProperties = {
    width: "100%",
    color: optionColor,
    fontSize: optionFontSize,
    lineHeight: `${optionLineHeight}px`,
    letterSpacing: optionLetterSpacing,
    textAlign: optionTextAlign.value as any,
    backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
    borderStyle: borderStyle.value,
    borderWidth,
    borderColor,
    userSelect: "none"
  };
  const optionLabelStyle: CSSProperties = {
    paddingTop: optionPaddingTop,
    paddingRight: optionPaddingRight,
    paddingBottom: optionPaddingBottom,
    paddingLeft: optionPaddingLeft,
    overflow: "hidden",
    ...optionTextOverflowStyle
  };
  /* handler */
  const handleExport = () => {
    const buttonOption: SelectButtonOption = {
      wrapperStyle: selectWrapperStyle,
      labelStyle: selectLabelStyle
    };

    const listOption: SelectListOption = {
      wrapperStyle: optionWrapperStyle,
      labelStyle: optionLabelStyle
    };

    const exportToSelect = new ConvertSelect(width, buttonOption, listOption);

    if (lang.value === LangOption.JS) {
      exportToSelect.generateSelect(label);
    }

    if (html) {
      exportToSelect.addTemplate();
    }

    copyToClipboard(exportToSelect.getHtml);
  };

  const handleClickTab = (activeTab: SelectTabType) => {
    setActiveTab(activeTab);
  };

  return (
    <>
      <Head>
        <title>Components - Select</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component.Container>
        <Component.Aside>
          <Preview width={width} onExport={handleExport}>
            <button type="button" style={selectWrapperStyle}>
              <span style={selectLabelStyle}>{label}</span>
            </button>
            <ul style={{ marginTop: 2, ...optionWrapperStyle }}>
              <OptionItem style={optionLabelStyle}>none</OptionItem>
              <OptionItem style={optionLabelStyle}>
                option 1 - Long text example
              </OptionItem>
            </ul>
          </Preview>
        </Component.Aside>
        <Component.Section>
          <Component.Header>Options</Component.Header>
          <Component.Scrollable>
            <Grid.ResponsiveContainer span={gridSpan}>
              <Grid.ResponsiveRow span={gridSpan}>
                <Grid.Tab
                  active={activeTab === SelectTabType.COMMON}
                  onClick={() => handleClickTab(SelectTabType.COMMON)}
                >
                  공통
                </Grid.Tab>
                <Grid.Tab
                  active={activeTab === SelectTabType.SELECT}
                  onClick={() => handleClickTab(SelectTabType.SELECT)}
                >
                  Select
                </Grid.Tab>
                <Grid.Tab
                  active={activeTab === SelectTabType.OPTION}
                  onClick={() => handleClickTab(SelectTabType.OPTION)}
                >
                  Option
                </Grid.Tab>
              </Grid.ResponsiveRow>
              {activeTab === SelectTabType.COMMON && (
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
                      limit={200}
                      showIcon={true}
                      showFeedback={true}
                      numberType={CountNumberType.INTEGER}
                      unit="px"
                    />
                  </Grid.Column>
                  <Grid.FoldableTitle
                    fold={showBorder}
                    setFold={setShowBorder}
                    span={gridSpan}
                  >
                    <span>테두리 설정</span>
                  </Grid.FoldableTitle>
                  <BorderOption
                    id="Select"
                    span={showBorder ? 1 : 0}
                    borderStyle={borderStyle}
                    setBorderStyle={setBorderStyle}
                    borderWidth={borderWidth}
                    setBorderWidth={setBorderWidth}
                    borderColor={borderColor}
                    setBorderColor={setBorderColor}
                  />
                  <Grid.FoldableTitle
                    fold={showBackgroundColor}
                    setFold={setShowBackgroundColor}
                    span={gridSpan}
                  >
                    <span>배경색 설정</span>
                  </Grid.FoldableTitle>
                  <RgbaOption
                    id="Select"
                    span={showBackgroundColor ? 1 : 0}
                    hex={backgroundColorHex}
                    setRgb={setBackgroundColorRgb}
                    setHex={setBackgroundColorHex}
                    alpha={backgroundColorAlpha}
                    setAlpha={setBackgroundColorAlpha}
                  />
                  <Grid.FoldableTitle
                    fold={showPreference}
                    setFold={setShowPreference}
                    span={gridSpan}
                  >
                    <span>환경 설정</span>
                  </Grid.FoldableTitle>
                  <PreferenceOption
                    span={showPreference ? 1 : 0}
                    lang={lang}
                    setLang={setLang}
                    html={html}
                    setHtml={setHtml}
                  />
                </>
              )}
              {activeTab === SelectTabType.SELECT && (
                <>
                  <Grid.FoldableTitle
                    fold={showSelectText}
                    setFold={setShowSelectText}
                    span={gridSpan}
                  >
                    <span>텍스트 설정</span>
                  </Grid.FoldableTitle>
                  <Grid.Column span={showSelectText ? 1 : 0}>
                    <RequireLabel htmlFor="setLabel">제목</RequireLabel>
                    <FeedbackInput
                      id="setLabel"
                      value={label}
                      setValue={setLabel}
                      limit={50}
                      showFeedback={true}
                    />
                  </Grid.Column>

                  <FontOption
                    id="Select"
                    span={showSelectText ? 1 : 0}
                    color={selectColor}
                    setColor={setSelectColor}
                    fontSize={selectFontSize}
                    setFontSize={setSelectFontSize}
                    lineHeight={selectLineHeight}
                    setLineHeight={setSelectLineHeight}
                    letterSpacing={selectLetterSpacing}
                    setLetterSpacing={setSelectLetterSpacing}
                    textAlign={selectTextAlign}
                    setTextAlign={setSelectTextAlign}
                    textOverflow={selectTextOverflow}
                    setTextOverflow={setSelectTextOverflow}
                  />
                  <Grid.FoldableTitle
                    fold={showSelectPadding}
                    setFold={setShowSelectPadding}
                    span={gridSpan}
                  >
                    <span>여백 설정</span>
                  </Grid.FoldableTitle>
                  <PaddingOption
                    id="Select"
                    span={showSelectPadding ? 1 : 0}
                    paddingTop={selectPaddingTop}
                    setPaddingTop={setSelectPaddingTop}
                    paddingRight={selectPaddingRight}
                    setPaddingRight={setSelectPaddingRight}
                    paddingBottom={selectPaddingBottom}
                    setPaddingBottom={setSelectPaddingBottom}
                    paddingLeft={selectPaddingLeft}
                    setPaddingLeft={setSelectPaddingLeft}
                    checkAllPaddingOption={checkAllSelectBorderRadius}
                    setCheckAllPaddingOption={setCheckAllSelectBorderRadius}
                  />
                  <Grid.FoldableTitle
                    fold={showSelectBorderRadius}
                    setFold={setShowSelectBorderRadius}
                    span={gridSpan}
                  >
                    <span>모서리각 설정</span>
                  </Grid.FoldableTitle>
                  <BorderRadiusOption
                    id="Select"
                    span={showSelectBorderRadius ? 1 : 0}
                    borderTopLeftRadius={borderTopLeftRadius}
                    setBorderTopLeftRadius={setBorderTopLeftRadius}
                    borderTopRightRadius={borderTopRightRadius}
                    setBorderTopRightRadius={setBorderTopRightRadius}
                    borderBottomLeftRadius={borderBottomLeftRadius}
                    setBorderBottomLeftRadius={setBorderBottomLeftRadius}
                    borderBottomRightRadius={borderBottomRightRadius}
                    setBorderBottomRightRadius={setBorderBottomRightRadius}
                    checkAllBorderRadiusOption={checkAllSelectBorderRadius}
                    setCheckAllBorderRadiusOption={
                      setCheckAllSelectBorderRadius
                    }
                  />
                </>
              )}
              {activeTab === SelectTabType.OPTION && (
                <>
                  <Grid.FoldableTitle
                    fold={showOptionText}
                    setFold={setShowOptionText}
                    span={gridSpan}
                  >
                    <span>텍스트 설정</span>
                  </Grid.FoldableTitle>
                  <FontOption
                    id="Option"
                    span={showOptionText ? 1 : 0}
                    color={optionColor}
                    setColor={setOptionColor}
                    fontSize={optionFontSize}
                    setFontSize={setOptionFontSize}
                    lineHeight={optionLineHeight}
                    setLineHeight={setOptionLineHeight}
                    letterSpacing={optionLetterSpacing}
                    setLetterSpacing={setOptionLetterSpacing}
                    textAlign={optionTextAlign}
                    setTextAlign={setOptionTextAlign}
                    textOverflow={optionTextOverflow}
                    setTextOverflow={setOptionTextOverflow}
                  />
                  <Grid.FoldableTitle
                    fold={showOptionPadding}
                    setFold={setShowOptionPadding}
                    span={gridSpan}
                  >
                    <span>여백 설정</span>
                  </Grid.FoldableTitle>
                  <PaddingOption
                    id="Option"
                    span={showOptionPadding ? 1 : 0}
                    paddingTop={optionPaddingTop}
                    setPaddingTop={setOptionPaddingTop}
                    paddingRight={optionPaddingRight}
                    setPaddingRight={setOptionPaddingRight}
                    paddingBottom={optionPaddingBottom}
                    setPaddingBottom={setOptionPaddingBottom}
                    paddingLeft={optionPaddingLeft}
                    setPaddingLeft={setOptionPaddingLeft}
                    checkAllPaddingOption={checkAllOptionPadding}
                    setCheckAllPaddingOption={setCheckAllOptionPadding}
                  />
                </>
              )}
            </Grid.ResponsiveContainer>
          </Component.Scrollable>
        </Component.Section>
      </Component.Container>
    </>
  );
};

export default ComponentSelect;

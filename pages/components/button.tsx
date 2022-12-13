import type { NextPage } from "next";
import Head from "next/head";
import type { CSSProperties } from "react";
import { useState } from "react";

import { CountingInput } from "../../components/CountingInput";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { theme } from "../../theme";
import { CountNumberType } from "../../types/count";
import { borderStyleOptions } from "../../components/options/BorderStyle";
import type { SelectOption } from "../../interfaces/select";
import * as Component from "../../components/partial/Component";
import * as Preset from "../../components/partial/Preset";
import * as Grid from "../../components/partial/Grid";
import { RequireLabel } from "../../components/RequireLabel";
import { langOptions } from "../../components/options/Template";
import { PaddingOption } from "../../components/partial/PaddingOption";
import { BorderRadiusOption } from "../../components/partial/BorderRadiusOption";
import { BorderOption } from "../../components/partial/BorderOption";
import { RgbaOption } from "../../components/partial/RgbaOption";
import { FontOption } from "../../components/partial/FontOption";
import { textAlignOptions } from "../../components/options/TextAlign";
import { ConvertButton } from "../../lib/style/button";
import {
  BootstrapOutlineButton,
  BootstrapPrimaryButton
} from "../../components/Button";
import { copyToClipboard } from "../../lib/copy/clipboard";
import { textOverflowOptions } from "../../components/options/TextOverflow";
import { LangOption } from "../../types/select-option";
import { PreferenceOption } from "../../components/partial/PreferenceOption";
import { useTextOverflow } from "../../hooks/useTextOverflow";

const ComponentButton: NextPage = () => {
  /* order - state */
  // 너비
  const [width, setWidth] = useState(100);
  // 텍스트 높이
  const [lineHeight, setLineHeight] = useState(25);
  // 자간
  const [letterSpacing, setLetterSpacing] = useState(0);
  // 버튼명
  const [label, setLabel] = useState("버튼명");
  // 배경색
  const [backgroundColorHex, setBackgroundColorHex] = useState("#ffffff");

  const [backgroundColorRgb, setBackgroundColorRgb] = useState("255,255,255");

  const [backgroundColorAlpha, setBackgroundColorAlpha] = useState(1);
  // 텍스트 색
  const [color, setColor] = useState("#000000");
  // 모서리 각
  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(4);

  const [borderTopRightRadius, setBorderTopRightRadius] = useState(4);

  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(4);

  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(4);
  // 모서리 각 모두 보기 여부
  const [isSetDetailBorderRadius, setIsSetDetailBorderRadius] = useState(false);
  // 여백
  const [paddingTop, setPaddingTop] = useState(4);

  const [paddingRight, setPaddingRight] = useState(4);

  const [paddingBottom, setPaddingBottom] = useState(4);

  const [paddingLeft, setPaddingLeft] = useState(4);
  // 여백 모두 보기 여부
  const [showAllPadding, setShowAllPadding] = useState(false);
  // 테두리
  const [borderStyle, setBorderStyle] = useState<SelectOption>(
    borderStyleOptions[1]
  );

  const [borderColor, setBorderColor] = useState("#000000");

  const [borderWidth, setBorderWidth] = useState(1);
  // 언어
  const [lang, setLang] = useState<SelectOption>(langOptions[0]);
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);
  // 텍스트 크기
  const [fontSize, setFontSize] = useState(16);
  // 텍스트 정렬 기본값: 가운데 정렬
  const [textAlign, setTextAlign] = useState<SelectOption>(textAlignOptions[1]);
  // 텍스트 줄바꿈 기본값: 줄바꿈 허용
  const { textOverflow, setTextOverflow, textOverflowStyle } = useTextOverflow(
    textOverflowOptions[0]
  );
  // layout 설정 보이기
  const [showLayout, setShowLayout] = useState(true);
  // text 설정 보이기
  const [showText, setShowText] = useState(true);
  // 모서리 각 설정 보이기
  const [showBorderRadius, setShowBorderRadius] = useState(true);
  // border 설정 보이기
  const [showBorder, setShowBorder] = useState(true);
  // padding 설정 보이기
  const [showPadding, setShowPadding] = useState(true);
  // 배경색 설정 보이기
  const [showBackgroundColor, setShowBackgroundColor] = useState(true);
  // 환경 설정 보이기
  const [showPreference, setShowPreference] = useState(true);
  /* order - variable */
  // grid span
  const gridSpan = 3;
  // preview style
  const buttonStyle: CSSProperties = {
    width,
    backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
    color,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderColor,
    borderWidth,
    borderStyle: borderStyle.value,
    fontSize,
    lineHeight: `${lineHeight}px`,
    letterSpacing,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    textAlign: textAlign.value as any,
    overflow: "hidden",
    ...textOverflowStyle
  };
  /* handler */
  const handleClickPresetBootstrapButton = () => {
    setWidth(80);
    setLineHeight(25);
    setLetterSpacing(0);
    setPaddingTop(6);
    setPaddingRight(6);
    setPaddingBottom(6);
    setPaddingLeft(6);
    setBackgroundColorHex(theme.color.bootstrapBlue);
    setBackgroundColorRgb("13,110,253");
    setBackgroundColorAlpha(1);
    setColor(theme.color.white);
    setBorderTopLeftRadius(5);
    setBorderTopRightRadius(5);
    setBorderBottomLeftRadius(5);
    setBorderBottomRightRadius(5);
    setIsSetDetailBorderRadius(false);
    setBorderColor(theme.color.bootstrapBlue);
    setBorderWidth(1);
    setBorderStyle(borderStyleOptions[1]);
    setBackgroundColorAlpha(1);
    setFontSize(16);
    setLabel("Primary");
  };

  const handleClickPresetBootstrapOutlineButton = () => {
    setWidth(80);
    setLineHeight(25);
    setLetterSpacing(0);
    setPaddingTop(6);
    setPaddingRight(6);
    setPaddingBottom(6);
    setPaddingLeft(6);
    setBackgroundColorHex(theme.color.white);
    setBackgroundColorRgb("255,255,255");
    setBackgroundColorAlpha(1);
    setColor(theme.color.bootstrapBlue);
    setBorderTopLeftRadius(5);
    setBorderTopRightRadius(5);
    setBorderBottomLeftRadius(5);
    setBorderBottomRightRadius(5);
    setIsSetDetailBorderRadius(false);
    setBorderColor(theme.color.bootstrapBlue);
    setBorderWidth(1);
    setBorderStyle(borderStyleOptions[1]);
    setBackgroundColorAlpha(1);
    setFontSize(16);
    setLabel("Primary");
  };

  const handleExport = () => {
    const exportToButton = new ConvertButton(buttonStyle);

    if (lang.value === LangOption.JS) {
      exportToButton.generateButton(label);
    }

    if (html) {
      exportToButton.addTemplate();
    }

    copyToClipboard(exportToButton.getHtml);
  };

  return (
    <>
      <Head>
        <title>Components - Button</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component.Container>
        <Component.Aside>
          <Preview width={width} onExport={handleExport}>
            <button style={buttonStyle}>{label}</button>
          </Preview>
          <Preset.Container>
            <Component.Header>Preset</Component.Header>
            <Preset.Body>
              <Preset.Item>
                <Preset.ButtonPreview>
                  <BootstrapPrimaryButton
                    type="button"
                    onClick={handleClickPresetBootstrapButton}
                  >
                    Primary
                  </BootstrapPrimaryButton>
                </Preset.ButtonPreview>
                <Preset.ButtonMeta>
                  <span>Bootstrap button 1</span>
                </Preset.ButtonMeta>
              </Preset.Item>
              <Preset.Item>
                <Preset.ButtonPreview>
                  <BootstrapOutlineButton
                    type="button"
                    onClick={handleClickPresetBootstrapOutlineButton}
                  >
                    Primary
                  </BootstrapOutlineButton>
                </Preset.ButtonPreview>
                <Preset.ButtonMeta>
                  <span>Bootstrap button 2</span>
                </Preset.ButtonMeta>
              </Preset.Item>
            </Preset.Body>
          </Preset.Container>
        </Component.Aside>
        <Component.Section>
          <Component.Header>Options</Component.Header>
          <Component.Scrollable>
            <Grid.ResponsiveContainer span={gridSpan}>
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
                  limit={100}
                  showIcon={true}
                  showFeedback={true}
                  numberType={CountNumberType.INTEGER}
                  unit="px"
                />
              </Grid.Column>

              <Grid.FoldableTitle
                fold={showText}
                setFold={setShowText}
                span={gridSpan}
              >
                <span>텍스트 설정</span>
              </Grid.FoldableTitle>
              <Grid.Column span={showText ? 1 : 0}>
                <RequireLabel htmlFor="setLabel">버튼명</RequireLabel>
                <FeedbackInput
                  id="setLabel"
                  value={label}
                  setValue={setLabel}
                  limit={10}
                  showFeedback={true}
                />
              </Grid.Column>
              <FontOption
                id="Button"
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
                span={showText ? 1 : 0}
              />

              <Grid.FoldableTitle
                fold={showPadding}
                setFold={setShowPadding}
                span={gridSpan}
              >
                <span>여백 설정</span>
              </Grid.FoldableTitle>
              <PaddingOption
                id="Button"
                paddingTop={paddingTop}
                setPaddingTop={setPaddingTop}
                paddingRight={paddingRight}
                setPaddingRight={setPaddingRight}
                paddingBottom={paddingBottom}
                setPaddingBottom={setPaddingBottom}
                paddingLeft={paddingLeft}
                setPaddingLeft={setPaddingLeft}
                isShowAllOption={showAllPadding}
                setIsShowAllOption={setShowAllPadding}
                span={showPadding ? 1 : 0}
              />

              <Grid.FoldableTitle
                fold={showBorderRadius}
                setFold={setShowBorderRadius}
                span={gridSpan}
              >
                <span>모서리각 설정</span>
              </Grid.FoldableTitle>
              <BorderRadiusOption
                id="Button"
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

              <Grid.FoldableTitle
                fold={showBorder}
                setFold={setShowBorder}
                span={gridSpan}
              >
                <span>테두리 설정</span>
              </Grid.FoldableTitle>
              <BorderOption
                id="Button"
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
                borderColor={borderColor}
                setBorderColor={setBorderColor}
                span={showBorder ? 1 : 0}
              />

              <Grid.FoldableTitle
                fold={showBackgroundColor}
                setFold={setShowBackgroundColor}
                span={gridSpan}
              >
                <span>배경색 설정</span>
              </Grid.FoldableTitle>
              <RgbaOption
                id="Button"
                hex={backgroundColorHex}
                setRgb={setBackgroundColorRgb}
                setHex={setBackgroundColorHex}
                alpha={backgroundColorAlpha}
                setAlpha={setBackgroundColorAlpha}
                span={showBackgroundColor ? 1 : 0}
              />

              <Grid.FoldableTitle
                fold={showPreference}
                setFold={setShowPreference}
                span={gridSpan}
              >
                <span>환경 설정</span>
              </Grid.FoldableTitle>
              <PreferenceOption
                lang={lang}
                setLang={setLang}
                html={html}
                setHtml={setHtml}
                span={showPreference ? 1 : 0}
              />
            </Grid.ResponsiveContainer>
          </Component.Scrollable>
        </Component.Section>
      </Component.Container>
    </>
  );
};

export default ComponentButton;

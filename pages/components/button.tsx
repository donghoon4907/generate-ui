import type { NextPage } from "next";
import Head from "next/head";
import type { CSSProperties } from "react";
import { useState } from "react";

import * as Component from "../../components/partial/Component";
import * as Preset from "../../components/partial/Preset";
import * as Grid from "../../components/partial/Grid";
import type { ISelectOption } from "../../interfaces/select";
import { CountingInput } from "../../components/CountingInput";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { theme } from "../../theme";
import { CountNumberType } from "../../types/count";
import { borderStyleOptions } from "../../components/options/BorderStyle";
import { RequireLabel } from "../../components/RequireLabel";
import { langOptions } from "../../components/options/Template";
import { textAlignOptions } from "../../components/options/TextAlign";
import { ConvertButton } from "../../lib/style/button";
import {
  BootstrapOutlineButton,
  BootstrapPrimaryButton
} from "../../components/Button";
import { copyToClipboard } from "../../lib/copy/clipboard";
import { textOverflowOptions } from "../../components/options/TextOverflow";
import { LangOption } from "../../types/select-option";
import { useTextOverflow } from "../../hooks/useTextOverflow";
import { FontOption } from "../../components/templates/options/Font";
import { PaddingOption } from "../../components/templates/options/Padding";
import { BorderRadiusOption } from "../../components/templates/options/BorderRadius";
import { BorderOption } from "../../components/templates/options/Border";
import { RgbaOption } from "../../components/templates/options/Rgba";
import { PreferenceOption } from "../../components/templates/options/Preference";

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
  const [checkAllBorderRadius, setCheckAllBorderRadius] = useState(false);
  // 여백
  const [paddingTop, setPaddingTop] = useState(4);
  const [paddingRight, setPaddingRight] = useState(4);
  const [paddingBottom, setPaddingBottom] = useState(4);
  const [paddingLeft, setPaddingLeft] = useState(4);
  // 여백 모두 보기 여부
  const [checkAllPadding, setCheckAllPadding] = useState(false);
  // 테두리
  const [borderStyle, setBorderStyle] = useState<ISelectOption>(
    borderStyleOptions[1]
  );
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderWidth, setBorderWidth] = useState(1);
  // 언어
  const [lang, setLang] = useState<ISelectOption>(langOptions[0]);
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);
  // 텍스트 크기
  const [fontSize, setFontSize] = useState(16);
  // 텍스트 정렬 기본값: 가운데 정렬
  const [textAlign, setTextAlign] = useState<ISelectOption>(
    textAlignOptions[1]
  );
  // 텍스트 줄바꿈 기본값: 줄바꿈 허용
  const { textOverflow, setTextOverflow, textOverflowStyle } = useTextOverflow(
    textOverflowOptions[0]
  );
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
    setCheckAllBorderRadius(false);
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
    setCheckAllBorderRadius(false);
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
              <Grid.FoldableTitle span={gridSpan} title="레이아웃 설정">
                <Grid.Column span={1}>
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
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={gridSpan} title="텍스트 설정">
                <Grid.Column span={1}>
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
                  span={1}
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
                />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={gridSpan} title="여백 설정">
                <PaddingOption
                  id="Button"
                  span={1}
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

              <Grid.FoldableTitle span={gridSpan} title="모서리각 설정">
                <BorderRadiusOption
                  id="Button"
                  span={1}
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

              <Grid.FoldableTitle span={gridSpan} title="테두리 설정">
                <BorderOption
                  id="Button"
                  span={1}
                  borderStyle={borderStyle}
                  setBorderStyle={setBorderStyle}
                  borderWidth={borderWidth}
                  setBorderWidth={setBorderWidth}
                  borderColor={borderColor}
                  setBorderColor={setBorderColor}
                />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={gridSpan} title="배경색 설정">
                <RgbaOption
                  id="Button"
                  span={1}
                  hex={backgroundColorHex}
                  setRgb={setBackgroundColorRgb}
                  setHex={setBackgroundColorHex}
                  alpha={backgroundColorAlpha}
                  setAlpha={setBackgroundColorAlpha}
                />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={gridSpan} title="환경 설정">
                <PreferenceOption
                  span={1}
                  lang={lang}
                  setLang={setLang}
                  html={html}
                  setHtml={setHtml}
                />
              </Grid.FoldableTitle>
            </Grid.ResponsiveContainer>
          </Component.Scrollable>
        </Component.Section>
      </Component.Container>
    </>
  );
};

export default ComponentButton;

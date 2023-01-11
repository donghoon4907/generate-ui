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
import { fontWeightOptions } from "../../components/options/FontWeight";
import constants from "../../constants";
import { useRgba } from "../../hooks/useRgba";
import { usePadding } from "../../hooks/usePadding";
import { useBorderRadius } from "../../hooks/useBorderRadius";

const ComponentButton: NextPage = () => {
  /* order - constans */
  // grid span
  const GRID_SPAN = 3;
  // 버튼명 글자 수 제한
  const LABEL_LIMIT = 10;
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
  const bgColorRgba = useRgba(constants.color.whiteHex);
  // 텍스트 색
  const [color, setColor] = useState(constants.color.blackHex);
  // 모서리 각
  const borderRadius = useBorderRadius(4);
  // 여백
  const padding = usePadding(4);
  // 테두리
  const [borderStyle, setBorderStyle] = useState<ISelectOption>(
    borderStyleOptions[1]
  );
  const [borderColor, setBorderColor] = useState(constants.color.blackHex);
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
  const [textOverflow, setTextOverflow, textOverflowOutput] = useTextOverflow(
    textOverflowOptions[0]
  );
  // 굵기
  const [fontWeight, setFontWeight] = useState<ISelectOption>(
    fontWeightOptions[3]
  );
  /* order - variable */
  // preview style
  const buttonStyle: CSSProperties = {
    width,
    backgroundColor: bgColorRgba.toString(),
    color,
    borderTopLeftRadius: borderRadius.topLeft,
    borderTopRightRadius: borderRadius.topRight,
    borderBottomLeftRadius: borderRadius.bottomLeft,
    borderBottomRightRadius: borderRadius.bottomRight,
    borderColor,
    borderWidth,
    borderStyle: borderStyle.value,
    fontSize,
    lineHeight: `${lineHeight}px`,
    letterSpacing,
    paddingTop: padding.top,
    paddingRight: padding.right,
    paddingBottom: padding.bottom,
    paddingLeft: padding.left,
    textAlign: textAlign.value as any,
    overflow: "hidden",
    fontWeight: fontWeight.value,
    ...textOverflowOutput
  };
  /* handler */
  const handleClickPresetBootstrapButton = () => {
    setWidth(80);
    setLineHeight(25);
    setLetterSpacing(0);
    padding.setTop(6);
    padding.setRight(6);
    padding.setBottom(6);
    padding.setLeft(6);
    bgColorRgba.setHex(theme.color.bootstrapBlue);
    bgColorRgba.setAlpha(1);
    setColor(theme.color.white);
    borderRadius.setTopLeft(5);
    borderRadius.setTopRight(5);
    borderRadius.setBottomLeft(5);
    borderRadius.setBottomRight(5);
    setBorderColor(theme.color.bootstrapBlue);
    setBorderWidth(1);
    setBorderStyle(borderStyleOptions[1]);
    setFontSize(16);
    setLabel("Primary");
    setFontWeight(fontWeightOptions[3]);
  };

  const handleClickPresetBootstrapOutlineButton = () => {
    setWidth(80);
    setLineHeight(25);
    setLetterSpacing(0);
    padding.setTop(6);
    padding.setRight(6);
    padding.setBottom(6);
    padding.setLeft(6);
    bgColorRgba.setHex(theme.color.white);
    bgColorRgba.setAlpha(1);
    setColor(theme.color.bootstrapBlue);
    borderRadius.setTopLeft(5);
    borderRadius.setTopRight(5);
    borderRadius.setBottomLeft(5);
    borderRadius.setBottomRight(5);
    setBorderColor(theme.color.bootstrapBlue);
    setBorderWidth(1);
    setBorderStyle(borderStyleOptions[1]);
    setFontSize(16);
    setLabel("Primary");
    setFontWeight(fontWeightOptions[3]);
  };

  const handleExport = () => {
    const exportToButton = new ConvertButton(buttonStyle);

    if (lang.value === LangOption.JS) {
      exportToButton.generateButton(label.substring(0, LABEL_LIMIT - 1));
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
            <button style={buttonStyle}>
              {label.substring(0, LABEL_LIMIT - 1)}
            </button>
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
            <Grid.ResponsiveContainer span={GRID_SPAN}>
              <Grid.FoldableTitle span={GRID_SPAN} title="기본 설정">
                <Grid.Column span={1}>
                  <RequireLabel htmlFor="setLabel">버튼명</RequireLabel>
                  <FeedbackInput
                    id="setLabel"
                    value={label}
                    setValue={setLabel}
                    condition={label.length < 10}
                    invalidComment="버튼명은 10자 미만으로 입력하세요."
                  />
                </Grid.Column>
              </Grid.FoldableTitle>
              <Grid.FoldableTitle span={GRID_SPAN} title="레이아웃 설정">
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

              <Grid.FoldableTitle span={GRID_SPAN} title="텍스트 설정">
                <FontOption
                  id="Button"
                  span={1}
                  color={color}
                  fontSize={fontSize}
                  lineHeight={lineHeight}
                  letterSpacing={letterSpacing}
                  textAlign={textAlign}
                  textOverflow={textOverflow}
                  fontWeight={fontWeight}
                  setColor={setColor}
                  setFontSize={setFontSize}
                  setLineHeight={setLineHeight}
                  setLetterSpacing={setLetterSpacing}
                  setTextAlign={setTextAlign}
                  setTextOverflow={setTextOverflow}
                  setFontWeight={setFontWeight}
                />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="여백 설정">
                <PaddingOption id="Button" span={1} {...padding} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="모서리각 설정">
                <BorderRadiusOption id="Button" span={1} {...borderRadius} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="테두리 설정">
                <BorderOption
                  id="Button"
                  span={1}
                  borderStyle={borderStyle}
                  borderWidth={borderWidth}
                  borderColor={borderColor}
                  setBorderStyle={setBorderStyle}
                  setBorderWidth={setBorderWidth}
                  setBorderColor={setBorderColor}
                />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="배경색 설정">
                <RgbaOption id="Button" span={1} {...bgColorRgba} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="환경 설정">
                <PreferenceOption
                  span={1}
                  lang={lang}
                  html={html}
                  setLang={setLang}
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

import type { NextPage } from "next";
import Head from "next/head";
import type { CSSProperties } from "react";
import { useState } from "react";

import { CountingInput } from "../../components/CountingInput";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { StylingHeader } from "../../components/StylingHeader";
import { theme } from "../../theme";
import { CountNumberType } from "../../types/count";
import { borderStyleOptions } from "../../components/options/BorderStyle";
import type { SelectOption } from "../../interfaces/select";
import * as Component from "../../components/partial/Component";
import * as Preset from "../../components/partial/Preset";
import * as Option from "../../components/partial/Option";
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
import { LangOption, TextOverflowOption } from "../../types/select-option";
import { PreferenceOption } from "../../components/partial/PreferenceOption";

const ComponentButton: NextPage = () => {
  const [width, setWidth] = useState(100);

  const [lineHeight, setLineHeight] = useState(25);

  const [letterSpacing, setLetterSpacing] = useState(0);

  const [label, setLabel] = useState("버튼명");

  const [backgroundColorHex, setBackgroundColorHex] = useState("#ffffff");

  const [backgroundColorRgb, setBackgroundColorRgb] = useState("255,255,255");

  const [backgroundColorAlpha, setBackgroundColorAlpha] = useState(1);

  const [color, setColor] = useState("#000000");

  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(4);

  const [borderTopRightRadius, setBorderTopRightRadius] = useState(4);

  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(4);

  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(4);

  const [isSetDetailBorderRadius, setIsSetDetailBorderRadius] = useState(false);

  const [paddingTop, setPaddingTop] = useState(4);

  const [paddingRight, setPaddingRight] = useState(4);

  const [paddingBottom, setPaddingBottom] = useState(4);

  const [paddingLeft, setPaddingLeft] = useState(4);

  const [isSetDetailPadding, setIsSetDetailPadding] = useState(false);

  const [borderStyle, setBorderStyle] = useState<SelectOption>(
    borderStyleOptions[1]
  );

  const [borderColor, setBorderColor] = useState("#000000");

  const [borderWidth, setBorderWidth] = useState(1);
  // 언어
  const [lang, setLang] = useState<SelectOption>(langOptions[0]);
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);

  const [fontSize, setFontSize] = useState(16);
  // 텍스트 정렬 기본값: 가운데 정렬
  const [textAlign, setTextAlign] = useState<SelectOption>(textAlignOptions[1]);
  // 텍스트 줄바꿈 기본값: 줄바꿈 허용
  const [textOverflow, setTextOverflow] = useState<SelectOption>(
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
    textOverflow: textOverflow.value,
    wordBreak:
      textOverflow.value === TextOverflowOption.CLIP ? "break-all" : "normal",
    whiteSpace:
      textOverflow.value === TextOverflowOption.ELLIPSIS ? "nowrap" : "normal",
    overflow: "hidden"
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
            <StylingHeader>Preset</StylingHeader>
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
        <Option.Container>
          <StylingHeader>Options</StylingHeader>
          <Option.Body>
            <Option.GridContainer>
              <Option.FoldableTitle fold={showLayout} setFold={setShowLayout}>
                <span>레이아웃 설정</span>
              </Option.FoldableTitle>
              <Option.GridColumn span={showLayout ? 1 : 0}>
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
              </Option.GridColumn>
              <Option.FoldableTitle fold={showText} setFold={setShowText}>
                <span>텍스트 설정</span>
              </Option.FoldableTitle>
              <Option.GridColumn span={showText ? 1 : 0}>
                <RequireLabel htmlFor="setLabel">버튼명</RequireLabel>
                <FeedbackInput
                  id="setLabel"
                  value={label}
                  setValue={setLabel}
                  limit={10}
                  showFeedback={true}
                />
              </Option.GridColumn>
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

              <Option.FoldableTitle fold={showPadding} setFold={setShowPadding}>
                <span>여백 설정</span>
              </Option.FoldableTitle>
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
                isShowAllOption={isSetDetailPadding}
                setIsShowAllOption={setIsSetDetailPadding}
                span={showPadding ? 1 : 0}
              />
              <Option.FoldableTitle
                fold={showBorderRadius}
                setFold={setShowBorderRadius}
              >
                <span>모서리각 설정</span>
              </Option.FoldableTitle>
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

              <Option.FoldableTitle fold={showBorder} setFold={setShowBorder}>
                <span>테두리 설정</span>
              </Option.FoldableTitle>
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
              <Option.FoldableTitle
                fold={showBackgroundColor}
                setFold={setShowBackgroundColor}
              >
                <span>배경색 설정</span>
              </Option.FoldableTitle>
              <RgbaOption
                id="Button"
                hex={backgroundColorHex}
                setRgb={setBackgroundColorRgb}
                setHex={setBackgroundColorHex}
                alpha={backgroundColorAlpha}
                setAlpha={setBackgroundColorAlpha}
                span={showBackgroundColor ? 1 : 0}
              />

              {/* <Option.Title>추가 설정</Option.Title>
            <Option.Item>
              <Checkbox id="setDisabled" label="비활성 스타일 사용" />
            </Option.Item> */}
              {/* <OptionTitle>접근성 설정</OptionTitle> */}
              <Option.FoldableTitle
                fold={showPreference}
                setFold={setShowPreference}
              >
                <span>환경 설정</span>
              </Option.FoldableTitle>
              <PreferenceOption
                lang={lang}
                setLang={setLang}
                html={html}
                setHtml={setHtml}
                span={showPreference ? 1 : 0}
              />
            </Option.GridContainer>
          </Option.Body>
        </Option.Container>
      </Component.Container>
    </>
  );
};

export default ComponentButton;

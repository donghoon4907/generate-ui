import type { NextPage } from "next";
import Head from "next/head";
import type { ChangeEvent, CSSProperties } from "react";
import { useState } from "react";

import type { ISelectOption } from "../../interfaces/select";
import * as Component from "../../components/partial/Component";
import * as Preset from "../../components/partial/Preset";
import * as Grid from "../../components/partial/Grid";
import { CountingInput } from "../../components/CountingInput";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { theme } from "../../theme";
import { CountNumberType } from "../../types/count";
import { CustomSelect } from "../../components/CustomSelect";
import { borderStyleOptions } from "../../components/options/BorderStyle";
import { RequireLabel } from "../../components/RequireLabel";
import { inputTypeOptions } from "../../components/options/InputType";
import { langOptions } from "../../components/options/Template";
import { WithLabel } from "../../components/WithLabel";
import { Checkbox } from "../../components/Checkbox";
import { InputTypeOption, LangOption } from "../../types/select-option";
import { textAlignOptions } from "../../components/options/TextAlign";
import { ConvertInput } from "../../lib/style/input";
import { copyToClipboard } from "../../lib/copy/clipboard";
import {
  BootstrapDarkInputButton,
  BootstrapLightInputButton
} from "../../components/Button";
import { IconAlignOption } from "../../types/select-option";
import { iconAlignOptions } from "../../components/options/IconAlign";
import { IconOption } from "../../components/templates/options/Icon";
import { FontOption } from "../../components/templates/options/Font";
import { PaddingOption } from "../../components/templates/options/Padding";
import { BorderRadiusOption } from "../../components/templates/options/BorderRadius";
import { BorderOption } from "../../components/templates/options/Border";
import { RgbaOption } from "../../components/templates/options/Rgba";
import { PreferenceOption } from "../../components/templates/options/Preference";

const ComponentInput: NextPage = () => {
  /* order - state */
  // 타입
  const [inputType, setInputType] = useState<ISelectOption>(
    inputTypeOptions[0]
  );
  // 너비
  const [width, setWidth] = useState(200);
  // 텍스트 높이
  const [lineHeight, setLineHeight] = useState(25);
  // 자간
  const [letterSpacing, setLetterSpacing] = useState(0);
  // 지시자
  const [placeholder, setPlaceholder] = useState("입력하세요");
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
  // 아이콘 추가 여부
  const [checkIcon, setCheckIcon] = useState(false);
  // 텍스트 정렬
  const [textAlign, setTextAlign] = useState<ISelectOption>(
    textAlignOptions[0]
  );
  // 아이콘 사이즈
  const [iconSize, setIconSize] = useState(16);
  // 아이콘 정렬
  const [iconAlign, setIconAlign] = useState<ISelectOption>(
    iconAlignOptions[0]
  );
  // 아이콘 색
  const [iconColor, setIconColor] = useState("#000000");
  // 기본 설정 보이기
  const [showDefault, setShowDefault] = useState(true);
  // 아이콘 설정 보이기
  const [showIcon, setShowIcon] = useState(true);
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
  // 아이콘 설정 노출 조건
  const showSetIcon = inputType.value === InputTypeOption.SEARCH && checkIcon;
  // 아이콘 오른쪽 정렬 시
  const isIconAlignRight =
    iconAlign.value === IconAlignOption.RIGHT && showSetIcon;
  // 아이콘 왼쪽 정렬 시
  const isIconAlignLeft =
    iconAlign.value === IconAlignOption.LEFT && showSetIcon;
  // preview style
  const inputWrapperStyle: CSSProperties = {
    width,
    backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
    backgroundImage: showSetIcon
      ? `url("data:image/svg+xml, %3Csvg stroke='currentColor' fill='${encodeURIComponent(
          iconColor
        )}' stroke-width='0' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")`
      : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${iconAlign.value} 5px center`,
    backgroundSize: iconSize,
    paddingRight: isIconAlignRight ? 25 : 0,
    paddingLeft: isIconAlignLeft ? 25 : 0,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderStyle: borderStyle.value,
    borderWidth,
    borderColor,
    overflow: "hidden"
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
    color,
    fontSize,
    lineHeight: `${lineHeight}px`,
    letterSpacing,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    textAlign: textAlign.value as any,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    border: "none"
  };
  /* handler */
  const handleCheckIcon = (evt: ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;

    setCheckIcon(checked);
  };

  const handleClickPresetBootstrapLightButton = () => {
    setWidth(100);
    setLineHeight(25);
    setLetterSpacing(0);
    setPaddingTop(6);
    setPaddingRight(12);
    setPaddingBottom(6);
    setPaddingLeft(12);
    setCheckAllPadding(true);
    setBackgroundColorHex(theme.color.white);
    setBackgroundColorRgb("255,255,255");
    setBackgroundColorAlpha(1);
    setColor(theme.color.white);
    setBorderTopLeftRadius(5);
    setBorderTopRightRadius(5);
    setBorderBottomLeftRadius(5);
    setBorderBottomRightRadius(5);
    setCheckAllBorderRadius(false);
    setBorderColor(theme.color.lightDividerColor);
    setBorderWidth(1);
    setBorderStyle(borderStyleOptions[1]);
    setFontSize(16);
  };

  const handleClickPresetBootstrapDarkButton = () => {
    setWidth(100);
    setLineHeight(25);
    setLetterSpacing(0);
    setPaddingTop(6);
    setPaddingRight(12);
    setPaddingBottom(6);
    setPaddingLeft(12);
    setCheckAllPadding(true);
    setBackgroundColorHex(theme.color.gray_lv0);
    setBackgroundColorRgb("31, 31, 31");
    setBackgroundColorAlpha(1);
    setColor(theme.color.darkTextColor_lv0);
    setBorderTopLeftRadius(5);
    setBorderTopRightRadius(5);
    setBorderBottomLeftRadius(5);
    setBorderBottomRightRadius(5);
    setCheckAllBorderRadius(false);
    setBorderColor(theme.color.darkDividerColor);
    setBorderWidth(1);
    setBorderStyle(borderStyleOptions[1]);
    setFontSize(16);
  };

  const handleExport = () => {
    const exportToInput = new ConvertInput(inputWrapperStyle, inputStyle);

    if (lang.value === LangOption.JS) {
      exportToInput.generateInput(inputType.value);
    }

    if (html) {
      exportToInput.addTemplate();
    }

    copyToClipboard(exportToInput.getHtml);
  };

  return (
    <>
      <Head>
        <title>Components - Input</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component.Container>
        <Component.Aside>
          <Preview width={width} onExport={handleExport}>
            <div style={inputWrapperStyle}>
              <input
                type={inputType.value}
                placeholder={placeholder}
                style={inputStyle}
              />
            </div>
          </Preview>
          <Preset.Container>
            <Component.Header>Preset</Component.Header>
            <Preset.Body>
              <Preset.Item>
                <Preset.ButtonPreview>
                  <BootstrapLightInputButton
                    type="button"
                    onClick={handleClickPresetBootstrapLightButton}
                  >
                    Light
                  </BootstrapLightInputButton>
                </Preset.ButtonPreview>
                <Preset.ButtonMeta>
                  <span>Bootstrap Light</span>
                </Preset.ButtonMeta>
              </Preset.Item>
              <Preset.Item>
                <Preset.ButtonPreview>
                  <BootstrapDarkInputButton
                    type="button"
                    onClick={handleClickPresetBootstrapDarkButton}
                  >
                    Dark
                  </BootstrapDarkInputButton>
                </Preset.ButtonPreview>
                <Preset.ButtonMeta>
                  <span>Bootstrap Dark</span>
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
                fold={showDefault}
                setFold={setShowDefault}
                span={gridSpan}
              >
                <span>기본 설정</span>
              </Grid.FoldableTitle>
              <Grid.Column span={showDefault ? 1 : 0}>
                <RequireLabel>타입</RequireLabel>
                <CustomSelect
                  activeOption={inputType}
                  setOption={setInputType}
                  options={inputTypeOptions}
                />
                {inputType.value === InputTypeOption.SEARCH && (
                  <WithLabel id="setCheckIcon" label="검색 아이콘 추가">
                    <Checkbox
                      id="setCheckSearchIcon"
                      checked={checkIcon}
                      onChange={handleCheckIcon}
                    />
                  </WithLabel>
                )}
              </Grid.Column>
              {showSetIcon && (
                <>
                  <Grid.FoldableTitle
                    fold={showIcon}
                    setFold={setShowIcon}
                    span={gridSpan}
                  >
                    <span>아이콘 설정</span>
                  </Grid.FoldableTitle>
                  <IconOption
                    span={showIcon ? 1 : 0}
                    id="Input"
                    iconAlign={iconAlign}
                    setIconAlign={setIconAlign}
                    iconSize={iconSize}
                    setIconSize={setIconSize}
                    iconColor={iconColor}
                    setIconColor={setIconColor}
                  />
                </>
              )}

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
                fold={showText}
                setFold={setShowText}
                span={gridSpan}
              >
                <span>텍스트 설정</span>
              </Grid.FoldableTitle>
              <Grid.Column span={showText ? 1 : 0}>
                <RequireLabel htmlFor="setPlaceholder">
                  입력 가이드 문구
                </RequireLabel>
                <FeedbackInput
                  id="setPlaceholder"
                  value={placeholder}
                  setValue={setPlaceholder}
                  limit={10}
                  showFeedback={true}
                />
              </Grid.Column>
              <FontOption
                id="Input"
                span={showText ? 1 : 0}
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
              />
              <Grid.FoldableTitle
                fold={showPadding}
                setFold={setShowPadding}
                span={gridSpan}
              >
                <span>여백 설정</span>
              </Grid.FoldableTitle>
              <PaddingOption
                id="Input"
                span={showPadding ? 1 : 0}
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
              <Grid.FoldableTitle
                fold={showBorderRadius}
                setFold={setShowBorderRadius}
                span={gridSpan}
              >
                <span>모서리각 설정</span>
              </Grid.FoldableTitle>
              <BorderRadiusOption
                id="Input"
                span={showBorderRadius ? 1 : 0}
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

              <Grid.FoldableTitle
                fold={showBorder}
                setFold={setShowBorder}
                span={gridSpan}
              >
                <span>테두리 설정</span>
              </Grid.FoldableTitle>
              <BorderOption
                id="Input"
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
                id="Input"
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
            </Grid.ResponsiveContainer>
          </Component.Scrollable>
        </Component.Section>
      </Component.Container>
    </>
  );
};

export default ComponentInput;

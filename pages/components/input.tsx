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
import constants from "../../constants";
import { useRgba } from "../../hooks/useRgba";
import { usePadding } from "../../hooks/usePadding";
import { useBorderRadius } from "../../hooks/useBorderRadius";

const ComponentInput: NextPage = () => {
  /* order - constans */
  // grid span
  const GRID_SPAN = 3;
  // placeholder 글자 수 제한
  const PLACEHOLDER_LIMIT = 10;
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
  const [placeholder, setPlaceholder] = useState(
    constants.label.defaultPlaceholder
  );
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
  const [iconColor, setIconColor] = useState(constants.color.blackHex);
  /* order - variable */
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
    backgroundColor: bgColorRgba.toString(),
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
    borderTopLeftRadius: borderRadius.borderTopLeftRadius,
    borderTopRightRadius: borderRadius.borderTopRightRadius,
    borderBottomLeftRadius: borderRadius.borderBottomLeftRadius,
    borderBottomRightRadius: borderRadius.borderBottomRightRadius,
    borderStyle: borderStyle.value,
    borderWidth,
    borderColor,
    overflow: "hidden"
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    backgroundColor: bgColorRgba.toString(),
    color,
    fontSize,
    lineHeight: `${lineHeight}px`,
    letterSpacing,
    paddingTop: padding.paddingTop,
    paddingRight: padding.paddingRight,
    paddingBottom: padding.paddingBottom,
    paddingLeft: padding.paddingLeft,
    textAlign: textAlign.value as any,
    borderTopLeftRadius: borderRadius.borderTopLeftRadius,
    borderTopRightRadius: borderRadius.borderTopRightRadius,
    borderBottomLeftRadius: borderRadius.borderBottomLeftRadius,
    borderBottomRightRadius: borderRadius.borderBottomRightRadius,
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
    padding.setPaddingTop(6);
    padding.setPaddingRight(12);
    padding.setPaddingBottom(6);
    padding.setPaddingLeft(12);
    bgColorRgba.setHex(theme.color.white);
    bgColorRgba.setAlpha(1);
    setColor(theme.color.white);
    borderRadius.setBorderRadius(5);
    setBorderColor(theme.color.lightDividerColor);
    setBorderWidth(1);
    setBorderStyle(borderStyleOptions[1]);
    setFontSize(16);
  };

  const handleClickPresetBootstrapDarkButton = () => {
    setWidth(100);
    setLineHeight(25);
    setLetterSpacing(0);
    padding.setPaddingTop(6);
    padding.setPaddingRight(12);
    padding.setPaddingBottom(6);
    padding.setPaddingLeft(12);
    bgColorRgba.setHex(theme.color.gray_lv0);
    bgColorRgba.setAlpha(1);
    setColor(theme.color.darkTextColor_lv0);
    borderRadius.setBorderRadius(5);
    setBorderColor(theme.color.darkDividerColor);
    setBorderWidth(1);
    setBorderStyle(borderStyleOptions[1]);
    setFontSize(16);
  };

  const handleExport = () => {
    const exportToInput = new ConvertInput(inputWrapperStyle, inputStyle);

    if (lang.value === LangOption.JS) {
      exportToInput.generateInput(
        inputType.value,
        placeholder.substring(0, PLACEHOLDER_LIMIT - 1)
      );
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
                placeholder={placeholder.substring(0, PLACEHOLDER_LIMIT - 1)}
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
            <Grid.ResponsiveContainer span={GRID_SPAN}>
              <Grid.FoldableTitle span={GRID_SPAN} title="기본 설정">
                <Grid.Column span={1}>
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
                <Grid.Column span={1}>
                  <RequireLabel htmlFor="setPlaceholder">
                    입력 가이드 문구
                  </RequireLabel>
                  <FeedbackInput
                    id="setPlaceholder"
                    value={placeholder}
                    setValue={setPlaceholder}
                    condition={placeholder.length < PLACEHOLDER_LIMIT}
                    invalidComment={`문구는 ${PLACEHOLDER_LIMIT}자 미만으로 입력하세요.`}
                  />
                </Grid.Column>
              </Grid.FoldableTitle>

              {showSetIcon && (
                <Grid.FoldableTitle span={GRID_SPAN} title="아이콘 설정">
                  <IconOption
                    span={1}
                    id="Input"
                    iconAlign={iconAlign}
                    setIconAlign={setIconAlign}
                    iconSize={iconSize}
                    setIconSize={setIconSize}
                    iconColor={iconColor}
                    setIconColor={setIconColor}
                  />
                </Grid.FoldableTitle>
              )}

              <Grid.FoldableTitle span={GRID_SPAN} title="레이아웃 설정">
                <Grid.Column span={1}>
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
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="텍스트 설정">
                <FontOption
                  id="Input"
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
                />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="여백 설정">
                <PaddingOption id="Input" span={1} {...padding} />
              </Grid.FoldableTitle>
              <Grid.FoldableTitle span={GRID_SPAN} title="모서리각 설정">
                <BorderRadiusOption id="Input" span={1} {...borderRadius} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="테두리 설정">
                <BorderOption
                  id="Input"
                  span={1}
                  borderStyle={borderStyle}
                  setBorderStyle={setBorderStyle}
                  borderWidth={borderWidth}
                  setBorderWidth={setBorderWidth}
                  borderColor={borderColor}
                  setBorderColor={setBorderColor}
                />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="배경색 설정">
                <RgbaOption id="Input" span={1} {...bgColorRgba} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="환경 설정">
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

export default ComponentInput;

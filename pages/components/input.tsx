import type { NextPage } from "next";
import type { ChangeEvent, CSSProperties } from "react";
import Head from "next/head";
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
import { useBorder } from "../../hooks/useBorder";
import {
  BootstrapDarkInputButton,
  BootstrapLightInputButton
} from "../../components/Button";
import { useFont } from "../../hooks/useFont";

const ComponentInput: NextPage = () => {
  /* order - constans */
  // grid span
  const GRID_SPAN = 3;
  // placeholder ?????? ??? ??????
  const PLACEHOLDER_LIMIT = 10;
  /* order - state */
  // ??????
  const [inputType, setInputType] = useState<ISelectOption>(
    inputTypeOptions[0]
  );
  // ??????
  const [width, setWidth] = useState(200);
  // ?????????
  const [placeholder, setPlaceholder] = useState(
    constants.label.defaultPlaceholder
  );
  // ?????????
  const bgColorRgba = useRgba(constants.color.whiteHex);
  // ????????? ???
  const borderRadius = useBorderRadius(4);
  // ??????
  const padding = usePadding(4);
  // ?????????
  const border = useBorder({
    style: borderStyleOptions[1],
    color: constants.color.blackHex,
    width: 1
  });
  // ????????? ??????
  const font = useFont({
    color: constants.color.blackHex,
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: textAlignOptions[0]
  });
  // ??????
  const [lang, setLang] = useState<ISelectOption>(langOptions[0]);
  // html ????????? ?????? ??????
  const [html, setHtml] = useState(false);
  // ????????? ?????? ??????
  const [checkIcon, setCheckIcon] = useState(false);
  // ????????? ?????????
  const [iconSize, setIconSize] = useState(16);
  // ????????? ??????
  const [iconAlign, setIconAlign] = useState<ISelectOption>(
    iconAlignOptions[0]
  );
  // ????????? ???
  const [iconColor, setIconColor] = useState(constants.color.blackHex);
  /* order - variable */
  // ????????? ?????? ?????? ??????
  const showSetIcon = inputType.value === InputTypeOption.SEARCH && checkIcon;
  // ????????? ????????? ?????? ???
  const isIconAlignRight =
    iconAlign.value === IconAlignOption.RIGHT && showSetIcon;
  // ????????? ?????? ?????? ???
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
    borderTopLeftRadius: borderRadius.topLeft,
    borderTopRightRadius: borderRadius.topRight,
    borderBottomLeftRadius: borderRadius.bottomLeft,
    borderBottomRightRadius: borderRadius.bottomRight,
    borderStyle: border.style.value,
    borderColor: border.color,
    borderWidth: border.width,
    overflow: "hidden"
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    backgroundColor: bgColorRgba.toString(),
    color: font.color,
    fontSize: font.fontSize,
    lineHeight: `${font.lineHeight}px`,
    letterSpacing: font.letterSpacing,
    paddingTop: padding.top,
    paddingRight: padding.right,
    paddingBottom: padding.bottom,
    paddingLeft: padding.left,
    textAlign: font.textAlign?.value as any,
    borderTopLeftRadius: borderRadius.topLeft,
    borderTopRightRadius: borderRadius.topRight,
    borderBottomLeftRadius: borderRadius.bottomLeft,
    borderBottomRightRadius: borderRadius.bottomRight,
    border: "none"
  };
  /* handler */
  const handleCheckIcon = (evt: ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;

    setCheckIcon(checked);
  };

  const handleClickPresetBootstrapLightButton = () => {
    setWidth(100);
    font.setColor(theme.color.white);
    font.setFontSize(16);
    font.setLineHeight(25);
    font.setLetterSpacing(0);
    padding.setTop(6);
    padding.setRight(12);
    padding.setBottom(6);
    padding.setLeft(12);
    bgColorRgba.setHex(theme.color.white);
    bgColorRgba.setAlpha(1);
    borderRadius.setTopLeft(5);
    borderRadius.setTopRight(5);
    borderRadius.setBottomLeft(5);
    borderRadius.setBottomRight(5);
    border.setStyle(borderStyleOptions[1]);
    border.setColor(theme.color.lightDividerColor);
    border.setWidth(1);
  };

  const handleClickPresetBootstrapDarkButton = () => {
    setWidth(100);
    font.setColor(theme.color.darkTextColor_lv0);
    font.setFontSize(16);
    font.setLineHeight(25);
    font.setLetterSpacing(0);
    padding.setTop(6);
    padding.setRight(12);
    padding.setBottom(6);
    padding.setLeft(12);
    bgColorRgba.setHex(theme.color.gray_lv0);
    bgColorRgba.setAlpha(1);
    borderRadius.setTopLeft(5);
    borderRadius.setTopRight(5);
    borderRadius.setBottomLeft(5);
    borderRadius.setBottomRight(5);
    border.setColor(theme.color.darkDividerColor);
    border.setWidth(1);
    border.setStyle(borderStyleOptions[1]);
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
              <Grid.FoldableTitle span={GRID_SPAN} title="?????? ??????">
                <Grid.Column span={1}>
                  <RequireLabel>??????</RequireLabel>
                  <CustomSelect
                    activeOption={inputType}
                    setOption={setInputType}
                    options={inputTypeOptions}
                  />
                  {inputType.value === InputTypeOption.SEARCH && (
                    <WithLabel id="setCheckIcon" label="?????? ????????? ??????">
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
                    ?????? ????????? ??????
                  </RequireLabel>
                  <FeedbackInput
                    id="setPlaceholder"
                    value={placeholder}
                    setValue={setPlaceholder}
                    condition={placeholder.length < PLACEHOLDER_LIMIT}
                    invalidComment={`????????? ${PLACEHOLDER_LIMIT}??? ???????????? ???????????????.`}
                  />
                </Grid.Column>
              </Grid.FoldableTitle>

              {showSetIcon && (
                <Grid.FoldableTitle span={GRID_SPAN} title="????????? ??????">
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

              <Grid.FoldableTitle span={GRID_SPAN} title="???????????? ??????">
                <Grid.Column span={1}>
                  <RequireLabel htmlFor="setWidth">??????</RequireLabel>
                  <CountingInput
                    id="setWidth"
                    ariaLabel="??????"
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

              <Grid.FoldableTitle span={GRID_SPAN} title="????????? ??????">
                <FontOption id="Input" span={1} {...font} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="?????? ??????">
                <PaddingOption id="Input" span={1} {...padding} />
              </Grid.FoldableTitle>
              <Grid.FoldableTitle span={GRID_SPAN} title="???????????? ??????">
                <BorderRadiusOption id="Input" span={1} {...borderRadius} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="????????? ??????">
                <BorderOption id="Input" span={1} {...border} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="????????? ??????">
                <RgbaOption id="Input" span={1} {...bgColorRgba} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="?????? ??????">
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

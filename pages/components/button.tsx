import type { NextPage } from "next";
import type { CSSProperties } from "react";
import Head from "next/head";
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
import { copyToClipboard } from "../../lib/copy/clipboard";
import { textOverflowOptions } from "../../components/options/TextOverflow";
import { LangOption } from "../../types/select-option";
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
import { useBorder } from "../../hooks/useBorder";
import {
  BootstrapOutlineButton,
  BootstrapPrimaryButton
} from "../../components/Button";
import { useFont } from "../../hooks/useFont";

const ComponentButton: NextPage = () => {
  /* order - constans */
  // grid span
  const GRID_SPAN = 3;
  // ????????? ?????? ??? ??????
  const LABEL_LIMIT = 10;
  /* order - state */
  // ??????
  const [width, setWidth] = useState(100);
  // ?????????
  const [label, setLabel] = useState("?????????");
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
    textAlign: textAlignOptions[1],
    textOverflow: textOverflowOptions[0],
    fontWeight: fontWeightOptions[3]
  });
  // ??????
  const [lang, setLang] = useState<ISelectOption>(langOptions[0]);
  // html ????????? ?????? ??????
  const [html, setHtml] = useState(false);

  /* order - variable */
  // preview style
  const buttonStyle: CSSProperties = {
    width,
    backgroundColor: bgColorRgba.toString(),
    borderTopLeftRadius: borderRadius.topLeft,
    borderTopRightRadius: borderRadius.topRight,
    borderBottomLeftRadius: borderRadius.bottomLeft,
    borderBottomRightRadius: borderRadius.bottomRight,
    borderColor: border.color,
    borderWidth: border.width,
    borderStyle: border.style.value,
    color: font.color,
    fontSize: font.fontSize,
    lineHeight: `${font.lineHeight}px`,
    letterSpacing: font.letterSpacing,
    paddingTop: padding.top,
    paddingRight: padding.right,
    paddingBottom: padding.bottom,
    paddingLeft: padding.left,
    textAlign: font.textAlign?.value as any,
    overflow: "hidden",
    fontWeight: font.fontWeight?.value,
    ...font.getTextOverflowStyle()
  };
  /* handler */
  const handleClickPresetBootstrapButton = () => {
    setWidth(80);
    font.setColor(theme.color.white);
    font.setFontSize(16);
    font.setLineHeight(25);
    font.setLetterSpacing(0);
    font.setTextAlign(textAlignOptions[1]);
    font.setFontWeight(fontWeightOptions[3]);
    padding.setTop(6);
    padding.setRight(6);
    padding.setBottom(6);
    padding.setLeft(6);
    bgColorRgba.setHex(theme.color.bootstrapBlue);
    bgColorRgba.setAlpha(1);
    borderRadius.setTopLeft(5);
    borderRadius.setTopRight(5);
    borderRadius.setBottomLeft(5);
    borderRadius.setBottomRight(5);
    border.setStyle(borderStyleOptions[1]);
    border.setColor(theme.color.bootstrapBlue);
    border.setWidth(1);
    setLabel("Primary");
  };

  const handleClickPresetBootstrapOutlineButton = () => {
    setWidth(80);
    font.setColor(theme.color.bootstrapBlue);
    font.setFontSize(16);
    font.setLineHeight(25);
    font.setLetterSpacing(0);
    font.setTextAlign(textAlignOptions[1]);
    font.setFontWeight(fontWeightOptions[3]);
    padding.setTop(6);
    padding.setRight(6);
    padding.setBottom(6);
    padding.setLeft(6);
    bgColorRgba.setHex(theme.color.white);
    bgColorRgba.setAlpha(1);
    borderRadius.setTopLeft(5);
    borderRadius.setTopRight(5);
    borderRadius.setBottomLeft(5);
    borderRadius.setBottomRight(5);
    border.setStyle(borderStyleOptions[1]);
    border.setColor(theme.color.bootstrapBlue);
    border.setWidth(1);
    setLabel("Primary");
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
              <Grid.FoldableTitle span={GRID_SPAN} title="?????? ??????">
                <Grid.Column span={1}>
                  <RequireLabel htmlFor="setLabel">?????????</RequireLabel>
                  <FeedbackInput
                    id="setLabel"
                    value={label}
                    setValue={setLabel}
                    condition={label.length < 10}
                    invalidComment="???????????? 10??? ???????????? ???????????????."
                  />
                </Grid.Column>
              </Grid.FoldableTitle>
              <Grid.FoldableTitle span={GRID_SPAN} title="???????????? ??????">
                <Grid.Column span={1}>
                  <RequireLabel htmlFor="setWidth">??????</RequireLabel>
                  <CountingInput
                    id="setWidth"
                    ariaLabel="??????"
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

              <Grid.FoldableTitle span={GRID_SPAN} title="????????? ??????">
                <FontOption id="Button" span={1} {...font} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="?????? ??????">
                <PaddingOption id="Button" span={1} {...padding} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="???????????? ??????">
                <BorderRadiusOption id="Button" span={1} {...borderRadius} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="????????? ??????">
                <BorderOption id="Button" span={1} {...border} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="????????? ??????">
                <RgbaOption id="Button" span={1} {...bgColorRgba} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="?????? ??????">
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

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
  // 버튼명 글자 수 제한
  const LABEL_LIMIT = 10;
  /* order - state */
  // 너비
  const [width, setWidth] = useState(100);
  // 버튼명
  const [label, setLabel] = useState("버튼명");
  // 배경색
  const bgColorRgba = useRgba(constants.color.whiteHex);
  // 모서리 각
  const borderRadius = useBorderRadius(4);
  // 여백
  const padding = usePadding(4);
  // 테두리
  const border = useBorder({
    style: borderStyleOptions[1],
    color: constants.color.blackHex,
    width: 1
  });
  // 텍스트 설정
  const font = useFont({
    color: constants.color.blackHex,
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: textAlignOptions[1],
    textOverflow: textOverflowOptions[0],
    fontWeight: fontWeightOptions[3]
  });
  // 언어
  const [lang, setLang] = useState<ISelectOption>(langOptions[0]);
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);

  /* order - variable */
  // preview style
  const buttonStyle: CSSProperties = {
    width: `${width}px`,
    backgroundColor: bgColorRgba.toString(),
    borderTopLeftRadius: `${borderRadius.topLeft}px`,
    borderTopRightRadius: `${borderRadius.topRight}px`,
    borderBottomLeftRadius: `${borderRadius.bottomLeft}px`,
    borderBottomRightRadius: `${borderRadius.bottomRight}px`,
    borderColor: border.color,
    borderWidth: `${border.width}px`,
    borderStyle: border.style.value,
    color: font.color,
    fontSize: `${font.fontSize}px`,
    lineHeight: `${font.lineHeight}px`,
    letterSpacing: `${font.letterSpacing}px`,
    paddingTop: `${padding.top}px`,
    paddingRight: `${padding.right}px`,
    paddingBottom: `${padding.bottom}px`,
    paddingLeft: `${padding.left}px`,
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
                <FontOption id="Button" span={1} {...font} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="여백 설정">
                <PaddingOption id="Button" span={1} {...padding} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="모서리각 설정">
                <BorderRadiusOption id="Button" span={1} {...borderRadius} />
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="테두리 설정">
                <BorderOption id="Button" span={1} {...border} />
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

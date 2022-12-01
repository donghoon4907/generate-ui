import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { RiArrowUpSLine } from "react-icons/ri";

import { CountingInput } from "../../components/CountingInput";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { StylingHeader } from "../../components/StylingHeader";
import { CountNumberType } from "../../types/count";
import { CustomSelect } from "../../components/CustomSelect";
import { buttonStyleOptions } from "../../components/options/ButtonStyle";
import type { SelectOption } from "../../types/select";
import * as Component from "../../components/partial/Component";
// import * as Preset from "../../components/partial/Preset";
import * as Option from "../../components/partial/Option";
import { RequireLabel } from "../../components/RequireLabel";
import { Checkbox } from "../../components/Checkbox";
import { templateOptions } from "../../components/options/Template";
import {
  StyleObjectToString,
  StyleProperties
} from "../../lib/style/to-string";
import { WithLabel } from "../../components/WithLabel";
import { PaddingOption } from "../../components/partial/PaddingOption";
import { BorderRadiusOption } from "../../components/partial/BorderRadiusOption";
import { BorderOption } from "../../components/partial/BorderOption";
import { textAlignOptions } from "../../components/options/TextAlign";
import { FontOption } from "../../components/partial/FontOption";
import { RgbaOption } from "../../components/partial/RgbaOption";

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
`;

const ComponentSelect: NextPage = () => {
  const [width, setWidth] = useState(200);

  const [borderStyle, setBorderStyle] = useState<SelectOption>(
    buttonStyleOptions[1]
  );

  const [borderWidth, setBorderWidth] = useState(1);

  const [borderColor, setBorderColor] = useState("#000000");

  const [backgroundColorHex, setBackgroundColorHex] = useState("#ffffff");

  const [backgroundColorRgb, setBackgroundColorRgb] = useState("255,255,255");

  const [backgroundColorAlpha, setBackgroundColorAlpha] = useState(1);

  const [label, setLabel] = useState("제목");

  const [selectColor, setSelectColor] = useState("#000000");

  const [optionColor, setOptionColor] = useState("#000000");

  const [selectTextAlign, setSelectTextAlign] = useState<SelectOption>(
    textAlignOptions[0]
  );

  const [optionTextAlign, setOptionTextAlign] = useState<SelectOption>(
    textAlignOptions[0]
  );

  const [selectFontSize, setSelectFontSize] = useState(16);

  const [optionFontSize, setOptionFontSize] = useState(16);

  const [selectLineHeight, setSelectLineHeight] = useState(25);

  const [optionLineHeight, setOptionLineHeight] = useState(25);

  const [selectLetterSpacing, setSelectLetterSpacing] = useState(0);

  const [optionLetterSpacing, setOptionLetterSpacing] = useState(0);

  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(4);

  const [borderTopRightRadius, setBorderTopRightRadius] = useState(4);

  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(4);

  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(4);

  const [isSetDetailBorderRadius, setIsSetDetailBorderRadius] = useState(false);

  const [selectPaddingTop, setSelectPaddingTop] = useState(4);

  const [selectPaddingRight, setSelectPaddingRight] = useState(4);

  const [selectPaddingBottom, setSelectPaddingBottom] = useState(4);

  const [selectPaddingLeft, setSelectPaddingLeft] = useState(4);

  const [optionPaddingTop, setOptionPaddingTop] = useState(4);

  const [optionPaddingRight, setOptionPaddingRight] = useState(4);

  const [optionPaddingBottom, setOptionPaddingBottom] = useState(4);

  const [optionPaddingLeft, setOptionPaddingLeft] = useState(4);

  const [isSetDetailSelectPadding, setIsSetDetailSelectPadding] =
    useState(false);

  const [isSetDetailOptionPadding, setIsSetDetailOptionPadding] =
    useState(false);

  const [template, setTemplate] = useState<SelectOption>(templateOptions[0]);
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);

  const handleChangeHtml = (evt: ChangeEvent<HTMLInputElement>) => {
    setHtml(evt.target.checked);
  };

  const handleClickPresetBootstrapButton = () => {};

  const handleClickPresetBootstrapOutlineButton = () => {};

  const handleExport = () => {
    const style: StyleProperties = {
      width,
      backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
      // color,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderWidth,
      borderStyle: borderStyle.value,
      borderColor
      // fontSize,
      // lineHeight,
      // letterSpacing,
      // paddingTop,
      // paddingRight,
      // paddingBottom,
      // paddingLeft
    };

    const exportToHtml = new StyleObjectToString(style);

    if (template.value === "default") {
      exportToHtml.convertButton(label);
    } else if (template.value === "style-and-el") {
      exportToHtml.convertButtonWithClass(label);
    }

    if (html) {
      exportToHtml.addTemplate();
    }

    exportToHtml.saveInClipboard();
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
          <Preview
            width={width}
            // height={height}
            // onImport={handleShowImportModal}
            onExport={handleExport}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
                borderTopLeftRadius,
                borderTopRightRadius,
                borderBottomLeftRadius,
                borderBottomRightRadius,
                borderColor,
                borderWidth,
                borderStyle: borderStyle.value,
                paddingTop: selectPaddingTop,
                paddingRight: selectPaddingRight,
                paddingBottom: selectPaddingBottom,
                paddingLeft: selectPaddingLeft
              }}
            >
              <div
                style={{
                  width: "100%",
                  color: selectColor,
                  fontSize: selectFontSize,
                  lineHeight: `${selectLineHeight}px`,
                  letterSpacing: selectLetterSpacing,
                  textAlign: selectTextAlign.value as any
                }}
              >
                {label}
              </div>
              <IconWrapper>
                <RiArrowUpSLine />
              </IconWrapper>
            </div>
            <div
              style={{
                width: "100%",
                color: optionColor,
                fontSize: optionFontSize,
                lineHeight: `${optionLineHeight}px`,
                letterSpacing: optionLetterSpacing,
                textAlign: optionTextAlign.value as any,
                backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
                borderColor,
                borderWidth,
                borderStyle: borderStyle.value
              }}
            >
              <div
                style={{
                  paddingTop: optionPaddingTop,
                  paddingRight: optionPaddingRight,
                  paddingBottom: optionPaddingBottom,
                  paddingLeft: optionPaddingLeft
                }}
              >
                Option 1...
              </div>
            </div>
          </Preview>
          {/* <Preset.Container>
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
          </Preset.Container> */}
        </Component.Aside>
        <Option.Container>
          <StylingHeader>Options</StylingHeader>
          <Option.Body>
            <Option.Grid>
              <Option.Title>레이아웃 설정</Option.Title>
              <Option.Item>
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
              </Option.Item>
              <Option.Title>테두리 설정</Option.Title>
              <BorderOption
                id="Select"
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
                borderColor={borderColor}
                setBorderColor={setBorderColor}
              />
              <Option.Title>배경색 설정</Option.Title>
              <RgbaOption
                id="Select"
                hex={backgroundColorHex}
                setRgb={setBackgroundColorRgb}
                setHex={setBackgroundColorHex}
                alpha={backgroundColorAlpha}
                setAlpha={setBackgroundColorAlpha}
              />
              <Option.Title>셀렉트 설정</Option.Title>

              <Option.Item>
                <RequireLabel htmlFor="setLabel">제목</RequireLabel>
                <FeedbackInput
                  id="setLabel"
                  value={label}
                  setValue={setLabel}
                  limit={10}
                  showFeedback={true}
                />
              </Option.Item>

              <FontOption
                id="Select"
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
              />

              <PaddingOption
                id="Select"
                paddingTop={selectPaddingTop}
                setPaddingTop={setSelectPaddingTop}
                paddingRight={selectPaddingRight}
                setPaddingRight={setSelectPaddingRight}
                paddingBottom={selectPaddingBottom}
                setPaddingBottom={setSelectPaddingBottom}
                paddingLeft={selectPaddingLeft}
                setPaddingLeft={setSelectPaddingLeft}
                isSetDetailPadding={isSetDetailSelectPadding}
                setIsSetDetailPadding={setIsSetDetailSelectPadding}
              />
              <BorderRadiusOption
                id="Select"
                borderTopLeftRadius={borderTopLeftRadius}
                setBorderTopLeftRadius={setBorderTopLeftRadius}
                borderTopRightRadius={borderTopRightRadius}
                setBorderTopRightRadius={setBorderTopRightRadius}
                borderBottomLeftRadius={borderBottomLeftRadius}
                setBorderBottomLeftRadius={setBorderBottomLeftRadius}
                borderBottomRightRadius={borderBottomRightRadius}
                setBorderBottomRightRadius={setBorderBottomRightRadius}
                isSetDetailBorderRadius={isSetDetailBorderRadius}
                setIsSetDetailBorderRadius={setIsSetDetailBorderRadius}
              />
              <Option.Title>옵션 설정</Option.Title>
              <FontOption
                id="Option"
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
              />
              <PaddingOption
                id="Option"
                paddingTop={optionPaddingTop}
                setPaddingTop={setOptionPaddingTop}
                paddingRight={optionPaddingRight}
                setPaddingRight={setOptionPaddingRight}
                paddingBottom={optionPaddingBottom}
                setPaddingBottom={setOptionPaddingBottom}
                paddingLeft={optionPaddingLeft}
                setPaddingLeft={setOptionPaddingLeft}
                isSetDetailPadding={isSetDetailOptionPadding}
                setIsSetDetailPadding={setIsSetDetailOptionPadding}
              />
              <Option.Title>환경 설정</Option.Title>
              <Option.Item>
                <RequireLabel htmlFor="setTemplate">템플릿</RequireLabel>
                <CustomSelect
                  activeOption={template}
                  setOption={setTemplate}
                  options={templateOptions}
                />
                <WithLabel id="setHtml" label="HTML 템플릿 추가">
                  <Checkbox
                    id="setHtml"
                    checked={html}
                    onChange={handleChangeHtml}
                  />
                </WithLabel>
              </Option.Item>
            </Option.Grid>
          </Option.Body>
        </Option.Container>
      </Component.Container>
    </>
  );
};

export default ComponentSelect;

import type { NextPage } from "next";
import Head from "next/head";
import type { ChangeEvent, CSSProperties } from "react";
import { useState } from "react";

import { CountingInput } from "../../components/CountingInput";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { StylingHeader } from "../../components/StylingHeader";
import { CountNumberType } from "../../types/count";
import { CustomSelect } from "../../components/CustomSelect";
import { buttonStyleOptions } from "../../components/options/ButtonStyle";
import type { SelectOption } from "../../types/select";
import * as Component from "../../components/partial/Component";
import * as Option from "../../components/partial/Option";
import { RequireLabel } from "../../components/RequireLabel";
import { Checkbox } from "../../components/Checkbox";
import { templateOptions } from "../../components/options/Template";
import { WithLabel } from "../../components/WithLabel";
import { PaddingOption } from "../../components/partial/PaddingOption";
import { BorderRadiusOption } from "../../components/partial/BorderRadiusOption";
import { BorderOption } from "../../components/partial/BorderOption";
import { textAlignOptions } from "../../components/options/TextAlign";
import { FontOption } from "../../components/partial/FontOption";
import { RgbaOption } from "../../components/partial/RgbaOption";
import { copyToClipboard } from "../../lib/copy/clipboard";
import {
  ChildOption,
  ConvertSelect,
  ParentOption
} from "../../lib/style/select";

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

  const selectWrapperStyle: CSSProperties = {
    width,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderStyle: borderStyle.value,
    borderWidth,
    borderColor,
    backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
    backgroundImage: `url("data:image/svg+xml, %3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 5px center",
    backgroundSize: "16px 16px",
    paddingRight: 20
  };

  const selectLabelStyle: CSSProperties = {
    width: "100%",
    color: selectColor,
    fontSize: selectFontSize,
    lineHeight: `${selectLineHeight}px`,
    letterSpacing: selectLetterSpacing,
    textAlign: selectTextAlign.value as any,
    background: "transparent",
    outline: "none",
    border: "none",
    paddingTop: selectPaddingTop,
    paddingRight: selectPaddingRight,
    paddingBottom: selectPaddingBottom,
    paddingLeft: selectPaddingLeft
  };

  const optionWrapperStyle: CSSProperties = {
    width,
    color: optionColor,
    fontSize: optionFontSize,
    lineHeight: `${optionLineHeight}px`,
    letterSpacing: optionLetterSpacing,
    textAlign: optionTextAlign.value as any,
    backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
    borderStyle: borderStyle.value,
    borderWidth,
    borderColor
  };

  const optionLabelStyle: CSSProperties = {
    paddingTop: optionPaddingTop,
    paddingRight: optionPaddingRight,
    paddingBottom: optionPaddingBottom,
    paddingLeft: optionPaddingLeft
  };

  const handleExport = () => {
    const parentOption: ParentOption = {
      wrapperStyle: selectWrapperStyle,
      labelStyle: selectLabelStyle
    };

    const childOption: ChildOption = {
      wrapperStyle: optionWrapperStyle,
      labelStyle: optionLabelStyle
    };

    const exportToSelect = new ConvertSelect(parentOption, childOption);

    if (template.value === "default") {
      exportToSelect.generateSelect(label);
    }

    if (html) {
      exportToSelect.addTemplate();
    }

    copyToClipboard(exportToSelect.getHtml);
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
            <div style={selectWrapperStyle}>
              <button type="button" style={selectLabelStyle}>
                {label}
              </button>
            </div>
            <ul style={optionWrapperStyle}>
              <li style={optionLabelStyle}>Option 1...</li>
            </ul>
          </Preview>
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
                isShowAllOption={isSetDetailSelectPadding}
                setIsShowAllOption={setIsSetDetailSelectPadding}
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
                isShowAllOption={isSetDetailBorderRadius}
                setIsShowAllOption={setIsSetDetailBorderRadius}
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
                isShowAllOption={isSetDetailOptionPadding}
                setIsShowAllOption={setIsSetDetailOptionPadding}
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

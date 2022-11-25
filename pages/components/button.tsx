import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";

import { CountingInput } from "../../components/CountingInput";
import { DefaultInput, FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { StylingHeader } from "../../components/StylingHeader";
import {
  BootstrapOutlineButton,
  BootstrapPrimaryButton
} from "../../components/Button";
import { theme } from "../../theme";
// import { BootstrapModal } from "../../components/Modal";
import { CountNumberType } from "../../types/count";
import { CustomSelect } from "../../components/CustomSelect";
import { buttonStyleOptions } from "../../components/options/ButtonStyle";
import type { SelectOption } from "../../types/select";
import { hexToRgb } from "../../lib/calc/rgb";
import * as Component from "../../components/partial/Component";
import * as Preset from "../../components/partial/Preset";
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

const ComponentButton: NextPage = () => {
  const [width, setWidth] = useState(100);

  // const [height, setHeight] = useState(40);

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
    buttonStyleOptions[1]
  );

  const [borderColor, setBorderColor] = useState("#000000");

  const [borderWidth, setBorderWidth] = useState(1);

  const [template, setTemplate] = useState<SelectOption>(templateOptions[0]);
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);

  const [fontSize, setFontSize] = useState(16);

  // const [showImportModal, setShowImportModal] = useState(false);

  const handleChangeBackgroundColor = (evt: ChangeEvent<HTMLInputElement>) => {
    const rgb = hexToRgb(evt.target.value);

    if (rgb !== null) {
      setBackgroundColorRgb(`${rgb.r},${rgb.g},${rgb.b}`);
    }

    setBackgroundColorHex(evt.target.value);
  };

  const handleChangeColor = (evt: ChangeEvent<HTMLInputElement>) => {
    setColor(evt.target.value);
  };

  const handleChangeBorderColor = (evt: ChangeEvent<HTMLInputElement>) => {
    setBorderColor(evt.target.value);
  };

  const handleChangeHtml = (evt: ChangeEvent<HTMLInputElement>) => {
    setHtml(evt.target.checked);
  };

  const handleClickPresetBootstrapButton = () => {
    setWidth(80);
    // setHeight(40);
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
    setBorderStyle(buttonStyleOptions[1]);
    setBackgroundColorAlpha(1);
    setFontSize(16);
    setLabel("Primary");
  };

  const handleClickPresetBootstrapOutlineButton = () => {
    setWidth(80);
    // setHeight(40);
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
    setBorderStyle(buttonStyleOptions[1]);
    setBackgroundColorAlpha(1);
    setFontSize(16);
    setLabel("Primary");
  };

  // const handleShowImportModal = () => {
  //   setShowImportModal(true);
  // };

  const handleExport = () => {
    const style: StyleProperties = {
      width,
      // height,
      backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
      color,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderWidth,
      borderStyle: borderStyle.value,
      borderColor,
      fontSize,
      lineHeight,
      letterSpacing,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft
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
      {/* <Header>
        <Title>Components</Title>
        <Description>
          Select an element and style the component as desired. You can copy the
          styling as it is and move it to your web page for use.
        </Description>
      </Header> */}

      <Component.Container>
        <Component.Aside>
          <Preview
            width={width}
            // height={height}
            // onImport={handleShowImportModal}
            onExport={handleExport}
          >
            <button
              style={{
                width: "100%",
                height: "100%",
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
                paddingLeft
              }}
            >
              {label}
            </button>
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
            <Option.Grid>
              <Option.Title>기본 설정</Option.Title>
              <Option.Item>
                <RequireLabel htmlFor="setLabel">버튼명</RequireLabel>
                <FeedbackInput
                  id="setLabel"
                  value={label}
                  setValue={setLabel}
                  limit={10}
                  showFeedback={true}
                />
              </Option.Item>
              <Option.Item>
                <RequireLabel htmlFor="setColor">글자 색</RequireLabel>
                <DefaultInput
                  id="setColor"
                  type="color"
                  value={color}
                  onChange={handleChangeColor}
                />
              </Option.Item>
              <Option.Title>레이아웃 설정</Option.Title>
              <Option.Item>
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
              </Option.Item>
              {/* <Option.Item>
              <RequireLabel htmlFor="setHeight">높이</RequireLabel>
              <CountingInput
                id="setHeight"
                ariaLabel="높이"
                count={height}
                setCount={setHeight}
                limit={100}
                showIcon={true}
                showFeedback={true}
                numberType={CountNumberType.INTEGER}
                unit="px"
              />
            </Option.Item> */}
              <Option.Item>
                <RequireLabel htmlFor="setFontSize">글자 크기</RequireLabel>
                <CountingInput
                  id="setFontSize"
                  ariaLabel="글자 크기"
                  count={fontSize}
                  setCount={setFontSize}
                  limit={30}
                  showIcon={true}
                  showFeedback={true}
                  numberType={CountNumberType.INTEGER}
                  unit="px"
                />
              </Option.Item>
              <Option.Item>
                <RequireLabel htmlFor="setLineHeight">줄 높이</RequireLabel>
                <CountingInput
                  id="setLineHeight"
                  ariaLabel="줄 높이"
                  count={lineHeight}
                  setCount={setLineHeight}
                  limit={100}
                  showIcon={true}
                  showFeedback={true}
                  numberType={CountNumberType.INTEGER}
                  unit="px"
                />
              </Option.Item>
              <Option.Item>
                <RequireLabel htmlFor="setLetterSpacing">자간</RequireLabel>
                <CountingInput
                  id="setLetterSpacing"
                  ariaLabel="자간"
                  count={letterSpacing}
                  setCount={setLetterSpacing}
                  limit={5}
                  showIcon={true}
                  showFeedback={true}
                  numberType={CountNumberType.DECIMAL}
                  unit="px"
                />
              </Option.Item>
              <PaddingOption
                paddingTop={paddingTop}
                setPaddingTop={setPaddingTop}
                paddingRight={paddingRight}
                setPaddingRight={setPaddingRight}
                paddingBottom={paddingBottom}
                setPaddingBottom={setPaddingBottom}
                paddingLeft={paddingLeft}
                setPaddingLeft={setPaddingLeft}
                isSetDetailPadding={isSetDetailPadding}
                setIsSetDetailPadding={setIsSetDetailPadding}
              />
              <BorderRadiusOption
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

              <Option.Title>테두리 설정</Option.Title>
              <Option.Item>
                <RequireLabel>스타일</RequireLabel>
                <CustomSelect
                  activeOption={borderStyle}
                  setOption={setBorderStyle}
                  options={buttonStyleOptions}
                />
              </Option.Item>
              <Option.Item>
                <RequireLabel htmlFor="setBorderWidth">너비</RequireLabel>
                <CountingInput
                  id="setBorderWidth"
                  ariaLabel="테두리 굵기"
                  count={borderWidth}
                  setCount={setBorderWidth}
                  limit={10}
                  showIcon={true}
                  showFeedback={true}
                  numberType={CountNumberType.INTEGER}
                  unit="px"
                />
              </Option.Item>
              <Option.Item>
                <RequireLabel htmlFor="setBorderColor">색</RequireLabel>
                <DefaultInput
                  id="setBorderColor"
                  type="color"
                  value={borderColor}
                  onChange={handleChangeBorderColor}
                />
              </Option.Item>
              <Option.Title>배경색 설정</Option.Title>
              <Option.Item>
                <RequireLabel htmlFor="setBackgroundColorRgb">RGB</RequireLabel>
                <DefaultInput
                  id="setBackgroundColorRgb"
                  type="color"
                  value={backgroundColorHex}
                  onChange={handleChangeBackgroundColor}
                />
              </Option.Item>
              <Option.Item>
                <RequireLabel htmlFor="setBackgroundColorAlpha">
                  투명도
                </RequireLabel>
                <CountingInput
                  id="setBackgroundColorAlpha"
                  ariaLabel="배경색 Alpha"
                  count={backgroundColorAlpha}
                  setCount={setBackgroundColorAlpha}
                  limit={1}
                  showIcon={true}
                  showFeedback={true}
                  numberType={CountNumberType.DECIMAL}
                  unit=""
                />
              </Option.Item>

              {/* <Option.Title>추가 설정</Option.Title>
            <Option.Item>
              <Checkbox id="setDisabled" label="비활성 스타일 사용" />
            </Option.Item> */}
              {/* <OptionTitle>접근성 설정</OptionTitle> */}
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

export default ComponentButton;

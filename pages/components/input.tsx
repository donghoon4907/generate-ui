import type { NextPage } from "next";
import Head from "next/head";
import type { ChangeEvent } from "react";
import { useState } from "react";
import styled from "styled-components";

import { CountingInput } from "../../components/CountingInput";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { StylingHeader } from "../../components/StylingHeader";
import {
  BootstrapDarkInputButton,
  BootstrapLightInputButton
} from "../../components/Button";
import { theme } from "../../theme";
import { CountNumberType } from "../../types/count";
import { CustomSelect } from "../../components/CustomSelect";
import { buttonStyleOptions } from "../../components/options/ButtonStyle";
import type { SelectOption } from "../../types/select";
import * as Component from "../../components/partial/Component";
import * as Preset from "../../components/partial/Preset";
import * as Option from "../../components/partial/Option";
import { RequireLabel } from "../../components/RequireLabel";
import { inputTypeOptions } from "../../components/options/InputType";
import { templateOptions } from "../../components/options/Template";
import {
  StyleObjectToString,
  StyleProperties
} from "../../lib/style/to-string";
import { WithLabel } from "../../components/WithLabel";
import { Checkbox } from "../../components/Checkbox";
import { PaddingOption } from "../../components/partial/PaddingOption";
import { BorderRadiusOption } from "../../components/partial/BorderRadiusOption";
import { InputType } from "../../types/input";
import { BsSearch } from "react-icons/bs";
import { FontOption } from "../../components/partial/FontOption";
import { textAlignOptions } from "../../components/options/TextAlign";
import { BorderOption } from "../../components/partial/BorderOption";
import { RgbaOption } from "../../components/partial/RgbaOption";
// import { BootstrapModal } from "../../components/Modal";
// import { StyleStringToObject } from "../../lib/style/to-object";
// import { DefaultTextArea } from "../../components/TextArea";

const SearchIconWrapper = styled.div`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 50%;
  left: 5px;
  color: black;
  transform: translate3d(0, -50%, 0);

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const ComponentInput: NextPage = () => {
  const [inputType, setInputType] = useState<SelectOption>(inputTypeOptions[0]);

  const [width, setWidth] = useState(100);

  const [lineHeight, setLineHeight] = useState(25);

  const [letterSpacing, setLetterSpacing] = useState(0);

  const [placeholder, setPlaceholder] = useState("입력하세요");

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

  // search icon 추가 여부
  const [showIcon, setShowIcon] = useState(false);

  const [textAlign, setTextAlign] = useState<SelectOption>(textAlignOptions[0]);

  // const [showImportModal, setShowImportModal] = useState(false);

  // const [importStrStyle, setImportStrStyle] = useState("");

  // const [importStyleFeedback, setImportStyleFeedback] = useState("");

  const handleChangeHtml = (evt: ChangeEvent<HTMLInputElement>) => {
    setHtml(evt.target.checked);
  };

  const handleChangeShowIcon = (evt: ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;

    setShowIcon(checked);

    if (checked) {
      setPaddingLeft(25);
    }
  };

  const handleClickPresetBootstrapLightButton = () => {
    setWidth(100);
    setLineHeight(25);
    setLetterSpacing(0);
    setPaddingTop(6);
    setPaddingRight(12);
    setPaddingBottom(6);
    setPaddingLeft(12);
    setIsSetDetailPadding(true);
    setBackgroundColorHex(theme.color.white);
    setBackgroundColorRgb("255,255,255");
    setBackgroundColorAlpha(1);
    setColor(theme.color.white);
    setBorderTopLeftRadius(5);
    setBorderTopRightRadius(5);
    setBorderBottomLeftRadius(5);
    setBorderBottomRightRadius(5);
    setIsSetDetailBorderRadius(false);
    setBorderColor(theme.color.lightDividerColor);
    setBorderWidth(1);
    setBorderStyle(buttonStyleOptions[1]);
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
    setIsSetDetailPadding(true);
    setBackgroundColorHex(theme.color.gray_lv0);
    setBackgroundColorRgb("31, 31, 31");
    setBackgroundColorAlpha(1);
    setColor(theme.color.darkTextColor_lv0);
    setBorderTopLeftRadius(5);
    setBorderTopRightRadius(5);
    setBorderBottomLeftRadius(5);
    setBorderBottomRightRadius(5);
    setIsSetDetailBorderRadius(false);
    setBorderColor(theme.color.darkDividerColor);
    setBorderWidth(1);
    setBorderStyle(buttonStyleOptions[1]);
    setFontSize(16);
  };

  // const handleShowImportModal = () => {
  //   setShowImportModal(true);
  // };

  // const handleChangeImportStrStyle = (
  //   evt: ChangeEvent<HTMLTextAreaElement>
  // ) => {
  //   const nextVal = evt.target.value;

  //   setImportStrStyle(nextVal);

  //   const importToObj = new StyleStringToObject(nextVal);

  //   let feedback = "";

  //   const {
  //     backgroundColor,
  //     borderRadius,
  //     lineHeight,
  //     letterSpacing,
  //     padding
  //   } = importToObj.getObject;

  //   if (backgroundColor) {
  //     feedback += "배경 색 정보를 확인했습니다.";
  //   }

  //   if (borderRadius && importToObj.isPixel(borderRadius)) {
  //     feedback += "모서리 각도 정보를 확인했습니다.";
  //   }

  //   if (lineHeight && importToObj.isPixel(lineHeight)) {
  //     feedback += "줄 높이 정보를 확인했습니다.";
  //   }

  //   if (letterSpacing && importToObj.isPixel(letterSpacing)) {
  //     feedback += "자간 정보를 확인했습니다.";
  //   }

  //   if (padding && importToObj.isPixel(padding)) {
  //     feedback += "여백 정보를 확인했습니다.";
  //   }

  //   if (!feedback) {
  //     feedback += "스타일 형식을 확인하세요.";
  //   }

  //   setImportStyleFeedback(feedback);
  // };

  // const handleImport = () => {
  //   const importToObj = new StyleStringToObject(importStrStyle);

  //   const { backgroundColor, backgroundColorAlpha, borderRadius, lineHeight, letterSpacing, padding } =
  //     importToObj.getObject;

  //   if (backgroundColor) {
  //     setBackgroundColor(backgroundColor);
  //   }

  //   if (backgroundColorAlpha) {
  //     setBackgroundColorAlpha(+backgroundColorAlpha);
  //   }

  //   if (borderRadius && importToObj.isPixel(borderRadius)) {
  //     setBorderRadius(importToObj.convertPixelToNumber(borderRadius));
  //   }

  //   setShowImportModal(false);
  // };

  const handleExport = () => {
    const style: StyleProperties = {
      width,
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
      paddingLeft,
      textAlign: textAlign.value as any
    };

    const exportToHtml = new StyleObjectToString(style);

    if (template.value === "default") {
      exportToHtml.convertInput(inputType.value, { showIcon });
    } else if (template.value === "style-and-el") {
      exportToHtml.convertInputWithClass(inputType.value, { showIcon });
    }

    if (html) {
      exportToHtml.addTemplate();
    }

    exportToHtml.saveInClipboard();
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
          <Preview
            width={width}
            // onImport={handleShowImportModal}
            onExport={handleExport}
          >
            <input
              type={inputType.value}
              placeholder={placeholder}
              style={{
                width: "100%",
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
                textAlign: textAlign.value as any
              }}
            />
            {showIcon && (
              <SearchIconWrapper>
                <BsSearch />
              </SearchIconWrapper>
            )}
          </Preview>
          <Preset.Container>
            <StylingHeader>Preset</StylingHeader>
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
        <Option.Container>
          <StylingHeader>Options</StylingHeader>
          <Option.Body>
            <Option.Grid>
              <Option.Title>기본 설정</Option.Title>
              <Option.Item>
                <RequireLabel>타입</RequireLabel>
                <CustomSelect
                  activeOption={inputType}
                  setOption={setInputType}
                  options={inputTypeOptions}
                />
                {inputType.value === InputType.SEARCH && (
                  <WithLabel id="setHasIcon" label="검색 아이콘 추가">
                    <Checkbox
                      id="setHasIcon"
                      checked={showIcon}
                      onChange={handleChangeShowIcon}
                    />
                  </WithLabel>
                )}
              </Option.Item>
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
              <Option.Title>텍스트 설정</Option.Title>
              <Option.Item>
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
              </Option.Item>
              <FontOption
                id="Input"
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
              <Option.Title>여백 설정</Option.Title>
              <PaddingOption
                id="Input"
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
                isDisabledPaddingLeft={showIcon}
              />
              <Option.Title>테두리 설정</Option.Title>
              <BorderRadiusOption
                id="Input"
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
              <BorderOption
                id="Input"
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
                borderColor={borderColor}
                setBorderColor={setBorderColor}
              />
              <Option.Title>배경색 설정</Option.Title>
              <RgbaOption
                id="Input"
                hex={backgroundColorHex}
                setRgb={setBackgroundColorRgb}
                setHex={setBackgroundColorHex}
                alpha={backgroundColorAlpha}
                setAlpha={setBackgroundColorAlpha}
              />

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
      {/* <BootstrapModal
        show={showImportModal}
        setShow={setShowImportModal}
        ariaLabel="importModal"
        headerTitle="Import"
        showHeaderCloseButton={true}
        onSubmit={handleImport}
      >
        <div>
          <p>
            * 불러오길 원하는 요소의 스타일을 복사하여 이곳에 붙여넣기 해주세요.
          </p>
          <DefaultTextArea
            value={importStrStyle}
            onChange={handleChangeImportStrStyle}
          />
          {importStyleFeedback.split(".").map((feedback, index) => (
            <p key={`importStyleFeedback${index}`}>{feedback}</p>
          ))}
        </div>
      </BootstrapModal> */}
    </>
  );
};

export default ComponentInput;

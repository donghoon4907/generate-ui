import type { NextPage } from "next";
import Head from "next/head";
import type { ChangeEvent } from "react";
import { useState } from "react";
import styled from "styled-components";

import { mixinBgLv1 } from "../../theme/mixins/background";
import { CountingInput } from "../../components/CountingInput";
import { DefaultInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { StylingHeader } from "../../components/StylingHeader";
import {
  BootstrapDarkInputButton,
  BootstrapLightInputButton
} from "../../components/Button";
import { theme } from "../../theme";
import { BootstrapModal } from "../../components/Modal";
import { CountNumberType } from "../../types/count";
import { CustomSelect } from "../../components/CustomSelect";
import { buttonStyleOptions } from "../../components/options/ButtonStyle";
import type { SelectOption } from "../../types/select";
import { hexToRgb } from "../../lib/calc/rgb";
import * as Preset from "../../components/partial/Preset";
import * as Option from "../../components/partial/Option";
import { RequireLabel } from "../../components/RequireLabel";
import { inputTypeOptions } from "../../components/options/InputType";
import { templateOptions } from "../../components/options/Template";
import {
  StyleObjectToString,
  StyleProperties
} from "../../lib/style/to-string";
import { StyleStringToObject } from "../../lib/style/to-object";
import { DefaultTextArea } from "../../components/TextArea";
import { Switch } from "../../components/Switch";
import { WithLabel } from "../../components/WithLabel";
import { Checkbox } from "../../components/Checkbox";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  width: 100%;
  padding: 5px;
`;

const OutputContainer = styled.div`
  position: sticky;
  top: 5px;
  width: 300px;
  height: 330px;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 5px;

  ${mixinBgLv1}
`;

const ComponentInput: NextPage = () => {
  const [inputType, setInputType] = useState<SelectOption>(inputTypeOptions[0]);

  const [width, setWidth] = useState(100);

  const [height, setHeight] = useState(40);

  const [placeholder, setPlaceholder] = useState("입력하세요");

  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const [backgroundColorAlpha, setBackgroundColorAlpha] = useState(1);

  const [color, setColor] = useState("#000000");

  const [borderTopLeftRadius, setBorderTopLeftRadius] = useState(4);

  const [borderTopRightRadius, setBorderTopRightRadius] = useState(4);

  const [borderBottomLeftRadius, setBorderBottomLeftRadius] = useState(4);

  const [borderBottomRightRadius, setBorderBottomRightRadius] = useState(4);

  const [isSetDetailBorderRadius, setIsSetDetailBorderBottomRightRadius] =
    useState(false);

  const [borderStyle, setBorderStyle] = useState<SelectOption>(
    buttonStyleOptions[1]
  );

  const [borderColor, setBorderColor] = useState("#000000");

  const [borderWidth, setBorderWidth] = useState(1);

  const [template, setTemplate] = useState<SelectOption>(templateOptions[0]);
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);

  const [fontSize, setFontSize] = useState(16);

  const [showImportModal, setShowImportModal] = useState(false);

  const [importStrStyle, setImportStrStyle] = useState("");

  const [importStyleFeedback, setImportStyleFeedback] = useState("");

  const handleChangePlaceholder = (evt: ChangeEvent<HTMLInputElement>) => {
    setPlaceholder(evt.target.value);
  };

  const handleChangeBackgroundColorRgb = (
    evt: ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(evt.target.value);
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

  const setBorderRadius = (px: number) => {
    setBorderTopLeftRadius(px);
    setBorderTopRightRadius(px);
    setBorderBottomLeftRadius(px);
    setBorderBottomRightRadius(px);
  };

  const handleClickPresetBootstrapLightButton = () => {
    setWidth(80);
    setHeight(40);
    setBackgroundColor(theme.color.white);
    setColor(theme.color.white);
    setBorderRadius(5);
    setIsSetDetailBorderBottomRightRadius(false);
    setBorderColor(theme.color.lightDividerColor);
    setBorderWidth(1);
    setBorderStyle(buttonStyleOptions[1]);
    setBackgroundColorAlpha(1);
    setFontSize(16);
  };

  const handleClickPresetBootstrapDarkButton = () => {
    setWidth(80);
    setHeight(40);
    setBackgroundColor(theme.color.gray_lv0);
    setColor(theme.color.darkTextColor_lv0);
    setBorderRadius(5);
    setIsSetDetailBorderBottomRightRadius(false);
    setBorderColor(theme.color.darkDividerColor);
    setBorderWidth(1);
    setBorderStyle(buttonStyleOptions[1]);
    setBackgroundColorAlpha(1);
    setFontSize(16);
  };

  const handleShowImportModal = () => {
    setShowImportModal(true);
  };

  const handleChangeImportStrStyle = (
    evt: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const nextVal = evt.target.value;

    setImportStrStyle(nextVal);

    const importToObj = new StyleStringToObject(nextVal);

    let feedback = "";

    const { backgroundColor, borderRadius } = importToObj.getObject;

    if (backgroundColor) {
      feedback += "배경 색 정보를 확인했습니다.";
    }

    if (borderRadius && importToObj.isPixel(borderRadius)) {
      feedback += "모서리 각도 정보를 확인했습니다.";
    }

    if (!feedback) {
      feedback += "스타일 형식을 확인하세요.";
    }

    setImportStyleFeedback(feedback);
  };

  const handleImport = () => {
    const importToObj = new StyleStringToObject(importStrStyle);

    const { backgroundColor, backgroundColorAlpha, borderRadius } =
      importToObj.getObject;

    if (backgroundColor) {
      setBackgroundColor(backgroundColor);
    }

    if (backgroundColorAlpha) {
      setBackgroundColorAlpha(+backgroundColorAlpha);
    }

    if (borderRadius && importToObj.isPixel(borderRadius)) {
      setBorderRadius(importToObj.convertPixelToNumber(borderRadius));
    }

    setShowImportModal(false);
  };

  const handleExport = () => {
    const style: StyleProperties = {
      width,
      height,
      backgroundColor,
      backgroundColorAlpha,
      color,
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderWidth,
      borderStyle: borderStyle.value,
      borderColor,
      fontSize
    };

    const exportToHtml = new StyleObjectToString(style);

    if (template.value === "default") {
      exportToHtml.convertInput(inputType.value);
    } else if (template.value === "style-and-el") {
      exportToHtml.convertInputWithClass(inputType.value);
    }

    if (html) {
      exportToHtml.addTemplate();
    }

    exportToHtml.saveInClipboard();
  };

  const rgb = hexToRgb(backgroundColor);

  let hexToRgba = "inherit";
  if (rgb) {
    hexToRgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${backgroundColorAlpha})`;
  }

  return (
    <>
      <Head>
        <title>Components - Input</title>
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

      <Container>
        <OutputContainer>
          <Preview
            width={width}
            height={height}
            onImport={handleShowImportModal}
            onExport={handleExport}
          >
            <input
              placeholder={placeholder}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: hexToRgba,
                color,
                position: "absolute",
                left: 0,
                bottom: 0,
                borderTopLeftRadius,
                borderTopRightRadius,
                borderBottomLeftRadius,
                borderBottomRightRadius,
                borderColor,
                borderWidth,
                borderStyle: borderStyle.value,
                fontSize
              }}
            />
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
        </OutputContainer>
        <Option.Container>
          <StylingHeader>Options</StylingHeader>
          <Option.Body>
            <Option.Title>기본 설정</Option.Title>
            <Option.Item>
              <RequireLabel>타입</RequireLabel>
              <CustomSelect
                activeOption={inputType}
                setOption={setInputType}
                options={inputTypeOptions}
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
            <Option.Item>
              <RequireLabel htmlFor="setPlaceholder">
                입력 가이드 문구
              </RequireLabel>
              <DefaultInput
                id="setPlaceholder"
                value={placeholder}
                onChange={handleChangePlaceholder}
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
            <Option.Item>
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
            </Option.Item>
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

            <Option.Title>모서리 각 설정</Option.Title>
            <Option.Item>
              <RequireLabel
                htmlFor={
                  isSetDetailBorderRadius
                    ? "setBorderTopLeftRadius"
                    : "setBorderRadius"
                }
              >
                {isSetDetailBorderRadius ? "Top-Left" : "모서리 각"}
              </RequireLabel>
              <CountingInput
                id={
                  isSetDetailBorderRadius
                    ? "setBorderTopLeftRadius"
                    : "setBorderRadius"
                }
                ariaLabel={
                  isSetDetailBorderRadius
                    ? "border-top-left-radius"
                    : "border-radius"
                }
                count={borderTopLeftRadius}
                setCount={
                  isSetDetailBorderRadius
                    ? setBorderTopLeftRadius
                    : setBorderRadius
                }
                limit={100}
                showIcon={true}
                showFeedback={true}
                numberType={CountNumberType.INTEGER}
                unit="px"
              />
              <WithLabel id="setDetailBorderRadius" label="디테일 설정">
                <Switch
                  id="setDetailBorderRadius"
                  width={40}
                  checked={isSetDetailBorderRadius}
                  setChecked={setIsSetDetailBorderBottomRightRadius}
                />
              </WithLabel>
            </Option.Item>
            {isSetDetailBorderRadius && (
              <>
                <Option.Item>
                  <RequireLabel htmlFor="setBorderTopRightRadius">
                    Top-Right
                  </RequireLabel>
                  <CountingInput
                    id="setBorderTopRightRadius"
                    ariaLabel="border-top-right-radius"
                    count={borderTopRightRadius}
                    setCount={setBorderTopRightRadius}
                    limit={100}
                    showIcon={true}
                    showFeedback={true}
                    numberType={CountNumberType.INTEGER}
                    unit="px"
                  />
                </Option.Item>
                <Option.Item>
                  <RequireLabel htmlFor="setBorderBottomLeftRadius">
                    Bottom-Left
                  </RequireLabel>
                  <CountingInput
                    id="setBorderBottomLeftRadius"
                    ariaLabel="border-bottom-left-radius"
                    count={borderBottomLeftRadius}
                    setCount={setBorderBottomLeftRadius}
                    limit={100}
                    showIcon={true}
                    showFeedback={true}
                    numberType={CountNumberType.INTEGER}
                    unit="px"
                  />
                </Option.Item>
                <Option.Item>
                  <RequireLabel htmlFor="setBorderBottomRightRadius">
                    Bottom-Right
                  </RequireLabel>
                  <CountingInput
                    id="setBorderBottomRightRadius"
                    ariaLabel="border-bottom-right-radius"
                    count={borderBottomRightRadius}
                    setCount={setBorderBottomRightRadius}
                    limit={100}
                    showIcon={true}
                    showFeedback={true}
                    numberType={CountNumberType.INTEGER}
                    unit="px"
                  />
                </Option.Item>
              </>
            )}

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
                value={backgroundColor}
                onChange={handleChangeBackgroundColorRgb}
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
          </Option.Body>
        </Option.Container>
      </Container>
      <BootstrapModal
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
      </BootstrapModal>
    </>
  );
};

export default ComponentInput;

import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { mixinBgLv1 } from "../../theme/mixins/background";
import { CountingInput } from "../../components/CountingInput";
import { Select } from "../../components/Select";
import { DefaultInput, Input } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { StylingHeader } from "../../components/StylingHeader";
import {
  BootstrapOutlineButton,
  BootstrapPrimaryButton
} from "../../components/Button";
import { theme } from "../../theme";
import { BootstrapModal } from "../../components/Modal";
import { CountNumberType } from "../../types/count";
import { CustomSelect } from "../../components/CustomSelect";
import { buttonStyleOptions } from "../../components/ButtonStyle";
import type { SelectOption } from "../../types/select";
import { hexToRgb } from "../../lib/calc/rgb";
import * as Preset from "../../components/partial/Preset";
import * as Option from "../../components/partial/Option";
import { RequireLabel } from "../../components/RequireLabel";
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

const ComponentButton: NextPage = () => {
  const [width, setWidth] = useState(100);

  const [height, setHeight] = useState(40);

  const [label, setLabel] = useState("버튼명");

  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const [backgroundColorAlpha, setBackgroundColorAlpha] = useState(1);

  const [color, setColor] = useState("#000000");

  const [borderRadius, setBorderRadius] = useState(4);

  const [borderStyle, setBorderStyle] = useState<SelectOption>(
    buttonStyleOptions[1]
  );

  const [borderColor, setBorderColor] = useState("#000000");

  const [borderWidth, setBorderWidth] = useState(1);

  const [template, setTemplate] = useState("default");
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);

  const [fontSize, setFontSize] = useState(16);

  const [showImportModal, setShowImportModal] = useState(false);

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

  const handleChangeTemplate = (evt: ChangeEvent<HTMLSelectElement>) => {
    setTemplate(evt.target.value);
  };

  const handleChangeHtml = (evt: ChangeEvent<HTMLInputElement>) => {
    setHtml(evt.target.checked);
  };

  const handleClickPresetBootstrapButton = () => {
    setWidth(80);
    setHeight(40);
    setBackgroundColor(theme.color.bootstrapBlue);
    setColor(theme.color.white);
    setBorderRadius(5);
    setBorderColor(theme.color.bootstrapBlue);
    setBorderWidth(1);
    setBorderStyle(buttonStyleOptions[1]);
    setBackgroundColorAlpha(1);
    setFontSize(16);
    setLabel("Primary");
  };

  const handleClickPresetBootstrapOutlineButton = () => {
    setWidth(80);
    setHeight(40);
    setBackgroundColor(theme.color.white);
    setColor(theme.color.bootstrapBlue);
    setBorderRadius(5);
    setBorderColor(theme.color.bootstrapBlue);
    setBorderWidth(1);
    setBorderStyle(buttonStyleOptions[1]);
    setBackgroundColorAlpha(1);
    setFontSize(16);
    setLabel("Primary");
  };

  const handleShowImportModal = () => {
    setShowImportModal(true);
  };

  const handleExport = () => {
    let result = "";

    let style = `
    width: ${width}px;
    height: ${height}px;
    background-color: ${hexToRgba};
    color: ${color};
    border-radius: ${borderRadius};
    border: ${borderWidth}px ${borderStyle} ${borderColor};
    font-size: ${fontSize}px;
    `;

    if (template === "default") {
      result = `<button type="button" style="${style}">${label}</button>`;
    } else if (template === "style-and-el") {
      result = `
      <style>
        .generate-button {
          ${style}
        }
      </style>
      <button type="button" class="generate-button">
        ${label}
      </button>
      `;
    }

    if (html) {
      result = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
          ${result}
        </body>
      </html>
      `;
    } else {
      result = `
      ${result}
      `;
    }

    navigator.clipboard
      .writeText(result)
      .then(() => alert("Copied!"))
      .catch(err => alert("해당 브라우저에서는 지원하지 않는 기능입니다."));
  };

  const rgb = hexToRgb(backgroundColor);

  let hexToRgba = "inherit";
  if (rgb) {
    hexToRgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${backgroundColorAlpha})`;
  }

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

      <Container>
        <OutputContainer>
          <Preview
            width={width}
            height={height}
            onImport={handleShowImportModal}
            onExport={handleExport}
          >
            <button
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: hexToRgba,
                color,
                position: "absolute",
                left: 0,
                bottom: 0,
                borderRadius,
                borderColor,
                borderWidth,
                borderStyle: borderStyle.value,
                fontSize
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
        </OutputContainer>
        <Option.Container>
          <StylingHeader>Options</StylingHeader>
          <Option.Body>
            <Option.Title>기본 설정</Option.Title>
            <Option.Item>
              <RequireLabel htmlFor="setLabel">버튼명</RequireLabel>
              <Input
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
            <Option.Item>
              <RequireLabel htmlFor="setBorderRadius">모서리 각도</RequireLabel>
              <CountingInput
                id="setBorderRadius"
                ariaLabel="모서리 각도"
                count={borderRadius}
                setCount={setBorderRadius}
                limit={100}
                showIcon={true}
                showFeedback={true}
                numberType={CountNumberType.INTEGER}
                unit="px"
              />
            </Option.Item>

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
              <RequireLabel htmlFor="setBorderWidth">굵기</RequireLabel>
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
            <Option.Title>버튼 배경색 설정</Option.Title>
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

            <Option.Title>추가 설정</Option.Title>
            <Option.Item>
              <Checkbox id="setDisabled" label="비활성 스타일 사용" />
            </Option.Item>
            {/* <OptionTitle>접근성 설정</OptionTitle> */}
            <Option.Title>환경 설정</Option.Title>
            <Option.Item>
              <RequireLabel htmlFor="setTemplate">템플릿</RequireLabel>
              <Select
                id="setTemplate"
                defaultValue={template}
                onChange={handleChangeTemplate}
                options={[
                  {
                    id: "templateSelectOption1",
                    label: "요소만",
                    value: "default"
                  },
                  {
                    id: "templateSelectOption2",
                    label: "스타일 분리",
                    value: "style-and-el"
                  }
                ]}
              />
              <Checkbox
                id="setHtml"
                onChange={handleChangeHtml}
                checked={html}
                label="HTML 템플릿 추가"
              />
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
      >
        <div>test</div>
      </BootstrapModal>
    </>
  );
};

export default ComponentButton;

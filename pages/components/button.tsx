import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import {
  mixinBgLv1,
  mixinBgLv2,
  mixinBgLv3
} from "../../theme/mixins/background";
import { CountingInput } from "../../components/CountingInput";
import { Select } from "../../components/Select";
import { mixinInputDefault } from "../../theme/mixins/input";
import { Input } from "../../components/Input";
import { mixinTitlelg, mixinTitleXlg } from "../../theme/mixins/label";
import { mixinBtnDefault } from "../../theme/mixins/button";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  width: 100%;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  padding: 5px;
`;

const OutputContainer = styled.div`
  width: 300px;
  height: 330px;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 5px;

  ${mixinBgLv1}
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
  font-size: 18px;
  font-weight: 500;
  height: 40px;
  user-select: none;

  ${mixinBgLv2}
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.dividerColor};
`;

const PreviewBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  height: 250px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
`;

const Preview = styled.div`
  position: relative;
`;

const PreviewRangeTop = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 20px;
  border-top: 1px dashed ${({ theme }) => theme.textColor_lv0};
  border-radius: 50%;
`;

const PreviewWidth = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

const PreviewRangeLeft = styled.div`
  position: absolute;
  left: -10px;
  top: 0;
  height: 100%;
  width: 20px;
  border-left: 1px dashed ${({ theme }) => theme.textColor_lv0};
  border-radius: 50%;
`;

const PreviewHeight = styled.div`
  position: absolute;
  top: 50%;
  left: -45px;
  transform: translate3d(0, -50%, 0);
`;

const OptionContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.dividerColor};

  ${mixinBgLv1}
`;

const OptionBody = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
`;

const OptionTitle = styled.div`
  grid-column: span 3;
  padding: 5px 10px 0 10px;
  margin-bottom: 5px;
  user-select: none;

  font-weight: bold;
`;

const RequireMark = styled.label`
  position: relative;
  display: inline-block;
  user-select: none;

  &:before {
    content: "*";
    color: red;
    position: absolute;
    top: -5px;
    right: -7px;
  }
`;

const OptionItem = styled.div<{ span?: number }>`
  grid-column: span ${({ span }) => span || 1};
  padding: 5px 10px;

  & > * {
    margin-bottom: 5px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  user-select: none;
`;

const StyledInput = styled.input`
  ${mixinInputDefault}
`;

const PreviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  height: 40px;
`;

const StylingButtonContainer = styled.div`
  width: 100px;
`;

const StylingButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: ${({ theme }) => theme.activeBgColor} !important;
  line-height: 30px;

  ${mixinBtnDefault}
`;

const PresetContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.dividerColor};
`;

const PresetBody = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px;
`;

const PresetItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const PresetPreview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 50px;
`;

const BootstrapButton = styled.button`
  height: 40px;
  text-align: center;
  background: ${({ theme }) => theme.color.bootstrapBlue} !important;
  color: ${({ theme }) => theme.color.white} !important;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 5px;

  ${mixinBtnDefault}
`;

const BootstrapOutlineButton = styled.button`
  height: 40px;
  text-align: center;
  background: ${({ theme }) => theme.color.white} !important;
  color: ${({ theme }) => theme.color.bootstrapBlue} !important;
  border: 1px solid ${({ theme }) => theme.color.bootstrapBlue} !important;
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 5px;

  ${mixinBtnDefault}
`;

const PresetMeta = styled.div`
  flex: 1;
`;

const Home: NextPage = () => {
  const [width, setWidth] = useState(100);

  const [height, setHeight] = useState(100);

  const [label, setLabel] = useState("버튼 텍스트");

  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const [color, setColor] = useState("#000000");

  const [borderRadius, setBorderRadius] = useState(4);

  const [borderColor, setBorderColor] = useState("#000000");

  const [borderWidth, setBorderWidth] = useState(1);

  const [template, setTemplate] = useState("default");

  const [html, setHtml] = useState(false);

  const handleChangeBackgroundColor = (evt: ChangeEvent<HTMLInputElement>) => {
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

  const handlePresetButton = () => {
    setWidth(80);
    setHeight(40);
    setBackgroundColor("#0d6efd");
    setColor("#ffffff");
    setBorderRadius(5);
  };

  const handleExport = () => {
    let result = "";

    let style = `
    width: ${width}px;
    height: ${height}px;
    background-color: ${backgroundColor};
    color: ${color};
    border-radius: ${borderRadius};
    border: ${borderWidth}px solid ${borderColor};
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

  return (
    <>
      <Head>
        <title>Feed</title>
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
          <PreviewContainer>
            <Header>
              <span>Output</span>
            </Header>
            <PreviewBody>
              <Preview style={{ width, height }}>
                <PreviewWidth>{width}px</PreviewWidth>
                <PreviewRangeTop />
                <PreviewHeight>{height}px</PreviewHeight>
                <PreviewRangeLeft />
                <button
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor,
                    color,
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    borderRadius,
                    borderColor,
                    borderWidth
                  }}
                >
                  {label}
                </button>
              </Preview>
            </PreviewBody>
            <PreviewFooter>
              <StylingButtonContainer>
                {/* <StylingButton type="button" onClick={handleExport}>
                Import
              </StylingButton> */}
              </StylingButtonContainer>
              <StylingButtonContainer>
                <StylingButton type="button" onClick={handleExport}>
                  Export
                </StylingButton>
              </StylingButtonContainer>
            </PreviewFooter>
          </PreviewContainer>
          <PresetContainer>
            <Header>Preset</Header>
            <PresetBody>
              <PresetItem>
                <PresetPreview>
                  <BootstrapButton onClick={handlePresetButton}>
                    Primary
                  </BootstrapButton>
                </PresetPreview>
                <PresetMeta>
                  <span>Bootstrap button 1</span>
                </PresetMeta>
              </PresetItem>
              <PresetItem>
                <PresetPreview>
                  <BootstrapOutlineButton>Primary</BootstrapOutlineButton>
                </PresetPreview>
                <PresetMeta>
                  <span>Bootstrap button 2</span>
                </PresetMeta>
              </PresetItem>
            </PresetBody>
          </PresetContainer>
        </OutputContainer>
        <OptionContainer>
          <Header>
            <span>Options</span>
          </Header>
          <OptionBody>
            <OptionTitle>레이아웃 설정</OptionTitle>
            <OptionItem>
              <RequireMark htmlFor="setWidth">너비</RequireMark>
              <CountingInput
                id="setWidth"
                ariaLabel="너비"
                count={width}
                setCount={setWidth}
                limit={100}
                showIcon={true}
                showFeedback={true}
              />
            </OptionItem>
            <OptionItem>
              <RequireMark htmlFor="setHeight">높이</RequireMark>
              <CountingInput
                id="setHeight"
                ariaLabel="높이"
                count={height}
                setCount={setHeight}
                limit={100}
                showIcon={true}
                showFeedback={true}
              />
            </OptionItem>
            <OptionItem>
              <RequireMark htmlFor="setBorderRadius">모서리 각도</RequireMark>
              <CountingInput
                id="setBorderRadius"
                ariaLabel="모서리 각도"
                count={borderRadius}
                setCount={setBorderRadius}
                limit={100}
                showIcon={true}
                showFeedback={true}
              />
            </OptionItem>
            <OptionItem>
              <RequireMark htmlFor="setBorderWidth">테두리 굵기</RequireMark>
              <CountingInput
                id="setBorderWidth"
                ariaLabel="테두리 굵기"
                count={borderWidth}
                setCount={setBorderWidth}
                limit={10}
                showIcon={true}
                showFeedback={true}
              />
            </OptionItem>
            <OptionTitle>스타일 설정</OptionTitle>
            <OptionItem>
              <RequireMark htmlFor="setLabel">버튼 텍스트</RequireMark>
              <Input
                id="setLabel"
                value={label}
                setValue={setLabel}
                limit={10}
                showFeedback={true}
              />
            </OptionItem>
            <OptionItem>
              <RequireMark htmlFor="setBackgroundColor">배경색</RequireMark>
              <StyledInput
                id="setBackgroundColor"
                type="color"
                value={backgroundColor}
                onChange={handleChangeBackgroundColor}
              />
            </OptionItem>
            <OptionItem>
              <RequireMark htmlFor="setColor">글자색</RequireMark>
              <StyledInput
                id="setColor"
                type="color"
                value={color}
                onChange={handleChangeColor}
              />
            </OptionItem>

            <OptionItem>
              <RequireMark htmlFor="setBorderColor">테두리 색 설정</RequireMark>
              <StyledInput
                id="setBorderColor"
                type="color"
                value={borderColor}
                onChange={handleChangeBorderColor}
              />
            </OptionItem>
            <OptionTitle>추가 설정</OptionTitle>
            <OptionItem>
              <CheckboxContainer>
                <input type="checkbox" id="setDisabled" />
                <CheckboxLabel htmlFor="setDisabled">
                  비활성 스타일 사용
                </CheckboxLabel>
              </CheckboxContainer>
            </OptionItem>
            {/* <OptionTitle>접근성 설정</OptionTitle> */}
            <OptionTitle>환경 설정</OptionTitle>
            <OptionItem>
              <RequireMark htmlFor="setTemplate">템플릿</RequireMark>
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
              <CheckboxContainer>
                <input
                  type="checkbox"
                  id="setHtml"
                  onChange={handleChangeHtml}
                  checked={html}
                />
                <CheckboxLabel htmlFor="setHtml">
                  HTML 템플릿 추가
                </CheckboxLabel>
              </CheckboxContainer>
            </OptionItem>
          </OptionBody>
        </OptionContainer>
      </Container>
    </>
  );
};

export default Home;

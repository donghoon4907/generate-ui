import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { mixinBgLv1, mixinBgLv2, mixinBgLv3 } from "../theme/mixins/background";
import { CountingInput } from "../components/CountingInput";
import { Select } from "../components/Select";
import { mixinInputDefault } from "../theme/mixins/input";
import { Input } from "../components/Input";
import { mixinTitlelg, mixinTitleXlg } from "../theme/mixins/label";
import { mixinBtnDefault } from "../theme/mixins/button";

const Header = styled.header`
  padding: 2rem 1rem;
  margin-bottom: 10px;

  ${mixinBgLv3}
`;
const Title = styled.div`
  margin-bottom: 10px;

  ${mixinTitleXlg}
`;

const Description = styled.div`
  ${mixinTitlelg}
`;
const StylingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  width: 100%;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  padding: 5px;
`;

const StylingBody = styled.div`
  width: 300px;
  height: 330px;

  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.dividerColor};
  flex-shrink: 0;

  ${mixinBgLv1}
`;

const StylingHeader = styled.div`
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

const StylingOutput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  height: 250px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
`;

const StylingOutputBody = styled.div`
  position: relative;
`;

const StylingOutputRangeTop = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  width: 100%;
  height: 20px;
  border-left: 1px solid ${({ theme }) => theme.textColor_lv0};
  border-right: 1px solid ${({ theme }) => theme.textColor_lv0};
  border-top: 1px dotted ${({ theme }) => theme.textColor_lv0};
`;

const StylingOutputWidth = styled.div`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

const StylingOutputRangeLeft = styled.div`
  position: absolute;
  left: -20px;
  top: 0;
  height: 100%;
  width: 20px;
  border-top: 1px solid ${({ theme }) => theme.textColor_lv0};
  border-left: 1px dotted ${({ theme }) => theme.textColor_lv0};
  border-bottom: 1px solid ${({ theme }) => theme.textColor_lv0};
`;

const StylingOutputHeight = styled.div`
  position: absolute;
  top: 50%;
  left: -70px;
  transform: translate3d(0, -50%, 0);
`;

const StylingOption = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.dividerColor};

  ${mixinBgLv1}
`;

const StylingOptionBody = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
`;

const StylingOptionTitle = styled.div`
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

const StylingOptionItem = styled.div<{ span?: number }>`
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

const StylingOutputFooter = styled.div`
  display: flex;
  justify-content: flex-end;
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

const Home: NextPage = () => {
  const [el, setEl] = useState("none");

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

  const handleChangeEl = (evt: ChangeEvent<HTMLSelectElement>) => {
    setEl(evt.target.value);
  };

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

  const handleExport = () => {
    let result = "";

    if (el === "none") {
      return alert("먼저 요소를 선택하세요.");
    }

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

    navigator.clipboard.writeText(result)
    .then(() => alert("Copied!"))
    .catch(err => alert("해당 브라우저에서는 지원하지 않는 기능입니다."))
  };

  const showWidth = el !== "none";

  const showHeight = el !== "none";

  const showLabel = el !== "none";

  const showBackgroundColor = el !== "none";

  const showColor = el !== "none";

  const showBorderRadius = el !== "none";

  const showBorderColor = el !== "none";

  const showBorderWidth = el !== "none";

  const showStyleTitle = showColor || showBackgroundColor || showBorderColor;

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

      <StylingContainer>
        <StylingBody>
          <StylingHeader>
            <span>Output</span>
          </StylingHeader>
          <StylingOutput>
            {el === "none" && (
              <div>
                먼저 스타일링할 <br />
                요소를 선택하세요.
              </div>
            )}
            {el === "button" && (
              <StylingOutputBody style={{ width, height }}>
                <StylingOutputWidth>{width}px</StylingOutputWidth>
                <StylingOutputRangeTop />
                <StylingOutputHeight>{height}px</StylingOutputHeight>
                <StylingOutputRangeLeft />
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
              </StylingOutputBody>
            )}
          </StylingOutput>
          <StylingOutputFooter>
            <StylingButtonContainer>
              <StylingButton type="button" onClick={handleExport}>
                Export
              </StylingButton>
            </StylingButtonContainer>
          </StylingOutputFooter>
        </StylingBody>
        <StylingOption>
          <StylingHeader>
            <span>Options</span>
          </StylingHeader>
          <StylingOptionBody>
            <StylingOptionTitle>레이아웃 설정</StylingOptionTitle>
            <StylingOptionItem>
              <RequireMark htmlFor="setEl">요소</RequireMark>
              <Select
                id="setEl"
                defaultValue={el}
                onChange={handleChangeEl}
                options={[
                  {
                    id: "elSelectOption1",
                    label: "선택하세요",
                    value: "none"
                  },
                  {
                    id: "elSelectOption2",
                    label: "버튼",
                    value: "button"
                  }
                ]}
              />
            </StylingOptionItem>
            {showWidth && (
              <StylingOptionItem>
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
              </StylingOptionItem>
            )}
            {showHeight && (
              <StylingOptionItem>
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
              </StylingOptionItem>
            )}
            {showBorderRadius && (
              <StylingOptionItem>
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
              </StylingOptionItem>
            )}
            {showBorderWidth && (
              <StylingOptionItem>
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
              </StylingOptionItem>
            )}
            {showStyleTitle && (
              <StylingOptionTitle>스타일 설정</StylingOptionTitle>
            )}
            {showLabel && (
              <StylingOptionItem>
                <RequireMark htmlFor="setLabel">버튼 텍스트</RequireMark>
                <Input
                  id="setLabel"
                  value={label}
                  setValue={setLabel}
                  limit={10}
                  showFeedback={true}
                />
              </StylingOptionItem>
            )}
            {showBackgroundColor && (
              <StylingOptionItem>
                <RequireMark htmlFor="setBackgroundColor">배경색</RequireMark>
                <StyledInput
                  id="setBackgroundColor"
                  type="color"
                  value={backgroundColor}
                  onChange={handleChangeBackgroundColor}
                />
              </StylingOptionItem>
            )}
            {showColor && (
              <StylingOptionItem>
                <RequireMark htmlFor="setColor">글자색</RequireMark>
                <StyledInput
                  id="setColor"
                  type="color"
                  value={color}
                  onChange={handleChangeColor}
                />
              </StylingOptionItem>
            )}

            {showBorderColor && (
              <StylingOptionItem>
                <RequireMark htmlFor="setBorderColor">
                  테두리 색 설정
                </RequireMark>
                <StyledInput
                  id="setBorderColor"
                  type="color"
                  value={borderColor}
                  onChange={handleChangeBorderColor}
                />
              </StylingOptionItem>
            )}
            <StylingOptionTitle>환경 설정</StylingOptionTitle>
            <StylingOptionItem>
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
            </StylingOptionItem>
          </StylingOptionBody>
        </StylingOption>
      </StylingContainer>
    </>
  );
};

export default Home;

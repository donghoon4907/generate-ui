import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { mixinBgLv1 } from "../../theme/mixins/background";
import { CountingInput } from "../../components/CountingInput";
import { Select } from "../../components/Select";
import { mixinInputDefault } from "../../theme/mixins/input";
import { Input } from "../../components/Input";
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

const PresetMeta = styled.div`
  flex: 1;
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
            label={label}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            backgroundColorAlpha={backgroundColorAlpha}
            color={color}
            borderRadius={borderRadius}
            borderStyle={borderStyle.value}
            borderWidth={borderWidth}
            borderColor={borderColor}
            fontSize={fontSize}
            template={template}
            html={html}
            onShowImportModal={handleShowImportModal}
          />
          <PresetContainer>
            <StylingHeader>Preset</StylingHeader>
            <PresetBody>
              <PresetItem>
                <PresetPreview>
                  <BootstrapPrimaryButton
                    type="button"
                    onClick={handleClickPresetBootstrapButton}
                  >
                    Primary
                  </BootstrapPrimaryButton>
                </PresetPreview>
                <PresetMeta>
                  <span>Bootstrap button 1</span>
                </PresetMeta>
              </PresetItem>
              <PresetItem>
                <PresetPreview>
                  <BootstrapOutlineButton
                    type="button"
                    onClick={handleClickPresetBootstrapOutlineButton}
                  >
                    Primary
                  </BootstrapOutlineButton>
                </PresetPreview>
                <PresetMeta>
                  <span>Bootstrap button 2</span>
                </PresetMeta>
              </PresetItem>
            </PresetBody>
          </PresetContainer>
        </OutputContainer>
        <OptionContainer>
          <StylingHeader>Options</StylingHeader>
          <OptionBody>
            <OptionTitle>기본 설정</OptionTitle>
            <OptionItem>
              <RequireMark htmlFor="setLabel">버튼명</RequireMark>
              <Input
                id="setLabel"
                value={label}
                setValue={setLabel}
                limit={10}
                showFeedback={true}
              />
            </OptionItem>
            <OptionItem>
              <RequireMark htmlFor="setColor">글자 색</RequireMark>
              <StyledInput
                id="setColor"
                type="color"
                value={color}
                onChange={handleChangeColor}
              />
            </OptionItem>
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
                numberType={CountNumberType.INTEGER}
                unit="px"
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
                numberType={CountNumberType.INTEGER}
                unit="px"
              />
            </OptionItem>
            <OptionItem>
              <RequireMark htmlFor="setFontSize">글자 크기</RequireMark>
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
                numberType={CountNumberType.INTEGER}
                unit="px"
              />
            </OptionItem>

            <OptionTitle>테두리 설정</OptionTitle>
            <OptionItem>
              <RequireMark>스타일</RequireMark>
              <CustomSelect
                activeOption={borderStyle}
                setOption={setBorderStyle}
                options={buttonStyleOptions}
              />
            </OptionItem>
            <OptionItem>
              <RequireMark htmlFor="setBorderWidth">굵기</RequireMark>
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
            </OptionItem>
            <OptionItem>
              <RequireMark htmlFor="setBorderColor">색</RequireMark>
              <StyledInput
                id="setBorderColor"
                type="color"
                value={borderColor}
                onChange={handleChangeBorderColor}
              />
            </OptionItem>
            <OptionTitle>버튼 배경색 설정</OptionTitle>
            <OptionItem>
              <RequireMark htmlFor="setBackgroundColorRgb">RGB</RequireMark>
              <StyledInput
                id="setBackgroundColorRgb"
                type="color"
                value={backgroundColor}
                onChange={handleChangeBackgroundColorRgb}
              />
            </OptionItem>
            <OptionItem>
              <RequireMark htmlFor="setBackgroundColorAlpha">Alpha</RequireMark>
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

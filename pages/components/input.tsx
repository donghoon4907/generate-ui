import type { NextPage } from "next";
import Head from "next/head";
import type { ChangeEvent, CSSProperties } from "react";
import { useState } from "react";

import { CountingInput } from "../../components/CountingInput";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { StylingHeader } from "../../components/StylingHeader";
import { theme } from "../../theme";
import { CountNumberType } from "../../types/count";
import { CustomSelect } from "../../components/CustomSelect";
import { borderStyleOptions } from "../../components/options/BorderStyle";
import type { SelectOption } from "../../interfaces/select";
import * as Component from "../../components/partial/Component";
import * as Preset from "../../components/partial/Preset";
import * as Option from "../../components/partial/Option";
import { RequireLabel } from "../../components/RequireLabel";
import { inputTypeOptions } from "../../components/options/InputType";
import { langOptions } from "../../components/options/Template";
import { WithLabel } from "../../components/WithLabel";
import { Checkbox } from "../../components/Checkbox";
import { PaddingOption } from "../../components/partial/PaddingOption";
import { BorderRadiusOption } from "../../components/partial/BorderRadiusOption";
import { InputTypeOption, LangOption } from "../../types/select-option";
import { FontOption } from "../../components/partial/FontOption";
import { textAlignOptions } from "../../components/options/TextAlign";
import { BorderOption } from "../../components/partial/BorderOption";
import { RgbaOption } from "../../components/partial/RgbaOption";
import { ConvertInput } from "../../lib/style/input";
import { copyToClipboard } from "../../lib/copy/clipboard";
import {
  BootstrapDarkInputButton,
  BootstrapLightInputButton
} from "../../components/Button";
import { InputSearchTabType } from "../../types/tab";
import { IconAlignOption } from "../../types/select-option";
import { iconAlignOptions } from "../../components/options/IconAlign";
import { IconOption } from "../../components/partial/IconOption";
import { PreferenceOption } from "../../components/partial/PreferenceOption";
// import { BootstrapModal } from "../../components/Modal";
// import { StyleStringToObject } from "../../lib/style/to-object";
// import { DefaultTextArea } from "../../components/TextArea";

const ComponentInput: NextPage = () => {
  const [inputType, setInputType] = useState<SelectOption>(inputTypeOptions[0]);

  const [width, setWidth] = useState(200);

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
    borderStyleOptions[1]
  );

  const [borderColor, setBorderColor] = useState("#000000");

  const [borderWidth, setBorderWidth] = useState(1);

  const [lang, setLang] = useState<SelectOption>(langOptions[0]);
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);

  const [fontSize, setFontSize] = useState(16);

  // search icon 추가 여부
  const [showIcon, setShowIcon] = useState(false);
  // option text 정렬
  const [textAlign, setTextAlign] = useState<SelectOption>(textAlignOptions[0]);
  // 탭 활성화 관리
  const [activeSearchTab, setActiveSearchTab] = useState<InputSearchTabType>(
    InputSearchTabType.DEFAULT
  );
  // 아이콘 사이즈
  const [iconSize, setIconSize] = useState(16);
  // 아이콘 정렬
  const [iconAlign, setIconAlign] = useState<SelectOption>(iconAlignOptions[0]);
  // 아이콘 색
  const [iconColor, setIconColor] = useState("#000000");
  // 기본 설정 보이기
  const [showDefault, setShowDefault] = useState(true);
  // layout 설정 보이기
  const [showLayout, setShowLayout] = useState(true);
  // text 설정 보이기
  const [showText, setShowText] = useState(true);
  // 모서리 각 설정 보이기
  const [showBorderRadius, setShowBorderRadius] = useState(true);
  // border 설정 보이기
  const [showBorder, setShowBorder] = useState(true);
  // padding 설정 보이기
  const [showPadding, setShowPadding] = useState(true);
  // 배경색 설정 보이기
  const [showBackgroundColor, setShowBackgroundColor] = useState(true);
  // 환경 설정 보이기
  const [showPreference, setShowPreference] = useState(true);
  // const [showImportModal, setShowImportModal] = useState(false);

  // const [importStrStyle, setImportStrStyle] = useState("");

  // const [importStyleFeedback, setImportStyleFeedback] = useState("");

  const handleChangeShowIcon = (evt: ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;

    setShowIcon(checked);
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
    setBorderStyle(borderStyleOptions[1]);
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
    setBorderStyle(borderStyleOptions[1]);
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

  const inputWrapperStyle: CSSProperties = {
    width,
    backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
    backgroundImage: showIcon
      ? `url("data:image/svg+xml, %3Csvg stroke='currentColor' fill='${encodeURIComponent(
          iconColor
        )}' stroke-width='0' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")`
      : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: `${iconAlign.value} 5px center`,
    backgroundSize: iconSize,
    paddingRight:
      showIcon && iconAlign.value === IconAlignOption.RIGHT ? 25 : 0,
    paddingLeft: showIcon && iconAlign.value === IconAlignOption.LEFT ? 25 : 0,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderStyle: borderStyle.value,
    borderWidth,
    borderColor,
    overflow: "hidden"
  };

  const inputStyle: CSSProperties = {
    width: "100%",
    backgroundColor: `rgba(${backgroundColorRgb},${backgroundColorAlpha})`,
    color,
    fontSize,
    lineHeight: `${lineHeight}px`,
    letterSpacing,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    textAlign: textAlign.value as any,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    border: "none"
  };

  const handleExport = () => {
    const exportToInput = new ConvertInput(inputWrapperStyle, inputStyle);

    if (lang.value === LangOption.JS) {
      exportToInput.generateInput(inputType.value);
    }

    if (html) {
      exportToInput.addTemplate();
    }

    copyToClipboard(exportToInput.getHtml);
  };

  const handleClickSearchTab = (activeTab: InputSearchTabType) => {
    setActiveSearchTab(activeTab);
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
            <div style={inputWrapperStyle}>
              <input
                type={inputType.value}
                placeholder={placeholder}
                style={inputStyle}
              />
            </div>
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
            <Option.GridContainer>
              <Option.FoldableTitle fold={showDefault} setFold={setShowDefault}>
                {showIcon && inputType.value === InputTypeOption.SEARCH ? (
                  <>
                    <Option.Tab
                      active={activeSearchTab === InputSearchTabType.DEFAULT}
                      onClick={() =>
                        handleClickSearchTab(InputSearchTabType.DEFAULT)
                      }
                    >
                      기본 설정
                    </Option.Tab>
                    <Option.Tab
                      active={activeSearchTab === InputSearchTabType.ICON}
                      onClick={() =>
                        handleClickSearchTab(InputSearchTabType.ICON)
                      }
                    >
                      아이콘 설정
                    </Option.Tab>
                  </>
                ) : (
                  <span>기본 설정</span>
                )}
              </Option.FoldableTitle>
              {activeSearchTab === InputSearchTabType.DEFAULT && (
                <Option.GridColumn span={showDefault ? 1 : 0}>
                  <RequireLabel>타입</RequireLabel>
                  <CustomSelect
                    activeOption={inputType}
                    setOption={setInputType}
                    options={inputTypeOptions}
                  />
                  {inputType.value === InputTypeOption.SEARCH && (
                    <WithLabel id="setHasIcon" label="검색 아이콘 추가">
                      <Checkbox
                        id="setHasIcon"
                        checked={showIcon}
                        onChange={handleChangeShowIcon}
                      />
                    </WithLabel>
                  )}
                </Option.GridColumn>
              )}
              {activeSearchTab === InputSearchTabType.ICON && (
                <IconOption
                  id="Input"
                  iconAlign={iconAlign}
                  setIconAlign={setIconAlign}
                  iconSize={iconSize}
                  setIconSize={setIconSize}
                  iconColor={iconColor}
                  setIconColor={setIconColor}
                  span={showDefault ? 1 : 0}
                />
              )}

              <Option.FoldableTitle fold={showLayout} setFold={setShowLayout}>
                <span>레이아웃 설정</span>
              </Option.FoldableTitle>
              <Option.GridColumn span={showLayout ? 1 : 0}>
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
              </Option.GridColumn>
              <Option.FoldableTitle fold={showText} setFold={setShowText}>
                <span>텍스트 설정</span>
              </Option.FoldableTitle>
              <Option.GridColumn span={showText ? 1 : 0}>
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
              </Option.GridColumn>
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
                span={showText ? 1 : 0}
              />
              <Option.FoldableTitle fold={showPadding} setFold={setShowPadding}>
                <span>여백 설정</span>
              </Option.FoldableTitle>
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
                isShowAllOption={isSetDetailPadding}
                setIsShowAllOption={setIsSetDetailPadding}
                span={showPadding ? 1 : 0}
              />
              <Option.FoldableTitle
                fold={showBorderRadius}
                setFold={setShowBorderRadius}
              >
                <span>모서리각 설정</span>
              </Option.FoldableTitle>
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
                isShowAllOption={isSetDetailBorderRadius}
                setIsShowAllOption={setIsSetDetailBorderRadius}
                span={showBorderRadius ? 1 : 0}
              />

              <Option.FoldableTitle fold={showBorder} setFold={setShowBorder}>
                <span>테두리 설정</span>
              </Option.FoldableTitle>
              <BorderOption
                id="Input"
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
                borderColor={borderColor}
                setBorderColor={setBorderColor}
                span={showBorder ? 1 : 0}
              />
              <Option.FoldableTitle
                fold={showBackgroundColor}
                setFold={setShowBackgroundColor}
              >
                <span>배경색 설정</span>
              </Option.FoldableTitle>
              <RgbaOption
                id="Input"
                hex={backgroundColorHex}
                setRgb={setBackgroundColorRgb}
                setHex={setBackgroundColorHex}
                alpha={backgroundColorAlpha}
                setAlpha={setBackgroundColorAlpha}
                span={showBackgroundColor ? 1 : 0}
              />

              {/* <Option.Title>추가 설정</Option.Title>
            <Option.Item>
              <Checkbox id="setDisabled" label="비활성 스타일 사용" />
            </Option.Item> */}
              {/* <OptionTitle>접근성 설정</OptionTitle> */}

              <Option.FoldableTitle
                fold={showPreference}
                setFold={setShowPreference}
              >
                <span>환경 설정</span>
              </Option.FoldableTitle>
              <PreferenceOption
                lang={lang}
                setLang={setLang}
                html={html}
                setHtml={setHtml}
                span={showPreference ? 1 : 0}
              />
            </Option.GridContainer>
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

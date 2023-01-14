import type { NextPage } from "next";
import type { CSSProperties } from "react";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

import type { ISelectOption } from "../../interfaces/select";
import type {
  SelectButtonOption,
  SelectListOption
} from "../../lib/style/select";
import * as Component from "../../components/partial/Component";
import * as Grid from "../../components/partial/Grid";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { CountNumberType } from "../../types/count";
import { borderStyleOptions } from "../../components/options/BorderStyle";
import { RequireLabel } from "../../components/RequireLabel";
import { langOptions } from "../../components/options/Template";
import { textAlignOptions } from "../../components/options/TextAlign";
import { copyToClipboard } from "../../lib/copy/clipboard";
import { ConvertSelect } from "../../lib/style/select";
import { textOverflowOptions } from "../../components/options/TextOverflow";
import { LangOption } from "../../types/select-option";
import { SelectTabType } from "../../types/tab";
import { CountingInput } from "../../components/CountingInput";
import { BorderOption } from "../../components/templates/options/Border";
import { RgbaOption } from "../../components/templates/options/Rgba";
import { PreferenceOption } from "../../components/templates/options/Preference";
import { FontOption } from "../../components/templates/options/Font";
import { PaddingOption } from "../../components/templates/options/Padding";
import { BorderRadiusOption } from "../../components/templates/options/BorderRadius";
import { useRgba } from "../../hooks/useRgba";
import constants from "../../constants";
import { usePadding } from "../../hooks/usePadding";
import { useBorderRadius } from "../../hooks/useBorderRadius";
import { useBorder } from "../../hooks/useBorder";
import { useFont } from "../../hooks/useFont";
import { useTab } from "../../hooks/useTab";

const OptionItem = styled.li`
  &:hover {
    background: ${({ theme }) => theme.activeBgColor};
  }
`;

const ComponentSelect: NextPage = () => {
  /* order - constans */
  // grid span
  const GRID_SPAN = 3;
  // 제목 글자 수 제한
  const LABEL_LIMIT = 10;
  /* order - state */
  // 너비
  const [width, setWidth] = useState(200);
  // select - 제목
  const [label, setLabel] = useState("입력하세요");
  // common - 배경색
  const bgColorRgba = useRgba(constants.color.whiteHex);
  // select - 모서리 각
  const selectBorderRadius = useBorderRadius(4);
  // select - 여백
  const selectPadding = usePadding(4);
  // option - 여백
  const optionPadding = usePadding(4);
  // common - 테두리
  const border = useBorder({
    style: borderStyleOptions[1],
    color: constants.color.blackHex,
    width: 1
  });
  // select - 텍스트 설정
  const selectFont = useFont({
    color: constants.color.blackHex,
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: textAlignOptions[0],
    textOverflow: textOverflowOptions[0]
  });
  // option - 텍스트 설정
  const optionFont = useFont({
    color: constants.color.blackHex,
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: textAlignOptions[0],
    textOverflow: textOverflowOptions[0]
  });
  // common - 언어
  const [lang, setLang] = useState<ISelectOption>(langOptions[0]);
  // common - html 템플릿 추가 여부
  const [html, setHtml] = useState(false);
  // 탭 활성화 관리
  const [activeTab, setActiveTab] = useTab(SelectTabType.COMMON);
  /* order - variable */
  // select min height
  const minHeight = `${
    selectPadding.top +
    selectPadding.bottom +
    selectFont.lineHeight! +
    border.width * 2
  }px`;
  // preview style
  const selectWrapperStyle: CSSProperties = {
    width: "100%",
    borderTopLeftRadius: `${selectBorderRadius.topLeft}px`,
    borderTopRightRadius: `${selectBorderRadius.topRight}px`,
    borderBottomLeftRadius: `${selectBorderRadius.bottomLeft}px`,
    borderBottomRightRadius: `${selectBorderRadius.bottomRight}px`,
    borderStyle: border.style.value,
    borderColor: border.color,
    borderWidth: `${border.width}px`,
    backgroundColor: bgColorRgba.toString(),
    backgroundImage: `url("data:image/svg+xml, %3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'%3E%3C/path%3E%3Cpath d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 5px center",
    backgroundSize: "16px 16px",
    padding: "0 20px 0 0",
    userSelect: "none",
    outline: "none",
    minHeight
  };
  const selectLabelStyle: CSSProperties = {
    width: "100%",
    display: "block",
    color: selectFont.color,
    fontSize: `${selectFont.fontSize}px`,
    lineHeight: `${selectFont.lineHeight}px`,
    letterSpacing: `${selectFont.letterSpacing}px`,
    textAlign: selectFont.textAlign?.value as any,
    paddingTop: `${selectPadding.top}px`,
    paddingRight: `${selectPadding.right}px`,
    paddingBottom: `${selectPadding.bottom}px`,
    paddingLeft: `${selectPadding.left}px`,
    overflow: "hidden",
    ...selectFont.getTextOverflowStyle()
  };
  const optionWrapperStyle: CSSProperties = {
    width: "100%",
    color: optionFont.color,
    fontSize: `${optionFont.fontSize}px`,
    lineHeight: `${optionFont.lineHeight}px`,
    letterSpacing: `${optionFont.letterSpacing}px`,
    textAlign: optionFont.textAlign?.value as any,
    backgroundColor: bgColorRgba.toString(),
    borderStyle: border.style.value,
    borderColor: border.color,
    borderWidth: `${border.width}px`,
    userSelect: "none"
  };
  const optionLabelStyle: CSSProperties = {
    paddingTop: `${optionPadding.top}px`,
    paddingRight: `${optionPadding.right}px`,
    paddingBottom: `${optionPadding.bottom}px`,
    paddingLeft: `${optionPadding.left}px`,
    overflow: "hidden",
    ...optionFont.getTextOverflowStyle()
  };
  /* handler */
  const handleExport = () => {
    const buttonOption: SelectButtonOption = {
      wrapperStyle: selectWrapperStyle,
      labelStyle: selectLabelStyle
    };

    const listOption: SelectListOption = {
      wrapperStyle: optionWrapperStyle,
      labelStyle: optionLabelStyle
    };

    const exportToSelect = new ConvertSelect(width, buttonOption, listOption);

    if (lang.value === LangOption.JS) {
      exportToSelect.generateSelect(label.substring(0, LABEL_LIMIT - 1));
    }

    if (html) {
      exportToSelect.addTemplate();
    }

    copyToClipboard(exportToSelect.getHtml);
  };

  return (
    <>
      <Head>
        <title>Components - Select</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component.Container>
        <Component.Aside>
          <Preview width={width} onExport={handleExport}>
            <button type="button" style={selectWrapperStyle}>
              <span style={selectLabelStyle}>
                {label.substring(0, LABEL_LIMIT - 1)}
              </span>
            </button>
            <ul style={{ marginTop: 2, ...optionWrapperStyle }}>
              <OptionItem style={optionLabelStyle}>none</OptionItem>
              <OptionItem style={optionLabelStyle}>
                option 1 - Long text example
              </OptionItem>
            </ul>
          </Preview>
        </Component.Aside>
        <Component.Section>
          <Component.Header>Options</Component.Header>
          <Component.Scrollable>
            <Grid.ResponsiveContainer span={GRID_SPAN}>
              <Grid.ResponsiveRow span={GRID_SPAN}>
                <Grid.Tab
                  active={activeTab === SelectTabType.COMMON}
                  onClick={() => setActiveTab(SelectTabType.COMMON)}
                >
                  공통
                </Grid.Tab>
                <Grid.Tab
                  active={activeTab === SelectTabType.SELECT}
                  onClick={() => setActiveTab(SelectTabType.SELECT)}
                >
                  Select
                </Grid.Tab>
                <Grid.Tab
                  active={activeTab === SelectTabType.OPTION}
                  onClick={() => setActiveTab(SelectTabType.OPTION)}
                >
                  Option
                </Grid.Tab>
              </Grid.ResponsiveRow>
              {activeTab === SelectTabType.COMMON && (
                <>
                  <Grid.FoldableTitle span={GRID_SPAN} title="레이아웃 설정">
                    <Grid.Column span={1}>
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
                    </Grid.Column>
                  </Grid.FoldableTitle>

                  <Grid.FoldableTitle span={GRID_SPAN} title="테두리 설정">
                    <BorderOption id="Select" span={1} {...border} />
                  </Grid.FoldableTitle>

                  <Grid.FoldableTitle span={GRID_SPAN} title="배경색 설정">
                    <RgbaOption id="Select" span={1} {...bgColorRgba} />
                  </Grid.FoldableTitle>

                  <Grid.FoldableTitle span={GRID_SPAN} title="환경 설정">
                    <PreferenceOption
                      span={1}
                      lang={lang}
                      html={html}
                      setLang={setLang}
                      setHtml={setHtml}
                    />
                  </Grid.FoldableTitle>
                </>
              )}
              {activeTab === SelectTabType.SELECT && (
                <>
                  <Grid.FoldableTitle span={GRID_SPAN} title="기본 설정">
                    <Grid.Column span={1}>
                      <RequireLabel htmlFor="setLabel">제목</RequireLabel>
                      <FeedbackInput
                        id="setLabel"
                        value={label}
                        setValue={setLabel}
                        condition={label.length < LABEL_LIMIT}
                        invalidComment={`제목은 ${LABEL_LIMIT}자 미만으로 입력하세요.`}
                      />
                    </Grid.Column>
                  </Grid.FoldableTitle>

                  <Grid.FoldableTitle span={GRID_SPAN} title="텍스트 설정">
                    <FontOption id="Select" span={1} {...selectFont} />
                  </Grid.FoldableTitle>

                  <Grid.FoldableTitle span={GRID_SPAN} title="여백 설정">
                    <PaddingOption id="Select" span={1} {...selectPadding} />
                  </Grid.FoldableTitle>

                  <Grid.FoldableTitle span={GRID_SPAN} title="모서리각 설정">
                    <BorderRadiusOption
                      id="Select"
                      span={1}
                      {...selectBorderRadius}
                    />
                  </Grid.FoldableTitle>
                </>
              )}
              {activeTab === SelectTabType.OPTION && (
                <>
                  <Grid.FoldableTitle span={GRID_SPAN} title="텍스트 설정">
                    <FontOption id="Option" span={1} {...optionFont} />
                  </Grid.FoldableTitle>

                  <Grid.FoldableTitle span={GRID_SPAN} title="여백 설정">
                    <PaddingOption id="Option" span={1} {...optionPadding} />
                  </Grid.FoldableTitle>
                </>
              )}
            </Grid.ResponsiveContainer>
          </Component.Scrollable>
        </Component.Section>
      </Component.Container>
    </>
  );
};

export default ComponentSelect;

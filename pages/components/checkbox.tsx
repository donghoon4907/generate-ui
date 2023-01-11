import type { NextPage } from "next";
import type { CSSProperties } from "react";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

import * as Component from "../../components/partial/Component";
import * as Grid from "../../components/partial/Grid";
import type { ISelectOption } from "../../interfaces/select";
import { CountingInput } from "../../components/CountingInput";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { CountNumberType } from "../../types/count";
import { RequireLabel } from "../../components/RequireLabel";
import { langOptions } from "../../components/options/Template";
import { mixinEllipsisText } from "../../theme/mixins/text";
import { LangOption } from "../../types/select-option";
import { ConvertCheckbox } from "../../lib/style/checkbox";
import { copyToClipboard } from "../../lib/copy/clipboard";
import { useTheme } from "../../hooks/useTheme";
import { FontOption } from "../../components/templates/options/Font";
import { PreferenceOption } from "../../components/templates/options/Preference";
import { useFont } from "../../hooks/useFont";

const PreviewCheckbox = styled.input<{
  label: string;
  color: string;
  fontSize: number;
  scale: number;
}>`
  position: relative;
  transform: scale(${({ scale }) => scale});

  &:before {
    content: "${({ label }) => label}";

    position: absolute;
    top: 50%;
    left: calc(100% + 5px);
    transform: translate3d(0, -50%, 0);
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize}px;
    width: ${({ scale }) => 100 / scale}px;

    ${mixinEllipsisText}
  }
`;

const ComponentCheckbox: NextPage = () => {
  /* order - constans */
  // grid span
  const GRID_SPAN = 3;
  // 라벨 글자 수 제한
  const LABEL_LIMIT = 10;
  /* order - state */
  const { theme } = useTheme();
  // 라벨
  const [label, setLabel] = useState("Checkbox");
  // 크기
  const [scale, setScale] = useState(1.2);
  // 텍스트 설정
  const font = useFont({
    color: theme.textColor_lv0,
    fontSize: 16
  });
  // 언어
  const [lang, setLang] = useState<ISelectOption>(langOptions[0]);
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);
  /* order - variable */
  // preview style
  const checkboxStyle: CSSProperties = {
    position: "relative",
    transform: `scale(${scale})`
  };

  const labelStyle: CSSProperties = {
    color: font.color,
    fontSize: font.fontSize
  };
  /* handler */
  const handleExport = () => {
    const exportToInput = new ConvertCheckbox(checkboxStyle, labelStyle);

    if (lang.value === LangOption.JS) {
      exportToInput.generateCheckbox(label.substring(0, LABEL_LIMIT - 1));
    }

    if (html) {
      exportToInput.addTemplate();
    }

    copyToClipboard(exportToInput.getHtml);
  };

  return (
    <>
      <Head>
        <title>Components - Checkbox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component.Container>
        <Component.Aside>
          <Preview
            width={Math.round(13 * scale)}
            height={Math.round(13 * scale)}
            onExport={handleExport}
          >
            <PreviewCheckbox
              type="checkbox"
              label={label.substring(0, LABEL_LIMIT - 1)}
              color={font.color!}
              fontSize={font.fontSize!}
              scale={scale}
            />
          </Preview>
        </Component.Aside>
        <Component.Section>
          <Component.Header>Options</Component.Header>
          <Component.Scrollable>
            <Grid.ResponsiveContainer span={GRID_SPAN}>
              <Grid.FoldableTitle span={GRID_SPAN} title="기본 설정">
                <Grid.Column span={1}>
                  <RequireLabel htmlFor="setLabel">레이블</RequireLabel>
                  <FeedbackInput
                    id="setLabel"
                    value={label}
                    setValue={setLabel}
                    condition={label.length < LABEL_LIMIT}
                    invalidComment={`레이블은 ${LABEL_LIMIT}자 미만으로 입력하세요.`}
                  />
                </Grid.Column>
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="레이아웃 설정">
                <Grid.Column span={1}>
                  <RequireLabel htmlFor="setScale">체크박스 크기</RequireLabel>
                  <CountingInput
                    id="setScale"
                    ariaLabel="배경색 Alpha"
                    count={scale}
                    setCount={setScale}
                    limit={5}
                    showIcon={true}
                    showFeedback={true}
                    numberType={CountNumberType.DECIMAL}
                    unit=""
                  />
                </Grid.Column>
              </Grid.FoldableTitle>

              <Grid.FoldableTitle span={GRID_SPAN} title="텍스트 설정">
                <FontOption span={1} id="Checkbox" {...font} />
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
            </Grid.ResponsiveContainer>
          </Component.Scrollable>
        </Component.Section>
      </Component.Container>
    </>
  );
};

export default ComponentCheckbox;

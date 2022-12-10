import type { NextPage } from "next";
import Head from "next/head";
import type { CSSProperties } from "react";
import { useState } from "react";
import styled from "styled-components";

import { CountingInput } from "../../components/CountingInput";
import { FeedbackInput } from "../../components/Input";
import { Preview } from "../../components/Preview";
import { StylingHeader } from "../../components/StylingHeader";
import { CountNumberType } from "../../types/count";
import type { SelectOption } from "../../interfaces/select";
import * as Component from "../../components/partial/Component";
import * as Option from "../../components/partial/Option";
import { RequireLabel } from "../../components/RequireLabel";
import { langOptions } from "../../components/options/Template";
import { mixinEllipsisText } from "../../theme/mixins/text";
import { FontOption } from "../../components/partial/FontOption";
import { LangOption } from "../../types/select-option";
import { PreferenceOption } from "../../components/partial/PreferenceOption";
import { ConvertCheckbox } from "../../lib/style/checkbox";
import { copyToClipboard } from "../../lib/copy/clipboard";

const StyledInput = styled.input<{
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
  const [label, setLabel] = useState("Checkbox");

  const [scale, setScale] = useState(1.2);

  const [color, setColor] = useState("#000000");

  const [lang, setLang] = useState<SelectOption>(langOptions[0]);
  // html 템플릿 추가 여부
  const [html, setHtml] = useState(false);

  const [fontSize, setFontSize] = useState(16);

  const checkboxStyle: CSSProperties = {
    position: "relative",
    transform: `scale(${scale})`
  };

  const labelStyle: CSSProperties = {
    color,
    fontSize
  };

  const handleExport = () => {
    const exportToInput = new ConvertCheckbox(checkboxStyle, labelStyle);

    if (lang.value === LangOption.JS) {
      exportToInput.generateCheckbox(label);
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
            <StyledInput
              type="checkbox"
              label={label}
              color={color}
              fontSize={fontSize}
              scale={scale}
            />
          </Preview>
        </Component.Aside>
        <Option.Container>
          <StylingHeader>Options</StylingHeader>

          <Option.Body>
            <Option.Grid>
              <Option.Title>레이아웃 설정</Option.Title>
              <Option.Item>
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
              </Option.Item>
              <Option.Title>텍스트 설정</Option.Title>
              <Option.Item>
                <RequireLabel htmlFor="setLabel">설명</RequireLabel>
                <FeedbackInput
                  id="setLabel"
                  value={label}
                  setValue={setLabel}
                  limit={10}
                  showFeedback={true}
                />
              </Option.Item>
              <FontOption
                id="Checkbox"
                color={color}
                setColor={setColor}
                fontSize={fontSize}
                setFontSize={setFontSize}
              />

              <Option.Title>환경 설정</Option.Title>
              <PreferenceOption
                lang={lang}
                setLang={setLang}
                html={html}
                setHtml={setHtml}
              />
            </Option.Grid>
          </Option.Body>
        </Option.Container>
      </Component.Container>
    </>
  );
};

export default ComponentCheckbox;

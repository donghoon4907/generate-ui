import type { FC } from "react";
import styled from "styled-components";

import type { Template } from "../types/styling";
import { PrimaryButton } from "./Button";
import { StylingHeader } from "./StylingHeader";
import { StylingButtonProps } from "../interfaces/styling";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.dividerColor};
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  height: 250px;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
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

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  height: 40px;
`;

const ButtonWrapper = styled.div`
  width: 100px;
`;

interface Props extends StylingButtonProps {
  template: string;
  html: boolean;
}

export const Preview: FC<Props> = ({
  label,
  width,
  height,
  backgroundColor,
  color,
  borderRadius,
  borderWidth,
  borderColor,
  template,
  html
}) => {
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
    <Container>
      <StylingHeader>Output</StylingHeader>
      <Body>
        <div style={{ position: "relative", width, height }}>
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
        </div>
      </Body>
      <Footer>
        <ButtonWrapper>
          <PrimaryButton type="button" onClick={handleExport}>
            Export
          </PrimaryButton>
        </ButtonWrapper>
      </Footer>
    </Container>
  );
};

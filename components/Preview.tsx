import type { FC } from "react";
import styled from "styled-components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { PrimaryButton, SecondaryButton } from "./Button";
import { StylingHeader } from "./StylingHeader";
import { CoreProps } from "../interfaces/core";

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

  width: 300px;
  height: 250px;
  text-align: center;

  &:active,
  & button:active {
    cursor: move;
  }
`;

const RangeTop = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 20px;
  border-top: 1px dashed ${({ theme }) => theme.textColor_lv0};
  border-radius: 50%;
`;

const Width = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
`;

const RangeLeft = styled.div`
  position: absolute;
  left: -10px;
  top: 0;
  height: 100%;
  width: 20px;
  border-left: 1px dashed ${({ theme }) => theme.textColor_lv0};
  border-radius: 50%;
`;

const Height = styled.div`
  width: 100px;
  height: 20px;
  overflow: hidden;

  position: absolute;
  top: 50%;
  left: -70px;
  transform: translate3d(0, -50%, 0) rotate(270deg);
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
  height: 40px;
  border-top: 1px solid ${({ theme }) => theme.dividerColor};
`;

const ButtonWrapper = styled.div`
  width: 100px;
`;

interface Props extends CoreProps {
  width: number;
  height?: number;
  onImport?: () => void;
  onExport: () => void;
}

export const Preview: FC<Props> = ({
  children,
  width,
  height,
  onImport,
  onExport
}) => {
  return (
    <Container>
      <StylingHeader>Output</StylingHeader>
      <TransformWrapper>
        <TransformComponent>
          <Body>
            <div
              style={{
                position: "relative",
                width,
                height
              }}
            >
              <Width>{width}px</Width>
              <RangeTop />
              {height && <Height>{height}px</Height>}
              {height && <RangeLeft />}
              {children}
            </div>
          </Body>
        </TransformComponent>
      </TransformWrapper>

      <Footer>
        <ButtonWrapper>
          {onImport && (
            <SecondaryButton type="button" onClick={onImport}>
              Import
            </SecondaryButton>
          )}
        </ButtonWrapper>
        <ButtonWrapper>
          <PrimaryButton type="button" onClick={onExport}>
            Export
          </PrimaryButton>
        </ButtonWrapper>
      </Footer>
    </Container>
  );
};

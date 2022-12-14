import type { FC } from "react";
import styled from "styled-components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";

import { PrimaryButton } from "./Button";
import * as Component from "./partial/Component";
import { CoreProps } from "../interfaces/core";
import { IconWrapper } from "./IconWrapper";
import { mixinBgLv1 } from "../theme/mixins/background";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 330px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.dividerColor};

  ${mixinBgLv1}
`;

const Body = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;

  &:active,
  & button:active {
    cursor: move;
  }
`;

const Target = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Tool = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 0 5px;
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
  justify-content: flex-end;
  align-items: center;
  padding: 0 5px;
  height: 40px;
  border-top: 1px solid ${({ theme }) => theme.dividerColor};
`;

const ButtonWrapper = styled.div`
  width: 100px;
`;

interface Props extends CoreProps {
  width?: number;
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
      <Component.Header>Output</Component.Header>
      <Body>
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              <TransformComponent
                wrapperStyle={{ width: "100%", height: "100%" }}
                contentStyle={{ width: "100%", height: "100%" }}
              >
                <Background>
                  <Target
                    style={{
                      width,
                      height
                    }}
                  >
                    {width && <Width>{width}px</Width>}
                    {width && <RangeTop />}
                    {height && <Height>{height}px</Height>}
                    {height && <RangeLeft />}
                    {children}
                  </Target>
                </Background>
              </TransformComponent>
              <Tool>
                <IconWrapper onClick={() => zoomOut()} ariaLabel="zoom out">
                  <AiOutlineMinus />
                </IconWrapper>
                <IconWrapper onClick={() => zoomIn()} ariaLabel="zoom in">
                  <AiOutlinePlus />
                </IconWrapper>
                <IconWrapper onClick={() => resetTransform()} ariaLabel="reset">
                  <BiRefresh />
                </IconWrapper>
              </Tool>
            </>
          )}
        </TransformWrapper>
      </Body>

      <Footer>
        <ButtonWrapper>
          <PrimaryButton type="button" onClick={onExport}>
            Export
          </PrimaryButton>
        </ButtonWrapper>
      </Footer>
    </Container>
  );
};

import type { Dispatch, FC, SetStateAction } from "react";
import { MouseEvent } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import { CoreProps } from "../interfaces/core";
import { mixinBgLv0 } from "../theme/mixins/background";
import { IconWrapper } from "./IconWrapper";
import { PrimaryButton, SecondaryButton } from "./Button";

const Container = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;

  opacity: ${({ show }) => (show ? "1" : "0")};
  transition: opacity 150ms linear;
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background: rgba(0, 0, 0, 0.5);
`;

const Dialog = styled.div<{ show: boolean }>`
  position: relative;
  z-index: 12;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;

  max-width: 500px;
  transform: ${({ show }) => (show ? "none" : "translate(0, -50px)")};
  transition: transform 300ms ease-out;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-clip: padding-box;
  border-radius: 0.5rem;
  outline: 0;

  ${mixinBgLv0}
`;

const Header = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  & > h1 {
    flex: 1;
    margin: 0 !important;
  }

  & > button {
    width: 30px;
  }
`;

const Body = styled.div`
  position: relative;
  flex: 1;
  padding: 1rem;
`;

const Footer = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.dividerColor};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  padding: 1rem;
  gap: 5px;
`;

const ButtonWrapper = styled.div`
  width: 100px;
`;

interface Props extends CoreProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  headerTitle?: string;
  showHeaderCloseButton?: boolean;
  onSubmit?: (evt: MouseEvent<HTMLButtonElement>) => void;
}

export const BootstrapModal: FC<Props> = ({
  show,
  setShow,
  children,
  ariaLabel,
  headerTitle,
  showHeaderCloseButton,
  onSubmit
}) => {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Container
      show={show}
      role="dialog"
      aria-modal={show}
      tabIndex={-1}
      aria-labelledby={ariaLabel || ""}
      aria-hidden={!show}
    >
      <Dialog show={show}>
        <Content>
          {headerTitle && (
            <Header>
              <h1 id={ariaLabel || ""}>{headerTitle}</h1>
              {showHeaderCloseButton && (
                <IconWrapper ariaLabel="Close" onClick={handleClose}>
                  <AiOutlineClose />
                </IconWrapper>
              )}
            </Header>
          )}

          <Body>{children}</Body>
          <Footer>
            <ButtonWrapper>
              <SecondaryButton type="button" onClick={handleClose}>
                취소
              </SecondaryButton>
            </ButtonWrapper>
            <ButtonWrapper>
              <PrimaryButton
                type="submit"
                onClick={onSubmit}
                disabled={!onSubmit}
              >
                확인
              </PrimaryButton>
            </ButtonWrapper>
          </Footer>
        </Content>
      </Dialog>
      <Layer onClick={handleClose} />
    </Container>
  );
};

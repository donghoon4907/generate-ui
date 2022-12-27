import type { FC, MouseEvent } from "react";
import { useEffect, useCallback } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import type { CoreSetState } from "../types/core";
import type { CoreProps } from "../interfaces/core";
import { mixinBgLv0 } from "../theme/mixins/background";
import { IconWrapper } from "./IconWrapper";
import { PrimaryButton, SecondaryButton } from "./Button";

const Container = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ show }) => (show ? "10" : "-1")};

  opacity: ${({ show }) => (show ? "1" : "0")};
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
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

const Dialog = styled.div`
  position: relative;
  z-index: 12;

  height: 100%;
`;

const Content = styled.div<{ show: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate3d(
    ${({ show }) => (show ? "-50%, -50%, 0" : "-300%, 300%, 0")}
  );
  transition: transform 500ms linear;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
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
  setShow: CoreSetState<boolean>;
  headerTitle?: string;
  showHeaderCloseButton?: boolean;
  onSubmit?: () => void;
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
  const handleClose = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const handleKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleSubmit = (evt: MouseEvent) => {
    evt.preventDefault();

    onSubmit?.();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Container
      show={show}
      role="dialog"
      aria-modal={show}
      tabIndex={-1}
      aria-labelledby={ariaLabel || ""}
      aria-hidden={!show}
    >
      <Dialog>
        <Content show={show}>
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
                onClick={handleSubmit}
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

/* example 
<BootstrapModal
  show={showImportModal}
  setShow={setShowImportModal}
  ariaLabel="importModal"
  headerTitle="Import"
  showHeaderCloseButton={true}
  onSubmit={handleImport}>
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
</BootstrapModal> 
*/

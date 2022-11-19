import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import { BsList } from "react-icons/bs";

import { mixinBgLv2 } from "../theme/mixins/background";
import { IconWrapper } from "./IconWrapper";
import { ToggleNavDrawer } from "./ToggleNavDrawer";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  height: 50px;
  overflow: hidden;
  display: none;
  padding: 5px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};

  ${mixinBgLv2}

  ${({ theme }) => theme.breakPoint.lg} {
    display: flex;
  }
`;

interface Props {}

export const Header: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  const handleClickListIcon = () => {
    setOpen(true);
  };

  return (
    <>
      <Container>
        <IconWrapper iconSize={30} onClick={handleClickListIcon}>
          <BsList />
        </IconWrapper>
      </Container>
      <ToggleNavDrawer open={open} setOpen={setOpen} />
    </>
  );
};

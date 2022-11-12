import { useRouter } from "next/router";
import type { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import { RiArrowUpSFill } from "react-icons/ri";

import { ActiveLink } from "./ActiveLink";
import type { Lnb } from "../interfaces/lnb";
import { mixinBtnDefault } from "../theme/mixins/button";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;

const Shape = styled.div<{ isActive: boolean }>`
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content;
  align-items: center;
  flex: 1;
  border-radius: 24px;
  padding: 10px 16px;

  background: ${({ theme, isActive }) => (isActive ? theme.activeBgColor : "")};

  &:hover {
    background: ${({ theme }) => theme.hoverBgColor};
  }

  & > a{
    width: 100%;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mixinBtnDefault}
`;

const Label = styled.span``;

const Trailing = styled.span<{ expand: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${({ expand }) => (expand ? "0deg" : "180deg")});

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

const Collapse = styled.div<{ expand: boolean }>`
  overflow: hidden;
  max-height: ${({ expand }) => (expand ? "200px" : "0")};
  transition: max-height 0.5s ease;
`;

const DetailShape = styled(Shape)`
  margin-left: 16px;
`;

interface Props extends Lnb {}

export const NavDrawerItem: FC<Props> = ({ title, href, details }) => {
  const router = useRouter();

  const [expand, setExpand] = useState(false);

  const isActive = router.asPath === href;

  const hasDetail = typeof href === "string";

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <Container>
      <Shape isActive={isActive}>
        {hasDetail ? (
          <ActiveLink href={href}>
            <Label>{title}</Label>
          </ActiveLink>
        ) : (
          <Button type="button" onClick={handleClick}>
            <Label>{title}</Label>
            <Trailing expand={expand}>
              <RiArrowUpSFill />
            </Trailing>
          </Button>
        )}
      </Shape>

      <Collapse expand={expand}>
        {details.map((detail, index) => (
          <DetailShape key={index} isActive={isActive}>
            <ActiveLink href={detail.href}>
              <Label>{detail.title}</Label>
            </ActiveLink>
          </DetailShape>
        ))}
      </Collapse>
    </Container>
  );
};

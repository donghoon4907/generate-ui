import { FC, useState } from "react";
import styled from "styled-components";
import { RiArrowUpSFill } from "react-icons/ri";
import { ActiveLink } from "./ActiveLink";
import { Lnb } from "../interfaces/lnb";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;

const Shape = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content;
  align-items: center;
  flex: 1;
  border-radius: 24px;
  padding: 10px 16px;

  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.0892857rem;

  &:hover {
    background: ${({ theme }) => theme.hoverBgColor};
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const DrawerItem: FC<Props> = ({ title, href, details }) => {
  const [expand, setExpand] = useState(false);

  const hasDetail = typeof href === "string";

  const handleClick = () => {
    setExpand(!expand);
  };

  return (
    <Container>
      <Shape>
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
          <DetailShape key={index}>
            <ActiveLink href={detail.href}>
              <Label>{detail.title}</Label>
            </ActiveLink>
          </DetailShape>
        ))}
      </Collapse>
    </Container>
  );
};

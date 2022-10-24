import { FC, useState } from "react";
import styled from "styled-components";
import { BiHome, BiCode } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineBook } from "react-icons/md";

import { NavItem } from "./NavItem";
import { mixinBgLv2 } from "../theme/mixins/background";
import { NavDrawer } from "./NavDrawer";
import { Gnb } from "../types/gnb";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  position: fixed;
  z-index: 8;
  height: 100%;
  overflow-y: auto;

  ${mixinBgLv2}
`;

const Body = styled.nav`
  display: flex;
  flex-direction: column;

  width: 88px;
  margin-top: 20px;
`;

const gnb: Gnb[] = [
  {
    label: "Home",
    icon: <BiHome />,
    href: "/",
    lnb: []
  },
  {
    label: "Get started",
    icon: <CgMenuGridO />,
    href: "/get-started",
    lnb: []
  },
  {
    label: "Develop",
    icon: <BiCode />,
    href: "/develop",
    lnb: [
      {
        title: "Develop overview",
        href: "/develop",
        details: []
      },
      {
        title: "Android",
        href: null,
        details: [
          {
            title: "MDC-Android",
            href: "/develop/android/mdc-android",
            details: []
          },
          {
            title: "Jetpack Compose",
            href: "/develop/android/jetpack-compose",
            details: []
          }
        ]
      },
      {
        title: "Flutter",
        href: "/develop/flutter",
        details: []
      }
    ]
  },
  {
    label: "Foundations",
    icon: <MdOutlineBook />,
    href: "/develop",
    lnb: [
      {
        title: "Foundations overview",
        href: "/foundations",
        details: []
      },
      {
        title: "Accessibility",
        href: "/foundations",
        details: []
      },
      {
        title: "Adaptive design",
        href: null,
        details: [
          {
            title: "Overview",
            href: "/foundations",
            details: []
          },
          {
            title: "Design for large screens",
            href: "/foundations",
            details: []
          },
          {
            title: "Canonical layouts",
            href: "/foundations",
            details: []
          }
        ]
      }
    ]
  }
];

interface Props {}

export const Nav: FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <Body>
          {gnb.map((g, index) => (
            <NavItem
              key={`gnb${index}`}
              {...g}
              collapseFunc={() => setOpen(g.lnb.length > 0)}
            />
          ))}
        </Body>
      </Container>
      <NavDrawer open={open} collapseFunc={() => setOpen(false)} />
    </>
  );
};

import { FC, useCallback, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { BiHome, BiCode } from "react-icons/bi";
import { CgComponents } from "react-icons/cg";

import { NavItem } from "./NavItem";
import { mixinBgLv2 } from "../theme/mixins/background";
import { NavDrawer } from "./NavDrawer";
import type { Gnb } from "../types/gnb";
import { ThemeMode } from "../types/theme";
import { ToggleThemeMode } from "./ToggleThemeMode";

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

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const gnb: Gnb[] = [
  {
    label: "Home",
    icon: <BiHome />,
    href: "/",
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
    label: "Components",
    icon: <CgComponents />,
    href: "/components",
    lnb: [
      {
        title: "Components overview",
        href: "/components",
        details: []
      },
      {
        title: "Button",
        href: "/components/button",
        details: []
      },
      {
        title: "Input",
        href: "/components/input",
        details: []
      }
    ]
  }
];

interface Props {
  themeMode: ThemeMode;
  toggle: () => void;
}

export const Nav: FC<Props> = ({ themeMode, toggle }) => {
  const [open, setOpen] = useState(false);

  const handleMouseMove = useCallback((evt: MouseEvent) => {
    if (evt.pageX > 350) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
        <Footer>
          <ToggleThemeMode themeMode={themeMode} toggle={toggle} />
        </Footer>
      </Container>
      <NavDrawer open={open} />
    </>
  );
};

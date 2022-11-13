import { BiHome, BiCode } from "react-icons/bi";
import { CgComponents } from "react-icons/cg";

import type { Gnb } from "../../types/gnb";

export const gnbOptions: Gnb[] = [
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

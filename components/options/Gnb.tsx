import { BiHome, BiCode } from "react-icons/bi";
import { CgComponents } from "react-icons/cg";

import type { Gnb } from "../../types/gnb";

export const gnbOptions: Gnb[] = [
  {
    label: "Home",
    icon: <BiHome />,
    href: "/",
    items: []
  },
  {
    label: "Develop",
    icon: <BiCode />,
    href: "/develop",
    items: [
      {
        label: "Develop overview",
        icon: null,
        href: "/develop",
        items: []
      },
      {
        label: "Android",
        icon: null,
        href: undefined,
        items: [
          {
            label: "MDC-Android",
            icon: null,
            href: "/develop/android/mdc-android",
            items: []
          },
          {
            label: "Jetpack Compose",
            icon: null,
            href: "/develop/android/jetpack-compose",
            items: []
          }
        ]
      },
      {
        label: "Flutter",
        icon: null,
        href: "/develop/flutter",
        items: []
      }
    ]
  },
  {
    label: "Components",
    icon: <CgComponents />,
    href: "/components",
    items: [
      {
        label: "Components overview",
        icon: null,
        href: "/components",
        items: []
      },
      {
        label: "Button",
        icon: null,
        href: "/components/button",
        items: []
      },
      {
        label: "Input",
        icon: null,
        href: "/components/input",
        items: []
      }
    ]
  }
];

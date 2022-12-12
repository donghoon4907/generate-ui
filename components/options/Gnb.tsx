import { BiHome, BiCode } from "react-icons/bi";
import { CgComponents } from "react-icons/cg";

import type { Gnb } from "../../types/gnb";

export const gnbOptions: Gnb[] = [
  {
    id: "1",
    label: "Home",
    icon: <BiHome />,
    href: "/",
    items: []
  },
  // {
  //   id: "2",
  //   label: "Develop",
  //   icon: <BiCode />,
  //   href: "/develop",
  //   items: [
  //     {
  //       id: "2-1",
  //       label: "Develop overview",
  //       icon: null,
  //       href: "/develop/index",
  //       items: []
  //     },
  //     {
  //       id: "2-2",
  //       label: "Android",
  //       icon: null,
  //       href: "/develop/android/",
  //       items: [
  //         {
  //           id: "2-2-1",
  //           label: "MDC-Android",
  //           icon: null,
  //           href: "/develop/android/mdc-android",
  //           items: []
  //         },
  //         {
  //           id: "2-2-2",
  //           label: "Jetpack Compose",
  //           icon: null,
  //           href: "/develop/android/jetpack-compose",
  //           items: []
  //         }
  //       ]
  //     },
  //     {
  //       id: "2-3",
  //       label: "Flutter",
  //       icon: null,
  //       href: "/develop/flutter",
  //       items: []
  //     }
  //   ]
  // },
  {
    id: "3",
    label: "Components",
    icon: <CgComponents />,
    href: "/components",
    items: [
      {
        id: "3-1",
        label: "Overview",
        icon: null,
        href: "/components/index",
        items: []
      },
      {
        id: "3-2",
        label: "Button",
        icon: null,
        href: "/components/button",
        items: []
      },
      {
        id: "3-3",
        label: "Input",
        icon: null,
        href: "/components/input",
        items: []
      },
      {
        id: "3-4",
        label: "Checkbox",
        icon: null,
        href: "/components/checkbox",
        items: []
      },
      {
        id: "3-5",
        label: "Select",
        icon: null,
        href: "/components/select",
        items: []
      }
      // {
      //   id: "3-6",
      //   label: "Switch",
      //   icon: null,
      //   href: "/components/switch",
      //   items: []
      // }
    ]
  }
];

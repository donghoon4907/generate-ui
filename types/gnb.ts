import { Lnb } from "./lnb";

export type Gnb = {
  label: string;
  icon: JSX.Element;
  href: string;
  lnb: Lnb[];
};

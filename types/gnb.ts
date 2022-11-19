export type Gnb = {
  label: string;
  icon: JSX.Element | null;
  href: string | undefined;
  items: Gnb[];
};

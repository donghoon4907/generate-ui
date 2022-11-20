export type Gnb = {
  id: string;
  label: string;
  icon: JSX.Element | null;
  href: string;
  items: Gnb[];
};

export type Gnb = {
  id: string;
  label: string;
  icon: JSX.Element | null;
  href: string | undefined;
  items: Gnb[];
};

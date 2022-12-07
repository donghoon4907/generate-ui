export interface SelectOption<T> {
  label: string;
  value: T;
  preview: JSX.Element | null;
}

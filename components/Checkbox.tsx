import type { FC } from "react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: FC<Props> = ({ ...props }) => {
  return <input type="checkbox" {...props} />;
};

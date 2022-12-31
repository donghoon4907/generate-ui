import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";

export const useSubstr: (
  defaultValue: string,
  lastIndex: number
) => [string, Dispatch<SetStateAction<string>>] = (
  defaultValue: string,
  lastIndex: number
) => {
  const [value, setValue] = useState(defaultValue);

  return [value.substring(0, lastIndex) as string, setValue];
};

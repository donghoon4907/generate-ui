import type { Dispatch, SetStateAction } from "react";

export type CoreSetState<T> =
  | Dispatch<SetStateAction<T>>
  | ((state: any) => void);

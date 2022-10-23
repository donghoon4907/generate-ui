import { ThemeMode } from "../types/theme";

export const SET_THEME_MODE = "SET_THEME_MODE";

export type Action = { type: typeof SET_THEME_MODE; payload: ThemeMode };

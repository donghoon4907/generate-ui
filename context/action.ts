import { Gnb } from "../types/gnb";
import { ThemeMode } from "../types/theme";
// wd
export const SET_ACTIVE_WDMENU = "SET_ACTIVE_WDMENU";
// md
export const SET_ACTIVE_MDMENU = "SET_ACTIVE_MDMENU";
// theme
export const SET_ACTIVE_THEME = "SET_ACTIVE_THEME";

export type Action = { type: string; payload: Gnb[] | ThemeMode };

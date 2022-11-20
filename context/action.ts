import { Gnb } from "../types/gnb";
// wd
export const SET_ACTIVE_WDMENU = "SET_ACTIVE_WDMENU";
// md
export const SET_ACTIVE_MDMENU = "SET_ACTIVE_WDMENU";

export type Action = { type: string; payload: Gnb[] };

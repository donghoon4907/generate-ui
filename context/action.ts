import { Lnb } from "../interfaces/lnb";

export const SET_ACTIVE_LNB = "SET_ACTIVE_LNB";

export type Action = { type: typeof SET_ACTIVE_LNB; payload: Lnb[] };

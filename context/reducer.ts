import { Lnb } from "../interfaces/lnb";
import type { Action } from "./action";
import { SET_ACTIVE_LNB } from "./action";

export interface AppState {
  activeLnb: Lnb[];
}

export const initialState: AppState = {
  activeLnb: []
};

export function reducer(state: AppState, { type, payload }: Action): AppState {
  switch (type) {
    case SET_ACTIVE_LNB: {
      return {
        ...state,
        activeLnb: payload
      };
    }

    default:
      return state;
  }
}

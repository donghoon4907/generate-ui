import { Gnb } from "../types/gnb";
import { Action, SET_ACTIVE_MDMENU, SET_ACTIVE_WDMENU } from "./action";

export interface AppState {
  activeWdMenu: Gnb[];
  activeMdMenu: Gnb[];
}

export const initialState: AppState = {
  activeWdMenu: [],
  activeMdMenu: []
};

export function reducer(state: AppState, { type, payload }: Action): AppState {
  switch (type) {
    case SET_ACTIVE_WDMENU: {
      return {
        ...state,
        activeWdMenu: payload
      };
    }
    case SET_ACTIVE_MDMENU: {
      return {
        ...state,
        activeMdMenu: payload
      };
    }

    default:
      return state;
  }
}

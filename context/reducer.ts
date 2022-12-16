import { Gnb } from "../types/gnb";
import { ThemeMode } from "../types/theme";
import {
  Action,
  SET_ACTIVE_MDMENU,
  SET_ACTIVE_THEME,
  SET_ACTIVE_WDMENU
} from "./action";

export interface AppState {
  themeMode: ThemeMode;
  activeWdMenu: Gnb[];
  activeMdMenu: Gnb[];
}

export const initialState: AppState = {
  themeMode: ThemeMode.LIGHT,
  activeWdMenu: [],
  activeMdMenu: []
};

export function reducer(state: AppState, { type, payload }: Action): AppState {
  switch (type) {
    case SET_ACTIVE_WDMENU: {
      return {
        ...state,
        activeWdMenu: payload as Gnb[]
      };
    }
    case SET_ACTIVE_MDMENU: {
      return {
        ...state,
        activeMdMenu: payload as Gnb[]
      };
    }
    case SET_ACTIVE_THEME: {
      return {
        ...state,
        themeMode: payload as ThemeMode
      };
    }
    default:
      return state;
  }
}

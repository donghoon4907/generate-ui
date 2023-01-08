import { Gnb } from "../types/gnb";
import { ThemeMode } from "../types/theme";
import {
  Action,
  SET_ACTIVE_MDMENU,
  SET_ACTIVE_THEME,
  SET_ACTIVE_WDMENU,
  SET_DRAG_ORDER,
  SET_DROP_ORDER
} from "./action";

export interface AppState {
  themeMode: ThemeMode;
  activeWdMenu: Gnb[];
  activeMdMenu: Gnb[];
  dragOrder: number;
  dropOrder: number;
}

export const initialState: AppState = {
  themeMode: ThemeMode.LIGHT,
  activeWdMenu: [],
  activeMdMenu: [],
  dragOrder: -1,
  dropOrder: -1
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
    case SET_ACTIVE_THEME: {
      return {
        ...state,
        themeMode: payload
      };
    }
    case SET_DRAG_ORDER: {
      return {
        ...state,
        dragOrder: payload
      };
    }
    case SET_DROP_ORDER: {
      return {
        ...state,
        dropOrder: payload
      };
    }
    default:
      return state;
  }
}

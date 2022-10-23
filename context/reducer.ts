import { ThemeMode } from "../types/theme";
import { Action, SET_THEME_MODE } from "./action";

export const initialState = {
  themeMode: ThemeMode.LIGHT
};

export type AppState = typeof initialState;

export function reducer(state: AppState, { type, payload }: Action): AppState {
  switch (type) {
    case SET_THEME_MODE: {
      return {
        ...state,
        themeMode: payload
      };
    }

    default:
      return state;
  }
}

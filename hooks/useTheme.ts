import { setCookie } from "cookies-next";

import { ThemeMode } from "../types/theme";
import { useDispatch, useSelector } from "../context";
import constants from "../constants";
import { SET_ACTIVE_THEME } from "../context/action";
import { darkTheme, lightTheme } from "../theme";

export const useTheme = () => {
  const dispatch = useDispatch();

  const { themeMode } = useSelector();

  const theme = themeMode === ThemeMode.LIGHT ? lightTheme : darkTheme;

  const onToggle = () => {
    let nextThemeMode;
    if (themeMode === ThemeMode.DARK) {
      nextThemeMode = ThemeMode.LIGHT;
    } else {
      nextThemeMode = ThemeMode.DARK;
    }

    setCookie(constants.key.cookie, nextThemeMode);

    dispatch({
      type: SET_ACTIVE_THEME,
      payload: nextThemeMode
    });
  };

  return { themeMode, onToggle, theme };
};

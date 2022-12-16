import { useState } from "react";
import { setCookie } from "cookies-next";

import { ThemeMode } from "../types/theme";
import constants from "../constants";

export const useThemeMode = (defaultThemeMode: ThemeMode) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    defaultThemeMode || ThemeMode.LIGHT
  );

  const onToggle = () => {
    if (themeMode === ThemeMode.DARK) {
      setThemeMode(ThemeMode.LIGHT);

      setCookie(constants.key.cookie, ThemeMode.LIGHT);
    } else {
      setThemeMode(ThemeMode.DARK);

      setCookie(constants.key.cookie, ThemeMode.DARK);
    }
  };

  return { themeMode, onToggle };
};

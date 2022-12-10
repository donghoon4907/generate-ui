import { useState } from "react";
import { setCookie } from "cookies-next";

import { COOKIE_THEME_KEY } from "../lib/cookies-next/key";
import { ThemeMode } from "../types/theme";

export const useThemeMode = (defaultThemeMode: ThemeMode) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    defaultThemeMode || ThemeMode.LIGHT
  );

  const onToggle = () => {
    if (themeMode === ThemeMode.DARK) {
      setThemeMode(ThemeMode.LIGHT);

      setCookie(COOKIE_THEME_KEY, ThemeMode.LIGHT);
    } else {
      setThemeMode(ThemeMode.DARK);

      setCookie(COOKIE_THEME_KEY, ThemeMode.DARK);
    }
  };

  return { themeMode, onToggle };
};

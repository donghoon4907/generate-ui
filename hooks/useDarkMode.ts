import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";

import { COOKIE_THEME_KEY } from "../lib/cookies-next/key";
import { ThemeMode } from "../types/theme";

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.LIGHT);

  const onToggle = () => {
    if (themeMode === ThemeMode.DARK) {
      setThemeMode(ThemeMode.LIGHT);

      setCookie(COOKIE_THEME_KEY, ThemeMode.LIGHT);
    } else {
      setThemeMode(ThemeMode.DARK);

      setCookie(COOKIE_THEME_KEY, ThemeMode.DARK);
    }
  };

  useEffect(() => {
    const loadThemeMode = getCookie(COOKIE_THEME_KEY);

    if (loadThemeMode === ThemeMode.DARK) {
      setThemeMode(ThemeMode.DARK);
    }
  }, []);

  return { themeMode, onToggle };
};

import { useTheme as useNextThemesTheme } from "next-themes";

import type UseTheme from "../types/use-theme";
import type UseThemeProps from "../types/use-theme-props";

const useTheme: UseTheme = () => {
  const useThemeProps = useNextThemesTheme() as Omit<
    UseThemeProps,
    "toggleTheme"
  >;

  const toggleTheme: UseThemeProps["toggleTheme"] = () => {
    const currentThemeIndex = useThemeProps.themes.findIndex(
      (theme) => theme === useThemeProps.theme
    );

    const newTheme =
      useThemeProps.themes[
        (currentThemeIndex + 1) % useThemeProps.themes.length
      ];

    useThemeProps.setTheme(newTheme);
    return newTheme;
  };

  return {
    ...useThemeProps,
    toggleTheme,
  };
};

export default useTheme;

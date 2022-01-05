import { useTheme as useNextThemesTheme } from "next-themes";

import type Theme from "@/types/theme";

export type UseThemeProps = {
  /** Forced theme name for the current page */
  forcedTheme?: Theme;
  /** If `enableSystem` is true and the active theme is "system", this returns whether the system preference resolved to "dark" or "light". Otherwise, identical to `theme` */
  resolvedTheme?: Theme;
  /** Update the theme */
  setTheme: (theme: Theme) => void;
  /** If enableSystem is true, returns the System theme preference ("dark" or "light"), regardless what the active theme is */
  systemTheme?: Omit<Theme, "system">;
  /** Active theme name */
  theme?: Theme;
  /** List of all available theme names */
  themes: Theme[];
};

const useTheme = useNextThemesTheme as () => UseThemeProps;

export default useTheme;

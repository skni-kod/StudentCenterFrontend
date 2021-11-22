export type Color =
  | "black"
  | "blue"
  | "cyan"
  | "green"
  | "magenta"
  | "red"
  | "white"
  | "yellow";

export type Severity = "error" | "info" | "warn";

export type Surface = "background" | "foreground";

export const resetCode = "\x1b[0m";

export const colorCodes: Record<Color, number> = {
  black: 0,
  blue: 4,
  cyan: 6,
  green: 2,
  magenta: 5,
  red: 1,
  white: 7,
  yellow: 3,
};

export const surfaceCodes: Record<Surface, number> = {
  background: 4,
  foreground: 3,
};

export const severityColors: Record<Severity, Color> = {
  error: "red",
  info: "cyan",
  warn: "yellow",
};

export const colorOutput = (
  color: Color,
  text: string,
  surface: Surface
): string =>
  `\x1b[${surfaceCodes[surface]}${colorCodes[color]}m${text}${resetCode}`;

export const background = (color: Color, text: string): string =>
  colorOutput(color, text, "background");

export const foreground = (color: Color, text: string): string =>
  colorOutput(color, text, "foreground");

export const alert = (severity: Severity): string =>
  `${foreground(severityColors[severity], severity)} -`;

export const error = (...message: string[]) =>
  console.error(alert("error"), ...message);

export const info = (...message: string[]) =>
  console.log(alert("info"), ...message);

export const warn = (...message: string[]) =>
  console.warn(alert("warn"), ...message);

import IS_DEVELOPMENT from "@/constants/is-development";
import IS_SERVER from "@/constants/is-server";

import type { Color, Logger, Severity, Surface } from "@/types/log";

const resetCode = "\x1b[0m";

const colorCodes: Record<Color, number> = {
  black: 0,
  blue: 4,
  cyan: 6,
  green: 2,
  magenta: 5,
  red: 1,
  white: 7,
  yellow: 3,
};

const severityColors: Record<Severity, Color> = {
  debug: "magenta",
  error: "red",
  info: "cyan",
  warn: "yellow",
};

const severityConsoleMethods: Record<
  Severity,
  "error" | "info" | "log" | "warn"
> = {
  debug: "log",
  error: "error",
  info: "info",
  warn: "warn",
};

export const severityTypes = ["debug", "error", "info", "warn"] as const;

const surfaceCodes: Record<Surface, number> = {
  background: 4,
  foreground: 3,
};

const shouldLog = (severity: Severity): boolean =>
  IS_DEVELOPMENT || severity !== "debug";

const colorOutput = (color: Color, text: string, surface: Surface): string =>
  `\x1b[${surfaceCodes[surface]}${colorCodes[color]}m${text}${resetCode}`;

/*
 * const background = (color: Color, text: string): string =>
 * colorOutput(color, text, "background");
 */

const foreground = (color: Color, text: string): string =>
  colorOutput(color, text, "foreground");

const alert = (severity: Severity): string =>
  `${foreground(severityColors[severity], severity)} -`;

const clientLog: Logger = (severity: Severity, ...message: unknown[]) =>
  shouldLog(severity) &&
  console[severityConsoleMethods[severity]](
    `%c${severity}%c -`,
    `color: ${severityColors[severity]}`,
    "color: initial",
    ...message
  );

const serverLog: Logger = (severity: Severity, ...message: unknown[]) =>
  shouldLog(severity) &&
  console[severityConsoleMethods[severity]](alert(severity), ...message);

const createLogger =
  (severity: Severity) =>
  (...message: unknown[]) =>
    IS_SERVER
      ? serverLog(severity, ...message)
      : clientLog(severity, ...message);

/**
 * Print to the console.
 */
const log = Object.fromEntries(
  severityTypes.map((severity) => [severity, createLogger(severity)])
) as Record<Severity, (...message: unknown[]) => void>;

export default log;

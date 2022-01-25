import { severityTypes } from "@/utilities/log";

export type Color =
  | "black"
  | "blue"
  | "cyan"
  | "green"
  | "magenta"
  | "red"
  | "white"
  | "yellow";

export type Logger = (severity: Severity, ...message: unknown[]) => void;

export type Severity = typeof severityTypes[number];

export type Surface = "background" | "foreground";

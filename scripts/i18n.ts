import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

import prettier, { Options } from "prettier";

import prettierConfig from "../.prettierrc.js";
import getDeepKeys from "../src/utility/deep-keys";
import * as log from "../src/utility/log";

let inputFiles: string[] = [];

const inputPath = path.resolve(__dirname, "../src/locales/en/");
const outputPath = path.resolve(__dirname, "../src/types/i18n.ts");

try {
  inputFiles = readdirSync(inputPath);
} catch (error: unknown) {
  log.error(
    `failed to generate i18n types\n\n${inputPath} directory couldn't be read`,
    error as string
  );
  process.exit(1);
}

if (!inputFiles.length) {
  log.error(`failed to generate i18n types\n\n${inputPath} directory is empty`);
  process.exit(2);
}

const keys: string[] = [];

inputFiles.forEach((file) => {
  const buffer = readFileSync(path.resolve(inputPath, file), {
    encoding: "utf-8",
  });

  const data = JSON.parse(buffer) as Record<string, unknown>;
  const deepKeys = getDeepKeys(data, true);

  deepKeys.forEach((deepKey) => {
    keys.push(`${file.split(".")[0]}:${deepKey}`);
  });
});

if (!keys.length) {
  log.error(
    `failed to generate i18n types\n\n${inputPath} namespaces are empty`
  );
  process.exit(3);
}

const outputString = `${keys.reduce(
  (previous, current, index) =>
    `${previous}${index === 0 ? "" : " | "}"${current}"`,
  "export type I18nKey = "
)}\n\nexport default I18nKey`;

const outputFile: string = prettier.format(outputString, {
  parser: "typescript",
  ...(prettierConfig as Options),
});

try {
  writeFileSync(outputPath, outputFile);
} catch (error: unknown) {
  log.error(
    `failed to generate i18n types\n\ncouldn't write ${outputPath} file`,
    error as string
  );
  process.exit(4);
}

log.info("generated i18n types");

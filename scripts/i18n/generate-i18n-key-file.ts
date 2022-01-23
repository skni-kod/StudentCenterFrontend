import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

import prettier, { Options } from "prettier";

import prettierConfig from "../../.prettierrc.js";
import getDeepKeys from "../../src/utilities/deep-keys";
import log from "../../src/utilities/log";

export class GenerateI18nKeyError extends Error {
  readonly code: number;

  constructor(message: string, code: number) {
    super(`failed to generate i18n types - ${message}\n`);
    this.code = code;
    this.name = this.constructor.name;
  }
}

export class CannotReadDirectoryError extends GenerateI18nKeyError {
  constructor(path: string) {
    super(`cannot read \`${path}\` directory`, 2);
  }
}

export class DirectoryIsEmptyError extends GenerateI18nKeyError {
  constructor(path: string) {
    super(`\`${path}\` directory is empty`, 3);
  }
}

export class NamespacesAreEmptyError extends GenerateI18nKeyError {
  constructor(path: string) {
    super(`\`${path}\` namespaces are empty`, 4);
  }
}

export class CannotWriteFileError extends GenerateI18nKeyError {
  constructor(path: string) {
    super(`cannot write to \`${path}\` file`, 5);
  }
}

export const pluralSuffixes = ["zero", "one", "two", "few", "many", "other"];

export const generateI18nKeyType = (keys: string[]): string => {
  const outputString = `${keys.reduce(
    (previous, current, index) =>
      `${previous}${index === 0 ? "" : " | "}"${current}"`,
    "type I18nKey = "
  )}\n\nexport default I18nKey`;

  const data: string = prettier.format(outputString, {
    parser: "typescript",
    ...(prettierConfig as Options),
  });

  return data;
};

/** Returns array of file names inside of a directory with a given path. */
export const getInputFiles = (path: string): string[] => {
  let inputFiles: string[] = [];

  try {
    inputFiles = readdirSync(path);
  } catch (error: unknown) {
    throw new CannotReadDirectoryError(path);
  }

  if (!inputFiles.length) {
    throw new DirectoryIsEmptyError(path);
  }

  return inputFiles;
};

/** Checks whether a key is a plural suffix. */
export const isPluralSuffix = (key: string): boolean =>
  key !== "" &&
  (pluralSuffixes.includes(key) ||
    (!Number.isNaN(Number(key)) && Number.isInteger(Number(key))));

/** Removes plural suffix from a key. */
export const processDeepKey = (deepKey: string): string => {
  const individualKeys = deepKey.split(".");
  const lastKey = individualKeys[individualKeys.length - 1];

  const lastKeyParts = lastKey.split("_");
  const underscoreSuffix = lastKeyParts[lastKeyParts.length - 1];

  const hasNestedSuffix = individualKeys.length > 1 && isPluralSuffix(lastKey);
  const hasUnderscoreSuffix =
    lastKeyParts.length > 1 && isPluralSuffix(underscoreSuffix);

  if (!hasNestedSuffix && !hasUnderscoreSuffix) {
    return deepKey;
  }

  const deepKeyWithoutLastKey = individualKeys
    .slice(0, individualKeys.length - 1)
    .join(".");

  if (hasNestedSuffix) {
    return deepKeyWithoutLastKey;
  }

  const deepKeyWithoutPluralSuffix = deepKeyWithoutLastKey.length
    ? [
        deepKeyWithoutLastKey,
        lastKeyParts.slice(0, lastKeyParts.length - 1).join(""),
      ].join(".")
    : lastKeyParts.slice(0, lastKeyParts.length - 1).join("");

  return deepKeyWithoutPluralSuffix;
};

/** Parses JSON file into an object. */
export const readJsonFile = (path: string): Record<string, unknown> => {
  const buffer = readFileSync(path, {
    encoding: "utf-8",
  });

  return JSON.parse(buffer) as Record<string, unknown>;
};

/** Generates `I18nKey` type from JSON files inside of an input directory and writes it to the file with a given output path. */
const generateI18nKeyFile = (inputPath: string, outputPath: string): void => {
  try {
    const inputFiles = getInputFiles(inputPath);

    const jsonObjects = inputFiles.map((inputFile) =>
      readJsonFile(path.resolve(inputPath, inputFile))
    );

    const keys = Array.from(
      new Set(
        jsonObjects.reduce<string[]>(
          (keys, jsonObject, index) => [
            ...keys,
            ...getDeepKeys(jsonObject, true).map(
              (deepKey) =>
                `${inputFiles[index].split(".")[0]}:${processDeepKey(deepKey)}`
            ),
          ],
          []
        )
      )
    );

    if (!keys.length) {
      throw new NamespacesAreEmptyError(inputPath);
    }

    const outputData = generateI18nKeyType(keys);

    try {
      const outputDirectory = path.resolve(outputPath, "../");
      mkdirSync(outputDirectory, { recursive: true });
      writeFileSync(outputPath, outputData);
    } catch (error: unknown) {
      throw new CannotWriteFileError(outputPath);
    }

    log.info("generated i18n types");
  } catch (error: unknown) {
    if (error instanceof GenerateI18nKeyError) {
      log.error(error.message, error.stack ?? "");
      process.exit(error.code);
    }

    log.error(error as string);
    process.exit(1);
  }
};

export default generateI18nKeyFile;

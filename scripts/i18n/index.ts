import path from "path";

import generateI18nKeyFile from "./generate-i18n-key-file";

const inputPath = path.resolve(__dirname, "../../src/locales/en/");
const outputPath = path.resolve(
  __dirname,
  "../../src/modules/i18n/types/i18n-key.ts"
);

generateI18nKeyFile(inputPath, outputPath);

import type { TranslationQuery } from "next-translate";

import type I18nKey from "./i18n-key";

type Translate = <T = string>(
  i18nKey: I18nKey,
  query?: TranslationQuery | null,
  options?: {
    default?: string;
    fallback?: string[] | string;
    returnObjects?: boolean;
  }
) => T;

export default Translate;

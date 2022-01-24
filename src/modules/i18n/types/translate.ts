import type { TranslationQuery } from "next-translate";

import type I18nKey from "./i18n-key";

type Translate = <T = string>(
  /** Key of i18n entry. */
  i18nKey: I18nKey,
  /** Query params. */
  query?: TranslationQuery | null,
  options?: {
    /** Default translation for the key. If fallback keys are used, it will be used only after exhausting all the fallbacks. */
    default?: string;
    /** Fallback if `i18nKey` doesn't exist. */
    fallback?: string[] | string;
    /** Get part of the JSON with all the translations. */
    returnObjects?: boolean;
  }
) => T;

export default Translate;

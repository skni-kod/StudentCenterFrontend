import type { TranslationQuery } from "next-translate";
import useNextTranslateTranslation from "next-translate/useTranslation";

import type I18nKey from "@/types/i18n";

export type I18n = {
  lang: string;
  t: Translate;
};

export type Translate = <T = string>(
  i18nKey: I18nKey,
  query?: TranslationQuery | null,
  options?: {
    default?: string;
    fallback?: string[] | string;
    returnObjects?: boolean;
  }
) => T;

const useTranslation = (): I18n => useNextTranslateTranslation();

export default useTranslation;

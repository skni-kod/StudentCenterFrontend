import type { TranslationQuery } from "next-translate";
import useTranslation from "next-translate/useTranslation";

import type I18nKey from "@/types/i18n";

export type TypeSafeI18n = {
  lang: string;
  t: TypeSafeTranslate;
};

export type TypeSafeTranslate = <T = string>(
  i18nKey: I18nKey,
  query?: TranslationQuery | null,
  options?: {
    default?: string;
    fallback?: string[] | string;
    returnObjects?: boolean;
  }
) => T;

const useTypeSafeTranslation = (): TypeSafeI18n => useTranslation();

export default useTypeSafeTranslation;

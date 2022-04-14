import { ReactElement, ReactNode, useEffect, useMemo } from "react";

import { ApplicationPageProps, Component } from "@/types";

import type { Locales } from "./generated-types";
import { default as TypesafeI18nProvider, useI18nContext } from "./react";
import { loadedLocales } from "./utilities";

export type I18nProviderProps = {
  children: ReactNode;
  i18n: ApplicationPageProps["i18n"];
  locale: Locales;
};

export type I18nLocaleChangeProviderProps = {
  children: ReactNode;
  locale: Locales;
};

export const I18nLocaleChangeProvider: Component<
  I18nLocaleChangeProviderProps
> = ({ children, locale }) => {
  const { locale: contextLocale, setLocale } = useI18nContext();

  useEffect(() => {
    if (contextLocale !== locale) {
      setLocale(locale);
    }
  }, [contextLocale, locale, setLocale]);

  return children as ReactElement;
};

export const I18nProvider: Component<I18nProviderProps> = ({
  children,
  i18n,
  locale,
}) => {
  useMemo(() => {
    loadedLocales[locale] = {
      ...loadedLocales[locale],
      ...(i18n ? i18n[locale] : {}),
    };
  }, [i18n, locale]);

  return (
    <TypesafeI18nProvider locale={locale}>
      <I18nLocaleChangeProvider locale={locale}>
        {children}
      </I18nLocaleChangeProvider>
    </TypesafeI18nProvider>
  );
};

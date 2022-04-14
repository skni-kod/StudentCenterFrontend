import type { Locales, Namespaces, Translations } from "./generated-types";

export * from "./generated-types";

export type GetI18nProps = (
  locale: Locales,
  namespaces: Namespaces[]
) => Promise<I18nProps>;

export interface I18nProps {
  i18n: Record<Locales, Translations>;
}

import type { GetI18nProps } from "./types";
import { loadedLocales } from "./utilities";
import { loadLocaleAsync, loadNamespaceAsync } from "./utilities.async";

export const getI18nProps: GetI18nProps = async (locale, namespaces) => {
  await loadLocaleAsync(locale);

  await Promise.all(
    namespaces.map(
      async (namespace) => await loadNamespaceAsync(locale, namespace)
    )
  );

  return {
    i18n: loadedLocales,
  };
};

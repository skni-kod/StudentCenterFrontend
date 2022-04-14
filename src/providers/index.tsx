import { ReactNode } from "react";

import { Router } from "next/router";
import { ThemeProvider } from "next-themes";

import { AnimatePresence } from "framer-motion";

import { I18nProvider, Locales } from "@/modules/i18n";

import type { ApplicationPageProps, Component } from "@/types";

export type ApplicationProviderProps = {
  children: ReactNode;
  pageProps: ApplicationPageProps;
  router: Router;
};

const handleExitComplete = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
};

export const ApplicationProvider: Component<ApplicationProviderProps> = ({
  children,
  pageProps,
  router,
}) => (
  <I18nProvider i18n={pageProps.i18n} locale={router.locale as Locales}>
    <ThemeProvider attribute="class">
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        {children}
      </AnimatePresence>
    </ThemeProvider>
  </I18nProvider>
);

import type { VoidFunctionComponent } from "react";

import type { NextComponentType, NextPage } from "next";
import type { AppContext, AppInitialProps, AppProps } from "next/app";

import type { Locales, Translations } from "@/modules/i18n";

export type Application = NextComponentType<
  ApplicationContext,
  ApplicationInitialProps,
  ApplicationProps
>;

export type ApplicationContext = AppContext;

export type ApplicationInitialProps = AppInitialProps;

export interface ApplicationPageProps {
  i18n?: Record<Locales, Translations>;
}

export interface ApplicationProps extends AppProps {
  pageProps: ApplicationPageProps;
}

export type Component<Props = undefined> = VoidFunctionComponent<Props>;

export type Page<
  Props = Record<string, never>,
  InitialProps = Props
> = NextPage<Props, InitialProps>;

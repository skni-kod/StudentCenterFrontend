import NextHead from "next/head";

import { useTranslation } from "@/modules/i18n";

export type HeadProps = {
  children?: React.ReactNode;
  description?: string;
  title?: string;
};

export const Head = ({ children, description, title }: HeadProps) => {
  const { t } = useTranslation();

  return (
    <NextHead>
      {/* Favicons */}
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/site.webmanifest" rel="manifest" />
      <link color="#3b82f6" href="/safari-pinned-tab.svg" rel="mask-icon" />
      <meta content="#2d89ef" name="msapplication-TileColor" />
      <meta content="#ffffff" name="theme-color" />
      {/* Fonts */}
      <link
        as="font"
        crossOrigin="anonymous"
        href="/fonts/Jost-VF.ttf"
        rel="preload"
        type="font/ttf"
      />
      <link
        as="font"
        crossOrigin="anonymous"
        href="/fonts/Outfit-Medium.woff2"
        rel="preload"
        type="font/woff2"
      />
      {/* Meta tags */}
      <meta
        content={description ?? t("common:app-description")}
        name="description"
      />
      <title>{title ?? t("common:app-name")}</title>
      {children}
    </NextHead>
  );
};

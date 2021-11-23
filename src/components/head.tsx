import React from "react";

import NextHead from "next/head";

import useTypeSafeTranslation from "@/hooks/useTypeSafeTranslation";

export type HeadProps = {
  children?: React.ReactNode;
  description?: string;
  title?: string;
};

const Head = ({ children, description, title }: HeadProps) => {
  const { t } = useTypeSafeTranslation();

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

export default Head;

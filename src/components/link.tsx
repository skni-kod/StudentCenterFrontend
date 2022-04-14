import type { AnchorHTMLAttributes, ReactNode } from "react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";

import { Locales } from "@/modules/i18n";

import type { Component } from "@/types";

export type LinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof NextLinkProps
> &
  Omit<NextLinkProps, "locale"> & {
    children: ReactNode;
    className?: string;
    locale: Locales;
  };

export const Link: Component<LinkProps> = ({
  as,
  children,
  className,
  href,
  locale,
  passHref = false,
  prefetch,
  rel,
  replace,
  scroll,
  shallow,
  target,
  ...props
}) => {
  if (
    (!target && typeof href === "string" && href.startsWith("/")) ||
    typeof href === "object"
  ) {
    return (
      <NextLink
        as={as}
        href={href}
        locale={locale}
        passHref={passHref}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
      >
        {passHref ? (
          children
        ) : (
          <a className={className} {...props}>
            {children}
          </a>
        )}
      </NextLink>
    );
  }

  const relationship =
    target === "_blank"
      ? rel
        ? rel.includes("noreferrer")
          ? rel
          : `noreferrer ${rel}`
        : "noreferrer"
      : rel;

  return (
    <a
      className={className}
      href={href}
      rel={relationship}
      target={target}
      {...props}
    >
      {children}
    </a>
  );
};
